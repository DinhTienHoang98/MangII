const students = [
    {
        id: 1,
        name: "Dinh",
        toan: 5,
        ly: 6,
        hoa: 7
    },
    {
        id: 2,
        name: "Nam",
        toan: 10,
        ly: 8,
        hoa: 5,
    },
    {
        id: 3,
        name: "Tan",
        toan: 3,
        ly: 5,
        hoa: 5,
    },
    {
        id: 4,
        name: "Hung",
        toan: 9,
        ly: 7,
        hoa: 7,
    },
    {
        id: 5,
        name: "Tri",
        toan: 9,
        ly: 8,
        hoa: 8,
    },
    {
        id: 6,
        name: "Anh",
        toan: 9,
        ly: 10,
        hoa: 8,
    },
    {
        id: 7,
        name: "Binh",
        toan: 10,
        ly: 6,
        hoa: 8,
    }
];
// Khi chọn 1: Duyệt mảng và kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không?
// Khi chọn 2: Duyệt mảng và kiểm tra xem có sinh viên nào xếp loại giỏi không?
// Khi chọn 3: Lọc ra các sinh viên xếp loại giỏi và in ra
// Khi chọn 4: Tìm 1 sinh viên xếp loại giỏi và hiển thị
// Khi chọn 5: Cộng cho mỗi sinh viên 1 điểm toán
// Khi chọn 6: Thêm thuộc tính sum để lưu tổng điểm 3 môn
// Khi chọn 7: Tính tổng điểm của các sinh viên
// Khi chọn 8: Tính điểm trung bình của các sinh viên
// Khi chọn 9: Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
// Khi chọn 10: Thoát khỏi hệ thống và in ra dòng chữ: "Goodbye!"
// Chọn chức năng
// https://github.com/nvdinh185/jscoban/blob/basic/11lamviecvoimang2/README.md


function kiemTraDTB() {
    const isSucces = students.every(function (student) {
        return student.toan >= 5 && student.ly >= 5 && student.hoa >= 5
    })
    return isSucces;
};

function kiemTraXepLoai(arrlist) {
    const isSucces = arrlist.some(function (student) {
        return student.toan >= 8 && student.ly >= 8 && student.hoa >= 8
    })
    return isSucces;
}
function locSV(arrlist) {
    const list = arrlist.filter(function (student) {
        return student.toan >= 8 && student.ly >= 8 && student.hoa >= 8;
    })
    return list;
}
function timSVGioi(arrlist) {
    const svGioi = arrlist.find(function (student) {
        return student.toan >= 8 && student.ly >= 8 && student.hoa >= 8;
    })
    return svGioi;
}
function congDiemToan(arrlist) {
    arrlist.forEach(student => {
        student.toan < 10 ? student.toan++ : '';
    });
}
function tongDiem3Mon(arrlist) {
    arrlist.forEach(student => {
        student.sum = student.toan + student.ly + student.hoa;
    });
}
function tongDiemSV(arrlist) {
    var total = 0;
    arrlist.forEach(student => {
        total += student.sum;
    });
    console.log('Tổng điểm của các Sv là: ' + total);
};
function diemTB(arrlist) {
    arrlist.forEach(student => {
        student.DiemTB = ((student.toan + student.ly + student.hoa) / arrlist.length).toFixed(2);
    })
};

// function sxTangDan(arrlist){
//     var len = arrlist.length;
//     arrlist.forEach(student => {

//     })
// }
function sxTangDan() {
    students.sort(function (a, b) {
        return a.sum - b.sum;
    });

    students.forEach(function (student) {
        return (student);
    });
}

// hàm hiển thị
function display(arrlist) {
    for (const el of arrlist) {
        for (const key in el) {
            console.log(key + ": " + el[key]);
        }
        console.log('===================');
    }
}
var menu = `=== QUẢN LÝ SINH VIÊN ===
1. kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không?
2. kiểm tra xem có sinh viên nào xếp loại giỏi không?
3. lọc ra các sinh viên xếp loại giỏi
4. tìm 1 sinh viên xếp loại giỏi
5. cộng cho mỗi sinh viên 1 điểm toán
6. thêm thuộc tính tổng điểm 3 môn
7. tính tổng điểm của các sinh viên
8. tính điểm trung bình của các sinh viên
9. Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
0. Thoát

Nhập thao tác lựa chọn:`;
var flag = true;
do {
    var input = prompt(menu);
    switch (input) {
        case '1':
            if (kiemTraDTB(students)) {
                console.log('Tất cả Sv đều đủ điểm Tb');
            } else {
                console.log('Có SV chưa đủ diểm Tb')
            }
            break;
        case '2':
            if (kiemTraXepLoai(students)) {
                console.log('có sinh viên xếp loại giỏi');
            } else {
                console.log('không có sinh viên nào xếp loại giỏi');
            }
            break;
        case '3':
            display(locSV(students));
            break;
        case '4':
            console.log(timSVGioi(students));
            break;
        case '5':
            congDiemToan(students);
            display(students);
            break;
        case '6':
            tongDiem3Mon(students);
            display(students);
            break;
        case '7':
            tongDiemSV(students);
            break;
        case '8':
            diemTB(students);
            display(students);
            break;
        case '9':
            sxTangDan(students);
            display(students);
            break;
        case '0':
            console.log('Bạn đã thoát chương trình');
            flag = false;
            break;
        default:
            alert("Vui lòng nhập thao tác lựa chọn!");
    }
} while (flag);
