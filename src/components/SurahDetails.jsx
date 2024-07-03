import React from 'react';
import { useParams } from 'react-router-dom';
import surahs from 'C:/Work/Quran/src/data/surahs.json';

const SurahDetail = () => {
  const { number } = useParams();
  const surah = surahs.find(surah => surah.number === parseInt(number));

  if (!surah) return <h2>Surah not found</h2>;

  return (
    <div>
      <h1>{surah.name} - {surah.translation}</h1>
      <p>{surah.text}</p>
      <h3>Footnotes</h3>
      <ul>
        {surah.footnote.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default SurahDetail;
