module.exports = {
  /**webpack专属的配置放在这里*/
  webpackConfig:{
    mode: 'production',
    devtool: 'source-map',
    plugins : [

    ]
  },
  /**应用自己的配置放在这里*/
  appConfig:{
    reactConsumURL:"https://mfe-20231202-remote.vercel.app",  /**注意是http://xxx:port  不是 http://xxx:port/  最后是没有 / 的 */
    vueConsumURL:"https://mfe-20231202-remotevue.vercel.app",  /**注意是http://xxx:port  不是 http://xxx:port/  最后是没有 / 的 */
  }
}