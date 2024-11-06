const express = require('express');
const app = express();
const PORT = 3000;


const details = {
  name: "Veera",
  profession: "Software engineer",
  description: "I am working in XYZ company, living in Bangalore."
};

// Route to display your details
app.get('/', (req, res) => {
  res.send(`
    <h1>Personal Details</h1>
    <p><strong>Name:</strong> ${details.name}</p>
    <p><strong>Profession:</strong> ${details.profession}</p>
    <p><strong>Description:</strong> ${details.description}</p>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});``