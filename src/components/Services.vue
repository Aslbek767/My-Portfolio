<template>
    <div class="services-section section">
        <CloseBtn @click="$router.push('/')"/>

        <div class="container m-auto">
            <div class="mx-[-15px]">
                <div class="text-center">
                    <div class="section-header main-title text-center">
                        <h2 class="animate text-over-block">My Services</h2>
                        <div class="divider-draft center"></div>

                        <p>I provide <b>high quality</b> services. My services that I provide are listed below. Hope you will like them. Lorem ipsum dolor.</p>
                        
                    
                    </div>
                </div>
            </div>
        </div>

        <div class="services-icons section-block">
            <div class="container m-auto">
                <div class="winning-cards  mx-[-15px] grid grid-cols-4 max-[992px]:grid-cols-1">
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


        <div class="pricing-block section-block">
            <div class="container m-auto" >
                <div class="section-header text-center">
                    <h2 class="text-over-block">Pricing</h2>

                    <div class="divider-draft m-auto"></div>

                    <p>How much I charge</p>
                </div>


                <div class="grid grid-cols-3 max-[992px]:grid-cols-1 max-[992px]:gap-[15px]">
                    <div class="col-span-1 text-center">
                        <div class="pricing-table">
                            <div class="header">
                                <h4>Personal</h4>

                                <div class="price">
                                    <span class="currency">$</span>
                                    <span class="amount">29</span>
                                    <span class="period">/mo</span>
                                </div>
                            </div>

                            <ul class="table-items">
                                <li>Logo Design</li>
                                <li>PSD to HTML</li>
                                <li>Fixed to Responsive</li>
                                <li>App Development</li>
                                <li>Photography</li>
                            </ul>

                            <a href="#" class="table-btn">Choose This</a>
                        </div>
                    </div>
                    <div class="col-span-1 text-center">
                        <div class="pricing-table">
                            <div class="header">
                                <h4>Creative</h4>

                                <div class="price">
                                    <span class="currency">$</span>
                                    <span class="amount">39</span>
                                    <span class="period">/mo</span>
                                </div>
                            </div>

                            <ul class="table-items">
                                <li>Logo Design</li>
                                <li>PSD to HTML</li>
                                <li>Fixed to Responsive</li>
                                <li>App Development</li>
                                <li>Photography</li>
                            </ul>

                            <a href="#" class="table-btn">Choose This</a>
                        </div>
                    </div>
                    <div class="col-span-1 text-center">
                        <div class="pricing-table">
                            <div class="header">
                                <h4>Ultimate</h4>

                                <div class="price">
                                    <span class="currency">$</span>
                                    <span class="amount">42</span>
                                    <span class="period">/mo</span>
                                </div>
                            </div>

                            <ul class="table-items">
                                <li>Logo Design</li>
                                <li>PSD to HTML</li>
                                <li>Fixed to Responsive</li>
                                <li>App Development</li>
                                <li>Photography</li>
                            </ul>

                            <a href="#" class="table-btn">Choose This</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="process-block bg-lightgray section-block">
            <div class="container m-auto">
                <div class="section-header text-center">
                    <h2>Work Progress</h2>

                    <div class="divider-draft m-auto"></div>
                </div>

                <div class="process-cards grid grid-cols-4 max-[992px]:grid-cols-1">
                    <div class="col-span-1 process-card">
                        <div class="process">
                            <div class="number">
                                <span>1</span>
                            </div>
                            <div class="content">
                                <h4>Design</h4>
                                <p>Lorem ipsum dolor sit amet is simply a dummy text used by typeset industries. Lorem ipsum dolor.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1 process-card">
                        <div class="process">
                            <div class="number">
                                <span>2</span>
                            </div>
                            <div class="content">
                                <h4>Design</h4>
                                <p>Lorem ipsum dolor sit amet is simply a dummy text used by typeset industries. Lorem ipsum dolor.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1 process-card">
                        <div class="process">
                            <div class="number">
                                <span>3</span>
                            </div>
                            <div class="content">
                                <h4>Design</h4>
                                <p>Lorem ipsum dolor sit amet is simply a dummy text used by typeset industries. Lorem ipsum dolor.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1 process-card">
                        <div class="process">
                            <div class="number">
                                <span>4</span>
                            </div>
                            <div class="content">
                                <h4>Design</h4>
                                <p>Lorem ipsum dolor sit amet is simply a dummy text used by typeset industries. Lorem ipsum dolor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <Testimonial />
        </div>
        <Footer />
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import Testimonial from './Testimonial.vue';
import Footer from './Footer.vue';
import CloseBtn from './CloseBtn.vue';



const cards = ref([])

onMounted(async () => {
    const res = await axios.get('http://localhost:3000/services-cards')
    cards.value = res.data
})

