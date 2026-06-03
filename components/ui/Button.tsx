import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

// ─── Types ────────────────────────────────────────────────
interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "store" | "store-sm" | "download";
  store?: "google" | "apple";
  children?: React.ReactNode;
  className?: string;
  "aria-label"?: string;
}

// ─── Store Button inner content ───────────────────────────
function GooglePlayContent({ size = "normal" }: { size?: "normal" | "sm" }) {
  const iconSize = size === "sm" ? "w-[18px] h-[18px]" : "w-5 h-5";
  return (
    <>
      <svg viewBox="0 0 24 24" fill="white" className={iconSize} aria-hidden>
        <path d="M3.18 23.76c.31.17.67.18 1.01.04L15.34 12 4.19.2C3.85.06 3.49.07 3.18.24 2.56.57 2.18 1.23 2.18 2v19.99c0 .77.38 1.43 1 1.77zM18.43 9.09l-2.9-1.64-3.23 3.23 3.23 3.23 2.93-1.66c.83-.47.83-1.69-.03-2.16zM4.87 1.58l12.61 7.14-2.86 2.86L4.87 1.58zM4.87 22.42l9.75-9.74 2.86 2.86-12.61 7.14v-.26z" />
      </svg>
      {size === "sm" ? (
        <span>Google Play</span>
      ) : (
        <div>
          <div className="text-[0.65rem] font-medium opacity-80 leading-none">
            Get it on
          </div>
          <div className="text-[0.95rem] font-bold leading-tight">
            Google Play
          </div>
        </div>
      )}
    </>
  );
}

function AppStoreContent({ size = "normal" }: { size?: "normal" | "sm" }) {
  const iconSize = size === "sm" ? "w-[18px] h-[18px]" : "w-5 h-5";
  return (
    <>
      <svg viewBox="0 0 24 24" fill="white" className={iconSize} aria-hidden>
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      {size === "sm" ? (
        <span>App Store</span>
      ) : (
        <div>
          <div className="text-[0.65rem] font-medium opacity-80 leading-none">
            Download on the
          </div>
          <div className="text-[0.95rem] font-bold leading-tight">
            App Store
          </div>
        </div>
      )}
    </>
  );
}

// ─── Main Button ──────────────────────────────────────────
export function Button({
  href,
  onClick,
  variant = "primary",
  store,
  children,
  className,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const baseStore =
    "flex items-center gap-2.5 bg-neutral-dark text-white rounded-xl font-head font-bold text-[0.85rem] transition-all hover:-translate-y-0.5 hover:bg-neutral-800";

  const variants: Record<string, string> = {
    primary:
      "inline-flex items-center gap-2 bg-brand-red text-white px-7 py-3.5 rounded-full font-head font-bold text-[0.95rem] tracking-wide transition-all hover:-translate-y-0.5 hover:shadow-btn-red",
    outline:
      "inline-flex items-center gap-2 bg-transparent text-neutral-dark px-7 py-3.5 rounded-full font-head font-bold text-[0.95rem] border-2 border-gray-200 transition-all hover:border-brand-red hover:text-brand-red",
    store: cn(baseStore, "px-[22px] py-3"),
    "store-sm": cn(baseStore, "px-[18px] py-2.5 text-[0.8rem] rounded-[10px]"),
    download:
      "flex items-center gap-2.5 bg-white text-neutral-dark px-[22px] py-3 rounded-xl font-bold text-[0.85rem] transition-all hover:-translate-y-0.5 hover:shadow-notif",
  };

  const classes = cn(variants[variant], className);

  const inner =
    variant === "store" || variant === "store-sm" || variant === "download" ? (
      <>
        {store === "google" && (
          <GooglePlayContent size={variant === "store-sm" ? "sm" : "normal"} />
        )}
        {store === "apple" && (
          <AppStoreContent size={variant === "store-sm" ? "sm" : "normal"} />
        )}
        {children}
      </>
    ) : (
      children
    );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}
