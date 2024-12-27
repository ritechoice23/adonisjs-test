import { Link, useForm, usePage } from '@inertiajs/react'

function Login() {
  const { flashMessages } = usePage().props
  // @ts-ignore
  const message = flashMessages?.errorsBag
  const { post, data, setData, errors } = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    return post('/login', {
      onSuccess: () => {
        // alert('success')
      },
    })
  }
  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Login to Your Account</h2>
      {message?.E_INVALID_CREDENTIALS && (
        <span className="block text-sm text-red-500">{message?.E_INVALID_CREDENTIALS}</span>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            // type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <span className="block text-sm text-red-500">{errors.email}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password
          </label>
          <input
            value={data.password}
            onChange={(e) => setData('password', e.target.value)}
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && <span className="block text-sm text-red-500">{errors.password}</span>}
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
        <p className="mt-4 text-sm text-center">
          Don't have an account?{' '}
          <Link href="/register" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
