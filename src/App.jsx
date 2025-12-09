import { use, useState } from "react"
import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import { Dialog } from './components/Dialog';
import TodoContext from "./components/TodoProvider"
import { TodoGroup } from "./components/TodoGroup"
import { TodoForm } from "./components/TodoForm"

// const todos = [
//   {
//     id: 1,
//     description: "JSX e componentes",
//     completed: false,
//     createdAt: "2022-10-31"
//   },
//   {
//     id: 2,
//     description: "Props, state e hooks",
//     completed: false,
//     createdAt: "2022-10-31"
//   },
//   {
//     id: 3,
//     description: "Ciclo de vida dos componentes",
//     completed: false,
//     createdAt: "2022-10-31"
//   },
//   {
//     id: 4,
//     description: "Testes unitários com Jest",
//     completed: false,
//     createdAt: "2022-10-31"
//   }
// ]
// const completed = [
//   {
//     id: 5,
//     description: "Controle de inputs e formulários controlados",
//     completed: true,
//     createdAt: "2022-10-31"
//   },
//   {
//     id: 6,
//     description: "Rotas dinâmicas",
//     completed: true,
//     createdAt: "2022-10-31"
//   }
// ]

function App() {

  const [showDialog, setShowDialog] = useState(false)

  const { todos, addTodo } = use(TodoContext)

  const toggleDialog = () => setShowDialog(!showDialog)

  const handleFormSubmit = (formData) => {
    addTodo(formData)
    toggleDialog()
  }

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          <TodoGroup
            heading="Para estudar"
            items={todos.filter(t => !t.completed)}
          />
          <TodoGroup
            heading="Concluído"
            items={todos.filter(t => t.completed)}
          />

          <Footer>
            <Dialog isOpen={showDialog} onClose={toggleDialog}>
              <TodoForm onSubmit={handleFormSubmit} />
            </Dialog>
            <FabButton onClick={toggleDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  )
}

export default App
