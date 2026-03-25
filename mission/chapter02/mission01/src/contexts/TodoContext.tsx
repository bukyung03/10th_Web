import { createContext, useState, type ReactNode } from 'react';
import type { Task } from '../types/todo';

// 1. Context가 제공할 데이터/함수의 모양 정의
interface TodoContextType {
  todos: Task[];
  doneTasks: Task[];
  addTodo: (text: string) => void;
  completeTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
}

// 2. 초기값 설정
export const TodoContext = createContext<TodoContextType | undefined>(undefined);

// 3. Provider 컴포넌트 (데이터를 공급해주는 역할)
export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Task[]>([]);
  const [doneTasks, setDoneTasks] = useState<Task[]>([]);

  const addTodo = (text: string) => {
    const newTask = { id: Date.now(), text };
    setTodos((prev) => [...prev, newTask]);
  };

  const completeTask = (task: Task) => {
    setTodos((prev) => prev.filter((t) => t.id !== task.id));
    setDoneTasks((prev) => [...prev, task]);
  };

  const deleteTask = (task: Task) => {
    setDoneTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <TodoContext.Provider value={{ todos, doneTasks, addTodo, completeTask, deleteTask }}>
      {children}
    </TodoContext.Provider>
  );
};