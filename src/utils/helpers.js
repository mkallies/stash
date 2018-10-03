const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const isEmail = email => {
  return emailRe.test(email)
}
