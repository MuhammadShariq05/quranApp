import React from 'react';
import { Link } from 'react-router-dom';
import surahs from '/src/data/surahs.json';

const SurahList = () => {
  return (
    <div>
      <h1>Quranic Surahs</h1>
      <ul>
        {surahs.map(surah => (
          <li key={surah.number}>
            <Link to={`/surah/${surah.number}`}>{surah.name} - {surah.translation}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SurahList;
