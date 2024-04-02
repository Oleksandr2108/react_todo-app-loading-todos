/* eslint-disable jsx-a11y/label-has-associated-control */
import { Todo } from '../types/Todo';
import cn from 'classnames';

type Props = {
  todo: Todo;
  key: number;
};

export const TodoItem: React.FC<Props> = ({
  todo,
  key,
}) => (
  <div
    data-cy="Todo"
    className={cn('todo', { completed: todo.completed })}
    key={key}
  >
    <label className="todo__status-label">
      <input
        data-cy="TodoStatus"
        type="checkbox"
        className="todo__status"
        checked={todo.completed}
      />
    </label>

    <span data-cy="TodoTitle" className="todo__title">
      {todo.title}
    </span>

    {/* Remove button appears only on hover */}
    <button
      type="button"
      className="todo__remove"
      data-cy="TodoDelete"
    >
      ×
    </button>

    {/* overlay will cover the todo while it is being deleted or updated */}
    <div data-cy="TodoLoader" className="modal overlay">
      <div className="modal-background has-background-white-ter" />
      <div className="loader" />
    </div>
  </div>
);
