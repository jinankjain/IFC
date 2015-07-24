var button = document.querySelector("body");
function once(event)
{
   	alert(event.pageX+" "+event.pageY);
}
button.addEventListener("click", once);