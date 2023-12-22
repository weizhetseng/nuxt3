<template>
  <header class="shadow-main xl:px-10">
    <div class="relative m-auto flex max-w-[1920px] items-center justify-between px-5 py-4">
      <h1 class="w-50">
        <NuxtLink to="/"><img src="../assets/img/logo/logo.svg" alt="" /></NuxtLink>
      </h1>
      <nav class="hidden pr-12% lg:block xl:pr-15% 2xl:pr-18%">
        <ul class="flex items-center text-xl font-bold 2xl:text-2xl">
          <li>
            <NuxtLink to="#">{{ $t('company') }}</NuxtLink>
          </li>
          <li class="px-10 xl:px-15 2xl:px-20">
            <NuxtLink to="#">{{ $t('products') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/news">{{ $t('news') }}</NuxtLink>
          </li>
          <li class="px-10 xl:px-15 2xl:px-20">
            <NuxtLink to="/e-catalog">{{ $t('e-catalog') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contactus">{{ $t('contacts') }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <ul class="absolute right-5 top-0 hidden h-35 w-20 flex-col items-center justify-center gap-5 bg-main-red text-xl text-white lg:flex xl:right-15 xl:h-40 xl:w-25">
        <li>
          <button type="button" @click="changeLocale('tw')">繁體<br />中文</button>
        </li>
        <li><button type="button" @click="changeLocale('en')">EN</button></li>
      </ul>
      <div class="flex flex-col gap-1 lg:hidden" @click="toggleNav()">
        <div class="h-1 w-8 rounded-full bg-black duration-500" :class="{ 'translate-y-2 rotate-45': isNav }"></div>
        <div class="h-1 w-8 rounded-full bg-black duration-500" :class="{ 'translate-x-4 opacity-0': isNav }"></div>
        <div class="h-1 w-8 rounded-full bg-black duration-500" :class="{ '-translate-y-2 -rotate-45': isNav }"></div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const { setLocale } = useI18n()

const changeLocale = (locale: string) => {
  setLocale(locale)
}
const isNav = ref(false)
const toggleNav = () => {
  isNav.value = !isNav.value
}
</script>
