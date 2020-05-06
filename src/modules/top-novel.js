import React, { Component } from 'react';
import { Layout, Row, Col, Modal } from 'antd'; 
import Navbar from '../common/layout/navbar-landing';
import '../assets/css/top-novel.css'  
import ButtonHome from '../common/component/button/button-home';

const { Content } = Layout; // membuat konstanta content 
const whyData = [
    {
        // // image: require(`../../../assets/images/tracking.png`),
        title: 'Kisah tanah jawa',
        penulis: 'Kisah tanah jawa',
        description: 'Apalagi yaa'
    },
    {
        // // image: require(`../../../assets/images/certificate.png`),
        title: 'Pagi',
        penulis: 'Fiersa Besari',
        description: 'Dalam proses pengerjaan'
    },
  
    {
        // // image: require(`../../../assets/images/paperless.png`),
        title: 'Rembulan',
        penulis: 'Tereliye',
        description: 'Apa yang harus saya karang:('
    },
    {
        // // image: require(`../../../assets/images/simplifying.png`),
        title: 'Crowdstroia',
        penulis: 'Nona teh dan Tuan kopi',
        description: 'Aplikasi yang berguna untuk melihat jenis kulit berdasarkan usia dan tipe kulitnya'
    },
    {
        // image: require(`../../../assets/images/news.png`),
        title: 'Ikanatassa',
        penulis: 'In a blue moon',
        description: 'Aplikasi yang berguna untuk membooking lapangan futsal'
    },
    {
        // image: require(`../../../assets/images/both-time.png`),
        title: 'Orihara',
        penulis: 'Dua Garis Biru',
        description: 'Masih dalam pengerjaan'
    }
]

class TopNovel extends Component{
    render(){
        return(
            <Layout className="landing-container">
                <Content style={{ overflow: "hidden" }}> 
                    <Row className="section-container">
                            <Col lg={24}>
                                <div className="text-soft-blue title-big bold discover-container">
                                    Paling Dicari!
                                </div>
                            </Col>
                            <Col lg={24}>
                                <div className="text-black description-discover">
                                  Daftar novel yang paling digemari
                                </div>
                            </Col>
                            <Col lg={24}>
                                <hr style={{
                                    minHeight: 8,
                                    backgroundColor: '#4D5AF2',
                                    border: 'none',
                                    maxWidth: 150,
                                    borderRadius: 26,
                                }}/>
                            </Col>                        
                            <Col lg={24} className="mt-20">
                                <Row
                                    type="flex" justify="center"
                                    className="card-why-container"
                                >
                                    {
                                        whyData.map( data =>
                                            <Col lg={8} md={12} sm={12} className="">
                                                <div className="card-why-content">
                                                    <img src={data.image}  className="card-why-image"/>
                                                    <div className="text-soft-blue semi-bold mt-10">
                                                        {data.title}
                                                    </div>
                                                    <div className="mt-10" style={{maxWidth:'260px'}}>
                                                        {data.penulis}
                                                    </div>
                                                    <div className="mt-10" style={{maxWidth:'260px'}}>
                                                        {data.description}
                                                    </div>      
                                                </div>
                                            </Col>
                                        )
                                    }
                                </Row>
                            </Col>
                        </Row>
                </Content>
            </Layout>
        );
    }
}

export default TopNovel;