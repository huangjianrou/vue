<template>
	<div class="findList">		
		<axiosGet v-on:child="findList"></axiosGet>
		<div class="zhuan">
			<p>专题精选</p>
			<ul class="jing1">
				<li v-for="(item,index) in img1" :key="index">
					<img :src="item.image">
				</li>
				
			</ul>
			<ul class="jing2">
				<li v-for="(item,index) in img2" :key="index">
					<img :src="item.image">
				</li>
				
			</ul>
		</div>

		<div class="jingxuan">
			<p class="tou">{{type1}}</p>
			<ul class="clearfix">
				<li  v-for="(item,index) in goods1" :key="index">
					<div class="j_img">
						<img :src="item.goods_image">
					</div>
					<p class="j_title">{{item.goods_name}}</p>
					<p class="j_price">{{item.goods_promotion_price}}</p>
				</li>
				
			</ul>
		</div>
		<div class="jingxuan">
			<p class="tou">{{type2}}</p>
			<ul class="clearfix">
				<li  v-for="(item,index) in goods2" :key="index">
					<div class="j_img">
						<img :src="item.goods_image">
					</div>
					<p class="j_title">{{item.goods_name}}</p>
					<p class="j_price">￥{{item.goods_promotion_price}}</p>
				</li>
				
			</ul>
		</div>


	</div>	
	
</template>
<script type="text/javascript">
	import axiosGet from '../../com/axiosGet.vue'
	export default{
		name:'findList',
		components:{axiosGet},
		data(){
			return {
				name:'findList',
				img1:'',
				img2:'',
				goods1:'',
				type1:'',
				goods2:'',
				type2:''
			}
			
		},
		methods:{
			findList(msg){
				console.log(msg);
				this.img1=msg[1].explode3.item;
				this.img2=msg[2].home3.item;
				this.goods1=msg[3].goods.item;
				this.type1=msg[3].goods.title;
				this.goods2=msg[4].goods.item;
				this.type2=msg[4].goods.title;
			}
		}
	}
</script>


<style lang='less' scoped>
@import '../../../styles/main.less';	
	.findList{
		.zhuan{
			background: white;
			.margin-bottom(10);
			p{
			.h(18);
			.fs(16);
			.margin(10,0,10,8);
			.padding-left(10);
			border-left:2px solid red;
			}
			.jing1{
				display: flex;
				li{

					flex:1;
					.h(50);
					img{
						width:100%;
						height: 100%;
					}
				}
			}
			.jing2{
				display: flex;
				li{
					flex:1;
					.h(98);
					img{
						width:100%;
						height: 100%;
					}
				}
			}
		}
		.jingxuan{
			.margin-bottom(10);
			.fs(16);
			clear: both;
			background:white;
			.tou{
				.h(60);
				.lh(60);
				text-align:center;
			}
			ul{
				
				li{
					float:left;
					.margin-left(8);
					.w(176);
					.j_img{
						.h(176);
						.w(176);
						img{
							width: 100%;
							height: 100%;
						}
					}
					.j_title{
						.h(35);
						.fs(14);
						 overflow : hidden;
				        text-overflow: ellipsis;
				        display: -webkit-box;
				        -webkit-line-clamp:2;
				        -webkit-box-orient: vertical;
					}
					.j_price{
						.h(30);
						color:red;
						.margin-top(5);
					}
				}
			}
		}
	}


</style>