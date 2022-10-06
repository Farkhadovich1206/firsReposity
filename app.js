const aboutModal = document.querySelector(".about_modal")

const showAbout = ()=>{
    aboutModal.style.top = "120px"
}
const hideAbout = ()=>{
    aboutModal.style.top = "-350px"
}

// createElement & className $ innerHTML & appendChild
const root = document.querySelector("#root")

// createElement = bu jsda html tag hosil qilish degani
let text = document.createElement("h2")

// innerHTML = html tagning ichiga qiymat(value) joylash
text.innerHTML = "Lorem ipsum dolor"

// className = bu html tagga jsdan turib class berish
text.className = "desc"

// appendChild = jsda hosil bo'lgan tagni htmlga joylash
root.appendChild(text)

console.log(text);


const container = document.querySelector(".container")
const inputText = document.querySelector(".inp_text")

const createText = function(){
    let qiymat = inputText.value

    let paragraph = document.createElement("p")

    paragraph.className = "box"

    paragraph.innerHTML = qiymat

    container.appendChild(paragraph)

    inputText.value = ""
}


const items = document.querySelectorAll(".item")

function showSearch(){
    items[4].style.display = "block"
}