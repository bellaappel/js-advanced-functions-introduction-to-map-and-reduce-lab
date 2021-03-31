// Your code here
function mapToNegativize(sourceArray){
    const newArray = []
    for(let i=0; i < sourceArray.length; i++){
        newArray.push(-sourceArray[i])
    }
    return newArray
};

function mapToNoChange(array){
    return array
};

function mapToDouble(array){
    const newArray = []
    for(let i=0; i< array.length; i++){
        newArray.push(array[i] * 2)
    }
    return newArray
}

function mapToSquare(array){
    const newArray = []
    for(let i=0; i< array.length; i++){
        newArray.push(array[i] * array[i])
    }
    return newArray
}

function reduceToTotal(array, start = 0){
    let memo = start
    for(let i=0; i< array.length; i++){
        memo += array[i]
    }
    return memo
}

function reduceToAllTrue(array){
    for(let i = 0; i < array.length; i++){
        if(!!array[i] === false){
            return false
        }
    }
    return true
  }

  function reduceToAnyTrue(array){
    for(let i = 0; i < array.length; i++){
        if(!!array[i] === true){
            return true
        }
    }
    return false
  }