<template>
    <div class="footer bg-[#F5F5F5] section-block">
        <div class="container m-auto">
            <div class="px-[20px] max-[768px]:px-0 grid grid-cols-2">
                <div class="col-span-1 mx-[15px]">
                    <h4>Aslbek</h4>
                </div>
                <div class="col-span-1 text-end max-[768px]:mr-[-5px]">
                    <ul class="footer-social">
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-pinterest"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-basketball"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
.footer{
    padding: 30px 0;
    background: #FFF;
    border-top: solid 1px #F0F0F0;

    .container {
        h4{
            font-size: 18px;
            letter-spacing: 4px;
            margin: 0;
            margin-top: 3.5px;
            font-style: italic;
            font-family: 'Playfair Display', serif;
            color: #999;
            font-weight: bold;
        }

        .footer-social{
            margin: 0;
            padding: 0;
            list-style: none;
            font-size: 0;

            li{
                display: inline-block;
                margin-left: 30px;

                &:hover{
                    a{
                        background: #B7A389;
                        color: #fff;
                    }
                }

                a{
                    text-decoration: none;
                    height: 26px;
                    width: 26px;
                    line-height: 26px;
                    vertical-align: middle;
                    -webkit-transform: rotate(45deg);
                    -moz-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    -o-transform: rotate(45deg);
                    transform: rotate(45deg);
                    -webkit-transition: all .3s ease-in-out;
                    -moz-transition: all .3s ease-in-out;
                    transition: all .3s ease-in-out;
                    display: block;
                    text-align: center;
                    color: #BBB;
                    background: #F0F0F0;
                    font-size: 0;


                    i{
                        -webkit-transform: rotate(-45deg);
                        -moz-transform: rotate(-45deg);
                        -ms-transform: rotate(-45deg);
                        -o-transform: rotate(-45deg);
                        transform: rotate(-45deg);
                        display: inline-block;
                        *display: inline;
                        *zoom: 1;
                        line-height: inherit;
                        width: inherit;
                        height: inherit;
                        vertical-align: middle;


                        &:before{
                            font-size: 14px;
                            line-height: 1em;
                            vertical-align: middle;
                        }
                    }
                }
            }
        }
    }

}  

@media (max-width:768px) {
    .footer {
        padding-right: 50px;
        padding-left: 50px;
    }
}

@media (max-width:991px) {
    .footer {
        padding-right: 50px;
        padding-left: 50px;
    }
}

@media (max-width: px) {
    .footer {
        padding-right: 50px;
        padding-left: 50px;
    }
}
</style>