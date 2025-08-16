import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Select how often you want deliveries — we’ll handle the rest.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Pick from a variety of fresh, chef-prepared dishes that match your taste and lifestyle.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Enjoy Your Food",
  text: "Receive your meals fresh and ready to enjoy, no cooking required.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
       <p className="primary-text">
  Discover how our service makes meal planning effortless — from choosing your favorites to enjoying fresh deliveries at your door.
</p>
<p className="primary-text">
  Simply select your meals, set your schedule, and we’ll take care of the rest.
</p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;