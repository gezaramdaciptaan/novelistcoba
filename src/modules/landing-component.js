import React from 'react';
import { Layout, Row } from 'antd';
import '../assets/css/landing.css'
import firebase from '../firebase'
const { Content } = Layout;

function LandingComponent (){
    const[novels,setNovels] = React.useState([])

    React.useEffect(()=>{
      const fetchData = async () => {
        const db = firebase.firestore()
        const data = await db.collection("Novelist").get()
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
                    <br/>
                    <div className="img-thumb">
                        <img src={novel.Cover} width="100" height="150" resizeMode="contain" cover="center" />
                    </div>  
                    <div className="content">
                        <p className="title"> <font color="#CD5C5C">{novel.Judul}</font>  </p>
                        <p className="penulis"> <font color="#CD5C5C">{novel.Penulis}</font>  </p>
                        <p className="desc"> {novel.Sinopsis} </p>
                    </div>
                    <hr size="0,1px" color="#CD5C5C" />
                </div>
                )}
                </Row>
                </Content>
            </Layout>
        );
    }

export default LandingComponent;