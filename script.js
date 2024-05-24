const fs = require('fs');

function divisor(X, Y) {
    while (Y !== 0) {
        let temp = Y;
        Y = X % Y;
        X = temp;
    }
    return X;
}

const X = 48;
const Y = 18;
const result = divisor(X, Y);

const content = `Наибольший общий делитель чисел ${X} и ${Y} равен ${result}.\n`;
fs.writeFile('result.txt', content, (err) => {
    if (err) {
        console.error('Ошибка при записи в файл:', err);
        return;
    }
    console.log('Результат успешно записан в файл.');
});