import { User } from "@/core/model/Usuario";
import InputText from "../shared/InputText";

export interface UserFormProps {
  user: Partial<User>;
  onChange?: (user: Partial<User>) => void;
  save: () => void;
  cancel: () => void;
  deleteUser: () => void;
}

export default function UserForm({
  user,
  onChange,
  save,
  cancel,
  deleteUser,
}: UserFormProps) {
  return (
    <div className="flex flex-col gap-5 ">
      <InputText
        label="Nome"
        type="text"
        value={user.name}
        onChange={(e) => onChange?.({ ...user, name: e.target.value })}
      />
      <InputText
        label="E-mail"
        type="email"
        value={user.email}
        onChange={(e) => onChange?.({ ...user, email: e.target.value })}
      />
      <InputText
        label="Senha"
        type="password"
        value={user.password}
        onChange={(e) => onChange?.({ ...user, password: e.target.value })}
      />
      <div className="flex gap-5 justify-between text-white">
        <div className="flex gap-5">
          {" "}
          <button onClick={save} className="bg-blue-500 px-4 py-2 rounded-md">
            Save
          </button>
          <button onClick={cancel} className="bg-zinc-500 px-4 py-2 rounded-md">
            Cancel
          </button>
        </div>

        <button
          onClick={deleteUser}
          className="bg-red-500 px-4 py-2 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
