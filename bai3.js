const students = [
    {
        id: 1,
        name: 'Nguyen Van Teo',
        classId: 1
    },
    {
        id: 2,
        name: 'Nguyen Van Ti',
        classId: 2
    },
    {
        id: 3,
        name: 'Tran Van Tun',
        classId: 3
    },
    {
        id: 4,
        name: 'Nguyen Thi Heo',
        classId: 1
    },
    {
        id: 5,
        name: 'Le Thi Be',
        classId: 1
    }
]

const classList = [
    {
        id: 1,
        name: "CNTT"
    },
    {
        id: 2,
        name: 'DTVT'
    },
    {
        id: 3,
        name: 'THXD'
    },
    {
        id: 4,
        name: 'XDDD'
    }
]
// Hãy hiển thị danh sách sinh viên thuộc lớp CNTT theo dạng bảng gồm các thông tin: id, studentName, className
function hienThiDanhSachSinhVienCNTT() {
    // Tạo một biến để lưu danh sách sinh viên thuộc lớp CNTT
    var danhSachSinhVienCNTT = [];

    // Lặp qua mảng students để tìm sinh viên thuộc lớp CNTT
    students.forEach(function (student) {
        // Kiểm tra classId của sinh viên có phù hợp với lớp CNTT hay không
        if (student.classId === 1) {
            // Tìm lớp CNTT tương ứng với classId
            var className = classList.find(function (cls) {
                return cls.id === student.classId;
            });

            // Tạo một đối tượng mới chứa thông tin sinh viên và lớp CNTT
            var sinhVienCNTT = {
                id: student.id,
                studentName: student.name,
                className: className.name
            };

            // Thêm sinh viên vào danh sách sinh viên thuộc lớp CNTT
            danhSachSinhVienCNTT.push(sinhVienCNTT);
        }
    });
    console.table(danhSachSinhVienCNTT);
}
// Gọi hàm để hiển thị danh sách sinh viên CNTT
hienThiDanhSachSinhVienCNTT();
