export default function Logo({ size = 40, className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      {/* Shield */}
      <path d="M24 1C24 1 4 7 4 12v16c0 13 20 19 20 19s20-6 20-19V12C44 7 24 1 24 1z" fill="#0A1A3A"/>
      <path d="M24 3.5C24 3.5 6.5 8.8 6.5 13v14.5c0 11.5 17.5 16.8 17.5 16.8S41.5 39 41.5 27.5V13C41.5 8.8 24 3.5 24 3.5z" fill="none" stroke="#ffffff" strokeWidth="0.6" opacity="0.2"/>
      {/* Soccer ball */}
      <circle cx="24" cy="17" r="7" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.9"/>
      <path d="M24 10l1.8 2.5h3l-1 2.8 1.5 2.7h-3.1L24 20.2 21.8 18h-3.1l1.5-2.7-1-2.8h3L24 10z" fill="#ffffff" opacity="0.25"/>
      {/* ML */}
      <text x="24" y="35" textAnchor="middle" fontFamily="Georgia, 'Noto Serif', serif" fontWeight="700" fontSize="14" fontStyle="italic" fill="#ffffff" letterSpacing="2">ML</text>
      {/* Accents */}
      <line x1="14" y1="26" x2="34" y2="26" stroke="#6B8CCE" strokeWidth="0.8" opacity="0.5"/>
      <line x1="16" y1="38" x2="32" y2="38" stroke="#6B8CCE" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  )
}
