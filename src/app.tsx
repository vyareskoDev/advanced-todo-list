import './app.css';
import Container from './components/DefaultComponents/Container/Container';
import ContainerHeader from './components/DefaultComponents/Container/ContainerHeader';
import ContainerContent from './components/DefaultComponents/Container/ContainerContent';
import Button from './components/DefaultComponents/Button/Button';
import Task from './Interfaces/Task';

export function App() {
  
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
