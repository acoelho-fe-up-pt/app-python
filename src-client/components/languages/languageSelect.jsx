import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { withTranslation } from 'react-i18next';
import IconOption from './option';

class LanguageSelect extends Component {
  constructor(props) {
    super(props);
    this.changeLang = this.changeLang.bind(this);
  }

  changeLang(selection) {
    const { value } = selection;
    const { i18n } = this.props;
    const { translator: { languageUtils: { supportedLngs } } } = i18n;
    if (supportedLngs.includes(value)) {
      i18n.changeLanguage(value);
    }
  }

  render() {
    const {
      t, i18n: {
        language,
        translator: { languageUtils: { supportedLngs } }
      }
    } = this.props;
    const languageOptions = supportedLngs.filter((elem) => elem !== 'cimode').map(
      (elem) => ({ value: elem, label: t(elem), icon: `${elem}.png` })
    );
    const defaultValue = languageOptions.find((elem) => language.includes(elem.value));

    return (
      <Select
        key={`${language}`}
        className="basic-single"
        classNamePrefix="select"
        defaultValue={defaultValue}
        isDisabled={false}
        isLoading={false}
        isClearable={false}
        isRtl={false}
        isSearchable={false}
        name="color"
        options={languageOptions}
        onChange={this.changeLang}
        components={{ Option: IconOption }}
      />
    );
  }
}

LanguageSelect.propTypes = {
  t: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  i18n: PropTypes.object.isRequired,
};

export default withTranslation(['language'])(LanguageSelect);
