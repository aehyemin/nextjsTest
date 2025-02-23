import TodoList from "../components/TodoList";

export default async function Home() {
  const initialTodos = ["서버에서 받은 할일1", "서버에서 받은 할일2"];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">투두리스트</h1>
      <TodoList initialTodos={initialTodos} />
    </div>
  );
}