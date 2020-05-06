import React from 'react'
import firebase from './firebase'

export const Novels = ({novel}) => {
    const [novels,setNovels] = React.useState(novels.judul)

    const onUpdate = () => {
        const db = firebase.firestore()
        db.collection('novels').doc("0").set({...novels,judul})
    }

    return ( <>
        <input 
        Value={novels} 
        onChange={(e) => {
            setNovels(e.target.value);
            } }
            />
        <button onClick={onUpdate}>update</button>
        </>
    )

} 