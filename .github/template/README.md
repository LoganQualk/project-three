[Home](../../../../) | [Use this template](https://github.com/ansipes/web-template/generate)

# [Web Template](https://github.com/ansipes/mejo-web-template)

This template improves the developer experience when using [Visual Studio Code](https://code.visualstudio.com/) and [GitHub](https://github.com).

## How to Use

### Setup 🛠

1. Click [Use this template](https://github.com/ansipes/mejo-web-template) and create the repository from template
2. Under `Settings` -> `Pages` pick `gh-pages` as the branch and `/ (root)` as the folder, the click save
3. Clone your repository via Visual Studio Code and open in new window
4. Toggle Extensions panel
   - Skip if you already have recommended extensions
   - Search for `@recommended`
   - Look for `WORKSPACE RECOMMENDATIONS`
   - Click `Install Workspace Extension Recommendations` (cloud ☁️ with a down arrow ↓)

### Preview 👁

Click the "Go Live" button in the bottom right of Visual Studio Code. This will open [http://127.0.0.1:5500/](http://127.0.0.1:5500/) in your browser.

Everything in your `src` folder will be served just like it is on a real web server. Anytime you save your work, the browser will automatically refresh.

### Publish 🚀

As long as you have enabled GitHub Pages, your project should be published at [https://username.github.io/repository](#).

- Replace `username` with your GitHub username
- Replace `repository` with your repository name

## What's Included

### [Settings](../../.vscode/extensions.json) ⚙️

This template includes settings that improve writing and version control in Visual Studio Code.

#### Writing ✏️

These settings solve common problems like unsaved work, poorly formatted code, and missing brackets.

- [Saves on Focus Change](https://github.com/ansipes/mejo-web-template/blob/812550fd1d1b7951cac2ded8ef2e9589e1ffe6b0/.vscode/settings.json#L2)
- [Formats Code on Save](https://github.com/ansipes/mejo-web-template/blob/812550fd1d1b7951cac2ded8ef2e9589e1ffe6b0/.vscode/settings.json#L3)
- [Closes Brackets Automatically](https://github.com/ansipes/mejo-web-template/blob/812550fd1d1b7951cac2ded8ef2e9589e1ffe6b0/.vscode/settings.json#L10)

#### Version Control 🗃

These settings help simplify sending your code to GitHub by reducing four steps (add, commit, push, pull) to a single step. Simply type a commit message in the Source Control view and click the checkmark.

- [Stages Changes Automatically](https://github.com/ansipes/mejo-web-template/blob/812550fd1d1b7951cac2ded8ef2e9589e1ffe6b0/.vscode/settings.json#L16)
- [Syncs After Commit](https://github.com/ansipes/mejo-web-template/blob/812550fd1d1b7951cac2ded8ef2e9589e1ffe6b0/.vscode/settings.json#L17)

### [Extensions](../../.vscode/extensions.json) 🔌

This template includes recommended extensions that improve formatting, testing, and troubleshooting in Visual Studio Code.

#### [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 💅

- Formats Code with Opinionated Rules

https://user-images.githubusercontent.com/25012869/125014266-5cd3aa80-e03b-11eb-8a5c-80708376b80a.mp4

#### [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 🌐

- Serves the [src](../../src) folder on [http://127.0.0.1:5500](http://127.0.0.1:5500)
- Refreshes Browser on Save

https://user-images.githubusercontent.com/25012869/125108681-5c292b80-e0b0-11eb-98ac-41ce2babc13b.mp4

#### [HTMLHint](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint) 🔎

- Analyzes HTML for Problems

https://user-images.githubusercontent.com/25012869/125381194-79d0ec00-e361-11eb-957d-6e9992478b7a.mp4

### [Workflows](../workflows) 🪄

This template includes a workflow that improves deployment via GitHub Pages.

#### [Continuous Delivery](../workflows/cd.yml) 🚚

- Copies the [src](../../src) folder to the [gh-pages](../../../../tree/gh-pages) branch

### Folders 📁

#### [src](../../src) 💎

It is common practice to put any source code in a `src` folder. Everything you add to your project that isn't a configuration file should go in the `src` folder.

#### [.vscode](../../.vscode) 👩‍💻

This folder stores [settings](../../.vscode/settings.json) and [extension recommendations](../../.vscode/extensions.json) for Visual Studio Code. This template hides the `.vscode` folder in the explorer to prevent accidental modification or deletion. You can unhide it in Visual Studio Code with the `Files: Exclude` setting.

#### [.github](../../.github) 🐙

This folder stores GitHub [workflows](../../.github/workflows) and this [README.md](./). This template hides the `.github` folder in the explorer to prevent accidental modification or deletion. You can unhide it in Visual Studio Code with the `Files: Exclude` setting.

### Files 📄

This template includes files and folders that help you get started with a basic web repository.

#### [README.md](../../README.md) 👀

The README.md file displays automatically when someone visits your repository page on GitHub.com. It is an opporunity to summarize your project to visitors and/or give instructions on how they can run in locally on their own computer.

#### [index.html](../../src/index.html) 🏠

Every static website will need at least one HTML file to function. Given this, an `index.html` file is included in the root of your `src` folder. This also ensures that your `Go Live` button for [Live Server](#Live-Server) works the first time you open your project.
