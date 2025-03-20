# User and Captain API Documentation

## 1. User Registration Endpoint

### Endpoint: `/register`

#### Method: `POST`

#### Description:
This endpoint is used to register a new user in the system. It validates the input data, hashes the user's password for secure storage, and creates a new user record in the database. Upon successful registration, a JSON Web Token (JWT) is generated and returned along with the user details.

---

#### Request Body:
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

#### Response:

##### Success Response:
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

##### Error Responses:

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

## 2. User Login Endpoint

### Endpoint: `/login`

#### Method: `POST`

#### Description:
This endpoint is used to authenticate an existing user. It validates the input data, checks the provided credentials against the database, and returns a JSON Web Token (JWT) if the credentials are valid.

---

#### Request Body:
The request body must be sent in JSON format and include the following fields:

| Field      | Type   | Required | Description                                      |
|------------|--------|----------|--------------------------------------------------|
| `email`    | String | Yes      | The email address of the user (must be valid).  |
| `password` | String | Yes      | The password for the user (minimum 6 characters). |

Example request body:
```json
{
    "email": "johndoe@example.com",
    "password": "securepassword"
}
```

---

#### Response:

##### Success Response:
- **Status Code:** `200 OK`
- **Description:** The user was successfully authenticated, and a JWT token is returned.
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

##### Error Responses:

1. **Validation Error:**
   - **Status Code:** `400 Bad Request`
   - **Description:** The input data is invalid or missing required fields.
   - **Response Body:**
   ```json
   {
       "errors": [
           {
               "msg": "Invalid email address",
               "param": "email",
               "location": "body"
           }
       ]
   }
   ```

2. **Invalid Credentials:**
   - **Status Code:** `401 Unauthorized`
   - **Description:** The email or password provided is incorrect.
   - **Response Body:**
   ```json
   {
       "message": "Invalid email or password"
   }
   ```

3. **Server Error:**
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
- The `email` and `password` fields must match an existing user in the database.
- The JWT token can be used for authentication in subsequent requests.

---

### How to Use:
1. Send a `POST` request to `/login` with the required fields in the request body.
2. Ensure the request body passes all validation rules.
3. On success, use the returned JWT token for authentication in other endpoints.

---

## 3. Get User Profile Endpoint

### Endpoint: `/profile`

#### Method: `GET`

#### Description:
This endpoint is used to retrieve the profile of the currently authenticated user. The user must be logged in and provide a valid JWT token.

---

#### Request Headers:
The request must include the following header:

| Header           | Value            | Required | Description                          |
|------------------|------------------|----------|--------------------------------------|
| `Authorization`  | `Bearer <token>` | Yes      | The JWT token of the authenticated user. |

---

#### Response:

##### Success Response:
- **Status Code:** `200 OK`
- **Description:** The user's profile was successfully retrieved.
- **Response Body:**
```json
{
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

##### Error Responses:

1. **Unauthorized:**
   - **Status Code:** `401 Unauthorized`
   - **Description:** The user is not authenticated or the token is invalid.
   - **Response Body:**
   ```json
   {
       "message": "Unauthorized"
   }
   ```

---

## 4. User Logout Endpoint

### Endpoint: `/logout`

#### Method: `GET`

#### Description:
This endpoint is used to log out the currently authenticated user. The user's JWT token is blacklisted to prevent further use.

---

#### Request Headers:
The request must include the following header:

| Header           | Value            | Required | Description                          |
|------------------|------------------|----------|--------------------------------------|
| `Authorization`  | `Bearer <token>` | Yes      | The JWT token of the authenticated user. |

---

#### Response:

##### Success Response:
- **Status Code:** `200 OK`
- **Description:** The user was successfully logged out.
- **Response Body:**
```json
{
    "message": "Logged out successfully"
}
```

##### Error Responses:

1. **Unauthorized:**
   - **Status Code:** `401 Unauthorized`
   - **Description:** The user is not authenticated or the token is invalid.
   - **Response Body:**
   ```json
   {
       "message": "Unauthorized"
   }
   ```

---

### Notes:
- The `/profile` and `/logout` endpoints require the user to be authenticated.
- The JWT token must be included in the `Authorization` header for these endpoints.

---

## 5. Captain Registration Endpoint

### Endpoint: `/captains/register`

#### Method: `POST`

#### Description:
This endpoint is used to register a new captain in the system. It validates the input data, hashes the captain's password for secure storage, and creates a new captain record in the database. Upon successful registration, a JSON Web Token (JWT) is generated and returned along with the captain details.

---

#### Request Body:
The request body must be sent in JSON format and include the following fields:

| Field                     | Type   | Required | Description                                      |
|---------------------------|--------|----------|--------------------------------------------------|
| `fullname.firstname`      | String | Yes      | The first name of the captain (minimum 3 characters). |
| `fullname.lastname`       | String | No       | The last name of the captain (minimum 3 characters). |
| `email`                   | String | Yes      | The email address of the captain (must be valid and unique). |
| `password`                | String | Yes      | The password for the captain (minimum 6 characters). |
| `vehicle.color`           | String | Yes      | The color of the captain's vehicle (minimum 3 characters). |
| `vehicle.capacity`        | Number | Yes      | The capacity of the captain's vehicle (minimum 1). |
| `vehicle.plateNumber`     | String | Yes      | The plate number of the captain's vehicle (minimum 3 characters). |
| `vehicle.vehicleType`     | String | Yes      | The type of the captain's vehicle (must be one of `car`, `bike`, or `auto`). |

Example request body:
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "password": "securepassword",
    "vehicle": {
        "color": "Red",
        "capacity": 4,
        "plateNumber": "ABC123",
        "vehicleType": "car"
    }
}
```

