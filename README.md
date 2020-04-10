# 项目介绍和进度说明

## 开发者

Stephon-Xuan

## 技术栈

前端

uni-app



## 运行和打包

```
npm run dev:%PLATFORM%
npm run build:%PLATFORM%
```

`%PLATFORM%` 可取值如下：

| 值         | 平台         |
| ---------- | ------------ |
| h5         | H5           |
| mp-alipay  | 支付宝小程序 |
| mp-baidu   | 百度小程序   |
| mp-weixin  | 微信小程序   |
| mp-toutiao | 头条小程序   |

其他：

- dev 模式编译出的各平台代码存放于根目录下的 `/dist/dev/`目录，打开各平台开发工具选择对应平台目录即可进行预览（h5 平台不会在此目录，存在于缓存中）；
- build 模式编译出的各平台代码存放于根目录下的 `/dist/build/` 目录，发布时选择此目录进行发布；
- dev 和 build 模式的区别：
	1. dev 模式有 SourceMap 可以方便的进行断点调试；
	2. build 模式会将代码进行压缩，体积更小更适合发布为正式版应用；
	3. 进行 [环境判断](https://uniapp.dcloud.io/frame?id=运行环境判断) 时，dev 模式 process.env.NODE_ENV 的值为 development，build 模式 process.env.NODE_ENV 的值为 production。

## 介绍

本项目是一个用于买卖书籍和捐书的项目

## 逻辑



## 主页面

### 首页

<img src="https://cdn.jsdelivr.net/gh/Stephon-Xuan/images/imgs/书斋-首页.png" style="zoom:80%;" />



> 功能解释

首页主要是导航

1. 搜索

   点击进入[搜索页](#搜索)

2. 轮播

   广告书籍播放

3. 图书捐赠

   点击进入图书捐赠

4. 二手旧书

   点击进入二手书页面

5. 最新发布

   点击进入最新发布

6. 热门推荐

   点击进入热门推荐

### 动态

<img src="https://cdn.jsdelivr.net/gh/Stephon-Xuan\images\imgs\Myproject\书斋客户端\image-20200325000455094.png" alt="image-20200325000455094" style="zoom:80%;" />

### 发布

<img src="https://cdn.jsdelivr.net/gh/Stephon-Xuan\images\imgs\Myproject\书斋客户端\image-20200325000520342.png" alt="image-20200325000520342" style="zoom:80%;" />

### 消息

<img src="https://cdn.jsdelivr.net/gh/Stephon-Xuan\images\imgs\Myproject\书斋客户端\image-20200325000810276.png" alt="image-20200325000810276" style="zoom:80%;" />

### 我的

<img src="https://cdn.jsdelivr.net/gh/Stephon-Xuan\images\imgs\Myproject\书斋客户端\image-20200325000824944.png" alt="image-20200325000824944" style="zoom:80%;" />

## 次要页面

### 搜索

<img src="https://cdn.jsdelivr.net/gh/Stephon-Xuan/images/imgs/Myproject/书斋客户端/书斋-搜索.png" alt="image-20200324231434375" style="zoom: 80%;" />

### 图书捐赠

<img src="https://cdn.jsdelivr.net/gh/Stephon-Xuan/images/imgs/Myproject/书斋客户端/image-20200325000220691.png" alt="image-20200325000220691" style="zoom:80%;" />

### 图书捐赠详情

<img src="https://cdn.jsdelivr.net/gh/Stephon-Xuan\images\imgs\Myproject\书斋客户端\image-20200325000359768.png" alt="image-20200325000359768" style="zoom:80%;" />