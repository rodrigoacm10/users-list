"use server";

import { User } from "@/core/model/Usuario";
import ID from "@/core/utils/Id";
import UserRepo from "./UserRepo";

export default async function GetAll() {
  return UserRepo.getAll();
}