import { TextField } from "@mui/material";

interface EditUserInputProps {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  type?: string;
  disabled?: boolean;
}

export default function EditUserInput({
  label,
  value,
  onChange,
  type = "text",
  disabled = false,
}: EditUserInputProps) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      fullWidth
      margin="normal"
      type={type}
      disabled={disabled}
      variant="outlined"
    />
  );
}
