import { fakeMessages } from './fake-messages'

export const messageService = {
  createMessage
}

function createMessage () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let randomNumber = Math.floor(Math.random() * fakeMessages.length)
      resolve(fakeMessages[randomNumber])
    }, 1000)
  })
}
