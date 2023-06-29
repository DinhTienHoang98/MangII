// Thêm các thuộc tính điểm Toán, điểm Lý, điểm Hóa để lưu thông tin điểm thi cho các sinh viên là các số ngẫu nhiên từ 0 đến 10
// Hiển thị các sinh viên trong danh sách như sau: (Dùng forEach và map rồi so sánh 2 cách)

var students = [
    {
        id: 1,
        name: "Dinh",
        address: "hue"
    },
    {
        id: 2,
        name: "Nam",
        address: "quang nam"
    },
    {
        id: 3,
        name: "Tan",
        address: "da nang"
    },
    {
        id: 4,
        name: "Hung",
        address: "hue"
    },
    {
        id: 5,
        name: "Tri",
        address: "quang tri"
    },
    {
        id: 6,
        name: "Anh",
        address: "hue"
    },
    {
        id: 7,
        name: "Binh",
        address: "da nang"
    }
];
// function taodiem(max) {
//     var sodiem = Number(Math.floor(Math.random() * max));
//     return sodiem;
// };
// taodiem(11);

// function dungmap(students) {
//     return {
//         id: students.id,
//         name: students.name,
//         address: students.address,
//         toan: taodiem(11),
//         ly: taodiem(11),
//         hoa: taodiem(11)
//     }
// }
// // hienthi(students.map(dungmap));

// function hienthi() {
//     for (var el of students) {
//         for (var key in el) {
//             console.log(key + ' : ' + el[key])
//         }
//         console.log('===================')
//     }
// }
// function dungforeach(students) {
//     var list = students.forEach(function (sinhvien) {
//         id = sinhvien.id,
//             name = sinhvien.name,
//             address = sinhvien.address,
//             sinhvien.toan = taodiem(11),
//             sinhvien.ly = taodiem(11),
//             sinhvien.hoa = taodiem(11)
//     })
//     return list
// };

// hienthi(dungforeach(students));

// Cách 1: Dùng for each
// students.forEach(function (student) {
//     student.toan = Math.floor(Math.random() * 11);
//     student.ly = Math.floor(Math.random() * 11);
//     student.hoa = Math.floor(Math.random() * 11);
// });

// var newStudents = students.forEach(function (student) {
//     student.toan = Math.floor(Math.random() * 11);
//     student.ly = Math.floor(Math.random() * 11);
//     student.hoa = Math.floor(Math.random() * 11);
//     return student;
// });
// Cách 2: Dùng map
// students.map(function (student) {
//     student.toan = Math.floor(Math.random() * 11);
//     student.ly = Math.floor(Math.random() * 11);
//     student.hoa = Math.floor(Math.random() * 11);
// });

var newStudents = students.map(function (student) {
    student.toan = Math.floor(Math.random() * 11);
    student.ly = Math.floor(Math.random() * 11);
    student.hoa = Math.floor(Math.random() * 11);
    return student;
});
console.log("=== DANH SÁCH SINH VIÊN ===");
console.log(newStudents);
// for (const el of newStudents) {
//     for (const key in el) {
//         console.log(key + ": " + el[key]);
//     }
//     console.log('===================');
// }