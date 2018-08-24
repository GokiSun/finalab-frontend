$(function () {
    $.ajax({
        url: "http://result.eolinker.com/YcKnnr238f77d4669fdcfb9d50b1116bb07ef1a248d263e?uri=/sys/achieve/getAll",
        type: "POST",
        dataType: "JSON",
        success: function (res) {
            console.log(res);
            let graduates = res.data;
            if(graduates){
                $('.numberout-list').html('');

                let idx = Math.ceil(Math.random()*graduates.length);
                for (let i=0;i<5;i++){
                    if(idx>=graduates.length) idx = 0;
                    $('.numberout-list').append('<li class="numberout-list-item">\n' +
                        '<div class="nu-list-item-content">\n' +
                        '<div class="nu-item-content-head">\n' +
                        '<img src="'+ graduates[idx].headPortrait +'" alt="number">\n' +
                        '</div>\n' +
                        '<div class="nu-item-content-body">\n' +
                        '<h2>'+ graduates[idx].name +'</h2>\n' +
                        '<p class="nu-item-content-com">\n' +
                        ''+ graduates[idx].whereabouts +'\n' +
                        '</p>\n' +
                        '<p class="nu-item-content-desc">\n' +
                        ''+ graduates[idx].catchphrase +'\n' +
                        '</p>\n' +
                        '</div>\n' +
                        '</div>\n' +
                        '</li>');
                    idx++;
                }
            }
        }
    })
})
