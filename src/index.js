module.exports = function toReadable (number) {
    numberString = (number).toString();
    if (numberString.length === 1) {
        output = convertDigit(numberString);
    } else if (numberString.length === 2) {
        output = convertTwoDigits(numberString);
    } else if (numberString.length === 3 && numberString.substring(1) === '00') {
        output = convertDigit(numberString[0]) + ' hundred';
    }  else if (numberString.length === 3 && numberString.substring(1) !== '00') {
        let tens = numberString.substring(1);
        output = convertDigit(numberString[0]) + ' hundred ' + convertTwoDigits(tens);
    } else
        output = 'что-то не так, проверьте введенное значение';
    return output;
}

function convertTwoDigits(input) {
    if (input[0] === '0') {
        return convertDigit(input[1]);
    } else if (checkLastDigits(input)) {
        return checkLastDigits(input);
    } else
        return convertTens(input[0]) + ' ' + convertDigit(input[1]);
}

function convertDigit(input) {
    const digit = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine'
      };
      return digit[input];
    }

function checkLastDigits(input) {
    const lastTwoDigits = {
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
        '00': ''
      };
    return lastTwoDigits[input];
}

function convertTens(input) {
    const tens = {
        '2': 'twenty',
        '3': 'thirty',
        '4': 'forty',
        '5': 'fifty',
        '6': 'sixty',
        '7': 'seventy',
        '8': 'eighty',
        '9': 'ninety',
      };
    return tens[input];
}