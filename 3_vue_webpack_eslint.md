# Eslint 설치

```json
{
  "eslint": "^7.22.0",
  "eslint-plugin-vue": "^7.8.0",
  "babel-eslint": "^10.1.0"
}
```

## Eslint 내용

[eslint plugin vue](https://eslint.vuejs.org/)를 참고하여 설정합니다.

```js
module.exports = {
  // 사전에 정의된 전역 변수 설정
  env: {
    browser: true,
    node: true,
  },
  // 사용 가능한 규칙 세트
  extends: [
    // 'plugin:vue/vue3-essential', // Lv1
    'plugin:vue/vue3-strongly-recommended', // Lv2
    // 'plugin:vue/vue3-recommended', // Lv3
    'eslint:recommended',
  ],
  // 구문 분석할 패키지 설정(Babel, ES6^ => ES5)
  parserOptions: {
    parser: 'babel-eslint',
  },
  // 추가적인 코드 규칙을 설정
  rules: {
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
  },
}
```

## Reactive, Directive

### reactive

data 안에 있는 값이 변경되면 화면이 자동으로 갱신되는 것을 reactive라고 한다.

### directive

v-로 시작하는 것들을 directive라고 한다.

# Error

https://velog.io/@onehousesilver/vue%EC%97%90%EC%84%9C-export-createElementBlock-%EB%9C%B0%EB%95%8C

## LifeCycle
