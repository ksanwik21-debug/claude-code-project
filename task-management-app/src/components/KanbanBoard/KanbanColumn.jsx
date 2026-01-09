import React from 'react';
import TaskCard from './TaskCard';

const KanbanColumn = ({ column, tasks }) => {
  // ステータスごとのヘッダー色
  const getHeaderColor = (statusId) => {
    switch (statusId) {
      case 'not_started':
        return 'bg-gray-500';
      case 'in_progress':
        return 'bg-blue-500';
      case 'completed':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  // ステータスごとの背景色
  const getBackgroundColor = (statusId) => {
    switch (statusId) {
      case 'not_started':
        return 'bg-gray-50';
      case 'in_progress':
        return 'bg-blue-50';
      case 'completed':
        return 'bg-green-50';
      default:
        return 'bg-gray-50';
    }
  };

  return (
    <div className={`rounded-lg ${getBackgroundColor(column.id)} p-4 min-h-[500px]`}>
      {/* カラムヘッダー */}
      <div className={`${getHeaderColor(column.id)} text-white rounded-lg p-3 mb-4 shadow-sm`}>
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg">{column.title}</h3>
          <span className="bg-white bg-opacity-30 text-white text-sm font-semibold px-2 py-1 rounded-full">
            {tasks.length}
          </span>
        </div>
      </div>

      {/* タスクカード一覧 */}
      <div className="space-y-3">
        {tasks.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <svg
              className="w-12 h-12 mx-auto mb-2 opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p className="text-sm">タスクがありません</p>
          </div>
        ) : (
          tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))
        )}
      </div>
    </div>
  );
};

export default KanbanColumn;
