import { useLoaderData, Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const GENDER_OPTIONS = [
  { value: '', label: 'All' },
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
  { value: 'genderless', label: 'Genderless' },
  { value: 'unknown', label: 'Unknown' },
];

export default function Home() {
  const data = useLoaderData();
  const characters = data?.results || [];

  const [searchParams, setSearchParams] = useSearchParams();

  const gender = searchParams.get('gender') || '';
  const name = searchParams.get('name') || '';

  const [nameInput, setNameInput] = useState(name);

  
  useEffect(() => {
    setNameInput(name);
  }, [name]);
  const handleGenderChange = (e) => {
    const value = e.target.value;
    const next = new URLSearchParams(searchParams);

    if (value) {
      next.set('gender', value);
    } else {
      next.delete('gender');
    }

    setSearchParams(next);
  };


  const handleSearch = (e) => {
    e.preventDefault();
    const next = new URLSearchParams(searchParams);
    const trimmed = nameInput.trim();

    if (trimmed) {
      next.set('name', trimmed);
    } else {
      next.delete('name');
    }

    setSearchParams(next);
  };

  const handleReset = () => {
    setSearchParams({});
    setNameInput('');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-700/60 pb-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Персонажи
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Список персонажей мультсериала «Рик и Морти»
          </p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-800 text-emerald-400 border border-slate-700 w-fit">
          Всего на странице: {characters.length}
        </span>
      </div>

      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-end gap-3 bg-slate-800/60 p-4 rounded-xl border border-slate-700"
      >
        <div className="flex flex-col gap-1.5 min-w-[140px]">
          <label className="text-xs text-slate-400 font-medium">Gender</label>
          <select
            value={gender}
            onChange={handleGenderChange}
            className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-600 text-slate-200 text-sm focus:outline-none focus:border-emerald-500"
          >
            {GENDER_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5 flex-1 min-w-[180px]">
          <label className="text-xs text-slate-400 font-medium">Name</label>
          <input
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="rick"
            className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-600 text-slate-200 text-sm placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
          />
        </div>

        
        <div className="flex gap-2">
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition"
          >
            Найти
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-medium transition border border-slate-600"
          >
            Сбросить все фильтры
          </button>
        </div>
      </form>

      
      {characters.length === 0 ? (
        <div className="text-center py-16 text-slate-400">
          Ничего не найдено
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {characters.map((character) => (
            <div
              key={character.id}
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-emerald-500/50 shadow-md transition group flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-900">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span
                  className={`absolute top-2 right-2 text-xs font-semibold px-2 py-0.5 rounded-full ${
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

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h2 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                    {character.name}
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Вид: {character.species}
                  </p>
                </div>

                <Link
                  to={`/characters/${character.id}`}
                  className="w-full py-2 px-3 text-center rounded-lg bg-slate-700/70 hover:bg-emerald-600 hover:text-white text-slate-200 text-sm font-medium transition"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}