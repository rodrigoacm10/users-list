import Menu from "./Menu";

export interface PageProps {
  children: any;
  className?: string;
}

export default function Page({ children, className }: PageProps) {
  return (
    <div className="flex">
      <Menu />
      <main className={`flex-1  p-7 ${className ?? ""} `}>{children}</main>
    </div>
  );
}
