function add() 
{
    let value1=parseInt(document.getElementById("value1").value)
    let value2=parseInt(document.getElementById("value2").value)
    document.getElementById("total").innerText=value1 + value2  
}
function sub() 
{
    let value1=parseInt(document.getElementById("value1").value)
    let value2=parseInt(document.getElementById("value2").value)
    document.getElementById("sub").innerText= value1 - value2
}
function mul()
{
    let value1=parseInt(document.getElementById("value1").value)
    let value2=parseInt(document.getElementById("value2").value)
    document.getElementById("mul").innerText= value1 * value2
}
function div()
{
    let value1=parseInt(document.getElementById("value1").value)
    let value2=parseInt(document.getElementById("value2").value)
    document.getElementById("div").innerText= value1 / value2
}