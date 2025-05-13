import { db } from "../config/firebaseConfig";
import { User } from "../entities/user";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

const COLLECTION_NAME = "USERS";

export const getAllUsers = async (): Promise<User[]> => {
  try {
    const usersCollection = collection(db, COLLECTION_NAME);
    const snapshot = await getDocs(usersCollection);

    const users: User[] = [];
    snapshot.forEach((doc) => {
      users.push({
        id: doc.id,
        ...doc.data(),
      } as User);
    });

    return users;
  } catch (error) {
    console.error("Error fetching all users:", error);
    throw error;
  }
};

export const getUserData = async (userId: string): Promise<User | null> => {
  const userRef = doc(db, COLLECTION_NAME, userId);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    return userSnap.data() as User;
  }
  return null;
};

export const updateUserData = async (
  userId: string,
  userData: Partial<User>
): Promise<void> => {
  const userRef = doc(db, COLLECTION_NAME, userId);
  await updateDoc(userRef, {
    ...userData,
    updatedAt: new Date(),
  });
};
