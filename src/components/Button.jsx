function Button({text, onClick, classN}) {
    return <button className={classN} onClick={onClick}>{text}</button>;
}

export default Button;