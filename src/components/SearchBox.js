import React from 'react';
import axios from 'axios';

const SearchBox = ({ setData, location, setLocation }) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=495eba0fc11bc01106135f8aed7f070f`;
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  };
  return (
    <div className="search">
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="ロケーションの入力"
        type="text"
      />
    </div>
  );
};

export default SearchBox;
