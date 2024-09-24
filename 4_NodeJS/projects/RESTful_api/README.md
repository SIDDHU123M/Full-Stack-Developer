# RESTful API

## Overview
This project is a RESTful API built using Node.js and Express. It provides endpoints to manage items.

## Endpoints
- **GET** `/api/items`: Retrieve all items.
- **GET** `/api/items/:id`: Retrieve a single item by ID.
- **POST** `/api/items`: Create a new item.

## Installation
1. Navigate to the project directory:
   ```bash
   cd RESTful_api
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage
To start the server, run:
```bash
npm start
```

You can access the API at `http://localhost:4000/api/items`.

## Sample Requests
### Get All Items
```bash
curl http://localhost:4000/api/items
```

### Get Item by ID
```bash
curl http://localhost:4000/api/items/1
```

### Create a New Item
```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "New Item"}' http://localhost:4000/api/items
```
