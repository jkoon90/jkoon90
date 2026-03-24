import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-[#6c63ff] text-white hover:bg-[#5a52d5] hover:-translate-y-0.5",
        outline:
          "border-2 border-[#6c63ff] text-[#6c63ff] hover:bg-[#6c63ff] hover:text-white hover:-translate-y-0.5",
      },
      size: {
        default: "px-8 py-3 text-base",
        lg: "px-10 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
