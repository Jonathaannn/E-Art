window.addEventListener('scroll', function() {
    let scroll = document.querySelector('.topo-btn')
        scroll.classList.toggle('active', window.scrollY > 150)
    })
function backTop() {
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}