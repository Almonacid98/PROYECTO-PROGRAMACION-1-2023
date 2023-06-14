from flask import Blueprint

example_blueprint= Blueprint('example', __name__, url_prefix='/example')

from main.api.routes import routes