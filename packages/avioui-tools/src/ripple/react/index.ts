export type RippleAnimation = any

interface RippleRGBAColor {
    r: number
    g: number
    b: number
    a: number
}

interface RippleStyledProps {
    elementCircle: HTMLElement
    color: string
    rect: DOMRect
    radius: number
    ev: MouseEvent
}

class Ripple {
    private x: number = 0
    private y: number = 0
    private z: number = 0
    private rippleRadius = 0

    private createRippleColor(color: string): string {
        let rgba: RippleRGBAColor

        const hexToRgba = (hex: string): RippleRGBAColor => {
            const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
            hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
            return result ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
              a: 1
            } : { r: 0, g: 0, b: 0, a: 0 }
        }

        const findContrast = (color1: RippleRGBAColor, color2: RippleRGBAColor): number => {
            const blendedColor = {
                r: color1.r * color1.a + color2.r * (1 - color1.a),
                g: color1.g * color1.a + color2.g * (1 - color1.a),
                b: color1.b * color1.a + color2.b * (1 - color1.a),
                a: 1
            }
            const brightness1 = (blendedColor.r * 299 + blendedColor.g * 587 + blendedColor.b * 114) / 1000
            const brightness2 = (color2.r * 299 + color2.g * 587 + color2.b * 114) / 1000
            return Math.abs(brightness1 - brightness2)
        }

        const rgbaArray = color.match(/\d+/g)?.map(Number)!
        if (color.startsWith('rgba')) {
            const alpha = parseFloat(color.split(',')[3])
            if (alpha === 0) {
                return 'rgba(17, 24, 39, 0.2)'
            }
        }
        
        if(color.startsWith('rgb')) {
            rgba = { r: rgbaArray[0], g: rgbaArray[1], b: rgbaArray[2], a: 1 } 
        } else if (color.startsWith('#')) {
            rgba = { ...hexToRgba(color), a: 1 }
        } else {
            return 'rgba(0,0,0,0,0)'
        }

        const applyColor = (findContrast(rgba!, { r: 255, g: 255, b: 255, a: 1 }) > findContrast(rgba!, { r: 0, g: 0, b: 0, a: 1 })) ?
            'rgba(255, 255, 255, 0.3)' : 'rgba(17, 24, 39, 0.2)'
        return applyColor
    }

    private setRippleStyles({ color, elementCircle, ev, radius, rect }: RippleStyledProps) {
        elementCircle.classList.add('avioui-ripple')
        elementCircle.style.backgroundColor = color
        elementCircle.style.borderRadius = '50%'
        elementCircle.style.pointerEvents = 'none'
        elementCircle.style.position = 'absolute'
        elementCircle.style.left = ev.clientX - rect.left - radius + 'px'
        elementCircle.style.top = ev.clientY - rect.top - radius + 'px'
        elementCircle.style.width = radius * 2 + 'px'
        elementCircle.style.height = radius * 2 + 'px'
    }

    add(ev: MouseEvent): void {
        const rippleTargetElement = ev.currentTarget as HTMLElement
        rippleTargetElement.style.position = 'relative'
        rippleTargetElement.style.overflow = 'hidden'
        const rect = rippleTargetElement.getBoundingClientRect()

        this.x = ev.clientX - rect.left > rippleTargetElement.offsetWidth / 1.5 ? 0 : rippleTargetElement.offsetWidth
        this.y = ev.clientY - rect.top > rippleTargetElement.offsetHeight / 1.5 ? 0 : rippleTargetElement.offsetHeight
        this.z = Math.hypot(
            this.x - (ev.clientX - rect.left),
            this.y - (ev.clientY - rect.top),
        )
        this.rippleRadius = this.z

        const createCircle = document.createElement('span')

        createCircle.animate([{ transform: 'scale(0)', opacity: 1 }, { transform: 'scale(1.5)', opacity: 0 }], { duration: 600, easing: 'linear', })

        const parentBackground = window.getComputedStyle(rippleTargetElement).backgroundColor || window.getComputedStyle(rippleTargetElement).background

        this.setRippleStyles({
            elementCircle: createCircle,
            color: this.createRippleColor(parentBackground)!,
            rect: rect,
            radius: this.rippleRadius,
            ev: ev
        })

        rippleTargetElement.appendChild(createCircle)
        setTimeout(() => createCircle.remove(), 600)
    }
}

export default Ripple