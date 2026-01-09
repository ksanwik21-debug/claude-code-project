import React, { useState } from 'react';

const TaskForm = ({ members, onAddTask }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    assigneeId: '',
    dueDate: '',
    progress: 0,
    status: 'not_started',
    priority: 'medium',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // バリデーション
    if (!formData.name || !formData.assigneeId || !formData.dueDate) {
      alert('タスク名、担当者、期限は必須です');
      return;
    }

    // 担当者名を取得
    const assignee = members.find(m => m.id === formData.assigneeId);

    const newTask = {
      id: `task-${Date.now()}`,
      ...formData,
      assignee: assignee.name,
      progress: parseInt(formData.progress)
    };

    onAddTask(newTask);

    // フォームをリセット
    setFormData({
      name: '',
      assigneeId: '',
      dueDate: '',
      progress: 0,
      status: 'not_started',
      priority: 'medium',
      description: ''
    });

    setIsOpen(false);
  };

  return (
    <div className="mb-6">
      {/* 追加ボタン */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors flex items-center justify-center space-x-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span>新しいタスクを追加</span>
        </button>
      )}

      {/* フォーム */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-500">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">新規タスク作成</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* タスク名 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                タスク名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="例: ログイン機能の実装"
                required
              />
            </div>

            {/* 2列レイアウト */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 担当者 */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  担当者 <span className="text-red-500">*</span>
                </label>
                <select
                  name="assigneeId"
                  value={formData.assigneeId}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">選択してください</option>
                  {members.map(member => (
                    <option key={member.id} value={member.id}>
                      {member.name} - {member.role}
                    </option>
                  ))}
                </select>
              </div>

              {/* 期限 */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  期限 <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* 2列レイアウト */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* ステータス */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ステータス
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="not_started">未着手</option>
                  <option value="in_progress">進行中</option>
                  <option value="completed">完了</option>
                </select>
              </div>

              {/* 優先度 */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  優先度
                </label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="low">低</option>
                  <option value="medium">中</option>
                  <option value="high">高</option>
                </select>
              </div>

              {/* 進捗率 */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  進捗率: {formData.progress}%
                </label>
                <input
                  type="range"
                  name="progress"
                  value={formData.progress}
                  onChange={handleChange}
                  min="0"
                  max="100"
                  step="5"
                  className="w-full"
                />
              </div>
            </div>

            {/* 説明 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                説明
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="3"
                placeholder="タスクの詳細を入力してください"
              />
            </div>

            {/* ボタン */}
            <div className="flex space-x-3 pt-4">
              <button
                type="submit"
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                タスクを追加
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                キャンセル
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default TaskForm;
