/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from 'react-i18next';
import API from '../../api/api';

class PostAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { classCode: '' };
    this.handleAddPost = this.handleAddPost.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAddPost(event) {
    event.preventDefault();
    const { classCode } = this.state;
    const { refreshClasses, t } = this.props;

    API.post('api/class_users', { classCode })
      .then(() => refreshClasses())
      .catch(() => this.setState({ error: t('InvalidCodeToJoinClassTag') }));
  }

  handleChange(event) {
    this.setState({ classCode: event.target.value, error: '' });
  }

  render() {
    const { classCode, error } = this.state;
    const { t } = this.props;

    return (
      <div id="joinClass" className="card text-left mb-3">
        <div className="card-body">
          <form onSubmit={this.handleAddPost}>
            { error && (
            <div className="alert alert-danger">
              {error}
            </div>
            )}
            <div className="form-group">
              <label htmlFor="classCode">
                {t('JoinClassWithCodeLabel')}
              </label>
              <input
                type="text"
                className="form-control"
                id="classCode"
                aria-describedby="classCode"
                placeholder={t('JoinClassWithCodePlaceholder')}
                onChange={this.handleChange}
                value={classCode}
              />
            </div>

            <div className="btn-group" role="group" aria-label="">
              <button type="submit" className="btn btn-primary">
                {t('JoinClassWithCodeBtn')}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

PostAdd.propTypes = {
  refreshClasses: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation(['classes'])(PostAdd);
