(function main(React, ReactNative, StyleSheet1, responsiveHeight,
     responsiveFontSize, Header, Footer, Platform, CustomDivider, Loader, 
     LinkField, ListItem,
    localStorage, api, navigate,require) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var titleSize = 3.2;
    var grayColor = "#d9d9d9";

    var styles = StyleSheet1.create({
        bottomLayer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: responsiveHeight(2),
            marginRight: responsiveHeight(2),
        },
        container: {
            flex: 1,
        },
        padding: {
            padding: responsiveHeight(2),
        },
        scrollView: {
            flex: 1,
            backgroundColor: "white",
        },
        headerContainter: {
            flexDirection: "row",
            paddingTop: responsiveHeight(2),
            paddingBottom: responsiveHeight(2),
            // alignContent:"center",
            backgroundColor: "blue",
            justifyContent: 'space-around',
            alignItems: "center"
        },
        accountSummaryContainer: {
            paddingBottom: responsiveHeight(2),
            paddingLeft: responsiveHeight(1.5)
        },
        accountSummaryText: {
            fontSize: responsiveFontSize(titleSize),
            textAlign: "justify"
        },
        customStyle: {
            backgroundColor: "green"
        },
        headerBorder: {
            alignItems: "center",
            flexDirection: "row",
            paddingTop: responsiveHeight(0.3)
        },
        mainContainer: {
            justifyContent: "flex-start", backgroundColor: "white", padding: responsiveHeight(1)
        },
        grayLine: {
            // paddingBottom: responsiveHeight(2),
            marginLeft: responsiveHeight(1), marginRight: responsiveHeight(1)
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

    function indObjectByKey(array, key, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] === value) {
                return array[i];
            }
        }
        return null;
    }

    function showLoading(localState) {
        localState.setState({ isLoading: true });
    }

    function hideLoading(localState) {
        localState.setState({ isLoading: false });
    }

    var NewComponent = function (_React$Component) {
        _inherits(NewComponent, _React$Component);
        //console.log(_react2.default.Component)
        function NewComponent(props) {
            _classCallCheck(this, NewComponent);

            var _this = _possibleConstructorReturn(this, (NewComponent.__proto__ || Object.getPrototypeOf(NewComponent)).call(this, props));

            _this.state = {
                accountSummary: [
                ],
                isLoading: false
            }
            return _this;
        }

        _createClass(NewComponent, [{
            key: 'componentDidMount',
            value: function componentDidMount() {

                //const { navigate } = this.props.navigation;
      
            }
        }, {
            key: 'render',
            value: function render() {
                var _this = this;

                var i = 1;
                var isAndroid = Platform.OS == "android" ? true : false

                return _react2.default.createElement(_reactNative.View, { style: styles.container }, [

                    _react2.default.createElement(Loader, { key: ++i, isLoading: _this.state.isLoading },
                        [
                        ]),
                    _react2.default.createElement(_reactNative.View, { key: ++i, style: isAndroid ? {} : { paddingTop: 10 } },
                        [
                            _react2.default.createElement(Header, { key: ++i })
                        ]),
                    // End Of Header

                    _react2.default.createElement(_reactNative.View, { key: ++i, style: styles.mainContainer }, [

                        _react2.default.createElement(_reactNative.View, {
                            key: ++i, style: styles.accountSummaryContainer
                        }, [

                                _react2.default.createElement(_reactNative.Text, {
                                    key: ++i, style: styles.accountSummaryText
                                }, [
                                        "Account Summary "
                                    ])

                            ]),
                        ,
                        // Gray Line
                        _react2.default.createElement(_reactNative.View, {
                            key: ++i, style: styles.grayLine
                        }, [

                                _react2.default.createElement(CustomDivider, {
                                    key: ++i
                                }, [
                                    ])
                            ]),

                        // Search Bar

                        _react2.default.createElement(_reactNative.View, {
                            key: ++i, style: { flexDirection: "row", justifyContent: "flex-end" }
                        }, [

                                _react2.default.createElement(LinkField, {
                                    key: ++i,
                                    heading: "Search", containerStyle: { padding: responsiveHeight(2) }
                                }, [
                                    ])
                            ])
                    ])
                    ,
                    // End og Main Container

                    _react2.default.createElement(_reactNative.ScrollView, {
                        key: ++i,
                        style: styles.scrollView
                    }, [

                            _react2.default.createElement(_reactNative.View, {
                                key: ++i,
                                style: { height: 900 }
                            }, [

                                    _react2.default.createElement(_reactNative.View, {
                                        key: ++i,
                                        style: { flex: 1 }
                                    }, [

                                            // For loop for render Method....
                                            _this.state.accountSummary.map((account, index) => {
                                                return (
                                                    _react2.default.createElement(ListItem, { key: ++i, itemIndex: ++i, accountItem: account })
                                                )
                                            })
                                        ])
                                ])
                        ]),
                    _react2.default.createElement(Footer, { key: ++i })
                ])
            }
        }]);

        return NewComponent;
    }(_react2.default.Component);

    return NewComponent
})
