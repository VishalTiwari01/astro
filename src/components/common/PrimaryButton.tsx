import { ButtonHTMLAttributes } from "react";

export default function PrimaryButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`px-6 py-3 rounded-full bg-navy text-white font-semibold hover:bg-navy/90 transition-colors ${props.className || ""}`}
    >
      {props.children}
    </button>
  );
}
