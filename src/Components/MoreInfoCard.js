import React from "react";

function MoreInfoCard({ data }) {
  const { formattedData, degreeSymbol, main, clouds, t } = data;

  return (
    <div className="more-info">
      <p className="">
        {t("RealFeel")}:{" "}
        <span>
          {formattedData.feels_like}
          {degreeSymbol}
        </span>
      </p>
      <p className="">
        {t("Humidity")}: <span>{main.humidity}%</span>
      </p>
      <p className="">
        {t("Cover")}: <span>{clouds.all}%</span>
      </p>
      <p className="">
        {t("Min-temp")}:{" "}
        <span>
          {formattedData.temp_min}
          {degreeSymbol}
        </span>
      </p>
      <p className="">
        {t("Max-temp")}:{" "}
        <span>
          {formattedData.temp_max}
          {degreeSymbol}
        </span>
      </p>
    </div>
  );
}

export default MoreInfoCard;
