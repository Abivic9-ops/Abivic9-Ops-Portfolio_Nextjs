import { SKILL_ICONS } from "@/lib/skills";

type SkillIconProps = {
  icon: string;
  className?: string;
};

export function SkillIcon({ icon, className = "w-4 h-4" }: SkillIconProps) {
  const label = SKILL_ICONS[icon] ?? icon.slice(0, 2).toUpperCase();

  return (
    <span
      className={`inline-flex items-center justify-center rounded-md bg-primary/10 text-primary text-[10px] font-bold ${className}`}
      aria-hidden
    >
      {label}
    </span>
  );
}
