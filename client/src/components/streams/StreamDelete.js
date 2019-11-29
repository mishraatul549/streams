import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';  
import Modal from '../Modal';
import {fetchStream,deleteStream} from '../../actions';
import history from '../../history';

class StreamDelete extends React.Component{
    componentDidMount(){
        console.log(this.props); 
        this.props.fetchStream(this.props.match.params.id)

    }
    renderAction(){
        return(
            <React.Fragment>
                <button className="ui button negative" onClick={()=> this.props.deleteStream(this.props.match.params.id)}>Delete</button> 
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }
    renderContent(){
        if(!this.props.stream)
            return "Are you sure you want to delete the stream?";
        else
        return `Are you sure you want to delete the stream with title; ${this.props.stream.title}`
    }
    render(){
        return(
                <Modal 
                    title="Delete Stream"
                    content={this.renderContent()}
                    actions = {this.renderAction()}
                    onDismiss={()=> history.push('/')}
                />
        );
        }
}
const  mapStateToProps= (state,ownProps)=>{
        return {stream:state.streams[ownProps.match.params.id]};
}
export  default connect(mapStateToProps,{
    fetchStream,
    deleteStream
})(StreamDelete);