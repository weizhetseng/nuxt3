<template>
  <PageBanner />
  <div class="wrap">
    <div class="container">
      <div class="mb-25 flex flex-col items-start justify-between gap-y-5 xs:flex-row xs:items-end">
        <h2 class="titleStyle">E-CATALOG</h2>
        <ul class="flex items-center gap-2 self-end text-xl">
          <li>
            <NuxtLink to="/"><img src="~/assets/img/other/home.svg" alt="home" /></NuxtLink>
          </li>
          <li>/</li>
          <li class="text-main-red">{{ $t('breadCrumb_ecatalog') }}</li>
        </ul>
      </div>
      <ul class="-mx-5 flex flex-wrap gap-y-20">
        <li class="w-full px-10 xs:w-1/2 lg:w-1/3" v-for="list in eCatalogData" :key="list.Id">
          <a :href="list.ECatalogDataLink[0]" :download="list.ECatalogDataLink[0]" target="_blank">
            <img class="w-full" :src="list.ImgLink[0]" :alt="list.Title" />
            <div class="triangle relative m-auto w-11/12 border-4 border-t-0 border-main-gray p-5 text-center hover:border-main-red">
              <h3 class="relative font-title text-3xl font-black tracking-widest after:absolute after:-top-2 after:left-1/2 after:h-1 after:w-5 after:-translate-x-1/2 after:bg-main-red">
                {{ list.Title }}
              </h3>
              <p class="text-xl text-main-gray">Download</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface ECatalogDatas {
  Id: number
  Title: string
  ImgLink: string[]
  ECatalogDataLink: string[]
}

const eCatalogData = ref<ECatalogDatas[]>([])

const data = await useAsyncData(() =>
  $fetch('/api/Download/ECatalogDataAPI', {
    method: 'POST',
    body: {
      Lang: 'tw'
    }
  }).then((res: any) => {
    eCatalogData.value = res.ECatalogDatas
  })
)
</script>
