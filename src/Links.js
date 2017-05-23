import React, { Component } from 'react';

class Links extends Component {
    render() {
        return (
            <div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>
            {this.props.linkinfo.map(info => {
                return <Link src={info.src} alt={info.alt} text={info.text} />
            })}
          </div>
        )
    }
}

class Link extends Component {
    render(src,alt,text) {
        return (
            <div className="small-6 medium-3 columns other-article">
              <a href="#">
                <img src={this.props.src} alt={this.props.alt} />
                <p>{this.props.text}</p>
              </a> 
            </div>
        )
    }
}

export default Links