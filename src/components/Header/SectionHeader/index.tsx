import React from "react";
import { TouchableOpacity, View } from "react-native";
import Text from "../../Text";
import CustomIcon from "../../CustomIcon";
import { ICustomIcon } from "../../CustomIcon/types";

interface ISectionHeader {
  label: string;
  leftIcon?: ICustomIcon;
  rightButton?: { label: string; onPress?: () => void };
}

const SectionHeader = ({ label, leftIcon, rightButton }: ISectionHeader) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        <Text variant="headingBold">{label}</Text>
        {leftIcon && <CustomIcon {...leftIcon} />}
      </View>
      {rightButton && (
        <TouchableOpacity onPress={rightButton.onPress}>
          <Text variant="paragraph">{rightButton.label}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionHeader;
