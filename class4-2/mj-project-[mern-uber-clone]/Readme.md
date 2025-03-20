# User Registration Endpoint Documentation

## Endpoint: `/register`

### Method: `POST`

### Description:
This endpoint is used to register a new user in the system. It validates the input data, hashes the user's password for secure storage, and creates a new user record in the database. Upon successful registration, a JSON Web Token (JWT) is generated and returned along with the user details.

---

### Request Body:
The request body must be sent in JSON format and include the following fields:

| Field               | Type   | Required | Description                                      |
|---------------------|--------|----------|--------------------------------------------------|
| `fullname.firstname`| String | Yes      | The first name of the user (minimum 3 characters). |
| `fullname.lastname` | String | No       | The last name of the user (minimum 3 characters). |
| `email`             | String | Yes      | The email address of the user (must be valid and unique). |
| `password`          | String | Yes      | The password for the user (minimum 6 characters). |

Example request body:
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "password": "securepassword"
}
```

---

### Response:

#### Success Response:
- **Status Code:** `201 Created`
- **Description:** The user was successfully registered, and a JWT token is returned.
- **Response Body:**
```json
{
    "token": "your-jwt-token",
    "user": {
        "_id": "user-id",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "johndoe@example.com"
    }
}
```

#### Error Responses:

1. **Validation Error:**
   - **Status Code:** `400 Bad Request`
   - **Description:** The input data is invalid or missing required fields.
   - **Response Body:**
   ```json
   {
       "errors": [
           {
               "msg": "First name must be at least 3 characters long",
               "param": "fullname.firstname",
               "location": "body"
           }
       ]
   }
   ```

2. **Server Error:**
   - **Status Code:** `500 Internal Server Error`
   - **Description:** An error occurred on the server while processing the request.
   - **Response Body:**
   ```json
   {
       "message": "Error message describing the issue"
   }
   ```

---

### Notes:
- The `email` field must be unique. If a user with the same email already exists, the server will throw an error.
- Passwords are securely hashed before being stored in the database.
- The JWT token can be used for authentication in subsequent requests.

---

### How to Use:
1. Send a `POST` request to `/register` with the required fields in the request body.
2. Ensure the request body passes all validation rules.
3. On success, use the returned JWT token for authentication in other endpoints.