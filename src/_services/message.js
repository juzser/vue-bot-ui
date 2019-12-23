import { fakeMessage } from '../_helper/fake-message'

export const messageService = {
  getAllMessages,
  createMessage,
  getMessage
}

function getAllMessages () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let randomNumber = Math.floor(Math.random() * fakeMessage.length)
      console.log(randomNumber)
      resolve(fakeMessage[randomNumber])
    }, 1000)
  })
}

function createMessage (messageText) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let randomNumber = Math.floor(Math.random() * fakeMessage.length)
      resolve(fakeMessage[randomNumber])
    }, 1000)
  })
}

function getMessage () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let randomNumber = Math.floor(Math.random() * fakeMessage.length)
      console.log(randomNumber)
      resolve(fakeMessage[randomNumber])
    }, 1000)
  })
}
