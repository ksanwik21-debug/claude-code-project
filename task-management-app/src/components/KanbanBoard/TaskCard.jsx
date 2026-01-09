import React from 'react';

const TaskCard = ({ task }) => {
  // 優先度のバッジ色
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // 優先度のラベル
  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 'high':
        return '高';
      case 'medium':
        return '中';
      case 'low':
        return '低';
      default:
        return '-';
    }
  };

  // 期限が近いか過ぎているかチェック
  const getDueDateStatus = (dueDate) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const due = new Date(dueDate);
    due.setHours(0, 0, 0, 0);

    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return { text: `${Math.abs(diffDays)}日遅延`, color: 'text-red-600' };
    } else if (diffDays === 0) {
      return { text: '今日期限', color: 'text-orange-600' };
    } else if (diffDays <= 3) {
      return { text: `あと${diffDays}日`, color: 'text-yellow-600' };
    }
    return { text: `あと${diffDays}日`, color: 'text-gray-600' };
  };

  const dueDateStatus = getDueDateStatus(task.dueDate);

  // 進捗率の色
  const getProgressColor = (progress) => {
    if (progress >= 75) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-3 hover:shadow-md transition-shadow cursor-pointer">
      {/* タスク名と優先度 */}
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-semibold text-gray-800 flex-1 mr-2">
          {task.name}
        </h4>
        <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
          {getPriorityLabel(task.priority)}
        </span>
      </div>

      {/* 説明 */}
      {task.description && (
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {task.description}
        </p>
      )}

      {/* 担当者 */}
      <div className="flex items-center mb-3">
        <div className="flex items-center space-x-2">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span className="text-sm text-gray-700">{task.assignee}</span>
        </div>
      </div>

      {/* 進捗バー */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-gray-600">進捗率</span>
          <span className="text-xs font-semibold text-gray-700">
            {task.progress}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${getProgressColor(task.progress)} transition-all duration-300`}
            style={{ width: `${task.progress}%` }}
          />
        </div>
      </div>

      {/* 期限 */}
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center space-x-1">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-gray-600">{task.dueDate}</span>
        </div>
        <span className={`font-semibold ${dueDateStatus.color}`}>
          {dueDateStatus.text}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
