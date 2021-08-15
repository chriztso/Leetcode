var twoSum = function(numbers, target) {
    let obj = {}
    for(let i = 0; i < numbers.length; i++){
        obj[numbers[i]] = i+1
    }
    for(let i = 0; i < numbers.length; i++){
        let diff = target - numbers[i]
        if(obj[diff]){
            return [i+1, obj[diff]]
        }
    }
};