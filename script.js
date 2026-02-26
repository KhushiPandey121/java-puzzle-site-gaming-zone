let puzzles = [
    {
        question: `public class Test {
    public static void main(String[] args) {
        int x = 5;
        System.out.println(x++ + ++x);
    }
}`,
        options: ["11", "12", "13", "14"],
        answer: "12"
    },
    {
        question: `public class Demo {
    public static void main(String[] args) {
        System.out.println(10 + 20 + "Java");
    }
}`,
        options: ["30Java", "Java30", "1020Java", "Error"],
        answer: "30Java"
    },
    {
        question: `public class Test {
    public static void main(String[] args) {
        System.out.println("Java" + 10 + 20);
    }
}`,
        options: ["Java30", "Java1020", "30Java", "Error"],
        answer: "Java1020"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").textContent = puzzles[currentQuestion].question;

    let optionsHtml = "";
    puzzles[currentQuestion].options.forEach(option => {
        optionsHtml += `<input type="radio" name="answer" value="${option}"> ${option} <br>`;
    });

    document.getElementById("options").innerHTML = optionsHtml;
}

function checkAnswer() {
    let selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
        alert("Please select an answer!");
        return;
    }

    if (selected.value === puzzles[currentQuestion].answer) {
        document.getElementById("result").innerHTML = "Correct! 🎉";
        score++;
    } else {
        document.getElementById("result").innerHTML = "Wrong ❌";
    }

    document.getElementById("score").innerHTML = "Score: " + score;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < puzzles.length) {
        loadQuestion();
        document.getElementById("result").innerHTML = "";
    } else {
        document.querySelector(".container").innerHTML =
            `<h2>Quiz Finished 🎉</h2>
             <h3>Your Final Score: ${score}/${puzzles.length}</h3>`;
    }
}

// Load the first question
loadQuestion();