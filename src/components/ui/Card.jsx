import { cn } from "../../lib/utils";

export default function Card({ children, className }) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl shadow-sm border p-4",
        className
      )}
    >
      {children}
    </div>
  );
}