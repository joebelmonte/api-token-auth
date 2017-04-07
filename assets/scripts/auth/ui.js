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
  store.data = data.user  // you want to store the user object.
}

const signInFailure = (error) => {
  console.log('Incorrect password!')
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
