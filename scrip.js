const FAQbtns = document.querySelectorAll('.faq-toggle')

FAQbtns.forEach((btn)=>{
    btn.addEventListener('click',() => {
        btn.parentNode.classList.toggle('active')
    })
})