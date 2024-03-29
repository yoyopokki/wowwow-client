import React from 'react'
import Text from '../../../atoms/Text/Text'
import {
  ModalHeaderEastStyled,
  ModalHeaderStyled,
  ModalHeaderWestStyled,
} from './ModalHeaderStyled'
import ModalClose from '../ModalClose/ModalClose'

interface IProps {
  title: string
  onClose?: () => void
}

const ModalHeader = (props: IProps) => {
  const handleCloseClick = () => (props.onClose ? props.onClose() : null)

  return (
    <ModalHeaderStyled>
      <ModalHeaderWestStyled>
        <Text type="heading-2">{props.title}</Text>
      </ModalHeaderWestStyled>
      <ModalHeaderEastStyled>
        <ModalClose onClick={() => handleCloseClick()}></ModalClose>
      </ModalHeaderEastStyled>
    </ModalHeaderStyled>
  )
}

export default ModalHeader
