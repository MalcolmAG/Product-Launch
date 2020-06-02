from flask import jsonify, request
from functools import wraps


def validate_files(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        # https://flask.palletsprojects.com/en/1.1.x/patterns/fileuploads/
        # request.files is ImmutableMultiDict([('image', <FileStorage: 'example2.png' ('image/png')>)])

        # File of key image has to exist
        if 'image' not in request.files:
            return jsonify({"error": "file part not present"}), 400

        # If filename doesn't exist
        files = request.files.getlist("image")
        for file in files:
            if file.filename == '':
                return jsonify({"error": "No selected file"}), 400

        folder = request.form["folder"]
        # Must exist
        if not folder:
            return jsonify({"error": "location not present"}), 400

        # Valid folder name
        if folder not in ["project", "user"]:
            return jsonify({"error": "folder not valid, must be 'project' or 'profile'"}), 400

        # if saving to project, project_id must be int
        if request.form["folder"] == "project":
            try:
                project_id = int(request.form["project_id"])
            except:
                return jsonify({"error": "project_id not present. Must be an integer if saving to a project"}), 400

        return f(*args, **kwargs)

    return wrapper
