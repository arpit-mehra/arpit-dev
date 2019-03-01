import '../styles/app.css';
import Header from '../components/common/header';
import Footer from '../components/common/footer'
import React from "react";

import { Layout } from 'antd';


const { Content } = Layout;

const Index = () => (
    <div>
        <Layout>
            <Header/>
            <Content>Content

            </Content>
            <Footer/>
        </Layout>
    </div>
);

export default Index