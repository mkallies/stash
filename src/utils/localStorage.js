import isNil from 'lodash/isNil'

const getItem = key => {
  const item = localStorage.getItem(key)
  try {
    return JSON.parse(item)
  } catch (e) {
    console.log('Error', e)
  }
}

const setItem = (key, data) => {
  if (isNil(data)) {
    console.log('You gave local storage nothing!')
    return
  }

  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (e) {
    console.log('Error setting', e)
  }
}

const removeItem = key => localStorage.removeItem(key)

export default { getItem, setItem, removeItem }