import { useState, useEffect } from "react";
import "../../style/popular.css";
import quick_view from "../../assets/quick_view.svg";
import cart from "../../assets/cart.svg";
import wishlist from "../../assets/wishlist.svg";

function onMouseEnterHandler(useStateHook, initialValue) {
  const [isHovered, setIsHovered] = useStateHook(initialValue);

  const handleMouseEnter = () => {
    setIsHovered(0);
  };

  const handleMouseLeave = () => {
    setIsHovered(-110);
  };

  const hoverMouseEnter = () => {
    setIsHovered(true);
  };

  const hoverMouseLeave = () => {
    setIsHovered(false);
  };

  return {
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
    hoverMouseEnter,
    hoverMouseLeave,
  };
}

const Onhovershow = (props) => {
  const hoverState = onMouseEnterHandler(useState, -110);
  const hoverState2 = onMouseEnterHandler(useState, -110);
  const hoverState3 = onMouseEnterHandler(useState, -110);

  const boxhover = onMouseEnterHandler(useState, false);

  const { item_img, item_name, item_info, item_prize } = props;

  return (
    <div
      className="popular-box"
      onMouseEnter={boxhover.hoverMouseEnter}
      onMouseLeave={boxhover.hoverMouseLeave}
      style={{ border: boxhover.isHovered ? "solid 2px red" : "" }}
    >
      <div className="popular-item-info">
        <div className="h-4/6 flex justify-center items-center">
          <img className="animate-spin-slow" src={item_img} alt="" />
        </div>
        <div className="h-1/6">
          <h1 className="popular-text-h1">{item_name}</h1>
          <h1 className="popular-text-h2">{item_info}</h1>
        </div>
        <div className="h-1/6 popular-text-h3">${item_prize}</div>
      </div>
      <div
        className="popular-item-menu"
        style={{
          opacity: boxhover.isHovered ? "1" : "0",
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <div className="h-1/3">
          <div
            className="popular-item-trigger"
            onMouseEnter={hoverState.handleMouseEnter}
            onMouseLeave={hoverState.handleMouseLeave}
          >
            <img className="h-full w-full p-1" src={quick_view} alt="" />
          </div>
          <div className="popular-item-rec-container">
            <div
              className="popular-item-rec"
              style={{
                transform: `translateX(${hoverState.isHovered + "px"})`,
                transition: "transform 0.5s ease-in-out",
              }}
              onMouseEnter={hoverState.handleMouseEnter}
              onMouseLeave={hoverState.handleMouseLeave}
            >
              <div className="popular-item-text">QuickView</div>
            </div>
          </div>
        </div>
        <div className="h-1/3">
          <div
            className="popular-item-trigger"
            onMouseEnter={hoverState2.handleMouseEnter}
            onMouseLeave={hoverState2.handleMouseLeave}
          >
            <img className="h-full w-full p-1" src={cart} alt="" />
          </div>
          <div className="popular-item-rec-container">
            <div
              className="popular-item-rec"
              style={{
                transform: `translateX(${hoverState2.isHovered + "px"})`,
                transition: "transform 0.5s ease-in-out",
              }}
              onMouseEnter={hoverState2.handleMouseEnter}
              onMouseLeave={hoverState2.handleMouseLeave}
            >
              <div className="popular-item-text">Add to Cart</div>
            </div>
          </div>
        </div>
        <div className="h-1/3">
          <div
            className="popular-item-trigger"
            onMouseEnter={hoverState3.handleMouseEnter}
            onMouseLeave={hoverState3.handleMouseLeave}
          >
            <img className="h-full w-full p-1" src={wishlist} alt="" />
          </div>
          <div className="popular-item-rec-container">
            <div
              className="popular-item-rec"
              style={{
                transform: `translateX(${hoverState3.isHovered + "px"})`,
                transition: "transform 0.5s ease-in-out",
              }}
              onMouseEnter={hoverState2.handleMouseEnter}
              onMouseLeave={hoverState2.handleMouseLeave}
            >
              <div className="popular-item-text">Add to Wishlist</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Onhovershow;
