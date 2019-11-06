import { Model } from '@vuex-orm/core'

export default class Todo extends Model {
  static entity = 'todos'

  static fields () {
    return {
      id: this.increment(),
      title: this.string(''),
      completed: this.boolean(false),
    }
  }
  static apiConfig = {
    actions: {
      fetch: {
        method: 'get',
        url: '/project_phaser/project'
      }
    }
  }
}