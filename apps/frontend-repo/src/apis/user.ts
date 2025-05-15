import { User } from "@repo/shared";

const API_BASE_URL = process.env.API_URL || "http://localhost:8000";
const API_KEY = process.env.FIREBASE_API_KEY;

export const userApi = {
  updateUser: async (user: User): Promise<User> => {
    const response = await fetch(`${API_BASE_URL}/update-user-data`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY!,
      },
      body: JSON.stringify({
        userId: user.id,
        name: user.name,
        email: user.email,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  },
};
