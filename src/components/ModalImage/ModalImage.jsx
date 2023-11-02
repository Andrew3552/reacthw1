import ModalWrapper from '../Modal/ModalWrapper'
import Modal from '../Modal/Modal'
import ModalHeader from '../Modal/ModalHeader'
import ModalBody from '../Modal/ModalBody'
import ModalFooter from '../Modal/ModalFooter'
import ModalClose from '../Modal/ModalClose'
import MyImg from '../../assets/img/BTC.jpeg'

const ModalImage = ({title, desc, handleClose}) => {
    
    return (
        <ModalWrapper onClose={handleClose}>
        <Modal> 
            <ModalClose onCLick={handleClose} />
            <ModalHeader>
                <figure>
                 <img src={MyImg} alt="BTC" />
                </figure>
            </ModalHeader>
            <ModalBody>
                <h1>{title}</h1>
                <p>{desc}</p>
            </ModalBody>
            <ModalFooter secondText="Cancel" secondClick={handleClose} />
        </Modal>
    </ModalWrapper>
    )
}

export default ModalImage