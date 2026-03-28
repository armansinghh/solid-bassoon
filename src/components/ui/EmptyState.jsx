export default function EmptyState({
  title = "Nothing here",
  description = "Start by adding something.",
  action,
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10 space-y-3">
      <div className="text-4xl">📭</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
      {action}
    </div>
  );
}