//create it in memory and executs in seperate code or part
function parent(){
    let message = 'Hello World'

    function child(){
        console.log(message)
    }
    //omit the fun brackets so it doesnt executes yet
    return child
}
//instanstiate
let childFunction = parent()

childFunction()