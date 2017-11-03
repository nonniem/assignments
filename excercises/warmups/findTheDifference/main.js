function difference(arr1, arr2){
    const combined = [...arr1, ...arr2]
        return combined.filter(item => combined.indexOf(item) === combined.lastIndexOf(item))
}

console.log(difference([1,2,3], [2,3,4]))


const arr1Uniques = arr1.filter(item => !arr2.includes(item))
const arr2Uniques = arr2.filter(item => !arr1.includes(item))
return 
