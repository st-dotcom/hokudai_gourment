# 訪れた店マップ

思い出の飲食店をまとめたインタラクティブなマップサイトです。
「今日どこ行く？」という時のガイドや、新入生への紹介用として活用できます。

## 特徴

- **直感的な操作**: 左側のリストから店名をクリックするだけで、右側にGoogleマップとコメントが表示されます。
- **ダークモード対応**: 右上のボタンで、昼夜問わず見やすいテーマに切り替え可能です。
- **レスポンシブデザイン**: スマートフォンからの閲覧にも対応しています。
- **軽量**: フレームワークを使用せず、純粋なHTML/CSS/JavaScriptのみで構築されています。

## 使用技術

- **Language**: HTML5, CSS3, JavaScript (Vanilla JS)
- **Font**: Noto Sans JP (Google Fonts)
- **Maps**: Google Maps Embed API

## 使い方（GitHub Pagesへの公開手順）

1. このリポジトリを自身のGitHubアカウントに `Clone` または `Fork` します。
2. リポジトリの **Settings** タブをクリックします。
3. 左サイドバーの **Pages** を選択します。
4. **Build and deployment** > **Branch** で `main`（または `master`）を選択し、`Save` を押します。
5. 数分後、発行されたURLにアクセスすれば公開完了です！

## お店情報の追加・編集方法

新しいお店を追加したい場合は、`script.js` 内の `maps` オブジェクトにデータを追記してください。

```javascript
// script.js
const maps = {
  // ...既存のデータ
  "new_shop_id": {
    url: "Googleマップの埋め込みURL",
    comment: "お店の感想やおすすめメニュー"
  }
};
