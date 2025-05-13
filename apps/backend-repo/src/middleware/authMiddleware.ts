import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();

declare global {
  namespace Express {
    interface Request {
      apiKeyValid?: boolean;
    }
  }
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const apiKey = process.env.FIREBASE_API_KEY;
    if (!apiKey) {
      console.error(
        "'FIREBASE_API_KEY' is not configured in environment variables"
      );
      return res
        .status(500)
        .json({ success: false, message: "Server configuration error" });
    }

    if (req.headers["x-api-key"] !== apiKey) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    req.apiKeyValid = true; // Mark request as authenticated
    next();
  } catch (error) {
    console.error("Error verifying api key:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
