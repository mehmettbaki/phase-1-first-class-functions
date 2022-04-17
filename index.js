function receivesAFunction(c) {
    c()
}

function myF() {
    console.log("myf")
}


function returnsANamedFunction() {
    return function myF(){console.log("memo")}
}

function returnsAnAnonymousFunction () {
    return ()=>console.log("memo")
    
}