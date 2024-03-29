import BoardTasks from "./components/BoardTasks";
import Sidebar from "./components/Sidebar";


export default function Home() {
  return (
    <main className="flex h-full">
      <Sidebar/>
      <BoardTasks />
    </main>
  );
}
