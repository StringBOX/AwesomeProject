import React, { Component } from 'react';
import {AppRegistry, Text, View, TouchableNativeFeedback} from 'react-native'

/**
 * 点击事件
 */
export default class ButtonTest extends Component {
    static _onPressButton() {
        console.log("点击了!");
    }
    static _onLongPressButton() {
        console.log("长按了!");
    }

    render() {
        return (
            <View>
                <TouchableNativeFeedback onPress={ButtonTest._onPressButton}>
                    <Text style={{fontSize:30}}>点击</Text>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onLongPress={ButtonTest._onLongPressButton}>
                    <Text style={{fontSize:30}}>长按</Text>
                </TouchableNativeFeedback>
            </View>
        );
    }
}
// 具体使用哪种组件，取决于你希望给用户什么样的视觉反馈：
//
//     一般来说，你可以使用TouchableHighlight来制作按钮或者链接。注意此组件的背景会在用户手指按下时变暗。
//
//     在Android上还可以使用TouchableNativeFeedback，它会在用户手指按下时形成类似墨水涟漪的视觉效果。
//
//     TouchableOpacity会在用户手指按下时降低按钮的透明度，而不会改变背景的颜色。
//
//     如果你想在处理点击事件的同时不显示任何视觉反馈，则需要使用TouchableWithoutFeedback。
