import React, { useState } from 'react';
import PageTitle from '../../components/PageTitle';

function Search() {
  const [keyWord, setkeyWord] = useState('');
  const handleSearchButton = async () => {
    const res = await fetch('http://localhost:3000/search?keywords=%E8%93%9D%E8%8E%B2%E8%8A%B1');
    console.log(res);
  };
  return (
    <div>
      <PageTitle>搜索</PageTitle>
      <div>
        <input
          onInput={(e) => {
            console.log(e.target.value);
            setkeyWord(e.target.value);
          }}
          placeholder='艺人、歌曲、歌词以及更多内容'
          value={keyWord}
        />
        <button onClick={handleSearchButton}>search</button>
      </div>
    </div>
  );
}

export default Search;
