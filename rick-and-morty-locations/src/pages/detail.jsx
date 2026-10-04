import { useLoaderData, useNavigate } from 'react-router-dom';

export default function Detail() {
  const character = useLoaderData();
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

      <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
        <div className="sm:flex">
          <div className="sm:w-1/2 aspect-square bg-slate-900">
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 sm:w-1/2 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-emerald-400">
                  ID: #{character.id}
                </span>
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    character.status === 'Alive'
                      ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/40'
                      : character.status === 'Dead'
                      ? 'bg-rose-950/80 text-rose-400 border border-rose-500/40'
                      : 'bg-slate-900/80 text-slate-300 border border-slate-600'
                  }`}
                >
                  {character.status}
                </span>
              </div>

              <h1 className="text-2xl font-bold text-white mt-2">
                {character.name}
              </h1>
            </div>

            <div className="space-y-2.5 text-sm divide-y divide-slate-700/60">
              <div className="pt-2 flex justify-between">
                <span className="text-slate-400">Вид:</span>
                <span className="font-medium text-slate-200">
                  {character.species}
                </span>
              </div>

              <div className="pt-2 flex justify-between">
                <span className="text-slate-400">Гендер:</span>
                <span className="font-medium text-slate-200">
                  {character.gender}
                </span>
              </div>

              <div className="pt-2 flex justify-between">
                <span className="text-slate-400">Родная планета:</span>
                <span className="font-medium text-slate-200 text-right">
                  {character.origin?.name}
                </span>
              </div>

              <div className="pt-2 flex justify-between">
                <span className="text-slate-400">Текущая локация:</span>
                <span className="font-medium text-slate-200 text-right">
                  {character.location?.name}
                </span>
              </div>

              <div className="pt-2 flex justify-between">
                <span className="text-slate-400">Эпизодов:</span>
                <span className="font-medium text-slate-200">
                  {character.episode?.length || 0}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
