export const members = [
  {
    id: "member-1",
    name: "山田太郎",
    role: "フロントエンドエンジニア",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: "member-2",
    name: "佐藤花子",
    role: "バックエンドエンジニア",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: "member-3",
    name: "鈴木一郎",
    role: "デザイナー",
    avatar: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: "member-4",
    name: "田中美咲",
    role: "プロジェクトマネージャー",
    avatar: "https://i.pravatar.cc/150?img=9"
  }
];

export const tasks = [
  {
    id: "task-1",
    name: "ログイン機能の実装",
    assignee: "山田太郎",
    assigneeId: "member-1",
    dueDate: "2026-01-15",
    progress: 80,
    status: "in_progress",
    priority: "high",
    description: "認証システムの実装とフロントエンドの統合"
  },
  {
    id: "task-2",
    name: "API設計書の作成",
    assignee: "佐藤花子",
    assigneeId: "member-2",
    dueDate: "2026-01-20",
    progress: 100,
    status: "completed",
    priority: "high",
    description: "RESTful APIの設計とドキュメント化"
  },
  {
    id: "task-3",
    name: "UIデザインのモックアップ作成",
    assignee: "鈴木一郎",
    assigneeId: "member-3",
    dueDate: "2026-01-12",
    progress: 0,
    status: "not_started",
    priority: "medium",
    description: "ダッシュボードとタスク一覧のデザイン"
  },
  {
    id: "task-4",
    name: "データベーススキーマ設計",
    assignee: "佐藤花子",
    assigneeId: "member-2",
    dueDate: "2026-01-18",
    progress: 60,
    status: "in_progress",
    priority: "high",
    description: "Firestoreのコレクション構造の設計"
  },
  {
    id: "task-5",
    name: "プロジェクト要件定義",
    assignee: "田中美咲",
    assigneeId: "member-4",
    dueDate: "2026-01-05",
    progress: 100,
    status: "completed",
    priority: "high",
    description: "プロジェクトの要件とスコープの定義"
  },
  {
    id: "task-6",
    name: "ユーザーテスト実施",
    assignee: "田中美咲",
    assigneeId: "member-4",
    dueDate: "2026-01-25",
    progress: 0,
    status: "not_started",
    priority: "medium",
    description: "ベータ版のユーザビリティテスト"
  },
  {
    id: "task-7",
    name: "レスポンシブデザイン対応",
    assignee: "山田太郎",
    assigneeId: "member-1",
    dueDate: "2026-01-22",
    progress: 40,
    status: "in_progress",
    priority: "medium",
    description: "モバイル・タブレット対応"
  },
  {
    id: "task-8",
    name: "カラースキーマの決定",
    assignee: "鈴木一郎",
    assigneeId: "member-3",
    dueDate: "2026-01-08",
    progress: 100,
    status: "completed",
    priority: "low",
    description: "ブランドカラーとテーマの策定"
  },
  {
    id: "task-9",
    name: "通知機能の実装",
    assignee: "佐藤花子",
    assigneeId: "member-2",
    dueDate: "2026-01-06",
    progress: 30,
    status: "in_progress",
    priority: "high",
    description: "リアルタイム通知システムの構築"
  },
  {
    id: "task-10",
    name: "セキュリティ監査",
    assignee: "田中美咲",
    assigneeId: "member-4",
    dueDate: "2026-01-08",
    progress: 0,
    status: "not_started",
    priority: "high",
    description: "セキュリティ脆弱性のチェック"
  }
];

// ステータスの定義
export const statusColumns = [
  { id: "not_started", title: "未着手", color: "bg-gray-100" },
  { id: "in_progress", title: "進行中", color: "bg-blue-100" },
  { id: "completed", title: "完了", color: "bg-green-100" }
];
