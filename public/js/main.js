$(".dropdown").click(function(){
    var body = $(this).children('.dp-body');
    var collapse = $(this).children('.dp-title').children('i');
    var itemNum = $(body).children('label') ? $(body).children('label').length : 0;
    if(body.css('height') == '0px') {
        body.css('height', itemNum + '00%');
        collapse.css('transform', 'rotate(180deg) scale(1.4)');
    }
    else {
        body.css('height', '0px');
        collapse.css('transform', 'rotate(0deg) scale(1.4)');
    }
});
