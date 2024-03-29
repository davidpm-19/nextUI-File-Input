# nextUI-File-Input
File Input Component made following some design patterns of NextUI

![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 📄 About this Component

Welcome to this repo, File Input is a highly customizable and easy-to-use React component designed to integrate file input functionality within the NextUI framework. As NextUI currently lacks its own native file input component, NextUI File Input steps in to fill this gap, providing developers with an intuitive and stylish file upload option that blends perfectly with the rest of their NextUI-based UI.

## 💻 Features

> [!IMPORTANT]
> Still going to be improved and more features will soon be developed.

- **Customizable Appearance:** As a tailwind styled button all the elements in the component are fully customizable, including the text, the dropdown and style of borders, colors...
* **Multiple File Selection:** FileInput offers multiple file selection, depending on it the style will change; currently minimalistic modal with a table inside
+ **Integration with NextUI:** FileInput has been built to match the default style of NextUI Input component and variants will be implemented in next versions
- **Simple File Validation:** In the current version the frontend validations only checks for user defined file types and avoids any other kind of file to be selected
- **Delete Individual files:** When Selecting multiple Items you can delete individually each item within the modal or directly if only one is selected
- **Dark / Light mode:** Easily customizable for light-dark mode theme toogles
- **Responsive:** Made to work fine in every device bigger than Iphone 5

## 🐛👨‍💻 Bugs or next features

> [!WARNING]
> All of the Bugs and features in this list are already on fixing or development process, feel free to comment any bug if not on this list or contribute with your own fix or feature development.

- ~~**🐛 Buttton [Show Files]:** Unexpected behaviour in show files button in which it is shown even with single file selection~~ Fixed
- ~~**🐛 Responsiveness:** Responsiveness is half implemented but needs to be completed for small screens and adapt text behaviour~~ Fixed
- **👨‍💻 Ultra-Responsiveness:** Will try to extend responsiveness for dual screen devices like z-flip or z-fold
- **👨‍💻 NextUI Variants:** Further versions will imitate tailwind interactive element style variants such as flat, bordered or faded 

## 🖥️ Run locally: 

Clone this repository, using [git](https://git-scm.com/) or [github desktop](https://desktop.github.com/):
```
  git clone https://github.com/davidpm-19/nextUI-File-Input.git
```
```
  cd nextUI-File-Input-main
```

Install dependences:

```
  npm i 
```

Run the app:

```
  npm run dev
```
