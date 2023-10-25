<template >
  <div class="testimonials-block section-block">
    <div class="container m-auto" >
        <div class="section-header text-center m-auto">
            <h2 class="animate text-over-block">Testimonials</h2>
            <div class="divider-draft m-auto "></div>
        </div>
    <div class="w-full max-w-3xl mx-auto text-center my-[100px]">
      <div class="relative h-32">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-500/25 before:via-indigo-500/5 before:via-25% before:to-indigo-500/0 before:to-75% before:rounded-full before:-z-10">
            <div class="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">

              <template :key="index" v-for="(testimonial, index) in testimonials">
                <TransitionRoot
                  :show="active === index"
                  class="absolute inset-0 h-full -z-10"
                  enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                  enterFrom="opacity-0 -rotate-[60deg]"
                  enterTo="opacity-100 rotate-0"
                  leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                  leaveFrom="opacity-100 rotate-0"
                  leaveTo="opacity-0 rotate-[60deg]"                              
                >
                  <img class="relative top-11 left-1/2 -translate-x-1/2 rounded-full" :src="testimonial.img" width="56" height="56" :alt="testimonial.name" />
                </TransitionRoot>
              </template>

          </div>
        </div>
      </div>
      <div class="mb-9 transition-all duration-150 delay-300 ease-in-out">
        <div class="relative flex flex-col" ref="testimonialsRef">

          <template :key="index" v-for="(testimonial, index) in testimonials">
              <TransitionRoot
                  :show="active === index"
                  enter="transition ease-in-out duration-500 delay-200 order-first"
                  enterFrom="opacity-0 -translate-x-4"
                  enterTo="opacity-100 translate-x-0"
                  leave="transition ease-out duration-300 delay-300 absolute"
                  leaveFrom="opacity-100 translate-x-0"
                  leaveTo="opacity-0 translate-x-4"
                  @before-enter="heightFix()"
              >
                  <div class="text-[22px] leading-[1.6em] text-[#777] font-normal italic font-[serif]  before:content-['\201C'] after:content-['\201D']">{{ testimonial.quote }}</div>

                  <h3 class="uppercase mt-[45px] text-[14px] tracking-[2px] font-bold font-[sans-serif]">{{ testimonial.name }}</h3>
                  <p class="text-[#777]">{{ testimonial.role }}</p>
              </TransitionRoot>          
          </template>

        </div>
      </div>
      <div class="flex flex-wrap justify-center -m-1.5">
        <template :key="index" v-for="(testimonial, index) in testimonials">
          <button
            class="inline-flex justify-center whitespace-nowrap  my-1.5 mx-3 shadow-sm focus-visible:outline-none focus-visible:ring transition-colors duration-150 border border-[#B7A389] h-[15px] w-[15px] rotate-45 border-solid" 
            :class="active === index ? 'bg-[#B7A389]' : 'bg-transparent'"
            @click="active = index; stopAutorotate();"
          ></button>
        </template>
      </div>
    </div>
    </div>
  </div>
</template>
<script setup>
import { TransitionRoot } from '@headlessui/vue'
import { ref, onMounted, onUnmounted } from 'vue'


const testimonialsRef = ref(null)
const active = ref(0)
const autorotate = ref(true)
const autorotateTiming = ref(7000)
let interval

const testimonials = [
  {
    img: 'https://static1.squarespace.com/static/5a7a523b90bccea7812ba94e/t/5f99c2bb95a80d03b4034df7/1603912419031/_Sarah+is+soothing+like+warm+butter+%26+honey%21_+%281%29.png',
    quote: "Ad oportere voluptatibus nec, sea ei civibus praesent. At timeam expetenda inciderint has. Invidunt constituto ne per, paulo omnium quaerendum his eu, cu congue consul cetero. Invidunt constituto ne per, paulo omnium quaerendum his eu, cu congue consul cetero.",
    name: 'Jessie J',
    role: 'Ltd Head of Product'
  },
  {
    img: 'https://t3.ftcdn.net/jpg/03/53/59/46/360_F_353594684_Ca3p9RIc3xgQ1Y6ff7Jk6nVe54v9NbpQ.jpg',
    quote: "Ad oportere voluptatibus nec, sea ei civibus praesent. At timeam expetenda inciderint has. Invidunt constituto ne per, paulo omnium quaerendum his eu, cu congue consul cetero. Invidunt constituto ne per, paulo omnium quaerendum his eu, cu congue consul cetero.",
    name: 'Mark Luk',
    role: 'Spark Founder & CEO'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjIjZTroGa92I75wTzwyLMolMLfyb5WPGn3BKJskKZ6HahZCHMgsvqKacDzQd13kn0KQY&usqp=CAU',
    quote: "Ad oportere voluptatibus nec, sea ei civibus praesent. At timeam expetenda inciderint has. Invidunt constituto ne per, paulo omnium quaerendum his eu, cu congue consul cetero. Invidunt constituto ne per, paulo omnium quaerendum his eu, cu congue consul cetero.",
    name: 'Jeff Kahl',
    role: 'Appy Product Lead'
  }
]

const heightFix = () => {  
  setTimeout(() => {
    if (testimonialsRef.value && testimonialsRef.value.parentElement) testimonialsRef.value.parentElement.style.height = `${testimonialsRef.value.clientHeight}px`
  }, 1)
}

const stopAutorotate = () => {
  autorotate.value = false
  clearInterval(interval)
}

onMounted(() => {      
  if (!autorotate.value) return
  interval = setInterval(() => {
    active.value = active.value + 1 === testimonials.length ? 0 : active.value + 1
  }, autorotateTiming.value)
})

onUnmounted(() => clearInterval(interval))
</script>
<style lang="scss" scoped>
  .testimonials-block{
        padding: 100px 0;

        .section-header{
            margin-bottom: 45px;
            text-align: center;

            h2{
                font-size: 32px;
                letter-spacing: 6px;
                color: #333;
                margin-top: 0;
                margin-bottom: 35px;
                font-weight: 300;
                font-family: Raleway, sans-serif;
            }

            .divider-draft {
                position: relative;
                height: 2px;
                background: #333;
                width: 40px;
                display: block;
                text-align: center;

                &:before{
                    content: ' ';
                    width: 25px;
                    height: 1px;
                    background: #333;
                    position: absolute;
                    left: 7.5px;
                    top: -6px;
                }

                &:after{
                    content: ' ';
                    width: 25px;
                    height: 1px;
                    background: #333;
                    position: absolute;
                    left: 7.5px;
                    bottom: -6px;
                }
            }
        }
    }
</style>