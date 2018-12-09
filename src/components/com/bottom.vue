<template>
	<div class="bottom">
		<ul class="state">
			<li><a href="">登录</a></li>
			<li><a href="">注册</a></li>
			<li><a href="">反馈</a></li>
			<li><a href="" style="border:none;">返回顶部</a></li>
		</ul>
		<ul class="showType">
			<li>
				<span>
					<i class="fa fa-print" aria-hidden="true"></i>
				</span>
				<p>客户端</p>
			</li>
			<li>
				<span>
					<i class="fa fa-mobile" aria-hidden="true"></i>
				</span>
				<p>触屏版</p>
			</li>
			<li>
				<span>
					<i class="fa fa-television" aria-hidden="true"></i>
				</span>
				<p>电脑版</p>
			</li>
		</ul>
		<p>Copyright&nbsp;©&nbsp;2014-2016 汉购网hangowa.com版权所有</p>
	</div>
</template>
<script type="text/javascript">

	import Vue from 'vue';
	export default{
		name:'bottom',
		components:{},
		data(){
			return {
				name:'bottom'
			}
		}	
	}
</script>


<style lang='less' scoped>
@import '../../styles/main.less';
	.bottom{
		background: white;
		.state{
			.h(40);
			.fs(14);
			display: flex;
			li{
				flex:1;
				text-align:center;
				a{
					color:black;
					display: block;
					width:100%;
					border-right:1px solid #ccc;
					.margin-top(13);
					.h(14);
				}
			}
		}
		.showType{
			.h(68);
			
			.padding-top(8);
			display: flex;
			justify-content: center;
			border-top:1px solid #ccc;
			border-bottom: 1px solid #ccc;
			li{
				display: flex;
				flex-direction: column;
				.w(95);
				align-items: center;
				span{
					display: block;
					.w(35);
					.h(35);
					border:1px solid #ccc;
					border-radius: 50%;
					text-align:center;
					.lh(18);
					i{
						.fs(20);

					}
				}

			}

		}
		p{
			.h(35);
			.fs(12);
			.lh(35);
			text-align:center;
		}
	}
</style>