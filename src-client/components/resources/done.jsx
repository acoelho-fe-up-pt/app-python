import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import API from '../../api/api';

class Done extends React.Component {
  constructor(props) {
    super(props);
    const { entryResource: { points } } = this.props;
    this.state = {
      done: !points ? 0 : Boolean(points.length)
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.doneResource();
  }

  doneResource() {
    const { done } = this.state;
    const {
      entryResource: { id: resourceId, chapter_id: resourceChapterId },
      params, handleDone
    } = this.props;

    const { store } = this.props;
    const user = store.get('user');

    if (user && user.id && resourceId) {
      let baseUrl = '/api/';
      const requestId = {};
      if (params.bookId) {
        baseUrl += 'book_done';
        requestId.book_id = params.bookId;
      } else if (params.classId) {
        baseUrl += 'class_done';
        requestId.class_id = params.classId;
      }

      if (!done) {
        API.post(baseUrl, {
          ...requestId,
          resource_id: resourceId
        })
          .then(({ data }) => {
            handleDone({ resourceId, resourceChapterId, done: data });
            this.setState({ done: true });
          })
          .catch((error) => console.error(error));
      } else {
        API.get(`${baseUrl}/resourceId=${resourceId}${params.classId ? `/classId=${params.classId}` : ''}`)
          .then(({ data }) => {
            data.map((elem) => API.delete(`${baseUrl}/${elem.id}`));
            handleDone({ resourceId, resourceChapterId, done: false });
            this.setState({ done: false });
          })
          .catch((error) => console.error(error));
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  renderTypeResource(type) {
    switch (type) {
      case 'U':
        return (<i title={`${type} - Url`} className="fas fa-link" />);
      case 'T':
        return (<i title={`${type} - Tutorial`} className="fab fa-readme" />);
      case 'V':
        return (<i title={`${type} - Vídeo`} className="fas fa-video" />);
      case 'M':
        return (<i title={`${type} - Minijogo`} className="fas fa-graduation-cap" />);
      case 'R':
        return (<i title={`${type} - Resumo`} className="fas fa-highlighter" />);
      case 'P':
        return (<i title={`${type} - Python URL`} className="fas fa-hat-wizard" />);
      case 'C':
        return (<i title={`${type} - Ficheiro código fonte (.py)`} className="fab fa-python" />);
      case 'E':
        return (<i title={`${type} - Narrativa interativa`} className="fas fa-box-open" />);
      case 'K':
        return (<i title={`${type} - Palavras-chave (keywords)`} className="fas fa-book-reader" />);
      case 'J':
        return (<i title={`${type} - Jogo`} className="fas fa-gamepad" />);
      case 'F':
        return (<i title={`${type} - Síntese Final`} className="fas fa-bookmark" />);
      default:
        return (<i title={type} className="fas fa-question-circle" />);
    }
  }

  render() {
    const { entryResource } = this.props;
    const { done } = this.state;
    const { type: entryResourceType } = entryResource;

    const {
      store,
      handlePrevClick,
      handleNextClick,
      prevResource,
      nextResource,
      totalPoints
    } = this.props;

    const gameMode = store.get('gameMode');
    const user = store.get('user');

    if (!gameMode) {
      return (
        <div>
          <div style={{ backgroundColor: 'var(--main-bg-basic-color)' }}>
            <Container style={{
              paddingLeft: '0',
              paddingRight: '0'
            }}
            >
              <Row className="row align-items-center">
                <Col sm={1} xs={1} style={{ textAlign: 'left', paddingLeft: '0' }}>
                  <Button
                    id="previous-resource"
                    className="prev-next-controls-resource"
                    title={prevResource.title}
                    variant="light"
                    onClick={handlePrevClick}
                  >
                    <i className="fas fa-chevron-left" />
                  </Button>
                </Col>
                <Col sm={6} xs={4} style={{ textAlign: 'left' }}>
                  <h6
                    className="d-block d-md-none"
                    title={entryResource.description}
                  >
                    {this.renderTypeResource(entryResource.type)}
                    {` ${entryResource.code}`}
                  </h6>
                  <h6
                    className="d-none d-sm-block"
                    title={entryResource.description}
                  >
                    {this.renderTypeResource(entryResource.type)}
                    {` ${entryResource.title}`}
                  </h6>
                </Col>

                <Col sm={3} xs={4} style={{ textAlign: 'left' }}>
                  {user && user.id && (
                  <h6 title={`Pontuação: ${totalPoints}`}>
                    {totalPoints}
                    <i className="fas fa-trophy" />
                  </h6>
                  )}
                </Col>
                <Col sm={1} xs={1}>
                  {user && user.id
                  && entryResourceType !== 'M'
                  && (
                  <label id="doneLabel" htmlFor="done">
                    <input
                      id="done"
                      name="done"
                      type="checkbox"
                      checked={!!done}
                      onChange={this.handleChange}
                    />
                  </label>
                  )}
                </Col>

                <Col sm={1} xs={1} style={{ textAlign: 'right', paddingRight: '0' }}>
                  <Button
                    id="next-resource"
                    className="prev-next-controls-resource"
                    title={nextResource.title}
                    variant="light"
                    onClick={handleNextClick}
                  >
                    <i className="fas fa-chevron-right" />
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
          <div style={{ height: '50px' }} />
        </div>
      );
    }
    return <span />;
  }
}

Done.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  entryResource: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
  handlePrevClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  prevResource: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  nextResource: PropTypes.object.isRequired,
  totalPoints: PropTypes.number.isRequired,
  handleDone: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  params: PropTypes.object.isRequired
};

export default Done;
