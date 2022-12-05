import {FunctionComponent} from "preact"
import "./Container.css";

const ContainerContent: FunctionComponent = ({children}) => {
    return (
        <section class="container__content">
            {children}
        </section>
    )
}

export default ContainerContent;