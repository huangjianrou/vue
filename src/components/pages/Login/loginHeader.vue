<template>
	<div class="loginHeader">
		<ul>
			<li>
				<i class="icon iconfont icon-iconindexnor"></i>
			</li>
			<li class="zhu">
				<span v-if="show">{{login[0]}}</span>
				<span class="zhu" v-if="!show">{{reg[0]}}</span>
			</li>
			<li>
				<router-link :to="{path:'/Reg'}" >
				<span v-if="show"  class="active">{{login[1]}}</span>
				</router-link>
				<router-link :to="{path:'/Login'}" >
				<span v-if="!show" class="active">{{reg[1]}}</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	
	export default{
		props:['show'],
		name:'My',
		components:{
			
		},
		data(){
			return {
				name:"my",
				login:['登录','注册'],
				reg:['会员注册','登录'],
			}
			
		},
		methods:{
			
		},
		created(){
			
			
			
		}
	}
</script>


<style lang='less' scoped>
@import '../../../styles/main.less';	
	.loginHeader{
		ul{
			.h(43);
			.w(375);
			display: flex;
			justify-content: space-between;

			li{
				.w(43);
				.h(43);
				.fs(16);
				display: flex;
				align-items: center;
				justify-content: center;
				.active{
					color:red;
					.fs(14);
				}
			}
			.zhu{
				.w(100);
				text-align: center;
			}
		}
	}
</style>