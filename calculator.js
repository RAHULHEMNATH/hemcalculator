var display=document.getElementById("input")
function c(input)
{
    display.value += input;
}
function cl()
{
    display.value=""
}
function e()
{
    display.value=eval(display.value)
}
