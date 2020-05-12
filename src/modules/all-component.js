import React from 'react';
import {
  Form,
  Input,
  Button,
  Layout,
  Row
} from 'antd';
import  { Select} from 'antd';
import {Link} from 'react-router-dom';
import '../assets/css/all.css'
import firebase from '../firebase'
const { Content, Header, Footer } = Layout;
const {Option} = Select;

function BuyNow() {

    const [newCover, setCover] = React.useState()
    const [newJudul, setJudul] = React.useState()
    const [newPenulis, setPenulis] = React.useState()
    const [newSinopsis, setSinopsis] = React.useState()
   
   
    const onCreate = () => {
      const db = firebase.firestore()
      db.collection('Novelist').add({Cover:newCover, Judul: newJudul, Penulis: newPenulis, Sinopsis: newSinopsis})
    }
  
    return (
      <Layout  style={{padding:'16px auto', background: '#fff'}}>
          <Header style={{background: '#fff'}}>
          <Content style={{padding : '16px auto'}}>
          <center>
          <Button shape="round"  style={{backgroundColor:'white', margin: '16px auto'}}>
                <h4>Add Now</h4>
          </Button>
          </center>
          
  
        <Form
          style={{padding: '16px auto'}}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 10 }}
        > 
          <Form.Item label="Masukkan link cover" name="Cover" style={{margin : '16px auto'}}>
            <Input value={newCover} onChange={(e) => setCover(e.target.value)}/>
          </Form.Item>
          <Form.Item label="Judul" name="Judul" style={{margin : '16px auto'}}>
            <Input value={newJudul} onChange={(e) => setJudul(e.target.value)}/>
          </Form.Item>
          <Form.Item label="Penulis" name="penulis" style={{margin : '16px auto'}}>
            <Input value={newPenulis} onChange={(e) => setPenulis(e.target.value)} />
          </Form.Item>
          <Form.Item label="Sinopsis" name="Sinopsis" style={{margin : '16px auto'}}>
            <Input value={newSinopsis} onChange={(e) => setSinopsis(e.target.value)} />
          </Form.Item>
        </Form>
        <center>
        <Button  onClick={onCreate} type="primary" ghost style={{padding: '16px auto'}}>Finish</Button>
        </center>        
      </Content>
      <Footer style={{backgroundColor:'white' , textAlign: 'center'}}>Kelompok Film ©2020 </Footer>
      </Header>
      </Layout>
    );
  };
  
  export default BuyNow;