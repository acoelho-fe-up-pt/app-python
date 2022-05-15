import React from 'react';
import PropTypes from 'prop-types';
import defaultLocale from './locale';
import '../../css/leaderboard.css';

import API from '../../api/api';

class LeaderboardTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
    this.fetchResults = this.fetchResults.bind(this);
    if (process.env.NODE_ENV === 'test') return;
    // Continue initialization for non-test environments
    this.fetchResults();
  }

  fetchResults() {
    const { match } = this.props;
    const { params } = match;
    const url = `/api/class_points/leaderboard/classId=${params.classId}`;

    API.get(url)
      .then(({ data }) => this.setState({
        results: data.sort((a, b) => b.resultPoints - a.resultPoints)
      }))
      .catch((error) => console.error(error));
  }

  render() {
    const { results } = this.state;

    const columns = [
      'position',
      'email',
      'resultPoints'];

    const tableBodyRows = results.map((item, index) => (
      <tr key={item.id} className={index < 3 ? `leaderBoardPosition${index + 1}` : ''}>
        <td key={`position${item.id}`}>
          {index + 1}
        </td>
        {columns.map((element) => (element !== 'position' && (
          <td key={`${element}${item.id}`}>
            {element === 'email' && item[element] !== undefined && (
            <span>
              {item[element].substring(0, item[element].indexOf('@'))}
              <span className="d-none d-md-table-cell">
                {item[element].substring(item[element].indexOf('@'), item[element].lenght)}
              </span>
            </span>
            )}
            {element !== 'email' && item[element] !== undefined ? item[element] : ''}
          </td>
        )))}
      </tr>
    ));

    const tableHeadRow = columns.map((item) => (
      <th key={`${item}`} scope="col">
        {defaultLocale[`${item}ColumnName`] !== undefined ? defaultLocale[`${item}ColumnName`] : ''}
      </th>
    ));

    return (
      <div className="col">
        <div id="leaderboard-card" className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    {tableHeadRow}
                  </tr>
                </thead>
                <tbody>
                  {tableBodyRows}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LeaderboardTable.propTypes = {
  // eslint-disable-next-line react/require-default-props
  match: PropTypes.shape({
    params: PropTypes.shape({
      classId: PropTypes.string
    })
  }),
};

export default LeaderboardTable;
