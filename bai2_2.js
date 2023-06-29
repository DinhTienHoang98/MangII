const students = [
    {
        id: 5,
        name: "Tri",
        toan: 9,
        ly: 8,
        hoa: 9,
    },
    {
        id: 6,
        name: "Anh",
        toan: 9,
        ly: 10,
        hoa: 3,
    },
    {
        id: 7,
        name: "Binh",
        toan: 6,
        ly: 6,
        hoa: 6,
    }
];

// Chức năng 1: Duyệt mảng và kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không?
function checkAllStudentsPass(subject) {
    return students.every(student => (student[subject] >= 5));
}

// Chức năng 2: Duyệt mảng và kiểm tra xem có sinh viên nào xếp loại giỏi không?
function checkAnyExcellentStudent() {
    return students.some(student => ((student.toan + student.ly + student.hoa) / 3 >= 8));
}

// Chức năng 3: Lọc ra các sinh viên xếp loại giỏi và in ra
function filterExcellentStudents() {
    return students.filter(student => ((student.toan + student.ly + student.hoa) / 3 >= 8));
}

// Chức năng 4: Tìm 1 sinh viên xếp loại giỏi và hiển thị
function findExcellentStudent() {
    return students.find(student => ((student.toan + student.ly + student.hoa) / 3 >= 8));
}

// Chức năng 5: Cộng cho mỗi sinh viên 1 điểm toán
function increaseMathScore() {
    students.forEach(student => {
        student.toan += 1;
    });
}

// Chức năng 6: Thêm thuộc tính sum để lưu tổng điểm 3 môn
function addTotalScoreProperty() {
    students.forEach(student => {
        student.sum = student.toan + student.ly + student.hoa;
    });
}

// Chức năng 7: Tính tổng điểm của các sinh viên
function calculateTotalScore() {
    return students.reduce((total, student) => total + student.sum, 0);
}

// Chức năng 8: Tính điểm trung bình của các sinh viên
function calculateAverageScore() {
    const totalScore = calculateTotalScore();
    return totalScore / students.length;
}

// Chức năng 9: Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
function sortStudentsByTotalScore() {
    students.sort((a, b) => a.sum - b.sum);
}

// Chức năng 10: Thoát khỏi hệ thống và in ra dòng chữ "Goodbye!"
function exitSystem() {
    console.log("Goodbye!");
}

// Chạy chương trình


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
            console.log(checkAllStudentsPass("toan"));
            break;
        case '2':
            console.log(checkAnyExcellentStudent());
            break;
        case '3':
            console
            const excellentStudents = filterExcellentStudents();
            console.log(excellentStudents);
            break;
        case '4':
            const excellentStudent = findExcellentStudent();
            console.log(excellentStudent);
            break;
        case '5':
            increaseMathScore();
            console.log("Đã cộng 1 điểm cho mỗi sinh viên môn Toán.");
            break;
        case '6':
            addTotalScoreProperty();
            console.log("Đã thêm thuộc tính sum cho mỗi sinh viên.");
            break;
        case '7':
            const totalScore = calculateTotalScore();
            console.log("Tổng điểm của các sinh viên là:", totalScore);
            break;
        case '8':
            const averageScore = calculateAverageScore();
            console.log("Điểm trung bình của các sinh viên là:", averageScore);
            break;
        case '9':
            sortStudentsByTotalScore();
            console.log("Danh sách sinh viên sau khi sắp xếp theo tổng điểm tăng dần:");
            console.log(students);
            break;
        case '0':
            exitSystem();
            flag = false;
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại!");
            break;
    }
} while (flag);
