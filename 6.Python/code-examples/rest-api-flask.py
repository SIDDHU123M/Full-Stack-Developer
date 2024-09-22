from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample data
tasks = [
    {
        'id': 1,
        'title': 'Task 1',
        'description': 'This is task 1',
        'done': False
    },
    {
        'id': 2,
        'title': 'Task 2',
        'description': 'This is task 2',
        'done': False
    }
]

# Get all tasks
@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

# Get a specific task
@app.route('/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    task = next((task for task in tasks if task['id'] == task_id), None)
    if task:
        return jsonify(task)
    else:
        return jsonify({'error': 'Task not found'})

# Create a new task
@app.route('/tasks', methods=['POST'])
def create_task():
    if 'title' in request.json and 'description' in request.json:
        task = {
            'id': len(tasks) + 1,
            'title': request.json['title'],
            'description': request.json['description'],
            'done': False
        }
        tasks.append(task)
        return jsonify(task), 201
    else:
        return jsonify({'error': 'Invalid task data'})

# Update an existing task
@app.route('/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    task = next((task for task in tasks if task['id'] == task_id), None)
    if task:
        if 'title' in request.json:
            task['title'] = request.json['title']
        if 'description' in request.json:
            task['description'] = request.json['description']
        if 'done' in request.json:
            task['done'] = request.json['done']
        return jsonify(task)
    else:
        return jsonify({'error': 'Task not found'})

# Delete a task
@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    task = next((task for task in tasks if task['id'] == task_id), None)
    if task:
        tasks.remove(task)
        return jsonify({'message': 'Task deleted'})
    else:
        return jsonify({'error': 'Task not found'})

if __name__ == '__main__':
    app.run(debug=True)