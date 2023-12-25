<template>
  <footer class="bg-black">
    <div class="container">
      <div class="flex flex-col items-center justify-between gap-10 py-10 2xl:flex-row 2xl:items-start">
        <NuxtLink to="/"><img src="../assets/img/logo/logo2.svg" alt="" /></NuxtLink>
        <div class="flex flex-col gap-15 xl:flex-row">
          <ul class="flex flex-wrap justify-center gap-3 xs:justify-between xl:flex-col">
            <li class="flex items-center gap-2 text-lg text-main-gray-2">
              <img src="../assets/img/other/line.svg" alt="line" />
              <p>hongyihe</p>
            </li>
            <li class="flex items-center gap-2 text-lg text-main-gray-2">
              <img src="../assets/img/other/skype.svg" alt="skype" />
              <p>hongyih8</p>
            </li>
            <li class="flex items-center gap-2 text-lg text-main-gray-2">
              <img src="../assets/img/other/wechat.svg" alt="wechat" />
              <p>hongyihe123</p>
            </li>
          </ul>
          <div class="text-xl text-white">
            <ul class="mb-10 flex flex-wrap items-center justify-center gap-2 xs:justify-between">
              <li>
                <NuxtLink to="/about">關於峰益</NuxtLink>
              </li>
              <li>
                <NuxtLink to="">產品介紹</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/news">最新消息</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/e-catalog">電子型錄</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contactus">聯絡我們</NuxtLink>
              </li>
            </ul>
            <div class="flex flex-col gap-10 lg:flex-row">
              <ul>
                <li>
                  <a class="mb-5 flex items-center gap-2" :href="`tel:${companyInfo.Number}`">
                    <img src="../assets/img/other/phone.svg" alt="" />
                    <p>{{ companyInfo.Number }}</p>
                  </a>
                </li>
                <li class="flex items-center gap-2">
                  <img src="../assets/img/other/fax.svg" alt="" />
                  <p>{{ companyInfo.Fax }}</p>
                </li>
              </ul>
              <ul>
                <li>
                  <a class="mb-5 flex items-center gap-2" :href="`mailto:${companyInfo.Email}`">
                    <img src="../assets/img/other/mail.svg" alt="" />
                    <p class="break-all">{{ companyInfo.Email }}</p>
                  </a>
                </li>
                <li class="flex items-center gap-2">
                  <img src="../assets/img/other/map.svg" alt="" />
                  <p>{{ companyInfo.Address }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <p class="border-t border-main-gray py-3 text-lg text-white">Copyright © 峰益工具製刀廠</p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
interface CompanyInfo {
  Number: string
  Email: string
  Fax: string
  Address: string
  Contacts: string
  Lang: string
  MainId: number
}

const companyInfo = ref<CompanyInfo>({
  Number: '',
  Email: '',
  Fax: '',
  Address: '',
  Contacts: '',
  Lang: '',
  MainId: 0
})

const data = await useAsyncData(() =>
  $fetch('/api/CompanyProfile/CompanyProfileAPI', {
    method: 'POST',
    body: {
      Lang: 'tw'
    }
  }).then((res: any) => {
    companyInfo.value = res.CompanyProfileDatas[0]
  })
)
</script>
