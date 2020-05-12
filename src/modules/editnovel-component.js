import React from 'react';
import {
  Form,
  Input,
  Button,
  Layout,
  Row
} from 'antd';
import '../assets/css/editnovel.css'
import firebase from '../firebase'
const { Content, Header, Footer } = Layout;

const EditNovel = ({ novel }) => {
    const [newCover, setCover] = React.useState(novel.newCover);
    const [newJudul, setJudul] = React.useState(novel.newJudul);
    const [newPenulis, setPenulis] = React.useState(novel.newPenulis);
    const [newSinopsis, setSinopsis] = React.useState(novel.newSinopsis);
    

  
    const onUpdate = () => {
      const db = firebase.firestore()
      db.collection('Novelist').doc(novel.id).set({...novel, newCover,newJudul,newPenulis,newSinopsis})
    }
  
    
  
  
    return (
      <Layout style={{padding:'16px auto', background: '#fff'}}>
          <Header style={{background: '#fff'}}>
          <Content style={{padding : '16px auto'}}>
          <Button shape="round"  style={{backgroundColor:'white', margin: '16px auto'}}>
                <h4>Edit Novel</h4>
          </Button>
  
        <Form
          style={{padding: '16px auto'}}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 10 }}
        >
          {/* {novels.map(novel => */}
          <Form.Item label="Cover" name="Cover" style={{margin : '16px auto'}}>
            <Input value={newCover} onChange={(e) => setCover(e.target.value)}/>
          </Form.Item>
          <Form.Item label="Judul" name="Judul" style={{margin : '16px auto'}}>
            <Input value={newJudul} onChange={(e) => setJudul(e.target.value)} />
          </Form.Item>
          <Form.Item label="Penulis" name="Penulis" style={{margin : '16px auto'}}>        
            <Input value={newPenulis} onChange={(e) => setPenulis(e.target.value)} />
          </Form.Item>
          <Form.Item label="Sinopsis" name="Sinopsis" style={{margin : '16px auto'}}>
            <Input value={newSinopsis} onChange={(e) => setSinopsis(e.target.value)}/>
          </Form.Item>
          // )} 
        </Form>
        <Button type="primary" ghost style={{padding: '16px auto'}}>Update</Button>
      </Content>
      <Footer style={{backgroundColor:'white' , textAlign: 'center'}}>Novelist ©2020 </Footer>
      </Header>
      </Layout>
    );
  };
  
  export default EditNovel;