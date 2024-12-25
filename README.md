# ferry-rides-backend-assignment

## Description
This is a backend assignment for the company Ferry Rides. The assignment is to create APIs to:
- Register User: Accepts a username and password and returns a success message.
- List Rides: Returns mock ride data (e.g., ride ID, distance, and fare).
- Ride Details: Accepts a ride ID and returns detailed mock data for that ride.

## Technologies Used
- Node.js
- MongoDB
- Nodemon
- Postman

## Libraries Used
- Express
- Mongoose
- Bcrypt
- Dotenv

## Installation
1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Create a `.env` file in the root directory and add the following environment variables:
```
PORT=5000
MONGODB_URI=MONGO_DB_URI=mongodb+srv://users:Wd1GmpTtiP0zYJvB@usersridescluster.ximnr.mongodb.net/users?retryWrites=true&w=majority&appName=usersRidesCluster
```

## Usage
1. Run `npm start` to start the server.
2. Use Postman to test the APIs.

## API Endpoints
1. Register User
- URL: `http://localhost:5000/api/user/register`
- Method: POST
- Request Body: 
```
{
    "username": "testuser",
    "password": "testpassword"
}
```
- Response: 
```
{
    "message": "User registered successfully.",
    "success": true
}
```

2. List Rides
- URL: `http://localhost:5000/api/rides`
- Method: GET
- Response: 
```
[
    {
        "_id": "676c609557425c29f4e3db97",
        "rideId": "UID1",
        "distance": 23,
        "fare": 189
    },
    {
        "_id": "676c611e57425c29f4e3db98",
        "rideId": "UID2",
        "distance": 14,
        "fare": 137
    },
    {
        "_id": "676c613a57425c29f4e3db99",
        "rideId": "UID3",
        "distance": 57,
        "fare": 344
    }
]
```

3. Ride Details
- URL: `http://localhost:5000/api/ride-details/:rideId{used UID3}`
- Method: GET
- Response: 
```
{
    "vehicleDetails": {
        "vehicleType": "SUV",
        "vehicleNumber": "DL5LMN9876",
        "vehicleName": "Mahindra XUV500"
    },
    "pickupDetails": {
        "pickupTime": "2024-12-26T16:00:00Z",
        "pickupLocation": "Gurgaon, Haryana"
    },
    "dropoffDetails": {
        "dropoffTime": "2024-12-26T16:40:00Z",
        "dropoffLocation": "Cyber Hub, Gurgaon"
    },
    "fare": {
        "rideFare": 320,
        "tax": 24,
        "paymentMethod": "Credit Card"
    },
    "_id": "676c6cb557425c29f4e3db9c",
    "rideId": "UID3",
    "driverName": "Neha Sharma",
    "rideDate": "2024-12-26T16:00:00.000Z",
    "rideStatus": "Completed"
}
```