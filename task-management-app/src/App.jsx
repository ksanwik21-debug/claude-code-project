import React, { useState } from 'react';
import Header from './components/Header';
import MemberProgressSummary from './components/Dashboard/MemberProgressSummary';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';
import TaskForm from './components/TaskForm';
import { members, tasks as initialTasks } from './data/mockData';

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  // 新しいタスクを追加
  const handleAddTask = (newTask) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* メンバー別進捗サマリー（画面上部） */}
        <MemberProgressSummary members={members} tasks={tasks} />

        {/* タスク追加フォーム */}
        <TaskForm members={members} onAddTask={handleAddTask} />

        {/* カンバンボード */}
        <KanbanBoard tasks={tasks} />
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-12">
        <p className="text-sm">
          © 2026 タスク管理システム - プロジェクトの進捗を可視化
        </p>
      </footer>
    </div>
  );
}

export default App;
