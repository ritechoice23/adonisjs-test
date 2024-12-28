import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Head, Link, useForm, usePage } from '@inertiajs/react'
import { route } from '@izzyjs/route/client'

export default function Home({ tasks }: { tasks: any[] }) {
  const { auth } = usePage().props
  const { data, setData, post, errors } = useForm({
    task: '',
    image: ''
  })

  const handleAddTask = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    return post(route('tasks.store').toString(), {
      forceFormData: true,
      async: true,
      onSuccess: () => {
        setData('task', '')
      },
    })
  }

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
                        href={route('logout').toString()}
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
            <div className="space-x-4">
              <form onSubmit={handleAddTask} className='flex max-w-2xl gap-2 mx-auto'>
                <input type="file" accept="image/*"
                  name='image'
                  onChange={(e) => setData('image', e.target.files?.[0])} />
                <Input value={data.task} onChange={(e) => setData('task', e.target.value)} type="text" placeholder='todo...' />
                <Button type='submit'>
                  add
                </Button>
              </form>
              <p>
                {data.task}
              </p>
              {errors.task && <p>
                {errors.task}
              </p>}
            </div>
          </section>

          <section className='max-w-2xl py-16 mx-auto'>
            <h2>Todos</h2>
            {tasks.map((task: any) => (
              <>
                <div key={task.id} className='flex gap-4'>
                  <span>{task.id}</span>
                  <span>{task.completed ? '✅' : '❌'}</span>
                  <p>{task.task}</p>

                  <Link async method='delete' href={route('tasks.destroy', { params: { id: task.id } }).toString()}>delete</Link>
                </div>
              </>
            ))}
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
