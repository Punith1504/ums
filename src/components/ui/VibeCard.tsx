import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface VibeCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: VibeCardProps) {
  return (
    <div className={cn("glass-card p-6", className)}>
      {children}
    </div>
  );
}

export function ClayCard({ children, className }: VibeCardProps) {
  return (
    <div className={cn("clay-card p-6", className)}>
      {children}
    </div>
  );
}
