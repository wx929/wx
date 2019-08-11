$(function() {

    let passwordAText = "";

    /* 手机号码 */
    let phoneText = "";

    let phone = $("#txtMobile");
    let passwordA = $("#txtPwd");

    /* 正则表达式 */

    let regPhone = /^1[3-9]\d{9}$/; /* 1开头 第二位3-9 后面全都是数字   11位 */
    let regPassword = /^[a-zA-Z0-9]{6,16}$/;

    phone.blur(function(e) {
        let text = $.trim($(this).val());
        phoneText = text
        console.log(text)
        let msg = $(this).parent().nextAll(".tis");

        if (text.length == 0) {
            msg.addClass("false").removeClass("rigt");
            msg.html("手机号码不能为空");
        } else if (!regPhone.test(text)) {
            msg.addClass("false").removeClass("right");
            msg.html("请输入正确的手机号码！");
        } else {

            msg.addClass("right").removeClass("false");
            msg.html("keyong");
        }
    });

    passwordA.blur(function(e) {
        let text = $.trim($(this).val());
        passwordAText = text;

        let msg = $(this).parent().nextAll(".tis");


        if (text.length == 0) {
            msg.addClass("false").removeClass("rigt");
            msg.html("密码不能为空");
        } else if (!regPassword.test(text)) {
            msg.addClass("false").removeClass("rigt");
            msg.html("您输入的密码不符合规范");
        } else {
            msg.addClass("right").removeClass("false");
            msg.html("keyong");
        }
    });


    /* 点击注册按钮的事件 */
    // (1) 先获取标签绑定点击事件
    // (2) 检查是否满足条件，如果满足条件那么就发送网络请求，否则提示
    // [1] 表单要验证通过  && [2] 勾选同意注册协议
    $("#toLogin").click(function() {
        let isCheck = $("#kadText").is(":checked");
        if (!isCheck) {
            alert("请阅读并同意用户协议");
            return;
        }
        // passwordAText = "sdfsdfs";
        // phoneText = "3444444335";

        if (
            phoneText.length != 0 &&

            passwordAText.length != 0 &&

            $(".false").length == 0
        ) {
            $.ajax({
                type: "post",
                url: "../php/zhuce.php",
                dataType: "json",
                data: {
                    'password': passwordAText,
                    'phone': phoneText
                },
                success: function(response) {
                    console.log(response);
                    /* 先检查请求的结果，然后做出对应的处理 */
                    if (response.status == "success") {
                        alert("注册成功");
                        /* 跳转到登录页面 */
                        window.location.href = "http://127.0.0.1/code/kangaiduo/kangaiduo/html/denglu.html"
                    } else {
                        alert('注册失败');
                    }
                }
            });
            // $("#toLogin").removeClass("background-gray")
        }

        // http://127.0.0.1/day-31/Code/login/sever/api/register.php 
        // http://127.0.0.1/day-31/Code/login/server/api/register.php
    })

});