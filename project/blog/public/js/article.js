;(function($){
	// console.log(ClassicEditor)
	ClassicEditor
	.create(document.querySelector('#content'),{
		language:'zh-cn',
	})
	.then(editor=>{
		window.editor = editor
	})
	.catch(err=>{
		console.log(err)
	})
})(jQuery)