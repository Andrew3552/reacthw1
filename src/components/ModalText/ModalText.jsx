import ModalWrapper from '../Modal/ModalWrapper'
import Modal from '../Modal/Modal'
import ModalHeader from '../Modal/ModalHeader'
import ModalBody from '../Modal/ModalBody'
import ModalFooter from '../Modal/ModalFooter'
import ModalClose from '../Modal/ModalClose'

const ModalText = ({title, desc, handleClose, handleOk}) => {
    return (
        <ModalWrapper onClose={handleClose}>
            <Modal>
                <ModalHeader>
                    <ModalClose onCLick={handleClose} />
                </ModalHeader>
                <ModalBody>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </ModalBody>
                <ModalFooter 
                firstText="Ok" 
                secondText="Cancel" 
                firstClick={handleOk} 
                secondClick={handleClose}
                 />
            </Modal>
        </ModalWrapper>
    )
}

export default ModalText