<template>
    <div id="wrapper">
        <CloseBtn @click="$router.push('/portfolio')"/>

        <div class="single-work">
            <div class="container">
                <div class="grid grid-cols-12 gap-[20px] px-[50px]">
                    <div class="col-span-8 max-[992px]:col-span-12">
                        <img :src="`../.` + `${projectInfo.img}`" alt="">
                    </div>
                    <div class="col-span-4 max-[992px]:col-span-12">
                        <ul class="work-info">
                            <li>
                                <h4>
                                    <i class="fa-regular fa-circle-dot"></i>
                                    Client
                                </h4>
                                <p>{{ projectInfo.moreInfo?.source }}</p>
                            </li>
                            <li>
                                <h4>
                                    <i class="fa-regular fa-calendar"></i>
                                    Date
                                </h4>
                                <p>{{ projectInfo.moreInfo?.date }}</p>
                            </li>
                            <li>
                                <h4>
                                    <i class="fa-regular fa-clock"></i>
                                    Time Taken
                                </h4>
                                <p>{{ projectInfo.moreInfo?.takenTime }}</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="work-content px-[50px]">
                    <div class="block">
                        <h4>Info</h4>
                        <p>{{ projectInfo.moreInfo?.info }}</p>
                    
                    </div>
                    <div class="block">
                        <div class="grid grid-cols-2 gap-[100px] max-[992px]:gap-[10px] max-[992px]:grid-cols-1">
                            <div class="col-span-1">
                                <h4>The Challenge</h4>
                                <p>{{ projectInfo.moreInfo?.challenge }}</p>
                            </div>
                            <div class="col-span-1">
                                <h4>The Solution</h4>
                                <p>{{ projectInfo.moreInfo?.solution }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>
    
<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Footer from './Footer.vue';
import CloseBtn from './CloseBtn.vue';  


const route = useRoute()
const id = ref(Number(route.params.id))
const projectInfo = ref([])

const fetchData = async () => {
    const res = await axios.get(`http://localhost:3000/portfolio/${id.value}`)
    console.log(res.data)
    projectInfo.value = res.data
}



onMounted(() => {
    fetchData()
})
</script>


<style lang="scss" scoped>
#wrapper{
    .close-btn{
	opacity:1;
	z-index:100;
	-webkit-transition:opacity .4s 1.2s ease, background .3s ease;
	-moz-transition:opacity .4s 1.2s ease, background .3s ease;
	transition:opacity .4s 1.2s ease, background .3s ease;
	overflow:hidden;
    padding-bottom: 0;
}
.close-btn{
	position:fixed;
	height:64px;
	width:64px;
	cursor:pointer;
	display:block;
	top:18px;
	right:18px;
}
.close-btn > span{
	height:3px;
	width:40px;
	background:#BBB;
	position:absolute;
	top:50%;
	left:50%;
	margin-left:-20px;
	margin-top:-1.5px;
}
.close-btn > span:before{
	content: ' ';
	position:absolute;
	top:0;
	width:0;
	height:inherit;
	background:#B7A389;
}
.close-btn > span:nth-of-type(1){
	-webkit-transform:rotate(45deg);
	-moz-transform:rotate(45deg);
	-ms-transform:rotate(45deg);
	-o-transform:rotate(45deg);
	transform:rotate(45deg);
}
.close-btn > span:nth-of-type(2){
	-webkit-transform:rotate(-45deg);
	-moz-transform:rotate(-45deg);
	-ms-transform:rotate(-45deg);
	-o-transform:rotate(-45deg);
	transform:rotate(-45deg);
}
.close-btn > span:nth-of-type(1):before{
	left:0;
}
.close-btn > span:nth-of-type(2):before{
	right:0;
}
.close-btn:hover > span{
	background:transparent;
}
.close-btn:hover > span:before{
	-webkit-transition:all .3s ease;
	-moz-transition:all .3s ease;
	transition:all .3s ease;
	width:100%;
}
.close-btn:hover > span:nth-of-type(2):before{
	-webkit-transition-delay:.3s;	
	-moz-transition-delay:.3s;	
	transition-delay:.3s;	
}

    .single-work {
        padding-top: 80px;
        padding-bottom: 130px;
        display: block;

        .container{
            &:before{
                display: table;
                content: " ";
            }

            img{
                max-width: 100%;
                vertical-align: middle;
            }

            ul{
                margin-top: 0;
                margin-bottom: 10px;

                &.work-info{
                    list-style: none;
                    margin: 0;
                    margin-top: 50px;
                }
                li{
                    margin-bottom: 55px;
                    margin-top: 5px;
                    padding: 0;

                    h4{
                        font-size: 16px;
                        letter-spacing: 2px;
                        margin: 0;
                        margin-bottom: 10px;
                        font-weight: bold;
                        font-family: Raleway, sans-serif;
                        line-height: 1.1;

                        i{
                            margin-right: 8px;
                        }

                        img{

                        }
                    }

                    p{
                        color: #777;
                        margin: 0 0 10px;
                        font-family: Open Sans, sans-serif;
                    }
                }
            }

            .work-content{
                margin-top: 60px;
                

                .block{
                    h4{
                        font-size: 18px;
                        margin-bottom: 15px;
                        letter-spacing: 2px;
                        font-weight: bold;
                        font-family: Raleway, sans-serif;
                        margin-top: 10px;
                        line-height: 1.1;
                    }

                    p{
                        line-height: 1.9em;
                        margin: 0 0 10px;
                        font-family: Open Sans, sans-serif;
                    }
                }
            }
        }
    }
}    


@media (min-width: 992px){
    .work-info {
        padding-left: 25px;
        margin-top: 0;
    }
}
</style>