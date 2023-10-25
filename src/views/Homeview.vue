<template>
    <div class="front-section">
        <div class="container m-auto">

            <div class="home-page">
                <div :class="{'transition-mask': $route.path !== '/'}"></div>

                <div class="front-person-img">
                    <img src="../assets/img/man1.png" alt="">
                </div>

                <div class="front-person-titles">
                    <span class='t1' >
                        Designer
                    </span>
                    <!--/title1-->
                    
                    <!--title2-->
                    <span class='t2' >
                        Gamer guy
                    </span>
                    <!--/title2-->
                    
                    <!--title3-->
                    <span class='t3' >
                        Freelancer
                    </span>
                </div>

                <div class="front-person-links">
                    <Transition>   
                        <ul>
                            <li>
                                <router-link to="/about" >About Me</router-link>
                            </li>
                            
                            <li>
                                <router-link to="/resume" >Resume</router-link>
                            </li>
                            
                            <li>
                                <router-link to="/services" >Services</router-link>
                            </li>
                            
                            <li>
                                <router-link to="/portfolio" >Portfolio</router-link>
                            </li>
                            
                            <li>
                                <router-link to="/blog" >My Blog</router-link>
                            </li>
                            
                            <li>
                                <router-link to="/contact" >Contact</router-link>
                            </li>
                            
                            <li>
                                <router-link to="/" >Hire Me!</router-link>
                            </li>
                        </ul>
                    </Transition>
                </div>


                <div class="front-heading pb-[200px]" data-aos="fade-up-right">
                    <h2>Aslbek Yuldoshev</h2>
                </div>
            </div>

            <section class="components hidden">
                <router-view ></router-view>
            </section>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { watch } from 'vue';

const route = useRoute()

console.log(route.fullPath)
if(route.fullPath !== '/'){
    setTimeout(() => {
        document.querySelector('.home-page').classList.add('hidden');
    }, 0);
    setTimeout(() => {
        document.querySelector('section').classList.remove('hidden');
    },0)
} else if(route.fullPath === '/'){
    setTimeout(() => {
        document.querySelector('.home-page').classList.remove('hidden');
    }, 0);
    setTimeout(() => {
        document.querySelector('section').classList.add('hidden');
    },0)
}

watch(() => route.fullPath, () => {
    console.log(route.fullPath)
    if(route.fullPath !== '/'){
        setTimeout(() => {
            document.querySelector('.home-page').classList.add('hidden');
        }, 1200);
        setTimeout(() => {
            document.querySelector('section').classList.remove('hidden');
        }, 1000)
    } 

    if(route.fullPath === '/'){
        setTimeout(() => {
            document.querySelector('.home-page').classList.remove('hidden');
        }, 0);
        setTimeout(() => {
            document.querySelector('section').classList.add('hidden');
        },0)
    }
})

</script>

<style scoped lang="scss"> 
.transition-mask{
	position:absolute;
	height:500px;
	width:500px;
	left:0;
	right:0;
	margin:auto;
	z-index:22;
	transform:rotate(45deg);
	-webkit-animation: fill2 .8s .4s both ease;
	-moz-animation: fill2 .8s .4s both ease;
	animation: fill2 .8s .4s both ease;
}
.transition-mask:before{
	content: ' ';
	position:absolute;
	bottom:0;
	right:0;
	height:100%;
	width:100%;
}
.transition-mask:before{
	-webkit-animation: fill .4s both ease;
	-moz-animation: fill .4s both ease;
	animation: fill .4s both ease;
	background:#CCC;
}

// @-webkit-keyframes fill2{
// 	0%{
// 		transform:rotate(45deg);
// 	}
// 	100%{
// 		z-index:50;
// 		transform:rotate(0deg);
// 		height:100%;
// 		width:100%;
// 		top:0;
// 		bottom:auto;
// 	}
// }
@keyframes fill2{
	0%{
		// -webkit-transform:rotate(45deg);
		// -moz-transform:rotate(45deg);
		// -ms-transform:rotate(45deg);
		// -o-transform:rotate(45deg);
		transform:rotate(45deg);
	}
	100%{
		z-index:50;
		-webkit-transform:rotate(0deg);
		-moz-transform:rotate(0deg);
		-ms-transform:rotate(0deg);
		-o-transform:rotate(0deg);
		transform:rotate(0deg);
		height:100%;
		width:100%;
		top:0;
		bottom:auto;
	}
}



@-webkit-keyframes fill{
	0%{
		width:0%;
	}
	100%{
		width:100%;
	}
}

@keyframes fill{
	0%{
		width:0%;
	}
	100%{
		width:100%;
	}
}


.front-person-img{
    width:500px;
	height:500px;
	overflow:hidden;
	background:#F0F0F0;
	z-index:15;
	-webkit-transition:height .5s .3s ease, transform .5s .8s ease;
	-moz-transition:height .5s .3s ease, transform .5s .8s ease;
	transition:height .5s .3s ease, transform .5s .8s ease;
	margin:200px auto;
	margin-bottom:0;
	-webkit-transform:rotate(45deg);
	-moz-transform:rotate(45deg);
	-ms-transform:rotate(45deg);
	-o-transform:rotate(45deg);
	transform:rotate(45deg);
	border-radius:0;

    img{
        max-width:100%;
        vertical-align:bottom;
        // -webkit-transform:rotate(-45deg) translateY(40px);
        // -moz-transform:rotate(-45deg) translateY(40px);
        // -ms-transform:rotate(-45deg) translateY(40px);
        // -o-transform:rotate(-45deg) translateY(40px);
        transform:rotate(-45deg) translateY(40px);
    }
}

