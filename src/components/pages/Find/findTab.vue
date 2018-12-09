<template>
	<div class="findTab">
		<div class="ka">
			<p><span></span></p>
			<ul>
				<li><a href="">
					<i class="icon iconfont icon-iconindexnor"></i>
					<span>首页</span>

				</a></li>
				<li v-if="del"><a href="">
					<i class="icon iconfont icon-search"></i>
					<span>收搜</span>
				</a></li>
				<li><a href="">
					<i class="icon iconfont icon-cart"></i>
					<span>购物车</span>
				</a></li>
				<li v-if="del">
				
						<router-link :to="{path:'/My'}" >
							<i class="icon iconfont icon-user"></i>
							<span>我的商城</span>
						</router-link>
					
				</li>
				<li><a href="">
					<i class="icon iconfont icon-news"></i>
					<span>消息</span>	
				</a></li>
				
			</ul>
		</div>
		
	</div>
</template>
<script type="text/javascript">
	
	import Vue from 'vue';
	export default{
		props:['del'],
		name:'bottom',
		components:{},
		data(){
			return {
				name:'tab'
			}		
		},
		methods:{
			
		}
		
	}
</script>


<style lang='less' scoped>
@import '../../../styles/main.less';
	.findTab{
		.w(110);
		.fs(16);
		position: relative;
		background: #3b3b3b;
		opacity: 0.9;
		border-radius: 5px;
		.ka{
			
			p{
				position: absolute;
				.right(10);
				.top(-8);
				span{
					 display:block;
				     width:0;
				     height:0;
				     border-width:0 8px 8px;
				     border-style:solid;
				     border-color:transparent transparent #3b3b3b;/*透明 透明  黑*/
				}
			}
			ul{
				li{
					a{
						display: block;
						.w(110);
						.h(40);
						border-bottom: 1px solid #ccc;
						color:white;
						i{
							.fs(20);
							.lh(40);
							.margin-left(10);
						}
					}
				}
			}
		}
	}
	
</style>