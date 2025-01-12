# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, String, Integer, DateTime, ForeignKey, Text, Boolean
from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy.sql import func
import datetime

Base = declarative_base()

class User(Base):
    """
    description: Represents a user within the task management system.
    """
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String, unique=True, nullable=False)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    join_date = Column(DateTime, default=func.now())

class Task(Base):
    """
    description: Represents a task assigned to a user that needs to be completed.
    """
    __tablename__ = 'task'
    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    due_date = Column(DateTime, nullable=False)
    priority = Column(Integer, nullable=False)
    is_completed = Column(Boolean, default=False)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)

class PriorityLevel(Base):
    """
    description: Defines different levels of priority for tasks.
    """
    __tablename__ = 'priority_level'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    rank = Column(Integer, nullable=False)  # Lower rank means higher priority

class Reward(Base):
    """
    description: Represents a reward for completing tasks on time.
    """
    __tablename__ = 'reward'
    id = Column(Integer, primary_key=True, autoincrement=True)
    description = Column(String, nullable=False)
    points = Column(Integer, nullable=False)
    claim_deadline = Column(DateTime, nullable=True)

class UserReward(Base):
    """
    description: A junction table linking users and rewards they've claimed.
    """
    __tablename__ = 'user_reward'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    reward_id = Column(Integer, ForeignKey('reward.id'), nullable=False)
    claim_date = Column(DateTime, default=func.now(), nullable=False)

class TaskHistory(Base):
    """
    description: Keeps a history of task status changes.
    """
    __tablename__ = 'task_history'
    id = Column(Integer, primary_key=True, autoincrement=True)
    task_id = Column(Integer, ForeignKey('task.id'), nullable=False)
    change_date = Column(DateTime, default=func.now(), nullable=False)
    status = Column(String, nullable=False)

class Category(Base):
    """
    description: Represents a category to which tasks can belong.
    """
    __tablename__ = 'category'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)

class TaskCategory(Base):
    """
    description: A junction table for tasks and categories, allowing many-to-many relationship.
    """
    __tablename__ = 'task_category'
    id = Column(Integer, primary_key=True, autoincrement=True)
    task_id = Column(Integer, ForeignKey('task.id'), nullable=False)
    category_id = Column(Integer, ForeignKey('category.id'), nullable=False)

class Dashboard(Base):
    """
    description: Represents a user dashboard displaying task progress.
    """
    __tablename__ = 'dashboard'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    created_date = Column(DateTime, default=func.now())
    last_updated = Column(DateTime, default=func.now(), onupdate=func.now())

class ProgressReport(Base):
    """
    description: Records detailed progress reports for tasks within a dashboard.
    """
    __tablename__ = 'progress_report'
    id = Column(Integer, primary_key=True, autoincrement=True)
    dashboard_id = Column(Integer, ForeignKey('dashboard.id'), nullable=False)
    report_date = Column(DateTime, default=func.now(), nullable=False)
    tasks_completed = Column(Integer, default=0)
    tasks_pending = Column(Integer, default=0)

class DailyGoal(Base):
    """
    description: Represents daily goals set by a user.
    """
    __tablename__ = 'daily_goal'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    goal_date = Column(DateTime, default=func.now(), nullable=False)
    target_completed_tasks = Column(Integer, nullable=False)
    actual_completed_tasks = Column(Integer, default=0)

class Feedback(Base):
    """
    description: Represents feedback provided by users regarding the task system.
    """
    __tablename__ = 'feedback'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    feedback_date = Column(DateTime, default=func.now(), nullable=False)
    feedback_text = Column(Text, nullable=False)

# Database setup
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite', echo=False)
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()

# Sample Data Insertion
user1 = User(username='john_doe', email='john@example.com', password='securepassword')
user2 = User(username='jane_smith', email='jane@example.com', password='securepassword')
session.add_all([user1, user2])

task1 = Task(title='Complete report', description='Finalize the quarterly report', due_date=datetime.datetime(2023, 12, 1), priority=1, is_completed=False, user_id=1)
task2 = Task(title='Team meeting', description='Attend weekly team sync', due_date=datetime.datetime(2023, 12, 2), priority=2, is_completed=False, user_id=2)
session.add_all([task1, task2])

priority1 = PriorityLevel(name='High', rank=1)
priority2 = PriorityLevel(name='Medium', rank=2)
priority3 = PriorityLevel(name='Low', rank=3)
session.add_all([priority1, priority2, priority3])

reward1 = Reward(description='Gift card', points=50, claim_deadline=datetime.datetime(2023, 12, 31))
reward2 = Reward(description='Extra day off', points=100)
session.add_all([reward1, reward2])

user_reward1 = UserReward(user_id=1, reward_id=1)
session.add(user_reward1)

task_history1 = TaskHistory(task_id=1, status='Completed')
task_history2 = TaskHistory(task_id=2, status='Pending')
session.add_all([task_history1, task_history2])

category1 = Category(name='Work')
category2 = Category(name='Personal')
session.add_all([category1, category2])

task_category1 = TaskCategory(task_id=1, category_id=1)
task_category2 = TaskCategory(task_id=2, category_id=2)
session.add_all([task_category1, task_category2])

dashboard1 = Dashboard(user_id=1)
dashboard2 = Dashboard(user_id=2)
session.add_all([dashboard1, dashboard2])

progress_report1 = ProgressReport(dashboard_id=1, tasks_completed=5, tasks_pending=2)
progress_report2 = ProgressReport(dashboard_id=2, tasks_completed=3, tasks_pending=4)
session.add_all([progress_report1, progress_report2])

daily_goal1 = DailyGoal(user_id=1, goal_date=datetime.datetime(2023, 12, 3), target_completed_tasks=5, actual_completed_tasks=3)
daily_goal2 = DailyGoal(user_id=2, goal_date=datetime.datetime(2023, 12, 3), target_completed_tasks=4, actual_completed_tasks=2)
session.add_all([daily_goal1, daily_goal2])

feedback1 = Feedback(user_id=1, feedback_text='Great system, very helpful!')
feedback2 = Feedback(user_id=2, feedback_text='Could use some improvements.')
session.add_all([feedback1, feedback2])

session.commit()
session.close()
