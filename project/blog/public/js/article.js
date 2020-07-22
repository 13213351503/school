;(function($){
	// console.log(ClassicEditor)
	ClassicEditor
	.create(document.querySelector('#content'),{
		language:'zh-cn',
		ckfinder:{
			uploadUrl:'/article/uploadImg'
		}
	})
	.then(editor=>{
		window.editor = editor
	})
	.catch(err=>{
		console.log(err)
	})
})(jQuery)