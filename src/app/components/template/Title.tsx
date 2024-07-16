import { ElementType } from "react";

export interface TitleProps {
  main: string;
  secundary: string;
  Icon?: ElementType;
}

export default function Title({ main, secundary, Icon }: TitleProps) {
  return (
    <div className="flex gap-2">
      {Icon ? <Icon size={55} stroke={1} /> : ""}

      <div className="flex flex-col">
        <h1 className="text-2xl font-black">{main}</h1>
        <h2 className="text-zinc-400">{secundary}</h2>
      </div>
    </div>
  );
}
