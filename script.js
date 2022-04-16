let output = document.getElementById("output")

function display(num){
    output.value = output.value + num
    console.log(output.value)
}
function clr(){
    output.value = ""
}
function del(){
    output.value = output.value.slice(0,-1)
}

function calculate(){
    try{
        output.value = eval(output.value)
    }catch(err){
        alert("error")
    }
}
