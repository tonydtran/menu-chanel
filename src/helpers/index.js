export function findById(dataSet, id) {
  let result

  const findId = (dataSet, id) => {
    for (const item of dataSet) {
      if (item.id === id) {
        result = item
        break
      }

      if (item.subItems.length) {
        findId(item.subItems, id)
      }
    }
  }

  findId(dataSet, id)
  return result
}
