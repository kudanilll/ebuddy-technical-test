import { IconButton } from "@mui/material";
import { User } from "@repo/shared";
import EditIcon from "@mui/icons-material/Edit";
import EditUser from "@/components/organisms/edit-user";

interface TableActionsProps {
  user: User;
  onEdit: (updatedUser: User) => void;
}

export default function TableActions({ user, onEdit }: TableActionsProps) {
  return (
    <>
      <EditUser user={user} onSave={onEdit}>
        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>
      </EditUser>
    </>
  );
}
