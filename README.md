#### 项目实现
1. 引入scss预处理器简化样式的编写，引入字体图标供tabbar使用
2. 在Promise对象里封装uni.request网络请求并挂载到全局，方便各个页面调用
3. 使用getSwipers方法和请求回来的数据生成轮播图
4. 通过onReachBottom监听触底事件，实现上拉加载更多的功能
5. 通过onPullDownRefresh实现下拉刷新的操作，并通过callback回调函数决定页面是否需要刷新
6. 导入map地图组件对公司地址进行定位
