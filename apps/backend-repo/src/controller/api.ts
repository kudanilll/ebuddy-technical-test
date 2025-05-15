import { Request, Response } from "express";
import {
  getAllUsers,
  getUserData,
  updateUserData,
} from "../repository/userCollection";
import { User } from "@repo/shared";

export const fetchAllUserData = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    res.json(users);
  } catch (error) {
    console.error("Error fetching all users:", error);
    res.status(500).json({
      error: "Internal server error",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const fetchUserData = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId || req.body.userId;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const user = await getUserData(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({
      error: "Internal server error",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId || req.body.userId;
    const userData: Partial<User> = req.body;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    // Validate input data
    if (!userData || Object.keys(userData).length === 0) {
      return res.status(400).json({ error: "No update data provided" });
    }

    await updateUserData(userId, userData);
    res.json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user data:", error);
    res.status(500).json({
      error: "Internal server error",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
