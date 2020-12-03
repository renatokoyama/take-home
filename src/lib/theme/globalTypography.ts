import { css } from 'styled-components'

export const globalTypography = css`
  ${({ theme }) => css`
    body {
      font-family: ${theme.fonts.primary};
      font-weight: 300;
      color: ${theme.colors.greyscale[0]};
      font-size: 16px;
      line-height: 22px;
    }

    h1 {
      font-size: 50px;
      font-weight: 600;
    }

    h2 {
      font-size: 24px;
      font-weight: 600;
    }

    h3 {
      font-size: 20px;
      font-weight: 300;
    }

    h4 {
      font-size: 18px;
      font-weight: 300;
    }

    h5 {
      font-size: 16px;
      font-weight: 300;
    }
  `}
`
