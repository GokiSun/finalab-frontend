$(function(){
	var wrap = $("#wrap-container"),
		wrapHeight = wrap.height(),
		car = $("#about-carousel-container"),
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
		}
		else{
			wrap.addClass('wrap-absolute').removeClass('wrap-fixed');
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

	// $(".award-li").hover(function(){
	// 	$(this).addClass('active').siblings().removeClass('active');
	// }, function(){
	// });
	$("#about-carousel-bar").particleground({
		dotColor: '#5cbdaa',
    	lineColor: '#5cbdaa'
	});

	//the leaders
    $.ajax({
        url:"http://result.eolinker.com/YcKnnr238f77d4669fdcfb9d50b1116bb07ef1a248d263e?uri=/sys/member/getCouncil",
        type: "POST",
        dataType: "JSON",
        success: function (res) {
            let result = res.data;
            if (result) {
                $('.leader-ul').html("");
                for (let i = 0;i < result.length; i++){
                    $('.leader-ul').append('<li class="leader-li">\n' +
                        '<p class="leader-photo"><img src="'+ result[i].image +'" alt=""></p>\n' +
                        '<h2 class="leader-name">'+ result[i].name +'</h2>\n' +
                        '<h4 class="leader-job">'+ result[i].levelName +'</h4>\n' +
                        '<p class="leader-words">'+ result[i].catchphrase +'</p>\n' +
                        '</li>')
                }
            }
        }
    })
	//the win
    $.ajax({
        url:"http://result.eolinker.com/YcKnnr238f77d4669fdcfb9d50b1116bb07ef1a248d263e?uri=/sys/winning/getAll",
        type: "POST",
        dataType: "JSON",
        success: function (res) {
            let result = res.data;
            let idx = Math.ceil(Math.random()*result.length);
            if (res) {
                $('.award-ul').html("");
                for (let i = 0;i < 6; i++){
                    if(idx>=result.length) idx = 0;
                    $('.award-ul').append('<li class="award-li">\n' +
                        '<h4><img src="'+result[idx].awardImage+'" alt="">'+result[idx].name+'</h4>\n' +
                        '<p class="award-award">'+result[idx].awardName+'</p>\n' +
                        '<div class="award-imglist">\n' +
                        '<h4>奖项照</h4>\n' +
                        '<img src="'+result[idx].awardImage+'" alt="">\n' +
                        '</div>\n' +
                        '<div class="award-time">\n' +
                        ''+result[idx].time.substring(0,10)+'\n' +
                        '</div>\n' +
                        '<div class="award-desc">\n' +
                        ''+result[idx].profile+'' +
                        '</div>\n' +
                        '</li>');
                    idx++;
                }
                $(".award-li").hover(function(){
                    $(this).addClass('active').siblings().removeClass('active');
                }, function(){
                });
            }
        }
    })
});
