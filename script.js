const dropdownFunction = ()=>{
    const dropdowns = document.querySelectorAll('.dropdown')
    dropdowns.forEach((elem, index)=>{
        elem.addEventListener('mouseenter', e => {
            const icon = elem.querySelector('.dropdown-icon')

            setTimeout(()=>{
                icon.classList.remove('fa-caret-down')
                icon.classList.add('fa-caret-up')
            },100)
        })

        elem.addEventListener('mouseleave', e => {
            const icon = elem.querySelector('.dropdown-icon')
            
            setTimeout(()=>{
                icon.classList.remove('fa-caret-up')
                icon.classList.add('fa-caret-down')
            },100)
        })
    })

    const dropdownItems = document.querySelectorAll('.dropdown-item')

    dropdownItems.forEach((elem, index)=>{
        elem.addEventListener('click', e => {
            const currentDropdown = e.target.parentElement.parentElement
            const currentDropdownItem = currentDropdown.querySelector('.dropdown-current')
            currentDropdownItem.textContent = e.target.innerText
        })
    })
}

window.onload = (e)=>{
    dropdownFunction()
}