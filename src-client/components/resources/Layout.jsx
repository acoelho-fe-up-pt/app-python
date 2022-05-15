import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Roadmap from './roadmap';
import Resource from './resource';
import API from '../../api/api';

import {
  getTotalPoints,
  findResource,
  findNextAndPrevResource
} from './helper';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: this.getBaseUrl(),
      chapters: [],
      entryResource: {},
      filter: {
        chapter: {}
      },
      fullscreen: false,
      justContentRoadmap: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleArrowPress = this.handleArrowPress.bind(this);
    this.handleFullScreen = this.handleFullScreen.bind(this);
    this.handlePoints = this.handlePoints.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.fetchResources();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleArrowPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleArrowPress, false);
  }

  handleClick(code) {
    const { chapters } = this.state;
    const { history } = this.props;
    history.replace(`#${code}`);
    this.setState({
      chapters,
      entryResource: findResource(chapters, code).resource,
      justContentRoadmap: false
    });
  }

  handlePrevClick() {
    const { chapters, entryResource } = this.state;
    const { history, store } = this.props;
    const { prevResource } = findNextAndPrevResource(chapters, entryResource);
    history.replace(`#${prevResource.code}`);
    store.set('gameMode', false);
    this.setState({
      chapters,
      entryResource: prevResource,
      justContentRoadmap: false
    });
  }

  handleNextClick() {
    const { chapters, entryResource } = this.state;
    const { history, store } = this.props;
    const { nextResource } = findNextAndPrevResource(chapters, entryResource);
    history.replace(`#${nextResource.code}`);

    store.set('gameMode', false);
    this.setState({
      chapters,
      entryResource: nextResource,
      justContentRoadmap: false
    });
  }

  handleDone({ resourceId, resourceChapterId, done }) {
    const { chapters } = this.state;

    const foundChapterIndex = chapters.findIndex(
      (chapter) => chapter.id === resourceChapterId
    );
    if (foundChapterIndex !== -1) {
      const { resources: chapterResources } = chapters[foundChapterIndex];
      const foundResourceIndex = chapterResources.findIndex(
        (resource) => resource.id === resourceId
      );
      if (foundResourceIndex !== -1) {
        if (done) {
          chapters[foundChapterIndex].resources[foundResourceIndex].points.push(done);
        } else {
          chapters[foundChapterIndex].resources[foundResourceIndex].points = [];
        }
        this.setState({ chapters });
      }
    }
  }

  handlePoints({ resourceId, resourceChapterId, points }) {
    const { chapters } = this.state;

    const foundChapterIndex = chapters.findIndex(
      (chapter) => chapter.id === resourceChapterId
    );
    if (foundChapterIndex !== -1) {
      const { resources: chapterResources } = chapters[foundChapterIndex];
      const foundResourceIndex = chapterResources.findIndex(
        (resource) => resource.id === resourceId
      );
      if (foundResourceIndex !== -1) {
        chapters[foundChapterIndex].resources[foundResourceIndex].points.push(points);
        const totalPoints = getTotalPoints(chapters);

        this.setState({
          chapters,
          totalPoints
        });
      }
    }
  }

  handleArrowPress({ code }) {
    if (code === 'ArrowLeft') {
      this.handlePrevClick();
    } else if (code === 'ArrowRight') {
      this.handleNextClick();
    }
  }

  handleFullScreen() {
    const { fullscreen } = this.state;
    this.setState({
      fullscreen: !fullscreen
    });
  }

  getBaseUrl() {
    const { match } = this.props;
    const { params } = match;
    let baseUrl = '/api/resources';

    if (params.chapterId) {
      baseUrl += `/chapterId=${params.chapterId}`;
    }

    if (params.bookId) {
      baseUrl += `/bookId=${params.bookId}`;
    }

    if (params.classId) {
      baseUrl += `/classId=${params.classId}`;
    }

    return baseUrl;
  }

  refreshChapters() {
    const { baseUrl } = this.state;
    return API.get(baseUrl);
  }

  fetchResources() {
    const { baseUrl } = this.state;

    API.get(baseUrl)
      .then((res) => {
        const { history } = this.props;
        const { chapters, entryResource } = res.data;
        history.replace(`#${res.data.entryResource.code}`);
        const totalPoints = getTotalPoints(chapters);
        const { prevResource, nextResource } = findNextAndPrevResource(chapters, entryResource);

        this.setState({
          chapters,
          totalPoints,
          entryResource,
          prevResource,
          nextResource
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const {
      chapters,
      totalPoints,
      entryResource,
      prevResource,
      nextResource,
      filter,
      fullscreen,
      justContentRoadmap
    } = this.state;
    const { code: entryResourceCode } = entryResource;
    const { store } = this.props;
    const gameMode = store.get('gameMode');
    const { match } = this.props;
    const { params } = match;

    if (chapters.length === 0) {
      return (
        <h1>Loading</h1>
      );
    }

    const contentHtml = (
      <div>
        <h4>
          Conteúdos
        </h4>
        <h6>
          {Object.keys(filter.chapter).length !== 0 && filter.chapter.constructor === Object
     && (`Capítulo ${filter.chapter.number}`)}
        </h6>
        <Button
          variant="light"
          className="d-none"
          onClick={this.handleFullScreen}
        >
          <i className="fas fa-expand" />
        </Button>
        <Roadmap
          chapters={chapters}
          handleClick={this.handleClick}
          store={store}
        />
      </div>
    );

    if (justContentRoadmap) {
      return (
        <div id="layout">
          <Container>
            <div>
              {contentHtml}
            </div>
            <div
              style={{
                position: 'fixed', bottom: '0px', width: '100%', left: '0'
              }}
            >
              <button
                type="button"
                onClick={() => this.setState({ justContentRoadmap: false })}
                className="btn gamming-btn gamming-btn-nav"
              >
                <i className="fas fa-arrow-left" />
                {' '}
                Recursos
              </button>
            </div>
          </Container>
        </div>
      );
    }

    return (
      <div id="layout">
        <Container
          className={fullscreen ? 'fullscreen' : ''}
        >
          <Row>
            <Col sm={9} id="resource">
              <Resource
                key={entryResourceCode}
                entryResource={entryResource}
                store={store}
                handlePrevClick={this.handlePrevClick}
                handleNextClick={this.handleNextClick}
                handlePoints={this.handlePoints}
                handleDone={this.handleDone}
                prevResource={prevResource}
                nextResource={nextResource}
                totalPoints={totalPoints}
                params={params}
              />
            </Col>
            <Col sm={3} className="d-none d-md-block">
              {contentHtml}
            </Col>
          </Row>
          {!gameMode && (
            <div
              className="d-block d-md-none"
              style={{
                position: 'fixed', bottom: '0px', width: '100%', left: '0'
              }}
            >
              <button
                id="gameModeBtn"
                type="button"
                onClick={() => this.setState({ justContentRoadmap: true })}
                className="btn gamming-btn gamming-btn-nav"
                style={{ margin: '0 auto' }}
              >
                Conteudos
              </button>
            </div>
          )}
        </Container>
      </div>
    );
  }
}

Layout.propTypes = {
  // eslint-disable-next-line react/require-default-props
  match: PropTypes.shape({
    params: PropTypes.shape({
      classId: PropTypes.string,
      bookId: PropTypes.string,
      chapterId: PropTypes.string
    })
  }),
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired
};

export default Layout;
