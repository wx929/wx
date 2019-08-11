$(function() {
    let passwordA = $("#UserPassword");
    passwordA.blur(function(e) {
        // console.log(1);
        $(".prompt-size").addClass("tis2")

    });

    $(".dl").click(function() {
        // console.log(11);

        var phone = $("#UserName").val();
        var password = $("#UserPassword").val();

        // console.log(username)
        $.ajax({
            type: "post",
            url: "../php/dengl.php",
            dataType: "json",
            data: `phone=${phone}&password=${password}`,
            success: function(response) {
                    console.log(response);

                    if (response.status == "success") {
                        window.location.href = "http://127.0.0.1/code/kangaiduo/kangaiduo/html/kangaiduo.html";
                    } else {
                        $(".tis").addClass("tis1")
                    }
                }
                // $("")

        });

    })

})