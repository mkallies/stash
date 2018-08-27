export const getEntities = (state, key) => {
  const entities = state.entities[key]

  if (!entities) {
    return null
  }

  return Object.keys(entities).map(el => entities[el])
}
