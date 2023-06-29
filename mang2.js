const sports = [
    {
        id: 1,
        name: 'Bóng rổ',
        like: 6,
        gold: 10
    },
    {
        id: 2,
        name: 'Bơi lội',
        like: 5,
        gold: 2
    },
    {
        id: 3,
        name: 'Bóng đá',
        like: 10,
        gold: 8
    },
]
// Array filter 
function getMostFavoriteSport(sports) {
    var list = sports.filter(function (sport) {
        return sport.like > 5;
    });
    return list;
};
console.log(getMostFavoriteSport(sports))
console.log('=============')
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

// Array Map
function thethao(sport) {
    return {
        id: sport.id,
        name: `thể loại : ${sport.name}`,
        like: sport.like,
        total: `Tổng : ${sport.like}`
    }

};
var newthethao = sports.map(thethao);
console.log(newthethao);
console.log('===============')

// Array reduce (tính tổng số like)
// function getTotal có 4 tham số(1. biến lưu trữ, 2. giá trị hiện tại, 3. chỉ mục của giá trị hiện tại, 4. array gốc)
function getTotal(temp, currentValue) {
    var tonglike = temp + currentValue.like;
    return tonglike;
}
// với reduce thì phải có 2 đối số (1. function, 2. giá trị khởi tạo )
var total = sports.reduce(getTotal, 0);
console.log(total);
console.log('===============')
//
function getTotalGold(sports) {
    return sports.reduce(function (total, currentvalue) {
        return total + currentvalue.gold;
    }, 0);
}
// Expected results:
console.log(getTotalGold(sports));
console.log('===============')
// Flat - "làm phẳng" mảng từ Depth array - "mảng sâu"
var depthArray = [1, 2, [3, 4], [5, 6, 7], 8];
var newArr = depthArray.reduce(function (temp, item) {
    return temp.concat(item);
}, []);
console.log(newArr);
console.log('===============')
// lấy ra các khóa học đưa vào 1 mảng mới
var topic = [
    {
        topic: 'front-end',
        courses: [
            {
                id: 1,
                title: 'html,css'
            },
            {
                id: 2,
                title: 'javascript'
            }
        ]
    },
    {
        topic: 'back-end',
        courses: [
            {
                id: 1,
                title: 'java'
            },
            {
                id: 2,
                title: 'php'
            }
        ]
    }
];
var couse = topic.reduce(function (courses, item) {
    return courses.concat(item.courses);
}, []);
console.log(couse);