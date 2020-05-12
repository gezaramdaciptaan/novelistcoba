import React from 'react';
import {Button} from 'antd';

import { DeleteTwoTone } from '@ant-design/icons';
import firebase from '../firebase'

const ButtonAksi = ({novel}) => {
    const onDelete = () => {
        const db = firebase.firestore()
        db.collection('Novelist').doc(novel.id).delete()
    }

    return (
        
            <Button onClick={onDelete}><DeleteTwoTone twoToneColor="#CD5C5C"/></Button>
        
    );
}

export default ButtonAksi;