import { Database } from '@vuex-orm/core'
import ToDo from '@/models/ToDo'

const database = new Database()

database.register(ToDo)

export default database