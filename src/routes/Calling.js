import React, { useState, useEffect } from 'react';

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // 사용자의 현재 위치를 가져오는 함수
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });
        });
      } else {
        alert('Geolocation을 지원하지 않는 브라우저입니다.');
      }
    };

    getLocation();
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  const handleShowLocation = () => {
    if (currentLocation) {
      // 현재 위치가 있으면 검색창에 설정할 수 있습니다.
      const searchInput = document.getElementById('searchInput'); // 검색창의 ID를 적절히 수정해야 합니다.
      if (searchInput) {
        searchInput.value = `내 현재 위치: ${currentLocation.latitude}, ${currentLocation.longitude}`;
      }
    } else {
      alert('현재 위치를 가져오는 중입니다. 잠시 후 다시 시도해주세요.');
    }
  };

  return (
    <div>
      <h1>내 현재 위치 설정</h1>
      <button onClick={handleShowLocation}>내 현재 위치 호출하기</button>
      <br />
      <input id="searchInput" type="text" placeholder="검색창" />
    </div>
  );
}

export default App;