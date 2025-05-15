"use client";

import { AppBar, Toolbar } from "@mui/material";
import { NavLogo } from "@/components/atoms/nav-logo";
import { LogoutButton } from "@/components/atoms/button";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "background.paper",
        color: "text.primary",
        boxShadow: "none",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <NavLogo />
        <LogoutButton />
      </Toolbar>
    </AppBar>
  );
}
