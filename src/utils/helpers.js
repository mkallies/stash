const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const isEmail = email => {
  return emailRe.test(email)
}

export const getTruthyProperties = obj =>
  Object.keys(obj).filter(key => obj[key])
