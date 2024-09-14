# Rent My Ride

Welcome to the **Rent My Ride** project! This service is designed to cater to both tourists and locals, allowing them to rent bikes easily and efficiently. The application provides secure authentication, rental management, and detailed cost calculations for bike rentals based on hourly usage.

## Table of Contents

- [Live-Site](#live-site)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Types of Bikes](#types-of-bikes)
- [Bike Comparison](#bike-comparison)
- [Payments](#payments)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Live-Site

[![Live-server-side]](https://bike-rental-services.vercel.app/)

## Features

- **Secure Authentication and Authorization:** Users are authenticated using JWT tokens and password hashing with bcrypt.
- **View Available Bikes:** Users can view a list of available bikes along with their details and current availability status.
- **Rent Bikes:** Users can rent bikes on an hourly basis, with the system calculating costs based on the rental duration.
- **Return Bikes and Calculate Costs:** Upon returning a bike, the system provides a summary of the rental period and the total cost incurred.
- **User Profile Management:** Users can view and update their profiles.
- **View Rental History:** Users can see a list of their rented bikes and their rental details.
- **Admin Bike Management:** Admins can add, update, and delete bikes in the system.
- **Compare Bikes:** Users can compare different bike models based on price, features, and specifications.
- **Payments Integration:** Users can securely pay for rentals using online payment methods like aamarpay.

## Technology Stack

The following technologies are used in the project:

- **Node.js:** JavaScript runtime built on Chrome's V8 JavaScript engine.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
- **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js.
- **MongoDB:** NoSQL database used to store user, bike, and rental information.
- **Zod:** TypeScript-first schema declaration and validation library.
- **JWT:** JSON Web Token used for securely transmitting information between parties as a JSON object.
- **bcrypt:** Library to help hash passwords.
- **aamarpay:** A payment processing platform used for secure transactions.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AbuBokorprog/bike-rental-services.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```bash
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/bike_rental // your database connection
   SALT= // salt bcrypt
   node_ENV= //development or production
   JWT_ACCESS_SECRET= //jwt_secret_key
   EXPIRES_IN= //expires_in
   aamarpay_SECRET_KEY= // your aamarpay secret key
   ```

4. **Run the server:**

   ```bash
   npm run dev
   ```

## Configuration

Ensure you have a running MongoDB instance. You can set up your MongoDB URI in the `.env` file as shown above.

## Usage

Once the server is running, you can interact with the API using a tool like Postman or through your frontend application. The API listens on the port specified in the `.env` file (default is `5000`).

## API Endpoints

### Authentication

- **Register a new user:**

  ```http
  POST /api/auth/signup
  ```

- **Login a user:**

  ```http
  POST /api/auth/login
  ```

### User Profile

- **Get user profile:**

  ```http
  GET /api/users/me
  ```

### Bikes

- **Create a new bike (Admin only):**

  ```http
  POST /api/bikes
  ```

- **Get all bikes:**

  ```http
  GET /api/bikes
  ```

### Rentals

- **Rent a bike:**

  ```http
  POST /api/rentals
  ```

- **Return a rented bike and calculate the cost (Admin Only):**

  ```http
  POST /api/rentals/id/return
  ```

### Payments

- **Create a payment:**

  ```http
  POST /api/payments/success-payment
  POST /api/payments/failed-payment
  ```

  **Headers:**

  ```http
  Authorization: Bearer jwt_token
  ```

  **Body:**

  ```json
  {
    "amount": 1000, // amount in smallest currency unit (e.g., cents for USD)
    "currency": "BDT"
  }
  ```

- **Complete a payment (Aamar PAY integration):**

  ```http
  POST /api/payments
  ```

## Types of Bikes

Users can choose from a variety of bike types available for rent:

1. **Mountain Bikes:**

   - Ideal for off-road riding and rough terrains.
   - Sturdy frame with shock absorbers.
   - **Price per hour:** $15.

2. **Road Bikes:**

   - Designed for smooth city roads and highways.
   - Lightweight frame and thin tires for speed.
   - **Price per hour:** $12.

3. **Electric Bikes:**

   - Battery-powered bikes for effortless riding.
   - Suitable for long distances or uphill rides.
   - **Price per hour:** $20.

4. **Track Bikes:**

   - Designed for racing or velodrome riding.
   - Single gear, lightweight build for speed.
   - **Price per hour:** $18.

5. **Hybrid Bikes:**
   - Combines features of both road and mountain bikes.
   - Suitable for versatile riding conditions.
   - **Price per hour:** $14.

## Bike Comparison

Users can compare various bikes based on features like:

- **Price per Hour:** Allows users to compare rental costs across different bike types.
- **Engine Capacity (for motorbikes):** Compare bike power in terms of CC for motorbikes.
- **Frame Type:** Users can compare the bike’s build quality.
- **Weight:** Compare bike weights to choose based on user preference.

Example API for comparison:

```http
GET /api/bikes/compare?bike1=mountain&bike2=road
```

Response:

```json
{
  "bike1": {
    "name": "Mountain Bike",
    "pricePerHour": 15,
    "cc": 0,
    "weight": "14kg",
    "type": "Off-road"
  },
  "bike2": {
    "name": "Road Bike",
    "pricePerHour": 12,
    "cc": 0,
    "weight": "9kg",
    "type": "On-road"
  }
}
```

## Payments

The system uses **aamarpay** for secure payments. Users can pay for their rentals through the platform after selecting a bike and renting it. Payments are processed using credit or debit cards.

- **aamarpay API Integration:** The payment flow is handled using aamarpay's payment intent API to ensure secure transactions.
- **Payment Confirmation:** Once a payment is successfully completed, the system will update the rental status.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code addresses the existing style and that you have added tests for any new functionality.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
