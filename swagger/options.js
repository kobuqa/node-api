module.exports = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "The very beginning of my node api",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Kobuqa",
          url: "https://logrocket.com",
          email: "kobuqa@gmail.com",
        },
      },
      servers: [
        {
          url: "http://localhost:8080",
        },
      ],
    },
    apis: ["./routes/*.js"],
  };