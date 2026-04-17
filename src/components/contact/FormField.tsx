import { cn } from "@/lib/utils";

type FormFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function FormField({ label, error, className, id, ...props }: FormFieldProps) {
  const fieldId = id ?? props.name;

  return (
    <div className="space-y-2">
      <label htmlFor={fieldId} className="text-sm font-medium text-white/75">
        {label}
      </label>
      <input
        id={fieldId}
        className={cn(
          "h-11 w-full border border-white/14 bg-black/45 px-4 text-sm text-white outline-none transition-all duration-200 placeholder:text-white/36 focus:border-primary/45 focus:ring-2 focus:ring-primary/25",
          error && "border-primary/70 focus:border-primary/80 focus:ring-primary/30",
          className,
        )}
        {...props}
      />
      {error ? <p className="text-xs text-primary">{error}</p> : null}
    </div>
  );
}
