
function showAlert() {
    alert("Zǎo shang hǎo zhōng guó! Xiàn zài wǒ yǒu BING CHILLING Wǒ hěn xǐ huān BING CHILLING Dàn shì sù dù yǔ jī qíng jiǔ bǐ BING CHILLING Sù dù yǔ jī qíng, sù dù yǔ jī qíng jiǔ Wǒ zuì xǐ huān Suǒ yǐ xiàn zài shì yīn yuè shí jiān Zhǔn bèi Yī, èr, sān Liǎng gè lǐ bài yǐ hòu Sù dù yǔ jī qíng jiǔ Liǎng gè lǐ bài yǐ hòu Sù dù yǔ jī qíng jiǔ Liǎng gè lǐ bài yǐ hòu Sù dù yǔ jī qíng jiǔ Bù yào wàng jì, bù yào cuò guò Jì dé qù diàn yǐng yuàn kàn sù dù yǔ jī qíng jiǔ Yīn wéi fēi cháng hǎo diàn yǐng Dòng zuò fēi cháng hǎo Chà bù duō yī yàng BING CHILLING Zài jiàn");
}

const form = document.getElementById('myForm');

if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    })
}


function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (!validateEmail(email)) {
        alert('Por favor ingrese un correo electrónico válido.');
    } else {
        alert('Correo electrónico enviado correctamente')
    }
}

document.querySelector("button.button-menu-toggle")
    .addEventListener("click",function() {
        
    document.querySelector(".nav-links").

    classList.toggle("nav-links-responsive")})