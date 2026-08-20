# Simple Blog Post API

This is a simple blog post API assignment built with Express.js. The server runs on port 3000. There is no database; data is stored in memory and is cleared when the server stops.

## Endpoints

- Create a blog post
	- Endpoint: POST /post
	- Body (JSON): { "title": "...", "content": "...", "author": "..." }

- Get a blog post by id
	- Endpoint: GET /post/:id
	- Response: the blog post JSON or 404 if not found

## How to run this project

### Clone the repository:

```bash
git clone https://github.com/AsifMia-dev/Pocket-School.git
```

### Navigate to the assignment folder and initialize:

```bash
cd assignment1
npm init -y
```

### Install dependencies

```bash
npm install express json joi
```
### Run the project

```bash
npm run dev
```

## Test APIs using Postman

## Create user


<img src="./src/assets/Screenshot From 2026-08-20 16-40-45.png" alt="Project Logo" width="900">

#### Postman link
https://asifmia-dev26-5960679.postman.co/workspace/Asif-Mia's-Workspace~561aa9db-3d85-43cd-874b-83e2cc23b53e/request/50299717-6b8e1b8e-ef79-4506-b77a-0e8db0643859?action=share&creator=50299717

### Get Blog 

<img src="./src/assets/Screenshot From 2026-08-20 16-36-21.png" alt="Project Logo" width="900">


#### Postman link
https://asifmia-dev26-5960679.postman.co/workspace/Asif-Mia's-Workspace~561aa9db-3d85-43cd-874b-83e2cc23b53e/request/50299717-1d83ae34-8028-4ef8-967b-567e012778c2?action=share&creator=50299717&ctx=documentation



### Clinet Side Error

<img src="./src/assets/Screenshot From 2026-08-20 16-41-10.png" alt="Project Logo" width="900">