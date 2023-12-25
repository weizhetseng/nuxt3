<template>
  <PageBanner />
  <div class="wrap">
    <div class="container">
      <div class="mb-25 flex flex-col items-start justify-between gap-y-5 xs:flex-row xs:items-end">
        <h2 class="titleStyle">CONTACT US</h2>
        <ul class="flex items-center gap-2 self-end text-xl">
          <li>
            <NuxtLink to="/"><img src="~/assets/img/other/home.svg" alt="home" /></NuxtLink>
          </li>
          <li>/</li>
          <li class="text-main-red">{{ $t('breadCrumb_contactus') }}</li>
        </ul>
      </div>
      <div class="mb-20 flex flex-col-reverse gap-10 lg:flex-row">
        <div class="w-full lg:w-1/2 lg:flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1330.633662673817!2d120.61611070938676!3d24.148874843706313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693fdee8332325%3A0x13d07a1e4dc0d707!2zNDA45Y-w5Lit5biC5Y2X5bGv5Y2A5paH5bGx5p2x5be3MTLlvIQy6Jmf!5e0!3m2!1szh-TW!2stw!4v1691464672096!5m2!1szh-TW!2stw"
            style="border: 0"
            allowfullscreen="false"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="h-[300px] w-full lg:h-full"
          ></iframe>
        </div>
        <div class="w-full lg:w-1/2 lg:flex-1">
          <h3 class="mb-10"><img src="../assets/img/logo/logo.svg" alt="" /></h3>
          <div class="mb-15 flex flex-col gap-x-10 gap-y-5 xs:flex-row lg:flex-col xl:flex-row">
            <ul class="flex-shrink-0">
              <li class="mb-5 flex items-center gap-1">
                <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-main-red"><img src="../assets/img/other/phone.svg" alt="" /></div>
                <p>{{ companyInfo.Number }}</p>
              </li>
              <li class="flex items-center gap-1">
                <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-main-red"><img src="../assets/img/other/fax.svg" alt="" /></div>
                <p>{{ companyInfo.Fax }}</p>
              </li>
            </ul>
            <ul>
              <li class="mb-5 flex items-center gap-1">
                <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-main-red"><img src="../assets/img/other/mail.svg" alt="" /></div>
                <p class="break-all">{{ companyInfo.Email }}</p>
              </li>
              <li class="flex items-center gap-1">
                <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-main-red"><img src="../assets/img/other/map.svg" alt="" /></div>
                <p>{{ companyInfo.Address }}</p>
              </li>
            </ul>
          </div>
          <div class="-mx-2.5 flex flex-wrap items-center justify-center gap-y-5 text-sm text-white">
            <button class="w-1/2 px-2.5 xs:flex-1" type="button">
              <div class="flex items-center justify-center gap-1 rounded-lg bg-line p-2">
                <img src="../assets/img/other/line02.svg" alt="" />
                <p>hongyihe</p>
              </div>
            </button>
            <button class="w-1/2 px-2.5 xs:flex-1" type="button">
              <div class="flex items-center justify-center gap-1 rounded-lg bg-wechat p-2">
                <img src="../assets/img/other/wechat02.svg" alt="" />
                <p>hongyihe123</p>
              </div>
            </button>
            <button class="w-1/2 px-2.5 xs:flex-1" type="button">
              <div class="flex items-center justify-center gap-1 rounded-lg bg-twitter p-2">
                <img src="../assets/img/other/skype02.svg" alt="" />
                <p>hongyih8</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <p class="mb-10">標註 [ <span class="text-red-600">*</span> ] 為必填項目，告訴我們您對本站的任何產品或其他事情的意見或需求，我們很歡迎您的來信。</p>
      <form action="" class="-mx-5 flex flex-wrap gap-y-10 text-xl" @submit.prevent="sendForm()">
        <div class="flex w-full flex-col gap-2 px-5">
          <label for=""><span class="text-red-600">*</span>問題分類</label>
          <select class="w-full appearance-none bg-main-gray-3 bg-select bg-right-4 bg-no-repeat p-4" name="" id="" v-model="contactUsForm.CategoryId">
            <option value="">--請選擇分類--</option>
            <option :value="list.Id" v-for="list in contactUsList" :key="list.Id">{{ list.Title }}</option>
          </select>
        </div>
        <div class="flex w-full flex-col gap-2 px-5 md:w-1/2">
          <label for=""><span class="text-red-600">*</span>國家</label>
          <select class="w-full appearance-none bg-main-gray-3 bg-select bg-right-4 bg-no-repeat p-4" name="" id="" v-model="contactUsForm.Country">
            <option value="">--請選擇國家--</option>
            <option :value="list.Id" v-for="list in countryList" :key="list.Id">{{ list.Title }}</option>
          </select>
        </div>
        <div class="flex w-full flex-col gap-2 px-5 md:w-1/2">
          <label for="">公司</label>
          <input class="w-full bg-main-gray-3 p-4" type="text" name="" id="" v-model="contactUsForm.Company" />
        </div>
        <div class="flex w-full flex-col gap-2 px-5 md:w-1/2">
          <label for=""><span class="text-red-600">*</span>姓名</label>
          <input class="w-full bg-main-gray-3 p-4" type="text" name="" id="" v-model="contactUsForm.Name" />
        </div>
        <div class="flex w-full flex-col gap-2 px-5 md:w-1/2">
          <label for="">電話</label>
          <input class="w-full bg-main-gray-3 p-4" type="text" name="" id="" v-model="contactUsForm.Phone" />
        </div>
        <div class="flex w-full flex-col gap-2 px-5">
          <label for=""><span class="text-red-600">*</span>電子信箱</label>
          <input class="w-full bg-main-gray-3 p-4" type="text" name="" id="" v-model="contactUsForm.Email" />
        </div>
        <div class="flex w-full flex-col gap-2 px-5">
          <label for="">地址</label>
          <input class="w-full bg-main-gray-3 p-4" type="text" name="" id="" v-model="contactUsForm.Address" />
        </div>
        <div class="flex w-full flex-col gap-2 px-5">
          <label for=""><span class="text-red-600">*</span>您的意見或問題</label>
          <input class="w-full bg-main-gray-3 p-4" type="text" name="" id="" v-model="contactUsForm.Comments" />
        </div>
        <div class="flex w-full flex-col gap-2 px-5">
          <label for=""><span class="text-red-600">*</span>驗證碼</label>
          <div class="flex flex-wrap items-center justify-end gap-10 xs:flex-nowrap">
            <input class="w-full bg-main-gray-3 p-4" type="text" name="" id="" />
            <canvas ref="canvasRef" class="border" width="130" height="40"></canvas>
            <button type="button">
              <img src="../assets/img/other/code02.png" alt="" />
            </button>
          </div>
        </div>
        <div class="flex w-full flex-wrap items-center justify-center gap-10">
          <button class="relative border border-main-gray-4 bg-main-gray-4 px-16 py-4 text-xl text-white" type="reset">重填</button>
          <button
            class="relative border border-main-red px-16 py-4 text-xl text-main-red after:absolute after:bottom-0 after:right-0 after:h-0 after:w-0 after:border-8 after:border-main-red after:border-l-transparent after:border-t-transparent"
            type="submit"
          >
            送出
          </button>
        </div>
      </form>
    </div>
  </div>
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

