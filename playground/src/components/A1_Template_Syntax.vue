<!-- https://ko.vuejs.org/guide/essentials/template-syntax.html 참고 -->
<!-- eslint-disable vue/v-bind-style -->
<template>
  <h1>1_Template_Syntax</h1>
  <section>
    <div>텍스트 보간 법 사용 : {{ rawHtml }}</div>
    <!-- !! XSS 취약점에 주의!! -->
    <div v-html="rawHtml"></div>
  </section>
  <section>
    <!-- * 이중 중괄호와 v-bind -->
    <div>이중 중괄호와 v-bind</div>
    <div>v-bind는 ":"로 축약 가능</div>
    <input :value="foo" />
    <input v-bind:value="foo" />
    <div :id="`div-id-${foo}`"></div>
    <button>{{ foo }}</button>
  </section>
  <section>
    <!-- * boolean -->
    <div>boolean</div>
    <button :disabled="isLoading">
      <!-- ! 표현 식만 가능 즉 return 식별자 뒤에 올 수 있는 표현만 가능 -->
      {{ isLoading ? '로딩 중' : '제출 하기' }}
    </button>
  </section>
  <section>
    <time
      :title="timeTitle"
      :datetime="currentDate">{{
        toTitleDate(currentDate)
      }}</time>
  </section>
  <section>
    <!-- v-if 디렉티브 -->
    <div>v-if 디렉티브</div>
    <!-- v-on은 @로 줄여서 표기할 수 있는데 이는 다음에 다룹니다. 마술이라고 칩시다! -->
    <button
      @click="
        () => {
          this.isSee = true
        }
      ">
      클릭 시 아래 문자가 보입니다.
    </button>
    <div v-if="isSee">
      이제 보이나요?
    </div>
  </section>
  <section>
    <!-- dynamic v-bind -->
    <div>동적으로 속성을 결정할 수 있습니다.</div>
    <a :[dynamicHref]="dynamicUrl">홈으로 이동하기</a>
  </section>
  <section>
    <!-- v-on으로 이벤트 핸들러를 달아봅시다. v-on은 @와 동일한 기능입니다. -->
    <div>v-on으로 이벤트 핸들러를 달아봅시다.</div>
    <!-- eslint-disable-next-line vue/v-on-style -->
    <button v-on:[dynamicClick]="handler">
      클릭해봅시다.
    </button>
    <button @[dynamicClick]="handler">
      위와 동일한 기능입니다.
    </button>
  </section>
  <section>
    <!-- 수식어를 사용해봅시다. -->
    <div>수식어를 사용해봅시다.</div>
    <form @click.prevent="handler">
      <input
        type="submit"
        value="제출하기 버튼, defaultPrevent가 적용 됩니다." />
    </form>
    <form @click="handler">
      <input
        type="submit"
        value="제출하기 버튼 새로고침 됩니다." />
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      rawHtml: '<span style="color:red">This should be red.</span>',
      foo: 'foo',
      isLoading: true,
      timeTitle: '현제 시간을 표시합니다.',
      currentDate: new Date(),
      toTitleDate: (date) => {
        return date.toLocaleString('ko-KR')
      },
      isSee: false,
      dynamicHref: 'href',
      dynamicUrl: 'http://localh-oost:8080',
      dynamicClick: 'click',
      handler: () => {
        alert('클릭했습니다.')
      },
    }
  },
}
</script>

<style scoped>
section {
  margin: 40px;
}
</style>
