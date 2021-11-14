const codePoints = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const codePointFromCharacter = (character: string): number => {
    return codePoints.indexOf(character)
  }

const checkIfStringHasOnlyDigits = (value: string): boolean => {
    if (value.match(/^[0-9]+$/) != null) {
      return true
    }

    return false
  }

const validateCheckCharacter = (input: string): boolean => {
    let factor = 1
    let sum = 0
    const n = checkIfStringHasOnlyDigits(input) ? 10 : 36

    // Starting from the right, work  leftwards
    // Now, the initial "factor" will always be "1"
    // since the last character is the check character.

    for (let i = input.length - 1; i >= 0; i--) {
      const codePoint = codePointFromCharacter(input.charAt(i))
      let addend = factor * codePoint

      // Alternate the "factor" that each "codePoint" is multiplied by
      factor = factor === 2 ? 1 : 2

      // Sum the digits of the "addend" as expressed in base "n"
      addend = Math.floor(addend / n) + (addend % n)
      sum += addend
    }

    const remainder = sum % n

    return remainder === 0
  }

  export default validateCheckCharacter