
const ModalWrapper = ({children, onClose}) => {

    const handWrapperClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div className="modal__wrapper" onClick={handWrapperClick}>{children}</div>
    )
}

export default ModalWrapper