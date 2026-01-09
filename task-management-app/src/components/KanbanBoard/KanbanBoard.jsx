import React from 'react';
import KanbanColumn from './KanbanColumn';
import { statusColumns } from '../../data/mockData';

const KanbanBoard = ({ tasks }) => {
  // ステータスごとにタスクをグループ化
  const getTasksByStatus = (statusId) => {
    return tasks.filter(task => task.status === statusId);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        📋 タスク管理ボード
      </h2>

      {/* カンバンボード - 3列レイアウト */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {statusColumns.map(column => (
          <KanbanColumn
            key={column.id}
            column={column}
            tasks={getTasksByStatus(column.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
