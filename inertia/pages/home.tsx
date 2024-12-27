import { Head, Link, usePage } from '@inertiajs/react'
import { route } from '@izzyjs/route/client'

export default function Home() {
  const { auth } = usePage().props
  // @ts-ignore
  return (
    <>
      <Head title="Homepage" />
      <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-50 dark:bg-gray-900 dark:text-gray-50">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-white shadow-md dark:bg-gray-800">
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
          <section className="py-16 text-center bg-gray-100 dark:bg-gray-700">
            <h2 className="mb-4 text-4xl font-bold">Hi, I'm Ritechoice23</h2>
            <p className="mb-6 text-lg">Building modern web experiences with React and beyond.</p>
            <div className="space-x-4">
              {/* new task button goes here */}
            </div>
          </section>
        </main>

        {/* Footer */}

        <footer className="py-4 text-center text-white bg-gray-800">
          <p>© {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
          <div className="flex justify-center mt-2 space-x-4">
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
