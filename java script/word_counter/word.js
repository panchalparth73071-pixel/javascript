const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");

textInput.addEventListener("input", function () {
    let words = textInput.value.trim();

    if (words === "") {
        wordCount.textContent = 0;
    } else {
        wordCount.textContent = words.split(/\s+/).length;
    }
});