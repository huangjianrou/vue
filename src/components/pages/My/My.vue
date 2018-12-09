<template>
	<div class="my">
		<div class="myTop" :style="{background:rgb}">
			<div class="header">
				<a href="">
					<i class="iconfont icon-shezhi"></i>
				</a>
				<span>
					 <i class="icon iconfont icon-more" v-on:click='isTurn'></i>
				</span>
			</div>
			<div class="myLogin">
				<i>
					<span class="img_deng">
						<i class="icon iconfont icon-ren"></i>
					</span>
				<router-link :to="{path:'/Login'}" tag="i">
					<span class="dian" v-if="!userName">点击登录</span>
				</router-link>
					<span class="dian" v-if="userName">{{userName}}</span>
				</i>
			</div>	

			<div class="myShang">
				<ul>
					<li>
						 <i class="icon iconfont icon-xin"></i>
						 <span>商店收藏</span>
					</li>
					<li>
						 <i class="icon iconfont icon-dianpu"></i>
						 <span>店铺收藏</span>
					</li>
					<li>
						<i class="icon iconfont icon-zuji"></i>
						 <span>我的足迹</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="dingDan">
			<span class="d_qian">
				<i class="icon iconfont icon-wodedingdan"></i>
				<i>我的订单</i>
			</span>
			<span class="d_hou">
				<i>查看全部订单</i>
				<i class="fa fa-angle-right" aria-hidden="true"></i>
			</span>
		</div>
		<div class="dai">
			<ul>
				<li>
					 <i class="icon iconfont icon-daifukuan"></i>
					<span>待付款</span>
				</li>
				<li>
					 <i class="icon iconfont icon-daishouhuo1"></i>
					<span>待收货</span>
				</li>
				<li>
					 <i class="icon iconfont icon-daishouhuo1"></i>
					<span>待自提</span>
				</li>
				<li>
					 <i class="icon iconfont icon-daipingjia01"></i>
					 <span>待评价</span>
				</li>
				<li>
					<i class="icon iconfont icon-tuikuan"></i>
					<span>退款/退货</span>
				</li>
			</ul>
		</div>
		<div class="dingDan">
			<span class="d_qian">
				 <i class="icon iconfont icon-wodecaichan"></i>
				<i>我的财产</i>
			</span>
			<span class="d_hou">
				<i>查看全部财产</i>
				<i class="fa fa-angle-right" aria-hidden="true"></i>
			</span>
		</div>
		<div class="guan guan1">
			<span class="guan_qian">
				 <i class="icon iconfont icon-xiao"></i>
				<i>我的分销管理</i>
			</span>
			<span class="guan_hou">
				<i class="fa fa-angle-right" aria-hidden="true"></i>
			</span>
		</div>
		<div class="guan">
			<span class="guan_qian">
				 <i class="icon iconfont icon-weibiaoti2fuzhi08"></i>
				<i>收货地址管理</i>
			</span>
			<span class="guan_hou">
				<i class="fa fa-angle-right" aria-hidden="true"></i>
			</span>
		</div>
		<div class="guan">
			<span class="guan_qian">
				 <i class="icon iconfont icon-shezhi"></i>
				<i>用户设置</i>
			</span>
			<span class="guan_hou">
				<i class="fa fa-angle-right" aria-hidden="true"></i>
			</span>
		</div>
		<div class="myBottom">
			<Bottom></Bottom>
		</div>
		<div class="findTab" v-show='isOk'>
			<findTab :del="del"></findTab>	
			
		</div>

	</div>
</template>
<script type="text/javascript">
	import Bottom from '../../com/bottom.vue';
	import findTab from '../Find/findTab.vue';
	export default{
		name:'My',
		components:{
			Bottom,findTab
		},
		data(){
			return {
				name:"my",
				isOk:false,
				del:false,
				rgb:'',
				r:'',
				g:'',
				b:'',
				userName:''
			}
			
		},
		methods:{
			isTurn(){
				this.isOk=!this.isOk
			},
			timer(){
				var r=parseInt(Math.random()*256);
				var g=parseInt(Math.random()*256);
				var b=parseInt(Math.random()*256);
				this.r=r;
				this.g=g;
				this.b=b;
			  
				this.rgb="rgb(" +this.r + ',' +this.g+ ',' +this.b+ ")";
			}
		},
		created(){
			setInterval(this.timer, 3000);
			this.userName=window.localStorage.getItem('userName');
			
		}
	}
</script>


<style lang='less' scoped>
@import '../../../styles/main.less';	
	.my{
		background: #ddd;
		.fs(16);
		.w(375);
		.myTop{
			.w(375);
			.h(242);
			background:pink;
			.header{
				.h(42);
				display: flex;
				 justify-content: space-between;
				 a,span{
				 	display: block;
				 	height:100%;
				 	.w(42);
				 	color:white;
				 	align-content:center;
				 	display: flex;
				 	align-items:center;
				 	justify-content:center;
				 }
			}
			.myLogin{
				.h(132);
				display: flex;
				justify-content:center;
				i{
					color:white;
					.img_deng{
						display: block;
						.w(88);
						.h(88);
						border-radius: 50%;
						background:#3b3b3b;
						text-align:center;
						box-sizing: border-box;
						.padding-top(20);
						i{
							.fs(50);

						}
					}
					.dian{
						display: block;
						.margin-top(5);
						text-align:center;
						.w(88);
						.fs(20);
					}
				}
			}
			.myShang{
				.h(66);
				ul{
					z-index: 100;
					.h(66);
					background: rgba(100, 120, 100, 0.2);
					display: flex;	
					li{
						.fs(16);
						color:white;
						flex:1;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						i{
							.fs(22);
						}
					}
				}
			}
		}

		.dingDan{
			background: white;
			.h(45);
			.margin-top(8);
			display: flex;
			.padding(0,10,0,10);
			justify-content: space-between;
			border-bottom:1px solid #ccc;
			span{
				display: flex;
				align-items: center;
			}
			
			.d_qian{
				.icon-wodedingdan{
					color:skyblue;
				}
				.icon-wodecaichan{
					color:green;
				}
				i{
					.margin-right(5);
				}
			}
			.d_hou{
				i{
					.fs(14);
					color:#666;
				}
				.fa-angle-right{
					.fs(16);
					.margin-left(5);
				}
			}
		}
		.dai{
			.h(60);
			background: white;
			ul{
				.h(60);
				display: flex;
				li{
					flex:1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					i{
						color:black;
						.fs(22);
					}
					span{
						.fs(13);
						color:#666;
					}
				}
			}
		}
		.guan1{
			.margin-top(10);
		}
		.guan{
			background: white;
			.h(45);
			display: flex;
			.padding(0,10,0,10);
			justify-content: space-between;
			border-bottom:1px solid #ccc;
			span{
				display: flex;
				align-items: center;
			}
			.guan_qian{
				i{
					.margin-right(5);
				}
				.icon-xiao{
					color:skyblue;
				}
				.icon-weibiaoti2fuzhi08{
					color:purple;
				}
				.icon-shezhi{
					color:pink;
				}
			}
			
		}
		.findTab{
			position: fixed;
			.right(5);
			.top(35);
			z-index: 200;
		}
	}
</style>