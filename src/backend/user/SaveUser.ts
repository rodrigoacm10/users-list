"use server";

import { User } from "@/core/model/Usuario";
import ID from "@/core/utils/Id";
import UserRepo from "./UserRepo";

export default async function SaveUser(user: Partial<User>) {
  const newUser = {
    ...user,
    id: user.id ?? ID.newId,
  };

  return UserRepo.save(newUser as User);
}
