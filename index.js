

// Question 1
function convertFahrToCelsius(num) {
    let numberInCelcius = (num-32)/1.8;
    numberInCelcius = numberInCelcius.toFixed(4);
    if (isNaN(num)) {
        return `${num} is not a valid number but a ${typeof num}`;
    } else if (typeof(num) === "object"){
        return `${num} is not a valid number but a ${typeof num}`;
    } else {
        return parseFloat(numberInCelcius);
    }
}
convertFahrToCelsius();




// Question 2
const checkYuGiOh = (n) => {
    let emptyArray = [];
    if (isNaN(n) || n === null) {
        return `invalid parameter ${n}`;
    } else {
        let i = 1;
        while(i <= n) {
            if ( n === 1) {
                return 1;
            } else {
                if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
                    emptyArray.push("yu-gi-oh");
                } else if (i % 2 === 0 && i % 3 === 0) {
                    emptyArray.push("yu-gi");
                } else if (i %2 === 0 && i % 5 === 0) {
                    emptyArray.push("yu-oh");
                } else if (i % 3 === 0 && i % 5 === 0) {
                    emptyArray.push("gi-oh")
                } else if (i % 2 === 0){
                    emptyArray.push("yu");
                } else if (i % 3 === 0) {
                    emptyArray.push("gi");
                } else if (i % 5 === 0) {
                    emptyArray.push("oh");
                } else {
                    emptyArray.push(i)
                }
            }
            i++;
        }
        return emptyArray;
    }
};

checkYuGiOh();