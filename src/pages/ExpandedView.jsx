//clean up formatting in future
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";

import WebsiteLink from "../components/WebsiteLink";
import WideCard from "../components/WideCard";
import CardLineGraph from "../components/CardLineGraph";
import CardPieChart from "../components/CardPieChart";
import WeatherCard from "../components/WeatherCard";

function ExpandedView() {
  const [fix, setFix] = useState(false);
  const { state } = useLocation();
  const { name, date, location, extract, image, url } = state || {};

  function setFixed() {
    if (window.scrollY >= 50 && window.scrollY <= 800) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  return (
    <div className="flex pt-10 pl-18 ">
      <div className="flex flex-col ">
        <div className="flex w-screen gap-16 ">
          <div className="flex flex-col ">
            <div className="inline-flex flex-col justify-center gap-5">
              <h1 className="font-heading text-3xl text-left">{name}</h1>
              <div className=" flex flex-col">
                <span className="font-body text-left">{location}</span>
                <span className="font-body text-left">{date}</span>
              </div>
            </div>

            <div className={fix ? "sticky top-4 " : ""}>
              <img src={image} alt="Map" className="pt-25 w-210 h-auto" />
            </div>
          </div>
          <div className="flex flex-col gap-36 mt-115">
            <Card title="Extract">{extract}</Card>
            <Card
              title="Weather"
              children={<WeatherCard location={location} />}
            />
            <WebsiteLink url={url} />{" "}
          </div>
        </div>

        <div className="flex flex-col w-screen gap-20 max-w-7xl pt-50">
          <h1 className="font-heading text-left">Race Trends</h1>
          <div className="flex gap-10">
            <WideCard title="title">
              <CardLineGraph dataPoints={12} />
            </WideCard>

            <Card title="title">
              <CardLineGraph dataPoints={12} />
            </Card>
          </div>
        </div>

        <div className="flex flex-col w-screen gap-20 max-w-7xl pt-50">
          <h1 className="font-heading text-left">Friend Trends</h1>
          <div className="flex gap-10">
            <Card title="title">
              <CardPieChart dataPoints={6} />
            </Card>

            <WideCard title="title">
              <CardLineGraph dataPoints={12} />
            </WideCard>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default ExpandedView;
