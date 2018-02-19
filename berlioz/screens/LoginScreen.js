import React from 'react';
import {
    WebView,
    View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import loginscreen from './loginscreen.html';

export default class LoginScree extends React.Component {
    static navigationOption = {
        header: null,
    };

    render() {
        return (
            <View>
                <WebView
                    ref={'webview'}
                    automaticallyAdjustContentInsets={true}
                    source={loginscreen}
                />
            </View>
        )
    }
}