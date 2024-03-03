'use client'
import React from 'react'
import PropTypes from "prop-types";
import { propsTypesSize, propsTypesVariant, size, variant } from "../../types/components/button";
import styled from "styled-components";
export interface ButtonBaseProps extends React.ComponentProps<'button'> {
  variant?: variant
  size?: size
}

const StyledButton = styled.button<ButtonBaseProps>`
  background-color: blue;
`

export const Button = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(({ variant, size, ...rest }, ref) => {
  return (
    <StyledButton variant={variant} size={size} ref={ref} {...rest}>
      {rest.children}
    </StyledButton>
  )
})

Button.displayName = "@avioui/react-button"
Button.propTypes = {
  variant: PropTypes.oneOf(propsTypesVariant),
  size: PropTypes.oneOf(propsTypesSize)
}
export default Button