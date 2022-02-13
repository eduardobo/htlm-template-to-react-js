import React, {Component} from 'react';
import Profile from './Profile'

const teamMembers = [ 
    {name: 'Kay Garland',  title: 'Lead Designer', image: 'img/team/1.jpg'},
    {name: 'Larry Parker',  title: 'Lead Marketer', image: 'img/team/2.jpg'},
    {name: 'Diana Pertersen',  title: 'Lead Developer', image: 'img/team/3.jpg'},
]

class Team extends Component {
    render() {
        return (
            <section className="bg-light" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>

                    <div className="row">
                        {teamMembers.map((member, i) => {
                            return <Profile key={i} {...member} />
                        })}
                    </div>

                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Team;