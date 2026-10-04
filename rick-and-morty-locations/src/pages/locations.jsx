
import { useLoaderData, Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Locations() {
  const data = useLoaderData();
  const locations = data?.results || [];

  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name') || '';
  const [nameInput, setNameInput] = useState(name);

  useEffect(() => {
    setNameInput(name);
  }, [name]);

  const handleSearch = (e) => {
    e.preventDefault();
    const next = new URLSearchParams(searchParams);
    const value = nameInput.trim();

    if (value) {
      next.set('name', value);
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
      <div className="border-b border-slate-700 pb-4">
        <h1 className="text-3xl font-bold text-white">Локации</h1>
        <p className="text-slate-400 text-sm mt-1">
          Вселенная и миры сериала «Рик и Морти»
        </p>
      </div>

      <form
        onSubmit={handleSearch}
        className="flex flex-wrap gap-3 bg-slate-800 p-4 rounded-xl"
      >
        <input
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          placeholder="Название локации..."
          className="flex-1 min-w-[180px] px-3 py-2 rounded-lg bg-slate-900 text-white border border-slate-600"
        />

        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-emerald-600 text-white"
        >
          Найти
        </button>

        <button
          type="button"
          onClick={handleReset}
          className="px-4 py-2 rounded-lg bg-slate-700 text-white"
        >
          Сбросить
        </button>
      </form>

      <p className="text-slate-400 text-sm">
        Найдено на странице: {locations.length}
      </p>

      {locations.length === 0 ? (
        <div className="text-center py-16 text-slate-400">
          Ничего не найдено
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-slate-800 rounded-xl p-5 border border-slate-700"
            >
              <span className="text-xs text-emerald-400">
                ID: #{location.id}
              </span>

              <h2 className="text-lg font-bold text-white mt-2">
                {location.name}
              </h2>

              <p className="text-sm text-slate-400 mt-1">
                Тип: {location.type || 'Неизвестно'}
              </p>

              <p className="text-sm text-slate-400">
                Измерение: {location.dimension}
              </p>

              <Link
                to={`/locations/${location.id}`}
                className="block mt-4 text-center py-2 rounded-lg bg-slate-700 text-white hover:bg-emerald-600"
              >
                Подробнее
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}