interface ContactUsList {
  Id: number
  Title: string
  Lang: string
}

const contactUsList = ref<ContactUsList[]>([])

const data2 = await useAsyncData(() =>
  $fetch('/api/ContactUs/ContantUsList', {
    method: 'POST',
    body: {
      Lang: 'tw'
    }
  }).then((res: any) => {
    contactUsList.value = res.ContactUsCATDataLists
  })
)

interface CountryList {
  Id: string
  Title: string
}

const countryList = ref<CountryList[]>([])

const data3 = await useAsyncData(() =>
  $fetch('/api/ContactUs/CountryDataLists', {
    method: 'POST',
    body: {
      Lang: 'tw'
    }
  }).then((res: any) => {
    countryList.value = res.CountryDatas
  })
)

interface ContactUsForm {
  CategoryId: number
  Name: string
  Address: string
  Company: string
  Country: string
  Email: string
  Phone: string
  Comments: string
}

const contactUsForm = ref<ContactUsForm>({
  CategoryId: 0,
  Name: '',
  Address: '',
  Company: '',
  Country: '',
  Email: '',
  Phone: '',
  Comments: ''
})

const sendForm = () => {
  const data4 = $fetch('/api/ContactUs/ContactUsApi', {
    method: 'POST',
    body: contactUsForm.value
  }).then((res: any) => {
    console.log(res)
  })
}
</script>
