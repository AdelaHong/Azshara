const path = require('path')

// 拼接路径
function resolve (dir) {
  return path.join(__dirname, dir)
}
const port = 3000

module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  devServer: {
    port,
    publicPath: '/',
    open: true,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_SERVICE_MODE === 'mock'
          ? `http://127.0.0.1:${port}/mock`
          : `http://127.0.0.1:${port}`,
        ws: true,
        changOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
    after: process.env.VUE_APP_SERVICE_MODE === 'mock'
      ? require('./mock/mock-server.js') : function (app, server) {}
  },

  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "~@/assets/styles/custom.scss";
        $unit-name: ${process.env.VUE_APP_UNIT_NAME};
        $unit-size: ${process.env.VUE_APP_UNIT_SIZE};
        `
      }
    }
  },

  chainWebpack: config => {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test

    // babel-polyfill 加入 entry
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@mock', resolve('src/mock/'))
      .set('@plugins', resolve('src/plugins/'))
      .set('@styles', resolve('src/assets/styles'))
      .set('@store', resolve('src/store/'))
      .set('@components', resolve('src/components/'))
      .set('@services', resolve('src/services'))
      .set('@assets', resolve('src/assets'))
      .set('@utils', resolve('src/utils'))

    config.when(process.env.NODE_ENV === 'development',
      config => config.devtool('cheap-source-map')
    )
    // 判断环境加入模拟数据
    console.log(process.env.VUE_APP_SERVICE_MODE)
    if (process.env.VUE_APP_SERVICE_MODE === 'mock') {
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
