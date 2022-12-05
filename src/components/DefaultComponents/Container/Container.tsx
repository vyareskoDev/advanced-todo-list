import {FunctionComponent} from "preact"
import "./Container.css";

const Container: FunctionComponent = ({children}) => {
    return (
        <section class="container">{children}</section>
    )
}

export default Container;