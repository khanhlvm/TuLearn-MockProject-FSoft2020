$(document).ready(function(){
    $('#btn-CapNhat').on('click', function(e) {
        e.preventDefault();
        var stringPattern = /[a-zA-Z]/;
        var hovaten_val = $("#formHovaTen").val();
        if(!stringPattern.test(hovaten_val)){
            $("#invalidHovaTen").text("Vui long nhap dung format!");
            $("#invalidHovaTen").show();
        }
        var emailPattern =  /[a-zA-Z][\\w-]+@([\\w]+\\.[\\w]+|[\\w]+\\.[\\w]{2,}\\.[\\w]{2,})/;
        var formEmail_val = $("#formEmail").val();
        if(!emailPattern.test(formEmail_val)){
            $("#invalidEmail").text("Vui long nhap dung format Email!");
            $("#invalidEmail").show();
        }
        var phonePattern = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        var SDT_val = $("#formSDT").val();
        if(!phonePattern.test(SDT_val)){
            $("#invalidSDT").text("Vui long nhap dung format SDT!");
            $("#invalidSDT").show();
        }
        var cmndPattern = /[0-9]{9}/;
        var cmnd_val = $("#formCMND").val();
        if(!cmndPattern.test(cmnd_val)){
            $("#invalidCMND").text("Vui long nhap dung format CMND!");
            $("#invalidCMND").show();
        }
        var soNhaPatter =/^[0-9]{1,}([/][0-9]{1,}){0,}([ ][A-Z][a-z]{1,}){1,}/;
        var soNha_val = $("#formSoNha").val();
        if(!soNhaPatter.test(soNha_val)){
            $("#invalidSoNha").text("Vui long nhap dung format dia chi nh!");
            $("#invalidSoNha").show();
        }
    });
})