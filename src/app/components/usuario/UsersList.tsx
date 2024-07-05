import { User } from "@/core/model/Usuario";
import { users } from "../../data/constants/usuarios";
import UserLine from "./UserLine";

export default function UsersList() {
  return (
    <div className="flex gap-4 flex-col">
      {users.map((e: User) => {
        return <UserLine key={e.id} user={e} />;
      })}
    </div>
  );
}
