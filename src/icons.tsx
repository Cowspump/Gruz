type IconProps = {
  className?: string
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function IconMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#F4F1EA" />
      <path d="M6 20.5V12.2c0-.7.6-1.2 1.2-1.2H16v9.5H6z" fill="#111111" />
      <path d="M16 14.2h5.4l3.6 4.2v2.1H16v-6.3z" fill="#111111" />
      <circle cx="10.2" cy="21.6" r="1.8" fill="#F4F1EA" stroke="#111111" strokeWidth="1.4" />
      <circle cx="21.4" cy="21.6" r="1.8" fill="#F4F1EA" stroke="#111111" strokeWidth="1.4" />
    </svg>
  )
}

export function IconTent({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" {...stroke}>
      <path d="M8 30V16.5A2.5 2.5 0 0 1 10.5 14H26v16H8Z" />
      <path d="M26 18h8.2L40 24.5V30H26V18Z" />
      <circle cx="14" cy="32.5" r="2.5" />
      <circle cx="34" cy="32.5" r="2.5" />
      <path d="M12 20h8M12 24h6" />
    </svg>
  )
}

export function IconReefer({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" {...stroke}>
      <rect x="8" y="14" width="22" height="16" rx="2" />
      <path d="M30 18h7.5L42 24v6H30V18Z" />
      <circle cx="15" cy="32.5" r="2.5" />
      <circle cx="35" cy="32.5" r="2.5" />
      <path d="M16 18.5c2.4 1.6 2.4 5.4 0 7M21 18.5c2.4 1.6 2.4 5.4 0 7" />
    </svg>
  )
}

export function IconTral({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" {...stroke}>
      <path d="M8 28h32M10 28V22h10l3 6M28 22h8v6" />
      <circle cx="16" cy="32" r="2.4" />
      <circle cx="24" cy="32" r="2.4" />
      <circle cx="35" cy="32" r="2.4" />
      <path d="M14 22V17h8v5" />
    </svg>
  )
}

export function IconVan({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" {...stroke}>
      <path d="M9 28V18.5A2.5 2.5 0 0 1 11.5 16H24l8 6.5V28H9Z" />
      <circle cx="16" cy="31.5" r="2.4" />
      <circle cx="32" cy="31.5" r="2.4" />
      <path d="M24 16v7h8" />
    </svg>
  )
}

export function IconContainer({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" {...stroke}>
      <rect x="7" y="16" width="34" height="16" rx="1.5" />
      <path d="M14 16v16M24 16v16M34 16v16M7 24h34" />
    </svg>
  )
}

export function IconCrane({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" {...stroke}>
      <path d="M12 36V16l22-6v6" />
      <path d="M34 16v12M30 28h8M12 22h8" />
      <rect x="8" y="32" width="18" height="6" rx="1" />
    </svg>
  )
}

export function IconLoaders({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" {...stroke}>
      <circle cx="17" cy="14" r="3" />
      <path d="M12 32v-8.5a5 5 0 0 1 10 0V32" />
      <circle cx="32" cy="16" r="3" />
      <path d="M27 34v-9a5 5 0 0 1 10 0v9" />
      <path d="M10 32h28" />
    </svg>
  )
}

export function IconShield({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" {...stroke}>
      <path d="M24 8 10 14v10c0 9 6.2 14.5 14 16.5 7.8-2 14-7.5 14-16.5V14L24 8Z" />
      <path d="M18 24.5 22.2 29 30.5 19.5" />
    </svg>
  )
}

export function IconManager({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" {...stroke}>
      <circle cx="24" cy="16" r="5" />
      <path d="M12 36c1.8-6.5 6.2-10 12-10s10.2 3.5 12 10" />
      <path d="M34 16h6M37 13v6" />
    </svg>
  )
}

export function IconHazard({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" {...stroke}>
      <path d="M24 9 40 37H8L24 9Z" />
      <path d="M24 20v8M24 32.5v.5" />
    </svg>
  )
}

export function IconPallet({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" {...stroke}>
      <rect x="12" y="12" width="24" height="16" rx="1" />
      <path d="M10 32h28M14 32v4M24 32v4M34 32v4" />
    </svg>
  )
}

export function IconMetal({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" {...stroke}>
      <path d="M8 30 24 10l16 20v6H8v-6Z" />
      <path d="M16 36V24M24 36V18M32 36V24" />
    </svg>
  )
}

export function IconWood({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" {...stroke}>
      <rect x="9" y="14" width="30" height="8" rx="1" />
      <rect x="9" y="26" width="30" height="8" rx="1" />
      <path d="M15 14v8M15 26v8" />
    </svg>
  )
}

export function IconBag({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" {...stroke}>
      <path d="M16 18h16l2 20H14l2-20Z" />
      <path d="M20 18c0-4 8-4 8 0" />
    </svg>
  )
}

export function IconMed({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" {...stroke}>
      <rect x="10" y="14" width="28" height="22" rx="3" />
      <path d="M24 20v10M19 25h10" />
    </svg>
  )
}

export function IconMachine({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" {...stroke}>
      <rect x="9" y="18" width="30" height="16" rx="2" />
      <path d="M15 18V14h8v4M18 26h12M18 30h8" />
    </svg>
  )
}

export function IconBoxes({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" {...stroke}>
      <path d="M10 22 24 14l14 8v14L24 44 10 36V22Z" />
      <path d="M24 14v30M10 22l14 8 14-8" />
    </svg>
  )
}

export function IconClose({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth={1.8}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function IconWhatsApp({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.4-1.41a10 10 0 0 0 4.64 1.12h.01c5.46 0 9.89-4.4 9.89-9.84C21.94 6.4 17.5 2 12.04 2Zm5.76 14.16c-.24.68-1.4 1.3-1.94 1.34-.5.04-1.12.06-1.81-.11-.42-.1-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.2-1.16-1.54-1.16-2.94 0-1.4.73-2.08 1-2.37.24-.28.64-.4.86-.4h.62c.2 0 .46-.06.72.55.26.64.88 2.2.96 2.36.08.16.12.34.02.55-.1.2-.14.34-.28.52-.14.18-.3.4-.42.54-.14.14-.28.3-.12.58.16.28.7 1.16 1.5 1.88 1.04.92 1.9 1.2 2.18 1.34.28.14.44.12.6-.06.16-.2.7-.82.88-1.1.18-.28.36-.24.6-.14.24.1 1.54.72 1.8.86.26.14.44.2.5.32.06.12.06.68-.18 1.36Z"
      />
    </svg>
  )
}

export function IconArrow({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth={1.8}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
