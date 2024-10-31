# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 31, 2024 12:08:13
# Database: sqlite:////tmp/tmp.0dhhKThgv9/checklist_group/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Category(SAFRSBaseX, Base):
    """
    description: Represents a category to which tasks can belong.
    """
    __tablename__ = 'category'
    _s_collection_name = 'Category'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    TaskCategoryList : Mapped[List["TaskCategory"]] = relationship(back_populates="category")



class PriorityLevel(SAFRSBaseX, Base):
    """
    description: Defines different levels of priority for tasks.
    """
    __tablename__ = 'priority_level'
    _s_collection_name = 'PriorityLevel'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    rank = Column(Integer, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)



class Reward(SAFRSBaseX, Base):
    """
    description: Represents a reward for completing tasks on time.
    """
    __tablename__ = 'reward'
    _s_collection_name = 'Reward'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    description = Column(String, nullable=False)
    points = Column(Integer, nullable=False)
    claim_deadline = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    UserRewardList : Mapped[List["UserReward"]] = relationship(back_populates="reward")



class User(SAFRSBaseX, Base):
    """
    description: Represents a user within the task management system.
    """
    __tablename__ = 'user'
    _s_collection_name = 'User'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    username = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False)
    join_date = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    DailyGoalList : Mapped[List["DailyGoal"]] = relationship(back_populates="user")
    DashboardList : Mapped[List["Dashboard"]] = relationship(back_populates="user")
    FeedbackList : Mapped[List["Feedback"]] = relationship(back_populates="user")
    TaskList : Mapped[List["Task"]] = relationship(back_populates="user")
    UserRewardList : Mapped[List["UserReward"]] = relationship(back_populates="user")



class DailyGoal(SAFRSBaseX, Base):
    """
    description: Represents daily goals set by a user.
    """
    __tablename__ = 'daily_goal'
    _s_collection_name = 'DailyGoal'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    goal_date = Column(DateTime, nullable=False)
    target_completed_tasks = Column(Integer, nullable=False)
    actual_completed_tasks = Column(Integer)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("DailyGoalList"))

    # child relationships (access children)



class Dashboard(SAFRSBaseX, Base):
    """
    description: Represents a user dashboard displaying task progress.
    """
    __tablename__ = 'dashboard'
    _s_collection_name = 'Dashboard'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    created_date = Column(DateTime)
    last_updated = Column(DateTime)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("DashboardList"))

    # child relationships (access children)
    ProgressReportList : Mapped[List["ProgressReport"]] = relationship(back_populates="dashboard")



class Feedback(SAFRSBaseX, Base):
    """
    description: Represents feedback provided by users regarding the task system.
    """
    __tablename__ = 'feedback'
    _s_collection_name = 'Feedback'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    feedback_date = Column(DateTime, nullable=False)
    feedback_text = Column(Text, nullable=False)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("FeedbackList"))

    # child relationships (access children)



class Task(SAFRSBaseX, Base):
    """
    description: Represents a task assigned to a user that needs to be completed.
    """
    __tablename__ = 'task'
    _s_collection_name = 'Task'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    description = Column(Text)
    due_date = Column(DateTime, nullable=False)
    priority = Column(Integer, nullable=False)
    is_completed = Column(Boolean)
    user_id = Column(ForeignKey('user.id'), nullable=False)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("TaskList"))

    # child relationships (access children)
    TaskCategoryList : Mapped[List["TaskCategory"]] = relationship(back_populates="task")
    TaskHistoryList : Mapped[List["TaskHistory"]] = relationship(back_populates="task")



class UserReward(SAFRSBaseX, Base):
    """
    description: A junction table linking users and rewards they've claimed.
    """
    __tablename__ = 'user_reward'
    _s_collection_name = 'UserReward'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    reward_id = Column(ForeignKey('reward.id'), nullable=False)
    claim_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    reward : Mapped["Reward"] = relationship(back_populates=("UserRewardList"))
    user : Mapped["User"] = relationship(back_populates=("UserRewardList"))

    # child relationships (access children)



class ProgressReport(SAFRSBaseX, Base):
    """
    description: Records detailed progress reports for tasks within a dashboard.
    """
    __tablename__ = 'progress_report'
    _s_collection_name = 'ProgressReport'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    dashboard_id = Column(ForeignKey('dashboard.id'), nullable=False)
    report_date = Column(DateTime, nullable=False)
    tasks_completed = Column(Integer)
    tasks_pending = Column(Integer)

    # parent relationships (access parent)
    dashboard : Mapped["Dashboard"] = relationship(back_populates=("ProgressReportList"))

    # child relationships (access children)



class TaskCategory(SAFRSBaseX, Base):
    """
    description: A junction table for tasks and categories, allowing many-to-many relationship.
    """
    __tablename__ = 'task_category'
    _s_collection_name = 'TaskCategory'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    task_id = Column(ForeignKey('task.id'), nullable=False)
    category_id = Column(ForeignKey('category.id'), nullable=False)

    # parent relationships (access parent)
    category : Mapped["Category"] = relationship(back_populates=("TaskCategoryList"))
    task : Mapped["Task"] = relationship(back_populates=("TaskCategoryList"))

    # child relationships (access children)



class TaskHistory(SAFRSBaseX, Base):
    """
    description: Keeps a history of task status changes.
    """
    __tablename__ = 'task_history'
    _s_collection_name = 'TaskHistory'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    task_id = Column(ForeignKey('task.id'), nullable=False)
    change_date = Column(DateTime, nullable=False)
    status = Column(String, nullable=False)

    # parent relationships (access parent)
    task : Mapped["Task"] = relationship(back_populates=("TaskHistoryList"))

    # child relationships (access children)
