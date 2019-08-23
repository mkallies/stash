const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const isEmail = email => {
  return emailRe.test(email)
}

const getTruthyProperties = obj => Object.keys(obj).filter(key => obj[key])

const isNil = value => value == null

export { isEmail, getTruthyProperties, isNil }
