## Signing up

```js
post('https://try--me.herokuapp.com/auth/signup', {
    email,
    password
})
```
Successful Response:
```json
{
    "resp": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzczM2Y2NGMyNmI0NjAwMDQxNmI4OGIiLCJpYXQiOjE1NTEwNTY3NDAsImV4cCI6MTU1NjI0MDc0MH0.RyfdaKzZ7YWBaY-tNPVd1WVzS9kN-wXY4QOWEmhn6Qw",
        "user": {
            "_id": "5c733f64c26b46000416b88b",
            "email": "test@mail.gg",
            "firstName": "test",
            "lastName": "askfj"
        }
    }
}
```
Email already in use:
```json
{
    "error": "E11000 duplicate key error collection: test.users index: email_1 dup key: { : \"test@mail.gg\" }"
}
```

## Logging in

```js
post('https://try--me.herokuapp.com/auth/login', {
    email,
    password
})
```
Successful Response:
```json
{
    "resp": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzczM2Y2NGMyNmI0NjAwMDQxNmI4OGIiLCJpYXQiOjE1NTEwNTg4ODcsImV4cCI6MTU1NjI0Mjg4N30.VslpZrkFNpj0AibiHxwYnLrIbp4AXKrO3WMaOmTpeBY",
        "user": {
            "_id": "5c733f64c26b46000416b88b",
            "email": "email@luc.gg",
            "firstName": "Luc",
            "lastName": "askfj"
        }
    }
}
```
Invalid username/password:
```json
{
    "error": "Invalid credentials."
}
```