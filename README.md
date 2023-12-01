<p align="center">
<a href=https://github.com/guillaumedebas/Portfolio target="_blank">
<img src='/placeholder.jpg' width="100%" alt="Banner" />
</a>
</p>



<p align="center">
<img src="https://img.shields.io/github/languages/code-size/guillaumedebas/Portfolio" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/last-commit/guillaumedebas/Portfolio" alt="GitHub last commit" />
<img src="https://img.shields.io/github/commit-activity/m/guillaumedebas/Portfolio" alt="GitHub commit activity month" />
<img src="https://img.shields.io/github/license/guillaumedebas/Portfolio" alt="GitHub license" />
</p>

## 📌 Overview

Portfolio project uses astrojs/react, types/react, types/react-dom, astro, react, react-dom, and sass.

## 🔍 Table of Contents

* [📁 Project Structure](#project-structure)

* [📝 Project Summary](#project-summary)

* [💻 Stack](#stack)

* [🚀 Run Locally](#run-locally)

* [🙌 Contributors](#contributors)

* [☁️ Deploy](#deploy)

* [📄 License](#license)

## 📁 Project Structure

```bash
├── .gitignore
├── .vscode
│   ├── extensions.json
│   └── launch.json
├── README.md
├── astro.config.mjs
├── package-lock.json
├── package.json
├── public
│   ├── favicon.svg
│   └── projects
│       ├── kasa
│       │   ├── kasa-01.webp
│       │   ├── kasa-02.webp
│       │   ├── kasa-03.webp
│       │   └── kasa-cover.webp
│       ├── mvg
│       │   ├── mvg-01.webp
│       │   ├── mvg-02.webp
│       │   ├── mvg-03.webp
│       │   └── mvg-cover.webp
│       └── nina
│           ├── nina-01.webp
│           ├── nina-02.webp
│           ├── nina-03.webp
│           └── nina-cover.webp
└── src
    ├── assets
    │   ├── icons
    │   │   ├── close.svg
    │   │   ├── gallery-next.svg
    │   │   ├── hamburger.svg
    │   │   └── mail.svg
    │   ├── logos
    │   │   ├── expressjs_logo.webp
    │   │   ├── github-logo.svg
    │   │   ├── html_css_logo.webp
    │   │   ├── javascript_logo.svg
    │   │   ├── linkedin-logo.svg
    │   │   ├── nodejs_logo.svg
    │   │   ├── react_logo.svg
    │   │   └── sass_logo.svg
    │   ├── pdf
    │   │   └── guillaume_debas_cv.pdf
    │   └── photos
    │       └── photo-guillaume-debas.webp
    ├── base
    │   ├── index.scss
    │   ├── parallax-star-background.scss
    │   └── reset.scss
    ├── components
    │   ├── BannerGallery
    │   │   ├── BannerGallery.jsx
    │   │   └── BannerGallery.scss
    │   ├── LegalInformation
    │   │   ├── LegalInformation.jsx
    │   │   └── LegalInformation.scss
    │   ├── Modal
    │   │   ├── Modal.jsx
    │   │   └── Modal.scss
    │   ├── NavigationMenu
    │   │   ├── NavigationMenu.jsx
    │   │   └── NavigationMenu.scss
    │   ├── Notification
    │   │   ├── Notification.jsx
    │   │   └── Notification.scss
    │   ├── Photo
    │   │   ├── Photo.jsx
    │   │   └── Photo.scss
    │   ├── ProjectItem
    │   │   ├── ProjectItem.jsx
    │   │   └── ProjectItem.scss
    │   ├── ProjectList
    │   │   ├── ProjectList.jsx
    │   │   └── ProjectList.scss
    │   ├── Social
    │   │   ├── Social.jsx
    │   │   └── Social.scss
    │   └── TagList
    │       ├── TagList.jsx
    │       └── TagList.scss
    ├── datas
    │   └── projects.json
    ├── env.d.ts
    ├── modalContent
    │   ├── LegalInformationContent
    │   │   ├── LegalInformationContenrt.jsx
    │   │   └── LegalInformationContent.scss
    │   └── ProjectContent
    │       ├── ProjectContent.jsx
    │       └── ProjectContent.scss
    ├── pages
    │   └── index.astro
    ├── section
    │   ├── About
    │   │   ├── About.jsx
    │   │   └── About.scss
    │   ├── Contact
    │   │   ├── Contact.jsx
    │   │   └── Contact.scss
    │   ├── Footer
    │   │   ├── Footer.jsx
    │   │   └── Footer.scss
    │   ├── Header
    │   │   ├── Header.jsx
    │   │   └── Header.scss
    │   ├── Hero
    │   │   ├── Hero.jsx
    │   │   └── Hero.scss
    │   ├── Project
    │   │   ├── Project.jsx
    │   │   └── Project.scss
    │   └── Technology
    │       ├── Technology.jsx
    │       └── Technology.scss
    └── utils
        ├── _mixins.scss
        └── _variables.scss
```

## 📝 Project Summary

- [**src**](src): Main source directory containing all the JavaScript code for the project.
- [**public**](public): Directory for static files that will be served to the client.
- [**src/components**](src/components): Contains reusable UI components used throughout the project.
- [**src/pages**](src/pages): Contains the different pages of the application.
- [**src/assets**](src/assets): Directory for project assets such as icons, logos, PDFs, and photos.
- [**src/section/Header**](src/section/Header): Header section component responsible for displaying the website header.
- [**src/section/Footer**](src/section/Footer): Footer section component responsible for displaying the website footer.
- [**src/section/Hero**](src/section/Hero): Hero section component responsible for the main hero section of the website.
- [**src/section/Project**](src/section/Project): Project section component responsible for displaying individual project details.
- [**src/utils**](src/utils): Contains utility functions used throughout the project.

## 💻 Stack

- [react](https://reactjs.org/): JavaScript library for building user interfaces.
- [react-dom](https://reactjs.org/docs/react-dom.html): Provides DOM-specific methods for React.
- [sass](https://sass-lang.com/): CSS extension language that allows for more dynamic styling.
- [astro](https://astro.build/): Static site builder that allows mixing of different frontend frameworks.
- [astrojs/react](https://www.npmjs.com/package/astrojs/react): Astro plugin for React support.


## 🚀 Run Locally
1.Clone the Portfolio repository:
```sh
git clone https://github.com/guillaumedebas/Portfolio
```
2.Install the dependencies with one of the package managers listed below:
```bash
pnpm install
bun install
npm install
yarn install
```
3.Start the development mode:
```bash
pnpm dev
bun dev
npm run dev
yarn dev
```

## 🙌 Contributors
<a href="https://github.com/guillaumedebas/Portfolio/graphs/contributors">
<img src="https://contrib.rocks/image?repo=guillaumedebas/Portfolio" />
</a>

## ☁️ Deploy

[Portfolio - Guillaume Debas]((https://guillaume-debas.com/))

## 📄 License

MIT License

Copyright (c) [2023] [Guillaume Debas]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


