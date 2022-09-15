import React, { Component } from "react";
import { StyleProp, View, ViewStyle } from "react-native";

export interface Props {
  style: StyleProp<ViewStyle>;
}

interface State {
  width: number;
  height: number;
  initialRender: boolean;
}

export default (ComposedComponent) =>
  class extends Component<Props, State> {
    measure;
    constructor(props: Props) {
      super(props);
      this.state = {
        width: 0,
        height: 0,
        initialRender: false,
      };
      this.measure = ({
        nativeEvent: { layout: { width = 0, height = 0 } = {} } = {},
      }) => this.setState({ width, height, initialRender: true });
    }

    render() {
      return this.state.initialRender ? (
        <ComposedComponent
          {...this.props}
          {...this.state}
          onLayout={this.measure}
        />
      ) : (
        <View style={this.props.style} onLayout={this.measure} />
      );
    }
  };
