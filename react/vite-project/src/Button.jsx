export default function Button(){
    return(
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onClick={printBye}  onMouseOver={handleHover}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsa exercitationem. Illum impedit velit necessitatibus reiciendis eius obcaecati blanditiis maiores ipsum ea, libero sint laborum odit fuga qui voluptas ratione!</p>
            <button onDoubleClick={handleDoubleClick}>Double click</button>
        </div>
    )
}
function printHello(event){
    console.log("helllo");
    console.log(event);
    
}

function printBye(){
    console.log("Bye");
}
function handleHover(){
    console.log("Hover");
}

function handleDoubleClick(){
    console.log("Double Click");
}
