import cx from 'classnames'
import './Button.scss'

const Button = (props) => {
    
    const {
        type = "button", 
        className = '', 
        btnOk, 
        btnCancel, 
        onClick,
        children, 
        ...restProps} = props

    return (
        <button className={cx("modal__button", className, {"btnok": btnOk}, {"btncancel": btnCancel})} type={type} onClick={onClick} {...restProps}>{children}</button>
    )
}

export default Button