// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const postRoutes = require("./routes/posts");

// dotenv.config();

// const app = express();
// app.use(express.json());

// // Routes
// app.use("/posts", postRoutes);

// const PORT = process.env.PORT || 5000;

// // اتصال به MongoDB
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("✅ MongoDB Connected...");
//     app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
//   })
//   .catch((err) => console.error(err));


const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const postRoutes = require("./routes/posts");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

dotenv.config();

const app = express();
app.use(express.json());

// 📌 Swagger Config
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blogging Platform API",
      version: "1.0.0",
      description: "Simple RESTful API for a personal blogging platform",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"], // مسیر فایل‌هایی که داکیومنت‌ها رو داخلشون می‌نویسیم
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// 📌 Routes
app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000;

// 📌 اتصال به MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected...");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));
