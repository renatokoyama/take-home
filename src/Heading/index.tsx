import styled, { css } from 'styled-components'
import { COMMON, CommonProps, typography, TypographyProps } from 'lib/theme'

export interface HeadingProps extends CommonProps, TypographyProps {
  color?: string
  darkBg?: boolean
  uppercase?: boolean
  capitalize?: boolean
  ellipsis?: boolean
}

const Heading = styled.h1<HeadingProps>`
  ${({ theme, darkBg, uppercase, capitalize, ellipsis }) =>
    css`
      text-transform: ${uppercase
        ? 'uppercase'
        : capitalize
        ? 'capitalize'
        : null};
      color: ${darkBg ? theme.colors.greyscale[9] : theme.colors.greyscale[0]};
      ${ellipsis &&
      css`
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      `};
    `}

  ${COMMON}
  ${typography}
`

export default Heading
