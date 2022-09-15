import * as React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  LayoutChangeEvent,
  PushNotificationIOS,
} from "react-native";
import Measure from "./measure";
import { getDashStyle, isStyleRow } from "./utils";

interface DashProps extends State {
  style?: StyleProp<ViewStyle>;
  dashGap?: number;
  dashLength?: number;
  dashThickness?: number;
  height: number;
  width: number;
  dashColor?: string;
  hello: React.ElementType;
  dashStyle: StyleProp<ViewStyle>;
  onLayout?: (event: LayoutChangeEvent) => void;
}

interface State {
  width: number;
  height: number;
  initialRender: boolean;
}

const Dash: React.FC<DashProps> = ({
  style,
  dashGap = 2,
  dashLength = 4,
  height,
  width,
  dashThickness = 2,
  dashColor = "#000",
  dashStyle,
  onLayout,
}) => {
  const isRow = isStyleRow(style);
  const length = isRow ? width : height;
  const n = Math.ceil(length / (dashGap + dashLength));

  const calculatedDashStyles = getDashStyle({
    style,
    dashGap,
    dashLength,
    dashThickness,
    dashColor,
  });

  const arr = [];
  for (let index = 0; index < n; index++) {
    arr.push(<View key={index} style={[calculatedDashStyles, dashStyle]} />);
  }

  return (
    <View
      onLayout={onLayout}
      style={[style, isRow ? styles.row : styles.column]}
    >
      {arr}
    </View>
  );
};

export default Measure(Dash);

const styles = StyleSheet.create({
  row: { flexDirection: "row" },
  column: { flexDirection: "column" },
});
