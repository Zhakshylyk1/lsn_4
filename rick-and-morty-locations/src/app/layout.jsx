import { NavLink, Outlet, useNavigation } from 'react-router-dom';

export default function Layout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <header className="sticky top-0 z-50 bg-slate-800/90 backdrop-blur border-b border-slate-700 shadow-md">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-emerald-400 tracking-wider">
              Rick & Morty
            </span>
          </div>

          <nav className="flex items-center gap-1 sm:gap-3 text-sm font-medium">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-emerald-500/20 text-emerald-400 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                }`
              }
            >
              Персонажи
            </NavLink>

            <NavLink
              to="/locations"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-emerald-500/20 text-emerald-400 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                }`
              }
            >
              Локации
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-emerald-500/20 text-emerald-400 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                }`
              }
            >
              О нас
            </NavLink>

            <NavLink
              to="/random"
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-sm transition-all"
            >
              Случайный
            </NavLink>
          </nav>
        </div>

        {isLoading && (
          <div className="w-full bg-slate-700 h-1 overflow-hidden">
            <div className="bg-emerald-400 h-full w-1/3 animate-pulse"></div>
          </div>
        )}
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6">
        <Outlet />
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 py-4 text-center text-xs text-slate-500">
        Rick and Morty API Data Mode
      </footer>
    </div>
  );
}
