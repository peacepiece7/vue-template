# webpack 설정 확인하기

```json
{
  "devDependencies": {
    "@babel/core": "^7.13.10",
    "@babel/plugin-transform-runtime": "^7.13.10",
    "@babel/preset-env": "^7.13.10",
    "@vue/compiler-sfc": "^3.0.11",
    "autoprefixer": "^10.2.5",
    "babel-loader": "^8.2.2",
    "copy-webpack-plugin": "^8.0.0",
    "css-loader": "^5.1.3",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^5.3.1",
    "postcss": "^8.2.8",
    "postcss-loader": "^5.2.0",
    "sass": "^1.32.8",
    "sass-loader": "^11.0.1",
    "style-loader": "^2.0.0",
    "vue-loader": "^16.1.2",
    "vue-style-loader": "^4.1.3",
    "webpack": "^5.27.1",
    "webpack-cli": "^4.5.0",
    "webpack-dev-server": "^4.0.0-beta.0"
  },
  "dependencies": {
    "vue": "^3.0.7"
  }
}
```

## rules

vue-style-loader 추가

```json
{
    "test": /\.s?css$/,
    "use": [
        // 순서 중요!
        "vue-style-loader",
        "style-loader",
        "css-loader",
        "postcss-loader",
        "sass-loader"
    ]
}
```

## Plugin

`VueLoaderPlugin` 추가

.vue로 작성된 파일을 js로 변환 시켜 줌

```json
{
    "plugins": [
        new VueLoaderPlugin()
    ]
}
```
