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
        <ul class="-mx-5 flex w-5/6 flex-wrap gap-y-5 px-3">
          <li class="w-1/3 px-5" v-for="list in productList" :key="list.ProductPidno">
            <NuxtLink :to="`/product/${route.params.id}/productDetail/${list.ProductPidno}`">
              <img class="w-full" :src="list.ProductListImg[0]" alt="" />
              <h3
                class="relative pt-2 text-center text-3xl font-bold after:absolute after:left-1/2 after:top-0 after:block after:h-1 after:w-5 after:-translate-x-1/2 after:bg-main-red after:content-['']"
              >
                {{ list.ProductName }}
              </h3>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

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

interface ProductList {
  ProductPidno: string
  ProductName: string
  Sort: number
  ProductListImg: string[]
}

const productList = ref<ProductList[]>([])

const data2 = await useAsyncData(() =>
  $fetch('/api/ProductData/ProductListData', {
    method: 'POST',
    body: {
      LCATNo: route.params.id,
      Lang: 'tw',
      Keyword: ''
    }
  }).then((res: any) => {
    productList.value = res.ProductList.sort((a: ProductList, b: ProductList) => a.Sort - b.Sort)
    console.log(res)
  })
)
</script>
