var array=[];
var i=0;
var	m;
var a=document.getElementById('inicio');
function fingresa(){
	if(i<5)
	{
		if (i==0){
			m=parseInt(a.value);
		}
		else if(a.value>m)
		{
			m=parseInt(a.value);
		}
		console.log(m);
		i+=1;
		array[i]=a.value;
	}
		
}

function fmostrar()
{
	document.getElementById('resultado').value=m;
}
