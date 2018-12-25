(function main(React, ReactNative, componentState, Button, StyleSheet1, responsiveHeight, responsiveFontSize, require) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var styles = StyleSheet1.create({
        textInput: {
            borderWidth: 0.9, padding: 0,
            backgroundColor: "white",
            borderColor: "gray",
            marginTop: responsiveHeight(1)
        }
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _react = React;

    var _react2 = _interopRequireDefault(_react);

    var _reactNative = ReactNative;

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var NewComponent = function (_React$Component) {
        _inherits(NewComponent, _React$Component);
        //console.log(_react2.default.Component)
        function NewComponent(props) {
            _classCallCheck(this, NewComponent);

            var _this = _possibleConstructorReturn(this, (NewComponent.__proto__ || Object.getPrototypeOf(NewComponent)).call(this, props));

            _this.state = { existingUserId: "Spamlay" };
            return _this;
        }

        _createClass(NewComponent, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                console.warn('New component mounted1');
            }
        }, {
            key: 'render',
            value: function render() {
                var _this = this;
                return _react2.default.createElement(_reactNative.View, { style: styles.container },

                    [ _react2.default.createElement(_reactNative.TextInput, {
                        "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04",
                        "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04",
                        "cssClass": "form-control component-group",
                        "fieldCssClass": "",
                        style: styles.textInput,
                        "bindingMode": "",
                        onChangeText: function (val) {
                            componentState.setState({ confirmUserId: val })
                        },
                        "placeHolder": ""
                    }, [])
                    ])
            }
        }]);

        return NewComponent;
    }(_react2.default.Component);

    return NewComponent
})
