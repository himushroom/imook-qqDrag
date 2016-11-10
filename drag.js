window.onload = drag()
function drag(){
	var drag = document.getElementById("drag");
	drag.onmousedown = fnDown
	// 切换状态
	document.getElementById("state").onclick = function(e){
		e = event || window.event;
		e.stopPropagation()
		document.getElementById("state_list").style.display = 'block'
	}
	var lis = document.getElementById("state_list").getElementsByTagName('li')
	// 遍历li标签,设置鼠标滑过效果,此处css也可以实现
	for(i=0;i<lis.length;i++){
		lis[i].onmouseover=function () {
			this.style.background='#d6d6d6';
		}
		lis[i].onmouseout=function () {
			this.style.background='#fff';
		}
		lis[i].onclick=function (e) {
			e = event || window.event; //主要是为了兼容IE8以前的浏览器
			e.stopPropagation()
			document.getElementById("state_list").style.display = 'none'
			document.getElementsByClassName('on')[0].innerHTML = this.getElementsByClassName('state')[0].innerHTML
		}
	}
	document.onclick = function () {
		document.getElementById("state_list").style.display = 'none'
	}
}

function fnDown(){
	e = event || window.event;
	var onDrag = document.getElementById("con"),
		// 光标按下时光标在面板中距离面板的距离
		disX = e.clientX - onDrag.offsetLeft,
		disY = e.clientY - onDrag.offsetTop;
	// 移动
	document.onmousemove = function(e){
		e = event || window.event;
		fnMove(e,disX,disY);
	}
	// 释放
	document.onmouseup=function(){
		document.onmousemove=null;
		document.onmouseup=null;
	}
}

function fnMove(e,posX,posY){
	var onDrag = document.getElementById("con"),
		l = e.clientX-posX,
		t = e.clientY-posY,
		winW = document.documentElement.clientWidth || document.body.clientWidth,
		winH = document.documentElement.clientHeight || document.body.clientHeight,
		maxW = winW-onDrag.offsetWidth
		maxH = winH-onDrag.offsetHeight
	if (l<0){
		l = 0 
	} else if (l > maxW){
		l = maxW
	}
	if (t<0){
		t = 0 
	} else if (t > maxH){
		t = maxH
	}
	onDrag.style.left = l + 'px'
	onDrag.style.top = t + 'px'
}