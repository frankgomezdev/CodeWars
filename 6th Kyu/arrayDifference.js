// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]


function arrayDiff(a,b) {
    let newArray = [];
    for(let i = 0; i < a.length; i++) {
        let bContainsAValue = false;
        for(let j = 0; j < b.length; j++) {
            if(a[i] === b[j]) 
              bContainsAValue = true;
        }
        if(!bContainsAValue) 
          newArray.push(a[i]);
    }
    return newArray;
}