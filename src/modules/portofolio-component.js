import React from 'react';
import { Layout, Row } from 'antd';
import '../assets/css/portofolio.css'
import firebase from '../firebase'
const { Content } = Layout;

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
                        <img src={novel.Foto} width="120" height="100"  />
                    </div>  
                    <div className="content">
                        <p className="title"> {novel.Nama} </p>
                        <p className="penulis"> {novel.Tentang} </p>
                        
                    </div>
                </div>
                )}
                </Row>
                </Content>
            </Layout>
        );
    }



export default PortofolioComponent;