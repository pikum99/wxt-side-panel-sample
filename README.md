# WXT + React: サイドパネルサンプル

このリポジトリは、WXT のサイドパネルを React で実装するためのサンプルです。
[![Image from Gyazo](https://i.gyazo.com/2c55fc4bab47eea9553db9abef942678.gif)](https://gyazo.com/2c55fc4bab47eea9553db9abef942678)

wxt を使ってサイドパネルでボタンをいい感じにしてるサンプルがなかったので、レポジトリ作りました。

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

---

# WXT + React: Side Panel Sample

This repository provides a sample implementation of a WXT side panel using React.  
[![Image from Gyazo](https://i.gyazo.com/2c55fc4bab47eea9553db9abef942678.gif)](https://gyazo.com/2c55fc4bab47eea9553db9abef942678)

Since there weren't any good examples of creating buttons on a side panel using WXT, I created this repository.

## Overview

- **WXT Side Panel Sample**  
  This template demonstrates how to create a side panel for WXT extensions using React.
- **React**  
  This sample utilizes React to build a dynamic UI.
- **Using iframe Embedding**  
  The side panel leverages `iframe` to embed external pages.
- **Side Panel Control**  
  A feature to open and close the side panel by clicking a button in the extension is implemented.

## Setup

1. Clone the repository.

   ```bash
   git clone git@github.com:pikum99/wxt-side-panel-sample.git
   cd wxt-side-panel-sample
   ```

2. Install the packages.

   ```bash
   pnpm install
   ```

3. Start the development environment.

   ```bash
   pnpm dev
   ```

4. Modify `manifest.json` or React components as needed.

## Features

- **Open and Close the Side Panel**  
  The side panel can be opened and closed by clicking a button in the extension.
- **Embedding with iframe**  
  Displays an external page within the side panel using `iframe`.
