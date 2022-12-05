import "./Button.css";
import { FunctionComponent } from "preact";

const Button: FunctionComponent = ({children}) => {
    return (
        <button>{children}</button>
    )
}

export default Button;