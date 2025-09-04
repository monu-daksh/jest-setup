import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [role, setRole] = useState('user');
  const [country, setCountry] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { email, password, remember, acceptTerms, role, country });
    // Add your login logic here
  };

  return (
    <div className="w-[350px] shadow-xl bg-white border border-gray-200 rounded-lg overflow-hidden mx-auto">
      {/* Card Header */}
      <div className="text-center text-2xl font-bold p-6 bg-white border-b">
        Login
      </div>

      {/* Card Content */}
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        {/* Email */}
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Password */}
        <div className="grid gap-2">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Checkboxes */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Options</label>

          <div className="flex items-center gap-2">
            <input
              id="remember"
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="remember" className="text-sm">
              Remember me
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              id="terms"
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="terms" className="text-sm">
              Accept Terms & Conditions
            </label>
          </div>
        </div>

        {/* Radio Buttons */}
        <div className="grid gap-2">
          <label className="text-sm font-medium">Role</label>
          <div className="flex items-center gap-2">
            <input
              id="user"
              type="radio"
              value="user"
              checked={role === 'user'}
              onChange={() => setRole('user')}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor="user" className="text-sm">
              User
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              id="admin"
              type="radio"
              value="admin"
              checked={role === 'admin'}
              onChange={() => setRole('admin')}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor="admin" className="text-sm">
              Admin
            </label>
          </div>
        </div>

        {/* Dropdown (Select) */}
        <div className="grid gap-2">
          <label htmlFor="country" className="text-sm font-medium">
            Country
          </label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>
              Select a country
            </option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-2 text-white font-medium rounded-md shadow-sm transition-colors duration-200"
        >
          Login
        </button>
      </form>

      {/* Card Footer */}
      <div className="flex justify-center p-6 pt-0 text-sm text-gray-500">
        Don’t have an account?{' '}
        <a href="/register" className="ml-1 text-blue-600 hover:underline">
          Register
        </a>
      </div>
    </div>
  );
}

export default LoginForm;