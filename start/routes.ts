/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
import Task from '#models/task'

const TasksController = () => import('#controllers/tasks_controller')
const LoginsController = () => import('#controllers/auth/login_controller')
const RegisterController = () => import('#controllers/auth/register_controller')

router
  .get('/', async function ({ inertia }) {
    return inertia.render('home', {
      tasks: await Task.all(),
    })
  })
  .as('home')
  .use(middleware.auth())

router.get('/login', [LoginsController, 'create']).as('login.create').use(middleware.guest())
router.post('/login', [LoginsController, 'store']).as('login.store').use(middleware.guest())

router.post('/tasks', [TasksController, 'store']).as('tasks.store').use(middleware.auth())
router.delete('/tasks/:id', [TasksController, 'destroy']).as('tasks.destroy').use(middleware.auth())

router
  .post('logout', async ({ auth, response }) => {
    await auth.use('web').logout()
    return response.redirect('/login')
  })
  .as('logout')
  .use(middleware.auth())

router
  .get('/register', [RegisterController, 'create'])
  .as('register.create')
  .use(middleware.guest())
router.post('/register', [RegisterController, 'store']).as('register.store').use(middleware.guest())
