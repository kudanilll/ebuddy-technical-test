import { User } from "@repo/shared";
import EditUserInput from "@/components/atoms/input/edit-user";

interface UserFormProps {
  user: User;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
}

export default function UserForm({
  user,
  onNameChange,
  onEmailChange,
}: UserFormProps) {
  return (
    <div>
      <EditUserInput label="Name" value={user.name} onChange={onNameChange} />
      <EditUserInput
        label="Email"
        value={user.email}
        onChange={onEmailChange}
        type="email"
      />
      <EditUserInput
        label="Created At"
        value={user.createdAt.toString()}
        disabled
      />
      <EditUserInput
        label="Updated At"
        value={user.updatedAt.toString()}
        disabled
      />
    </div>
  );
}
