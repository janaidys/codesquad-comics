require("dotenv").config();


require("./config/connection");

require("./config/authStrategy");

// packages
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;
const session = require("express-session");
const passport = require("passport");
const helmet = require("helmet");
const dotenv = require("dotenv");

// define routing variables
const comicsRoutes = require("./routes/comicsRoutes");
const authRoutes = require("./routes/authRoutes");

//middleware

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// public directory is available
app.use(express.static(path.join(__dirname + "/public")));

// 5 GET paths

app.get("/", (request, response, next) => {
  // response
  //   .status(200)
  //   .json({ success: { message: "Index successful" }, statusCode: 200 });
  response.send(
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta   name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test</title>
    </head>
    <body>
    <h1>Test for Deployment</h1>
    <p>Index successful!</p>
    </body>
    </html>
    `
  )
});

app.get("/about", (request, response, next) => {
  //response.send("This route points to the About page")
  response
    .status(200)
    .json({
      success: { message: "This route points to the About page" },
      statusCode: 200,
    });
});

app.get("/login", (request, response, next) => {
  //response.send("This route points to the Login page")
  response
    .status(200)
    .json({
      success: { message: "This route points to the Login page" },
      statusCode: 200,
    });
});

app.get("/admin", (request, response, next) => {
  //response.send("This route points to the Admin page")
  response
    .status(200)
    .json({
      success: { message: "This route points to the Admin page" },
      statusCode: 200,
    });
});

app.get("/admin/create-book", (request, response, next) => {
  //response.send("This route points to the Create Book page")
  response
    .status(200)
    .json({
      success: { message: "This route points to the Create Book page" },
      statusCode: 200,
    });
});

// Route Paths
app.use("/", authRoutes);
app.use("/api/comics", comicsRoutes);

// Server
app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
  //go to localhost
  console.log(`http://localhost:${PORT}/`);
});
