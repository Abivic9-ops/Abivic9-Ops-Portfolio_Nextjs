"use client";

import { cn } from "@/lib/utils";

type BotAvatarProps = {
  size?: number;
  showRing?: boolean;
  className?: string;
};

/**
 * Cute egg-shaped robot mascot recolored to Emerald Noir.
 * Swappable: change the import to use a <img src="/bot-avatar.png" /> instead.
 */
export function BotAvatar({ size = 40, showRing = false, className }: BotAvatarProps) {
  return (
    <div
      className={cn("relative inline-flex shrink-0 items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      {/* accent ring */}
      {showRing && (
        <span className="absolute inset-0 rounded-full ring-2 ring-primary/30" />
      )}

      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Bot avatar"
        className="overflow-visible"
      >
        {/* soft emerald glow behind head */}
        <circle cx="50" cy="50" r="46" className="fill-primary/15" />

        {/* antenna */}
        <rect x="47" y="8" width="6" height="12" rx="3" className="fill-primary/60" />
        <circle cx="50" cy="7" r="4.5" className="fill-primary" />

        {/* head shell – wider egg shape */}
        <ellipse cx="50" cy="54" rx="38" ry="34" fill="#F0F4F1" />

        {/* glossy highlight */}
        <ellipse cx="34" cy="32" rx="14" ry="18" fill="white" opacity="0.45" />

        {/* ears */}
        <circle cx="16" cy="52" r="6" fill="#DCE3DF" />
        <circle cx="84" cy="52" r="6" fill="#DCE3DF" />

        {/* wraparound visor */}
        <path d="M12 42 Q50 28 88 42 Q88 56 50 60 Q12 56 12 42Z" fill="#121815" />

        {/* visor top accent rim */}
        <path
          d="M12 42 Q50 28 88 42"
          className="stroke-primary"
          strokeWidth="2.5"
          fill="none"
          opacity="0.55"
          strokeLinecap="round"
        />

        {/* left eye – wide bar with extra padding */}
        <rect x="34" y="44" width="8" height="13" rx="3.5" className="fill-primary" />
        {/* left eye gleam */}
        <circle cx="36" cy="48" r="2" fill="white" opacity="0.85" />

        {/* left eye glow */}
        <ellipse cx="38" cy="51" rx="11" ry="9" className="fill-primary/20" />

        {/* right eye – wide bar with extra padding */}
        <rect x="58" y="44" width="8" height="13" rx="3.5" className="fill-primary" />
        {/* right eye gleam */}
        <circle cx="60" cy="48" r="2" fill="white" opacity="0.85" />

        {/* right eye glow */}
        <ellipse cx="62" cy="51" rx="11" ry="9" className="fill-primary/20" />

        {/* rosy cheeks */}
        <circle cx="24" cy="57" r="5" fill="#E8A0B0" opacity="0.5" />
        <circle cx="76" cy="57" r="5" fill="#E8A0B0" opacity="0.5" />

        {/* bold curved smile */}
        <path
          d="M34 73 Q50 84 66 73"
          stroke="#121815"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
