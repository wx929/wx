$(function() {
    var fenye = function(coint = 0) {
        $.ajax({
            type: "post",
            url: "../php/goodlist.php",
            data: { "coint": coint },
            dataType: "json",
            success: function(response) {
                // console.log(response)
                let ranz = response.map((ele, i) => {
                        // console.log(ele)
                        return `<li data-index="${i+1}">
                <div class="list">
                    <a href="###" class="Ypic">
                        <img src=${ele.bigimg} alt="" class="bigimg">
                        <img src=${ele.smallimg} alt="" class="smollimg">
                    </a>

                    <p class="Yname">
                        <span class="ico_otc"></span>
                        <a href="" class="name">${ele.title}</a>
                    </p>
                    <p class="Yadv">${ele.activit}</p>
                    <p class="Ypribox">
                        <span class="sale_price">￥${ele.sale_price}</span>
                        <i class="qi">起</i>
                        <i class="original_price">￥${ele.original_price}</i>
                    </p>
                </div>
            </li>`
                    }).join('')
                    // console.log(ranz);

                $('.goodlists').html(ranz);
            },
            error: function(data) {
                console.log(data);
            }
        })
    };
    fenye();
    var coint = 0;
    $(".a1").click(function() {
        if (coint == 1) {
            coint--;
            fenye(coint);
        }

    })
    $(".a4").click(function() {
        if (coint == 0) {
            coint++;
            fenye(coint);
        }
    })
    $("#a2").click(function() {
        let coint = $("#a2").text() - 1;
        // console.log(coint);
        fenye(coint);
    })
    $(".a3").click(function() {
        let coint = $("#a3").text() - 1;
        // console.log(coint);

        fenye(coint);
    })




    // $('.list').hover(function() {
    //     console.log(1)
    //     $('.smollimg').addClass('.act')

    // });s
    // $(".goodlists").on(mouseenter(function() {
    //     console.log(666);

    // })

    $(".goodlists").on("mouseenter", ".list", function() {
        $(this).find('.smollimg').show()
            // console.log(11)

    })
    $(".goodlists").on("mouseleave", ".list", function() {
        $(this).find('.smollimg').hide()
            // console.log(11)

    })
    $(".goodlists").on("click", "li", function() {
        window.location.href = "http://127.0.0.1/code/kangaiduo/kangaiduo/html/xiangqingye.html";
    })
})