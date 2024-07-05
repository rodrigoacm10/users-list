import { User } from "@/core/model/Usuario";
import Image from "next/image";

export interface UserLineProps {
  user: User;
}

export default function UserLine({ user }: UserLineProps) {
  return (
    <div className="flex items-center gap-5 rounded-md bg-zinc-900 p-4">
      <Image
        src="http://source.unsplash.com/random/80x80?avatar"
        width={80}
        height={80}
        className="rounded-full"
        alt="avatar"
      />
      <div className="flex flex-col">
        <span className="text-xl font-black">{user.name}</span>
        <span className="text-sm text-zinc-400">{user.email}</span>
      </div>
    </div>
  );
}
