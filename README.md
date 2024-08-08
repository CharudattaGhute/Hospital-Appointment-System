# Appointment Management System - Backend

This repository contains the backend code for an appointment management system built using Node.js, Express, and MongoDB. The system allows for managing patient and doctor data, including adding, retrieving, and logging in users.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
  - [Patient Endpoints](#Patient-endpoints)
  - [Doctor Endpoints](#doctor-endpoints)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)

## Prerequisites

Before you begin, ensure you have met the following requirements:
- You have installed Node.js and npm.
- You have a MongoDB Atlas account or a local MongoDB instance.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/CharudattaGhute/hospital_managment_project.git
  

2 . Install dependencies:
  ```bash
      npm install express
      npm install mongoose
  ```
3. Install nodemon:
   ```bash
       npm install nodemon
   ```
## Configuration
1. Create a .env file in the root directory and add your MongoDB connection string:
   ```bash
       MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.prqkren.mongodb.net/appoinment
    ```
2. Replace <username> and <password> with your MongoDB Atlas credentials.

## API Endpoints
- Add patient
- Add Doctor
- get Appointment
- Method POST
- Body parameters
### {
 ### "patient_name": "John Doe",
 ### "patient_age": 30,
  ### "patient_email": "johndoe@example.com",
  ### "patient_blood": "O+",
  #### "patient_address": "123 Main St",
  #### "patient_password": "password123"
### }

## Doctor Endpoints
- Add Doctor
- Method POST
 ### {
 ### "doctor_name": "Dr. Smith",
 ### "doctor_phone": 1234567890,
###  "doctor_specialist": "Cardiologist",
###  "doctor_email":
"drsmith@example.com",
 ### "doctor_password": "securepassword",
 ### "doctor_address": "456 Elm St"
### }

# Running the Application
- Start the server
  ```bash
      npm start
  ```
# Contributing
- Contributions are always welcome! Please feel free to submit a Pull Request.
  


  

