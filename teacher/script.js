random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

clipboardCopy = (text) => navigator.clipboard.writeText(text);


let code = random(1000, 9999).toString();

const codeElement = document.getElementById("code");
codeElement.innerHTML += code

copyCode = () => {
    clipboardCopy(code)
}