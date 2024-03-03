<p align="center">
  <a href="https://avioui.com/tools/" rel="noopener" target="_blank">
  <img width="148" height="164" src="https://github.com/syahrilaa/avioui/blob/main/public/avioui-logo-transparent.png?raw=true" alt="Avioui Logo">
  </a>
</p>

<h1 align="center">Avioui - Tools</h1>

## Available Tools:

### - Ripple Effect

Made for those of you who want to make your elements have a Ripple effect

#### Features:
- Dynamic color ripple

#### Uses Instructions:

1. Install the `@avioui/tools` from terminal by npm or yarn.

```bash
npm i @avioui/tools

yarn add @avioui/tools
```

2. Import the `@avioui/tools` in to your project.

```ts
    import Ripple from '@avioui/tools'
```

3. `@avioui/tools` Ripple effect works by using events on elements. You need to initialize the Ripple() object first then use the add() method to get the ripple effect on the component.

```tsx
    import React from 'react'
    import Ripple from '@avioui/tools'

    function Example() {

        const ripple = new Ripple()

        return (
            <>
                <button onMouseUp={(e) => ripple.add(e)}>
                    example ripple
                </button>
            </>
        );
    }

    export default Example
```

#### Using CDN Ripple Effect

1. Add the CDN script of `@avioui/tools` in to your HTML file.

```html
<script crossorigin src="https://unpkg.com/@avioui/tools/ripple/html"></script>
```

2. cdn works using the data attribute on the element, set the data-ripple on the element you want to have ripple effect.

```html
<button data-ripple="true">example ripple</button>
```