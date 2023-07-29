function autoPick (value) {
    const keys = Object.keys(value)
    if (keys.length === 1) {
      // Automatically take the only key in result data
      return value[keys[0]]
    } else {
      // Return entire result data
      return value
    }
  }

export default autoPick;