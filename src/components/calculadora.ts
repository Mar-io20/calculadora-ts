
function calculator(valueA: number, valueB: number, operation: string) {
    if(operation === "+") {
        return +valueA + +valueB
    }
    else if (operation === "-") {
        return +valueA - +valueB
    }
    else if (operation === "*") {
        return +valueA * +valueB
    }
    else if(operation === "/") {
        return +valueA / +valueB
    }
}

const result = calculator(1,2,"+")
console.log(result)

export default calculator;