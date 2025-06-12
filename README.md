[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19754416&assignment_repo_type=AssignmentRepo)
# Express.js RESTful API Assignment

This assignment focuses on building a RESTful API using Express.js, implementing proper routing, middleware, and error handling.

## Assignment Overview

You will:
1. Set up an Express.js server
2. Create RESTful API routes for a product resource
3. Implement custom middleware for logging, authentication, and validation
4. Add comprehensive error handling
5. Develop advanced features like filtering, pagination, and search

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Run the server:
   ```
   npm start
   ```

## Files Included

- `Week2-Assignment.md`: Detailed assignment instructions
- `server.js`: Starter Express.js server file
- `.env.example`: Example environment variables file

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Postman, Insomnia, or curl for API testing

## API Endpoints

The API will have the following endpoints:

- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get a specific product
- `POST /api/products`: Create a new product
- `PUT /api/products/:id`: Update a product
- `DELETE /api/products/:id`: Delete a product

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all the required API endpoints
2. Implement the middleware and error handling
3. Document your API in the README.md
4. Include examples of requests and responses

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [RESTful API Design Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)


## 🚀 How to Run the Server

1. **Clone the repository:**
   ```
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env` and fill in the required values (e.g., `MONGODB_URI`, `PORT`, `API_KEY`, `JWT_SECRET`).

4. **Start the server:**
   ```
   npm start
   ```
   or for development with auto-reload:
   ```
   npm run dev
   ```

5. **Server will run at:**  
   `http://localhost:3000` (unless you set a different port)

---

## 📚 API Endpoints Documentation

| Method | Endpoint                | Description                        |
|--------|-------------------------|------------------------------------|
| GET    | `/product`              | List all products                  |
| GET    | `/product/:id`          | Get a product by MongoDB `_id`     |
| GET    | `/product/uuid/:uuid`   | Get a product by UUID              |
| POST   | `/product`              | Create a new product               |
| POST   | `/product/bulk`         | Bulk create products (array input) |
| PUT    | `/product/:id`          | Update a product by `_id`          |
| DELETE | `/product/:id`          | Delete a product by `_id`          |
| GET    | `/product/stats`        | Get product statistics by category |

---

## 📝 Example Requests & Responses

### Create a Product

**POST** `/product`
```json
{
  "name": "Wireless Mouse",
  "description": "A smooth and responsive wireless mouse.",
  "price": 19.99,
  "category": "Electronics",
  "inStock": true
}
```
**Response:**
```json
{
  "message": "Product created successfully",
  "product": {
    "_id": "60f8c2b8e1b1a2b3c4d5e6f7",
    "uuid": "7f90bfa6-2b83-49d4-bc83-3af0202edfec",
    "name": "Wireless Mouse",
    "description": "A smooth and responsive wireless mouse.",
    "price": 19.99,
    "category": "Electronics",
    "inStock": true,
    "__v": 0
  }
}
```

---

### Get All Products

**GET** `/product`

**Response:**
```json
{
  "message": "Products fetched successfully",
  "products": [
    {
      "_id": "...",
      "uuid": "...",
      "name": "...",
      "description": "...",
      "price": ...,
      "category": "...",
      "inStock": ...
    },
    ...
  ]
}
```

---

### Get Product Statistics

**GET** `/product/stats`

**Response:**
```json
{
  "stats": [
    { "_id": "Electronics", "count": 3 },
    { "_id": "Home", "count": 2 }
  ]
}
```

---

### Error Example

**GET** `/product/invalidid`

**Response:**
```json
{
  "error": "Product fetching failed!",
  "details": "Cast to ObjectId failed for value \"invalidid\" at path \"_id\" for model \"Product\""
}
```

---

> For more endpoints and details, see the code comments or test with Postman!