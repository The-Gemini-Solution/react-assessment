# Mock API

A simple mock api server implemented using json server. The db is container in a json file, currently consiting of a 
collection of employees only.

## Endpoints available

The mock api exposes the following endpoint & methods:

* GET http://localhost:3000/employees
* POST http://localhost:3000/employees
    ```json
    {
        "id": 99,
        "first_name": "Some",
        "last_name": "User",
        "email": "some-user@mock-api.com"
    }
    ```
* PUT http://localhost:3000/employees/{id}
    ```json
    {
        "first_name": "Update",
        "last_name": "User",
        "email": "update-user@mock-api.com"
    }
    ```
* DELETE http://localhost:3000/employees/{id}

## Instructions

You can use __npm__ or __yarn__. We've used __yarn__ as a default, but feel free to using __npm__

### Yarn steps
1. ```yarn```
2. ```yarn start```

### Npm steps
1. ```npm install```
2. ```npm start```