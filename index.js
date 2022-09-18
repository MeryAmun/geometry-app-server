const express = require("express");
const dotEnv = require("dotenv");
const geometryRoute = require("./routes/geometryRoute");
const connectDb = require("./config/config");
dotEnv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({limit:'30mb',extended:true}))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/app-v1", geometryRoute);
app.get("/", (req, res) => {
  res.send("Hello and welcome to Geometry App API");
});
const baseURl = "mongodb+srv://mamba:mamba2021@transport.jlugw.mongodb.net/react-test?retryWrites=true&w=majority";
const PORT = 7000;

const startServer = async () => {
  try {
    await connectDb(process.env.MONGO_URL).then(() => {
      if (PORT === null || PORT === "") {
        PORT = 7000;
      }
      app.listen(PORT, () => {
        console.log(`Listening to ${PORT}`);
      });
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
