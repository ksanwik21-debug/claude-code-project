# タスク管理システム

社内プロジェクトのタスク管理ツールのプロトタイプです。

## 主要機能

### 1. メンバー別進捗サマリー（最重要機能）
- 各メンバーが担当しているタスクの消化率をプログレスバーで表示
- 期限遅れのタスクがある場合は赤色で警告表示
- メンバーごとの平均進捗率を表示
- タスク数の統計情報を表示

### 2. カンバンボード形式のタスク一覧
- 3列のカンバンレイアウト：
  - 未着手
  - 進行中
  - 完了
- 各タスクカードには以下の情報を表示：
  - タスク名と説明
  - 担当者
  - 期限と残り日数
  - 進捗率（プログレスバー）
  - 優先度（高/中/低）

### 3. タスク追加機能
- タスク名、担当者、期限、進捗率を入力
- ステータス、優先度、説明も設定可能
- リアルタイムでカンバンボードに反映

## 技術スタック

- **フロントエンド**: React 19
- **ビルドツール**: Vite
- **スタイリング**: Tailwind CSS v3
- **データ**: ローカルダミーデータ（将来的にFirebaseに移行予定）

## セットアップ

### 前提条件
- Node.js 18以上
- npm または yarn

### インストール手順

1. リポジトリをクローン:
```bash
git clone <repository-url>
cd task-management-app
```

2. 依存関係をインストール:
```bash
npm install
```

3. 開発サーバーを起動:
```bash
npm run dev
```

4. ブラウザで `http://localhost:5173` にアクセス

## ビルド

プロダクション用にビルド:
```bash
npm run build
```

ビルドされたファイルは `dist` フォルダに出力されます。

## プロジェクト構造

```
src/
├── components/
│   ├── Dashboard/
│   │   ├── MemberProgressSummary.jsx  # メンバー別進捗サマリー
│   │   └── MemberProgressBar.jsx      # 個別メンバーのプログレスバー
│   ├── KanbanBoard/
│   │   ├── KanbanBoard.jsx            # カンバンボード全体
│   │   ├── KanbanColumn.jsx           # カンバンの列
│   │   └── TaskCard.jsx               # タスクカード
│   ├── TaskForm.jsx                   # タスク追加フォーム
│   └── Header.jsx                     # ヘッダー
├── data/
│   └── mockData.js                    # ダミーデータ
├── App.jsx                            # メインアプリ
└── main.jsx                           # エントリーポイント
```

## データ構造

### Task（タスク）
```javascript
{
  id: "task-1",
  name: "タスク名",
  assignee: "担当者名",
  assigneeId: "member-1",
  dueDate: "2026-01-15",
  progress: 80,                        // 0-100
  status: "in_progress",               // not_started | in_progress | completed
  priority: "high",                    // low | medium | high
  description: "タスクの説明"
}
```

### Member（メンバー）
```javascript
{
  id: "member-1",
  name: "山田太郎",
  role: "フロントエンドエンジニア",
  avatar: "https://i.pravatar.cc/150?img=1"
}
```

## 今後の拡張予定

- [ ] Firebase (Firestore) との連携
- [ ] ドラッグ&ドロップによるタスク移動
- [ ] タスクの編集・削除機能
- [ ] フィルタリング・検索機能
- [ ] ユーザー認証
- [ ] リアルタイム同期
- [ ] 通知機能

## ライセンス

MIT
