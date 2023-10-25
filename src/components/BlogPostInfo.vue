<template>
    <div class="blog-section section active">

        <CloseBtn @click="$router.push('/blog')"/>
        <div class="posts-block section-block">
            <div class="container m-auto max-[830px]:px-[20px]" >
                <div class="grid grid-cols-12 gap-[50px] max-[992px]:gap-0 ">
                    <div class="col-span-8 max-[992px]:col-span-12">
                        <div class="post">
                            <div class="media">
                                <img :src="`../.` + `${post.img}`" alt="">
                                <!-- <img src="../assets/img/bg1.jpg" alt=""> -->
                            </div>
                        
                            <div class="content">
                                <h4>
                                    <a href="#">{{ post.title }}</a>
                                </h4>
                                <ul class="post-icons">
                                    <li>
                                        <i class="fa-regular fa-user"></i>
                                        <span>{{ post.person }}</span>
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-clock"></i>
                                        <span>{{ post.date }}</span>
                                    </li>
                                    <li>
                                        <i class="fa-regular fa-message"></i>
                                        <span>{{ post.messages }}</span>
                                    </li>
                                </ul>
                                <p>{{ post.moreInfo }}</p>
                                <a>
                                    Read More<i class="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div class="post-more">
                            <button class="more-link">Load More</button>
                        </div>
                    </div>
                    <div class="col-span-4 max-[992px]:col-span-12">
                        <div class="sidebar">
                            <div class="sidebar-widget">
                                <div class="search-box">
                                    <input type="text" placeholder="Search" class="search-input outline-none">
                                    <a class="search-btn" href=""><i class="fa-solid fa-magnifying-glass"></i></a>
                                
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <div class="categories-widget">
                                    <div class="widget-header">
                                        <h4>
                                            <i class="fa-solid fa-folder"></i>
                                            Categories
                                        </h4>
                                    </div>

                                    <ul class="sidebar-list">
                                        <li>
                                            <a href="#">Web design</a>
                                        </li>
                                        <li>
                                            <a href="#">Travel</a>
                                        </li>
                                        <li>
                                            <a href="#">Life style</a>
                                        </li>
                                        <li>
                                            <a href="#">Photography</a>
                                        </li>
                                        <li>
                                            <a href="#">Technology</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <div class="widget-header">
                                    <h4><i class="fa-solid fa-tag"></i>Tags</h4>
                                </div>
                                <ul class="sidebar-list">
                                    <li>
                                        <a href="#">Design</a>
                                    </li>
                                    <li>
                                        <a href="#">Tag</a>
                                    </li>
                                    <li>
                                        <a href="#">Web</a>
                                    </li>
                                    <li>
                                        <a href="#">Modern</a>
                                    </li>
                                    <li>
                                        <a href="#">Photography</a>
                                    </li>
                                    <li>
                                        <a href="#">Life</a>
                                    </li>
                                    <li>
                                        <a href="#">App</a>
                                    </li>
                                    <li>
                                        <a href="#">Template</a>
                                    </li>
                                </ul>
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
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import Footer from './Footer.vue';
import CloseBtn from './CloseBtn.vue';

const route = useRoute()
const id = +route.params.id

const post = ref([])


onMounted(async () => {
    const res = await axios.get(`http://localhost:3000/posts/${id}`)
    post.value = res.data
})

</script>


