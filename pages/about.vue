<template>
  <PageBanner />
  <div class="wrap">
    <div class="container">
      <div class="mb-25 flex flex-col items-start justify-between gap-y-5 xs:flex-row xs:items-end">
        <h2 class="titleStyle">ABOUT US</h2>
        <ul class="flex items-center gap-2 self-end text-xl">
          <li>
            <NuxtLink to="/"><img src="~/assets/img/other/home.svg" alt="home" /></NuxtLink>
          </li>
          <li>/</li>
          <li class="text-main-red">{{ $t('breadCrumb_about') }}</li>
        </ul>
      </div>

      <div class="flex">
        <div class="w-1/2">
          <div class="mb-10">
            <p class="text-10 text-main-red-2 font-subTitle font-bold tracking-wide">SINCE</p>
            <div class="flex items-center">
              <CountUp class="text-main-red-2 font-subTitle text-8xl tracking-widest" :end-val="1985" :options="{ duration: 0.75, enableScrollSpy: true, useGrouping: false }" />
              <p class="text-7 font-bold">
                峰益工具製刀，<br />
                現 展暘精密工具有限公司
              </p>
            </div>
          </div>
          <p class="text-xl">
            創立於西元1985年，專業生產木工切削刀具，在木工刀具製造業始終秉持以服務客戶為最大宗旨，嚴格的品質控管及不斷的研發與精進，是本公司的經營理念，以求能提供最好的產品予客戶，創造雙贏的局面。
          </p>
        </div>
        <div class="relative w-1/2">
          <div class="flex items-center gap-2">
            <div class="animate-fade-in animation-delay-main border-main-red-2 h-0 w-0 border-[12px] border-b-transparent border-r-transparent border-t-transparent"></div>
            <div class="animate-fade-in animation-delay-second border-main-red-2 h-0 w-0 border-[12px] border-b-transparent border-r-transparent border-t-transparent"></div>
            <div class="animate-fade-in animation-delay-third border-main-red-2 h-0 w-0 border-[12px] border-b-transparent border-r-transparent border-t-transparent"></div>
          </div>
          <img src="../assets/img/other/about01.png" alt="" />
          <p class="bg-main-red-2 absolute right-0 top-1/2 px-5 py-4 text-xl text-white">客製刀具</p>
        </div>
      </div>
      <div class="bg-about relative bg-no-repeat px-20 pb-20 pt-10">
        <img class="absolute bottom-0 left-0 w-1/2" src="~/assets/img/other/about062.png" alt="" />
        <div class="ml-auto w-7/12">
          <h3 class="text-main-red-2 mb-5 text-7 font-semibold">核心優勢</h3>
          <p class="text-xl">為了更加精進產品的品質，本公司採用各式電腦化的精密製造設備，以及專業的製刀技術，提供客戶良好的客製化服務，不斷的研發與開發新的產品，提升產品對外的競爭力。</p>
        </div>
        <ul class="absolute bottom-0 right-0 flex translate-y-1/2 items-center gap-20">
          <li class="flex items-center gap-5">
            <div class="hexagon">
              <img class="relative z-10" src="~/assets/img/other/about03.svg" alt="" />
            </div>
            <div>
              <h4 class="text-20 font-subTitle font-bold text-white">01</h4>
              <div class="relative flex h-15 w-40 items-center justify-center text-center">
                <img class="absolute left-0 top-0" src="../assets/img/other/union1.svg" alt="" />
                <img class="absolute bottom-0 right-0" src="../assets/img/other/union2.svg" alt="" />
                <p class="text-2xl font-bold">專業技術</p>
              </div>
            </div>
          </li>
          <li class="flex items-center gap-5">
            <div class="hexagon">
              <img class="relative z-10" src="~/assets/img/other/about04.svg" alt="" />
            </div>
            <div>
              <h4 class="text-20 font-subTitle font-bold text-white">02</h4>
              <div class="relative flex h-15 w-40 items-center justify-center text-center">
                <img class="absolute left-0 top-0" src="../assets/img/other/union1.svg" alt="" />
                <img class="absolute bottom-0 right-0" src="../assets/img/other/union2.svg" alt="" />
                <p class="text-2xl font-bold">最高品質</p>
              </div>
            </div>
          </li>
          <li class="flex items-center gap-5">
            <div class="hexagon">
              <img class="relative z-10" src="~/assets/img/other/about05.svg" alt="" />
            </div>
            <div>
              <h4 class="text-20 font-subTitle font-bold text-white">03</h4>
              <div class="relative flex h-15 w-40 items-center justify-center text-center">
                <img class="absolute left-0 top-0" src="../assets/img/other/union1.svg" alt="" />
                <img class="absolute bottom-0 right-0" src="../assets/img/other/union2.svg" alt="" />
                <p class="text-2xl font-bold">優良服務</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CountUp from 'vue-countup-v3'
</script>
