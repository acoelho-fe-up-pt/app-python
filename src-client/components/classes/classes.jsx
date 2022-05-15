import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import { withTranslation } from 'react-i18next';
import ClassBadge from './ClassBadge';
import NumberOfStudents from './NumberOfStudents';

class ClassesTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleGoToChapter = this.handleGoToChapter.bind(this);
  }

  handleGoToChapter(classeId) {
    const { history } = this.props;
    history.push(`/classId=${classeId}/chapters`);
  }

  handleGoToResources(classeId) {
    const { history } = this.props;
    history.push(`/classId=${classeId}`);
  }

  handleGoToResults(classeId) {
    const { history } = this.props;
    history.push(`/classId=${classeId}/results`);
  }

  handleGoToLeaderboard(classeId) {
    const { history } = this.props;
    history.push(`/classId=${classeId}/leaderboard`);
  }

  cardHtml(item) {
    const { store } = this.props;
    const user = store.get('user');

    return (
      <Card key={item.id} style={{ width: '17rem', margin: '0.8rem' }}>
        <Card.Body>
          <Card.Title>
            {item.title}
            {user && user.id && user.role === 'student' && (
              <ClassBadge classObject={item} />
            )}
          </Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <div style={{ display: 'grid' }}>
            {this.chaptersButton(item)}
            {this.resourcesButton(item)}
            {this.resultsButton(item)}
            {this.leaderboardButton(item)}
          </div>
        </Card.Body>
        {user && user.id && (
        <NumberOfStudents classObject={item} />
        )}
      </Card>
    );
  }

  leaderboardButton(item) {
    const { t } = this.props;
    return (
      <button
        type="button"
        className="btn btn-light btn-light-custom"
        onClick={() => this.handleGoToLeaderboard(item.id)}
      >
        {t('Leaderboard')}
      </button>
    );
  }

  resultsButton(item) {
    const { t } = this.props;
    return (
      <button
        type="button"
        className="btn btn-light btn-light-custom"
        onClick={() => this.handleGoToResults(item.id)}
      >
        {t('Results')}
      </button>
    );
  }

  resourcesButton(item) {
    const { t } = this.props;
    return (
      <button
        type="button"
        className="btn btn-light btn-light-custom"
        onClick={() => this.handleGoToResources(item.id)}
      >
        {t('Resources')}
      </button>
    );
  }

  chaptersButton(item) {
    const { t } = this.props;
    return (
      <button
        type="button"
        className="btn btn-light btn-light-custom"
        onClick={() => this.handleGoToChapter(item.id)}
      >
        {t('ChaptersTag')}
      </button>
    );
  }

  render() {
    const { classes, t } = this.props;

    if (classes.length === 0) {
      return (
        <div>
          <h1>
            {t('NoResults')}
          </h1>
          <h5>
            <Link to="/books">
              {t('ViewBooks')}
            </Link>
          </h5>
        </div>
      );
    }

    return (
      <div
        className="row"
        style={{
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          overflowY: 'auto',
          maxHeight: '65vh'
        }}
      >
        {(classes.map((item) => this.cardHtml(item)))}
      </div>
    );
  }
}

ClassesTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

export default withTranslation(['classes'])(ClassesTable);
