import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import Spinner from 'react-bootstrap/Spinner';
import { withTranslation } from 'react-i18next';
import FileSaver from 'file-saver';
import defaultLocale from './locale';
import API from '../../api/api';
import QuizResult from '../quiz/auxComponents/QuizResult';

class ResultsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      selectResult: false,
      loading: true,
    };
    this.fetchResults = this.fetchResults.bind(this);
    this.onClickDownloadCsv = this.onClickDownloadCsv.bind(this);
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
    this.fetchResults();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  onClickResult(result) {
    this.setState({ selectResult: result });
  }

  onClickDownloadCsv() {
    const { match } = this.props;
    const { params } = match;
    let url = '/api/';

    if (params.classId) {
      url += `/class_points/csv/classId=${params.classId}`;

      return API.get(url, { responseType: 'blob' })
        .then((response) => {
          const blob = response.data;
          FileSaver.saveAs(blob, 'results.csv');
        })
        .catch((error) => console.error(error));
    }

    return false;
  }

  fetchResults() {
    const { match } = this.props;
    const { params } = match;
    let url = '/api/';

    if (params.bookId) {
      url += `/book_points/bookId=${params.bookId}`;
    } else if (params.classId) {
      url += `/class_points/classId=${params.classId}`;
    }

    API.get(url)
      .then(({ data: results }) => this.mounted
      && this.setState({
        results,
        loading: false
      }))
      .catch((error) => console.error(error));
  }

  render() {
    const {
      results, loading, selectResult
    } = this.state;
    const { store, t } = this.props;
    const user = store.get('user');

    if (selectResult) {
      return (
        <div>
          <button
            id="gameModeBtn"
            type="button"
            onClick={() => this.setState({ selectResult: false })}
            className="btn btn-light btn-light-custom"
            style={{ margin: '0 auto' }}
          >
            <i className="fas fa-arrow-left" />
            {'  '}
            Resultados
          </button>
          <QuizResult
            result={selectResult}
          />
        </div>
      );
    }

    const columns = [
      'title',
      'chapter',
      'numberOfCorrectAnswers',
      'numberOfIncorrectAnswers',
      'numberOfQuestions',
      'resultPoints',
      'totalPoints',
      'created_at'];

    const mobileColumns = [
      'title',
      'chapter',
      'resultPoints',
      'created_at'];

    if (user && user.role && user.role !== 'student') {
      columns.unshift('email');
    }

    Moment.locale('en');

    const tableBodyRows = results.map((item) => (
      <tr key={item.id} onClick={() => this.onClickResult(item)}>
        {columns.map((element) => (
          <td key={`${element}${item.id}`} className={mobileColumns.includes(element) ? '' : 'd-none d-md-table-cell'}>
            {element === 'created_at' && item[element] !== undefined ? Moment(item[element]).format('HH:mm:ss DD MMM YYYY') : ''}
            {element !== 'created_at' && item[element] !== undefined ? item[element] : ''}
          </td>
        ))}
      </tr>
    ));

    const tableHeadRow = columns.map((item) => (
      <th key={`${item}`} scope="col" className={mobileColumns.includes(item) ? '' : 'd-none d-md-table-cell'}>
        {defaultLocale[`${item}ColumnName`] !== undefined ? defaultLocale[`${item}ColumnName`] : ''}
      </th>
    ));

    return (
      <div>
        {user && user.role && user.role === 'teacher'
           && (
           <div>
             <button
               type="button"
               download=""
               onClick={this.onClickDownloadCsv}
               className="btn btn-light btn-light-custom"
             >
               <i className="fas fa-download" />
               {` ${t('DownloadCsv')}`}
             </button>
           </div>
           )}

        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive tableFixHead">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      {tableHeadRow}
                    </tr>
                  </thead>
                  <tbody>
                    {!loading && (tableBodyRows)}
                    {loading && (
                    <tr>
                      <td>
                        <Spinner animation="border" size="sm" role="status">
                          <span className="sr-only">Loading...</span>
                        </Spinner>
                      </td>
                    </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ResultsTable.propTypes = {
  // eslint-disable-next-line react/require-default-props
  match: PropTypes.shape({
    params: PropTypes.shape({
      classId: PropTypes.string,
      bookId: PropTypes.string
    })
  }),
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation(['results'])(ResultsTable);
