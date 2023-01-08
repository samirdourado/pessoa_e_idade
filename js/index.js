const formData = document.getElementById("formData")
const anoInput = document.getElementById("ano")
const radioBtns = document.querySelectorAll("input[type=radio]")
const contentHolder = document.querySelector("#contentHolder")
const year = new Date().getFullYear()

formData.addEventListener("submit", (evt) =>{
    evt.preventDefault()

    if (!anoInput.value) {
        alert("Verifique os dados e tente novamente")
    }
    
    const age = year - anoInput.value
    
    let sex = ""

    for (const radioBtn of radioBtns) {
        if (radioBtn.checked) {
            sex = radioBtn.value  
        }
    }
    
    if (sex == "masculino") {
        contentHolder.innerHTML = ""
        const phrase = document.createElement("p")
        const figure = document.createElement("figure")
        const img = document.createElement("img") 

        phrase.innerText = `Detectamos homem com ${age} anos`
        
            if (age <= 1 && age > 0) {
                img.src = "https://img.freepik.com/fotos-premium/aniversario-crianca-menino-de-1-ano-de-idade-bebe-sentado-com-bolas-e-numero-um-de-terno-e-gravata-borboleta_267293-452.jpg"
            }
            if (age <= 5 && age > 1) {
                img.src = "https://i.pinimg.com/originals/24/f2/c2/24f2c2afd923a85e55bc72785561db7b.jpg"
            }

            if (age <= 10 && age > 5) {
                img.src = "https://img.freepik.com/fotos-premium/um-menino-de-9-anos-com-uma-camiseta-preta-em-pe-com-os-bracos-cruzados_120897-2666.jpg"
            }

            if (age <= 15 && age > 10) {
                img.src = "https://s2.glbimg.com/A6LaErdcZegIozuNzTnofM2zsyI=/e.glbimg.com/og/ed/f/original/2019/10/04/bento.jpg"
            }

            if (age <= 20 && age > 15) {
                img.src = "https://gazetadocerrado.com.br/wp-content/uploads/2019/07/94444551-27CA-4F11-AF35-8332ACBE4C68.jpeg"
            }

            if (age <= 30 && age > 20) {
                img.src = "http://pedropitanga.com.br/wp-content/uploads/2018/06/homem-hormonios-homens-de-30.jpg"
            }
                
            if (age <= 40 && age > 30) {
                    img.src = "https://img.freepik.com/fotos-gratis/retrato-de-homem-de-raca-mista-com-sono-em-um-fundo-azul-profundo_633478-2106.jpg?w=2000"
                }

            if (age <= 50 && age > 40) {
                img.src = "https://s2.glbimg.com/x90yUsYbAjRcZM2NMK-7539DQXc=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/05/07/javier-bardem-50-anos.jpg"
            }

            if (age < 60 && age > 50) {
                img.src = "https://j6t2y8j5.rocketcdn.me/wp-content/uploads/2016/08/128.jpg"
            }

            if (age >= 60) {
                img.src = "https://ingracio.adv.br/wp-content/uploads/2021/08/tenho-60-anos-posso-me-aposentar.jpg"
            }

        figure.appendChild(img)
        contentHolder.append(phrase, figure)        
    }

    if (sex == "feminino") {
        contentHolder.innerHTML = ""
        const phrase = document.createElement("p")
        const figure = document.createElement("figure")
        const img = document.createElement("img")        
        
        phrase.innerText = `Detectamos mulher com ${age} anos`
        
            if (age <= 1 && age > 0) {
                img.src = "https://www.hypeness.com.br/1/2015/10/AvayaIG1.jpg"
            }
            if (age <= 5 && age > 1) {
                img.src = "https://cdn.maemequer.pt/wp-content/uploads/2015/08/menina-182.jpg"
            }

            if (age <= 10 && age > 5) {
                img.src = "https://thumbs.dreamstime.com/b/retrato-da-menina-da-crian%C3%A7a-de-anos-94514910.jpg"
            }

            if (age <= 15 && age > 10) {
                img.src = "https://img.freepik.com/fotos-premium/linda-menina-morena-comemorando-15-anos-de-vida-debutante_208861-1826.jpg"
            }

            if (age <= 20 && age > 15) {
                img.src = "https://i.pinimg.com/736x/79/4e/d8/794ed80bce1c5bc3fa8093a1cad72466.jpg"
            }

            if (age <= 30 && age > 20) {
                img.src = "http://s2.glbimg.com/yaWUyV-RG9rXo7RUcQs2QLL11ws=/e.glbimg.com/og/ed/f/original/2016/10/02/f_ce70f7a8-855c-4bc2-bcf3-bceb3091b55a_070.jpg"
            }
                
            if (age <= 40 && age > 30) {
                    img.src = "https://img.freepik.com/fotos-gratis/mulher-asiatica-satisfeita-com-um-sorriso-largo-penteado-curto-vestido-casualmente-senta-se-a-mesa-do-cafe-gosta-do-tempo-de-lazer-linda-mulher-japonesa-descansando-sozinha-em-restaurante_273609-2712.jpg"
                }

            if (age <= 50 && age > 40) {
                img.src = "https://i.pinimg.com/736x/2a/10/d5/2a10d53b9d68d47cd6d1c2f5505d8fcd.jpg"
            }

            if (age < 60 && age > 50) {
                img.src = "https://s2.glbimg.com/BZckmF4eod4_BaQYbV-cqxzR8dY=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_ba3db981e6d14e54bb84be31c923b00c/internal_photos/bs/2021/a/I/IRPlcJQoOR3FbHHo0GIQ/2015-09-15-yasmina-model-age-59.jpg"
            }

            if (age >= 60) {
                img.src = "https://files.sunoresearch.com.br/n/uploads/2021/01/1379bc39-whatsapp-image-2021-01-15-at-06.49.04-e1610704248710-800x450.jpeg"
            }

        figure.appendChild(img)
        contentHolder.append(phrase, figure)   
    }
})