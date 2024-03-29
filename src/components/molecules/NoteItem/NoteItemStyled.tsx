import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const NoteItemStyled = styled.div<IProps>`
  ${({ theme }) => css`
    position: relative;
  `}
`
export const NoteItemLikeStatusStyled = styled.div<IProps>`
  ${({ theme }) => css`
    position: absolute;
    top: -8px;
    right: 0;
    z-index: 100;
  `}
`
export const NoteItemCtxMenuStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 100;
  `}
`
export const NoteItemDateLabelStyled = styled.div<IProps>`
  ${({ theme }) => css`
    position: absolute;
    top: -5px;
    left: 6px;
    z-index: 100;
  `}
`
