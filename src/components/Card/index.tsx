import Box, { BoxProps } from 'src/components/Box'
import { InnerStyledComponent } from 'src/lib/theme'
import styled from 'styled-components'

export type CardProps = InnerStyledComponent<BoxProps, HTMLDivElement>

const CardContainer = styled(Box)`
  box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.06);
`

const Card = ({
  children,
  borderRadius = '7px',
  padding = '8px 10px',
  bg = 'white',
  ...props
}: CardProps) => {
  return (
    <CardContainer
      bg={bg}
      padding={padding}
      borderRadius={borderRadius}
      {...props}
    >
      {children}
    </CardContainer>
  )
}

export default Card
