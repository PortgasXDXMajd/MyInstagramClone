import { db, auth } from '../../components/Firebase';
import { USER_STATE_CHANGED } from '../constants';


export function fetchUser(){
    return((dispatch)=>{
        db.collection('users')
        .doc(auth.currentUser.uid)
        .get()
        .then((snapshot)=>{
            if(snapshot.exists){
                dispatch({type: USER_STATE_CHANGED, currentUser: snapshot.data()})
            }else{
                console.log('data does not exist')
            }
        }).catch((error)=> console.log(error))
    })
}