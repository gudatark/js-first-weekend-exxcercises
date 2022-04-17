const toCamelCase = string => {
    const [head, ...tail] = string.split(/-|_/)
      .map(([head, ...tail]) => 
        [
          head.toUpperCase(),
          tail.join('').toLowerCase()
        ].join(''))
      .join('')
    return [head.toLowerCase(), ...tail].join('')
  }
  
  console.log(toCamelCase("the-stealth-warrior")); // returns "theStealthWarrior"
  console.log(toCamelCase("The_Stealth_Warrior")); // returns "TheStealthWarrior"