import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
      <h1 className="text-6xl font-black text-emerald-400">404</h1>
      <h2 className="text-xl font-semibold text-white">Страница не найдена</h2>
      <p className="text-slate-400 text-sm max-w-sm">
        Похоже, вы затерялись в другой мультивселенной.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-medium transition"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}
