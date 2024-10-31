from safrs import SAFRSAPI
import safrs
import importlib
import pathlib
import logging as logging

# use absolute path import for easier multi-{app,model,db} support
database = __import__('database')

app_logger = logging.getLogger(__name__)

app_logger.debug("\napi/expose_api_models.py - endpoint for each table")


def expose_models(api, method_decorators = []): 
    """
        Declare API - on existing SAFRSAPI to expose each model - API automation 
        - Including get (filtering, pagination, related data access) 
        - And post/patch/update (including logic enforcement) 

        Invoked at server startup (api_logic_server_run) 

        You typically do not customize this file 
        - See https://apilogicserver.github.io/Docs/Tutorial/#customize-and-debug 
    """
    api.expose_object(database.models.Category, method_decorators= method_decorators)
    api.expose_object(database.models.DailyGoal, method_decorators= method_decorators)
    api.expose_object(database.models.User, method_decorators= method_decorators)
    api.expose_object(database.models.Dashboard, method_decorators= method_decorators)
    api.expose_object(database.models.Feedback, method_decorators= method_decorators)
    api.expose_object(database.models.PriorityLevel, method_decorators= method_decorators)
    api.expose_object(database.models.ProgressReport, method_decorators= method_decorators)
    api.expose_object(database.models.Reward, method_decorators= method_decorators)
    api.expose_object(database.models.Task, method_decorators= method_decorators)
    api.expose_object(database.models.TaskCategory, method_decorators= method_decorators)
    api.expose_object(database.models.TaskHistory, method_decorators= method_decorators)
    api.expose_object(database.models.UserReward, method_decorators= method_decorators)
    return api
