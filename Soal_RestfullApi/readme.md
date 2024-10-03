# Product API 

This project provides a RESTful API for managing products using Node.js, Express, and SQLite. The API supports CRUD operations for products.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/product-api.git
    cd product-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ``````

3. Start the server:
    ```bash
    npm run dev
    ```

## API Endpoints

### Create a Product

- **URL:** `/products`
- **Method:** `POST`
- **Request Body:**
    ```json
    {
        "name": "Laprop",
        "desc": "Latest smartphone with amazing features",
        "image": "http://example.com/smartphone.jpg",
        "category_id": 1
    }
    ```
- **Response:**
    ```json
    {
        "message": "Product created successfully",
        "data": {
            "id": 1,
            "name": "Laprop",
            "desc": "Latest smartphone with amazing features",
            "image": "http://example.com/smartphone.jpg",
            "category_id": 1,
            "updatedAt": "2024-10-03T18:39:54.333Z",
            "createdAt": "2024-10-03T18:39:54.333Z"
        }
    }
    ```

### Retrieve All Products

- **URL:** `/products`
- **Method:** `GET`
- **Response:**
    ```json
    [
        {
            "id": 1,
            "name": "Laprop",
            "desc": "Latest smartphone with amazing features",
            "image": "http://example.com/smartphone.jpg",
            "category_id": 1,
            "createdAt": "2024-10-03T18:39:54.333Z",
            "updatedAt": "2024-10-03T18:39:54.333Z"
        }
    ]
    ```

### Retrieve a Product by ID

- **URL:** `/products/:id`
- **Method:** `GET`
- **Response:**
    ```json
    {
        "id": 1,
        "name": "Laprop",
        "desc": "Latest smartphone with amazing features",
        "image": "http://example.com/smartphone.jpg",
        "category_id": 1,
        "createdAt": "2024-10-03T18:39:54.333Z",
        "updatedAt": "2024-10-03T18:39:54.333Z"
    }
    ```

### Update a Product by ID

- **URL:** `/products/:id`
- **Method:** `PUT`
- **Request Body:**
    ```json
    {
        "name": "Updated Laprop",
        "desc": "Updated description with more features",
        "image": "http://example.com/updated_laptop.jpg",
        "category_id": 1
    }
    ```
- **Response:**
    ```json
    {
        "message": "Product updated successfully",
        "data": {
            "id": 1,
            "name": "Updated Laprop",
            "desc": "Updated description with more features",
            "image": "http://example.com/updated_laptop.jpg",
            "category_id": 1,
            "updatedAt": "2024-10-03T18:39:54.333Z",
            "createdAt": "2024-10-03T18:39:54.333Z"
        }
    }
    ```

### Delete a Product by ID

- **URL:** `/products/:id`
- **Method:** `DELETE`
- **Response:**
    ```json
    {
        "message": "Product deleted successfully"
    }
    ```
