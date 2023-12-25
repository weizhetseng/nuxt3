<template>
  <header>
    <div class="relative mx-auto flex max-w-[1920px] items-center justify-between px-5 py-5 lg:py-0 2xl:px-10">
      <h1>
        <NuxtLink to="/">
          <img class="w-45 lg:h-20 lg:w-50" src="~/assets/img/logo/logo.svg" alt="logo" />
        </NuxtLink>
      </h1>
      <nav class="hidden pr-12% lg:block 2xl:pr-18%">
        <ul class="flex text-xl xl:text-2xl">
          <li>
            <NuxtLink class="flex h-25 items-center justify-center font-bold" to="/about">{{ $t('company') }}</NuxtLink>
          </li>
          <li class="group/list">
            <div class="flex h-25 cursor-pointer items-center justify-center px-10 font-bold xl:px-15 2xl:px-20">{{ $t('products') }}</div>
            <ul class="absolute left-0 top-full z-10 hidden w-full flex-wrap bg-bg-white group-hover/list:flex">
              <li class="w-1/4" v-for="list in categoryList" :key="list.LCATNo">
                <NuxtLink
                  class="group/item relative flex items-center justify-center gap-5 border border-main-gray-5 p-7 after:absolute after:bottom-0 after:right-0 after:block after:h-0 after:w-0 after:border-4 after:border-main-gray-5 after:border-l-transparent after:border-t-transparent after:content-[''] hover:bg-main-gray-6"
                  :to="`/product/${list.LCATNo}`"
                >
                  <p>{{ list.LCATNoName }}</p>
                  <img class="hidden group-hover/item:flex" src="../assets/img/other/arrowR.svg" alt="" />
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li>
            <NuxtLink class="flex h-25 items-center justify-center font-bold" to="/news">{{ $t('news') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink class="flex h-25 items-center justify-center px-10 font-bold xl:px-15 2xl:px-20" to="/e-catalog">{{ $t('e-catalog') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink class="flex h-25 items-center justify-center font-bold" to="/contactus">{{ $t('contacts') }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <ul class="absolute right-5 top-0 hidden h-40 w-25 flex-col items-center justify-center gap-5 bg-main-red text-2xl text-white lg:flex 2xl:right-10">
        <li @click="setLocale('tw')">繁體<br />中文</li>
        <li @click="setLocale('en')">EN</li>
      </ul>
      <div class="flex cursor-pointer flex-col gap-1 lg:hidden" @click="toggleNav()">
        <div class="h-1 w-8 rounded-full bg-black duration-500" :class="{ 'translate-y-2 rotate-45': isNav }"></div>
        <div class="h-1 w-8 rounded-full bg-black duration-500" :class="{ 'translate-x-5 opacity-0': isNav }"></div>
        <div class="h-1 w-8 rounded-full bg-black duration-500" :class="{ '-translate-y-2 -rotate-45': isNav }"></div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const { setLocale } = useI18n()

const isNav = ref(false)
const toggleNav = () => {
  isNav.value = !isNav.value
}

interface ListData {
  LCATNo: number
  LCATNoName: string
  LCategoryImg: string[]
}

const categoryList = ref<ListData[]>([])

const data = await useAsyncData(() =>
  $fetch('/api/ProductData/CategoryListData', {
    method: 'POST',
    body: {
      Lang: 'tw'
    }
  }).then((res: any) => {
    categoryList.value = res.ListData
  })
)
</script>
