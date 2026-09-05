import React from "react";

interface LogoAmperaProps {
  className?: string;
  textColor?: string;
}

export default function LogoAmpera({ className = "h-10 w-auto", textColor = "#ffffff" }: LogoAmperaProps) {
  return (
    <svg
      viewBox="0 0 460 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="ampera-red" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="35%" stopColor="#ef4444" />
          <stop offset="85%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>
        <filter id="ampera-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Jembatan Ampera Merah */}
      <g filter="url(#ampera-shadow)">
        {/* Kabel Suspensi Utama */}
        <path
          d="M 50 115 Q 105 65 150 25"
          stroke="#ef4444"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 190 25 Q 240 85 285 45"
          stroke="#ef4444"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 325 45 Q 360 82 400 115"
          stroke="#ef4444"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Kabel Vertikal Ramping */}
        <line x1="95" y1="92" x2="95" y2="115" stroke="#ef4444" strokeWidth="2" opacity="0.85" />
        <line x1="120" y1="60" x2="120" y2="115" stroke="#ef4444" strokeWidth="2" opacity="0.85" />
        <line x1="215" y1="75" x2="215" y2="115" stroke="#ef4444" strokeWidth="2" opacity="0.85" />
        <line x1="250" y1="76" x2="250" y2="115" stroke="#ef4444" strokeWidth="2" opacity="0.85" />
        <line x1="365" y1="88" x2="365" y2="115" stroke="#ef4444" strokeWidth="2" opacity="0.85" />

        {/* Menara Kiri (Pilar Utama) */}
        <path d="M 140 115 L 150 16 L 190 16 L 200 115 Z" fill="url(#ampera-red)" />
        <rect x="159" y="30" width="22" height="24" rx="2" fill="#0b1329" />
        <rect x="157" y="68" width="26" height="36" rx="2" fill="#0b1329" />
        <path d="M 145 16 Q 170 6 195 16 Z" fill="#fca5a5" />

        {/* Menara Kanan */}
        <path d="M 280 115 L 288 35 L 322 35 L 330 115 Z" fill="url(#ampera-red)" />
        <rect x="296" y="47" width="18" height="20" rx="2" fill="#0b1329" />
        <rect x="294" y="76" width="22" height="30" rx="2" fill="#0b1329" />
        <path d="M 284 35 Q 305 25 326 35 Z" fill="#fca5a5" />

        {/* Gelagar Jalan Jembatan */}
        <rect x="40" y="112" width="370" height="12" rx="2.5" fill="url(#ampera-red)" />
        <rect x="55" y="124" width="340" height="3" rx="1.5" fill="#991b1b" />
      </g>

      {/* Tulisan Bordir Cursive "Anugerah Palembang Tour" */}
      <text
        x="225"
        y="172"
        textAnchor="middle"
        fill={textColor}
        fontFamily="'Brush Script MT', 'Segoe Script', 'Great Vibes', 'Dancing Script', 'Lucida Handwriting', cursive, sans-serif"
        fontSize="34"
        fontWeight="700"
        fontStyle="italic"
        letterSpacing="0.5"
      >
        Anugerah Palembang Tour
      </text>
    </svg>
  );
}