import React, { Component } from 'react';
import Header from '../common/Header';
import image from '../assets/img/header-bg.jpg';

// Re-usable components
import Services from '../common/Services';
import Porfolio from '../common/Porfolio';
import Team from '../common/Team';
import About from './About';
import Clients from '../common/Clients';

class Home extends Component {
    render() {
        return (
            <div>
                <Header 
                    title="It's Nice To Meet You" 
                    subtitle="Welcome To Our Studio!"
                    btnText="TELL ME MORE"
                    link="/services"
                    // image="/img/header-bg.jpg"
                    image={image}
                    showBtn={true}/>

                <Services/>

                <Porfolio/>
                
                <About/>

                <Team/>
                
                <Clients/>
            </div>
        )
    }
}

export default Home;