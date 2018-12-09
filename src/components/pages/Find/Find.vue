<template>
	<div class="find">
		<div class='fHeader'>
			<div class="jian_left">
				<i class="fa fa-angle-left" aria-hidden="true"></i>
				<span>发现</span>
			</div>
			<div class="list_right">
				<!--  <i class="icon iconfont icon-more"> -->
				<i v-on:click='isTurn' class="icon iconfont icon-more"></i> 
			</div>
		</div>
		<div class="Banner">
			<Banner></Banner>
		</div>
		<div class="findTab" v-show="isOk">
			<findTab :del="del"></findTab>
		</div>
		<findList></findList>
		<Bottom></Bottom>
	</div>
</template>
<script type="text/javascript">
	import Banner from '../../com/banner.vue'
	import Bottom from '../../com/bottom.vue'
	import findList from './findList.vue'
	import findTab from './findTab.vue'
	export default{
		name:'Find',
		components:{Banner,findList,Bottom,findTab},
		data(){
			return {
				name:'发现',
				abc:'',
				isOk:false,
				del:true
			}
			
		},
		methods:{
			father(msg){
				this.abc=msg;
			},
			isTurn(){
				this.isOk=!this.isOk
			}
		}
	}
</script>


<style lang='less' scoped>
@import '../../../styles/main.less';	
	.find{
		.w(375);
		background:#e7e7e9;
		.fHeader{
			.w(375);
			position: fixed;
			.left(0);
			.top(0);
			z-index: 100;
			background:#e7e7e9;
      		.fs(28);
			.padding(10,10,10,10);
			.lh(42);
			.h(42);
			.jian_left{
				.w(235);
				.h(42);
				float: left;
				span{
					.fs(20);
					.margin-left(70);
				}
			}
			.list_right{
				.w(100);
				.h(42);
				float: right;
				i{
					.margin-left(50);
				}
			}
		}
		.Banner{
			.margin-top(62);
		}
		.findTab{
			position: fixed;
			right: 5px;
			top:50px;
			z-index: 200;
		}
	}
</style>