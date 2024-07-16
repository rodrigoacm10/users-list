import Backend from "@/backend";
import { User } from "@/core/model/Usuario";
import { useEffect, useState } from "react";

export default function useUser() {
  const [usersArr, setusersArr] = useState<User[]>([]);
  // pode pegar o usuario ou parte de um ou nulo
  const [user, setUser] = useState<Partial<User> | null>(null);

  useEffect(() => {
    Backend.users.GetAll().then(setusersArr);
  }, []);

  const save = async () => {
    if (!user) return;
    await Backend.users.SaveUser(user);
    const users = await Backend.users.GetAll();
    setusersArr(users);
    setUser(null);
  };

  const deleteUser = async () => {
    if (!user || !user.id) return;
    await Backend.users.DeleteUser(user.id);
    const users = await Backend.users.GetAll();
    setusersArr(users);
    setUser(null);
  };

  return {
    usersArr,
    user,
    save,
    deleteUser,
    setUser,
    cancel: () => setUser(null),
  };
}
