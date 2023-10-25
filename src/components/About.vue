<template >
    <CloseBtn @click="$router.push('/')"/>
    <div class="about-section section">
        
        
        <div class="basic-info section-block">
            <div class="container px-[15px] m-auto ">
                <div class="section-header text-center mb-[80px]">
                    <h2>Basic Info About Me</h2>

                    <div class="divider-draft grid content-center"></div>
                </div>

                <div class="mx-[-15px] basic-info-content grid grid-cols-2 gap-[10px] max-[768px]:m-auto">
                    <div class="col-start-4 " data-aos="fade-right">
                        <div class="about-person-image text-center m-auto">
                            <img class="m-auto" src="../assets/img/man2.png" alt="">
                        </div>
                    </div>

                    <div data-aos="fade-left" class="col-end-8 about-info max-[850px]:px-[20px] max-[700px]:px-0">
                        <p class="leading-[1.8rem] mt-[-0.4em]">
						    Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an, cum dicta iriure at. Ubique maluisset vel te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cum tation munere noluisse. Enim torquatos ne pri, eum mollis salutandi corrumpit et, fugit apeirian duo ad. Ad oportere voluptatibus nec, sea ei civibus praesent. At timeam expetenda inciderint has. Invidunt constituto ne per, paulo omnium quaerendum his eu, cu congue consul cetero cum. Solet honestatis et eum. Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an, cum dicta iriure at. Ubique maluisset vel te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cum tation munere noluisse. Enim torquatos ne pri, eum mollis salutandi corrumpit et, fugit apeirian duo ad.
						</p>


                        <div class="clearfix"></div>

                        <ul class='info-list' >		
                            <li>
                                <div class='inner' >
                                    <h4>Name</h4>
                                    <p>Aslbek</p>
                                </div>
                            </li>
                            <li>
                                <div class='inner' >
                                    <h4>Age</h4>
                                    <p>20 Years</p>
                                </div>
                            </li>
                            <li>
                                <div class='inner' >
                                    <h4>Website</h4>
                                    <p>example.com</p>
                                </div>
                            </li>
                            <li>
                                <div class='inner' >
                                    <h4>Hometown</h4>
                                    <p>Bukhara</p>
                                </div>
                            </li>
                        </ul>

                        <a href="#" class="symp-btn mr-[2px]">Hire Me For Work</a>
                        <a href="#" class="symp-btn link-btn"><i class="fa-solid fa-download mr-2"></i>Download Resume</a>
                    </div>
                </div>
            </div>
        </div>


        <div class="about-icons section-block">
            <div class="container m-auto">
                <div class="winning-cards  mx-[-15px] grid grid-cols-4 max-[992px]:grid-cols-1 max-[992px]:px-[30px]">
                    <div class="col-span-1 winning-card" v-for="({id, icon, title, info}) in cards" :key="id">
                        <div class="service">
                            <div class="icon">
                                <i :class="icon"></i>
                            </div>
                            <div class="content">
                                <h4>{{ title }}</h4>
                                <p>{{ info }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="funfacts-block section-block">
            <div class="container m-auto">
                <div class="mx-[-15px] grid grid-cols-4 max-[992px]:grid-cols-2 max-[768px]:grid-cols-1">
                    <div class="col-span-1 funfact">
                        <div class="content">
                            <h4>243</h4>
                            <p>Awards Won</p>
                        </div>
                    </div>
                    <div class="col-span-1 funfact">
                        <div class="content">
                            <h4>845</h4>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                    <div class="col-span-1 funfact">
                        <div class="content">
                            <h4>938</h4>
                            <p>Projects done</p>
                        </div>
                    </div>
                    <div class="col-span-1 funfact">
                        <div class="content">
                            <h4>342</h4>
                            <p>Games Played</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Testimonial />
        <Footer />
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import axios from 'axios';
import Testimonial from "./Testimonial.vue";
import Footer from "./Footer.vue";
import CloseBtn from "./CloseBtn.vue";

const cards = ref([])




onMounted(async () => {
    const res = await axios.get('http://localhost:3000/about-cards')
    cards.value = res.data
})



</script>

<style lang="scss" scoped>
.section-block{
    overflow: hidden;
    position: relative;
}
.section{
    transition: opacity .4s 1.2s ease;
    z-index: 99;
    opacity: 1;
    visibility: visible;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: solid 4px #BBB;
    padding-top: 100px;
    z-index: -9;
    background: #FFF;
    overflow-y: auto;
    transition: all .3s ease;
    display: block;
}
.about-section {
    padding-top: 0;

    .basic-info{
        padding-top: 100px;
        padding-bottom: 100px;
        position: relative;
        border-bottom: solid 1px #F0F0F0;
        overflow: hidden;

        .container{
            position: relative;

            &:before{
                display: table;
                content: " ";
            }
            .section-header {
                h2{
                    font-size: 32px;
                    letter-spacing: 6px;
                    color: #333;
                    margin-top: 0;
                    margin-bottom: 35px;
                    font-weight: 300;
                    line-height: 1.1;
                    font-family: Raleway, sans-serif;
                }

                .divider-draft{
                    position: relative;
                    height: 2px;
                    background: #333;
                    width: 40px;
                    display: block;
                    align-items: center;
                    margin-top: 15px;
                    margin-bottom: 15px;
                    margin: auto;

                    &:before{
                        top: -6px;
                        content: ' ';
                        width: 25px;
                        height: 1px;
                        background: #333;
                        position: absolute;
                        left: 0;
                        margin-right: 7.5px;
                        margin-left: 7.5px;
                    }

                    &:after{
                        bottom: -6px;
                        content: ' ';
                        width: 25px;
                        height: 1px;
                        background: #333;
                        position: absolute;
                        left: 0;
                        margin-right: 7.5px;
                        margin-left: 7.5px;
                    }
                }
            }


            .basic-info-content{
                &:before{
                    display: table;
                    content: ' '
                }

                .about-info{
                    p{
                        font-family: Open Sans, sans-serif; 
                    }
                    
                    .info-list{
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        position: relative;
                        z-index: 10;
                        margin-top: 20px;
                        margin-bottom: 60px;

                        &:before{
                            content: ' ';
                            display: table;
                        }

                        li{
                            margin-bottom: 20px;
                            float: left;
                            width: 25%;

                            *{
                                line-height: 1em;
                                margin: 0;
                            }

                            .inner{
                                padding: 15px 0;

                                h4{
                                    font-size: 13px;
                                    letter-spacing: 4px;
                                    margin-right: 16px;
                                    margin-bottom: 8px;
                                    display: block;
                                    color: #333;
                                    font-weight: bold;
                                    font-family: Raleway, sans-serif;
                                    margin-top: 10px;
                                    line-height: 1.1;
                                }
                                p{
                                    font-size: 16px;
                                    color: #777;
                                    display: block;
                                }
                            }
                        }
                    }

                    .symp-btn{
                        display: inline-block;
                        *display: inline;
                        *zoom: 1;
                        padding: 12px 22px;
                        background: #333;
                        color: #FFF;
                        -webkit-transition: all .3s ease;
                        -moz-transition: all .3s ease;
                        transition: all .3s ease;
                        border: none;
                        text-decoration: none !important;

                        &.link-btn{
                            background: transparent;
                            color: #999;
                        }
                    }
                }
            }
        }

    }
    .about-icons{
        padding-top: 110px;
        padding-bottom: 0px;

        .container{
            &:before{
                display: table;
                content: " ";
            }

            .winning-cards{
                // &:before{
                //     display: table;
                //     content: " ";
                // }
                .winning-card:hover{
                    .service{
                        .icon{
                            top: -20px !important;
                        }   
                    }
                }
                .winning-card{

                    // &:hover{
                    //     .icon{
                    //         margin-bottom: 20px !important;
                        
                    //     }
                    // }
                    .service{
                        position: relative;
                        text-align: center;
                        margin-bottom: 120px;

                        .icon{
                            background: #B7A389;
                            -webkit-transform: rotate(45deg);
                            -moz-transform: rotate(45deg);
                            -ms-transform: rotate(45deg);
                            -o-transform: rotate(45deg);
                            transform: rotate(45deg);
                            height: 90px;
                            width: 90px;
                            line-height: 90px;
                            vertical-align: middle;
                            text-align: center;
                            margin: auto;
                            -webkit-transition: all .3s ease-in-out;
                            -moz-transition: all .3s ease-in-out;
                            transition: all .3s ease-in-out;
                            font-size: 0;
                            background: #B7A389;
                            color: #FFF;
                            position: relative;
                            top: 0;

                            i{
                                display: inline-block;
                                line-height: inherit;
                                height: inherit;
                                width: inherit;
                                -webkit-transform: rotate(-45deg);
                                -moz-transform: rotate(-45deg);
                                -ms-transform: rotate(-45deg);
                                -o-transform: rotate(-45deg);
                                transform: rotate(-45deg);
                                
                                &:before{
                                    line-height: 1em;
                                    vertical-align: middle;
                                    font-size: 45px;
                                    // content: "\f452";
                                }
                            
                            }

                        }

                        .content{
                            h4{
                                font-size: 20px;
                                margin-top: 50px;
                                margin-bottom: 8px;
                                letter-spacing: 2px;
                                font-weight: bold;
                                font-family: Raleway, sans-serif;
                                line-height: 1.1;
                            }
                            p{
                                line-height: 1.6em;
                                color: #777;
                            }
                        }
                    }
                }
            }
        }
    }
    .funfacts-block{
        padding-top: 60px;
        padding-bottom: 20px;
        background-image: url('../assets/img/bg-funfacts.jpg');
        // background-image: url('https://akm-img-a-in.tosshub.com/businesstoday/images/story/201501/larry-page-660_010615015441.jpg?size=1200:675');
        background-size: cover;
        background-attachment: fixed;
        background-position: 0% 35.45px;

        .funfact{
            position: relative;
            text-align: center;
            margin-bottom: 40px;

            .content{
                h4{
                    margin: 0;
                    color: #FFF;
                    font-size: 55px;
                    margin-bottom: 5px;
                }
                p{
                    color: #FFF;
                    letter-spacing: 2px;
                    margin-bottom: 0;
                    font-size: 13px;
                    opacity: .8;
                }
            }

            &:after{
                content: ' ';
                position: absolute;
                height: 16px;
                width: 16px;
                right: -10px;
                top: 50%;
                margin-top: -10px;
                border: solid 1px #FFF;
                -webkit-transform: rotate(45deg);
                -moz-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                -o-transform: rotate(45deg);
                transform: rotate(45deg);
                opacity: .4;
                filter: Alpha(opacity=40);
            }
            &:last-child:after{
                content: '';
                border: none;
            }
        }
    }
}


@media (max-width: 768px) {
    .funfact:after {
        content: '' !important;
        border: none !important;
    }

    .about-person-image {
        img{
            width: 400px !important;
            height: 400px !important;
        }
    }
}

@media (max-width: 992px){
    .info-list li {
        width: 50% !important;
    }
}

@media (max-width: 991px){
    .basic-info-content{
        display: block;


        .about-person-img{
            margin-bottom: 40px;
            text-align: center;

            img{
                width: 590px !important;
                height: 819px !important;
                margin: auto !important;
            }
        }

        .about-info {
            margin-top: 30px;
        }

    }

    .funfact:nth-child(2):after {
        content: '' !important;
        border: none !important;
    }
}


</style>