module.exports = {
  /**webpack专属的配置放在这里*/
  webpackConfig:{
    mode: 'development',
    devServer: {
      hot:true
    },
    devServer: {
      port: 8281,
    },
    devtool: 'cheap-module-source-map',
    plugins : [

    ]
  },
  /**应用自己的配置放在这里*/
  appConfig:{
    reactConsumURL:"http://localhost:8082",  /**注意是http://xxx:port  不是 http://xxx:port/  最后是没有 / 的 */
    vueConsumURL:"http://localhost:8282",  /**注意是http://xxx:port  不是 http://xxx:port/  最后是没有 / 的 */
  }
}