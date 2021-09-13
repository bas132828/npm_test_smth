/**
    Склоняет существительные в трех вариантах в зависимости от числа и возвращает нужную строку.
    Пример: (1) секунду. (2 || .5) секунды. (5) секунд.    
    arrayOfWords - порядок важен(как в примере) 
    ["секунду", "секунды", "секунд"], 

    * @returns {String}
    */

function pluralization (number, arrayOfWords) {
    const cases = [2, 3, 4];       
    if (!arrayOfWords.length) return;
    if (typeof number !== 'number') throw new Error ('wrong argument type (typeof number must be Number)')
    if (number % 10 === 1 && number % 100 !== 11)
      return arrayOfWords[0];
    if (
      (cases.includes(number % 10) && number < 10) ||
      (cases.includes(number % 10) && number > 20) || 
      !Number.isInteger(number))
      return arrayOfWords[1];
    return arrayOfWords[2];
  };

  module.exports = pluralization