<style lang="scss" scoped>
.blog-section{
    transition: opacity .4s 1.2s ease;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: solid 4px #BBB;
    padding-top: 100px;
    background: #FFF;
    overflow-y: auto;

    .container{
        &:before{
            display: table;
            content: " ";
        }

        .section-header{
            h2{
                font-size: 32px;
                letter-spacing: 6px;
                color: #333;
                margin-top: 0;
                margin-bottom: 35px;
                font-weight: 300;
                font-family: Raleway, sans-serif;
            }
            p{
                margin-top: 30px !important;
                line-height: 1.7em;
                color: #8A8A8A;
                font-size: 16px;
                max-width: 555px;
                width: 100%;
                margin: auto;
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
                    position: absolute;
                    left: 7.5px;
                    bottom: -6px;
                }
            }
        }


        
    }


    .posts-block{
        padding: 90px 0;
        .post{
            position: relative;
            margin-bottom: 60px;

            .media:first-child {
                margin-top: 0;
            }

            .media{
                overflow: hidden;
                zoom: 1;

                img{
                    max-width: 100%;
                    width: 100%;
                }
            }

            .content{
                margin-top: 25px;

                h4{
                    font-size: 24px;
                    margin-top: 0;
                    margin-bottom: 8px;
                    font-weight: bold;
                    font-family: Raleway, sans-serif;
                    line-height: 1.1;


                    a{
                        
                        text-decoration: none;
                        -webkit-transition: all .3s ease;
                        -moz-transition: all .3s ease;
                        transition: all .3s ease;
                        background-color: transparent;
                        font-family: Open Sans, sans-serif;
                        
                        &:hover{
                            color: #B7A389;
                        }
                    }
                }

                .post-icons{
                    position: relative;
                    margin: 0;
                    padding: 0;
                    font-size: 0;
                    margin-bottom: 22px;

                    li{
                        display: inline-block;
                        *display: inline;
                        *zoom: 1;
                        font-size: 14px;
                        color: #777;
                        padding-right: 20px;

                        i{
                            margin-right: 5px;
                        }
                    }
                }

                p{
                    line-height: 1.8em;
                    color: #777;
                    margin-bottom: 22px;
                }


                a{
                    color: #333;
                    text-decoration: none;
                    display: inline-block;
                    *display: inline;
                    *zoom: 1;
                    background: transparent;
                    font-family: Open Sans, sans-serif;

                    i{
                        vertical-align: middle;
                        font-size: 1em;
                        margin-left: 8px;
                        position: relative;
                    }

                    &:hover {
                        color: #B7A389;

                        i{
                            color: #B7A389;
                        }
                    }
                }
            }
        }

        .post-more{
            text-align: center;
            margin-bottom: 50px;

            button.more-link{
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

                &:hover {
                    background: #B7A389;
                }
            }
        }


        .sidebar {
            position: relative;

            .sidebar-widget {
                
                .search-box{
                    position: relative;

                    input{
                        display: block;
                        width: 100%;
                        padding: 0 9px;
                        height: 40px;
                        line-height: 40px;
                        padding-right: 47px;
                        background: #F0F0F0;
                        border: solid 1px #F0F0F0;
                        -webkit-transition: all .3s ease;
                        -moz-transition: all .3s ease;
                        transition: all .3s ease; 
                        margin: 0;
                    }

                    .search-btn{
                        position: absolute;
                        top: 0;
                        right: 0;
                        height: 40px;
                        width: 40px;
                        line-height: 40px;
                        background: #E0E0E0;
                        vertical-align: middle;
                        text-align: center;
                        font-size: 20px;
                        color: #333;
                        text-decoration: none;
                    }
                }

                .widget-header{
                    position: relative;
                    margin-top: 60px;
                    margin-bottom: 15px;

                    h4{
                        letter-spacing: 2px;
                        font-weight: bold;
                        font-family: Raleway, sans-serif;
                        font-size: 18px;
                        margin-top: 10px;
                        margin-bottom: 10px;
                        line-height: 1.1;

                        i{
                            margin-right: 8px;
                        }
                    }
                }

                .sidebar-list{
                    padding: 0;
                    margin: 0;
                    list-style: none;

                    li{
                        a{
                            padding: 7px 0;
                            color: #777;
                            text-decoration: none;
                            display: block;
                            line-height: 1.6em;
                            background-color: transparent;

                            &:hover{
                                color: #B7A389;
                            }
                        }

                        
                    }
                }
            }
        }

    }
}
</style>