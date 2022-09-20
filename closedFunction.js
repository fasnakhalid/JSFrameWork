function closedFunction (){
    //parent level variable
    let counter = 0
    
    let increment = () => {
        counter++
        console.log(counter)
    }

    return increment
}
//setup (instantiate) function
let myCounterFunction = closedFunction()
//executes twice
myCounterFunction()
myCounterFunction()
