function findMissing(arr) {
    let start = 0
    let end = arr.length -1
    let missing_number = - Infinity
    while(start <= end) {
        let target = Math.floor((start + end)/2)
        if(arr[target] && arr[target+1] && arr[target] + 1 !== arr[target + 1]) {
            missing_number = arr[target] + 1
            break
        } else if(arr[target] && arr[target-1] && arr[target-1] !== arr[target] - 1) {
            missing_number = arr[target] - 1
            break
        } else {
            // find the side with min number of elements 
            let rightSideElements = target - start
            let leftSideElements = end - target
            if(rightSideElements >= leftSideElements) {
                start = target
            } else {
                end = target
            }         
        }      
    }
    return missing_number
}

let arr = [1,2,3,4,5,6,7,8,9,10,12,13,14]
console.log(findMissing([1,3,4,5,6]))
