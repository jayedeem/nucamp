import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Directory from './DirectoryComponent';
import { actions } from 'react-redux-form';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import {
  postComment,
  fetchCampsites,
  fetchComments,
  fetchPromotions,
} from '../redux/ActionCreators';
import CampsiteInfoComponent from './CampsiteInfoComponent';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import About from './AboutComponent';

const mapStateToProps = (state) => {
  return {
    campsites: state.campsites,
    comments: state.comments,
    partners: state.partners,
    promotions: state.promotions,
  };
};
const mapDispatchToProps = {
  fetchCampsites: () => fetchCampsites(),
  resetFeedbackForm: () => actions.reset('feedbackForm'),
  fetchComments: () => fetchComments(),
  fetchPromotions: () => fetchPromotions(),
  postComment: (campsiteId, rating, author, text) =>
    postComment(campsiteId, rating, author, text),
};

class Main extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchCampsites();
    this.props.fetchComments();
    this.props.fetchPromotions();
  }
  render() {
    const HomePage = () => {
      return (
        <Home
          campsite={
            this.props.campsites.campsites.filter(
              (campsite) => campsite.featured
            )[0]
          }
          campsitesLoading={this.props.campsites.isLoading}
          campsitesErrMess={this.props.campsites.errMess}
          promotion={
            this.props.promotions.promotions.filter(
              (promotion) => promotion.featured
            )[0]
          }
          partner={this.props.partners.filter((partner) => partner.featured)[0]}
          promotionLoading={this.props.promotions.isLoading}
          promotionErrMess={this.props.promotions.errMess}
        />
      );
    };
    const CampsiteWithId = ({ match }) => {
      return (
        <CampsiteInfoComponent
          campsite={
            this.props.campsites.campsites.filter(
              (campsite) => campsite.id === +match.params.campsiteId
            )[0]
          }
          isLoading={this.props.campsites.isLoading}
          errMess={this.props.campsites.errMess}
          comments={this.props.comments.comments.filter(
            (comment) => comment.campsiteId === +match.params.campsiteId
          )}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
        />
      );
    };
    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page"
            timeout={300}
          >
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route
                exact
                path="/directory"
                render={() => <Directory campsites={this.props.campsites} />}
              />
              <Route path="/directory/:campsiteId" component={CampsiteWithId} />
              {/* <Route exact path="/contactus" component={Contact} /> */}
              <Route
                exact
                path="/contactus"
                render={() => (
                  <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
                )}
              />
              <Route
                exact
                path="/aboutus"
                render={() => <About partners={this.props.partners} />}
              />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
