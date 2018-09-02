var projects = [];
var modelhead = document.getElementById('myModalLabel');
var modelbody = document.getElementById('modelbody');
var carouselinner = document.getElementById('carousel-inner');
function Detail(name) {
    for (let i = 0;i < projects.length; i++){
        if(name === projects[i].name){
            modelhead.innerText = "项目名称："+projects[i].name;
            var imglist = '';
            for (let j = 0;j < projects[i].imageList.length; j++) {
                imglist += '<div class="item';
                if(j == 0){
                    imglist += ' active';
                }
                imglist += '">\n<img src="'+projects[i].imageList[j]+'">\n';

                imglist += '</div>';
            }
            carouselinner.innerHTML = imglist;
            var mumberlist = '';
            for (let k = 0;k < projects[i].memberList.length; k++) {
                mumberlist += projects[i].memberList[k];
                if(k !== projects[i].memberList.length-1) mumberlist += "、";
            }
            modelbody.innerHTML =
                "<table class='table'>" +
                "<tr>" +
                "<td class='col-md-2'>项目成员：</td>" +
                "<td>"+ mumberlist +"</td>" +
                "</tr>" +
                "<tr>" +
                "<td>项目类别：</td>" +
                "<td>"+ projects[i].category +"</td>" +
                "</tr>" +
                "<tr>" +
                "<td>项目简介：</td>" +
                "<td>"+ projects[i].introduction +"</td>" +
                "</tr>" +
                "</table>";
            break;
        }
    }
}
$(function () {
    $.ajax({
    	url:"http://www.finalab.cn:12580/sys/project/getAll",
        type: "POST",
        dataType: "JSON",
    	success: function (res) {
    		projects = res.data;
            if (projects) {
                $('.project-body-list').html("");
                for (let i = 0;i < projects.length; i++){
                    if (projects[i].imageList == null) projects[i].imageList = "";
                    if (projects[i].coverImage == null) projects[i].coverImage = "";
                    $('.project-body-list').append(
                        '<li class="project-body-list-item">\n' +
                        '<div class="pro-list-item-img"><label>'+ projects[i].category +'</label><img src="'+ projects[i].coverImage +'" alt="nn"></div>\n' +
                        '<div class="pro-list-item-bot">\n' +
                        '<p>'+ projects[i].name +'<a> <button class="pro-btn btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal" onclick="Detail(\''+projects[i].name+'\')">了解更多</button></a></p>\n' +
                        '</div>\n' +
                        '</li>'
                    )
                }
            }
    	}
    });
})
