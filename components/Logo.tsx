export function PolymerTradeMark({ size = 40, dark = false }: { size?: number; dark?: boolean }) {
  const outline = dark ? '#FFFFFF' : '#0B1B2B'
  const fill = dark ? '#4D8DFF' : '#1E56E8'
  return (
    <svg width={size * 2.4} height={size} viewBox="0 0 120 48" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(24,24)">
        <polygon points="20,0 10,17.3 -10,17.3 -20,0 -10,-17.3 10,-17.3" transform="translate(-16,0) scale(0.62)" fill="none" stroke={outline} strokeWidth="4.5" strokeLinejoin="round" />
        <polygon points="20,0 10,17.3 -10,17.3 -20,0 -10,-17.3 10,-17.3" transform="translate(2.5,0) scale(0.62)" fill={fill} stroke={fill} strokeWidth="4.5" strokeLinejoin="round" />
        <polygon points="20,0 10,17.3 -10,17.3 -20,0 -10,-17.3 10,-17.3" transform="translate(21,0) scale(0.62)" fill="none" stroke={outline} strokeWidth="4.5" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

export function PolymerTradeWordmark({ dark = false, size = 22 }: { dark?: boolean; size?: number }) {
  const ink = dark ? '#FFFFFF' : '#0B1B2B'
  const blue = dark ? '#4D8DFF' : '#1E56E8'
  return (
    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: size, letterSpacing: '-0.02em' }}>
      <span style={{ fontWeight: 700, color: ink }}>Polymer</span>
      <span style={{ fontWeight: 400, color: blue }}>Trade</span>
    </span>
  )
}

export function HexIcon({ size = 24, color = '#1E56E8' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="-24 -24 48 48" xmlns="http://www.w3.org/2000/svg">
      <polygon points="20,0 10,17.3 -10,17.3 -20,0 -10,-17.3 10,-17.3" fill={color} stroke={color} strokeWidth="4.5" strokeLinejoin="round" />
    </svg>
  )
}
