const getFavs = require('./main')

const userId = 'sbr464'

it('Downloads 1 page of 30 valid favorites for a user', async () => {
  const result = await getFavs(userId, 1)
  console.info('result', result)
  expect(result).toHaveLength(30)
  result.forEach(o => {
    expect(o).toHaveProperty('id')
    expect(o).toHaveProperty('link')
    expect(o).toHaveProperty('title')
  })
})

/*

(todo migrate to typescript/comments feature)

it('Downloads 1 page of 30 valid favorites for a user', async () => {
  const result = await getFavs(userId, 1, 1, false, undefined)
  console.info('result (favorites)', result)
  expect(result).toHaveLength(30)
  result.forEach(o => {
    expect(o).toHaveProperty('id')
    expect(o).toHaveProperty('link')
    expect(o).toHaveProperty('title')
  })
})

it('Downloads 1 page of 30 valid favorite comments for a user', async () => {
  const result = await getFavs(userId, 1, 1, true, undefined)
  console.info('result (comments)', result)
  expect(result).toHaveLength(30)
  result.forEach(o => {
    expect(o).toHaveProperty('id')
    expect(o).toHaveProperty('link')
    expect(o).toHaveProperty('title')
  })
})

*/
