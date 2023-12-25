<template>
  <PageBanner />
  <div class="wrap">
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
      <ul class="-mx-5 flex flex-wrap gap-y-20">
        <li class="px-5 sm:w-1/2 xl:w-1/3 2xl:px-10" v-for="list in newListData" :key="list.Id">
          <NuxtLink
            :to="`/news/newsDetail/${list.Id}`"
            class="relative flex flex-col shadow-second hover:shadow-third hover:after:absolute hover:after:left-0 hover:after:top-0 hover:after:h-1 hover:after:w-full hover:after:bg-main-red hover:after:content-['']"
          >
            <img :src="list.ImgLink[0]" alt="" />
            <div class="flex flex-col px-10 pb-10 pt-5">
              <h3 class="mb-5 text-7 font-bold">{{ list.Title }}</h3>
              <p class="mb-16 text-xl">{{ list.Abstract }}</p>
              <span class="text-xl text-main-red">{{ $dayjs(list.Date).format('YYYY/MM/DD') }}</span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface NewListData {
  Id: number
  Title: string
  Abstract: string
  ImgLink: string[]
  Date: string
  Lang: string
}

const newListData = ref<NewListData[]>([])

const data = await useAsyncData(() =>
  $fetch('/api/MsgData/NewsListData', {
    method: 'POST',
    body: {
      Lang: 'tw'
    }
  }).then((res: any) => {
    newListData.value = res.NewListData
  })
)
</script>
