function getValue(id)
{
    return parseInt(document.getElementById(id).value)
}
function setValue(value)
{
    document.getElementById("result").innerText=value
}
function calculator(opr)
{
    document.getElementById("resulth3").style.display="block"
    if(opr=="add")
    setValue(getValue("value1")+ getValue("value2"))
    if(opr=="sub")
    setValue(getValue("value1")- getValue("value2"))
    if(opr=="mul")
    setValue(getValue("value1")* getValue("value2"))
    if(opr=="div")
    setValue(getValue("value1")/ getValue("value2"))
}
function clearCalc()
{
    document.getElementById("value1").value=""
    document.getElementById("value2").value=""
    document.getElementById("resulth3").style.display="none"
}
function highlight()
{
    document.getElementById("resulth3").style.border="1px solid black"
}


