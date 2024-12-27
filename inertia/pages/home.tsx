import { Head, Link, usePage } from '@inertiajs/react'
import { route } from '@izzyjs/route/client'

export default function Home() {
  const { auth } = usePage().props
  // @ts-ignore
  return (
    <>
      <Head title="Homepage" />
      <div className="min-h-screen flex flex-col font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
          <h1 className="text-xl font-bold">RiteChoice23</h1>
          <nav>
            <ul className="flex gap-4">
              {
                // @ts-ignore
                !auth?.user ? (
                  <>
                    <li>
                      <Link href="/login" className="hover:underline">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link href="/register" className="hover:underline">
                        Register
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      {
                        // @ts-ignore
                        auth?.user?.fullName
                      }
                    </li>
                    <li>
                      <Link
                        method={'post'}
                        href={route('logout') as unknown as string}
                        className="hover:underline"
                      >
                        Logout
                      </Link>
                    </li>
                  </>
                )
              }
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="flex-grow">
          <section className="text-center py-16 bg-gray-100 dark:bg-gray-700">
            <h2 className="text-4xl font-bold mb-4">Hi, I'm Ritechoice23</h2>
            <p className="text-lg mb-6">Building modern web experiences with React and beyond.</p>
            <div className="space-x-4">
              <a
                href="#projects"
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
              >
                Add task
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}

        <footer className="py-4 bg-gray-800 text-white text-center">
          <p>© {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#github" className="hover:underline">
              GitHub
            </a>
            <a href="#linkedin" className="hover:underline">
              LinkedIn
            </a>
            <a href="#twitter" className="hover:underline">
              Twitter
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}
