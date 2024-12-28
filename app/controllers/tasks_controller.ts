import Task from '#models/task'
import type { HttpContext } from '@adonisjs/core/http'
import vine from '@vinejs/vine'
import TestJob from 'app/jobs/test_job.js'
import queue from '@rlanz/bull-queue/services/main'

export default class TasksController {
  async store({ request, response, session }: HttpContext) {
    // const avatar = request.file('image')
    // await avatar?.move(app.makePath('storage/uploads'))
    const validator = vine.compile(vine.object({ task: vine.string() }))
    await validator.validate(request.all())
    const task = await Task.create({ task: request.input('task') })
    session.flash('message', 'task created successfully')
    queue.dispatch(TestJob, task)
    return response.redirect().back()
  }

  async destroy({ params, response, session }: HttpContext) {
    const task = await Task.findOrFail(params.id)
    await task.delete()
    session.flash('message', 'task deleted successfully')
    return response.redirect().back()
  }
}
