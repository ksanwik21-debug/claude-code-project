import React from 'react';

const MemberProgressBar = ({ member, progress }) => {
  const { totalTasks, completedTasks, completionRate, hasOverdueTasks, averageProgress } = progress;

  // 期限遅れの場合は赤色、そうでない場合は進捗に応じた色
  const getBarColor = () => {
    if (hasOverdueTasks) {
      return 'bg-red-500';
    }
    if (completionRate >= 75) {
      return 'bg-green-500';
    }
    if (completionRate >= 50) {
      return 'bg-blue-500';
    }
    if (completionRate >= 25) {
      return 'bg-yellow-500';
    }
    return 'bg-orange-500';
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      {/* メンバー情報 */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-lg font-bold text-gray-800">
            {completionRate}%
          </p>
          <p className="text-xs text-gray-500">
            {completedTasks}/{totalTasks} タスク完了
          </p>
        </div>
      </div>

      {/* プログレスバー */}
      <div className="relative">
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className={`h-full ${getBarColor()} transition-all duration-500 ease-out flex items-center justify-end pr-2`}
            style={{ width: `${completionRate}%` }}
          >
            {completionRate > 10 && (
              <span className="text-xs font-semibold text-white">
                {completionRate}%
              </span>
            )}
          </div>
        </div>

        {/* 期限遅れの警告 */}
        {hasOverdueTasks && (
          <div className="absolute -top-1 -right-1">
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </div>
        )}
      </div>

      {/* 警告メッセージ */}
      {hasOverdueTasks && (
        <div className="mt-2 flex items-center text-xs text-red-600">
          <svg
            className="w-4 h-4 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          期限遅れのタスクがあります
        </div>
      )}

      {/* 平均進捗率の表示 */}
      <div className="mt-2 text-xs text-gray-600">
        平均進捗率: {averageProgress}%
      </div>
    </div>
  );
};

export default MemberProgressBar;
