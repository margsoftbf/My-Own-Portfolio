const allNavItem = document.querySelectorAll('.nav-item')


function removeActiveMenu() {
    allNavItem.forEach(item => {
        item.classList.remove('active')
    })
}

allNavItem.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveMenu()
        item.classList.add('active')
    })
})

