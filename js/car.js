$(
    function () {

        // 1. 实现全选

        //j-checkbox   checkall   checked 同步

        $(".checkall").change(function () {

            $(".j-checkbox , .checkall").prop("checked", $(this).prop("checked"));
            // $(".checkall").prop("checked",$(this).prop("checked"));


            if ($(this).prop("checked")) {
                $(".j-checkbox").parent().parent().addClass("check-cart-item")
            } else {
                $(".j-checkbox").parent().parent().removeClass("check-cart-item")
            }


        })
        // 2. 点击三个checkbox  控制 checkall

        $(".j-checkbox").change(function () {
            // 状态  全选 x  t  f
            // length ?  jq 多个 ， 有几个被选中

            var cl = $(".j-checkbox:checked").length;
            var l = $(".j-checkbox").length;

            $(".checkall").prop("checked", cl === l)

            // 背景  check-cart-item
            // console.log($(this).parent().parent())


            //if
            if ($(this).prop("checked")) {
                $(this).parent().parent().addClass("check-cart-item")
            } else {
                $(this).parent().parent().removeClass("check-cart-item")
            }


        })


        // 3. 商品数量的控制  , 点击 + -  ，修改个数-

        // - decrement
        // + increment

        $(".decrement").click(function () {
            // 联动 ？
            // console.log($(".itxt").val());
            var n = $(this).siblings(".itxt").val() - 0;

            if (n === 1) {
                return false;
            }
            n--;
            $(this).siblings(".itxt").val(n);

            //  单价 p-price    小计p-sum

            var pPrice = $(this).parent().parent().siblings(".p-price").html().substr(1);
            var num = $(this).siblings(".itxt").val()
            // console.log()

            $(this).parent().parent().siblings(".p-sum").html("￥" + (num * pPrice).toFixed(2))

            getSum();
        })

        $(".increment").click(function () {
            // console.log($(".itxt").val());
            var n = $(this).siblings(".itxt").val() - 0;

            if (n === 20) {
                return false;
            }
            n++;
            $(this).siblings(".itxt").val(n);
            //  单价 p-price    小计p-sum

            var pPrice = $(this).parent().parent().siblings(".p-price").html().substr(1);
            var num = $(this).siblings(".itxt").val()
            // console.log()

            $(this).parent().parent().siblings(".p-sum").html("￥" + (num * pPrice).toFixed(2))
            getSum();
        })

        $(".itxt").change(function () {
            // console.log($(this).val());

            if ($(this).val() > 99) {
                $(this).val(99)
            }
            // }else{
            //     $(this).val($(this).val())
            // }

            //  单价 p-price    小计p-sum

            var pPrice = $(this).parent().parent().siblings(".p-price").html().substr(1);
            var num = $(this).val()

            $(this).parent().parent().siblings(".p-sum").html("￥" + (num * pPrice).toFixed(2))
            getSum();
        })


        // 4. input被直接输入 ，修改小计


        // 5. 总价  和   总件数
        getSum();

        function getSum() {
            // 总价
            // 拿到所有的小计   加法求和

            var sum = 0;

            $(".p-sum").each(function (i, v) {

                // console.log($(v).html().substr(1))
                sum += Number($(v).html().substr(1));
            })

            // price-sum

            $(".price-sum em").html("￥" + sum)
        }


        // 6. 点击删除 删除这一行


        // 7 .点击remove-batch  删除已选中

        $(".remove-batch").click(function (){
            $(".j-checkbox:checked").parent().parent().remove();
        })


        // 8. 删除全部


    }
)
