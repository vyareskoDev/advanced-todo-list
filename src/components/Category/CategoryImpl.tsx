import { FunctionComponent } from "preact"
import { Button } from "react-bootstrap";
import Category from "../../Interfaces/Category";
import "./Category.css"

type CategoryImpl = {
    category: Category
}

const CategoryImpl: FunctionComponent<CategoryImpl> = (props) => {
    const {name, tasksCount, headerColor, tasks} = props.category;
    return (
        <section class="category">
            <section class="category__header">
                <div class="header__left-side" style={`background-color: {headerColor}`}>
                    {name || "Unnamed"}
                </div>
                <div class="header__right-side">
                    <svg src="../../images/editIcon.svg"></svg>
                </div>
            </section>
            <section class="category__content">
                <span class="date">Today</span>
                {
                    tasks.map((task, index) => {
                        
                        <p key={index}>{task.date} {task.title}</p>
                    })
                }
            </section>
        </section>
    )
}

export default CategoryImpl;