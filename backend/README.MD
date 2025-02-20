# Mochi Tasks Backend API

## Setting up

**1. Install dependencies**
```
npm install
```

**2. Create env var file**
```
touch .env
```

**3. Define environment variables' values**

```
PORT=<PORT>
FRONT_END_URL=<FRONT_END_URL>
DB_PASSWORD=<DB_PASSWORD>
DB_URI=<DB_URI>
```

**4. Start server**
```
npm run dev
```

## API Endpoints

**1. [Create Task](#1-create-task)**

**2. [Get Tasks](#2-get-all-tasks)**

**3. [Update Task](#3-update-task)**

**4. [Update Task Status](#4-update-task-status)**

**5. [Delete Task](#5-delete-task)**

---

### [1. Create Task](#1-create-task)

**URL: /tasks**

**Method:** POST

**Description:** Creates a new task in the task manager.
  
#### Request 
- **Body:**

```json
{
  "title": "string",        // Title of the task
  "description": "string",  // Description of the task
  "status": "string"        // Status of the task 
}
```

#### Response:
- **Status Code:** 201 Created
- **Body:**

```json
{
  "success": true,
  "data": {
    "id": "string",
    "title": "string",
    "description": "string",
    "status": "string"
  }
}
```

- **Status Code:** 400 Bad Request
- **Body:**

```json
{
  "success": false,
  "message": "Required fields are missing.",
}
```

- **Status Code:** 500 Internal Server Error
- **Body:**

```json
{
  "success": false,
  "message": "Internal server error.",
}
```

---

### [2. Get All Tasks](#2-get-all-tasks)
**URL: /tasks**

**Method: GET**

**Description: Retrieves a list of all tasks.**
    
#### Response:
  - **Status Code:** 200 OK
  - **Body:**

```json
{
  "success": true,
  "data": [{
    "id": "string",
    "title": "string",
    "description": "string",
    "status": "string"
  }]
}
```
- **Status Code:** 404 Not Found
- **Body:**

```json
{
  "success": false,
  "message": "No tasks found.",
}
```

- **Status Code:** 500 Internal Server Error
- **Body:**

```json
{
  "success": false,
  "message": "Internal server error.",
}
```

---

### [3. Update Task](#3-update-task)

**URL: /tasks/:taskId**

**Method: PUT**

**Description: Updates an existing task.**

**Parameters:**
  - **taskId (path parameter):** The unique identifier of the task to update.
 
#### Request **Body:**

```json
{
  "title": "string",
  "description": "string",
  "status": "string"
}
```

#### Response:
  - **Status Code:** 200 OK
  - **Body:**

```json
{
  "success": true,
  "data": {
    "id": "string",
    "title": "string",
    "description": "string",
    "status": "string"
  }
}
```

- **Status Code:** 400 Bad Request
- **Body:**

```json
{
  "success": false,
  "message": "Task ID is missing.",
}
```
```json
{
  "success": false,
  "message": "Required fields are missing.",
}
```

- **Status Code:** 500 Internal Server Error
- **Body:**

```json
{
  "success": false,
  "message": "Internal server error.",
}
```

---

### [4. Update Task Status](#4-update-task-status)

**URL: /tasks/:taskId/status/update/:newStatus**

**Method: PUT**

**Description: Updates an existing task's status.**

**Parameters:**
  - **taskId (path parameter):** The unique identifier of the task to update.
  - **newStatus (path parameter):** The new task status.

#### Request **Body:**

```json
{
  "title": "string",
  "description": "string",
  "status": "string"
}
```

#### Response:
  - **Status Code:** 200 OK
  - **Body:**

```json
{
  "success": true,
  "data": {
    "id": "string",
    "title": "string",
    "description": "string",
    "status": "string"
  }
}
```

- **Status Code:** 400 Bad Request
- **Body:**

```json
{
  "success": false,
  "message": "Task ID is missing.",
}
```
```json
{
  "success": false,
  "message": "Status is missing.",
}
```

- **Status Code:** 500 Internal Server Error
- **Body:**

```json
{
  "success": false,
  "message": "Internal server error.",
}
```

---

### [5. Delete Task](#5-delete-task)

**URL: /tasks/:taskId**

**Method: DELETE**

**Description: Deletes a task by its ID.**

**Parameters:**
  - **taskId (path parameter):** The unique identifier of the task to delete.

#### Response:
  - **Status Code:** 200 OK
  - **Body:**

```json
{
  "success": true,
  "data": {}
}
```

- **Status Code:** 400 Bad Request
- **Body:**

```json
{
  "success": false,
  "message": "Task ID is missing.",
}
```

- **Status Code:** 500 Internal Server Error
- **Body:**

```json
{
  "success": false,
  "message": "Internal server error.",
}
```