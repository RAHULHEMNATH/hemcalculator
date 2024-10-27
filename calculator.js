const display=document.getElementById("one")
function c(input)
{
    display.value += input;
}
function calc(input)
{
    display.value=eval(display.value)
}
function cl()
{
    display.value=" "
}