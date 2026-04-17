import { cn } from "@/lib/utils";

type FormTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export function FormTextarea({ label, error, className, id, ...props }: FormTextareaProps) {
  const fieldId = id ?? props.name;

  return (
    <div className="space-y-2">
      <label htmlFor={fieldId} className="text-sm font-medium text-white/75">
        {label}
      </label>
      <textarea
        id={fieldId}
        className={cn(
          "w-full border border-white/14 bg-black/45 px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-white/36 focus:border-primary/45 focus:ring-2 focus:ring-primary/25",
          error && "border-primary/70 focus:border-primary/80 focus:ring-primary/30",
          className,
        )}
        {...props}
      />
      {error ? <p className="text-xs text-primary">{error}</p> : null}
    </div>
  );
}
