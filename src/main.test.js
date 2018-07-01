const getFavs = require('./main')

const user = 'sbr464'

it('Downloads 1 page of 30 valid favorites for a user', async () => {
  const result = await getFavs(user, 1)

  console.info('result', result)

  expect(result).toHaveLength(30)

  result.forEach(o => {
    expect(o).toHaveProperty('id')
    expect(o).toHaveProperty('link')
    expect(o).toHaveProperty('title')
  })
})
