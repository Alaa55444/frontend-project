$(document).ready(function () {
    $(".plat1").mouseenter(function () {
        $(".forplat1").css("display", "inline-block")
    })
    $(".plat1").mouseleave(function () {
        $(".forplat1").css("display", "none")
    })


    $(".plat2").mouseenter(function () {
        $(".forplat2").css("display", "inline-block")
    })
    $(".plat2").mouseleave(function () {
        $(".forplat2").css("display", "none")
    })

    $(".plat3").mouseenter(function () {
        $(".forplat3").css("display", "inline-block")
    })
    $(".plat3").mouseleave(function () {
        $(".forplat3").css("display", "none")
    })

    $(".plat4").mouseenter(function () {
        $(".forplat4").css("display", "inline-block")
    })
    $(".plat4").mouseleave(function () {
        $(".forplat4").css("display", "none")
    })



    $("#register-form").on({
        submit : function(e){
            e.preventDefault();
            
            var errors= 0 ;
            var name = $("#name").val();
            var people = $("#people").val();
            var emial = $("#email").val();

            if(name.length < 5){
                $("#name").css("border", "2px solid red")
                $("#name").css("box-shadow", "0px 0px 5px red")
                errors+=1;
            }
            if(people.length > 1){ 
            $("#people").css("border", "2px solid red")
            $("#people").css("box-shadow", "0px 0px 5px red")
            errors+=1;
            }

            if(email.length < 8){ 
                $("#email").css("border", "2px solid red")
                $("#email").css("box-shadow", "0px 0px 5px red")
                errors+=1;
                }
              
                if(errors == 0)
                {
                    $("#register-form").submit();
                }

        }
    })
})