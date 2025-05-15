import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

interface EditUserDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
  children: React.ReactNode;
  title?: string;
}

export default function EditUserDialog({
  open,
  onClose,
  onSave,
  children,
  title = "Edit User",
}: EditUserDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="error">
          Cancel
        </Button>
        <Button onClick={onSave} color="primary" variant="contained">
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
