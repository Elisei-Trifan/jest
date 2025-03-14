function validate(value) {
  //   if (value < 0 || value > 100) {
  //     return false
  //   }
  //   return true

  return value < 0 || value > 100 ? false : true
}

module.exports = validate
