
const form = document.getElementById("feedbackForm");
const feedbackList = document.getElementById("feedbackList");
const errorMessage = document.getElementById("errorMessage");

let feedbacks = JSON.parse(
    localStorage.getItem("studentFeedbacks") || "[]"
);

function displayFeedback() {
    feedbackList.replaceChildren();

    if (feedbacks.length === 0) {
        const empty = document.createElement("p");
        empty.className = "empty";
        empty.textContent = "No feedback submitted yet.";
        feedbackList.appendChild(empty);
        return;
    }

    feedbacks.forEach((item) => {
        const card = document.createElement("div");
        card.className = "feedback-card";

        const heading = document.createElement("h3");
        heading.textContent = item.name;

        const email = document.createElement("p");
        email.textContent = "Email: " + item.email;

        const branch = document.createElement("p");
        branch.textContent = "Branch: " + item.branch;

        const section = document.createElement("p");
        section.textContent = "Section: " + item.section;

        const message = document.createElement("p");
        message.textContent = "Feedback: " + item.feedback;

        card.append(
            heading,
            email,
            branch,
            section,
            message
        );

        feedbackList.appendChild(card);
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    errorMessage.textContent = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const branch = document.getElementById("branch").value;
    const section = document.getElementById("section").value;
    const feedback = document.getElementById("feedback").value.trim();

    if (!name || !email || !branch || !section || !feedback) {
        errorMessage.textContent =
            "Please fill in all fields.";
        return;
    }

    if (!isValidNietEmail(email)) {
        errorMessage.textContent =
            "Invalid email! Use your @niet.co.in email address.";
        return;
    }

    const entry = {
        name,
        email,
        branch,
        section,
        feedback
    };

    feedbacks.unshift(entry);

    localStorage.setItem(
        "studentFeedbacks",
        JSON.stringify(feedbacks)
    );

    displayFeedback();
    form.reset();
});

displayFeedback();