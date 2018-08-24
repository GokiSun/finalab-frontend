$(function () {

    $.ajax({
    	url:"http://result.eolinker.com/YcKnnr238f77d4669fdcfb9d50b1116bb07ef1a248d263e?uri=/sys/project/getAll",
        type: "POST",
        dataType: "JSON",
    	success: function (res) {
    		var projects = res.data;
            if (projects) {
                $('.project-body-list').html("");
                for (let i = 0;i < projects.length; i++){
                    $('.project-body-list').append(
                        '<li class="project-body-list-item">\n' +
                        '<div class="pro-list-item-img"><img src="'+ projects[i].coverImage +'" alt="project"></div>\n' +
                        '<div class="pro-list-item-bot">\n' +
                        '<p>'+ projects[i].name +'<a href="xxx"> <button class="pro-btn">了解更多</button></a></p>\n' +
                        '</div>\n' +
                        '</li>'
                    )
                }
            }
    	}
    })
})
