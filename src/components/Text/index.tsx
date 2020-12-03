import styled, { css } from 'styled-components'
import { between } from 'polished'

import {
  space,
  SpaceProps,
  typography,
  TypographyProps,
  color as ssColor,
  ColorProps,
} from 'src/lib/theme'

export type TextProps = SpaceProps & TypographyProps & ColorProps

const Text = styled.p<TextProps>`
  ${({ theme }) => css`
    color: ${theme.colors.greyscale[0]};
  `};
  ${space};
  ${typography};
  ${ssColor};
`

export default Text
