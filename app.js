const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
require('dotenv').config({ path: '.env.' + process.env.NODE_ENV })

const productsRoutes = require('./routes/products')
const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

app.use(productsRoutes)

app.get('/', (req, res) => res.send('<h1> Welcome </h1>'))

const specs = swaggerJsdoc(require('./swagger/options'));

app.use("/api", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(process.env.PORT, () => console.log(`Server has been started on port ${process.env.PORT} 🚀`))