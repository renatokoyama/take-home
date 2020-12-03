import styled, { css } from 'styled-components'

import {
  space,
  SpaceProps,
  typography,
  TypographyProps,
  color as ssColor,
  ColorProps,
  position,
  PositionProps,
} from 'src/lib/theme'

export type TextProps = SpaceProps &
  TypographyProps &
  ColorProps &
  PositionProps

const Text = styled.p<TextProps>`
  ${({ theme }) => css`
    color: ${theme.colors.greyscale[0]};
  `};
  ${space};
  ${typography};
  ${ssColor};
  ${position};
`

export default Text
