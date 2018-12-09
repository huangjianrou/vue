<template>
	<div class="Login">
		<div class="loginHeader">
			<loginHeader :show=show></loginHeader>
		</div>
		
		<div class="loginContainer">
			<div class="us comm">
				<span>账&nbsp;&nbsp;&nbsp;&nbsp;户</span><input ref="inp1" type="text" placeholder="请输入用户名/已验证手机">
			</div>
			<div class="pas comm">
				<span>密&nbsp;&nbsp;&nbsp;&nbsp;码</span><input ref="inp2" type="password" placeholder="请输入登录密码">
			</div>
		</div>

		<div class="state">
			<input type="checkbox" name="">七天免登录
			<span><a href="">忘记密码？</a></span>
		</div>
		<div class="dengLu" @click="dengLu">登录</div>
	</div>
</template>
<script type="text/javascript">
	import loginHeader from './loginHeader';
	export default{

		name:'My',
		components:{
			loginHeader
		},
		data(){
			return {
				name:"my",
				show:true,
				userName:'',
				password:'',
				email:''

			}
			
		},
		methods:{
			dengLu(){
				if(this.$refs.inp1.value==this.userName||this.$refs.inp1.value==this.email){
					if(this.$refs.inp2.value==this.password){
						alert("登录成功")
						
						this.$router.push({path:'/My'});
					}else{
						alert("登录失败");
					}
				}else{
					alert("登录失败");
				}
				
			}
		},
		created(){
			this.userName=window.localStorage.getItem('userName');
			this.password=window.localStorage.getItem('password');
		    this.email=window.localStorage.getItem('email');
		    console.log(this.userName);
		    console.log(this.password);
		    console.log( this.email);
		}
	}
</script>


<style lang='less' scoped>
@import '../../../styles/main.less';
	html,body{
		height: 100%;
		.w(375);
		
	}	
	.Login{
		.w(375);
		.fs(14);
		height: 100%;
		background: #eee;
		.loginContainer{
			background:white;
			.comm{
				.h(43);
				.w(364);
				
				border-bottom: 1px solid #eee;
				.margin-left(10);
				span{
					display: inline-block;
					.w(66);
					.h(43);
					
					.lh(43);
					text-align: right;
					.margin-right(10);
					vertical-align: top;

				}
				input{
					.w(276);
					.h(43);
					
					vertical-align: top;
				}
			}
		}
		.state{
			.w(287);
			.h(20);
			.margin(20,0,30,44);
			span{
				.margin-left(100);
			}

		}
		.dengLu{
			.w(337);
			.h(40);
			.fs(16);
			color:white;
			background:red;
			border-radius:5px;
			.lh(40);
			text-align: center;
			.margin-left(19);
		}
	}
</style>