import FAIcon, { FAIconProps } from 'src/components/FAIcon'
import {
  COMMON,
  typography,
  CommonProps,
  InnerStyledComponent,
  TypographyProps,
} from 'src/lib/theme'
import styled from 'styled-components'

interface Props {
  icon?: FAIconProps['icon']
  iconSize?: FAIconProps['size']
  showBorder?: boolean
}

export type ButtonProps = InnerStyledComponent<
  CommonProps & Props & TypographyProps,
  HTMLButtonElement | HTMLAnchorElement
>

const StyledButton = styled.button<ButtonProps>`
  border: ${({ showBorder, theme }) =>
    showBorder ? `1px solid ${theme.colors.greyscale[2]}` : 'none'};
  background-color: transparent;
  padding: 8px;
  ${COMMON};
  ${typography};
`

const Button = ({ children, icon, iconSize, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {icon && (
        <>
          <FAIcon icon={icon} size={iconSize} />
          <span> </span>
        </>
      )}
      {children}
    </StyledButton>
  )
}

export default Button
