const countNumber = document.querySelector(".box-body h1");
const generateBtn = document.querySelector(".box-footer .btn");

generateBtn.addEventListener("click", randomGenerate);

function randomGenerate() {
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    countNumber.innerHTML = randomNumber;
}
randomGenerate();
