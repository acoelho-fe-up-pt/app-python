const getTotalPoints = (chapters) => {
  let totalPoints = 0;
  for (let i = 0; i < chapters.length; i += 1) {
    const chapter = chapters[i];
    for (let k = 0; k < chapter.resources.length; k += 1) {
      const resource = chapter.resources[k];
      if (resource.type === 'M' && resource.points && resource.points.length) {
        const filteredPoints = resource.points.map(
          (point) => (point.correctPoints - point.incorrectPoints)
        );
        const maxPoints = filteredPoints.reduce((a, b) => Math.max(a, b));
        totalPoints += maxPoints;
      }
    }
  }
  return totalPoints;
};

const findResource = (chapters, code) => {
  for (let i = 0; i < chapters.length; i += 1) {
    const chapter = chapters[i];
    for (let k = 0; k < chapter.resources.length; k += 1) {
      const resource = chapter.resources[k];
      if (resource.code === code) {
        return {
          chapter,
          resource
        };
      }
    }
  }
  return false;
};

const findNextAndPrevResource = (chapters, entryResource) => {
  let prevResource = false;
  let nextResource = false;
  let foundEntryResource = false;
  for (let i = 0; i < chapters.length; i += 1) {
    const chapter = chapters[i];
    for (let k = 0; k < chapter.resources.length; k += 1) {
      const resource = chapter.resources[k];
      if (resource.code === entryResource.code) {
        foundEntryResource = true;
      } else if (!foundEntryResource) {
        prevResource = resource;
      } else {
        nextResource = resource;
        return {
          prevResource: prevResource || entryResource,
          entryResource,
          nextResource
        };
      }
    }
  }
  return {
    prevResource: prevResource || entryResource,
    entryResource,
    nextResource: nextResource || entryResource
  };
};

const makeJson = (icon, label, to) => ({
  icon,
  label,
  to,
});

const chapterJson = (chapter) => {
  const result = makeJson('', chapter.title, '#a-link');
  result.content = [];

  chapter.resources.forEach((resource) => {
    if (resource.type === 'M') {
      result.content.push(makeJson(' fas fa-graduation-cap', resource.title, `#${resource.code}`));
    } else {
      result.content.push(makeJson(' d-none', resource.title, `#${resource.code}`));
    }
  });

  return result;
};

const parseChapters = (chapters) => chapters.map((chapter) => chapterJson(chapter));

const scroll = (selector) => {
  const element = document.querySelector(`[href='${selector}']`);
  const roadmapElem = document.querySelector('.metismenu');
  if (element && roadmapElem) {
    roadmapElem.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
};

export {
  getTotalPoints,
  findResource,
  findNextAndPrevResource,
  makeJson,
  chapterJson,
  parseChapters,
  scroll
};
