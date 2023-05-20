
import React from 'react'

const label = 'Baixar CV'
const alertButton = () => {
    alert(`A label desse botão é ${label}`)
}
const Button = (props) => {
    return(
        <button onClick={alertButton}>{props.label}</button>
    )
}

Button.defaultProps = {
    label: "Baixar CV"
}

export default Button