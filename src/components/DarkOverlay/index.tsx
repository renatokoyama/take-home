import styled from 'styled-components'
import Box from '../Box'

const DarkOverlay = styled(Box)`
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`

export default DarkOverlay
