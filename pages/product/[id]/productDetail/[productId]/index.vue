<template>
  <PageBanner />
  <div class="wrap">
    <div class="container">
      <div class="mb-25 flex flex-col items-start justify-between gap-y-5 xs:flex-row xs:items-end">
        <h2 class="titleStyle">PRODUCTS</h2>
        <ul class="flex items-center gap-2 self-end text-xl">
          <li>
            <NuxtLink to="/"><img src="~/assets/img/other/home.svg" alt="home" /></NuxtLink>
          </li>
          <li>/</li>
          <li class="text-main-red">{{ $t('breadCrumb_products') }}</li>
        </ul>
      </div>
      <div class="-mx-3 flex">
        <ul class="w-1/6 px-3">
          <li
            class="triangle2_hover relative border-b border-main-gray hover:border-main-red"
            :class="{ 'triangle2 border-main-red': parseInt(route.params.id as string) === list.LCATNo }"
            v-for="list in categoryList"
            :key="list.LCATNo"
          >
            <NuxtLink class="block p-4 text-2xl font-bold" :to="`/product/${list.LCATNo}`">{{ list.LCATNoName }}</NuxtLink>
          </li>
        </ul>
        <div class="w-5/6 px-3">
          <div v-for="list in productData" :key="list.ProductPidno">
            <div class="mb-20 flex">
              <div class="w-1/2">
                <img :src="list.ProductListImg[0]" alt="" />
              </div>
              <div class="flex w-1/2 flex-col justify-between">
                <h3 class="flex items-center gap-2 text-3xl font-bold">
                  <div class="h-1 w-5 bg-main-red"></div>
                  {{ list.ProductName }}
                </h3>
                <div class="flex gap-2 text-xl">
                  <button class="border border-main-red px-10 py-4 text-main-red" type="button">返回</button>
                  <button class="border border-main-red px-10 py-4 text-main-red" type="button">加入詢價單</button>
                  <button class="border border-main-red px-10 py-4 text-main-red" type="button">送出詢價單</button>
                </div>
              </div>
            </div>
            <ul class="mb-10 flex border-b border-main-gray text-2xl font-bold">
              <li class="border-b-4 px-2 pb-5" :class="info === 1 ? 'border-main-red text-black' : 'border-transparent text-main-gray-4'" @click="toggleInfo(1)">產品規格</li>
              <li class="border-b-4 px-2 pb-5" :class="info === 2 ? 'border-main-red text-black' : 'border-transparent text-main-gray-4'" @click="toggleInfo(2)">產品介紹</li>
            </ul>
            <div v-html="list.Format" v-if="info === 1"></div>
            <div v-html="list.Describe" v-if="info === 2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

const info = ref(1)

const toggleInfo = (index: number) => {
  info.value = index
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

interface ProductData {
  ProductPidno: string
  ProductName: string
  LCATNo: number
  MCATNo: number
  IsHot: boolean
  IsNew: boolean
  Describe: string
  Format: string
  ProductListImg: string[]
}

const productData = ref<ProductData[]>([])

const data2 = await useAsyncData(() =>
  $fetch('/api/ProductData/ProductData', {
    method: 'POST',
    body: {
      Pidno: route.params.productId,
      Lang: 'tw'
    }
  }).then((res: any) => {
    productData.value = res.ProductList
    console.log(res)
  })
)
</script>
