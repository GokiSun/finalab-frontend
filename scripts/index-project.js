$(function () {
    var projects = [{
        "proName": "test1",
        "proDesc": "这是项目1",
        "proImg": "images/env1.jpg",
        "type": "外包"
    }, {
        "proName": "test2",
        "proDesc": "这是项目2",
        "proImg": "images/env2.jpg",
        "type": "获奖"
    },{
        "proName": "test3",
        "proDesc": "这是项目这是项目这是项目这是项目这是项目这是项目然后个人韩国给",
        "proImg": "images/env3.jpg",
        "type": "外包"
    }
    ];
    if (projects) {
        $('.project-body-list').html("");
        for (let i = 0;i < projects.length; i++){
            $('.project-body-list').append(
                '<li class="project-body-list-item">\n' +
                '<div class="pro-list-item-img"><img src="'+ projects[i].proImg +'" alt="project"></div>\n' +
                '<div class="pro-list-item-bot">\n' +
                '<p>'+ projects[i].proName +'<a href="xxx"> <button class="pro-btn">了解更多</button></a></p>\n' +
                '</div>\n' +
                '</li>'
            )
        }
    }
    // $.ajax({
    // 	url:"http://193.112.26.227:8090/project//all",
    // 	success: function (res) {
    // 		projects = res;
    // 		if (projects) {
    //             $('.customer-ul').html("");
    //             for (let i = 0;i < projects.length; i++){
    //                 if(projects[i].proDesc.length >= 20){
    //                     projects[i].proDesc = projects[i].proDesc.substr(0,20) + "...";
    //                 }
    //                 if(projects[i].type == '外包'){
    //                     $('.customer-ul').eq(0).append(
    //                         '<li class="customer-li">' +
    //                         '<img width="100%" src="'+projects[i].proImg+'" alt="">' +
    //                         '<div class="desc">' +
    //                         '<p><br>'+projects[i].proName+'</p>' +
    //                         '<p><br>'+projects[i].proDesc+'</p>' +
    //                         '</div>' +
    //                         '</li>'
    //                     )
    //                 } else{
    //                     $('.customer-ul').eq(1).append(
    //                         '<li class="customer-li">' +
    //                         '<img width="100%" src="'+projects[i].proImg+'" alt="">' +
    //                         '<div class="desc">' +
    //                         '<p><br>'+projects[i].proName+'</p>' +
    //                         '<p><br>'+projects[i].proDesc+'</p>' +
    //                         '</div>' +
    //                         '</li>'
    //                     )
    //                 }
    //             }
    //         }
    // 	}
    // })
})
