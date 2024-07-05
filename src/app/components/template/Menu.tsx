import MenuItem from "./MenuItem";
import { IconHome, IconUser } from "@tabler/icons-react";

export default function Menu() {
  return (
    <aside className="w-72 bg-zinc-900 h-screen">
      <nav className="flex flex-col gap-1 py-7">
        <MenuItem Icon={IconHome} text="Home" url="/" />
        <MenuItem Icon={IconUser} text="Register user" url="/users" />
      </nav>
    </aside>
  );
}
