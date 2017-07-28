# gulp4 + babel

采用postcss输出css

[![ixu.css Logo](https://janecc.cdn.ixu.me/wp-content/uploads/2017/06/ixu-logo-128x128.png)](https://ixu.me/) [![Build Status](https://travis-ci.org/JaneCC/ixu.css.svg?branch=master)](https://travis-ci.org/JaneCC/ixu.css)

## License

[MIT](https://github.com/JaneCC/ixu.css/blob/master/LICENSE)

# [ixu.css](https://ixu.me/)

> 轻量灵活的移动端 CSS 框架。

## 介绍

- 压缩后只有 4.6kb，比 Skeleton、Pure.css、Bootstrap 等所有 CSS 库都小
- 大量使用 Flexbox ，非常灵活，官方网站只有不到 10 行的自定义样式
- 专注于移动端，桌面端端相当于展示的还是移动端的页面，不过可以在左侧或右侧加上侧边栏

## 开始使用

你可以在[这个页面](https://github.com/JaneCC/ixu.css/releases)下载 Mobi.css，然后使用压缩后的版本：`dist/ixu.min.css`。

或者使用 [cdnjs](https://cdnjs.com/libraries/ixu.css):

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ixu.css/1.1.0/ixu.min.css" />
```

或者使用 npm 安装：

```shell
npm install --save ixu.css
```

如果你用的是 Sass，那么也可以在自己的项目中构建 ixu.css：

```scss
@import 'ixu.css/src/ixu';
```

注意你需要将 `node_modules` 添加到 Sass 的 [load_paths](http://stackoverflow.com/questions/6502313/sass-import-a-file-from-a-different-directory) 中。

## 支持的浏览器

### iOS

- [x] Last 5 iOS versions

### 安卓

- [x] Last 5 Android versions
- [x] Last 5 ChromeAndroid versions
- [x] Last 5 UCAndroid versions (*)
- [x] Last 5 FirefoxAndroid versions (*)
- [x] Last 5 OperaMobile versions (*)
- [x] Last 5 OperaMini versions (*)
- [x] Last 5 Samsung versions (*)

### 其他浏览器

- [x] Last 3 Chrome versions
- [x] Last 3 Firefox versions
- [x] Last 3 Safari versions
- [x] Last 3 Edge versions
- [x] Last 5 ExplorerMobile versions (*)

### 备注

- ixu.css 使用 [cssnext](https://github.com/postcss/postcss-cssnext) 来保证能兼容主流的移动端浏览器
- 浏览器查询语句来自于 [Browserslist](https://github.com/ai/browserslist)
- 标注为 (*) 的浏览器可能没有很好的测试，但是应该能够正常工作

## 参与贡献

- 感谢 [xueliang huang]() 调试和修复 macOS 上的问题

### 如何开始

```shell
npm install
npm start
```

打开 <http://localhost:8000/>

### 测试

```shell
npm test
```

## 谁在用 ixu.css?

- [马蹄香](www.matixiang.com) 马蹄香绘画
