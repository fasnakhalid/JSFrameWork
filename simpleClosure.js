//create a next js file
function parent(){
    let message = 'Hello World'
//most local scope will run
    function child(){
       // let message = 'hello from child'
        console.log(message)
    }
    child()

}
//call the parent funcion
parent()
