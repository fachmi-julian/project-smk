function isTest(strict){
    // var arr = [], ds =2;

    // while (n>2){
    //     if( n% ds == 0){
    //         arr.push(ds);
    //         n = n/ds;
    //     }
    //     else{
    //         ds++
    //     }
    // }
    // return arr;

    return strict.split(' ').reverse().join(' ').split('').reverse().join('');
}

console.log(isTest('i am student'))