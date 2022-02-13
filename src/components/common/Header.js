import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <header className="masthead" style={{backgroundImage: `url('${this.props.image}')`}}>
                {/* <header className="masthead" style={{backgroundImage: this.props.image}}> */}
                    <div className="container">
                    <div className="intro-text">
                        <div className="intro-lead-in">{this.props.subtitle}</div>
                        <div className="intro-heading text-uppercase">{this.props.title}</div>
                        {this.props.showBtn &&
                            <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to={this.props.link}>{this.props.btnText}</Link>
                        }
                        
                    </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;