$(function() {
    class miaosha {
        constructor(data) {
            this.data = data;
        }
        init() {
            this.creatHtml()
            this.click1()
        }
        creatHtml() {
            let html2 = this.data.map(element => {
                let html = `<li>
                <div class="zhe">
                    <span>${element.zhe}</span>折
                </div>
                <div class="tu">
                    <a href=""><img src=${element.src} alt=""></a>
                </div>
                <div class="clum">
                    <a href="" class="clum-t">${element.tro}</a>
                    <p>
                        <span class="oneprice">￥${element.original_price}</span>
                        <span class="twoprice">￥${element.sale_price}</span>
                    </p>
                </div>
            </li>`
                return html;
            }).join('');
            let html1 = $(`<ul class="qie">${html2}</ul>`)
                // console.log(html2)
            $("#hotProC").append(html1);
        }
        click1() {

            $("#qiehuan2").click(function() {
                var num = $(".reduction").text()
                if (num == 1) {
                    $(".reduction").text("2");
                } else {
                    $(".reduction").text("1");
                }
                var left = $(".qie").css("left");
                // console.log(left)
                if (left == "0px") {
                    $(".qie").animate({ "left": "-1200px" });
                } else {
                    $(".qie").animate({ "left": "0" });
                }
            })

            $("#qiehuan1").click(function() {
                var num = $(".reduction").text()
                if (num == 1) {
                    $(".reduction").text("2");
                } else {
                    $(".reduction").text("1");
                }
                var left = $(".qie").css("left");
                var left = $(".qie").css("left");
                console.log(left)
                if (left == "0px") {
                    $(".qie").animate({ "left": "-1200px" });
                } else {
                    $(".qie").animate({ "left": "0" });
                }
            })


        }

    }
    var mySwiper = new Swiper('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {
            delay: 1000
        },

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // // 如果需要滚动条
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    })
    document.querySelector('.swiper-container').onmouseenter = function() {
        mySwiper.autoplay.stop();
    }
    document.querySelector('.swiper-container').onmouseleave = function() {
        mySwiper.autoplay.start();
    }

    let miao = new miaosha()
    $.getJSON("../js/chaozhimiaos.json", json => (new miaosha(json)).init());
})