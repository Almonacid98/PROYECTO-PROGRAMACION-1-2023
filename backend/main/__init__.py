import os 
from flask import Flask
from dotenv import load_dotenv
from flask_restful import Api
from config import Config


api = Api()

def create_app(config_object='config.DevelopmentConfig'):
    app = Flask(__name__)
    app.config.from_object(config_object)

    from app.api import example_blueprint
    app.register_blueprint(example_blueprint)

    @app.errorhandler(404)
    def not_found(error):
        return {'STATUS': 'NO ESISTE KPO'}, 404

    return app