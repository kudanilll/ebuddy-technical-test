"use client";

import { LoginButton } from "@/components/atoms/button";
import { EmailInput, PasswordInput } from "@/components/atoms/input";
import { Alert, Box, Stack, Typography } from "@mui/material";

export interface LoginFormProps {
  email: string;
  password: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  error?: string;
}

const LoginForm = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  isLoading,
  error,
}: LoginFormProps) => {
  return (
    <Stack
      spacing={2}
      sx={{ width: 400 }}
      className="border border-gray-300 p-8 rounded-lg"
    >
      <Typography variant="h3" component="h1" align="center" fontWeight={600}>
        Login
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <Box component="form" onSubmit={onSubmit} noValidate>
        <Stack spacing={2}>
          <EmailInput value={email} onChange={onEmailChange} />
          <PasswordInput value={password} onChange={onPasswordChange} />
          <LoginButton
            type="submit"
            variant="contained"
            isLoading={isLoading}
            sx={{ mt: 2, py: 1.5 }}
          />
        </Stack>
      </Box>
    </Stack>
  );
};

export default LoginForm;
