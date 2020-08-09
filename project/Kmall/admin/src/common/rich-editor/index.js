import React,{Component} from 'react';
import Simditor from 'simditor'
import $ from 'jquery'
import 'node_modules/simditor/styles/simditor.css';

class RichEditor extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoaded:false
        }
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
        this.editor.on('valuechanged',()=>{
            this.setState({isLoaded:true},()=>{
                this.props.getValues(this.editor.getValue());
            })
        })
    }
    componentDidUpdate(){
        if(this.props.values && !this.state.isLoaded){
            this.editor.setValue(this.props.values)
            this.setState({
                isLoaded:true
            })
        }
    }
    render(){
        return(
            <textarea ref={(textarea)=>{this.textarea = textarea}} id="editor"></textarea>
        )
    }
}
export default RichEditor;