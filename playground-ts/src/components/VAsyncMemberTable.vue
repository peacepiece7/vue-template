<script setup lang="ts">
import { defineComponent } from "vue"

function getTestData() {
  return new Promise((resolve) =>
    resolve({
      data: [
        {
          name: "Bill",
          email: "billcollins323@hotmail.com",
          profilePic:
            "https://xf-assets.pokecharms.com/data/attachment-files/2015/10/236934_Squritle_Picture.png",
        },
        {
          name: "Jihyeon",
          email: "jihyeonjeong@gmail.com",
          profilePic:
            "https://xf-assets.pokecharms.com/data/attachment-files/2015/10/236933_Charmander_Picture.png",
        },
        {
          name: "pacho",
          email: "josemunez@naver.com",
          profilePic:
            "https://xf-assets.pokecharms.com/data/attachment-files/2015/10/236932_Bulbasaur_Picture.png",
        },
      ],
    })
  )
}

const getMembersAsAdmin = async function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      getTestData()
        .then((res: any) => {
          resolve(res)
        })
        .catch((e) => {
          reject(new Error(e))
        })
    }, 1000)
  })
}

const data = (await getMembersAsAdmin()) as any
const members = data.data

defineComponent({
  name: "AsyncAdminMemberTable",
})
</script>

<template>
  <div class="w-full flex flex-col gap-y-4">
    <div
      v-for="({ profilePic, name, email }, i) in members"
      :key="i"
      class="flex flex-col gap-y-2 items-center"
    >
      <img alt="randompokemonpic" :src="profilePic" class="w-32 h-32" />
      <span>{{ name }}</span>
      <span>{{ email }}</span>
    </div>
  </div>
</template>
