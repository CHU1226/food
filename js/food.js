var food = [
    {
        name: '滷肉飯',
        tags: ["熱", "米", "滷", "台式", "午餐", "晚餐", "鹹", "豬"]
    },
    {
        name: '炒麵',
        tags: ["熱", "麵粉", "炒", "午餐", "晚餐", "鹹", "辣", "牛", "羊", "豬", "雞", "蝦"]
    },
    {
        name: '火鍋',
        tags: ["熱", "米", "麵粉", "煮", "中式", "台式", "日式", "午餐", "晚餐", "鹹", "酸", "辣", "牛", "羊", "豬", "雞", "魚", "貝", "蝦", "蟹", "魷", "章"]
    },
    {
        name: '便當',
        tags: ["熱", "米", "煮", "蒸", "煎", "煮", "炸", "炒", "滷", "午餐", "晚餐", "鹹", "牛", "羊", "豬", "鴨", "雞", "魚", "蝦"]
    },
    {
        name: '麵包',
        tags: ["常溫", "麵粉", "烤", "早餐", "下午茶", "甜", "鹹"]
    },
    {
        name: '丼飯',
        tags: ["熱", "米", "煮", "日式", "午餐", "晚餐", "鹹", "牛", "豬", "雞"]
    },
    {
        name: '韓式烤肉',
        tags: ["熱", "烤", "韓式", "午餐", "晚餐", "鹹", "辣", "牛", "豬", "雞"]
    },
    {
        name: '壽司',
        tags: ["冰", "米", "其他", "日式", "午餐", "晚餐", "甜", "酸", "魚", "貝", "蝦", "蟹", "魷", "章"]
    },
    {
        name: '咖哩飯',
        tags: ["熱", "米", "煮", "日式", "午餐", "晚餐", "鹹", "辣", "牛", "豬", "雞"]
    },
    {
        name: '漢堡',
        tags: ["熱", "麵粉", "其他", "美式", "早餐", "午餐", "晚餐", "鹹", "辣", "牛", "豬", "雞"]
    },
]

const questions = [
    {
        question: "選擇溫度",
        options: ["冰", "常溫", "熱"]
    },
    {
        question: "選擇主食食材",
        options: ["米", "麵粉", "玉米", "馬鈴薯", "地瓜"]
    },
    {
        question: "選擇調理方式",
        options: ["蒸", "煎", "煮", "炸", "炒", "滷", "烤", "其他"]
    },
    {
        question: "選擇國家",
        options: ["中式", "台式", "日式", "美式", "義式", "港式", "泰式", "韓式", "越式",]
    },
    {
        question: "選擇時段",
        options: ["早餐", "早午餐", "午餐", "下午茶", "晚餐", "宵夜"]
    },
    {
        question: "選擇口味",
        options: ["鹹", "甜", "酸", "辣"]
    },
    {
        question: "選擇食物項目",
        options: ["素", "牛", "羊", "豬", "雞", "鴨", "鵝", "魚", "貝", "蝦", "蟹", "魷", "章"]
    }
]

var getTags = [];

function displayQuestions() {
    document.getElementById('answer_container').style.display = "none";

    for (let i = 0; i < questions.length; i++) {
        let title = document.createElement('h3');
        title.textContent = questions[i].question;
        document.querySelector('.questions_box_item').appendChild(title);

        for (let j = 0; j < questions[i].options.length; j++) {
            let optionBtn = document.createElement('button');
            optionBtn.textContent = questions[i].options[j];
            document.querySelector('.questions_box_item').appendChild(optionBtn)
        }
    }
    let allTag = document.querySelectorAll('.questions_box_item button');
    for (let k = 0; k < allTag.length; k++) {
        allTag[k].addEventListener('click', function () {
            this.classList.toggle('checked');
            getTags = [];
        });
    }

}

var checkedTags;
var displayFood;

function next() {
    displayFood = [];
    checkedTags = document.querySelectorAll('.checked');
    checkedTags.forEach(e => getTags.push(e.textContent));
    if (getTags == "") return alert("至少選擇一項");
    document.getElementById('question_container').style.display = "none";
    document.getElementById('answer_container').style.display = "flex";

    var filtered = food;
    for (let i = 0; i < getTags.length; i++) {
        filtered = filtered.filter(e => e.tags.includes(getTags[i]));
    }

    for (let j = 0; j < filtered.length; j++) {
        displayFood += `<div class="answer_block">${filtered[j].name}</div>`;
    }
    document.querySelector('.answer_box').innerHTML = displayFood;
}

function again() {
    checkedTags = document.querySelectorAll('.checked');
    getTags = [];
    checkedTags.forEach(e => e.classList.remove('checked'))
}

function recover() {
    document.getElementById('question_container').style.display = "flex";
    document.getElementById('answer_container').style.display = "none";
}

displayQuestions()



