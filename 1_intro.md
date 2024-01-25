https://www.inflearn.com/pages/dc-vue3-202311

# Vue 3에서 달라진 점

## 1. 가상 DOM 최적화

기존 : HTML 기반 템플릿 제공 -> DOM 트리 변환 과정 -> 실제 DOM 업데이트

[렌더 파이프 라인](https://ko.vuejs.org/guide/extras/rendering-mechanism#render-pipeline)

렌더링 트리의 탐색을 최적화 함

## 2. 내부로직 TS로 변환

## 3. 개선된 API, 새로 추가된 문법

컴포지션, 텔리포트(리액트의 portal) 등 별도 문법 추가 지원

## 4. 번틀 크기 감소

## 5. 개발 편의성 증가

vue3와 vite가 함께 개발됨, 한국어 지원되는 공식 문서

# 특징 소개

CRA이랑 비슷하게 내부적으로 내부적으로 webpack애 내장되어 있음

`createApp(App).mount('#app')`으로 HTML에 있는 #app에 마운트를 해줌

## Vuter Extension

Vetur 익스텐션으로 vue 코드 하이라이팅

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
