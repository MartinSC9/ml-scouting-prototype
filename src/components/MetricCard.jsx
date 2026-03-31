import Icon from './Icon'

export default function MetricCard({ label, value, change, icon }) {
  return (
    <>
      <style>{`
        @keyframes metricFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes changePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.65; }
        }
        .metric-card {
          animation: metricFadeIn 0.5s ease-out both;
        }
        .change-badge {
          animation: changePulse 2.5s ease-in-out infinite;
        }
      `}</style>
      <div className="metric-card bg-white p-5 rounded-xl shadow-sm border border-slate-100 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60 cursor-default">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{label}</p>
          {icon && (
            <div className="w-9 h-9 rounded-lg bg-[#006970]/10 flex items-center justify-center">
              <Icon name={icon} className="text-[#006970] text-lg" />
            </div>
          )}
        </div>
        <p className="text-2xl font-bold text-[#0A1A3A]">{value}</p>
        {change && <span className={`change-badge inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded-full ${change.startsWith('+') ? 'text-emerald-700 bg-emerald-50' : 'text-red-700 bg-red-50'}`}>{change}</span>}
      </div>
    </>
  )
}
