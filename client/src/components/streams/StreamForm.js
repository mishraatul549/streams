import React from 'react';
import {Field,reduxForm} from 'redux-form';


class StreamForm extends React.Component{
    renderError= ({error,touched})=>{
        console.log(touched);
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
        
    }
    renderInput = ({input,label,meta})=>{
        const clas = `field ${meta.touched && meta.error?'error':''}`
        return(
            <div className={clas}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        ); 
    }
    onSubmit = (formValues)=>{
        this.props.onSubmit(formValues)
    }
    render(){
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title"/>

                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui primary button">Submit</button>
            </form>
        );
    } 
    
}
const validate  = (formValues)=>{
    const errors = {};
    if(!formValues.title){
        errors.title="You Must Enter a Title";
    }
    if(!formValues.description){
        errors.description = "You must Enter a Description";
    }
    return errors;
}

export default reduxForm({
    form:"StreamForm" ,
    validate:validate,
})(StreamForm);

