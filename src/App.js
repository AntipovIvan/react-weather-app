import React, { useState } from 'react';
import BottomData from './components/BottomData';
import SearchBox from './components/SearchBox';
import TopData from './components/TopData';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  return (
    <div className="App">
      <SearchBox
        setData={setData}
        location={location}
        setLocation={setLocation}
      />
      <div>
        <div className="container">
          <TopData weatherData={data} />
          <BottomData weatherData={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
