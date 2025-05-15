"use client";

import { useState } from "react";
import { User } from "@repo/shared";
import EditUserDialog from "@/components/atoms/edit-user-dialog";
import UserForm from "@/components/molecules/form/edit-user";

interface EditUserProps {
  user: User;
  onSave: (updatedUser: User) => void;
  children?: React.ReactNode;
}

export default function EditUser({ user, onSave, children }: EditUserProps) {
  const [open, setOpen] = useState(false);
  const [editedUser, setEditedUser] = useState<User>({ ...user });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEditedUser({ ...user }); // Reset form on close
  };

  const handleSave = () => {
    onSave(editedUser);
    setOpen(false);
  };

  const handleNameChange = (name: string) => {
    setEditedUser({ ...editedUser, name });
  };

  const handleEmailChange = (email: string) => {
    setEditedUser({ ...editedUser, email });
  };

  return (
    <>
      <div onClick={handleOpen}>{children}</div>
      <EditUserDialog open={open} onClose={handleClose} onSave={handleSave}>
        <UserForm
          user={editedUser}
          onNameChange={handleNameChange}
          onEmailChange={handleEmailChange}
        />
      </EditUserDialog>
    </>
  );
}
