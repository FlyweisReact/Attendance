import React, { useCallback, useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewCustomer = () => {
    const { id } = useParams();
  const [position, setPosition] = useState({
    lat: 48.8584,
    lng: 2.2945,
  });




  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://ledihbp1a7.execute-api.ap-south-1.amazonaws.com/dev/api/v1/cycle/get/${id}`
      );
      console.log(data);
      setPosition({
        lat: parseFloat(data?.message?.lat),
        lng: parseFloat(data?.message?.long),
      });
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  useEffect(() => {
   
  }, []);

  const containerStyle = {
    width: "100%",
    height: "800px",
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDntn5A6bf1VLX2WgNUetcG84HjRrCmE7w",
  });

  return (
    <>
      <div>
        <GoogleMap
          center={position}
          zoom={15}
          mapContainerStyle={containerStyle}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          <MarkerF position={position} />
        </GoogleMap>
      </div>
    </>
  );
};


export default HOC(ViewCustomer)