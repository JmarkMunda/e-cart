import React from "react";
import * as Icons from "@expo/vector-icons";
import { ICustomIcon } from "./types";

const CustomIcon = ({
  family,
  name,
  color = "black",
  size = 24,
  ...props
}: ICustomIcon) => {
  const IconComponent = Icons[family];

  return <IconComponent name={name} color={color} size={size} {...props} />;
};

export default CustomIcon;
