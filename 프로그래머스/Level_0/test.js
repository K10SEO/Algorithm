let numbers = [1, 2, 3, 4, 5]

function solution(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2],[]);
}

console.log(solution(numbers))