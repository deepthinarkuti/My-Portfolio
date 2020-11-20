import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Drawer title={<Link style={{ textDecoration: 'none', color: 'black'}} to="/">My Portfolio</Link>}>
                        <Navigation>
                            <Link to="/workexperience">Work Experience</Link>
                            <Link to="/projects">Projects</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content>
                </Layout>
            </div>

        );
    }
}

export default App;