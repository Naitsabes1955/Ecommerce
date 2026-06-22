import React from "react";

type FormAlertProps = {
  message: string;
  variant?: "error" | "info";
};

const variantStyles = {
  error: "border-red-500/20 bg-red-500/10 text-red-400",
  info: "border-slate-500/20 bg-slate-500/10 text-slate-200",
};

export default function FormAlert({ message, variant = "error" }: FormAlertProps) {
  return (
    <div className={`mb-6 rounded-xl border px-4 py-3 text-sm ${variantStyles[variant]}`}>
      {message}
    </div>
  );
}
