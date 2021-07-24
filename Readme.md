# 项目介绍
## 背景
因为学校疫情防控的原因，我们学生需要每天都进行打卡，但是因为经常有很多学生会忘记打卡，所以学校组织人员每天在群里提醒，但是提醒的方式很粗暴，通常都是`@所有人`，导致很多人当日已打卡完成，但是还是被`@`，这种方式效率低下还招人厌烦。当然，除此之外，学校也有开发一款每日自动提醒打卡的工具，但使用量不多，而且服务器经常不稳定，接收到推送消息后，无法点击进去打卡详情链接里，效率受到影响。
## 目标
由于以上的原因（痛点），就想到自己开发一款可以每日自动推送打卡信息到微信消息列表中，实现每日提醒的功，这样一款产品工具。
## 方案设计和选择
### 方案一：使用公众号进行每日自动定时推送
#### 优点
- 方便，直接用自己已有的公众号就可以实现
#### 问题
- 触及性不好，无法让用户第一时间感知（因为公众号推送不像微信消息，直接显示在聊天列表，而是在“订阅号”目录下面）
- 没办法配置指定用户，只能全部订阅者一起同时推送（这显然不是我想要的），因为订阅者（关注公众号的人）不全是学校的人，其他人根本不需要接到这条定时疫情打卡消息推送。

### 方案二：使用“服务号”
#### 优点
- 可以采用“订阅-发布”的形式，服务号定时推送的消息只对订阅者发送。（就可以做到让涉众自己来订阅定时推送的功能），针对性较强。
- 使用这种方法配置较简单，甚至可以做到不需要写代码，直接在服务号侧通过图形化界面就可以搞定。
#### 问题
- 开通服务号需要企业才可以，个人没办法开通。（注：等于直接扼杀了这个方案）

### 方案三：借助第三方库
参考开源项目，地址：https://github.com/leochen-g/wechatBot
#### 优点
- 可方便地进行定制化，项目接口可自由实现
#### 问题
- 需要一定的开发成本

## 方案选择
综合考虑以上因素，最终选择方案三。

<br>

# 启动步骤
## 将项目clone到本地
> git clone  项目地址 

## 安装依赖
> npm install

## 运行
> node index.js

<br>


# 注意点
- 项目环境需要安装有node
- （待补充）