---

#### Response:

##### Success Response:
- **Status Code:** `201 Created`
- **Description:** The captain was successfully registered, and a JWT token is returned.
- **Response Body:**
```json
{
    "token": "your-jwt-token",
    "captain": {
        "_id": "captain-id",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "johndoe@example.com",
        "vehicle": {
            "color": "Red",
            "capacity": 4,
            "plateNumber": "ABC123",
            "vehicleType": "car"
        },
        "status": "inactive"
    }
}
```

##### Error Responses:

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

2. **Captain Already Exists:**
   - **Status Code:** `400 Bad Request`
   - **Description:** A captain with the same email already exists.
   - **Response Body:**
   ```json
   {
       "message": "Captain already exists"
   }
   ```

3. **Server Error:**
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
- The `email` field must be unique. If a captain with the same email already exists, the server will throw an error.
- Passwords are securely hashed before being stored in the database.
- The JWT token can be used for authentication in subsequent requests.

---

### How to Use:
1. Send a `POST` request to `/captains/register` with the required fields in the request body.
2. Ensure the request body passes all validation rules.
3. On success, use the returned JWT token for authentication in other endpoints.

---

## 6. Captain Login Endpoint

### Endpoint: `/captains/login`

#### Method: `POST`

#### Description:
This endpoint is used to authenticate an existing captain. It validates the input data, checks the provided credentials against the database, and returns a JSON Web Token (JWT) if the credentials are valid.

---

#### Request Body:
The request body must be sent in JSON format and include the following fields:

| Field      | Type   | Required | Description                                      |
|------------|--------|----------|--------------------------------------------------|
| `email`    | String | Yes      | The email address of the captain (must be valid). |
| `password` | String | Yes      | The password for the captain (minimum 6 characters). |

Example request body:
```json
{
    "email": "captain@example.com",
    "password": "securepassword"
}
```

---

#### Response:

##### Success Response:
- **Status Code:** `200 OK`
- **Description:** The captain was successfully authenticated, and a JWT token is returned.
- **Response Body:**
```json
{
    "token": "your-jwt-token",
    "captain": {
        "_id": "captain-id",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "captain@example.com",
        "vehicle": {
            "color": "Red",
            "capacity": 4,
            "plateNumber": "ABC123",
            "vehicleType": "car"
        },
        "status": "active"
    }
}
```

##### Error Responses:

1. **Validation Error:**
   - **Status Code:** `400 Bad Request`
   - **Description:** The input data is invalid or missing required fields.
   - **Response Body:**
   ```json
   {
       "errors": [
           {
               "msg": "Invalid email address",
               "param": "email",
               "location": "body"
           }
       ]
   }
   ```

2. **Invalid Credentials:**
   - **Status Code:** `401 Unauthorized`
   - **Description:** The email or password provided is incorrect.
   - **Response Body:**
   ```json
   {
       "message": "Invalid email or password"
   }
   ```

3. **Server Error:**
   - **Status Code:** `500 Internal Server Error`
   - **Description:** An error occurred on the server while processing the request.
   - **Response Body:**
   ```json
   {
       "message": "Error message describing the issue"
   }
   ```

---

## 7. Get Captain Profile Endpoint

### Endpoint: `/captains/profile`

#### Method: `GET`

#### Description:
This endpoint is used to retrieve the profile of the currently authenticated captain. The captain must be logged in and provide a valid JWT token.

---

#### Request Headers:
The request must include the following header:

| Header           | Value            | Required | Description                          |
|------------------|------------------|----------|--------------------------------------|
| `Authorization`  | `Bearer <token>` | Yes      | The JWT token of the authenticated captain. |

---

#### Response:

##### Success Response:
- **Status Code:** `200 OK`
- **Description:** The captain's profile was successfully retrieved.
- **Response Body:**
```json
{
    "captain": {
        "_id": "captain-id",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "captain@example.com",
        "vehicle": {
            "color": "Red",
            "capacity": 4,
            "plateNumber": "ABC123",
            "vehicleType": "car"
        },
        "status": "active"
    }
}
```

##### Error Responses:

1. **Unauthorized:**
   - **Status Code:** `401 Unauthorized`
   - **Description:** The captain is not authenticated or the token is invalid.
   - **Response Body:**
   ```json
   {
       "message": "Unauthorized"
   }
   ```

---

## 8. Captain Logout Endpoint

### Endpoint: `/captains/logout`

#### Method: `GET`

#### Description:
This endpoint is used to log out the currently authenticated captain. The captain's JWT token is blacklisted to prevent further use.

---

#### Request Headers:
The request must include the following header:

| Header           | Value            | Required | Description                          |
|------------------|------------------|----------|--------------------------------------|
| `Authorization`  | `Bearer <token>` | Yes      | The JWT token of the authenticated captain. |

---

#### Response:

##### Success Response:
- **Status Code:** `200 OK`
- **Description:** The captain was successfully logged out.
- **Response Body:**
```json
{
    "message": "Logged out successfully"
}
```

##### Error Responses:

1. **Unauthorized:**
   - **Status Code:** `401 Unauthorized`
   - **Description:** The captain is not authenticated or the token is invalid.
   - **Response Body:**
   ```json
   {
       "message": "Unauthorized"
   }
   ```

---

### Notes:
- The `/captains/profile` and `/captains/logout` endpoints require the captain to be authenticated.
- The JWT token must be included in the `Authorization` header for these endpoints.