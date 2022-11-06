
let mergedArray = [...nums1, ...nums2];
let sortedArray = mergedArray.sort((a, b) => a - b);
let n = sortedArray.length
console.log(n)
if(n%2){
    p = (n+1)/2
    let median = sortedArray[p-1]
    console.log(median);
    return median;
}
else{
    p = n/2
    let median = (sortedArray[p]+sortedArray[p-1])/2
    console.log('no')
    return median;
}

