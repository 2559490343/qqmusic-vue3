import { resolve } from 'path';

function pathResolve(dir) {
    return resolve(__dirname, '.', dir);
}

export default {
    port: 8888,
    // 目录别名
    alias: {
        '/@/': pathResolve('src'),
    },
}