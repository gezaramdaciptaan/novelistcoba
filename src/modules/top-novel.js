import React from 'react';
import { Layout, Row } from 'antd';
import '../assets/css/top-novel.css'
import firebase from '../firebase'
const { Content } = Layout;



function TopNovel(){
    const[novels,setNovels] = React.useState([])

    React.useEffect(()=>{
      const fetchData = async () => {
        const db = firebase.firestore()
        const data = await db.collection("topnovel").get()
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
                    <img src={novel.Cover} width="100" height="150"  />
                    </div>  
                    <div className="content">
                        <p className="title"> <font color="#CD5C5C">  {novel.Judul} </font> </p>
                        <p className="penulis"> <font color="#CD5C5C">  {novel.Penulis} </font> </p>
                        <p className="desc"> {novel.Sinopsis} </p>
                    </div>
                    <hr color="#CD5C5C" />
                </div>
                )}
                </Row>
                </Content>
            </Layout>
        );
    }

    
    


export default TopNovel;
