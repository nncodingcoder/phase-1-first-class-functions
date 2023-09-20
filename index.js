 function receivesAFunction(spy){
    spy()
}

function returnsANamedFunction() {
    return function current() {
        console.log()
    }
}

function returnsAnAnonymousFunction() {
    return function() {}
}