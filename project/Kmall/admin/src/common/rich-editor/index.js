import React,{Component} from 'react';
import Simditor from 'simditor'
import $ from 'jquery'
import 'node_modules/simditor/styles/simditor.css';

class RichEditor extends Component{
    constructor(props){
        super(props)
        this.toolbar = [
            'title',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'fontScale',
            'color',
            'ol',          
            'ul',            
            'blockquote',
            'code',         
            'table',
            'link',
            'image',
            'hr',            
            'indent',
            'outdent',
            'alignment',
        ]
        //发送请求携带cookie
        $.ajaxSetup({
            xhrFields:{
                withCredentials:true
            }
        })
    }
    componentDidMount(){
        this.editor = new Simditor({
            textarea:this.textarea,
            toolbar:this.toolbar,
            upload:{
                url:this.props.url,
                fileKey:'upload'
            }
        });
    }
    render(){
        return(
            <textarea ref={(textarea)=>{this.textarea = textarea}} id="editor"></textarea>
        )
    }
}
export default RichEditor;