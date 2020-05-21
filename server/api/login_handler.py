from flask import jsonify, request, Blueprint
from flask_jwt_extended import create_access_token
from util.validation_decorators.validate_login import validate_login

login_handler = Blueprint('login_handler', __name__)

@login_handler.route('/v1/login', methods=['POST'])
@validate_login
def login():
    data = request.get_json()

    token = create_access_token(data['username'])

    return jsonify({'token': token}), 200