"use client";

import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextFieldProps,
} from "@mui/material";
import { Email } from "@mui/icons-material";

interface EmailInputProps extends Omit<TextFieldProps, "variant"> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EmailInput({
  value,
  onChange,
  fullWidth = true,
  required = true,
}: EmailInputProps) {
  return (
    <FormControl sx={{ m: 1 }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
      <OutlinedInput
        id="email"
        label="Email"
        type="email"
        value={value}
        onChange={onChange}
        fullWidth={fullWidth}
        required={required}
        endAdornment={
          <InputAdornment position="end">
            <Email />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
