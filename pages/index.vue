<template>
  <PageBanner />
  <div class="wrap">
    <div class="container">
      <div class="mb-40">
        <h3 class="titleStyle mb-12">PRODUCTS</h3>
      </div>
      <div class="mb-40">
        <h3 class="titleStyle mb-12">NEWS</h3>
      </div>
      <div>
        <h3 class="titleStyle mb-12">ABOUT US</h3>
        <div class="bg-home relative flex items-center bg-right bg-no-repeat py-14">
          <div class="w-45% text-xl">
            <h4 class="mb-5 text-2xl font-semibold">峰益工具製刀, 現 展暘精密工具有限公司</h4>
            <p class="mb-5">
              創立於西元1985年，專業生產木工切削刀具，在木工刀具製造業始終秉持以服務客戶為最大宗旨，嚴格的品質控管及不斷的研發與精進，是本公司的經營理念，以求能提供最好的產品予客戶，創造雙贏的局面。
            </p>
            <p class="mb-5">為了更加精進產品的品質，本公司採用各式電腦化的精密製造設備，以及專業的製刀技術，提供客戶良好的客製化服務，不斷的研發與開發新的產品，提升產品對外的競爭力。</p>
            <div class="flex gap-5">
              <img src="../assets/img/other/plus.svg" alt="" />
              <img src="../assets/img/other/plus.svg" alt="" />
              <img src="../assets/img/other/plus.svg" alt="" />
            </div>
          </div>
          <img class="w-45% absolute bottom-0 right-0" src="../assets/img/other/about06.png" alt="" />
        </div>
        <div class="flex items-end justify-between">
          <ul class="flex items-center gap-20">
            <li class="flex items-center gap-5">
              <div class="hexagon">
                <img class="relative z-10" src="~/assets/img/other/about03.svg" alt="" />
              </div>
              <div>
                <h4 class="text-20 font-subTitle font-bold text-main-gray">01</h4>
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
                <h4 class="text-20 font-subTitle font-bold text-main-gray">02</h4>
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
                <h4 class="text-20 font-subTitle font-bold text-main-gray">03</h4>
                <div class="relative flex h-15 w-40 items-center justify-center text-center">
                  <img class="absolute left-0 top-0" src="../assets/img/other/union1.svg" alt="" />
                  <img class="absolute bottom-0 right-0" src="../assets/img/other/union2.svg" alt="" />
                  <p class="text-2xl font-bold">優良服務</p>
                </div>
              </div>
            </li>
          </ul>
          <NuxtLink
            class="relative border border-main-red px-16 py-4 text-xl text-main-red after:absolute after:bottom-0 after:right-0 after:h-0 after:w-0 after:border-8 after:border-main-red after:border-l-transparent after:border-t-transparent"
            to="#"
            >了解更多</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
