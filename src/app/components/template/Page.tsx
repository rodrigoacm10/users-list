import Menu from "./Menu";

export interface PageProps {
  children: any;
}

export default function Page({ children }: PageProps) {
  return (
    <div className="flex">
      <Menu />
      <main className="flex-1 p-7">{children}</main>
    </div>
  );
}
