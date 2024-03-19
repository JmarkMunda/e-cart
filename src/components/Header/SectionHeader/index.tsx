import React from "react";
import { TouchableOpacity, View } from "react-native";
import Text from "../../Text";
import CustomIcon from "../../CustomIcon";
import { ICustomIcon } from "../../CustomIcon/types";
import { useAppTheme } from "../../../utils/themes";

interface ISectionHeader {
  label: string;
  leftIcon?: ICustomIcon;
  rightButton?: { label: string; onPress?: () => void };
}

const SectionHeader = ({ label, leftIcon, rightButton }: ISectionHeader) => {
  const { colors } = useAppTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        <Text variant="headingBold" color={colors.text}>
          {label}
        </Text>
        {leftIcon && <CustomIcon {...leftIcon} />}
      </View>
      {rightButton && (
        <TouchableOpacity onPress={rightButton.onPress}>
          <Text variant="paragraph" color={colors.text}>
            {rightButton.label}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionHeader;
