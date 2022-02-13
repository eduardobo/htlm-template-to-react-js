import React, {Component} from 'react';
import Client from './Client';

const clients = [
    {image: 'img/logos/envato.jpg'},
    {image: 'img/logos/designmodo.jpg'},
    {image: 'img/logos/themeforest.jpg'},
    {image: 'img/logos/creative-market.jpg'},
]

class Clients extends Component {
    render() {
        return (
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        {clients.map((client, i) => {
                            return <Client key={i} {...client} />
                        })}                    
                    </div>
                </div>
            </section>
        )
    }
}

export default Clients;