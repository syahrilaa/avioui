import Ripple from '../react'
const ripple = new Ripple()
let parent = document.querySelectorAll<HTMLElement>('[data-ripple="true"]')

if(parent.length > 0) {
    parent.forEach(element => {
        element.addEventListener('mouseup', (event: MouseEvent) => {
            ripple.add(event)
        })
    })
}