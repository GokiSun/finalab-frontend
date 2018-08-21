$(function () {
    var graduates = [{
        "name":"赵一霖",
        "imgSrc":"images/zyl.jpg",
        "nowLocation":"腾讯",
        "comment":"只有你学会把自己已有的成绩都归零，才能腾出空间去接纳更多的新东西，如此才能使自己不断的超越自己。"
    }];
    if(graduates){
        $('.numberout-list').html('');
        for (let i=0;i<graduates.length;i++){
            $('.numberout-list').append('<li class="numberout-list-item">\n' +
                '<div class="nu-list-item-content">\n' +
                '<div class="nu-item-content-head">\n' +
                '<img src="'+ graduates[i].imgSrc +'" alt="number">\n' +
                '</div>\n' +
                '<div class="nu-item-content-body">\n' +
                '<h2>'+ graduates[i].name +'</h2>\n' +
                '<p class="nu-item-content-com">\n' +
                ''+ graduates[i].nowLocation +'\n' +
                '</p>\n' +
                '<p class="nu-item-content-desc">\n' +
                ''+ graduates[i].comment +'\n' +
                '</p>\n' +
                '</div>\n' +
                '</div>\n' +
                '</li>')
        }
    }
    // $.ajax({
    //     url: "http://193.112.26.227:8090/graduate/all",
    //     type: "POST",
    //     success: function (res) {
    //         graduates = res;
    //         if(graduates){
    //             $('.numberout-list').html('');
    //             for (let i=0;i<graduates.length;i++){
    //                 $('.numberout-list').append('<li class="numberout-list-item">\n' +
    //                     '<div class="nu-list-item-content">\n' +
    //                     '<div class="nu-item-content-head">\n' +
    //                     '<img src="images/tmq.png" alt="number">\n' +
    //                     '</div>\n' +
    //                     '<div class="nu-item-content-body">\n' +
    //                     '<h2>'+ graduates[i].name +'</h2>\n' +
    //                     '<p class="nu-item-content-com">\n' +
    //                     ''+ graduates[i].nowLocation +'\n' +
    //                     '</p>\n' +
    //                     '<p class="nu-item-content-desc">\n' +
    //                     ''+ graduates[i].comment +'\n' +
    //                     '</p>\n' +
    //                     '</div>\n' +
    //                     '</div>\n' +
    //                     '</li>')
    //             }
    //         }
    //     }
    // })
})
