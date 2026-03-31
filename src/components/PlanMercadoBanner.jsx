import Icon from './Icon'

export default function PlanMercadoBanner({ variant = 'teal' }) {
  const colors = variant === 'teal'
    ? { accent: '#0A1A3A', accentLight: '#dbeafe', dark: '#0A1A3A', gold: '#0A1A3A' }
    : { accent: '#445d94', accentLight: '#a7c0fd', dark: '#0A1A3A', gold: '#d4a843' }

  const items = [
    'Informe de scouting profesional',
    'Video con análisis técnico del jugador',
    'Contactos de clubes para presentar tu perfil',
    'Estrategia de ligas y equipos',
  ]

  return (
    <div className="pmb-root" style={{ position: 'relative', width: '100%', minHeight: '420px', borderRadius: '1.25rem', overflow: 'hidden', fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        /* Background & base */
        .pmb-root {
          background:
            radial-gradient(ellipse 120% 80% at 80% 20%, ${colors.accent}18 0%, transparent 60%),
            radial-gradient(ellipse 100% 100% at 20% 90%, ${colors.accent}10 0%, transparent 50%),
            linear-gradient(165deg, ${colors.dark} 0%, #060e1a 100%);
        }

        /* Subtle field lines pattern */
        .pmb-field-lines {
          position: absolute;
          inset: 0;
          opacity: 0.04;
          background-image:
            linear-gradient(${colors.accentLight} 1px, transparent 1px),
            linear-gradient(90deg, ${colors.accentLight} 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse 70% 70% at 70% 40%, black 0%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 70% 70% at 70% 40%, black 0%, transparent 100%);
          pointer-events: none;
        }

        /* Center circle decoration (like a pitch) */
        .pmb-circle {
          position: absolute;
          top: 50%;
          right: 15%;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          border: 1px solid ${colors.accent}15;
          transform: translateY(-50%);
          pointer-events: none;
        }
        .pmb-circle::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: ${colors.accent}30;
          transform: translate(-50%, -50%);
        }

        /* Shine / shimmer sweep */
        .pmb-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            105deg,
            transparent 40%,
            ${colors.accentLight}06 45%,
            ${colors.accentLight}12 50%,
            ${colors.accentLight}06 55%,
            transparent 60%
          );
          animation: pmb-shimmer 5s ease-in-out infinite;
          pointer-events: none;
          z-index: 5;
        }
        @keyframes pmb-shimmer {
          0% { left: -100%; }
          50% { left: 100%; }
          100% { left: 100%; }
        }

        /* Glow accent top-right */
        .pmb-glow {
          position: absolute;
          top: -40px;
          right: -40px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: ${colors.accent};
          opacity: 0.08;
          filter: blur(60px);
          pointer-events: none;
        }

        /* Price badge float */
        .pmb-price {
          animation: pmb-float 4s ease-in-out infinite;
        }
        @keyframes pmb-float {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-6px) rotate(-2deg); }
        }

        /* Number badge */
        .pmb-num {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
          flex-shrink: 0;
          background: ${colors.accent}22;
          color: ${colors.accentLight};
          border: 1px solid ${colors.accent}30;
        }

        /* Item row */
        .pmb-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 0;
        }
        .pmb-item-text {
          font-size: 14px;
          color: rgba(255,255,255,0.85);
          line-height: 1.4;
        }

        /* Responsive */
        @media (max-width: 640px) {
          .pmb-root {
            min-height: 380px !important;
          }
          .pmb-inner {
            padding: 28px 24px !important;
          }
          .pmb-title {
            font-size: 24px !important;
          }
          .pmb-subtitle {
            font-size: 16px !important;
          }
          .pmb-price-box {
            position: relative !important;
            top: auto !important;
            right: auto !important;
            margin-top: 16px !important;
            display: inline-block !important;
          }
        }
      `}</style>

      {/* Decorative layers */}
      <div className="pmb-field-lines"></div>
      <div className="pmb-circle"></div>
      <div className="pmb-glow"></div>
      <div className="pmb-shine"></div>

      {/* Price badge */}
      <div className="pmb-price" style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 10,
        background: `linear-gradient(135deg, ${colors.gold}, #1e293b)`,
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '12px',
        boxShadow: `0 8px 24px ${colors.gold}40`,
        textAlign: 'center',
      }}>
        <div className="pmb-price-box">
          <span style={{ fontSize: '28px', fontWeight: 800, fontFamily: "'Noto Serif', serif", letterSpacing: '-1px' }}>&euro;200</span>
        </div>
      </div>

      {/* Content */}
      <div className="pmb-inner" style={{ position: 'relative', zIndex: 6, padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
        {/* Title */}
        <div style={{ marginBottom: '24px' }}>
          <p className="pmb-title" style={{
            fontSize: '28px',
            fontWeight: 800,
            color: '#fff',
            fontFamily: "'Noto Serif', serif",
            lineHeight: 1.2,
            margin: 0,
          }}>
            Plan de mercado personalizado
          </p>
          <p className="pmb-subtitle" style={{
            fontSize: '20px',
            fontWeight: 400,
            color: colors.accentLight,
            fontFamily: "'Noto Serif', serif",
            marginTop: '4px',
            opacity: 0.85,
          }}>
            para futbolistas
          </p>
        </div>

        {/* Accent divider */}
        <div style={{
          width: '50px',
          height: '3px',
          background: `linear-gradient(90deg, ${colors.accent}, transparent)`,
          borderRadius: '2px',
          marginBottom: '20px',
        }}></div>

        {/* 4 items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '28px' }}>
          {items.map((item, i) => (
            <div key={i} className="pmb-item">
              <div className="pmb-num">{i + 1}</div>
              <span className="pmb-item-text">{item}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          opacity: 0.5,
          marginTop: 'auto',
        }}>
          <Icon name="sports_soccer" className="text-white" style={{ fontSize: '16px' }} />
          <span style={{ fontSize: '12px', color: '#fff', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
            by: ML Scouting
          </span>
        </div>
      </div>
    </div>
  )
}
