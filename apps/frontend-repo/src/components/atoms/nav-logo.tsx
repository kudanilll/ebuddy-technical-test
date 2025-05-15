import { Typography } from "@mui/material";
import Link from "next/link";

export const NavLogo = () => (
  <Link href="/dashboard" passHref>
    <Typography
      variant="h6"
      component="div"
      sx={{
        flexGrow: 1,
        fontWeight: "bold",
        cursor: "pointer",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      Dashboard
    </Typography>
  </Link>
);
