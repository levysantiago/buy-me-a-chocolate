/* eslint-disable no-undef */
import * as Dialog from '@radix-ui/react-dialog'
import FilledButton from '../buttons/FilledButton'
import UnfilledButton from '../buttons/UnfilledButton'
import {
  CloseIcon,
  DialogContent,
  DialogClose,
  Overlay,
  DialogTitle,
  ButtonsContainer,
  CloseIconContainer,
} from './styles'

interface IModalTriggerProps {
  isModalTrigger?: boolean
  title: string
  modal: {
    title: string
    content: JSX.Element
  }
}

const ModalTrigger = ({ title, modal, isModalTrigger }: IModalTriggerProps) => {
  return (
    <Dialog.Root>
      <FilledButton text={title} isModalTrigger={isModalTrigger} />

      <Dialog.Portal>
        <Dialog.Overlay>
          <Overlay />
        </Dialog.Overlay>

        <DialogContent>
          <DialogClose>
            <CloseIconContainer>
              <CloseIcon />
            </CloseIconContainer>
          </DialogClose>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <DialogTitle>{modal.title}</DialogTitle>

            {modal.content}

            <ButtonsContainer>
              {/* <DialogClose></DialogClose>
              <DialogClose></DialogClose> */}
              <UnfilledButton text="Cancelar" isModalClose />
              <FilledButton text="Confirmar" isModalClose />
            </ButtonsContainer>
          </div>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default ModalTrigger
