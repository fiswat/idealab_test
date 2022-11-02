//load env
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";
import { db } from "./config/db.js";
import Users from "./models/Users.js";
import UserRoute from "./routes/usersRoute.js";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "40mb" }));

app.use("/api/v1/users", UserRoute);

app.get("/", (req, res) => {
    res.send("welcome to idealab assesment/test ");
});


const start = async (port) => {
    //create table
    await db.query(Users);


    app.listen(port, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("server is running");
    });
};

start(5000);