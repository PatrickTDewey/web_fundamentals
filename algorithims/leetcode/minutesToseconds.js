const numberToMinutes = (number) => {
    minutes = Math.floor(number / 60);
    seconds = number % 60;
    return `${minutes} minutes and ${seconds} seconds`;
}

numberToMinutes(5225);