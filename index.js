const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const productRouter = require("./routes/products");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user")
const cartRouter = require("./routes/cart")
const orderRouter = require("./routes/order")
const port = 3001;

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/products", productRouter);
app.use('/api/', authRouter)
app.use('/api/users', userRouter)
app.use('/api/orders', orderRouter)
app.use('/api/cart', cartRouter)

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

app.listen(process.env.PORT || port, "0.0.0.0",() =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
