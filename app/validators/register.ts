import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    fullName: vine.string().minLength(2),
    email: vine.string().email(),
    password: vine.string().minLength(2),
  })
)
