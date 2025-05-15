"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    setIsLoading(true);
    // Clear auth token
    document.cookie =
      "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/login");
    router.refresh();
  };

  return (
    <Button
      onClick={handleLogout}
      disabled={isLoading}
      loading={isLoading}
      sx={{
        minWidth: 120,
      }}
      color="error"
      variant="outlined"
    >
      <p className="font-bold text-md">Log out</p>
    </Button>
  );
}
