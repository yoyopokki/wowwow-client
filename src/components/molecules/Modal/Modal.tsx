import React from 'react'
import {
  ModalBackgroundStyled,
  ModalStyled,
  ModalWrapperStyled,
} from './ModalStyled'
import Wrapper from '../../atoms/Wrapper/Wrapper'
import Row from '../../atoms/Row/Row'
import Column from '../../atoms/Column/Column'
import ModalHeader from './ModalHeader/ModalHeader'
import ModalContent from './ModalContent/ModalContent'

interface IProps {
  onClose?: () => void
}

const Modal = (props: IProps) => {
  const handleClose = () => (props.onClose ? props.onClose() : null)

  return (
    <ModalStyled>
      <ModalBackgroundStyled></ModalBackgroundStyled>
      <Wrapper paddingX={false}>
        <ModalWrapperStyled>
          <Row>
            <Column size={12}>
              <ModalHeader onClose={() => handleClose()}></ModalHeader>
            </Column>
          </Row>
          <Row>
            <Column size={12}>
              <ModalContent></ModalContent>
            </Column>
          </Row>
        </ModalWrapperStyled>
      </Wrapper>
    </ModalStyled>
  )
}

export default Modal