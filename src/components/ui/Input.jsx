export default function Input({
  label,
  error,
  helper,
  className,
  ...props
}) {
  return (
    <div className="w-full space-y-1">
      {label && <label className="text-sm font-medium">{label}</label>}

      <input
        className={`w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 ${
          error ? "border-red-500" : "border-gray-300"
        } ${className}`}
        {...props}
      />

      {helper && !error && (
        <p className="text-xs text-gray-500">{helper}</p>
      )}

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}