import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm";
}

/**
 * Reusable phone frame for mockup screens.
 */
export function PhoneMockup({
  children,
  className,
  size = "default",
}: PhoneMockupProps) {
  const widthClass = size === "sm" ? "w-[140px]" : "w-[260px]";
  const heightClass = size === "sm" ? "h-[240px]" : "h-[520px]";
  const radiusOuter = size === "sm" ? "rounded-[24px]" : "rounded-[40px]";
  const radiusInner = size === "sm" ? "rounded-[20px]" : "rounded-[32px]";
  const padding = size === "sm" ? "p-1.5" : "p-2.5";

  return (
    <div
      className={cn(
        "bg-neutral-dark shadow-[0_32px_80px_rgba(0,0,0,.25)]",
        widthClass,
        radiusOuter,
        padding,
        className
      )}
      role="img"
      aria-label="MedBell app mockup"
    >
      <div
        className={cn(
          "bg-white overflow-hidden",
          radiusInner,
          heightClass
        )}
      >
        {children}
      </div>
    </div>
  );
}
