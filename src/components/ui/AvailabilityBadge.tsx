export default function AvailabilityBadge({
  label,
  compact = false,
}: {
  label: string;
  compact?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-accent-soft font-medium text-accent-dark ${
        compact ? "px-3 py-1 text-xs" : "px-4 py-1.5 text-sm"
      }`}
    >
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
        <span className="relative inline-flex size-2 rounded-full bg-accent" />
      </span>
      {label}
    </span>
  );
}
