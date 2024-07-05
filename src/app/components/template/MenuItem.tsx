import Link from "next/link";
import { ElementType } from "react";

export interface MenuItemsProps {
  Icon: ElementType;
  text: string;
  url: string;
}

export default function MenuItem({ Icon, text, url }: MenuItemsProps) {
  return (
    <Link
      href={`${url}`}
      className="flex gap-2 items-center px-4 py-2 hover:bg-black"
    >
      <Icon className="text-zinc-200" size={24} stroke={1} />
      {/* <icon className="text-zinc-200" size={24} stroke={1} /> */}
      <span className="text-zinc-200">{text}</span>
    </Link>
  );
}
