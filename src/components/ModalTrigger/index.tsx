import * as Dialog from "@radix-ui/react-dialog";
import FilledButton from "../buttons/FilledButton";
import UnfilledButton from "../buttons/UnfilledButton";
import {
  CloseIcon,
  DialogContent,
  DialogClose,
  Overlay,
  DialogTrigger,
  DialogTitle,
  ButtonsContainer,
  CloseIconContainer,
} from "./styles";

interface IModalTriggerProps {
  title: string;
  modal: {
    title: string;
    content: JSX.Element;
  };
}

const ModalTrigger = ({ title, modal }: IModalTriggerProps) => {
  return (
    <Dialog.Root>
      <DialogTrigger type="button">
        <FilledButton text={title} />
      </DialogTrigger>

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

          <div style={{ display: "flex", flexDirection: "column" }}>
            <DialogTitle>{modal.title}</DialogTitle>

            {modal.content}

            <ButtonsContainer>
              <DialogClose>
                <UnfilledButton text="Cancelar" />
              </DialogClose>
              <DialogClose>
                <FilledButton text="Confirmar" />
              </DialogClose>
            </ButtonsContainer>
          </div>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalTrigger;
