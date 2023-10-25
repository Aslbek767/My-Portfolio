<template>
    <div class="resume-section section active">
        <CloseBtn @click="$router.push('/')"/>

        <div class="container m-auto">
            <div class="section-header text-center">
                <h2>My Resume</h2>
                <div class="divider-draft m-auto"></div>
            </div>
        </div>


        <div class="timeline-block section-block">
            <div class="container m-auto">
                <ul class="timeline">
                    <li class="timeline-header"> 
                        <h4>Education</h4>
                    </li>

                    <li>
                        <div class="timeline-desc">
                            <h4>2005-2007</h4>
                        </div>
                        <div class="timeline-content">
                            <h4>Master's degree</h4>
                            <span>@CSS College Larkana</span>
                            <p>Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat vituperata suscipiantur et, et fabellas explicari adipiscing quo.</p>
                        </div>
                    </li>

                    <li class="inverse">
                        <div class="timeline-desc">
                            <h4>2005-2007</h4>
                        </div>
                        <div class="timeline-content">
                            <h4>Master's degree</h4>
                            <span>@CSS College Larkana</span>
                            <p>Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat vituperata suscipiantur et, et fabellas explicari adipiscing quo.</p>
                        </div>
                    </li>

                    <li>
                        <div class="timeline-desc">
                            <h4>2005-2007</h4>
                        </div>
                        <div class="timeline-content">
                            <h4>Master's degree</h4>
                            <span>@CSS College Larkana</span>
                            <p>Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat vituperata suscipiantur et, et fabellas explicari adipiscing quo.</p>
                        </div>
                    </li>

                    <li class="timeline-header"> 
                        <h4>EXPERIENCE</h4>
                    </li>

                    <li>
                        <div class="timeline-desc">
                            <h4>2005-2007</h4>
                        </div>
                        <div class="timeline-content">
                            <h4>Master's degree</h4>
                            <span>@CSS College Larkana</span>
                            <p>Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat vituperata suscipiantur et, et fabellas explicari adipiscing quo.</p>
                        </div>
                    </li>

                    <li class="inverse">
                        <div class="timeline-desc">
                            <h4>2005-2007</h4>
                        </div>
                        <div class="timeline-content">
                            <h4>Master's degree</h4>
                            <span>@CSS College Larkana</span>
                            <p>Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat vituperata suscipiantur et, et fabellas explicari adipiscing quo.</p>
                        </div>
                    </li>

                    <li>
                        <div class="timeline-desc">
                            <h4>2005-2007</h4>
                        </div>
                        <div class="timeline-content">
                            <h4>Master's degree</h4>
                            <span>@CSS College Larkana</span>
                            <p>Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat vituperata suscipiantur et, et fabellas explicari adipiscing quo.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>


        <div class="hobbies-block bg-[#F5F5F5]" >
            <div class="!container m-auto">
                <div class="section-header text-center">
                    <h2>My Hobbies</h2>

                    <div class="divider-draft m-auto"></div>
                    
                </div> 
                <div class="grid grid-cols-12 max-[992px]:grid-cols-6 max-[768px]:grid-cols-4">
                    <div class="col-span-2">
                        <div class="hobby">
                            <div class="icon">
                                <i class="fa-solid fa-gamepad"></i>
                            </div>
                            <h4>Gaming</h4>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <div class="hobby">
                            <div class="icon">
                                <i class="fa-solid fa-book-open"></i>
                            </div>
                            <h4>Reading</h4>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <div class="hobby">
                            <div class="icon">
                                <i class="fa-solid fa-comments"></i>
                            </div>
                            <h4>Chat</h4>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <div class="hobby">
                            <div class="icon">
                                <i class="fa-solid fa-music"></i>
                            </div>
                            <h4>Music</h4>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <div class="hobby">
                            <div class="icon">
                                <i class="fa-solid fa-mug-hot"></i>
                            </div>
                            <h4>Drinking coffee</h4>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <div class="hobby">
                            <div class="icon">
                                <i class="fa-regular fa-futbol"></i>
                            </div>
                            <h4>Football</h4>
                        </div>
                    </div>
                </div> 
            </div>
        </div>


        <div class="skills-block">
            <div class="!container m-auto">
                <div class="section-header">
                    <h2>My Skills</h2>

                    <div class="divider-draft m-auto"></div>
                </div>
                <div class="grid grid-cols-2 gap-[50px]">
                    <div class="skill" v-for="{ id, skillName, percent } in skills" :key="id">
                        <h4>{{ skillName }}</h4>
                        <div class="skill-bar">
                            <div class="bar" :style="{width: percent +'%'}">
                                <div class="percent">
                                    {{ percent }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        <Footer />
    </div>

</template>

<script setup>
import axios from 'axios';
import CloseBtn from './CloseBtn.vue';
import Footer from './Footer.vue';
import { ref, onMounted } from 'vue';


const skills = ref([])

onMounted(async () => {
    const res = await axios.get('http://localhost:3000/skills')
    skills.value = res.data
})

</script>

<style lang="scss" scoped>

.hobby:hover .icon{
    top: -20px !important;
}
.resume-section{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: solid 4px #BBB;
    padding-top: 100px;
    background: #FFF;
    overflow-y: auto;

    .section-header{
        h2{
            font-size: 32px;
            letter-spacing: 6px;
            color: #333;
            margin-top: 0;
            margin-bottom: 35px;
            font-weight: 300;
            font-family: Raleway, sans-serif;
            line-height: 1.1;
        }
        .divider-draft{
            position: relative;
            height: 2px;
            background: #333;
            width: 40px;
            display: block;

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
                // background: red;
                position: absolute;
                left: 7.5px;
                bottom: -6px;
            }
        }
    }

    .timeline-block {
        padding-bottom: 100px;

        .timeline{
            padding-bottom: 90px !important;
            margin-top: 100px !important;
            position: relative;
            list-style: none;
            margin: 0;
            font-family: Open Sans, sans-serif;

            .timeline-header:first-of-type {
                margin-top: 0;
            }

            &:before {
                content: ' ';
                position: absolute;
                top: 0;
                left: 50%;
                margin-left: -1px;
                height: 100%;
                width: 2px;
                background: #BBB;
                border-radius: 0 0 5px 5px;
            }

            li{
                margin: 70px 0;
                position: relative;

                &:before{
                    content: ' ';
                    display: table;
                }

                &:after{
                    clear: both;
                    content: ' ';
                    display: table;
                }
                margin: 70px 0;

                &.timeline-header:first-child {
                    h4{
                        margin-top: 10px;
                    }
                }
                &.timeline-header{
                    background: #FFF;
                    position: relative;
                    z-index: 10;
                    text-align: center;
                    margin-bottom: 100px;

                    h4{
                        font-weight: bold;
                        text-transform: uppercase;
                        font-size: 16px;
                        display: inline-block;
                        *display: inline;
                        *zoom: 1;
                        position: relative;
                        margin: 0;
                        letter-spacing: 4px;
                        font-family: Raleway, sans-serif;
                        line-height: 1.1;

                        &:before{
                            margin-top: 0;
                            content: ' ';
                            display: block;
                            height: 2px;
                            background: #BBB;
                            margin: 0 -5px;
                            margin-bottom: 8px;
                            font-weight: bold;
                            text-transform: uppercase;
                            font-size: 16px;
                        }

                        &:after{
                            content: ' ';
                            display: block;
                            height: 2px;
                            background: #BBB;
                            margin: 0 -5px;
                            margin-top: 8px;
                            font-weight: bold;
                            text-transform: uppercase;
                            font-size: 16px;
                        }
                    }
                }

                &:not(.timeline-header):before{
                    content: ' ';
                    position: absolute;
                    top: 0;
                    left: 50%;
                    height: 11px;
                    width: 11px;
                    -webkit-transform: translateX(-50%) rotate(45deg);
                    -moz-transform: translateX(-50%) rotate(45deg);
                    -ms-transform: translateX(-50%) rotate(45deg);
                    -o-transform: translateX(-50%) rotate(45deg);
                    transform: translateX(-50%) rotate(45deg);
                    background: #B7A389;
                    display: table;
                }

                .timeline-desc{
                    float: right;

                    h4{
                        font-size: 14px;
                        letter-spacing: 2px;
                        margin-top: 0;
                        font-weight: bold;
                        font-family: Raleway, sans-serif;
                        margin-bottom: 10px;
                        line-height: 1.1;
                    }
                }

                &.inverse {
                    .timeline-desc {
                        float: left !important;
                        text-align: right !important;
                    }

                    .timeline-content{ 
                        float: right !important;
                        text-align: left !important;
                        position: relative !important;
                    }
                }

                .timeline-content{
                    float: left;
                    text-align: right;
                    position: relative;

                    h4{
                        margin-top: 0;
                        margin-bottom: 7px;
                        letter-spacing: 2px;
                        font-size: 20px;
                        font-weight: bold;
                        font-family: Raleway, sans-serif;
                        line-height: 1.1;
                    }

                    span {
                        display: block;
                        margin-bottom: 15px;
                        color: #BBB;
                        font-family: Open Sans, sans-serif;
                    }

                    p{
                        margin: 0;
                        line-height: 1.7em;
                        color: #777;
                        font-family: Open Sans, sans-serif;
                    }
                }

                div{
                    width: 50%;
                    padding: 0 35px;
                }
            }
        }
    }


    .hobbies-block {
        padding-top: 100px;
        padding-bottom: 30px;
        .section-header {
            padding-bottom: 100px;
        }

        .hobby{
            position: relative;
            text-align: center;
            margin-bottom: 70px;
            -webkit-transition: all .3s ease-in-out;
            -moz-transition: all .3s ease-in-out;
            transition: all .3s ease-in-out;


            .icon {
                background: #B7A389;
                color: #FFF;
                -webkit-transform: rotate(45deg);
                -moz-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                -o-transform: rotate(45deg);
                transform: rotate(45deg);
                width: 80px;
                height: 80px;
                line-height: 80px;
                margin: auto;
                margin-bottom: 40px;
                transition: all .3s ease-in-out;
                position: relative;
                top: 0;
                i{
                    color: #fff;
                    z-index: 99999999;
                    scale: 2;
                    justify-content: center;
                    align-items: center;
                    -webkit-transform: rotate(-45deg);
                    -moz-transform: rotate(-45deg);
                    -ms-transform: rotate(-45deg);
                    -o-transform: rotate(-45deg);
                    transform: rotate(-45deg);
                    transition: all .3s ease-in-out;
                }
            }

            h4{
                font-size: 18px;
                letter-spacing: 2px;
                font-weight: bold;
                font-family: Raleway, sans-serif;
                margin-top: 2px;
                margin-bottom: 10px;
                line-height: 1.1;
            }

        }
    }

    .skills-block {
        padding: 100px 0;
        padding-bottom: 40px;

        .section-header{
            margin-bottom: 80px;
            text-align: center;
            

            h4{
                font-size: 32px;
                letter-spacing: 6px;
                color: #333;
                margin-top: 0;
                margin-bottom: 35px;
                font-weight: 300;
                font-family: Raleway, sans-serif;
                line-height: 1.1;
            }
        }

        .skill {
            position: relative;
            margin-bottom: 60px;

            h4{
                color: #B7A389;
                font-size: 14px;
                margin-top: 0;
                margin-bottom: 5px;
                letter-spacing: 2px;
                font-weight: bold;
                font-family: Raleway, sans-serif;
                line-height: 1.1;
            }

            .skill-bar {
                height: 10px;
                background: #F0F0F0 !important;

                .bar {
                    background: #888;
                    height: 100%;
                    // width: 90%;
                    position: relative;

                    .percent{
                        position: absolute; 
                        padding: 4px 7px;
                        background: #888;
                        color: #FFF;
                        bottom: 100%;
                        right: 0;
                        font-size: 11px;
                        margin-bottom: 10px;


                        &::after {
                            content: ' ';
                            position: absolute;
                            border-bottom: solid 7px transparent;
                            border-right: solid 7px #888;
                            bottom: -7px;
                            right: 0;
                            font-size: 11px;
                            color: #FFF;    
                        }
                    }


                }
            }
        }
    }
}

@media (max-width: 992px){
    .timeline {
        &:before {
            display: none !important;
        }
    }

    .timeline-content {
        width: 85% !important;
        display: block !important;
        margin-left: auto !important;
        margin-right: auto !important;
    }

    li{
        .timeline-desc {
            opacity: .5 !important;
            text-align: right !important;
            float: left !important;
            width: 85% !important;
            display: block !important;
            margin-left: auto !important;
            margin-right: auto !important;
        }
        .timeline-content{
            text-align: right !important;
        }


        &.inverse {
            .timeline-desc {
                text-align: left !important;
                float: right !important;
                opacity: .5 !important;
            }
        }
        &:not(.timeline-header):before {
            display: none !important;
        }

    }

}
</style>