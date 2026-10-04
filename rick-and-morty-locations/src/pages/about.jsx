import { useSearchParams } from 'react-router-dom';

function LoginForm({ onSwitch }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-slate-800 p-6 rounded-xl border border-slate-700 space-y-4 max-w-md w-full"
    >
      <h2 className="text-xl font-bold text-white">Вход</h2>
      <input
        type="text"
        placeholder="Логин"
        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
      />
      <input
        type="password"
        placeholder="Пароль"
        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
      />
      <button
        type="submit"
        className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition cursor-pointer"
      >
        Войти
      </button>
      <button
        type="button"
        onClick={onSwitch}
        className="w-full text-center text-sm text-slate-400 hover:text-emerald-400 transition cursor-pointer"
      >
        Нет аккаунта? Зарегистрироваться
      </button>
    </form>
  );
}

function RegisterForm({ onSwitch }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-slate-800 p-6 rounded-xl border border-slate-700 space-y-4 max-w-md w-full"
    >
      <h2 className="text-xl font-bold text-white">Регистрация</h2>
      <input
        type="text"
        placeholder="Логин"
        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
      />
      <input
        type="password"
        placeholder="Пароль"
        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
      />
      <button
        type="submit"
        className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition cursor-pointer"
      >
        Зарегистрироваться
      </button>
      <button
        type="button"
        onClick={onSwitch}
        className="w-full text-center text-sm text-slate-400 hover:text-emerald-400 transition cursor-pointer"
      >
        Есть аккаунт? Войти
      </button>
    </form>
  );
}

export default function About() {
  const [searchParams, setSearchParams] = useSearchParams();
  const step = searchParams.get('step') || 'login';

  return (
    <div className="flex flex-col items-center justify-center py-8">
      {step === 'register' ? (
        <RegisterForm onSwitch={() => setSearchParams({ step: 'login' })} />
      ) : (
        <LoginForm onSwitch={() => setSearchParams({ step: 'register' })} />
      )}
    </div>
  );
}
