import dotenv from "dotenv";
import express from "express";
import "express-async-errors";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

// Security packages
import rateLimiter from "express-rate-limit";
import helmet from "helmet";
import cors from "cors";
import xss from "xss-clean";

// Implementing Security Packages
app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

(async () => {
  try {
    app.listen(port, () => {
      console.log(`App is listening on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
})();
