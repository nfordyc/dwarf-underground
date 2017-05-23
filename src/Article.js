import React, { Component } from 'react';

class Article extends Component {
    constructor () {
        super()

        this.state = {
            commentsClicked: false,
            comments: []
        }
        this.showComments = this.showComments.bind(this)
        this.submitComment = this.submitComment.bind(this)
    }

    showComments(e) {
        e.preventDefault()
        this.setState((prevState) => ({
            commentsClicked: !prevState.commentsClicked
        }))
    }

    submitComment(e) {
        e.preventDefault()
        let comment = document.querySelector('.comment')
        let newComments = this.state.comments
        
        newComments.push(comment.value)
        comment.value = ''
        this.showComments(e)
        
        this.setState({comments: newComments})
    }

    render() {
        return (
          <div className="large-8 medium-12 columns article">
            <ArticleHeader />

            <ArticleBody />
            
            <div className="article-links">
              <a className="article-link" href="#" onClick={this.showComments}>
                <i className="fa fa-comments-o"></i>
                <span className="article-link-text">Comments</span>
              </a>
              <a className="article-link" href="#">
                <i className="fa fa-share"></i>
                <span className="article-link-text">Share Post</span>
              </a>
            </div>
            <form 
                onSubmit={this.submitComment} 
                style={{display: this.state.commentsClicked ? 'block' : 'none'}}
            >
                <input className="comment" type="text" />
                <input type="submit" />
            </form>
            <ul>
                {this.state.comments.map(comment => {
                    return <li>{comment}</li>
                })}
            </ul>
        </div>
        )
    }
}

class ArticleHeader extends Component {
    render() {
        return (
            <div>
                <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
                <div className="avatar">
                <img src="http://www.zbrushcentral.com/attachment.php?attachmentid=376082" alt="author" />
                <div className="author-info">
                    <p className="author-name">By Domri, son of Flug</p>
                    <p className="date">on 28 April, 3018 of the Third Age</p>
                </div>
                </div>
            </div>
        )
    }
}

class ArticleBody extends Component {
    render() {
        return (
            <section className="article-body">
              <p><span className="article-start gold">E</span>psum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium.</p>

              <p>Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non deposit quid pro quo hic escorol. Marquee selectus non provisio incongruous feline nolo contendre Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum.</p>

              <p>Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium. Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Gratuitous octopus niacin, sodium glutimate.</p>

              <p className="interject">Avast! A stray goblin!</p>

              <p>Quote meon an estimate et non interruptus stadium. Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito.</p>

              <p>Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium.</p>

              <p>Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non deposit quid pro quo hic escorol. Marquee selectus non provisio incongruous feline nolo contendre Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum.</p>
            </section>
        )
    }
}

export default Article