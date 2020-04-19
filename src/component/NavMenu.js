import React, { Component } from 'react';
import DropContent from './DropContent';
class NavMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav: [{ name: "Home", href: "#" }, { name: "Services", href: "#" }, { name: "Contact", href: "#" }],

            hover: false
        }
    }
    toggleDrop = () => {
        
        this.setState({
            hover: !this.state.hover
        })
    }
    render() {
        return (<div className="nav">
            <ul className="menu">
                {this.state.nav.map(e => (e.name === 'Services') ?
                    <div>
                        <li className='dropdown' onClick={this.toggleDrop}><a href={e.href}>{e.name}</a>
                            {this.state.hover && <DropContent/>}

                        </li>
                    </div> :
                    <div>
                        <li><a href={e.href}>{e.name}</a></li>
                    </div>)}
            </ul>

        </div>);
    }
}

export default NavMenu;

