import React, { Component } from 'react';
class DropContent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dropContent: [{ name: "For entrepreneurs", href: "#" }, { name: "For students", href: "#" }, { name: "For hobbyist", href: "#" }]
         }
    }
    render() { 
        return ( <ul className="dropdown-content">
            {this.state.dropContent.map(e => 
                <li><a href={e.href}>{e.name}</a></li>
            )}
        </ul> );
    }
}
 
export default DropContent;