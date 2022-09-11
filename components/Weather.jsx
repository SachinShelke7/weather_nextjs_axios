import Image from "next/image";
import React from "react";

const Weather = ({ data }) => {
  return (
    <div className="max-w-[700px] mx-auto">
      <div>
        <h3 className="font-bold text-xl text-center py-5">
          {data.name} City Weather
        </h3>
        <div className="space-x-5 bg-gray-300 p-2 rounded-xl whitespace-nowrap mx-auto">
          <span>Latitude : {data.coord.lat}</span>
          <span>Longitude : {data.coord.lon}</span>
        </div>
      </div>
      <div className="flex flex-row justify-between mx-20 items-center">
        <div>
          <Image
            alt="/"
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            height="100"
            width="100"
          />
          <p className="font-bold">{data.weather[0].main}</p>
          <p className="text-xs text-gray-500">{data.weather[0].description}</p>
        </div>
        <h1 className="text-7xl font-bold">
          {data.main.temp.toFixed(0)}&#176;
        </h1>
      </div>
      {/* bottom */}
      <div className="mt-10">
        <p>Humidity {data.main.humidity}</p>
        <p>
          Max/Min : {data.main.temp_max}/{data.main.temp_min}
        </p>
        <h4>Country : {data.sys.country}</h4>
      </div>
    </div>
  );
};

export default Weather;
