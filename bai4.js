// nhập 1 mảng các số nguyên
// nhân 3 giá trị mỗi phần tử trong mảng (dùng map)
// xuất mảng mới ra màn hình.
// tính tổng các phần tử trong mảng (dùng reduce)
// kiểm tra xem thử có phải tất cả các phần tử đều lớn hơn 5 không? (dùng every)
// kiểm tra xem thử có phần tử nào đều lớn hơn 5 không? (dùng some)
var array = [];

function nhapMang(max) {
    for (var i = 0; i < 5; i++) {
        var so = Math.floor(Math.random() * max);
        array.push(so);
    }
    return array;
}

function nhanPhanTu() {
    const list = array.map(function (el) {
        return el * 3
    })
    console.log('mảng sau khi nhân 3: ' + list);
}

function xuatMang() {
    console.log('Các phần tử của mảng: ' + array)
}

function tinhTong() {
    const list = array.reduce(function (el, total) {
        return el + total
    }, 0)
    console.log('Tổng các phần tử trong mảng là: ' + list);
}

function kiemTatCa() {
    const isSucces = array.every(function (el) {
        return el > 5;
    })
    return isSucces;
}
function kiemTra1phantu() {
    const isel = array.some(function (el) {
        return el > 5;
    })
    return isel;
}
var menu = `=== QUẢN LÝ SINH VIÊN ===
1. nhập 1 mảng các số nguyên
2. nhân 3 giá trị mỗi phần tử trong mảng (dùng map)
3. xuất mảng mới ra màn hình.
4. tính tổng các phần tử trong mảng (dùng reduce)
5. kiểm tra xem thử có phải tất cả các phần tử đều lớn hơn 5 không? (dùng every)
6 kiểm tra xem thử có phần tử nào lớn hơn 5 không? (dùng some)
0. Thoát.
Nhập thao tác lựa chọn:`;
var flag = true;
do {
    var input = prompt(menu);
    switch (input) {
        case '1':
            nhapMang(20);
            console.log('Tạo mảng thành công!')
            break;
        case '2':
            nhanPhanTu();
            break;
        case '3':
            xuatMang();
            break;
        case '4':
            tinhTong();
            break;
        case '5':
            if (kiemTatCa()) {
                console.log('tất cả các phần tử đều lớn hơn 5')
            } else {
                console.log('Không phải tất cả các phần tử đều lớn hơn 5')
            }
            break;
        case '6':
            if (kiemTra1phantu()) {
                console.log('Có phần tử đều lớn hơn 5')
            } else {
                console.log('Không có phần tử đều lớn hơn 5')
            }
            break;
        case '0':
            console.log('Bạn đã thoát chương trình');
            flag = false;
            break;
        default:
            alert("Vui lòng nhập thao tác lựa chọn!");
    }
} while (flag);
