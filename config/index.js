// 配置文件
//配置接收者以及定时信息
module.exports = {
    NAME: '啊泽', //好友备注姓名
    NICKNAME: '啊泽泽泽Zzz', //好友昵称
    //如果每天定时推送一次，如每天的早上8点30分30秒定时发送 ：'30 30 8 * * *'
    SENDDATE: '*/10 * * * * *' //定时发送配置（当前配置表示每10秒发送一次）
}