import React, { useState, useEffect } from "react";
import axios from "axios";
import "routes/Call.css";

function Call(location) {
  const [userLocation, setUserLocation] = useState(null);

  const getUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
        console.log(latitude, longitude)
      });
    } else {
      console.log("Geolocation is not available in this browser.");
    }
  };

    useEffect(() => {
    // Fetch user's location when the component mounts
    getUserLocation();
    }, []);
  
  const send = () => {
    const client = axios.create();
    const name = '내 이름은 코난';
    client.post('/api', { name });
  }



  //   const [userLocation, setUserLocation] = useState(null);

  // // define the function that finds the users geolocation
  // const getUserLocation = () => {
  //   // if geolocation is supported by the users browser
  //   if (navigator.geolocation) {
  //     // get the current users location
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         // save the geolocation coordinates in two variables
  //         const { latitude, longitude } = position.coords;
  //         // update the value of userlocation variable
  //         setUserLocation({ latitude, longitude });
  //       },
  //       // if there was an error getting the users location
  //       (error) => {
  //         console.error('Error getting user location:', error);
  //       }
  //     );
  //   }
  //   // if geolocation is not supported by the users browser
  //   else {
  //     console.error('Geolocation is not supported by this browser.');
  //   }
  // };
  // console.log(userLocation.latitude, userLocation.longitude)


  // return an HTML page for the user to check their location
//   return (
//     <div>
//       <h1>Geolocation App</h1>
//       {/* create a button that is mapped to the function which retrieves the users location */}
//       <button onClick={getUserLocation}>Get User Location</button>
//       {/* if the user location variable has a value, print the users location */}
//       {userLocation && (
//         <div>
//           <h2>User Location</h2>
//           <p>Latitude: {userLocation.latitude}</p>
//           <p>Longitude: {userLocation.longitude}</p>
//         </div>
//       )}
//     </div>
//   );
// }
  
  return (
    <section id="calling_wrapper">
      <div className="calling">
          <p><b>콜티를 호출하고 있습니다.</b><br />잠시만 기다려주세요~</p>
      </div>
      <div className="sv">
        <button onClick={() => { send(); }}>보내기 버튼 생성!</button>
      </div>
    </section>
  );
}

export default Call;
