import React from 'react';
import MemberProgressBar from './MemberProgressBar';

const MemberProgressSummary = ({ members, tasks }) => {
  // メンバーごとの進捗データを計算
  const getMemberProgress = (memberId) => {
    const memberTasks = tasks.filter(task => task.assigneeId === memberId);

    if (memberTasks.length === 0) {
      return {
        totalTasks: 0,
        completedTasks: 0,
        completionRate: 0,
        hasOverdueTasks: false,
        averageProgress: 0
      };
    }

    const completedTasks = memberTasks.filter(task => task.status === 'completed').length;
    const totalTasks = memberTasks.length;
    const completionRate = Math.round((completedTasks / totalTasks) * 100);

    // 期限遅れのタスクをチェック（今日の日付と比較）
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const hasOverdueTasks = memberTasks.some(task => {
      if (task.status === 'completed') return false;
      const dueDate = new Date(task.dueDate);
      dueDate.setHours(0, 0, 0, 0);
      return dueDate < today;
    });

    // 平均進捗率を計算
    const averageProgress = Math.round(
      memberTasks.reduce((sum, task) => sum + task.progress, 0) / totalTasks
    );

    return {
      totalTasks,
      completedTasks,
      completionRate,
      hasOverdueTasks,
      averageProgress
    };
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        📊 メンバー別進捗サマリー
      </h2>

      <div className="space-y-4">
        {members.map(member => {
          const progress = getMemberProgress(member.id);

          return (
            <MemberProgressBar
              key={member.id}
              member={member}
              progress={progress}
            />
          );
        })}
      </div>

      {/* サマリー統計 */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-blue-600">
              {tasks.length}
            </p>
            <p className="text-sm text-gray-600">総タスク数</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-600">
              {tasks.filter(t => t.status === 'completed').length}
            </p>
            <p className="text-sm text-gray-600">完了</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-yellow-600">
              {tasks.filter(t => t.status === 'in_progress').length}
            </p>
            <p className="text-sm text-gray-600">進行中</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProgressSummary;
