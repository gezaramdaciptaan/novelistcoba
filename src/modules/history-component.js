import React from 'react';
import { Layout,Card,Row,Button} from 'antd';
import '../assets/css/history.css';
import firebase from '../firebase';
import ButtonAksi from './button';
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
      <Layout className="landing-container" style={{padding:'16px auto'}}>
          <Header style={{background: '#fff'}}>
          <Content style={{padding : '16px auto'}}>
            <center>
                <Button shape="round"  style={{backgroundColor:'white', margin: '16px auto'}}>
                      <h4>History</h4>
                </Button>
            </center> 
            <Row className="section-container">
            {shownovel.map(novel =>
            <div className="post">
                
                <div className="img-thumb">
                    <img src={novel.Cover} width="200" height="300"  />
                </div>
                <div className="content">
                    <center>
                    <p className="title"><b> <font color="#CD5C5C">{novel.Judul}</font></b></p>
                    </center>
                    <center>
                    <p  className="penulis"> <font color="#CD5C5C">{novel.Penulis}</font></p>
                    </center>                   
                    <p className="desc">  {novel.Sinopsis}</p>
                </div>  
                <center>
                <div className="button">
                    <a href="/EditNovel">
                        <Button><EditTwoTone /></Button>
                    </a>
                    <a href="/History">
                        <ButtonAksi novel={novel}/>
                    </a>
                </div>
                </center>                                      
                <hr size="0,1px" color="#CD5C5C" />
            </div>
            
            )}
            </Row>
              </Content>
              <Footer style={{backgroundColor:'white' , textAlign: 'center'}}>Novelist ©2020 </Footer>
          </Header>
      </Layout>
      </div>
  );
}
     

export default History;