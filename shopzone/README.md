# ShopZone

A modern E-Commerce Single Page Application built with React, React Router, and Context API.

## Features

### Routing
- Home Page
- Shop Page
- Contact Page
- Product Details Page
- Cart Page
- Login Page
- Checkout Page

### Product Management
- Fetches products from DummyJSON API
- Dynamic product details using route parameters
- Product listing with responsive UI

### Cart Functionality
- Add products to cart
- Quantity management
- Cart item count badge
- Total price calculation
- Cart persistence using Local Storage

### Authentication
- Guest Login
- Protected Checkout Route
- Login Persistence
- Logout Functionality

### Checkout
- Customer Information Form
- Order Summary
- Product Preview
- Form Validation
- Order Confirmation Screen

## Technologies Used

- React
- React Router DOM
- Context API
- JavaScript
- CSS3
- Vite
- Local Storage

## API Used

DummyJSON Products API

```text
https://dummyjson.com/products
```

## Installation

Clone the repository:

```bash
git clone <your-github-repository-url>
```

Navigate into project:

```bash
cd shopzone
```

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

## Deployment

Deployed using Vercel.

## Project Structure

```text
src
│
├── components
│   └── Navbar.jsx
│
├── context
│   ├── AuthContext.jsx
│   └── CartContext.jsx
│
├── pages
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   ├── Contact.jsx
│   ├── Login.jsx
│   └── Checkout.jsx
│
├── App.jsx
└── main.jsx
```

## Author

Sathish Racharla