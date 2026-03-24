import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1.5 rounded-lg text-sm",
        variant === "default" && "bg-[#6c63ff]/20 text-[#a5a0ff]",
        variant === "accent" && "bg-[#00d4aa]/10 text-[#00d4aa]",
        className
      )}
      {...props}
    />
  );
}
