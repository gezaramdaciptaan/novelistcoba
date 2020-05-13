import React from 'react';
import { Layout,Card,Row,Button} from 'antd';
import '../assets/css/history.css';
import firebase from '../firebase';
import ButtonAksi from './button';
import EditNovel from './editnovel-component';
import { EditTwoTone } from '@ant-design/icons';

const { Content, Header,Footer } = Layout;



function History() {
    const [shownovel, setShowNovel] = React.useState([]);
  
    React.useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore()
            const data = await db.collection("Novelist").get()
            setShowNovel(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        }
        fetchData();
    }, []);
    
    return (
        
        <div>
        <Layout style={{padding:'16px auto'}}>
            <Header style={{background: '#fff'}}>
            <Content style={{padding : '16px auto'}}>
              <Button shape="round"  style={{backgroundColor:'white', margin: '16px auto'}}>
                        <h4>History</h4>
              </Button>
              <Row justify="center">
              {shownovel.map(novel =>
               <Card  style={{ width: 800, height: 1500 }}>
                 <div className="img-thumb">
                    <img src={novel.Cover} width="200" height="300"  />
                </div>                
                <center> <p> <font color='#CD5C5C'><b>{novel.Judul} </b></font> <b></b></p> </center>
                <center> <p><font color='#CD5C5C'> {novel.Penulis}</font></p> </center>
                <center> <a href="/History">
                    <ButtonAksi novel={novel}/>
                  </a>
                </center>
                 <center> {shownovel.map(novel =>
              <EditNovel novel={novel}> </EditNovel>
              )}</center>
               </Card>
              )}
              <Row>
             
              </Row>
              </Row>
              
              
                </Content>
                <Footer style={{backgroundColor:'white' , textAlign: 'center'}}>Novelist ©2020 </Footer>
            </Header>
        </Layout>
        </div>
    );
  }
       
  
  export default History;