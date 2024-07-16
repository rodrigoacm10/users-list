"use client";
import { InputHTMLAttributes } from "react";

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function InputText({ label, ...props }: InputTextProps) {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>
      <input {...props} className="bg-zin-800 p-2 rounded-md outline-md" />
    </div>
  );
}
