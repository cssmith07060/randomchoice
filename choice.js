const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
         createTags(e.target.value)
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim()
    !== ``).map(tag => tag.trim())
    
    tags.innerHTML = ''
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.Classlisrt.add('tag')
    })
}