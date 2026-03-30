const styles = {
  nuevo: 'bg-blue-50 text-blue-700',
  contactado: 'bg-yellow-50 text-yellow-700',
  convertido: 'bg-green-50 text-green-700',
  completado: 'bg-green-50 text-green-700',
  pendiente: 'bg-yellow-50 text-yellow-700',
  perdido: 'bg-slate-100 text-slate-600',
  activo: 'bg-green-50 text-green-700',
  inactivo: 'bg-yellow-50 text-yellow-700',
  publicado: 'bg-green-50 text-green-700',
  borrador: 'bg-yellow-50 text-yellow-700',
  programado: 'bg-blue-50 text-blue-700',
  pagado: 'bg-green-50 text-green-700',
  elite: 'bg-[#0A1A3A] text-white',
  avanzado: 'bg-[#a7c0fd] text-[#0A1A3A]',
  intermedio: 'bg-slate-100 text-slate-600',
}

export default function StatusBadge({ status, text }) {
  const s = styles[status?.toLowerCase()] || 'bg-slate-100 text-slate-600'
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s}`}>
      {text || status}
    </span>
  )
}
