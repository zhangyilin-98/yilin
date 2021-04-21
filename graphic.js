$(function () {
    var url = window.location.href;
    var id;
    if (url.indexOf('?') > -1) {
        id = url.substr(url.indexOf('?') + 1, 1);
    } else {
        id = '1';
    }

    var indexArr = ['1', '2', "3", '4'];
    var index = indexArr.findIndex(item => item === id);

    function showDiv(index) {
        for (var i = 0; i < indexArr.length; i++) {
            $('#' + indexArr[i]).hide();
        }
        $('#' + indexArr[index]).show();
        $('#titleId').html(indexArr[index]);
    }

    showDiv(index);

    $('#next').click(function () {
        console.log($(this).attr('data-type'))
        var type = $(this).attr('data-type');
        if (index >= 3) {
            if(type === 'graphic'){
                window.location.href = './photography.html?1';
            }
            if(type === 'photography'){
                window.location.href = './UX-design.html?1';
            }
            if(type === 'design'){
                window.location.href = '../contact.html';
            }
            return;
        }
        index++;
        showDiv(index);
    })

    $('#resume').click(function () {
        index = 0;
        showDiv(index);
    })


})