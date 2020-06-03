# `mini project my-todo`

## `TODO Application API`

### Documentation API in POSTMAN


# user/register
```
http://localhost:3000/MyTodoAPI/user/register
```
_Method_
```
    POST
```
_Request Header_
```
{
    empty   
}
```
_Request Body_
```
{   
    "name": "user_test
    "email": "user_test@mail.com",
    "password": "123456"
}

```
_Response (201)_ | Created
```
{
    "status": "success",
    "data": {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo5LCJuYW1lIjoidGVzdCBsb2dpbiIsImVtYWlsIjoidGVzdGxvZ2luQG1haWwuY29tIiwicm9sZSI6Im1lbWJlciJ9LCJpYXQiOjE1OTEwMDUyNTJ9.bT-3aA_G5VtSyOl5BaWiR6t7bGuLJMzWNttIjChEAbg"
    }
}
```


# user/login
```
http://localhost:3000/MyTodoAPI/user/login
```
_Method_
```
    POST
```
_Request Header_
```
{
    empty
}
```
_Request Body_
```
{
    "email": "user_test@mail.com",
    "password": "123456"
}
```
_Response (201)_ | Created
```
{
    "status": "success",
    "data": {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTU5MTAyNjI0MX0.tmthQEe6KBAe23WA_aSHjKNoYQxVaojCRQzuXa66Aio"
    }
}
```

# user/profile
```
http://localhost:3000/MyTodoAPI/user/profile
```
_Method_
```
    GET
```
_Request Header_
```
{
    key : token
    value : access_token response while user login  
}
```
_Request Body_
```
{
    empty
}
```
_Response (200)_ | OK
```
{
    "status": "success",
    "data": {
        "id": 3,
        "name": "user_test",
        "email": "user_test@mail.com"
    }
}
```


# user/updateProfile
```
http://localhost:3000/MyTodoAPI/user/updateProfile
```
_Method_
```
    PUT
```
_Request Header_
```
{
    key : token
    value : access_token response while user login
}
```
_Request Body_
```
{
	"name":"user_test_updated",
	"email":"user_test_updated@mail.com"
}
```
_Response (200)_ | OK
```
{
    "status": "success",
    "data": "Successfully updated!"
}
```

# user/upload
```
http://localhost:3000/MyTodoAPI/user/upload
```
_Method_
```
    PUT
```
_Request Header_
```
{
    key : token
    value : access_token response while user login
}
```
_Request Body form-data_
```
{
	image : choose_file_pict 
}
```
_Response (200)_ | OK
```
{
    "status": "success",
    "data": "Successfully created!"
}
```

# user - todo/create
```
http://localhost:3000/MyTodoAPI/todo/create
```
_Method_
```
    POST
```
_Request Header_
```
{
    key : token
    value : access_token response while user login
}
```
_Request Body_
```
{
	"task":"swimming",
	"description":"swimming with friends",
	"due_date":"2020-7-7",
	"importance":"true",
	"completion":"true"
}
```
_Response (201)_ | Created
```
{
    "status": "success",
    "data": {
        "todo": {
            "id": 1,
            "task": "swimming",
            "description": "swimming with friends",
            "due_date": "2020-07-07",
            "importance": true,
            "completion": true,
            "user_id": 5,
            "updatedAt": "2020-06-01T16:30:58.886Z",
            "createdAt": "2020-06-01T16:30:58.886Z"
        }
    }
}
```

# user - todo/findAll
```
http://localhost:3000/MyTodoAPI/todo/findAll
```
_Method_
```
    GET
```
_Request Header_
```
{
    key : token
    value : access_token response while user login
}
```
_Request Body_
```
{
    empty
}
```
_Response (200)_ | OK
```
{
    "status": "success",
    "data": {   
        "todos": [
            {
                "id": 1,
                "task": "swimming",
                "description": "swimming with friends",
                "due_date": "2020-07-07",
                "importance": true,
                "completion": true,
                "user_id": 5,
                "createdAt": "2020-06-01T16:30:58.886Z",
                "updatedAt": "2020-06-01T16:30:58.886Z"
            },
            {
                "id": 2,
                "task": "swimming 2",
                "description": "swimming with friends 2",
                "due_date": "2020-07-07",
                "importance": true,
                "completion": true,
                "user_id": 5,
                "createdAt": "2020-06-01T16:36:20.190Z",
                "updatedAt": "2020-06-01T16:36:20.190Z"
            },
            {
                "id": 3,
                "task": "swimming 3",
                "description": "swimming with friends 3",
                "due_date": "2020-07-07",
                "importance": true,
                "completion": true,
                "user_id": 5,
                "createdAt": "2020-06-01T16:36:27.158Z",
                "updatedAt": "2020-06-01T16:36:27.158Z"
            }
        ]
    }
}
```


# user - todo/update/:id
```
http://localhost:3000/MyTodoAPI/todo/update/1   
```
_Method_
```
    PUT
```
_Request Header_
```
{
    token : access_token response while user login
}
```
_Request Body_
```
{
	"task":"running",
    "description":"running in the morning",
    "due_date":"2020-07-07",
    "importance":true,
    "completion":true
}
```
_Response (200)_ | OK
```
{
    "status": "success",
    "data": "Successfully updated!"
}
```


# user - todo/delete/:id
```
http://localhost:3000/MyTodoAPI/todo/delete/5
```
_Method_
```
    delete
```
_Request Header_
```
{
    token : access_token response while user login
}
```
_Request Body_
```
{
    empty
}
```
_Response (200)_ | OK
```
{
    "status": "success",
    "data": "Successfully updated!"
}
```


