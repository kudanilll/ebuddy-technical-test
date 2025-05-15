"use client";

import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { User } from "@repo/shared";
import DashboardCard from "@/components/atoms/card/dashboard";
import UserTable from "@/components/organisms/user-table";

export default function DisplayDataUser() {
  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    async function fetchData() {
      const apiKey = process.env.FIREBASE_API_KEY;
      const data = await fetch(process.env.API_URL + "/fetch-user-data", {
        method: "GET",
        headers: {
          "x-api-key": apiKey!,
        },
      });
      if (data.ok) {
        const userData = await data.json();
        setUserData(userData);
      }
    }

    fetchData();
  }, []);

  return (
    <DashboardCard>
      <Typography variant="h3" color="black" mb={1}>
        Information User
      </Typography>
      <UserTable data={userData} />
    </DashboardCard>
  );
}
