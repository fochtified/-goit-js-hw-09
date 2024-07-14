//declaring consts
const feedbackForm = document.querySelector(`form.form-feedback`);
const userEmail = document.querySelector(`form.form-feedback > label > input`);
const userMessage = document.querySelector(
    `form.form-feedback > label > textarea`
);
const storageKey = "feedback-form-state";

//loading saved data from local
const savedFormData = JSON.parse(localStorage.getItem(storageKey)) ?? {};
userEmail.value = savedFormData.email ?? ``;
userMessage.value = savedFormData.message ?? ``;

//saving input data to local
feedbackForm.addEventListener("input", (event) => {
    const { name, value } = event.target;
    const formData = JSON.parse(localStorage.getItem(storageKey)) ?? {};
    formData[name] = value.trim();
    localStorage.setItem(storageKey, JSON.stringify(formData));
});

//form submission
function handleFormSubmit(event) {
    event.preventDefault();
    if (
        event.target.elements.email.value.trim() === "" ||
        event.target.elements.message.value.trim() === ""
    ) {
        console.log("Not sufficient data to proceed");
        return alert("Make sure all fields are filled in to continue");
    }
    console.log("Submit successful");
    console.log({
        email: event.target.elements.email.value.trim(),
        message: event.target.elements.message.value.trim(),
    });
    feedbackForm.reset();
    localStorage.removeItem(storageKey);
    alert(
        `Your message has been submitted successfully. Thank you for your feedback.`
    );
}

//form submit listener
feedbackForm.addEventListener("submit", handleFormSubmit);

//looks about right?
