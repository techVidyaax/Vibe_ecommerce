
# Vibe Commerce

## Overview
Vibe Commerce is a mock e-commerce application built for full-stack testing. Users can view products, add them to a cart, update quantities, and complete a mock checkout. The project demonstrates a full-stack workflow including UI, API, and database integration.

---

## Tech Stack
- **Frontend:** React, React Router, TypeScript  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Other:** REST APIs, Axios, Nodemon  

---

## Features
- View products in a grid with name and price  
- Add products to cart and adjust quantity  
- Remove products from cart  
- View cart total  
- Checkout form with name/email  
- Mock receipt generated after checkout  
- Responsive UI design  

---

## Project Structure
```

/backend       – Node.js/Express server, MongoDB models, controllers, routes
/frontend      – React frontend, pages for Home, Cart, Checkout, Receipt
/frontend/src/api      – Axios API calls
/frontend/src/styles   – CSS styling

````

---

## Setup Instructions

### Backend
1. Navigate to the backend folder:
```bash
cd backend
````

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm run dev
```

> Make sure MongoDB is running locally at `mongodb://127.0.0.1:27017/vibe-commerce`.

### Frontend

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the React app:

```bash
npm run dev
```

4. Open your browser at `http://localhost:5173` (or Vite’s local URL).

---

## Screenshots / Demo

Add screenshots here or provide a Loom/YouTube link to a 1–2 minute demo.

---

## Notes

* Checkout is a mock flow; no real payments.
* Cart and orders are persisted in MongoDB.
* Designed for testing full-stack skills in a short timeframe.

