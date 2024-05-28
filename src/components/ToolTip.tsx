import React, { ReactElement, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { TooltipPosition } from "../type/tooltipType";

interface TooltipProps {
  tooltipContent: React.ReactNode;
  position: TooltipPosition;
  children: ReactElement;
  childrenClassName?: string;
  tooltipClassName?: string;
  event?: boolean;
  delaytime?: number;
  startDelay?: number;
  disable?: boolean;
  disableClassName?: string;
}

export default function Tooltip({
  tooltipContent,
  position,
  children,
  tooltipClassName,
  event = false,
  delaytime = 0,
  startDelay = 0,
  disable = false,
  disableClassName,
}: TooltipProps) {
  const [hover, setHover] = useState(false);
  const [disableTooltip, setDisableTooltip] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});

  const childRef = useRef<HTMLDivElement | null>(null);

  const showTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    timeoutRef.current = window.setTimeout(() => {
      if (childRef.current) {
        const rect = childRef.current.getBoundingClientRect();
        let newStyle: React.CSSProperties = {};
        switch (position) {
          case "top-left":
            newStyle = {
              top: rect.top + window.scrollY + 10,
              left: rect.left + window.scrollX,
              transform: "translateY(-100%)",
            };
            break;
          case "top-middle":
            newStyle = {
              top: rect.top + window.scrollY + 10,
              left: rect.left + window.scrollX + rect.width / 2,
              transform: "translate(-50%, -100%)",
            };
            break;
          case "top-right":
            newStyle = {
              top: rect.top + window.scrollY + 10,
              left: rect.left + window.scrollX + rect.width,
              transform: "translate(-100%, -100%)",
            };
            break;
          case "bottom-left":
            newStyle = {
              top: rect.top + window.scrollY + rect.height - 10,
              left: rect.left + window.scrollX,
            };
            break;
          case "bottom-middle":
            newStyle = {
              top: rect.top + window.scrollY + rect.height - 10,
              left: rect.left + window.scrollX + rect.width / 2,
              transform: "translateX(-50%)",
            };
            break;
          case "bottom-right":
            newStyle = {
              top: rect.top + window.scrollY + rect.height - 10,
              left: rect.left + window.scrollX + rect.width,
              transform: "translateX(-100%)",
            };
            break;
          case "left-top":
            newStyle = {
              top: rect.top + window.scrollY,
              left: rect.left + window.scrollX - 10,
              transform: "translate(-100%, 50%)",
            };
            break;
          case "left-middle":
            newStyle = {
              top: rect.top + window.scrollY + rect.height / 2,
              left: rect.left + window.scrollX - 10,
              transform: "translate(-100%, -50%)",
            };
            break;
          case "left-bottom":
            newStyle = {
              top: rect.top + window.scrollY + rect.height,
              left: rect.left + window.scrollX - 10,
              transform: "translate(-100%, -150%)",
            };
            break;
          case "right-top":
            newStyle = {
              top: rect.top + window.scrollY,
              left: rect.left + window.scrollX + rect.width + 10,
              transform: "translateY(50%)",
            };
            break;
          case "right-middle":
            newStyle = {
              top: rect.top + window.scrollY + rect.height / 2,
              left: rect.left + window.scrollX + rect.width + 10,
              transform: "translateY(-50%)",
            };
            break;
          case "right-bottom":
            newStyle = {
              top: rect.top + window.scrollY + rect.height,
              left: rect.left + window.scrollX + rect.width + 10,
              transform: "translateY(-150%)",
            };
            break;
        }
        setTooltipStyle(newStyle);
      }
      setHover(true);
    }, startDelay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    timeoutRef.current = window.setTimeout(() => {
      setHover(false);
    }, delaytime);
  };

  const handleMouseOverTooltip = () => {
    if (event) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    } else {
      hideTooltip();
    }
  };

  const handleMouseOutTooltip = () => {
    if (event) {
      hideTooltip();
    }
  };

  const toggleTooltip = () => {
    setDisableTooltip(!disableTooltip);
  };

  return (
    <div className="toolTip__content">
      <div>
        {disable === true ? (
          <button className={`${disableClassName}`} onClick={toggleTooltip}>
            {disableTooltip ? "DISABLE" : "ENABLE "}
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="tooltip__container" ref={childRef}>
        <div
          onMouseOver={disableTooltip ? undefined : showTooltip}
          onMouseOut={hideTooltip}
          className="tooltip__children"
        >
          {children}
        </div>
        {hover &&
          ReactDOM.createPortal(
            <div
              className={`tooltipBox ${position} ${tooltipClassName} ${
                hover ? "visible" : ""
              }`}
              onMouseOver={handleMouseOverTooltip}
              onMouseOut={handleMouseOutTooltip}
              style={tooltipStyle}
            >
              {tooltipContent}
            </div>,
            document.body
          )}
      </div>
    </div>
  );
}
