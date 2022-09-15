import { StyleSheet } from "react-native";

export const isStyleRow = (style) => {
  const flatStyle = StyleSheet.flatten(style || {});
  return flatStyle.flexDirection !== "column";
};

const getDashStyleId = (
  { dashGap, dashLength, dashThickness, dashColor },
  isRow,
) =>
  `${dashGap}-${dashLength}-${dashThickness}-${dashColor}-${
    isRow ? "row" : "column"
  }`;

const createDashStyleSheet = (
  { dashGap, dashLength, dashThickness, dashColor },
  isRow,
) => {
  const idStyle = StyleSheet.create({
    style: {
      width: isRow ? dashLength : dashThickness,
      height: isRow ? dashThickness : dashLength,
      marginRight: isRow ? dashGap : 0,
      marginBottom: isRow ? 0 : dashGap,
      backgroundColor: dashColor,
    },
  });
  return idStyle.style;
};

let stylesStore = {};
export const getDashStyle = ({
  style,
  dashGap,
  dashLength,
  dashThickness,
  dashColor,
}) => {
  const isRow = isStyleRow(style);
  const id = getDashStyleId(
    { dashGap, dashLength, dashThickness, dashColor },
    isRow,
  );
  if (!stylesStore[id]) {
    stylesStore = {
      ...stylesStore,
      [id]: createDashStyleSheet(
        { dashGap, dashLength, dashThickness, dashColor },
        isRow,
      ),
    };
  }
  return stylesStore[id];
};
