import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "orange" | "primary" | "secondary" | "purple" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  showArrow?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "orange",
  size = "md",
  href,
  showArrow = false,
  leftIcon,
  rightIcon,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5 shadow-sm",
    md: "text-sm sm:text-base px-6 py-3 gap-2 shadow-sm",
    lg: "text-base sm:text-lg px-8 py-3.5 gap-2.5 shadow-md",
  };

  const variantStyles = {
    orange:
      "bg-[#FFAA18] hover:bg-[#E89608] text-white shadow-[#FFAA18]/25 hover:shadow-lg hover:shadow-[#FFAA18]/35 focus:ring-[#FFAA18]",
    primary:
      "bg-[#10B9C3] hover:bg-[#079BA5] text-white shadow-[#10B9C3]/25 hover:shadow-lg hover:shadow-[#10B9C3]/35 focus:ring-[#10B9C3]",
    secondary:
      "bg-[#F0FCFD] hover:bg-[#E0F8FA] text-[#079BA5] border border-[#B4EFF3] focus:ring-[#10B9C3]",
    purple:
      "bg-[#7A43D8] hover:bg-[#6431B8] text-white shadow-[#7A43D8]/25 hover:shadow-lg hover:shadow-[#7A43D8]/35 focus:ring-[#7A43D8]",
    outline:
      "bg-white hover:bg-[#F0FCFD] text-[#10B9C3] border-2 border-[#10B9C3] hover:border-[#079BA5] focus:ring-[#10B9C3]",
    ghost:
      "bg-transparent hover:bg-slate-100 text-[#102A5C] focus:ring-slate-300 shadow-none",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      {showArrow && !rightIcon && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${combinedStyles}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`group ${combinedStyles}`} {...props}>
      {content}
    </button>
  );
}
