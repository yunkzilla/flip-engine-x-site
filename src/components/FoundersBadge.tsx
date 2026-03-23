/**
 * Founders Achievement Badge — retro pixel-art style
 * Used in the app on the Ranked page and Account page for early access users.
 * Also previewed in the waitlist success state on the marketing site.
 */
export default function FoundersBadge({ size = 64 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer glow */}
      <defs>
        <filter id="founder-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#founder-glow)">
        {/* Shield shape */}
        <path
          d="M32 4L8 16v16c0 14.36 10.24 26.8 24 29.86C45.76 58.8 56 46.36 56 32V16L32 4z"
          fill="#0C0A1A"
          stroke="#FDE047"
          strokeWidth="2"
        />

        {/* Inner border */}
        <path
          d="M32 8L12 18v14c0 12.2 8.6 22.7 20 25.3 11.4-2.6 20-13.1 20-25.3V18L32 8z"
          fill="none"
          stroke="rgba(253,224,71,0.3)"
          strokeWidth="1"
          strokeDasharray="3 2"
        />

        {/* Star — pixel-ish */}
        <path
          d="M32 14l4.7 9.52 10.5 1.54-7.6 7.4 1.8 10.46L32 37.96l-9.4 4.96 1.8-10.46-7.6-7.4 10.5-1.54L32 14z"
          fill="#FDE047"
        />

        {/* Pixel detail squares on star */}
        <rect x="30" y="16" width="4" height="4" fill="#FDE047" opacity="0.8"/>
        <rect x="22" y="26" width="3" height="3" fill="#FDE047" opacity="0.6"/>
        <rect x="39" y="26" width="3" height="3" fill="#FDE047" opacity="0.6"/>
        <rect x="25" y="35" width="3" height="3" fill="#FDE047" opacity="0.5"/>
        <rect x="36" y="35" width="3" height="3" fill="#FDE047" opacity="0.5"/>

        {/* Corner pixel accents */}
        <rect x="12" y="12" width="3" height="3" fill="#FDE047" opacity="0.7"/>
        <rect x="49" y="12" width="3" height="3" fill="#FDE047" opacity="0.7"/>
        <rect x="14" y="42" width="3" height="3" fill="#FDE047" opacity="0.4"/>
        <rect x="47" y="42" width="3" height="3" fill="#FDE047" opacity="0.4"/>

        {/* "F" letter pixel art at bottom */}
        <rect x="28" y="44" width="2" height="2" fill="#FDE047" opacity="0.9"/>
        <rect x="30" y="44" width="2" height="2" fill="#FDE047" opacity="0.9"/>
        <rect x="32" y="44" width="2" height="2" fill="#FDE047" opacity="0.9"/>
        <rect x="28" y="46" width="2" height="2" fill="#FDE047" opacity="0.9"/>
        <rect x="28" y="48" width="2" height="2" fill="#FDE047" opacity="0.9"/>
        <rect x="30" y="48" width="2" height="2" fill="#FDE047" opacity="0.9"/>
        <rect x="28" y="50" width="2" height="2" fill="#FDE047" opacity="0.9"/>
        <rect x="28" y="52" width="2" height="2" fill="#FDE047" opacity="0.9"/>
      </g>
    </svg>
  );
}
