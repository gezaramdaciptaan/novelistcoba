import React from 'react';
import { Layout, Row } from 'antd';
import '../assets/css/portofolio.css'
import firebase from '../firebase'
const { Content, Header, Footer } = Layout;

function PortofolioComponent (){
    const[novels,setNovels] = React.useState([])

    React.useEffect(()=>{
      const fetchData = async () => {
        const db = firebase.firestore()
        const data = await db.collection("Author").get()
        setNovels (data.docs.map(doc=>doc.data()))
      }
      fetchData()
    }, [] )

        return(
            <Layout className="landing-container">
                <Content style={{ overflow: "hidden" }}>
                <Row className="section-container">
                {novels.map (novel =>
                <div className="post">
                    <div className="img-thumb">
                        <img src={novel.Foto} width="200" height="200"  />
                    </div>  
                    <div className="content">
                    <center>                   
                        <p className="title" > <font color="#CD5C5C"> {novel.Nama} </font></p>
                        <p className="penulis"> {novel.Tentang} </p>
                    </center>
                    </div>
                    <hr color="#CD5C5C" />
                </div>
                )}
                </Row>
                </Content>
                <Footer style={{backgroundColor:'white' , textAlign: 'center'}}>Novelist ©2020 </Footer>
            </Layout>
        );
    }



export default PortofolioComponent;