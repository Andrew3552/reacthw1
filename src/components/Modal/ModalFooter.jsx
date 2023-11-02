import Button from "../Button/Button"
const ModalFooter = ({firstText, secondText, firstClick, secondClick}) => {
    

    return (
        <div className="modal__footer">
            {firstText && <Button btnOk onClick={firstClick}>{firstText}</Button>}
            {secondText && <Button btnCancel onClick={secondClick}>{secondText}</Button>}
        </div>
    )
}

export default ModalFooter