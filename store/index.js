import Veux from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import ToDo from '@/models/ToDo'

VuexORM.use(VuexORMAxios) // <- No axios option.

const database = new VuexORM.Database()

database.register(ToDo)

export const plugins = [VuexORM.install(database)]

// import Vue from 'vue'
// import Vuex from 'vuex'
// import VuexORM from '@vuex-orm/core'
// import VuexORMAxios from '@vuex-orm/plugin-axios'
// import database from './database'
// import axios from 'axios'
// Vue.use(Vuex)


// // console.log(new Vue())

// VuexORM.use(VuexORMAxios, {
//   axios,
//   http: {
//     baseURL: 'http://localhost:28017/project_phaser/project',
//     url: '/',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }
// })

// export default () => new Vuex.Store({
//   plugins: [VuexORM.install(database)]
// })