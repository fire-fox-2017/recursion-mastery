const assert = require('assert')
const recursive = require('./recursive.js')

describe('Test Prime Factor', () => {
  it('3 returns 3', () => {
    assert.equal(recursive.prime_factors(3), 3)
  })
  it('6 returns [2, 3]', () => {
    assert.deepEqual(recursive.prime_factors(6), [2, 3])
  })
  it('8 returns [2, 2, 2]', () => {
    assert.deepEqual(recursive.prime_factors(8), [2, 2, 2])
  })
  it('123123123 returns [3, 3, 41, 333667]', () => {
    assert.deepEqual(recursive.prime_factors(123123123), [3, 3, 41, 333667])
  })
})

describe('Test simple_recursive', () => {
  it('39 return 4', () => {
    assert.equal(recursive.simple_recursive(39), 4)
  })
  it('999 returns 2', () => {
    assert.equal(recursive.simple_recursive(999), 2)
  })
  it('3 returns 3', () => {
    assert.equal(recursive.simple_recursive(3), 3)
  })
})
