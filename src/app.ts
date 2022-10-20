import express from "express";
require("dotenv").config();

import { api } from "./routes/api";

const app  = express();
const port = process.env.PORT;

app.use("/api", api);

app.listen(port, () => {
    console.log(`⚡️ App running on the port ${port}`);
});