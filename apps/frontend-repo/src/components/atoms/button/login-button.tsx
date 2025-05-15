"use client";

import { Button, ButtonProps } from "@mui/material";

interface LoginButtonProps extends ButtonProps {
  isLoading: boolean;
}

export default function LoginButton({
  isLoading,
  disabled,
  ...props
}: LoginButtonProps) {
  return (
    <Button
      {...props}
      disabled={disabled || isLoading}
      loading={isLoading}
      sx={{
        minWidth: 120,
        ...props.sx,
      }}
    >
      <p className="font-bold text-md">Sign In</p>
    </Button>
  );
}
