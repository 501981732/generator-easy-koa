import userController from './controller.js'

export const baseUrl = userController.baseUrl

export default [{
    method: 'GET',
    route: '/',
    handlers: [
      userController.index
    ]
  },
  {
    method: 'GET',
    route: '/userlist',
    handlers: [
      userController.userList
    ]
  },
  {
    method: 'GET',
    route: '/checkuser',
    handlers: [
      userController.checkUser
    ]
  },
  {
    method: 'POST',
    route: '/adduser',
    handlers: [
      userController.addUser
    ]
  },
  {
    method: 'GET',
    route: '/demo',
    handlers: [
      userController.demo
    ]
  },
]
