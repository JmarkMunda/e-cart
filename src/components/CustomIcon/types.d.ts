export type IconFamily =
  | "Entypo"
  | "EvilIcons"
  | "Feather"
  | "FontAwesome"
  | "FontAwesome5"
  | "Foundation"
  | "Ionicons"
  | "MaterialIcons"
  | "MaterialCommunityIcons"
  | "Octicons"
  | "Zocial"
  | "SimpleLineIcons"
  | "AntDesign";

type IconNames = {
  [key in IconFamily]: string;
};

export interface ICustomIcon {
  family: IconFamily;
  name: string;
  color?: string;
  size?: number;
}
