import Icon from './Icon'

export default function MetricCard({ label, value, change, icon }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{label}</p>
        {icon && <Icon name={icon} className="text-slate-400" />}
      </div>
      <p className="text-2xl font-bold text-[#0A1A3A]">{value}</p>
      {change && <span className={`text-xs font-medium ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{change}</span>}
    </div>
  )
}
