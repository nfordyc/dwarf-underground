import React, { Component } from 'react';

class Links extends Component {
    render() {
        return (
            <div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>
            {this.props.linkinfo.map((info,i) => {
                return <Link key={i} src={info.src} alt={info.alt} text={info.text} />
            })}
          </div>
        )
    }
}

function Link (props){
    return (
        <div className="small-6 medium-3 columns other-article">
            <a href="#">
            <img src={props.src} alt={props.alt} />
            <p>{props.text}</p>
            </a> 
        </div>
    )
}

export default Links