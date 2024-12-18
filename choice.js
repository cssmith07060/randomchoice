const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
    
    if (e.key === 'enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim()
    !== ``).map(tag => tag.trim())
    
    tags.innerHTML = ''
    
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.Classlist.add('tag')
        tagEl.innerText = tag
        tagEl.appendChild(tagEl)
    })
}


function randomSelect() {
    const times = 30 

    const interval = setInterval() => {
        const tags = document.querySelectorAll('.tag')
        return tags [Math.floor(Math.random() * tags.length)]
    }

    function unHiglightTag(tag) {
        tag.ClassList.remove
}
