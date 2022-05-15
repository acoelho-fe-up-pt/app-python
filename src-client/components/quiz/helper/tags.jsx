import React from 'react';

const levelTag = (questionLevel, questionLevelTag) => <span className="question-level">{questionLevelTag.replace('<questionLevel>', questionLevel)}</span>;

const questionTypeTag = (questionType, {
  multipleChoiceTagText,
  buildCodeTagText,
  fixBugsTagText,
  fillSpacesTagText
}) => (
  <span className={`${questionType} selection-tag`}>
    {questionType === 'multipleChoice' && multipleChoiceTagText }
    {questionType === 'buildCode' && buildCodeTagText }
    {questionType === 'fixBugs' && fixBugsTagText }
    {questionType === 'fillSpaces' && fillSpacesTagText }
  </span>
);

const selectionNumberTag = (
  pickNumberOfSelection,
  numberOfSelection
) => (
  <span className="number-of-selection">
    {pickNumberOfSelection.replace('<numberOfSelection>', numberOfSelection)}
  </span>
);

export {
  levelTag,
  questionTypeTag,
  selectionNumberTag,
};
