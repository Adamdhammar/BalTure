// map kelungkung hover
document.querySelectorAll('.klungkung-location').forEach(e => {
    e.addEventListener('mouseover', function() {
        document.querySelectorAll('.klungkung-location').forEach(e => 
            e.style.fill = "#04364A")
    })
})

// map kelungkung not hover 
document.querySelectorAll('.klungkung-location').forEach(e => {
    e.addEventListener('mouseout', function() {
        document.querySelectorAll('.klungkung-location').forEach(e => 
            e.style.fill = "#C3C3C3")
    })
})