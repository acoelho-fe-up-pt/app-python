/* eslint-disable import/no-dynamic-require */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ReactTinyLink } from 'react-tiny-link';
import { Player } from 'video-react';
import '../../css/video-react.css';

import Editor from 'react-simple-code-editor';
import { withTranslation } from 'react-i18next';
import { highlight, languages } from '../../js/prism';
import '../../css/prism.css';

import EmbedYoutube from './EmbedYoutube';
import Done from './done';
import Iframe from '../iframe';
import Quiz from '../quiz/Quiz';

function validURL(str) {
  const pattern = new RegExp('^(https?:\\/\\/)?' // protocol
    + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' // domain name
    + '((\\d{1,3}\\.){3}\\d{1,3}))' // OR ip (v4) address
    + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' // port and path
    + '(\\?[;&a-z\\d%_.~+=-]*)?' // query string
    + '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(str);
}

class Resource extends Component {
  htmlResource(entryResource) {
    const {
      type, code, description, path
    } = entryResource;
    const {
      store, params, handlePoints, i18n: { language }
    } = this.props;

    const suffixResource = language.includes('pt') ? '' : '_en';

    switch (type) {
      case 'U':
      case 'P':
        return (
          <div>
            <ReactTinyLink
              id={code}
              cardSize="small"
              showGraphic
              maxLine={2}
              minLine={1}
              url={path}
            />
          </div>
        );
      case 'V':
        return (
          <div>
            {path.includes('youtube.com/embed')
              && (
              <EmbedYoutube
                path={path}
                description={description}
              />
              )}
            {!path.includes('youtube.com/embed')
              && (
                <Player>
                  <source src="/assets/resources/trailer_hd.mp4" />
                </Player>
              )}
          </div>
        );
      case 'M': {
        const quizFilename = path.includes('.jsx') ? path.replace(/(\.[\w\d_-]+)$/i, `${suffixResource}$1`) : 'dummy.jsx';
        const { default: quizObject } = require(`../../public/assets/resources/${quizFilename}`);
        return (
          <div>
            {!path.includes('.jsx') && (<h4>MiniJogo exemplo</h4>)}
            <Quiz
              quiz={quizObject}
              entryResource={entryResource}
              store={store}
              params={params}
              handlePoints={handlePoints}
            />
          </div>
        );
      }
      case 'R':
      case 'K':
      case 'F':
      case 'J':
      case 'T':
      case 'E':
        return (
          <div>
            <h5>{description}</h5>
            {(validURL(path) || path.includes('.html') || path.includes('http'))
              && (
              <Iframe path={path} />
              )}
            {!validURL(path) && !path.includes('.html') && !path.includes('http')
              && (
                // eslint-disable-next-line react/no-danger
                <p dangerouslySetInnerHTML={{ __html: path }} />
              )}
          </div>
        );
      case 'C':
        return (
          <div>
            <h5>{description}</h5>
            <Editor
              value={require(`../../public/assets/resources/${path.includes('.jsx') ? path : 'example.py.jsx'}`).default.code}
              highlight={(codeH) => highlight(codeH, languages.js)}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
              }}
            />
          </div>
        );
      default:
        return (
          <div>
            <h5>
              Bad type
              type:
              {type}
              code:
              {code}
              description:
              {description}
              path:
              {path}
            </h5>
          </div>
        );
    }
  }

  render() {
    const { entryResource } = this.props;
    const { code: entryResourceCode } = entryResource;
    const {
      store,
      handlePrevClick,
      handleNextClick,
      totalPoints,
      prevResource,
      nextResource,
      handleDone,
      params
    } = this.props;
    const gameMode = store.get('gameMode');

    return (
      <div id={entryResourceCode}>
        {!gameMode && (
        <div className="resource-header">
          <Done
            key={entryResourceCode}
            entryResource={entryResource}
            totalPoints={totalPoints}
            store={store}
            handlePrevClick={handlePrevClick}
            handleNextClick={handleNextClick}
            prevResource={prevResource}
            nextResource={nextResource}
            handleDone={handleDone}
            params={params}
          />
        </div>
        )}

        <div
          className="resource-body"
          style={{ marginTop: `${gameMode ? '-2vh' : '5vh'}` }}
        >
          {this.htmlResource(entryResource)}
        </div>
      </div>
    );
  }
}

Resource.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  entryResource: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
  handlePrevClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired,
  handlePoints: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  prevResource: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  nextResource: PropTypes.object.isRequired,
  totalPoints: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  params: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  i18n: PropTypes.object.isRequired,
};

export default withTranslation()(Resource);
