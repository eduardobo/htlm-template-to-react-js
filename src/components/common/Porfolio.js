import React, {Component} from 'react';
import Modal from './Modal';
import PorfolioItem from './PorfolioItem';
import $ from 'jquery';

const porfolioItems = [
    {modalId: 'portfolioModal1', title: 'Threads', subtitle: 'Illustration', image: '/img/portfolio/01-thumbnail.jpg'},
    {modalId: 'portfolioModal2', title: 'Explore', subtitle: 'Graphic Design', image: '/img/portfolio/02-thumbnail.jpg'},
    {modalId: 'portfolioModal3', title: 'Finish', subtitle: 'Identity', image: '/img/portfolio/03-thumbnail.jpg'},
    {modalId: 'portfolioModal4', title: 'Lines', subtitle: 'Branding', image: '/img/portfolio/04-thumbnail.jpg'},
    {modalId: 'portfolioModal5', title: 'Southwest', subtitle: 'Website Design', image: '/img/portfolio/05-thumbnail.jpg'},
    {modalId: 'portfolioModal6', title: 'Window', subtitle: 'Photography', image: '/img/portfolio/06-thumbnail.jpg'},
]

const modals = {
    portfolioModal1: {
        title: 'PROJECT NAME',
        subtitle: 'Lorem ipsum dolor sit amet consectetur.', 
        image: 'img/portfolio/01-full.jpg', 
        description: `Use this area to describe your project. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus
                    dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
                     cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!`, 
        date: 'January 2017',
        client: 'Threads',
        Category: 'Illustration',
        button: 'Close Project'
    },
    portfolioModal2: {
        title: 'PROJECT NAME',
        subtitle: 'Lorem ipsum dolor sit amet consectetur.', 
        image: 'img/portfolio/02-full.jpg', 
        description: `Use this area to describe your project. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus
                    dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
                     cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!`, 
        date: 'January 2017',
        client: 'Explore',
        Category: 'Graphic Design',
        button: 'Close Project'
    },
    portfolioModal3: {
        title: 'PROJECT NAME',
        subtitle: 'Lorem ipsum dolor sit amet consectetur.', 
        image: 'img/portfolio/03-full.jpg', 
        description: `Use this area to describe your project. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus
                    dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
                     cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!`, 
        date: 'January 2017',
        client: 'Finish',
        Category: 'Identity',
        button: 'Close Project'
    },
    portfolioModal4: {
        title: 'PROJECT NAME',
        subtitle: 'Lorem ipsum dolor sit amet consectetur.', 
        image: 'img/portfolio/04-full.jpg', 
        description: `Use this area to describe your project. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus
                    dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
                     cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!`, 
        date: 'January 2017',
        client: 'Lines',
        Category: 'Branding',
        button: 'Close Project'
    },
    portfolioModal5: {
        title: 'PROJECT NAME',
        subtitle: 'Lorem ipsum dolor sit amet consectetur.', 
        image: 'img/portfolio/05-full.jpg', 
        description: `Use this area to describe your project. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus
                    dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
                     cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!`, 
        date: 'January 2017',
        client: 'Southwest',
        Category: 'Website Design',
        button: 'Close Project'
    },
    portfolioModal6: {
        title: 'PROJECT NAME',
        subtitle: 'Lorem ipsum dolor sit amet consectetur.', 
        image: 'img/portfolio/06-full.jpg', 
        description: `Use this area to describe your project. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus
                    dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
                     cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!`, 
        date: 'January 2017',
        client: 'Window',
        Category: 'Photography',
        button: 'Close Project'
    },
};

class Porfolio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: {
                id: '',
                title: '',
                subtitle: '',
                image: '',
                description: '',
                date: '',
                client: '',
                Category: '',
                button: '',
            },
            displayModal: false
        }
    }

    displayModal = (modalId) => {
        if(modals[modalId]) {
            let pageTop = $('body');
            console.log(pageTop);
            pageTop.addClass('modal-open');
            pageTop.css('padding-right', '17px');

            this.setState({modal: modals[modalId], displayModal: true});
        }
        else {
            alert('Error modal not found');
        }
    };

    hideModal = (e) => {
        let pageTop = $('#page-body');
            pageTop.removeClass('modal-open');
            pageTop.css('padding-right');
        this.setState({displayModal: false});
    }

    render() {
        return(
            <div>
                <section className="bg-light" id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                        </div>

                        <div className="row">
                            {porfolioItems.map((item, i) => {
                                return <PorfolioItem key={i}
                                            {...item}
                                            onClick={(modalId) => {this.displayModal(modalId)}}/>
                            })}
                        </div>
                    </div>
                </section>

                <Modal {...this.state.modal}
                    displayModal={this.state.displayModal}
                    onClick={e => {this.hideModal(e)}}/>

                {this.state.displayModal ? 
                    <div className="modal-backdrop fade show"></div> 
                    : null
                }
            </div>
        )
    }
}

export default Porfolio;