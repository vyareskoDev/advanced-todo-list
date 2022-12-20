import Container from './components/DefaultComponents/Container/Container';
import ContainerHeader from './components/DefaultComponents/Container/ContainerHeader';
import ContainerContent from './components/DefaultComponents/Container/ContainerContent';
import Button from './components/DefaultComponents/Button/Button';
import {useState} from "preact/hooks";
import Task from './Interfaces/Task';
import Category from './Interfaces/Category';
import CategoryImpl from './components/Category/CategoryImpl';
import './app.css';

export function App() {
  let [categories, setCategories] = useState<Category[]>([
    {
      id: 0, 
      name: "Personal",
      tasksCount: 10,
      headerColor: "#82A5AA",
      tasks: [
        {
          id: 0,
          title: "Hi!",
          text: "Example",
          date: new Date(Date.now())
        },
        {
          id: 1,
          title: "Hi2!",
          text: "Example2",
          date: new Date(Date.now())
        },
        {
          id: 2,
          title: "Hi3!",
          text: "Example3",
          date: new Date(Date.now())
        },
      ]
    },
    {
      id: 1,
      name: "Job",
      tasksCount: 3,
      headerColor: "#82AA83",
      tasks: [
        {
          id: 0,
          title: "Hi!",
          text: "Example",
          date: new Date(Date.now())
        },
        {
          id: 1,
          title: "Hi2!",
          text: "Example2",
          date: new Date(Date.now())
        },
        {
          id: 2,
          title: "Hi3!",
          text: "Example3",
          date: new Date(Date.now())
        },
      ]
    },
  ]);
  return (
    <>
      <main>
        <Container>
          <ContainerHeader>
            <section class="header__left-side">
              <h2>Categories</h2>
            </section>
            <section class="header__right-side">
              <Button>
                Add
              </Button>
            </section>
          </ContainerHeader>
          <ContainerContent>
            <section class="categories">
              {
              categories.map(category => 
                <CategoryImpl category={category} />
                )
              }
              </section>
          </ContainerContent>
        </Container>
      </main>
    </>
  )
}
