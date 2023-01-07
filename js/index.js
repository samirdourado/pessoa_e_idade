const formData = document.getElementById("formData")
const anoInput = document.getElementById("ano")
const radioBtns = document.querySelectorAll("input[type=radio]")

formData.addEventListener("submit", (evt) =>{
    evt.preventDefault()
    
    let sex = ""
    for (const radioBtn of radioBtns) {
        if (radioBtn.checked) {
            sex = radioBtn.value
            break
        }
    }
    console.log(sex)
    console.log(anoInput.value)
})

