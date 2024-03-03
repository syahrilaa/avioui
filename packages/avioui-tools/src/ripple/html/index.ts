import React from 'react'
import Ripple from '../react'
const ripple = new Ripple()
let parent = document.querySelectorAll<HTMLElement>('[data-ripple="true"]')

if(parent.length > 0) {
    parent.forEach(element => {
        element.addEventListener('mouseup', (event) => {
            ripple.add(event as unknown as React.MouseEvent<HTMLElement, MouseEvent>)
        })
    })
}
