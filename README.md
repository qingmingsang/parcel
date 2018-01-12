# parcel-demo
parcel getting started

## command

运行server，热更新，并build
默认端口号1234
`parcel index.html` 

`parcel index.html -p <port number>`

热更新但不启动server
`parcel watch index.html` 


//打包
`parcel build  index.html`
这将关闭监听模式和热模块替换，所以它只会编译一次。它还会开启 minifier 来减少输出包文件的大小。Parcel 使用的 minifiers 有 JavaScript 的 uglify-es ，CSS 的 cssnano 还有 HTML 的 htmlnano。

启动生产模式还要设置环境变量 `NODE_ENV=production` .

在js里import的css不生效

超过以及@import的css文件，热编译不生效，需要删除.cache后重新运行。