# user - todo/findAllSortedImportanceDesc
```
http://localhost:3000/MyTodoAPI/todo/findAllSortedImportanceDesc
http://localhost:3000/MyTodoAPI/todo/findAllSortedImportanceAsc

http://localhost:3000/MyTodoAPI/todo/findAllSortedCompletionDesc
http://localhost:3000/MyTodoAPI/todo/findAllSortedCompletionAsc
```
_Method_
```
    get
```
_Request Header_
```
{
    key : token
    value : access_token response while user login
}
```
_Request Body_
```
{
    empty
}
```
_Response (200)_ | OK
```
{
    "status": "success",
    "data": {
        "todos": [
            {
                "id": 1,
                "task": "running",
                "description": "running in the morning",
                "due_date": "2020-07-07",
                "importance": true,
                "completion": true,
                "user_id": 2,
                "createdAt": "2020-06-02T07:35:02.653Z",
                "updatedAt": "2020-06-02T07:35:49.592Z"
            },
            {
                "id": 2,
                "task": "test 2",
                "description": "test tambah data 2",
                "due_date": "2020-06-06",
                "importance": true,
                "completion": true,
                "user_id": 2,
                "createdAt": "2020-06-02T07:35:11.721Z",
                "updatedAt": "2020-06-02T07:35:11.721Z"
            }
        ]
    }
}
```


=========================================================================

# admin/login
```
http://localhost:3000/MyTodoAPI/admin/login
```
_Method_
```
    POST
```
_Request Header_
```
{
    empty
}
```
_Request Body_
```
{
    "email": "user_test@mail.com",
    "password": "123456"
}
```
_Response (201)_ | Created
```
{
    "status": "success",
    "data": {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTU5MTAyNTk4OX0.XZr8Jo0qzBrRNLyqjL_We8wFASu6zNaWqgB76TayrQU"
    }
}
```


# admin/findUser/:id
```
http://localhost:3000/MyTodoAPI/admin/findUser/3
```
_Method_
```
    GET
```
_Request Header_
```
{
    key : token
    value : access_token response while admin login
}
```
_Request Body_
```
{
    empty
}
```
_Response (200)_ | Ok
```
{
    "status": "success",
    "data": {
        "id": 3,
        "name": "user_test",
        "email": "user_test@mail.com",
        "password": "$2b$10$9VsYcX3ibo.BX0Jwuu.Qqeqi4xT7AgWYp0sp3GNH7SugbpE2m2LK6",
        "role": "member",
        "image_id": null,
        "createdAt": "2020-06-01T15:31:14.244Z",
        "updatedAt": "2020-06-01T15:31:14.244Z"
    }
}
```

# admin/searchUser : by email
```
http://localhost:3000/MyTodoAPI/admin/searchUser
```
_Method_
```
    POST
```
_Request Header_
```
{
    key : token
    value : access_token response while admin login
}
```
_Request Body_
```
{
	"email":"user_test@mail.com"
}
```
_Response (200)_ | Ok
```
{
    "status": "success",
    "data": [
        {
            "id": 3,
            "name": "user_test",
            "email": "user_test@mail.com",
            "password": "$2b$10$9VsYcX3ibo.BX0Jwuu.Qqeqi4xT7AgWYp0sp3GNH7SugbpE2m2LK6",
            "role": "member",
            "image_id": null,
            "createdAt": "2020-06-01T15:31:14.244Z",
            "updatedAt": "2020-06-01T15:31:14.244Z"
        }
    ]
}
```


# admin/findAllUser
```
http://localhost:3000/MyTodoAPI/admin/findAllUser
```
_Method_
```
    GET
```
_Request Header_
```
{
    key : token
    value : access_token_from_user_while_admin_in
}
```
_Request Body_
```
{
    empty
}
```
_Response (200)_ | Ok
```
{
    "status": "success",
    "data": [
        {
            "id": 1,
            "name": "administrator",
            "email": "admin@mail.com",
            "password": "$2b$10$MTntZPO7yVsL6nEOGYOVlur2kIg7P9BAvlzmUCUWnMWI8yMQKnquC",
            "role": "admin",
            "image_id": null,
            "createdAt": "2020-06-01T15:20:36.355Z",
            "updatedAt": "2020-06-01T15:20:36.355Z"
        },
        {
            "id": 3,
            "name": "user_test",
            "email": "user_test@mail.com",
            "password": "$2b$10$9VsYcX3ibo.BX0Jwuu.Qqeqi4xT7AgWYp0sp3GNH7SugbpE2m2LK6",
            "role": "member",
            "image_id": null,
            "createdAt": "2020-06-01T15:31:14.244Z",
            "updatedAt": "2020-06-01T15:31:14.244Z"
        }
    ]
}
```


# admin/update/:id
```
http://localhost:3000/MyTodoAPI/admin/update/3
```
_Method_
```
    PUT
```
_Request Header_
```
{
    key : token
    value : access_token response while admin login
}
```
_Request Body_
```
{
	"name":"user_updated",
	"email":"user_test@mail.com"
}
```
_Response (201)_ | Created
```
{
    "status": "success",
    "data": "Successfully updated!"
}
```


# admin/delete/:id
```
http://localhost:3000/MyTodoAPI/admin/delete/3
```
_Method_
```
    DELETE
```
_Request Header_
```
{
    key : token
    value : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTU5MTAyNjI0MX0.tmthQEe6KBAe23WA_aSHjKNoYQxVaojCRQzuXa66Aio
}
```
_Request Body_
```
{
	"name":"user_updated",
	"email":"user_test@mail.com"
}
```
_Response (200)_ | OK
```
{
    "status": "success",
    "data": "Successfully deleted!"
}
```