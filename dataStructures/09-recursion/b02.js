// 计算一个数的阶乘

{
    // 迭代阶乘
    function factorialIterative(number) {
        if (number < 0) return undefined;
        let total = 1;
        while(number > 0) {
            total*= number;
            number--;
        }
        return total
    }
    console.log(factorialIterative(5))
    
    function factorial(num) {
        console.trace();
        // 基线条件
        if (num === 1 || num === 0) return 1
        return num * factorial(num-1)
    }
    console.log(factorial(5))
}