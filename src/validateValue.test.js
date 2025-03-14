const validate = require('./validateValue.js')

describe('validate', () => {
  test('Вадидация значения', () => {
    expect(validate(15)).toBe(true)
  })
  test('Вадидация значения', () => {
    expect(validate(-15)).toBe(false)
  })
  test('Вадидация значения', () => {
    expect(validate(101)).toBe(false)
  })
  test('Вадидация значения', () => {
    expect(validate(0)).toBe(true)
  })
  test('Вадидация значения', () => {
    expect(validate(100)).toBe(true)
  })
})

test('example', () => {
  expect(2 + 2).toBe(4)
})
