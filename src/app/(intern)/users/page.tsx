"use client";
import PageComp from "@/app/components/template/Page";
import Title from "@/app/components/template/Title";
import UserForm from "@/app/components/usuario/UserForm";
import UsersList from "@/app/components/usuario/UsersList";
import { users } from "@/app/data/constants/usuarios";
import useUser from "@/app/data/hooks/useUser";
import Backend from "@/backend";
import { User } from "@/core/model/Usuario";
import { IconPlus, IconUser } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function Page() {
  const { usersArr, setUser, user, save, deleteUser, cancel } = useUser();
  // const [usersArr, setusersArr] = useState<User[]>([]);
  // // pode pegar o usuario ou parte de um ou nulo
  // const [user, setUser] = useState<Partial<User> | null>(null);

  // useEffect(() => {
  //   Backend.users.GetAll().then(setusersArr);
  // }, []);

  // const save = async () => {
  //   if (!user) return;
  //   await Backend.users.SaveUser(user);
  //   const users = await Backend.users.GetAll();
  //   setusersArr(users);
  //   setUser(null);
  // };

  // const deleteUser = async () => {
  //   if (!user || !user.id) return;
  //   await Backend.users.DeleteUser(user.id);
  //   const users = await Backend.users.GetAll();
  //   setusersArr(users);
  //   setUser(null);
  // };

  return (
    <PageComp className="flex flex-col gap-10">
      <Title Icon={IconUser} main="Users" secundary="Register User" />
      {/* <UsersList />{" "} */}

      {user ? (
        <UserForm
          user={user}
          onChange={setUser}
          save={save}
          cancel={() => {
            setUser(null);
          }}
          deleteUser={deleteUser}
        />
      ) : (
        <>
          <div className="flex justify-end">
            <button
              className="text-white flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md"
              onClick={() =>
                setUser({
                  // name: "",
                  // email: "",
                  // password: "",
                })
              }
            >
              <IconPlus />
              New User
            </button>
          </div>
          <UsersList users={usersArr} onClick={setUser} />
        </>
      )}
    </PageComp>
  );
}
