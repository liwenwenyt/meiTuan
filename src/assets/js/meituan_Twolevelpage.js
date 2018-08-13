//吸顶效果
$(function(){
	var tit = document.getElementById("nearxiding"); 
   	var bodyBox = document.getElementById("zong");
	var titleTop = tit.offsetTop; 
    bodyBox.onscroll = function(){  
        var btop = bodyBox.scrollTop;
        if(btop>titleTop){  
            tit.style.cssText = "position:fixed;top:0.44rem;left:0;z-index:1;";
        }else{  
            tit.style.cssText = ""; 
        }  
    }
})