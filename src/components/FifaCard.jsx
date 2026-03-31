import { useRef, useState } from 'react'

export default function FifaCard({ name = 'Jugador', position = 'MC', rating = 76, stats = {}, level = 'semi' }) {
  const { ritmo = 0, tiro = 0, pase = 0, regate = 0, defensa = 0, fisico = 0 } = stats
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const themes = {
    amateur: {
      gradient: 'linear-gradient(135deg, #92400e 0%, #78350f 40%, #a16207 100%)',
      glow: 'rgba(180, 120, 40, 0.5)',
      accent: '#fbbf24',
      labelColor: 'rgba(253, 224, 171, 0.5)',
      badge: 'AMATEUR',
    },
    semi: {
      gradient: 'linear-gradient(135deg, #0A1A3A 0%, #1a3a6a 40%, #0f2e5a 100%)',
      glow: 'rgba(0, 105, 112, 0.5)',
      accent: '#7bf1fc',
      labelColor: 'rgba(123, 241, 252, 0.4)',
      badge: 'SEMI PRO',
    },
    pro: {
      gradient: 'linear-gradient(135deg, #854d0e 0%, #a16207 30%, #eab308 60%, #facc15 80%, #a16207 100%)',
      glow: 'rgba(234, 179, 8, 0.5)',
      accent: '#fef08a',
      labelColor: 'rgba(254, 240, 138, 0.5)',
      badge: 'PRO',
    },
  }

  const theme = themes[level] || themes.semi

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setTilt({
      x: (y - 0.5) * -15,
      y: (x - 0.5) * 15,
    })
  }

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => {
    setIsHovered(false)
    setTilt({ x: 0, y: 0 })
  }

  // Radar chart SVG
  const statValues = [ritmo, tiro, pase, regate, defensa, fisico]
  const statLabels = ['RIT', 'TIR', 'PAS', 'REG', 'DEF', 'FIS']
  const cx = 80, cy = 80, maxR = 55

  const getPoint = (index, value) => {
    const angle = (Math.PI * 2 * index) / 6 - Math.PI / 2
    const r = (value / 99) * maxR
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) }
  }

  const radarPoints = statValues.map((v, i) => getPoint(i, v))
  const radarPath = radarPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ') + 'Z'

  const gridLevels = [0.25, 0.5, 0.75, 1]

  return (
    <>
      <style>{`
        @keyframes fifa-shimmer {
          0% { transform: translateX(-100%) rotate(25deg); }
          100% { transform: translateX(200%) rotate(25deg); }
        }
        @keyframes fifa-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .fifa-card-wrapper {
          perspective: 800px;
        }
        .fifa-card {
          transform-style: preserve-3d;
          transition: transform 0.15s ease-out, box-shadow 0.3s ease;
        }
        .fifa-card .shimmer-layer {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: 1rem;
          pointer-events: none;
          z-index: 10;
        }
        .fifa-card .shimmer-layer::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 50%;
          height: 200%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.08),
            rgba(255,255,255,0.18),
            rgba(255,255,255,0.08),
            transparent
          );
          transform: translateX(-100%) rotate(25deg);
        }
        .fifa-card:hover .shimmer-layer::after {
          animation: fifa-shimmer 1.2s ease-in-out;
        }
        .fifa-stat-value {
          font-variant-numeric: tabular-nums;
        }
        .fifa-rating {
          animation: fifa-float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="fifa-card-wrapper" style={{ width: 'fit-content' }}>
        <div
          ref={cardRef}
          className="fifa-card relative rounded-2xl p-6 text-white text-center cursor-default select-none"
          style={{
            background: theme.gradient,
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isHovered ? 'scale(1.03)' : 'scale(1)'}`,
            boxShadow: isHovered
              ? `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${theme.glow}`
              : '0 8px 24px rgba(0,0,0,0.2)',
            minWidth: '220px',
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Shimmer overlay */}
          <div className="shimmer-layer" />

          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(255,255,255,1) 2px,
                rgba(255,255,255,1) 3px
              )`,
            }}
          />

          {/* Tier badge */}
          <div className="absolute top-3 left-3 z-10">
            <span
              className="text-[8px] font-bold tracking-[0.2em] uppercase px-2 py-0.5 rounded"
              style={{
                background: `${theme.accent}22`,
                color: theme.accent,
                border: `1px solid ${theme.accent}44`,
              }}
            >
              {theme.badge}
            </span>
          </div>

          {/* Rating */}
          <div className="relative z-[5] mt-2">
            <p
              className="fifa-rating text-5xl font-black mb-0 leading-none"
              style={{
                textShadow: `0 0 20px ${theme.glow}, 0 2px 4px rgba(0,0,0,0.3)`,
                fontFamily: "'Noto Serif', serif",
                fontStyle: 'italic',
              }}
            >
              {rating}
            </p>
            <p
              className="text-[10px] uppercase tracking-[0.3em] mt-1 font-semibold"
              style={{ color: theme.labelColor }}
            >
              {position}
            </p>
            <p className="text-sm font-bold mt-1 tracking-wide">{name}</p>
          </div>

          {/* Divider */}
          <div
            className="mx-auto my-3 rounded-full"
            style={{
              width: '40%',
              height: '1px',
              background: `linear-gradient(90deg, transparent, ${theme.accent}66, transparent)`,
            }}
          />

          {/* Radar Chart */}
          <div className="relative z-[5] flex justify-center mb-3">
            <svg width="160" height="160" viewBox="0 0 160 160">
              {/* Grid */}
              {gridLevels.map((lvl, i) => {
                const points = Array.from({ length: 6 }, (_, idx) => {
                  const angle = (Math.PI * 2 * idx) / 6 - Math.PI / 2
                  const r = lvl * maxR
                  return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`
                }).join(' ')
                return (
                  <polygon
                    key={i}
                    points={points}
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="0.5"
                  />
                )
              })}
              {/* Axes */}
              {Array.from({ length: 6 }, (_, i) => {
                const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2
                return (
                  <line
                    key={i}
                    x1={cx}
                    y1={cy}
                    x2={cx + maxR * Math.cos(angle)}
                    y2={cy + maxR * Math.sin(angle)}
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="0.5"
                  />
                )
              })}
              {/* Data polygon */}
              <polygon
                points={radarPoints.map(p => `${p.x},${p.y}`).join(' ')}
                fill={`${theme.accent}25`}
                stroke={theme.accent}
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              {/* Data points */}
              {radarPoints.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r="2.5" fill={theme.accent} />
              ))}
              {/* Labels */}
              {statLabels.map((label, i) => {
                const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2
                const labelR = maxR + 16
                const lx = cx + labelR * Math.cos(angle)
                const ly = cy + labelR * Math.sin(angle)
                return (
                  <text
                    key={i}
                    x={lx}
                    y={ly}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="rgba(255,255,255,0.5)"
                    fontSize="8"
                    fontWeight="600"
                  >
                    {label}
                  </text>
                )
              })}
            </svg>
          </div>

          {/* Stat numbers row */}
          <div className="relative z-[5] grid grid-cols-3 gap-x-4 gap-y-1.5 text-xs">
            {statLabels.map((label, i) => (
              <div key={label} className="flex items-center justify-center gap-1.5">
                <span className="fifa-stat-value font-bold text-sm" style={{ color: theme.accent }}>
                  {statValues[i]}
                </span>
                <span style={{ color: theme.labelColor }} className="text-[10px] font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
