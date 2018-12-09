<template>
	<div class="Reg">
		<div class="regHeader">
			<regHeader :show=show></regHeader>
		</div>
		<div class="regTab">
			<ul>
				<li v-for="(item,index) in list">
					<p :class="index==lh? 'lActive' : '' " v-on:click="lh=index">
						<i :class="item.i" aria-hidden="true"></i>
						<span>{{item.span}}</span>
					</p>
				</li>	
			</ul>
		</div>
		<div class="pu">
			<ul>
				<li>
				    <h4>用户名</h4>
				    <input type="text" ref="inp1" placeholder="请输入6-20个字符" @blur="yan">
				</li>
				<li>
				    <h4>设置密码</h4>
				    <input type="password" ref="inp2" placeholder="请输入6-20个字符" @blur="yan">
				</li>
				<li>
				    <h4>确认密码</h4>
				    <input type="password" ref="inp3" placeholder="请再次输入密码" @blur="yan">
				</li>
				<li>
				    <h4>邮箱</h4>
				    <input type="text" ref="inp4" placeholder="请输入常用邮箱地址" @blur="yan">
				</li>
			</ul>
		</div>
		<div class="xie">
			<input type="checkbox" name="" ref="inp5" checked="checked">同意
			<a href="">用户注册协议</a>
		</div>
		<div class="zhu" ref="zhu" @click="pan">
			<span >注册</span>
		</div>
	</div>
</template>
<script type="text/javascript">
	import regHeader from './loginHeader';
	export default{
		name:'My',
		components:{
			regHeader
		},
		data(){
			return {
				name:"reg",
				show:false,
				lh:0,
				list:[
					{
						i:'fa fa-user-o',
						span:'普通登录',
					},
					{
						i:'fa fa-mobile',
						span:'手机注册'
					}
				],
				
				val1:'',
				val2:'',
				val3:'',
				val4:'',
				val5:'',
				isOk1:false,
				isOk2:false,
				isOk3:false,
				isOk4:false
			}
			
		},
		methods:{
			yan(){
				
				this.val1=this.$refs.inp1.value;
				this.val2=this.$refs.inp2.value;
				this.val3=this.$refs.inp3.value;
				this.val4=this.$refs.inp4.value;
				if(this.val1&&this.val2&&this.val3&&this.val4&&this.$refs.inp5.checked){
					this.$refs.zhu.style.background="red";				
				}else{
					this.$refs.zhu.style.background="";
				}
				
			},
			pan(){
				var reg=/^\w{6,20}$/;
				var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/; 
				if(reg.test(this.val1)){
					this.isOk1=true;
				}
				if(reg.test(this.val2)){
					this.isOk2=true;
				}
				if(this.val2==this.val3){
					this.isOk3=true;
				}
				if(re.test(this.val4)){
					this.isOk4=true;
				}
				if(this.isOk1&&this.isOk2&&this.isOk3&&this.val4){
					alert("注册成功，请登录");
					this.$router.push({path:'/login'})
					window.localStorage.setItem('userName', this.val1);
					window.localStorage.setItem('password', this.val2);
					window.localStorage.setItem('email', this.val4);
				}else{
					alert("注册失败");
				}
			}
		},
		created(){
			
		},
	}
</script>


<style lang='less' scoped>
@import '../../../styles/main.less';
	html,body{
		height: 100%;
		.w(375);
		
	}
	.Reg{
		.fs(14);
		height: 100%;
		.w(375);
		background:#eee;
		.regHeader{
		}
		.regTab{
			.fs(16);
			ul{
				display: flex;
				.h(42);
				.margin-bottom(15);
				background:white;
				li{
					.h(42);
					flex:1;
					text-align: center;
					display: flex;
					justify-content: center;

					p{
						.w(80);
						.h(42);
						span{
							.fs(14);
							.lh(42);
						}
						i{
							.fs(16);
							.lh(42);
						}
					}
				}
				.lActive{
					color:red;
					border-bottom:1px solid red;
				}
			}
		}
		.pu{
			.fs(14);
			ul{		
				background:white;		
				li{
					.margin-left(10);
					.h(42);
					border-bottom:1px solid #eee;
					display: flex;
					h4{
						.w(66);
						.lh(42);				
					}
				}
			}
		}
		.xie{
			.h(20);
			.margin(20,0,20,0);
			.padding-left(30);
		}
		.zhu{
			.h(40);
			text-align: center;
			background:#ccc;
			.lh(40);
			.fs(18);
			.w(337);
			.margin-left(19);
		}
	}
</style>