const express = require("express");
const app = express();
const port = 5000;

// Route: /

app.get("/", (req, res) => {
    res.status(200).send(`
        <h1>Welcome to My Web Server</h1>
        <p>This is a simple web server deployed on Vercel.</p>
        <p>Feel free to explore the routes below to learn more about me:</p>
        <ul>
            <li><a href="/name">My Name</a></li>
            <li><a href="/hobby">My Hobby</a></li>
            <li><a href="/dream">My Dream</a></li>
        </ul>
    `);
});
// Route: /name
app.get("/name", (req, res) => {
  res.status(200).send("Ephrem Habtamu.");
});

// Route: /hobby
app.get("/hobby", (req, res) => {
  res.status(200).json({ hobby: "Reading book and Listening music" });
});

// Route: /dream
app.get("/dream", (req, res) => {
  res
    .status(200)
    .send(
      "My dream is to build impactful software solutions that change lives."
    );
});

app.listen(port, () => {
  console.log(`Server is running at http://0.0.0.0:${port}`);
});
