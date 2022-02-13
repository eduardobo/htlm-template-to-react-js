import React, {Component} from 'react';

class Modal extends Component {
    render() {
        return (
            <div className={`portfolio-modal modal fade ${this.props.displayModal ? 'show' : ''}`}
                id="#portfolioModal"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
                style={this.props.displayModal ? {display: 'block', paddingRight: '17px'} : {}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal" onClick={e => {this.props.onClick(e)}}>
                            <div className="lr">
                                <div className="rl"></div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    <div className="modal-body">
                                        <h2 className="text-uppercase">{this.props.title}</h2>
                                        <p className="item-intro text-muted">{this.props.subtitle}</p>

                                        <img className="img-fluid d-block mx-auto" src={this.props.image} alt=""/>
                                        <p>{this.props.description}</p>

                                        <ul className="list-inline">
                                            <li>Date: {this.props.date}</li>
                                            <li>Client: {this.props.client}</li>
                                            <li>Category: {this.props.category}</li>
                                        </ul>

                                        <button className="btn btn-primary"
                                            data-dismiss="modal"
                                            type="button"
                                            onClick={e => {this.props.onClick(e)}}>
                                        <i className="fas fa-times"></i>
                                        Close Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;