.front-person-titles{
    position:relative;
	z-index:10;
	height:500px;
	width:500px;
	margin:auto;
	margin-top:-500px;
	-webkit-transform:rotate(45deg);
	-moz-transform:rotate(45deg);
	-ms-transform:rotate(45deg);
	-o-transform:rotate(45deg);
	transform:rotate(45deg);

    span{
        position:absolute;
        z-index:5;
        display:block;
        width:100%;
        font-family:Hind, sans-serif;
        color:#CCC;
        text-align:center;
        font-size:24px;
        letter-spacing:25px;
        line-height:1em;
        text-transform:lowercase;

        &.t1{
            left:5px;
            bottom:0;
            -webkit-transform:rotate(-90deg) translateY(-100%);
            -moz-transform:rotate(-90deg) translateY(-100%);
            -ms-transform:rotate(-90deg) translateY(-100%);
            -o-transform:rotate(-90deg) translateY(-100%);
            transform:rotate(-90deg) translateY(-100%);
            -webkit-transform-origin:0% 0%;
            -moz-transform-origin:0% 0%;
            -ms-transform-origin:0% 0%;
            -o-transform-origin:0% 0%;
            transform-origin:0% 0%;
        }

        &.t2{
            top:5px;
            left:0;
            -webkit-transform:translateY(-100%);
            -moz-transform:translateY(-100%);
            -ms-transform:translateY(-100%);
            -o-transform:translateY(-100%);
            transform:translateY(-100%);
        }

        &.t3{
            left:0;
            bottom:5px;
            -webkit-transform:translateY(100%) rotate(180deg);
            -moz-transform:translateY(100%) rotate(180deg);
            -ms-transform:translateY(100%) rotate(180deg);
            -o-transform:translateY(100%) rotate(180deg);
            transform:translateY(100%) rotate(180deg);
        }
    }
}

.front-person-links{
    margin:auto;
	width:500px;
	height:500px;
	margin-top:-500px;
	z-index:25;
	-webkit-transform: rotate(45deg);
	-moz-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	-o-transform: rotate(45deg);
	transform: rotate(45deg);
	position:relative;

    ul{
        font-size:0;
        z-index:99;
        position:absolute;
        text-align:left;
        white-space:nowrap;
        left:100%;
        top:50%;
        -webkit-transform:translateY(-50%);
        -moz-transform:translateY(-50%);
        -ms-transform:translateY(-50%);
        -o-transform:translateY(-50%);
        transform:translateY(-50%);
        margin:0;
        padding:0;
        list-style:none;
        margin-left:-15px;
        li{
            display:block;

            a{
                font-weight:bold;
                display:block;
                font-size:14px;
                padding:25px 0;
                cursor:pointer;
                -webkit-transition:all .3s ease;
                -moz-transition:all .3s ease;
                transition:all .3s ease;
                position:relative;
                color:#999;
                text-align:left;
                text-transform:uppercase;
                letter-spacing:3px;
                text-decoration:none;
                line-height:1em;


                &:before, 
                &:after{
                    content: ' ';
                    height:6px;
                    width:15px;
                    background:#CCC;
                    display:inline-block;
                    *display:inline;
                    *zoom:1;
                    vertical-align:middle;
                    margin-right:15px;
                    font-size:0;
                    -webkit-transition:all .3s ease;
                    -moz-transition:all .3s ease;
                    transition:all .3s ease;
                    display:none;
                }
                &:after{
                    margin-left:15px;
                    margin-right:0;
                    display:none;   
                }
                &:hover{
                    color:#B7A389;

                    &:after,
                    &:before {
                        width:25px;
                        background:#999;
                    }
                }
            }


        }

    }
}


.front-heading {
    text-align: center;
    margin-top: 190px;

    h2{
        font-size: 55px;
        font-weight: lighter;
        letter-spacing: 15px;
        position: relative;
        position: relative;
        line-height: 1em;
        display: inline-block;
        *display: inline;
        *zoom: 1;
        z-index: 10;
        color: #999;
        font-style: italic;
        font-family: Raleway, sans-serif;
        margin-top: 20px;
        margin-bottom: 10px;
    }
}



@media (max-width: 992px) {
    .front-person-img {
        height: 360px !important;
        width: 360px !important;

        img{
            transform: rotate(-45deg) translateY(45px) !important; 
        }
    }

    .front-person-titles {
        margin-top: 125px;
        transform: none;
        text-align: center;
        width: 80%;
        height: auto;
        opacity: 1;


        span {
            position: relative;
            transform: none !important;
            display: block;
            margin: 25px 0;
            letter-spacing: 10px;
            font-size: 16px;
            text-transform: uppercase;
            top: auto !important;
            left: auto !important;
            bottom: auto !important;
        }
    }

    .front-person-links {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        margin-top: 110px;
        text-align: center;
        position: relative;
        margin-bottom: 0;
        width: auto;
        height: auto;


        ul{
            top: 0;
            left: auto;
            position: relative;
            display: inline-block;
            *display: inline;
            *zoom: 1;
            -webkit-transform: none;
            -moz-transform: none;
            -ms-transform: none;
            -o-transform: none;
            transform: none;

            li {
                margin-bottom: 1px;
                display: block;

                a{
                    text-align: center;
                    padding: 22px 48px;
                    display: block;
                    font-size: 22px;
                    letter-spacing: 2px;
                    text-transform: none;
                }
            }
        }
    }

    .front-heading{
        margin-top: 80px;

        h2{
            font-size: 40px;
        }
    }

    .front-section {
        padding-bottom: 110px;
    }
}

.front-section {
    padding-top: 60px;
    position: relative;
}
</style>