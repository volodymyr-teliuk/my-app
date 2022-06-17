const Button = (prop) => {
    const title = 'Send reques';

    return <button onClick={prop.onCLick}>{title}</button>;
}

export default Button;
