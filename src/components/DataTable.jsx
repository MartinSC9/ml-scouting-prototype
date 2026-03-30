export default function DataTable({ headers = [], rows = [], className = '' }) {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden ${className}`}>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-100">
            {headers.map((h, i) => (
              <th key={i} className="text-left p-3 text-xs font-semibold text-slate-500 uppercase">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {rows.map((row, ri) => (
            <tr key={ri} className="hover:bg-slate-50">
              {row.map((cell, ci) => (
                <td key={ci} className="p-3 text-slate-600">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
