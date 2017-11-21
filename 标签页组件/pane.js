Vue.component('pane',{
	name:'pane',
	tempalte:'\
	<div class="pane" v-show="show">\
	<slot></slot>\
	</div>',
	props:{
		name:{
			type:string
		},
		label:{
			type:string,
			default:''
		}
	},
	data:function(){
		return {
			show:true
		}
	}
});