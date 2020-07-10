/*
 * Author: 卓文理
 * Email: zhuowenligg@gmail.com
 * Date: 2020-01-08 14:40:43
 */

const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src/'),
                '@packages': path.resolve(__dirname, './packages/'),
                '@components': path.resolve(__dirname, './src/components/'),
                '@directives': path.resolve(__dirname, './src/directives/'),
                '@mixins': path.resolve(__dirname, './src/mixins/'),
                '@pages': path.resolve(__dirname, './src/pages/'),
                '@services': path.resolve(__dirname, './src/services/'),
                '@store': path.resolve(__dirname, './src/store/'),
                '@stylesheet': path.resolve(__dirname, './src/stylesheet/'),
            },
            extensions: ['.js', '.vue', '.json', '.ts'],
        },
    },
};
