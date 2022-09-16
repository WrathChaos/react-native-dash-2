<img alt="React Native Dash 2" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-dash-2)

[![React Native Dash 2](https://img.shields.io/badge/-Extremely%20easy%20to%20create%20a%20React%20Native%20Component%20Library%20with%20both%20Stateful%20and%20Functional%20Component%20Examples-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-dash-2)

[![npm version](https://img.shields.io/npm/v/react-native-dash-2.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-dash-2)
[![npm](https://img.shields.io/npm/dt/react-native-dash-2.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-dash-2)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Dash 2"
        src="assets/Screenshots/react-native-dash-2.png" />
</p>
Image is taken by [react-native-beautiful-timeline](https://github.com/WrathChaos/react-native-beautiful-timeline). This is a usage of the library itself.

# Installation

Add the dependency:

```bash
npm i react-native-dash-2
```

## Peer Dependencies

Zero Dependency

# Usage

## Import

```jsx
import Dash from "react-native-dash-2";
```

## Horizontal Usage

```jsx
<Dash style={{ width: 100, height: 1 }} />
```

## Vertical Usage

```jsx
<Dash style={{ width: 1, height: 100, flexDirection: "column" }} />
```

## Example Project 😍

You can checkout the example project 🥰

Simply run

- `npm i`
- `react-native run-ios/android`

should work of the example project.

# Configuration - Props

## Fundamentals

| Property |         Type         |  Default  | Description                                                                                                     |
| -------- | :------------------: | :-------: | --------------------------------------------------------------------------------------------------------------- |
| style    | StyleProp<ViewStyle> | undefined | set the height and width to make it visible and use `flexDirection: "column"` to make it vertical or horizontal |

## Customization (Optionals)

| Property      |         Type         | Default | Description                  |
| ------------- | :------------------: | :-----: | ---------------------------- |
| dashStyle     | StyleProp<ViewStyle> | default | change dashStyle itself      |
| dashGap       |        number        |    2    | change the each dash's gap   |
| dashLength    |        number        |    4    | change / set dash length     |
| dashThickness |        number        |    2    | change each dash's thickness |
| dashColor     |        color         | "#000"  | change each dash's color     |

## Credits

Heavily inspired by [react-native-dash](https://github.com/obipawan/react-native-dash)
Since this library is not updated more than 3 years, we can continue with this project :)
Thank you for the main library for [obipawan](https://github.com/obipawan)

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Dash 2 is available under the MIT license. See the LICENSE file for more info.
