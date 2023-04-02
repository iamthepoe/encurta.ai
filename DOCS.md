
# API Documentation

## Main Endpoints

### GET /:hash
The route that returns the original URL via its shortening hash.
#### Parameters:
* `:hash` (required): The identifier code of a shorten URL.
#### Request Example:
```
curl -X GET \
     -H "Content-Type: application/json" \
     http://localhost/uR92x
```
#### Successful  Response Example:
```
{
  "body": {
    "data": {
      "originalUrl": "www.mysite.com"
    }
  },
  "error": false,
  "message": "Finded."
}
```
<hr>

### POST /urls
The route responsible for shortening the original URL.
#### Parameters:
* `originalUrl` (required): An original URL that will be shortened.
#### Request Example:
```
curl -X POST \ 
	-H "Authorization: Bearer API_KEY" \ 
	-H "Content-Type: application/json" \ 
	-d '{"originalUrl":"https://www.example.com/very/long/url/to/be/shortened"}'\
	http://localhost/urls
```
#### Successful  Response Example:
```
{
  "body": {
    "data": {
      "originalUrl": "www.john.com",
      "hash": "GZFX6Ax"
    }
  },
  "error": false,
  "message": "Created."
}
```

<hr>

### GET /urls/user
The route responsible for sending all of the requesting user's shortened URLs.
#### Parameters:
* None.
#### Request Example:
```
curl -X GET \ 
	-H "Authorization: Bearer API_KEY" \ 
	-H "Content-Type: application/json" \ 
	http://localhost/urls/user
```
#### Successful  Response Example:
```
{
  "body": {
    "data": {
      "userUrls": [
        {
          "originalUrl": "www.john.com",
          "hash": "GZFX6Ax"
        },
        {
          "originalUrl": "www.doe.com",
          "hash": "WiFzM7m"
        }
      ]
    }
  },
  "error": false,
  "message": "Finded."
}
```

## Authentication Endpoints

### POST /users
The route responsible for create a new account.
#### Parameters:
* `:name` (required).
* `:email` (required).
* `:password` (required).
#### Request Example:
```
curl -X POST \
     -H "Content-Type: application/json" \
     -d '{"name":"john", "email": "johndoe@gmail.com", "password": "strongpassword"}' \
     http://localhost/users
```
#### Successful  Response Example:
```
{
  "body": {
    "data": {
      "token": "yourauthtokengoeshere"
    }
  },
  "error": false,
  "message": "Created."
}
```
<hr>

### POST /users/auth
The route responsible for login a user.
#### Parameters:
* `:email` (required).
* `:password` (required).
#### Request Example:
```
curl -X POST \
     -H "Content-Type: application/json" \
     -d '{"email": "johndoe@gmail.com", "password": "strongpassword"}' \
     http://localhost/users/auth
```
#### Successful  Response Example:
```
{
  "body": {
    "data": {
      "token": "yourauthtokengoeshere"
    }
  },
  "error": false,
  "message": "Ok."
}
```
<hr>
