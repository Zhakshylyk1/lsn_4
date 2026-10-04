import { useLoaderData, useNavigate } from 'react-router-dom';

export default function LocationDetail() {
  const location = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium border border-slate-700 transition cursor-pointer"
      >
        <span>&larr;</span>
        <span>Назад</span>
      </button>

      <div className="bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-6">
        <div className="border-b border-slate-700/60 pb-4">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-mono text-emerald-400">
              ID: #{location.id}
            </span>
            <span className="text-xs px-2.5 py-1 rounded bg-slate-700 text-slate-300 font-medium">
              {location.type || 'Неизвестно'}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-white mt-2">
            {location.name}
          </h1>
        </div>

        <div className="space-y-3 text-sm divide-y divide-slate-700/60">
          <div className="pt-2 flex justify-between items-center">
            <span className="text-slate-300">Тип:</span>
            <span className="font-medium text-slate-200">
              {location.type || 'Не указан'}
            </span>
          </div>

          <div className="pt-3 flex justify-between items-center">
            <span className="text-slate-400">Измерение (dimension):</span>
            <span className="font-medium text-slate-200 text-right">
              {location.dimension || 'Неизвестно'}
            </span>
          </div>

          <div className="pt-3 flex justify-between items-center">
            <span className="text-slate-400">Количество жителей:</span>
            <span className="font-semibold text-emerald-400">
              {location.residents ? location.residents.length : 0}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
