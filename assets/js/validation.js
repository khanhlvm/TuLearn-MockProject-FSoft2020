$(document).ready(function() {
    $('#btndangki').on('click', function(e) {
        e.preventDefault();
        var inputSDT = $('#SĐT').val();
        var checkPhone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        if (!checkPhone.test(inputSDT)) {
            $('#phone').text("Không đúng định dạng SĐT xin hãy nhập lại");
            $("#phone").show().delay(3000).fadeOut(1000);
        }
    })
    $('#btnTiepTuc').on('click', function(e) {
        e.preventDefault();
        var inputState = $('#class_category').val();
        var inputState1 = $('#subject_category').val();
        var inputState2 = $('#num_category').val();
        var inputState3 = $('#hour_category').val();
        if (inputState == "") {
            $('#state').text("Không chọn item đầu tiên");
            $("#state").show().delay(3000).fadeOut(1000);
        }
        if (inputState1 == "") {
            $('#state1').text("Không chọn item đầu tiên");
            $("#state1").show().delay(3000).fadeOut(1000);
        }
        if (inputState2 == "") {
            $('#state2').text("Không chọn item đầu tiên");
            $("#state2").show().delay(3000).fadeOut(1000);
        }
        if (inputState3 == "") {
            $('#state3').text("Không chọn item đầu tiên");
            $("#state3").show().delay(3000).fadeOut(1000);
        }
    })
    $('#btncapNhat').on('click', function(e) {
        e.preventDefault();


        var inputState4 = $('#tt_category').val();
        if (inputState4 == "") {
            $('#state4').text("Không chọn item đầu tiên");
            $("#state4").show().delay(3000).fadeOut(1000);
        }
    })
    btncapNhat
})
// TrangTTM4
$(document).ready(function(){
    $('#btn-CapNhat').on('click', function(e) {
        e.preventDefault();
        var stringPattern = /[a-zA-Z]/;
        var hovaten_val = $("#formHovaTen").val();
        if(!stringPattern.test(hovaten_val)){
            $("#invalidHovaTen").text("Vui long nhap thong tin khong chua ky tu dac biet va ky tu so!");
            $("#invalidHovaTen").show();
        }

        var emailPattern =  /[a-zA-Z][\\w-]+@([\\w]+\\.[\\w]+|[\\w]+\\.[\\w]{2,}\\.[\\w]{2,})/;
        var formEmail_val = $("#formEmail").val();
        if(!emailPattern.test(formEmail_val)){
            $("#invalidEmail").text("Vui long nhap thong tin theo dung dinh dang Local-Part@DomainName");
            $("#invalidEmail").show();
        }

        var phonePattern = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        var SDT_val = $("#formSDT").val();
        if(!phonePattern.test(SDT_val)){
            $("#invalidSDT").text("Vui long nhap thong tin theo dung format!");
            $("#invalidSDT").show();
        }

        var cmndPattern = /[0-9]{9}/;
        var cmnd_val = $("#formCMND").val();
        if(!cmndPattern.test(cmnd_val)){
            $("#invalidCMND").text("Vui long nhap thong tin gom 9 ky tu phai la so");
            $("#invalidCMND").show();
        }

        var soNhaPatter =/^[0-9]{1,}([/][0-9]{1,}){0,}([ ][A-Z][a-z]{1,}){1,}/;
        var soNha_val = $("#formSoNha").val();
        if(!soNhaPatter.test(soNha_val)){
            $("#invalidSoNha").text("Vui long nhap thong tin theo dung dinh dang So nha + Ten duong");
            $("#invalidSoNha").show();
        }
    });
})
$(document).ready(function(){
    $('#btn-changePass').on('click', function(e) {
        e.preventDefault();
        var newPass_val = $("#formPassNew").val();
        if(newPass_val.length <8){
            $("#invalidNewPass").text("Vui long nhap dung pass");
            $("#invalidNewPass").show();
        }
        var formXNPassNew_val = $("#formXNPassNew").val();
        if(formXNPassNew_val != newPass_val){
            $("#invalidXNPass").text("Vui long nhap dung pass");
            $("#invalidXNPass").show();
        }
    });
})