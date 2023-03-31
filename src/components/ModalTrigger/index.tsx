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
import { ThreeDots } from 'react-loader-spinner'

interface IModalTriggerProps {
  isModalTrigger?: boolean
  title: string
  modal: {
    title: string
    content: JSX.Element
  }
  onClickConfirm?: () => void
  disabled?: boolean
  loading?: boolean
}

const ModalTrigger = ({
  title,
  modal,
  isModalTrigger,
  onClickConfirm,
  disabled,
  loading,
}: IModalTriggerProps) => {
  return (
    <Dialog.Root>
      {loading ? (
        <ThreeDots
          height="40"
          width="40"
          radius="9"
          color="#FFBE5C"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
          visible={true}
        />
      ) : (
        <FilledButton
          text={title}
          isModalTrigger={isModalTrigger}
          disabled={disabled}
        />
      )}

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
              <FilledButton
                text="Confirmar"
                isModalClose
                onClick={onClickConfirm}
              />
            </ButtonsContainer>
          </div>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default ModalTrigger
