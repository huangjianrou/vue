<template>
	<div class="banner">
		<div class="swiper-container">
		    <div class="swiper-wrapper">
			    <div class="swiper-slide" v-for="(item,index) in list" :key="index">
			      	<img :src="item.image">
			    </div>
		    
		    </div>
 		 </div>
	</div>
</template>
<script type="text/javascript">
	import Swiper from 'swiper';
	import Vue from 'vue';
	export default{
		name:'banner',
		components:{},
		data(){
			return {
				list:[]
			}
		},
		
		methods:{
			getBanner(){
				this.$axios.get('http://www.hangowa.com/mo_bile/index.php',{params:{
					   act:'index',
					   op:'special',
					   special_id:1
				}})
				.then((str)=>{	
					this.list=str.datas.list[0].adv_list.item;
					/*console.log(this.list)*/
					Vue.nextTick(()=>{
						this.swiper= new Swiper('.swiper-container', {
					      
					        loop: true,
					        centeredSlides: true,
					        autoplay: {
					        delay: 2000,
					        disableOnInteraction: false,
					       }
					    });
					})
				})
				.catch((err)=>{
					console.log(err)
				})
				
			}


		},
		created(){
			this.getBanner();
		},
		mounted(){
			
		}
	}
</script>


<style lang='less' scoped>
@import '../../styles/main.less';
 @import '../../../node_modules/swiper/dist/css/swiper.css';	
	.banner{
		.w(375);
		.h(152);
		img{
			.w(375);
			.h(152);
		}
	}
</style>