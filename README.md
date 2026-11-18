# 電卓アプリ（仮）

ふつうに使える電卓に、便利機能とゲームが付いたアプリ。

ページ・データの形・各ページの中身は [設計書](docs/design.md) にまとめてある。

## 動かし方

```bash
npm install
npm run dev
```

## 担当

| ページ | 担当 | ファイル |
| --- | --- | --- |
| ログイン | （できている） | `src/pages/login/` |
| 一覧 | | `src/pages/home/` |
| ノーマル電卓 | | `src/pages/calculator/` |
| マイページ | | `src/pages/mypage/` |
| 割り勘 | | `src/pages/warikan/` |
| いたずら電卓 | | `src/pages/prank/` |
| スロット | | `src/pages/slot/` |

## AI に書いてもらうとき

ChatGPT などにコードを書いてもらうときは、会話の最初に次の 2 つを貼ってください。

1. レシピのサイトのトップにある「コピー」で取ったもの（前提の文と書き方の見本）
2. 自分の担当シート（`docs/tasks/` の中）

レシピのサイト：https://webex-product-recipes.asahi-gaia1530.workers.dev
