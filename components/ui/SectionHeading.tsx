import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id?: string;
  label?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Reusable section heading with label, title, and optional subtitle.
 * Maintains consistent typographic hierarchy throughout the landing page.
 */
export function SectionHeading({
  id,
  label,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      {label && (
        <p className="font-head text-[0.78rem] font-bold tracking-[0.12em] uppercase text-brand-red mb-3.5">
          {label}
        </p>
      )}
      <h2 id={id} className="font-head text-[clamp(2rem,4vw,2.7rem)] font-extrabold leading-[1.15] text-neutral-dark">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-neutral-gray text-[1.05rem] leading-[1.7] mt-4",
            align === "center" && "max-w-[560px] mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
