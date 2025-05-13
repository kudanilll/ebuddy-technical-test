import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "../routes/userRoutes";

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use(userRoutes);

// Error handling middleware
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
  },
);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
