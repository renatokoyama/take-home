import { ChangeEvent, forwardRef } from 'react'
import Flex from 'src/components/Flex'
import {
  color as ssColor,
  ColorProps,
  InnerStyledComponent,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'src/lib/theme'
import styled, { css } from 'styled-components'

interface Props {
  defaultValue?: string
  onTextChange?: (value: string) => void
}

export type InputProps = InnerStyledComponent<
  SpaceProps & TypographyProps & ColorProps & LayoutProps & Props,
  HTMLInputElement
>

const StyledInput = styled.input<InputProps>`
  ${({ theme }) => css`
    color: ${theme.colors.greyscale[0]};
    height: 60px;
    width: 100%;
    border: none;
    margin-bottom: 0;
    padding: 0px 48px 0 20px;
    background-color: ${theme.colors.white};
    font-size: 16px;
    line-height: 1.2;
    font-family: ${theme.fonts.primary};
    font-weight: 300;
    padding: 20px;
    ${space};
    ${typography};
    ${ssColor};
  `};
`

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ onTextChange, defaultValue, ...props }, ref) => {
    return (
      <Flex alignItems='center' position='relative'>
        <StyledInput
          {...props}
          ref={ref}
          defaultValue={defaultValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            return onTextChange && onTextChange(e.target.value)
          }}
        />
      </Flex>
    )
  }
)
export default Input
