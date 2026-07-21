import { ButtonHTMLAttributes } from "react";

export default function SecondaryButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`px-6 py-3 rounded-full bg-white/80 border-2 border-white text-navy font-semibold hover:bg-white transition-colors shadow-soft backdrop-blur ${props.className || ""}`}
    >
      {props.children}
    </button>
  );
}
