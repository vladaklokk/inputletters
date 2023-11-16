const input = document.querySelector('input')
const btn = document.querySelector('button')

window.addEventListener('keypress', e => e.key === 'Enter' ? addLeters() : null)

const addLeters = () => {

    const listItems = document.querySelectorAll('li')
    if(listItems.length > 0){
        listItems.forEach(item => item.remove())
    }
    
    let letters = {}

    for (let i = 0; i < input.value.length; i++) {
        const letter = input.value[i]
        if (letters[letter]) {
            letters[letter]++
        } else {
            letters[letter] = 1
        }  
    }
   
    let keySort = Object.keys(letters).sort((a, b) => letters[b] - letters[a])
    console.log(keySort);
   
    let ul  = document.querySelector('ul')
    let input_length = input.value.length
    for (let i = 0; i < keySort.length; i++) {
        let sumbol = keySort[i]
        let interest = letters[sumbol] / input_length * 100
        ul.insertAdjacentHTML('beforeend',
        `<li>"${sumbol}": ${letters[sumbol]} - ${interest.toFixed(3)} %</li>`
        )   
    }
    
    input.value = ''
}

btn.addEventListener('click', addLeters)