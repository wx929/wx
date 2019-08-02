var arr = [];

$('#lNav_lists li').each(function (index, item) { //循环
    var obj1 = {};
    var arr3 = [];
    $(item).find('.bor a').each(function (index, item) {
        var list = $(item).text();
        arr3.push(list)
    })
    var arr2 = []

    $(item).find('.lNav_pop dl').each(function (index, item) { //循环

        var title = $(item).find('dt a').text();
        var arr1 = [];
        var obj = {};

        $(item).find('dd a').each(function (index, item) { //循环

            var list = $(item).text();
            arr1.push(list);
        })
        obj = {
            title: title,
            list: arr1
        }
        arr2.push(obj);
    })
    obj1 = {
        bigTitle: arr3,
        bigList: arr2
    }
    arr.push(obj1);
})

JSON.stringify(arr)