$(function() {
    class jian {
        constructor(data) {
            this.data = data;
            // console.log(this.data)
        }
        init() {
            this.ranzHtml()
            this.click1()
        }

        ranzHtml() {
            var html2 = this.data[0].map(element => {

                var html = `
                    <li>
                <a href="" class="imgpro">
                <img src="${element.src1}" alt="">
                </a>
                <div class="hotPadding">
                <p class="nameC">
                <a href="">${element.zhe}</a>
                </p>
                <p class="nameD">￥${element.original_price}</p>
                </div>
                 </li>
                         `
                return html;
            }).join('');
            $(".aa1").append(html2);
        }
        click1() {
            var index = 0;
            $(".changeBtn").click(() => {

                index++
                if (index >= this.data.length) {
                    index = 0
                }
                var html2 = this.data[index].map(element => {

                    var html = `
                    <li>
                <a href="" class="imgpro">
                <img src="${element.src1}" alt="">
                </a>
                <div class="hotPadding">
                <p class="nameC">
                <a href="">￥${element.zhe}</a>
                </p>
                <p class="nameD">${element.original_price}</p>
                </div>
                 </li>
                         `
                    return html;
                }).join('');
                $(".aa1").html(html2);
                // var left = $(".aa1").css('left')
                // if (left == "0px") {
                //     $(".aa1").css({ "left": "-1200px" });
                // } else {
                //     $(".aa1").css({ "left": "0" });
                // }
            })
        }
    }



    $.getJSON("../js/jiankang.json", function(sa) {
        new jian(sa).init()
    });

})