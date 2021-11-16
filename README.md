# What is this

Check if your alphanumeric digits is valid using the Luhn Algorithm [See at Wikipedia](https://en.wikipedia.org/wiki/Luhn_mod_N_algorithm)

# Installation and usage

`npm install base10-36luhnalgorithm`

Then...

```

import validateCheckCharacter from 'base10-36luhnalgorithm'

console.log(validateCheckCharacter('3081034158405873'))

```

You can pass only numbers(base 10) or numbers and letters(base 36). The algorithm will check if the digits is valid and return true/false 

