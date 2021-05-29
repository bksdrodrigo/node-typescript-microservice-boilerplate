import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

if (process.env.NODE_ENV !== 'production') dotenv.config();
const port  = process.env.PORT || 3000;
const hostname = process.env.HOST || '0.0.0.0';
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.listen(port, hostname, () => {
  console.log(`Application running on http://${hostname}:${port}`)
})