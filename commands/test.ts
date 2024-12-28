import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'

export default class Test extends BaseCommand {
  static commandName = 'ritechoice'
  static description = ''

  static options: CommandOptions = {}

  async run() {
    this.logger.info('Hello world from "ritchoiec"')
  }
}
