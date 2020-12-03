import styled from 'styled-components'
import { COMMON, CommonProps, typography, TypographyProps } from 'src/lib/theme'

export type HeadingProps = CommonProps & TypographyProps
const Heading = styled.h1<HeadingProps>`
  ${COMMON}
  ${typography}
`

export default Heading
