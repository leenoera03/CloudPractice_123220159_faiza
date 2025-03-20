import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
app.use(
    cors({
      origin: ['http://35.238.144.225:3000', 'http://192.168.1.11:3000', 'http://localhost:3000'], 
      methods: ["GET", "POST", "PATCH", "DELETE"],
      credentials: true,
    })
  );
app.use(express.json());
app.use(UserRoute);
app.get("/", (req, res) => {
    res.send("Server is running...");
});

// ini ni 
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});


app.listen(5000, '0.0.0.0', () => {
    console.log('Server running on port 5000');
});

