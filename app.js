// Initialize Server:
// Dev Start: npm run dev

// Requires Node Modules
const express = require("express");

// Requires App Routes
const pageRoutes = require("./routes/pageRoutes");
const apiRoutes = require("./routes/apiRoutes");

// Defines Global App Variables
// const PORT = 3000;
// Trying to fix Heroku View Error
const PORT = process.env.PORT || 3000;

// Executes Express Function to Create Application Object (app) using Express Framework
const app = express();

// Defines Database (JSON) and Static Page Management
app.use(express.json());
app.use(express.static("public"));

// Route Handlers for App (HTML) Pages and Database (API)
// WHY DOES API ROUTE HAVE TO BE LISTED FIRST ??? !!!
app.use("/api", apiRoutes);
app.use("/", pageRoutes);

// Initializes Server on Port, PORT
app.listen(PORT, () => {
  console.log(`Note Taker Server is active on Port ${PORT}.`);
});
