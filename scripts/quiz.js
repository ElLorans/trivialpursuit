function getRandomQuestion() {
    const selectedCategory = document.getElementById('categorySelect').value;
    const categoryQuestions = questions[selectedCategory];

    const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
    const questionText = randomQuestion["question"];

    // Display correct answer
    const randomAnswer = randomQuestion["correct_answer"];


    // Display the question in the popup
    const questionDisplayDiv = document.getElementById('questionDisplay');
    questionDisplayDiv.innerHTML = `
        <p>Difficulty: ${randomQuestion["difficulty"]}</p>
        <details>
            <summary>Question</summary>
            ${questionText}
        </details>
    `;


    if (randomQuestion["incorrect_answers"].length > 0) {
        // Combine the correct answer with incorrect answers
        let options = [randomQuestion["correct_answer"], ...randomQuestion["incorrect_answers"]];

        // Shuffle the options array
        options = options.sort(() => Math.random() - 0.5);

        // Create the HTML for displaying options
        let optionsHtml = '<ul>';
        options.forEach(option => {
            optionsHtml += `<li>${option}</li>`;
        });
        optionsHtml += '</ul>';

        // Insert the shuffled options into the details tag
        questionDisplayDiv.innerHTML += `
            <details>
                <summary>Choices</summary>
                ${optionsHtml}
            </details>
        `;
    }

    questionDisplayDiv.innerHTML += `
            <details>
    <summary>Answer</summary>
    ${randomAnswer}
</details>
    `;
}

