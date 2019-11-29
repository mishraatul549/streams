import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM, 
    DELETE_STREAM,
    EDIT_STREAM
} 
from './types';
import Stream from '../api/Stream';
import history from '../history';

export const signIn = (userId)=>{
    return {
        type: SIGN_IN,
        payload:userId,
    };
}
export const signOut = ()=>{
    return {
        type : SIGN_OUT,
    };
}
export const createStream = (formValues)=> async  (dispatch,getState)=>{
    const Id = getState().auth.userId;
    const response =await Stream.post('/streams',{...formValues,["userId"]:Id});

    dispatch({type:CREATE_STREAM,payload:response.data});
    // her we are going to doo programmatic navigation 
    // tos end user back to stream list page
    history.push('/');
}

export const fetchStreams = () => async (dispatch)=>{
    const response = await Stream.get('/streams');

    dispatch({type:FETCH_STREAMS,payload:response.data});
} 

export const fetchStream = (id) => async (dispatch)=>{
    const response = await Stream.get(`/streams/${id}`);

    dispatch({type:FETCH_STREAM,payload:response.data});
} 

export const editStream = (id,formValues) => async (dispatch)=>{
    const response = await Stream.patch(`/streams/${id}`,formValues);

    dispatch({type:EDIT_STREAM,payload:response.data});
    history.push('/');
} 

export const deleteStream = (id) => async (dispatch)=>{
    await Stream.delete(`/streams/${id}`);

    dispatch({type:DELETE_STREAM,payload:id})
    history.push('/')
} 