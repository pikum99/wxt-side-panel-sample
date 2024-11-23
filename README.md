# WXT + React: サイドパネルサンプル

このリポジトリは、WXT のサイドパネルを React で実装するためのサンプルです。

## 概要

- **WXT のサイドパネルサンプル**  
  WXT の拡張機能で使用するサイドパネルを React で作成するテンプレートです。
- **React**  
  このサンプルは、React を使用して動的な UI を実現しています。

- **iframe の埋め込みを利用**  
  サイドパネルは`iframe`を使用して外部ページを埋め込む仕組みを採用しています。

- **サイドパネルの操作**  
  拡張機能のボタンを押すことで、サイドパネルを開閉する機能を実装しています。

## セットアップ

1. リポジトリをクローンします。

   ```bash
   git clone git@github.com:pikum99/wxt-side-panel-sample.git
   cd wxt-side-panel-sample
   ```

2. パッケージをインストールします。

   ```bash
   pnpm install
   ```

3. 開発環境を起動します。

   ```bash
   pnpm dev
   ```

4. 必要に応じて、`manifest.json`や React コンポーネントを編集してください。

## 機能

- **サイドパネルの開閉**  
  拡張機能のボタンをクリックすると、サイドパネルを開閉できます。
- **iframe の埋め込み**  
  任意の外部ページをサイドパネルに表示するための`iframe`を使用しています。
