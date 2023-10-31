import ModalWrapper from './ModalWrapper'
import Modal from './Modal'
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'
import ModalClose from './ModalClose'
const ModalBase = () => {
    return (
        <ModalWrapper>
            <Modal>
                <ModalHeader>
                    Modal Header
                </ModalHeader>
                <ModalBody>
                    Modal Body
                </ModalBody>
                <ModalFooter>
                    Modal Footer
                </ModalFooter>
                <ModalClose>
                    Modal Close
                </ModalClose>
            </Modal>
        </ModalWrapper>
    )
}