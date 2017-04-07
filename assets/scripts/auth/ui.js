'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('Sign in successful')
  console.log(data)
  // store user object somehow?  You will need the token later.
  store.user = data.user  // you want to store the user object.
}

const signInFailure = (error) => {
  console.log('Incorrect password!')
  console.error(error)
}

const changePasswordSuccess = (data) => {
  console.log('Password changed successfully.')
  console.log(data)
}

const changePasswordFailure = (data) => {
  console.log('Password change FAILURE.')
  console.log(data)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure
}
