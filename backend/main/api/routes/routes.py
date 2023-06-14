from flask import jsonify, request
from main.api import example_blueprint


@example_blueprint.route('/ola', methods=['GET'])
def get_examples():
    data = {"message": "Recibido kpo", "method": "GET"}
    return jsonify(data), 200


@example_blueprint.route('/', methods=['POST'])
def create_example():
    # request_data = request.get_json()
    data = {"message": "Success", "method": "POST"}
    return jsonify(data), 201
 
