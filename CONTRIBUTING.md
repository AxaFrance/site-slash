# Contributing to this Design System

## Prerequisite

You must use a version of Node.js respecting the following rule `>=10.14.2` or `12.x` or `>=14`.

## Installation

To get started, start by [forking the repository](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo) on your personnal github account.

Then, clone the forked repository:

```sh
git clone https://github.com/{your_account}/design-system.git
```

It's now time to install all dependencies:

```sh
cd design-system
npm install
```

At this point you are ready to contribute.

## Keeping your forked repository up-to-date

Before you start developping, it is important to always keep your forked repository **up-to-date**.

### Link your forked repository to the original project

For this, you will add a remote which points to the original repository (this has to be done only once):

```sh
git remote add upstream https://github.com/AxaGuilDEv/design-system.git
```

### Update your master branch

Then, each time you want to update your repository with the last changes, run:

```sh
git checkout master
git fetch upstream
git rebase upstream/master
```

More information in github documentation: [Fork a repo#Keep your fork synced](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo#keep-your-fork-synced)

## Generated content

The following pages of this website are generated, please do not modify them:

- "Contributeurs" page: [contributors-page.pug](https://github.com/AxaGuilDEv/design-system/blob/master/src/pages/get-started/contributors/templates/contributors-page.pug)
- "Changelog" page: [content.md](https://github.com/AxaGuilDEv/design-system/blob/master/src/pages/get-started/changelog/markdown/content.md)
- "Comment contribuer" page: [content.md](https://github.com/AxaGuilDEv/design-system/blob/master/src/pages/get-started/how-to-contribute/markdown/content.md)
- "Code de conduite" page: [content.md](https://github.com/AxaGuilDEv/design-system/blob/master/src/pages/get-started/code-of-conduct/markdown/content.md)

## Developping in this repository

### Getting started

Into a terminal, to start to develop a component you can run

```sh
npm start
```

If it does not automatically open, open a browser and hit [http://localhost:5001](http://localhost:5001). There you go! Ready to dev!

### Architecture this repository

```text
├── gulpfile.babel.js/ : contains gulp script to run & build this project
├── src/
|   ├── assets/ : static assets used in the pages
|   ├── commons/ : pug common templates, shared js files, shared Sass files
|   ├── components/ : pug files for all components + components Sass files
|   ├── data/ : some json with usefull information
|   ├── pages/ : all the pages, that's where you will work most of times
├── package.json : description of this project
└── README.md : all useful information about the design system
```

### Updating the documentation status

After updating this website (usually after adding / improving the documentation of a [react-toolkit](https://github.com/AxaGuilDEv/react-toolkit) component), **please update the component-status [content.md](https://github.com/AxaGuilDEv/design-system/blob/master/src/pages/get-started/component-status/markdown/content.md) file**.

### Testing

At this point, there isn't any unit tests. This site is about documentation, not code.

However, each time you update the documentation, you should test manually that you did not break anything and that your documentation is visible.

#### Browser testing

You can find the list of supported browser in the [List of supported browsers](./README.md#list-of-supported-browsers) section of the README.

If you are developping on a Mac, you will find some Virtual Machines to help you test, on [Microsoft Edge Tools](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/) webiste.

### Commit messages

We are using the [Angular commit message format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format), you are expected to follow it. This is very important because our changlog is generated using commit messages.

Keep in mind, though, that your pull request will be squashed into master, so repository mainteners may use your commit message but are not entitled to use them as is.

## Scripts

| Script name | Description                                                           |
| ----------- | --------------------------------------------------------------------- |
| `start`     | Best script to start with :) It uses gulp                             |
| `build`     | Does what it says, using gulp as well                                 |
| `deploy`    | Used by CI to put this site into production                           |
| `test`      | Dummy script (for now)                                                |
| `lint`      | Launches all linting scription                                        |
| `lint:js`   | Launches JS linters, will fix whatever is possible to fix, for you.   |
| `lint:pug`  | Launches PUG linters, will fix whatever is possible to fix, for you.  |
| `lint:scss` | Launches Sass linters, will fix whatever is possible to fix, for you. |

## Troubleshooting

Nothing here for now... Feel free to add your tips and tricks here.

## Pull Request

Please respect the following [PULL_REQUEST_TEMPLATE.md](./PULL_REQUEST_TEMPLATE.md)

## Issue

Please respect the following [ISSUE_TEMPLATE.md](./ISSUE_TEMPLATE.md)
