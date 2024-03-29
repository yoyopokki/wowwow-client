import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const ModalContentStyled = styled.div<IProps>`
  ${({ theme }) => css`
    height: calc(100vh - 98px);
    padding-left: ${theme.sizes.stepSize * 2}px;
    padding-right: ${theme.sizes.stepSize * 2}px;

    @media ${theme.mediaQueries.phablet} {
      height: calc(100vh - 87px);
    }
    @media ${theme.mediaQueries.mobile} {
      height: calc(100vh - 78px);
    }
  `}
`
