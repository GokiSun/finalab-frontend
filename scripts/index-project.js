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
                        '<div class="pro-list-item-img"><label>'+ projects[i].name +'</label><img src="'+ projects[i].coverImage +'" alt="nn"></div>\n' +
                        '<div class="pro-list-item-bot">\n' +
                        '<p>'+ projects[i].category +'<a> <button class="pro-btn btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">了解更多</button></a></p>\n' +
                        '</div>\n' +
                        '</li>'
                    )
                }
            }
    	}
    })
})
