import { cn } from "@/lib/utils";
import { getStatusClasses } from "@/lib/utils";

type Status = "taken" | "missed" | "pending";

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

const LABELS: Record<Status, string> = {
  taken: "Taken",
  missed: "Missed",
  pending: "Pending",
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const { text, bg } = getStatusClasses(status);
  return (
    <span
      className={cn(
        "text-[0.65rem] font-bold",
        text,
        bg,
        "px-2 py-0.5 rounded-full",
        className
      )}
    >
      {LABELS[status]}
    </span>
  );
}

/**
 * Stat box used inside phone mockups to show taken/missed/pending counts
 */
interface StatBoxProps {
  count: number;
  label: string;
  status: Status;
}

export function StatBox({ count, label, status }: StatBoxProps) {
  const { text, bg } = getStatusClasses(status);
  return (
    <div
      className={cn(
        "flex-1 text-center rounded-[10px] py-2 px-1",
        bg,
        text
      )}
    >
      <span className="block text-[1.4rem] font-extrabold leading-tight">
        {count}
      </span>
      <span className="block text-[0.55rem] font-bold opacity-80">
        {label}
      </span>
    </div>
  );
}
