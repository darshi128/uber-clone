# Backend API Documentation

## `POST /user/register`

Registers a new user and returns an authentication token.

### Description
This endpoint creates a new user account using the provided full name, email, and password. The password is hashed before storing, and a JWT auth token is returned on successful registration.

### Request URL
`POST /user/register`

### Request Body
Content-Type: `application/json`

```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Required Fields
- `fullName.firstName` (string) - at least 3 characters
- `fullName.lastName` (string) - at least 3 characters
- `email` (string) - must be a valid email address
- `password` (string) - at least 5 characters

### Successful Response
Status: `201 Created`

```json
{
  "token": "<jwt-token>",
  "user": {
    "_id": "<user-id>",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

### Error Responses
- `400 Bad Request` - validation errors when required fields are missing or invalid.

Example:

```json
{
  "errors": [
    {
      "msg": "InvalidEmail",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### Notes
- The password field is hashed before saving.
- The returned user object does not include the password.

## `POST /users/login`

Logs in an existing user and returns an authentication token.

### Description
This endpoint validates the user's email and password, then returns a JWT auth token and user details if the credentials are correct.

### Request URL
`POST /users/login`

### Request Body
Content-Type: `application/json`

```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Required Fields
- `email` (string) - must be a valid email address
- `password` (string)

### Successful Response
Status: `200 OK`

```json
{
  "token": "<jwt-token>",
  "user": {
    "_id": "<user-id>",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

### Error Responses
- `400 Bad Request` - validation errors when required fields are missing or invalid.
- `401 Unauthorized` - invalid email or password.

Example:

```json
{
  "message": "Invalid email or password"
}
```

## `POST /users/profile`

Returns the authenticated user's profile data.

### Description
This endpoint returns the currently logged-in user's details. It requires a valid JWT auth token and is protected by the `authMiddleware`.

### Request URL
`POST /users/profile`

### Authentication
- Requires `Authorization` header with a Bearer token: `Authorization: Bearer <jwt-token>`
- The token can also be provided via a `token` cookie.

### Successful Response
Status: `200 OK`

```json
{
  "_id": "<user-id>",
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null
}
```

### Error Responses
- `401 Unauthorized` - missing or invalid authentication token.

## `POST /users/logout`

Logs out the authenticated user and invalidates the current token.

### Description
This endpoint clears the auth token cookie and blacklists the current JWT so it can no longer be used for future requests.

### Request URL
`POST /users/logout`

### Authentication
- Requires `Authorization` header with a Bearer token: `Authorization: Bearer <jwt-token>`
- The token can also be provided via a `token` cookie.

### Successful Response
Status: `200 OK`

```json
{
  "message": "Logged out successfully"
}
```

### Error Responses
- `401 Unauthorized` - missing or invalid authentication token.

## `POST /captains/register`

Registers a new captain and returns an authentication token.

### Description
This endpoint creates a new captain account using the provided full name, email, password, and vehicle details. The password is hashed before saving, and a JWT auth token is returned on successful registration.

### Request URL
`POST /captains/register`

### Request Body
Content-Type: `application/json`

```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123",
  "vehicle": {
    "color": "White",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Required Fields
- `fullName.firstName` (string) - at least 3 characters
- `fullName.lastName` (string)
- `email` (string) - must be a valid email address
- `password` (string) - at least 6 characters
- `vehicle.color` (string) - at least 3 characters
- `vehicle.plate` (string) - at least 3 characters
- `vehicle.capacity` - required
- `vehicle.vehicleType` (string) - must be one of `car`, `motorcycle`, or `truck`

### Successful Response
Status: `201 Created`

```json
{
  "token": "<jwt-token>",
  "captain": {
    "_id": "<captain-id>",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "White",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Error Responses
- `400 Bad Request` - validation errors when required fields are missing or invalid.
- `400 Bad Request` - captain already exists for the provided email.

Example:

```json
{
  "errors": [
    {
      "msg": "invalid email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

```json
{
  "message": "Captain Allready exist"
}
```
