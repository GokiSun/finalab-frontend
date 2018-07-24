$(function() {

	var flag = false;

	function hover() {
		if (flag) return false;
		flag = true;
		$(this).siblings().animate({
			width: "15%",
			height: "400px"
		}, "100ms");
		$(this).animate({
			width: "40%",
			height: "470px"
		}, "100ms", function() {
			flag = false;
		});
		
		$(this).siblings().removeClass('fc-fc-list-item-active').addClass('fc-fc-list-item');
		$(this).removeClass('fc-fc-list-item').addClass('fc-fc-list-item-active');
	}
	$(".fc-fc-list>li").hover(
		hover,
		function() {});

	var wrap = $("#wrap-container"),
		wrapHeight = wrap.height(),
		car = $("#carousel-container"),
		carHegiht = car.height(),
		cwarpH = carHegiht - 51,
		wrapList = $("#wrap-container li"),
		dataWrapArr = wrapList.map(function(index, value){
						return value.dataset['wrap'];
					});
		dataWrapHeightArr = dataWrapArr.map(function(i, v){
			return $(v).offset().top;
		});
		wrapList.click(function(){
			var height = dataWrapHeightArr[$(this).index()];
			$("body, html").animate({
				scrollTop: height - 50
				},500, function() {
				/* stuff to do after animation is complete */
			});
		});
	$(window).scroll(function(event) {
		/* Act on the event */
		var scrollTop = $(window).scrollTop() ;
		if(scrollTop > cwarpH){
			wrap.addClass('wrap-fixed').removeClass('wrap-absolute');
			console.log("fixed");
		}
		else{
			wrap.addClass('wrap-absolute').removeClass('wrap-fixed');
			console.log("absolute");
		}

		var qid = -1;

		dataWrapHeightArr.map(function(index, value){
			if(scrollTop >= value - 50){
				qid = index;
			}
		});
		if(qid != -1) $(wrapList[qid]).addClass('active').siblings().removeClass('active');
		else wrapList.removeClass('active');

	});
});


window.onload = function () {
	alert(123)
    var list = document.getElementsByClassName('numberout-list')[0]//这个list指的是选取的整个ul，通过getElementsByClassName(拿到的是一个数组，长度为1
    var prev = document.getElementById('prev');//是呀没毛病呀对呀  ？？？ 为啥是一个长度为1的数组，不应该死一个对象？不是对象，你重新建一个html，我演示一下
    var next = document.getElementById('next');//等等你删我注释干嘛
    next.onclick = function () {
    	if(parseInt(list.style.left)!= -250)
		{
            list.style.left = parseInt(list.style.left) - 250 + 'px'
            console.log(list.style.left)
		}

    }
    prev.onclick = function () {
        if(parseInt(list.style.left)!= 0)
		{
            list.style.left = parseInt(list.style.left) + 250 + 'px'
            console.log(list.style.left)
		}

    }
}