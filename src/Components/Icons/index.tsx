import React from "react";
import "./_icons.scss";

interface IconProps {
  iconPath: Array<{ d: string; fill: string }>;
  viewBox?: string;
  width: string;
  height: string;
  iconName: string;
}

const Icons: React.FC<IconProps> = ({
  iconPath,
  viewBox,
  width,
  height,
  iconName,
}) => {
  return (
    <div className="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        width={width}
        height={height}
      >
        {iconPath.map((element, index) => {
          return (
            <path fill={element.fill} d={element.d} key={index + 1}></path>
          );
        })}
      </svg>

      <p className="icon__name">{iconName}</p>
    </div>
  );
};

export default Icons;
