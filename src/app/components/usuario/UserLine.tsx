import { User } from "@/core/model/Usuario";
import Image from "next/image";

export interface UserLineProps {
  user: User;
  onClick?: (user: User) => void;
}

export default function UserLine({ user, onClick }: UserLineProps) {
  return (
    <div
      onClick={() => onClick?.(user)}
      className="flex items-center gap-5 rounded-md bg-zinc-900 p-4 cursor-pointer"
    >
      <Image
        src="http://source.unsplash.com/random/80x80?avatar"
        width={80}
        height={80}
        className="rounded-full"
        alt="avatar"
      />
      <div className="flex flex-col">
        <span className="text-xl text-white">{user.name}</span>
        <span className="text-sm text-zinc-400">{user.email}</span>
      </div>
    </div>
  );
}
