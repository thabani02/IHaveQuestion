const question = document.querySelector(".question")
const gif = document.querySelector(".gif")
const yesBtn = document.querySelector(".yes-btn")
const noBtn = document.querySelector(".no-btn")

yesBtn.addEventListener("click", ()=> {
    question.innerHTML = "Yayyyyyy Now If You May Please Check Your Email For a Small Surprise😄";
    gif.src="https://i.pinimg.com/originals/a6/0c/27/a60c27b2f446291508f1c13225b67d34.gif"
})

noBtn.addEventListener("mouseover", ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px"

})