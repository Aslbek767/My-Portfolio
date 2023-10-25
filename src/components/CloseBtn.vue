<template>
    <div class="close-btn">
        <span></span>
        <span></span>
    </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
.close-btn{
	opacity:1;
	z-index:100;
	-webkit-transition:opacity .4s 1.2s ease, background .3s ease;
	-moz-transition:opacity .4s 1.2s ease, background .3s ease;
	transition:opacity .4s 1.2s ease, background .3s ease;
	overflow:hidden;
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
</style>