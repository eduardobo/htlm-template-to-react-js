import React, {Component} from 'react';

class Field extends Component {
    render() {
        return (
            <div className="form-group">
                {this.props.elementName === 'input' ?
                    <input className="form-control" 
                        id={this.props.name}
                        name={this.props.name}
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        required="required"
                        data-validation-required-message="Please enter your name."
                        value={this.props.value}
                        onChange={e => this.props.onChange(e)}/>

                    :
                    <textarea className="form-control"
                        id="message"
                        placeholder="Your Message *"
                        required="required"
                        data-validation-required-message="Please enter a message."
                        value={this.props.value}
                        onChange={e => this.props.onChange(e)}/>
                }

                    <p className="help-block text-danger"></p>
            </div>
        )
    }
}

export default Field;