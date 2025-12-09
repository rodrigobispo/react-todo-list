import './todo-item.style.css'
import { IconPencil, IconTrash } from "../icons";

export function ToDoItem ({ item, onToggleCompleted, onRemoveTodo }) {
    const styles = ['todo-item']

    if (item.completed) {
        styles.push('completed')
    }

    return (
        <li className={styles.join(' ')}>
            <p className="date">
              {new Date(item.createdAt).toLocaleDateString('pt-BR')}
            </p>
            <div className="details">
                <input
                  type="checkbox"
                  className="checkbox"
                  defaultChecked={item.completed}
                  onClick={() => onToggleCompleted(item)}
                />
                <p className="description">
                    {item.description}
                </p>
                <div className="actions">
                    <button className="btn-item" onClick={() => onRemoveTodo(item)}>
                        <IconTrash />
                    </button>
                    <button className="btn-item">
                        <IconPencil />
                    </button>
                </div>
            </div>
        </li>
    )
}