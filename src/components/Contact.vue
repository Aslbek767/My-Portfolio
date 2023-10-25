<template>
    <section id='contact' class='contact-section section' >
				
        <CloseBtn @click="$router.push('/')"/>
        
        <div class='contact-block section-block' >
            <div class='container m-auto px-[200px] max-[1200px]:px-[50px]' >
                <div class='mx-[-15px]' >
                    <div class='col-md-6 col-md-offset-3' >
                    
                        <div class='section-header text-center' >
                            <h2 class='animate text-over-block' >Contact Me</h2>
                            <!--divider-->
                            <div class='divider-draft m-auto' ></div>
                            <!--/divider-->
                            <p>
                                I'm available for freelancing. If you want something to be built or just to say hi, feel free to shoot me a message.
                            </p>
                        </div>
                    
                    </div>
                </div>
                
                <div class='mx-[-15px]' >
                    <div class='col-md-8 col-md-offset-2' >
                        
                        <form id='contact-form' class='contact-form' action='mail.php' method='post' data-toggle='validator' >
                            
                            <div id='contact-form-result' ></div>
                            
                            <div class='mx-[15px] grid grid-cols-2 max-[992px]:grid-cols-1 gap-[20px] max-[992px]:gap-0' >
                                
                                <div class='col-span-1' >
                                    
                                    <div class='form-group' >
                                        <input type='text' class='form-control' placeholder='Name' required>
                                        
                                        <div class='help-block with-errors' ></div>
                                    </div>
                                
                                </div>
                                
                                <div class='col-span-1' >
                                    <div class='form-group' >
                                        <input type='email' class='form-control' placeholder='Email' required>
                                        
                                        <div class='help-block with-errors' ></div>
                    
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div class='mx-[15px] grid grid-cols-2 max-[992px]:grid-cols-1 gap-[20px] max-[992px]:gap-0' >
                                
                                <div class='col-span-1' >
                                    <div class='form-group' >
                                        <input type='text' class='form-control' placeholder='Phone' required>
                                        <div class='help-block with-errors' ></div>
                                        
                                    </div>
                                </div>
                                
                                <div class='col-span-1' >
                                    <div class='form-group' >
                                        <input type='text' class='form-control' placeholder='Website' required>
                                        <div class='help-block with-errors' ></div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div class='form-group mx-[15px]' >
                                <textarea rows='5' class='form-control' placeholder='Message' required></textarea>
                                <div class='help-block with-errors' ></div>
                            </div>
                            
                            <div class='form-group text-center' >
                                <button type='submit' class='symp-btn' >Send Message</button>
                            </div>
                            
                            
                        </form>
                    </div>
                </div>

                
            </div>
        </div>
    
        
        <Footer />
    </section>
</template>

<script setup>
import CloseBtn from './CloseBtn.vue';
import Footer from './Footer.vue';

</script>

<style lang="scss" scoped>
.section{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background: #FFF;
    overflow-y: auto;
    bottom: 0;
    border: solid 4px #BBB;
    padding-top: 100px;
}
.contact-block{
    padding-bottom: 100px;

    .container{
        &:before{
            display: table;
            content: " ";
        }

        .section-header{
            margin-bottom: 60px;

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
            .divider-draft {
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

            p{
                margin-top: 30px !important;
                line-height: 1.7em;
                color: #8A8A8A;
                font-size: 16px;
                max-width: 555px;
                width: 100%;
                margin: auto;
            }
        }

        .contact-form{
            #contact-form-result{
                .form-group{
                    margin-bottom: 25px;

                    button.close{
                        -webkit-appearance: none;
                        padding: 0;
                        cursor: pointer;
                        background: 0 0;
                        border: 0;
                    }
                    .close{
                        float: right;
                        font-size: 21px;
                        font-weight: 700;
                        line-height: 1;
                        color: #000;
                        text-shadow: 0 1px 0 #fff;
                        filter: alpha(opacity=20);
                        opacity: .2;
                    }
                    .alert-danger{
                        color: #a94442;
                        background-color: #f2dede;
                        border-color: #ebccd1;
                    }
                    .alert-dissmissable{
                        padding-right: 35px;

                        .close{
                            position: relative;
                            top: -2px;
                            right: -21px;
                            color: inherit;
                        }
                    }
                    .alert{
                        padding: 15px;
                        margin-bottom: 20px;
                        border: 1px solid transparent;
                        border-radius: 0;

                        strong{
                            font-weight: 700;
                        }
                    }
                }
            }
            .form-group{
                margin-bottom: 25px;
                .form-control{
                    padding: 10px;
                    height: auto;
                    outline: none;
                    border: solid 1px #BBB;
                    -webkit-box-shadow: none;
                    -moz-box-shadow: none;
                    box-shadow: none;
                    vertical-align: middle;
                    display: block;
                    width: 100%;
                    // height: 34px !important;
                    // padding: 6px 12px !important;
                    font-size: 14px;
                    line-height: 1.42857143;
                    color: #555;
                
                    background-color: #fff;
                    background-image: none;
                    // border: 1px solid #ccc !important;
                    // border-radius: 4px !important;
                    // -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
                    // box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
                    // -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
                    // -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
                    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
                }

                .help-block{
                    display: block;
                    margin-top: 5px;
                    margin-bottom: 10px;
                    color: #737373;
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

                    &:hover{
                        background: #B7A389;
                    }
                }
            }
        }
    }
}
</style>