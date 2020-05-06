import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import '../src/assets/css/App.css';
import Navbar from './common/layout/navbar-landing';
import {Novels} from './novels'

import Routing from './common/router/router'
import firebase from './firebase'
function App() {
  const[novels,setNovels] = React.useState([])

  React.useEffect(()=>{
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("novels").get()
      setNovels (data.docs.map(doc=>doc.data()))
    }
    fetchData()
  }, [] )

    return (
      <ul>
      {novels.map (novel =>(
        <li key={novel.judul}>{novel.judul}>
        <novels/>
        </li>

      ))}
      
</ul>
      
    );
  }
  


export default App;
