<template>
  <div class="mb-25">
    <img class="w-full" src="~/assets/img/banner/banner04.jpg" alt="banner" />
  </div>
  <div class="container">
    <div class="mb-25 flex items-end justify-between">
      <h2 class="titleStyle">NEWS</h2>
      <ul class="flex items-center gap-2 text-xl">
        <li>
          <NuxtLink to="/"><img src="~/assets/img/other/home.svg" alt="home" /></NuxtLink>
        </li>
        <li>/</li>
        <li class="text-main-red">{{ $t('breadCrumb_news') }}</li>
      </ul>
    </div>
    <div class="px-20 pb-10 pt-5 shadow-second" v-for="list in newData" :key="list.Id">
      <div class="mb-5 flex">
        <p class="flex items-center justify-center border-b-2 border-main-red pb-5 text-xl text-main-red">{{ $dayjs(list.PostSDate).format('YYYY/MM/DD') }}</p>
        <h3 class="flex flex-1 items-center border-b-2 border-main-gray px-5 pb-5 text-8 font-bold">{{ list.Title }}</h3>
      </div>
      <div class="mb-10 border-b-2 border-main-gray pb-10 text-xl" v-html="list.Describe"></div>
      <div class="flex items-center justify-between">
        <button type="button"><img src="~/assets/img/other/prev.svg" alt="" /></button>
        <button
          class="relative border border-main-red px-16 py-4 text-xl text-main-red after:absolute after:bottom-0 after:right-0 after:h-0 after:w-0 after:border-8 after:border-main-red after:border-l-transparent after:border-t-transparent"
          type="button"
          @click="router.back()"
        >
          返回
        </button>
        <button type="button"><img src="~/assets/img/other/next.svg" alt="" /></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const router = useRouter()

interface NewData {
  Id: 0
  Title: string
  Describe: string
  ImgLink: string[]
  PostSDate: string
  PostEDate: string
  Lang: string
}

const newData = ref<NewData[]>([])

const data = await useAsyncData(() =>
  $fetch('/api/MsgData/NewsDataResult', {
    method: 'POST',
    body: {
      Id: route.params.id,
      Lang: 'tw'
    }
  }).then((res: any) => {
    newData.value = res.NewListData
  })
)
</script>



