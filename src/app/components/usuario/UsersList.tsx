import { User } from "@/core/model/Usuario";
import UserLine from "./UserLine";

export interface UserListProps {
  users: User[];
  onClick?: (user: User) => void;
}

export default function UsersList({ users, onClick }: UserListProps) {
  return (
    <div className="flex gap-4 flex-col">
      {users.map((e: User) => {
        return <UserLine key={e.id} user={e} onClick={onClick} />;
      })}
    </div>
  );
}
