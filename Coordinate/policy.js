var cnt = 0;
var maxLimit = 5;
window.addEventListener("click", function(event){
	if(cnt<maxLimit)
	{
		alert(0+" "+0);
		event.stopPropagation();
		cnt = cnt+1;
	}
	if(cnt>maxLimit)
	{
		cnt = 0;
	}
},true);