</script>
<style lang="scss" scoped>
.section{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: solid 4px #BBB;
    padding-top: 100px;
    // z-index: -9;
    background: #FFF;
    overflow-y: auto;
    -webkit-transition: opacity .4s 1.2s ease;
    -moz-transition: opacity .4s 1.2s ease;
    transition: opacity .4s 1.2s ease;
    z-index: 99;
    opacity: 1;
    visibility: visible;
    transition: all .3s ease;   

    .container{
        &:before{
            display: table;
            content: " ";
        }



        .main-title{
            margin-bottom: 80px;


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
                // margin: 15px 0;


                &:before{
                    content: ' ';
                    width: 25px;
                    height: 1px;
                    background: #333;
                    position: absolute;
                    left: 7.5px;
                    top: -6px;
                }

                &::after{
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
                margin-top: 30px !important;
                line-height: 1.7em;
                color: #8A8A8A;
                font-size: 16px;
                // margin: 0 0 10px;
                font-family: Open Sans, sans-serif;
                width: 100%;
                max-width: 555px;
                text-align: center;
                margin: auto;
            }
        }
    }

    .services-icons{
        padding-top: 110px;
        padding-bottom: 0px;
        border-bottom: solid 1px #F0F0F0;

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


    .pricing-block {
        padding: 120px 0;


        .container{

            &:before{
                display: table;
                content: " ";
            }


            .section-header{
                margin-bottom: 90px;

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

                    &:before {
                        content: ' ';
                        width: 25px;
                        height: 1px;
                        background: #333;
                        position: absolute;
                        left: 7.5px;
                        top: -6px;
                    }
                    &:after {
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

            .pricing-table {
                max-width: 300px;
                margin: auto;
                background: #F4F4F4;
                padding: 35px 0;
                -webkit-transition: all .3s ease;
                -moz-transition: all .3s ease;
                transition: all .3s ease;

                .header{
                    h4{
                        font-size: 18px;
                        text-transform: uppercase;
                        margin: 0;
                        font-weight: bold;
                        font-family: Raleway, sans-serif;
                    }

                    .price{
                        margin-bottom: 30px;
                        margin-top: 30px;

                        span{
                            display: inline-block;
                            *display: inline;
                            *zoom: 1;
                            line-height: 1em;

                            &.currency{
                                vertical-align: top;
                                margin-top: 12px;
                            }

                            &.amount{
                                font-weight: bold;
                                font-size: 80px;
                            }

                            &.period{
                                text-transform: uppercase;
                                letter-spacing: 2px;
                                font-size: 12px;
                            }
                        }
                    }
                }

                .table-items{
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    margin-top: 25px;
                    margin-bottom: 30px;
                    font-family: Open Sans, sans-serif;

                    li{
                        padding: 10px 0 !important;
                    }
                }

                .table-btn{
                    padding: 11px 22px;
                    background: #333;
                    color: #FFF;
                    text-decoration: none;
                    display: inline-block;
                    *display: inline;
                    *zoom: 1;
                    -webkit-transition: all .3s ease;
                    -moz-transition: all .3s ease;
                    transition: all .3s ease;

                    &:hover{
                        background: #B7A389;
                    }
                }
            }

        }
    }

    .process-block{
        padding: 100px 0; 
        background: #F5F5F5;

        .section-header{ 
            margin-bottom: 80px;

            h2{
                font-size: 32px;
                letter-spacing: 6px;
                color: #333;
                margin-top: 0;
                margin-bottom: 35px;
                font-family: Raleway, sans-serif;
                font-weight: 300;
            }

            .divider-draft{
                position: relative;
                height: 2px;
                background: #333;
                width: 40px;
                display: block;
                margin: auto;

                &::before{
                    content: ' ';
                    width: 25px;
                    height: 1px;
                    background: #333;
                    position: absolute;
                    left: 7.5px;
                    top: -6px;
                }

                &:after{
                    bottom: -6px;
                    content: ' ';
                    width: 25px;
                    height: 1px;
                    background: #333;
                    position: absolute;
                    left: 7.5px;
                }
                
            }
        }

        .process-cards{
            .process-card{

                &:hover{
                    .process{
                        .number{
                            background: #B7A389;
                            color: #fff;
                        }
                    }
                }
                .process{
                    position: relative;

                    .number{
                        border-color: #B7A389;
                        color: #B7A389;
                        font-size: 16px;
                        font-weight: bold;
                        display: inline-block;
                        *display: inline;
                        *zoom: 1;
                        line-height: 1em;
                        margin-bottom: 15px;
                        position: relative;
                        -webkit-transform: rotate(45deg);
                        -moz-transform: rotate(45deg);
                        -ms-transform: rotate(45deg);
                        -o-transform: rotate(45deg);
                        transform: rotate(45deg);
                        border: solid 1px #B7A389;
                        -webkit-transition: all .3s ease-in-out;
                        -moz-transition: all .3s ease-in-out;
                        transition: all .3s ease-in-out;
                        color: #B7A389;

                        span{
                            transform: rotate(-45deg);
                            display: block;
                            height: 28px;
                            width: 28px;
                            line-height: 28px;
                            text-align: center;
                            position: relative;
                            line-height: 28px;
                            text-align: center;


                            &:before{
                                content: ' ';
                                border-top: solid 8px transparent;
                                border-bottom: solid 8px transparent;
                                border-left: solid 8px #B7A389;
                                position: absolute;
                                top: 50%;
                                margin-top: -8px;
                                right: -43px;
                            }

                            &:after{
                                content: ' ';
                                position: absolute;
                                height: 2px;
                                background: #B7A389;
                                width: 30px;
                                right: -35px;
                                top: 50%;
                                background: #B7A389;
                                margin-top: -1px;
                            }
                        }
                    }

                    .content{
                        h4{
                            font-size: 20px;
                            letter-spacing: 2px;
                            margin-bottom: 15px;
                            font-weight: bold;
                            font-family: Raleway, sans-serif;
                            margin-top: 10px;
                            line-height: 1.1;
                        }
                        p{
                            line-height: 1.7em;
                            color: #777;
                            margin: 0 0 10px;
                            font-family: Open Sans, sans-serif;
                        }
                    }
                }
            }
        }
    }
}

@media (max-width: 992px) {
    .process-cards {
        margin-right: 30px !important;
        margin-left: 30px !important;
    }
}
</style>