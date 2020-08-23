$(".more1,.more2").hide();
var counter1 = 1;
function setInputDate(_id) {
    var _dat = document.querySelector(_id);
    var hoy = new Date(),
        d = hoy.getDate(),
        m = hoy.getMonth() + 1,
        y = hoy.getFullYear(),
        data;

    if (d < 10) {
        d = "0" + d;
    };
    if (m < 10) {
        m = "0" + m;
    };

    data = y + "-" + m + "-" + d;
    console.log(data);
    _dat.value = data;
};

setInputDate("#datepicker");

$(document).ready(function () {


    $('#btnDangBai, #btnCapNhap').on('click', function (e) {
        e.preventDefault();
        var inputState1 = $('#MonHoc').val();
        var inputState2 = $('#GioiTinhGiaSu').val();
        var inputState3 = $('#TrinhDoGiaSu').val();
        var inputState4 = $('#HocPhiDeXuat').val();
        // var inputState5 = $('#datepicker').val();
        var checkMoney = /^([1-9]+\d*)$/g;
        if (inputState1 == "" || inputState2 == "" || inputState3 == "" || inputState4 == "" || !checkMoney.test(inputState4)) {
            $("html, body").animate({ scrollTop: 0 }, 600);
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
        if (inputState4 == "" || !checkMoney.test(inputState4)) {
            $('#state4').text("Làm ơn nhập số nguyên dương");
            $("#state4").show().delay(3000).fadeOut(1000);
        }
        // if (inputState5 == "") {
        //     $('#state5').text("Không chọn item đầu tiên");
        //     $("#state5").show().delay(3000).fadeOut(1000);
        // }



    })
   
})



var serie1 = $('.gioranh1').clone();
var serie2 = $(".gioranh2").clone();
// var serie3 = $(".gioranh3").clone();
// var serie4 = $(".gioranh4").clone();
// var serie5 = $(".gioranh5").clone();
// var serie6 = $(".gioranh6").clone();
// var serie7 = $(".gioranh7").clone();

function addInput(divName, template) {
    if (counter == 5) {
        document.getElementById("add_more_text").remove();
    } else {
        var newdiv = document.createElement('div');
        newdiv.className = 'added';
        newdiv.innerHTML = document.getElementById(divName).innerHTML;
        document.getElementById(template).appendChild(newdiv);
        counter++;
    }

    var selectElements = document.querySelectorAll('select');
    for (var i = 0; i < selectElements.length; i++) {
        selectElements[i].id = 'id-' + i;
        selectElements[i].name = 'category' + i;
    }
}


function ThemGio(obj) {
    var idNgay = obj.parentNode.id;
    switch (idNgay) {
        case 'ngay1':
            var newgio = document.createElement('div');
            newgio.classList.add('row', 'canh', 'col-12', 'gioranh1', 'added');
            newgio.innerHTML = document.getElementById('idGioRanh1-0').innerHTML;
            document.getElementById('add_more1').appendChild(newgio);

            // var selectElements = document.querySelectorAll('.gioranh1');
            // for (var i = 1; i < selectElements.length; i++) {
            //     selectElements[i].id = 'idGioRanh1-' + i;
            // }
            break;
        case 'ngay2':

            var newgio = document.createElement('div');
            newgio.classList.add('row', 'canh', 'col-12', 'gioranh2', 'added');
            newgio.innerHTML = document.getElementById('idGioRanh2-0').innerHTML;
            document.getElementById('add_more1').appendChild(newgio);


            break;
        case 3:
            var newgio = document.createElement('div');
            newgio.classList.add('row', 'canh', 'col-12', 'gioranh3', 'added');
            newgio.innerHTML = document.getElementById('idGioRanh3-0').innerHTML;
            document.getElementById('add_more1').appendChild(newgio);


            break;
        case 4:
            var newgio = document.createElement('div');
            newgio.classList.add('row', 'canh', 'col-12', 'gioranh4', 'added');
            newgio.innerHTML = document.getElementById('idGioRanh4-0').innerHTML;
            document.getElementById('add_more1').appendChild(newgio);


            break;
        case 5:
            var newgio = document.createElement('div');
            newgio.classList.add('row', 'canh', 'col-12', 'gioranh5', 'added');
            newgio.innerHTML = document.getElementById('idGioRanh5-0').innerHTML;
            document.getElementById('add_more1').appendChild(newgio);


            break;
        case 6:
            var newgio = document.createElement('div');
            newgio.classList.add('row', 'canh', 'col-12', 'gioranh6', 'added');
            newgio.innerHTML = document.getElementById('idGioRanh6-0').innerHTML;
            document.getElementById('add_more1').appendChild(newgio);


            break;
        case 7:
            var newgio = document.createElement('div');
            newgio.classList.add('row', 'canh', 'col-12', 'gioranh7', 'added');
            newgio.innerHTML = document.getElementById('idGioRanh7-0').innerHTML;
            document.getElementById('add_more1').appendChild(newgio);


            break;

        default:

    }

}

// function ThemNgay() {
//     if (counter == 7) {
//         document.getElementById("themngay").hide();
//     } else {
//         var newngay = document.createElement('div');
//         newngay.classList.add('row', 'canh', 'added');
//         newngay.innerHTML = document.getElementById('idGioRanh1-0').innerHTML;;
//         document.getElementById('add_more_ngay').appendChild(newngay);
//         counter++;
//         var selectElements = document.querySelectorAll('.ngay');
//         for (var i = 0; i < selectElements.length; i++) {
//             selectElements[i].id = 'ngay' + i;
//         }


//         // var newdiv = document.createElement('div');
//         // newdiv.className = 'added';
//         // newdiv.innerHTML = document.getElementById(divName).innerHTML;
//         // document.getElementById(template).appendChild(newdiv);
//         // counter++;
//     }

// }

function HienThi(num) {
    var anhien = ".more" + num
    $(anhien).slideToggle('slow');
}

function XoaGio(obj) {
    if (obj.parentNode.classList.contains('added')) {
        obj.parentNode.parentNode.removeChild(obj.parentNode);
    }

}





function XoaNgay(num) {
    switch (num) {
        case 2:
            var ngay = "#ngay" + num;
            $(ngay).hide();
            $(".themngay2").show();
            break;
        case 2:

            var serie = serie2.clone();
            $(".themgio").before(serie);
            break;
        default:
            $(".themgio").before(serie1);
    }
}

function ThemNgay(num) {
    switch (num) {
        case 2:
            var ngay = "#ngay" + num;
            $(ngay).show();
            $(".themngay2").hide();
            break;
        case 2:

            var serie = serie2.clone();
            $(".themgio").before(serie);
            break;
        default:
            $(".themgio").before(serie1);
    }

}

