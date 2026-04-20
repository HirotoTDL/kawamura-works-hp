# 株式会社 河村製作所 — コーポレートサイト

岐阜県中津川市のプラスチック金型メーカー、株式会社 河村製作所の新コーポレートサイト。
Claude Design で設計し、実装・実写差し替えを行ったシングルページ構成の静的サイト。

## 閲覧

GitHub Pages で公開中:
<https://HirotoTDL.github.io/kawamura-works-hp/>

## 構成

| パス | 役割 |
|---|---|
| [index.html](index.html) | エントリポイント |
| [styles.css](styles.css) | ベーススタイル（カラー変数・ナビ・reveal） |
| [css/hero.css](css/hero.css) | Hero セクション |
| [js/](js/) | React + Babel で描画する各セクション（JSX） |
| [assets/](assets/) | 本番で使用する画像（ロゴ・機械・製品・会社・韓国拠点） |
| [素材/](素材/) | 旧サイトから収集した原本素材一式（参照用） |

## セクション

1. Hero — キャッチコピー「見えないところに、私たちの金型。」＋ 製品コラージュ
2. Live ticker — 稼働中プロジェクト風データフィード
3. Process — 9工程インタラクティブビューア
4. Machines — 保有設備（注目4台 + 構造化された一覧30台）
5. Products — 製品カテゴリ（自動車 / 家電 / オフィス / 特注）
6. Message — 代表メッセージ
7. About — 会社概要
8. Clients — 主要取引先
9. Overseas — 韓国オフィス・協力工場
10. Recruit — 採用情報
11. Access — 所在地マップ + 本社外観
12. Contact — お問合せフォーム
13. Footer — 全体ナビ

## 技術

- ビルドステップ無しの静的HTML
- React 18 + Babel Standalone（CDN経由、`type="text/babel"`）
- Google Fonts: Zen Kaku Gothic New / Space Grotesk / Space Mono / Shippori Mincho
- 日本語 / 英語の切替対応（`data-jp` / `data-en`）

## ローカル実行

Babel が外部JSXを取得するため HTTP サーバーが必要です。

```bash
# Windows / Python
py -m http.server 8000
# → http://localhost:8000
```

## クレジット

- デザイン: Claude Design
- 原本素材: 旧サイト <https://kawamura-works.co.jp/wordpress/>
