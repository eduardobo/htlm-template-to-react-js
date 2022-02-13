import React, {Component} from 'react';
import SingleService from './SingleService';

class Services extends Component {
    render () {
        const services = [
            {
                header: 'E-Commerce', 
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.', 
                icon: 'fa-shopping-cart'
            },
            {
                header: 'Responsive Design', 
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.', 
                icon: 'fa-laptop'
            },
            {
                header: 'Web Security', 
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.', 
                icon: 'fa-lock'
            }
        ]

        return(
            <div>
                <section id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Services</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                        </div>

                        <div className="row text-center">
                            {services.map((service, i) => {
                                // return <SingleService key={i} header={service.header} text={service.text} icon={service.icon}/>
                                return <SingleService key={i} {...service}/>
                            })}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Services;