const quizData = [
    // أسئلة عن الأنبياء
    {
        question: "من هو أول الأنبياء؟",
        options: ["إبراهيم عليه السلام", "نوح عليه السلام", "آدم عليه السلام", "موسى عليه السلام"],
        correct: 2
    },
    {
        question: "من هو خاتم الأنبياء؟",
        options: ["عيسى عليه السلام", "محمد صلى الله عليه وسلم", "نوح عليه السلام", "يوسف عليه السلام"],
        correct: 1
    },
    {
        question: "من هو النبي الذي ابتلعه الحوت؟",
        options: ["يوسف عليه السلام", "موسى عليه السلام", "يونس عليه السلام", "داوود عليه السلام"],
        correct: 2
    },
    {
        question: "من هو النبي الذي كلم الله مباشرة؟",
        options: ["موسى عليه السلام", "إبراهيم عليه السلام", "عيسى عليه السلام", "نوح عليه السلام"],
        correct: 0
    },
    {
        question: "من هو النبي الذي كان يعمل نجارًا؟",
        options: ["نوح عليه السلام", "عيسى عليه السلام", "داوود عليه السلام", "زكريا عليه السلام"],
        correct: 3
    },
    {
        question: "من هو النبي الذي ولد بدون أب؟",
        options: ["آدم عليه السلام", "نوح عليه السلام", "عيسى عليه السلام", "موسى عليه السلام"],
        correct: 2
    },
    {
        question: "من هو النبي الذي صنع الفلك؟",
        options: ["إبراهيم عليه السلام", "نوح عليه السلام", "داوود عليه السلام", "سليمان عليه السلام"],
        correct: 1
    },
    {
        question: "من هو النبي الذي ألقاه إخوته في البئر؟",
        options: ["إسماعيل عليه السلام", "يعقوب عليه السلام", "يوسف عليه السلام", "يونس عليه السلام"],
        correct: 2
    },
    {
        question: "من هو النبي الذي رأى رؤيا أنه يذبح ابنه؟",
        options: ["إبراهيم عليه السلام", "إسماعيل عليه السلام", "نوح عليه السلام", "داوود عليه السلام"],
        correct: 0
    },

    // أسئلة عن القرآن الكريم
    {
        question: "ما هي أول سورة في القرآن الكريم؟",
        options: ["سورة الفاتحة", "سورة البقرة", "سورة الإخلاص", "سورة الناس"],
        correct: 0
    },
    {
        question: "ما هي أطول سورة في القرآن الكريم؟",
        options: ["سورة آل عمران", "سورة النساء", "سورة الأعراف", "سورة البقرة"],
        correct: 3
    },
    {
        question: "ما هي أقصر سورة في القرآن الكريم؟",
        options: ["سورة الكوثر", "سورة الفلق", "سورة الإخلاص", "سورة العصر"],
        correct: 0
    },
    {
        question: "كم عدد أجزاء القرآن الكريم؟",
        options: ["20", "30", "40", "25"],
        correct: 1
    },
    {
        question: "ما هي السورة التي تسمى قلب القرآن؟",
        options: ["سورة يس", "سورة الفاتحة", "سورة الإخلاص", "سورة البقرة"],
        correct: 0
    },
    {
        question: "في أي سورة وردت آية الكرسي؟",
        options: ["سورة النساء", "سورة البقرة", "سورة النحل", "سورة آل عمران"],
        correct: 1
    },
    {
        question: "كم عدد آيات سورة الفاتحة؟",
        options: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "ما هي السورة التي نزلت كاملة؟",
        options: ["سورة الفاتحة", "سورة الكوثر", "سورة المدثر", "سورة النور"],
        correct: 0
    },
    {
        question: "ما هي السورة التي تبدأ بـ 'الحمد لله'؟",
        options: ["سورة الفاتحة", "سورة الكهف", "سورة الفلق", "سورة الرحمن"],
        correct: 0
    },

    // أسئلة عن أركان الإسلام
    {
        question: "كم عدد أركان الإسلام؟",
        options: ["4", "5", "6", "7"],
        correct: 1
    },
    {
        question: "ما هو أول ركن من أركان الإسلام؟",
        options: ["الصلاة", "الزكاة", "الشهادتان", "الحج"],
        correct: 2
    },
    {
        question: "كم عدد الصلوات المفروضة في اليوم؟",
        options: ["3", "5", "4", "7"],
        correct: 1
    },
    {
        question: "ما هو الركن الرابع من أركان الإسلام؟",
        options: ["الصلاة", "الصوم", "الزكاة", "الحج"],
        correct: 1
    },
    {
        question: "في أي شهر يصوم المسلمون؟",
        options: ["محرم", "ربيع الأول", "شوال", "رمضان"],
        correct: 3
    },

    // أسئلة عن السيرة النبوية
    {
        question: "في أي عام ولد النبي محمد صلى الله عليه وسلم؟",
        options: ["عام الهجرة", "عام الفيل", "عام الفتح", "عام الحديبية"],
        correct: 1
    },
    {
        question: "ما هو اسم أم النبي محمد صلى الله عليه وسلم؟",
        options: ["آمنة بنت وهب", "خديجة بنت خويلد", "فاطمة بنت أسد", "صفية بنت عبد المطلب"],
        correct: 0
    },
    {
        question: "كم سنة استمرت دعوة النبي في مكة؟",
        options: ["10 سنوات", "13 سنة", "23 سنة", "20 سنة"],
        correct: 1
    },
    {
        question: "من هو أول من آمن من الرجال؟",
        options: ["علي بن أبي طالب", "أبو بكر الصديق", "عثمان بن عفان", "عمر بن الخطاب"],
        correct: 1
    },
    {
        question: "من هو أول من آمن من الصبيان؟",
        options: ["الحسن بن علي", "الحسين بن علي", "علي بن أبي طالب", "عبد الله بن عباس"],
        correct: 2
    },
    {
        question: "ما هو اسم الغار الذي كان يتعبد فيه النبي محمد صلى الله عليه وسلم؟",
        options: ["غار حراء", "غار ثور", "غار أحد", "غار بني هاشم"],
        correct: 0
    },
    {
        question: "في أي غزوة حدثت معجزة نبع الماء من بين أصابع النبي؟",
        options: ["غزوة بدر", "غزوة الخندق", "غزوة تبوك", "غزوة أحد"],
        correct: 2
    },

    // أسئلة عن الصحابة
    {
        question: "من هو أول خليفة للمسلمين بعد وفاة النبي محمد صلى الله عليه وسلم؟",
        options: ["عمر بن الخطاب", "عثمان بن عفان", "أبو بكر الصديق", "علي بن أبي طالب"],
        correct: 2
    },
    {
        question: "من هو الصحابي الذي لقب بـ 'سيف الله المسلول'؟",
        options: ["خالد بن الوليد", "سعد بن أبي وقاص", "عمر بن الخطاب", "أبو عبيدة بن الجراح"],
        correct: 0
    },
    {
        question: "من هو الصحابي الذي كان يلقب بـ 'الفاروق'؟",
        options: ["علي بن أبي طالب", "عمر بن الخطاب", "عثمان بن عفان", "أبو بكر الصديق"],
        correct: 1
    },
    {
        question: "من هو الصحابي الذي تزوج بنتي النبي محمد صلى الله عليه وسلم؟",
        options: ["علي بن أبي طالب", "عثمان بن عفان", "عبد الرحمن بن عوف", "عمر بن الخطاب"],
        correct: 1
    },
    {
        question: "من هو الصحابي الذي أطلق عليه لقب 'أمين الأمة'؟",
        options: ["أبو بكر الصديق", "عمر بن الخطاب", "أبو عبيدة بن الجراح", "عثمان بن عفان"],
        correct: 2
    },
    {
        question: "من هو الصحابي الذي نام في فراش النبي ليلة الهجرة؟",
        options: ["علي بن أبي طالب", "أبو بكر الصديق", "عبد الله بن عباس", "عمر بن الخطاب"],
        correct: 0
    },
  


];

let currentQuiz = 0;
const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    quizContainer.innerHTML = `
        <div class="question">${currentQuizData.question}</div>
        <div class="options">
            ${currentQuizData.options.map((option, index) => `
                <button onclick="selectAnswer(${index})">${option}</button>
            `).join('')}
        </div>
    `;
    resultContainer.innerHTML = '';
}

function selectAnswer(selected) {
    const currentQuizData = quizData[currentQuiz];
    const buttons = document.querySelectorAll('.options button');

    buttons.forEach((button, index) => {
        if (index === currentQuizData.correct) {
            button.classList.add('correct');
        }
        if (index !== currentQuizData.correct && index === selected) {
            button.classList.add('wrong');
        }
        button.disabled = true;
    });

    if (selected === currentQuizData.correct) {
        resultContainer.innerHTML = "إجابة صحيحة!";
    } else {
        resultContainer.innerHTML = "إجابة خاطئة!";
    }

    setTimeout(() => {
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            resultContainer.innerHTML = "لقد أكملت المسابقة!";
            quizContainer.innerHTML = '';
        }
    }, 2000);
}

loadQuiz();
