import React from 'react';
import PropTypes from 'prop-types';

const getYoutubeVideoCode = (url) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : false;
};

const EmbedYoutube = ({ path, description }) => (
  <iframe
    width="100%"
    height="315"
    src={path}
    srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
      span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>
      <a href="${path}?autoplay=1">
      <img src=https://img.youtube.com/vi/${getYoutubeVideoCode(path)}/hqdefault.jpg alt='${description}'><span>▶</span></a>`}
    title={description}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);

EmbedYoutube.propTypes = {
  path: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EmbedYoutube;
