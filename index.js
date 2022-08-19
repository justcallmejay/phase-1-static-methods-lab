class Formatter {
  static capitalize (word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  static sanitize (word) {
    const replaced = word.replace(/[^\w\s]/gi, '')
    return replaced
  }

  static titleize (word) {
    if (word !== 'the' && word !== 'a')
    return word.charAt(0).toUpperCase() + word.slice(1)
    }
  }



// class Name {
//   constructor(name) {
//     this.name = name
//   }
//   get speak() {
//     return this.name + ' says hi'
//   }

//   static upperCase (name) {
//     return name.charAt(0).toUpperCase() + name.slice(1)
//     //Name.upperCase('timmy') at DevTools returns 'Timmy'
//   }
// }

// if (words !== 'a' && words !== 'an' && words !== 'but' && words !== 'of' && words !== 'and' && words !== 'for' && words !== 'at' && words !== 'by' && words !== 'from') {
//   return words.charAt(0).toUpperCase() + words.slice(1)
// }