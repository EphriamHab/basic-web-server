# Basic Web Server

A simple Node.js and Express.js-based web server that responds with static messages for three predefined routes. This project serves as an introduction to backend development.

---
## Features

- **Route 1: `/name`**  
  Responds with the developer's full name in plain text.

- **Route 2: `/hobby`**  
  Responds with a JSON object describing the developer's favorite hobby.

- **Route 3: `/dream`**  
  Responds with a motivational message about the developer's dream or life goal.

---

## Technologies Used

- **Node.js**: For the backend runtime environment.  
- **Express.js**: To handle routing and server functionality.

---
## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/EphriamHab/basic-web-server.git
   cd basic-web-server

2. Install dependencies:
   ```bash
   npm install

3. Start the Sever
   ```bash
   node server.js

4. Open a browser or Postman and test the following routes:
   ```bash
   http://localhost:5000/name
   http://localhost:5000/hobby
   http://localhost:5000/dream

5. Open your browser or Postman and test the routes:


---

## Routes and Expected Responses

| Route     | HTTP Method | Response Type | Example Response                                           |
|-----------|-------------|---------------|-----------------------------------------------------------|
| `/name`   | GET         | Plain text  | `Ephrem Habtamu.`                                             |
| `/hobby`  | GET         | JSON        | `{ "hobby": "Reading book and Listening music" }`                            |
| `/dream`  | GET         | Plain text  | `My dream is to build impactful software solutions that change lives.'`  |

---

## Deployment

This project is deployed online and can be accessed using the following link:  
[Live Server](https://basic-web-server-omega.vercel.app/)

---

## Contributing

Contributions are welcome! To contribute:
1. Fork this repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -m "Description of changes"`).
4. Push to the branch (`git push origin feature-name`).
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. 

---

## Author

Developed by **Ephrem Habtamu**.  
Feel free to reach out for any feedback or collaboration opportunities!
