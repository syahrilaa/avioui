<p align="center">
  <a href="https://avioui.com/tools/" rel="noopener" target="_blank">
  <img width="148" height="164" src="https://github.com/syahrilaa/avioui/blob/main/public/avioui-logo-transparent.png?raw=true" alt="Avioui Logo">
  </a>
</p>

<h1 align="center">Avioui - ripple-effect</h1>

## - Ripple Effect

Made for those of you who want to make your elements have a Ripple effect

#### Features:
- Dynamic color ripple

#### Uses Instructions:

1. Install the `@avioui/ripple-effect` from terminal by npm or yarn.

```bash
npm i @avioui/ripple-effect

yarn add @avioui/ripple-effect
```

2. Import the `@avioui/ripple-effect` in to your project.

```ts
    import Ripple from '@avioui/ripple-effect'
```

3. `@avioui/ripple-effect` Ripple effect works by using events on elements. You need to initialize the Ripple() object first then use the add() method to get the ripple effect on the component.

```tsx
    import React from 'react'
    import Ripple from '@avioui/ripple-effect'

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