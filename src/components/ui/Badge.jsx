import { cn } from "../../lib/utils";

export default function Badge({ children, variant = "default" }) {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    error: "bg-red-100 text-red-700",
    info: "bg-blue-100 text-blue-700",
  };

  return (
    <span
      className={cn(
        "px-2 py-1 text-xs rounded-full font-medium",
        variants[variant]
      )}
    >
      {children}
    </span>
  );
}