import {FunctionComponent} from "preact";
import "./Container.css";

const ContainerHeader: FunctionComponent = ({children}) => {
    return (
        <section class="container__header">
            {children}
        </section>
    )
}

export default ContainerHeader;