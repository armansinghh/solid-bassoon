import { cn } from "../../lib/utils";

export default function Button({
  children,
  variant = "primary",
  loading = false,
  className,
  ...props
}) {
  const base =
    "px-4 py-2 rounded-xl font-medium transition flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    ghost: "bg-transparent hover:bg-gray-100",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      className={cn(base, variants[variant], className)}
      disabled={loading}
      {...props}
    >
      {loading && <span className="animate-spin">⏳</span>}
      {children}
    </button>
  );
}