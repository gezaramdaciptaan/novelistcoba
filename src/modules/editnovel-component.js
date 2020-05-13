import React from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';
import {
  Form,
  Input,
  Button,
  Layout,Card,Row
} from 'antd';
import '../assets/css/editnovel.css';

const { Content, Header,Footer } = Layout;


const EditNovel = ({ novel }) => {
  
  const [Cover, setCover] = React.useState()
  const [Judul, setJudul] = React.useState()
  const [Penulis, setPenulis] = React.useState()
  const [Sinopsis, setSinopsis] = React.useState()

  // const [newEmail, setEmail]= React.useState(ticket.newEmail);
  // const [newName, setName]= React.useState(ticket.newName);
  // const [newTotalTicket, setTotalTicket]= React.useState(ticket.newTotalTicket);
  // const [newChoosenMovie, setChoosenMovie]= React.useState(ticket.newChoosenMovie);
  
  const [shownovel, setShowNovel] = React.useState([]);

  React.useEffect(() => {
      const fetchData = async () => {
          const db = firebase.firestore()
          const data = await db.collection("Novelist").get()
          setShowNovel(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      }
      fetchData();
  }, []);
  

  const onUpdate = () => {
    const db = firebase.firestore()
    db.collection('Novelist').doc(novel.id).set({...novel, Cover,Judul,Penulis,Sinopsis})
  }

  


  return (
    <Layout style={{padding:'16px auto', background: '#fff'}}>
        <Header style={{background: '#fff'}}>
        <Content style={{padding : '16px auto'}}>

        
      <div> 
      <Form
        
        style={{padding: '16px auto'}}
        labelCol={{ span: 15 }}
        wrapperCol={{ span: 15 }}
      >
        
        <center>
        <Form.Item label="Masukkan link cover" name="Cover" style={{margin : '16px auto'}}>
          <Input value={Content} onChange={(e) => setCover(e.target.value)} />
        </Form.Item>
        </center>      
      </Form>
      <center>
      <Button onClick={onUpdate} type="primary" ghost style={{padding: '16px auto'}}><a href="/History">Update</a></Button>
      </center>
      </div>
     
      
      
      
    </Content>
    
    </Header>
    </Layout>
  );
};

export default EditNovel;