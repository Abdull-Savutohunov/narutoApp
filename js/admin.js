const $inputs = document.querySelectorAll('input')
const $submitBtn = document.querySelector('.submitBtn')
const back = document.querySelector('.back')


window.addEventListener('load', () => {
    if(!localStorage.getItem('ninjas')){
        window.open('./index.html' , '_self')
    }

})  
$submitBtn.addEventListener('click', e => {
    e.preventDefault()

    let isValues = true
    const obj = {}
    $inputs.forEach(item => {
        if(item.value === ''){
            isValues = false
            item.style.borderColor = 'red'
        }else{
            obj[item.id] = item.value
        }
    })
    if(isValues){
        const base = JSON.parse(localStorage.getItem('ninjas'))
        base.push(obj)
        localStorage.setItem('ninjas',JSON.stringify(base))

        $inputs.forEach( item => {
            item.value = ''
        })
    }

})

back.addEventListener('click', e => {
    e.preventDefault()

    window.open('./index.html', '_self')
})
