<template>
    <section id='portfolio' class='portfolio-section section' >
		
        <CloseBtn @click="$router.push('/')"/>


        <div class='portfolio-block section-block' >
            
            <div class='container m-auto' >
            
                <div class='mx-[-15px]' >
                    <div class='col-md-6 col-md-offset-3' >
                        
                        <div class='section-header text-center' >
                        
                            <h2 class='animate text-over-block' >Portfolio</h2>
                            
                            <!--divider-->
                            <div class='divider-draft center' ></div>
                            <!--/divider-->
                            
                            <p>
                                Check out my works. Lorem ipsum dolor sit amet is simply a dummy text. Lorem ipsum dolor sit amet.
                            </p>
                        
                        </div>
                        
                    </div>
                </div>
                
                <div id='portfolio-filters' >
                    <ul>
                        <li @click="filterActive('all')">
                            <a href='#' :class="{active: activeItem === 'all'}" data-group='all'>All</a>
                        </li>
                        <li @click="filterActive('web')">
                            <a href='#' :class="{active: activeItem === 'web'}" data-group='web'>Web</a>
                        </li>
                        <li @click="filterActive('tech')">
                            <a href='#' :class="{active: activeItem === 'tech'}" data-group='tech'>Tech</a>
                        </li>
                        <li @click="filterActive('photography')">
                            <a href='#' :class="{active: activeItem === 'photography'}" data-group='photography'>Photography</a>
                        </li>
                    </ul>
                </div>
                
                <div id='portfolio-grid' class='portfolio-items grid grid-cols-3 max-[992px]:grid-cols-2 max-[992px]:mx-[20px] max-[768px]:grid-cols-1 max-[768px]:mx-[20px]' >
                    
                    <div class='item col-span-1' v-for="({id, img, slide, title}) in filterProjects" :key="id">
                        <div class='inner' >
                            
                            <img alt='symp' :src="img" >
                            
                            <div class='caption' >
                                
                                <div class='caption-inner' >
                                
                                    <h4>{{ title }}</h4>
                                    
                                    <ul class='links' >
                                        
                                        <li>
                                            <a @click="routePush(id)" class="cursor-pointer">
                                                <i class="fa-solid fa-plus"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a @click.prevent="getModalData(slide)" href='../assets/img/portfolio/1.jpg' class='image-link' >
                                                <i  class="fa-solid fa-magnifying-glass"></i>
                                            </a>
                                        </li>
                                        
                                    </ul>
                                
                                </div>
                                
                                
                            </div>
                            
                        </div>
                    </div>
                </div>

                <n-modal v-model:show="showModal" class="max-w-[1000px] max-[1200px]:max-w-[800px] max-[1000px]:max-w-[600px] max-[800px]:max-w-[500px] w-full max-h-[600px] h-full bg-[#fff] text-red-400">
                    <div class=" bg-[#fff]">
                        <i v-if="showModal" @click="showModal = false" class="fa-solid fa-x cursor-pointer absolute right-[-20px] text-[20px] top-[-20px] z-[200000] text-[#745d5d]" ></i>
                        <swiper-container class="mySwiper" navigation="true" pagination="false" keyboard="true" mousewheel="true"
                            css-mode="true">
                            <swiper-slide class=" object-cover" v-for="(el, index) in ModalData" :key="index">
                                <img class=" object-cover" :src="el" alt="">
                            </swiper-slide>
                            
                        </swiper-container>
                    </div>
                </n-modal>
            </div>
            
        </div>
        
        <Footer />
        
    </section>
</template>

<script setup>
import Swiper from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

import { computed, onMounted, ref } from 'vue';
import CloseBtn from './CloseBtn.vue';
import Footer from './Footer.vue';
import axios from 'axios';
import { useRouter } from 'vue-router';


var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
const activeItem = ref('all')
const ModalData = ref([])
const showModal = ref(false)
const filterActive = (type) => {
    activeItem.value = type 
}
const route = useRouter()


const routePush = (id) => {
    route.push(`portfolio/${id}`)
}
const getModalData = (data) => {
    ModalData.value = data
    showModal.value = true
}

const projects = ref([])

onMounted(async() => {
    const res = await axios.get('http://localhost:3000/portfolio')
    projects.value = res.data
})



const filterProjects = computed(() => {
    switch(activeItem.value){
        case 'all':
            return projects.value
        case 'web':
            return projects.value.filter(el => el.web);
        case 'tech':
            return projects.value.filter(el => el.tech);
        case 'photography':
            return projects.value.filter(el => el.photography);
    }
})

</script>

<style lang="scss" scoped>
swiper-container {
    width: 100%;
    height: 100%;
}

swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.section{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: solid 4px #BBB;
    padding-top: 100px;
    transition: opacity .4s 1.2s ease;
    background: #FFF;
    overflow-y: auto;
    .portfolio-block{
        padding-bottom: 100px;
        overflow: hidden;

        .container{
            position: relative;

            &:before{
                display: table;
                content: " ";
            }

            .section-header{
                margin-bottom: 45px;

                h2{
                    font-size: 32px;
                    letter-spacing: 6px;
                    color: #333;
                    margin-top: 0;
                    margin-bottom: 35px;
                    font-weight: 300;
                    font-family: Raleway, sans-serif;
                }

                .divider-draft{
                    position: relative;
                    height: 2px;
                    background: #333;
                    width: 40px;
                    display: block;
                    margin: auto;

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

                p{
                    margin-top: 30px;
                    line-height: 1.7em;
                    color: #8A8A8A;
                    font-size: 16px;
                }
            }

            #portfolio-filters{
                text-align: center;
                margin-bottom: 45px;

                ul{
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    font-size: 0;
                    font-family: Open Sans, sans-serif;

                    li{
                        display: inline-block;
                        *display: inline;
                        *zoom: 1;
                        font-size: 14px;
                        padding: 0 26px;
                        position: relative;

                        a{
                            color: #999;
                            text-decoration: none;
                            background-color: transparent;

                            &.active{
                                color: #333;
                                text-decoration: line-through;
                            }
                        }

                        &::after{
                            content: ' ';
                            position: absolute;
                            right: -9px;
                            top: 50%;
                            margin-top: -3px;
                            height: 6px;
                            width: 6px;
                            border: solid 1px #E5E5E5;
                            transform: rotate(45deg);
                        }
                        &:last-child::after{
                            border: none;
                        }
                    }
                }
            }

            .portfolio-items {
                position: relative;
                overflow: hidden;
                // height: 759px;
                height: auto;
                transition: height 250ms ease-out 0s;
                font-family: Open Sans, sans-serif;

                .item {
                    top: 0px;
                    left: 0px;
                    transition: transform 250ms ease-out 0s, opacity 250ms ease-out 0s;
                    // height: 300px;
                    height: auto;
                    
                    .inner {
                        position: relative;
                        
                        &:hover{
                            .caption{
                                opacity: 1;
                                visibility: visible;


                                h4{
                                    transform: translateY(25px);
                                }

                                li{
                                    transform: translateY(25px);
                                }
                            }
                        }

                        img{
                            width: 100%;
                            vertical-align: middle;
                        }

                        .caption {
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            background: rgba(51,51,51,.8);
                            color: #FFF;
                            text-align: center;
                            z-index: 10;
                            opacity: 0;
                            visibility: hidden;
                            -webkit-transition: all .3s ease;
                            -moz-transition: all .3s ease;
                            transition: all .3s ease;

                            .caption-inner {
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                -webkit-transform: translate(-50%, -50%);
                                -moz-transform: translate(-50%, -50%);
                                -ms-transform: translate(-50%, -50%);
                                -o-transform: translate(-50%, -50%);
                                transform: translate(-50%, -50%);
                                width: 75%;
                                


                                h4{
                                    font-size: 22px;
                                    margin: 0;
                                    margin-bottom: 30px;
                                    -webkit-transition: all .3s .1s ease;
                                    -moz-transition: all .3s .1s ease;
                                    transition: all .7s  ease;
                                    font-weight: bold;
                                    font-family: Raleway, sans-serif;  

                                }

                                .links{
                                    list-style: none;
                                    color: #FFF;
                                    margin-top: 0;
                                    margin-bottom: 10px;

                                    li {
                                        &:nth-of-type(2){
                                            transition-delay: .3s;
                                        }
                                        
                                        display: inline-block;
                                        *zoom: 1;
                                        margin: 0 11px;
                                        -webkit-transition: all .7s .2s ease;
                                        -moz-transition: all .7s .2s ease;
                                        transition: all .7s .2s ease;


                                        a{
                                            display: block;
                                            height: 30px;
                                            width: 30px;
                                            line-height: 30px;
                                            font-size: 0;
                                            border: solid 1px #FFF;
                                            color: #FFF;
                                            -webkit-transform: rotate(45deg);
                                            -moz-transform: rotate(45deg);
                                            -ms-transform: rotate(45deg);
                                            -o-transform: rotate(45deg);
                                            transform: rotate(45deg);
                                            text-decoration: none;
                                            background: transparent;

                                            i {

                                                vertical-align: middle;
                                                -webkit-transform: rotate(-45deg);
                                                -moz-transform: rotate(-45deg);
                                                -ms-transform: rotate(-45deg);
                                                -o-transform: rotate(-45deg);
                                                transform: rotate(-45deg);


                                                &:before{
                                                    font-size: 16px;
                                                    vertical-align: middle;
                                                    line-height: 1em;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                // .filtered {
                //     position: absolute;
                //     top: 0px;
                //     left: 0px;
                //     visibility: visible;
                //     transition: transform 250ms ease-out 0s, opacity 250ms ease-out 0s;
                // }
            }
        }
    }
}
</style>