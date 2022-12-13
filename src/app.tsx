import Container from './components/DefaultComponents/Container/Container';
import ContainerHeader from './components/DefaultComponents/Container/ContainerHeader';
import ContainerContent from './components/DefaultComponents/Container/ContainerContent';
import Button from './components/DefaultComponents/Button/Button';
import {useState} from "preact/hooks";
import Task from './Interfaces/Task';
import Category from './Interfaces/Category';
import './app.css';

export function App() {
  let [categories, setCategories] = useState<Category[]>([
    {
      id: 0, 
      name: "Personal",
      tasksCount: 10,
      headerColor: "#82A5AA"
    },
    {
      id: 1,
      name: "Job",
      tasksCount: 3,
      headerColor: "#82AA83"
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

          </ContainerContent>
        </Container>
      </main>
    </>
  )
}
