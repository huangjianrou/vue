<template>
	<div class="axiosGet">
		
	</div>
</template>
<script type="text/javascript">

	import Vue from 'vue';
	export default{
		name:'axiosGet',
		components:{},
		data(){
			return {
				shuju:[]
			}
		},
		methods:{
			getdata(){
				this.$axios.get('http://www.hangowa.com/mo_bile/index.php',{params:{
					   act:'index',
					   op:'special',
					   special_id:1
				}})
				.then((str)=>{	
					this.shuju=str.datas.list;
					this.$emit('child',this.shuju);
				})
				.catch((err)=>{
					console.log(err)
				})
				
			},
			

		},
		created(){
			this.getdata();
			
		},
		mounted(){
			
		}
	}
</script>


<style lang='less' scoped>
@import '../../styles/main.less';

</style>