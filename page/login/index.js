/**
 * 目标1：验证码登录
 * 1.1 在 utils/request.js 配置 axios 请求基地址
 * 1.2 收集手机号和验证码数据
 * 1.3 基于 axios 调用验证码登录接口
 * 1.4 使用 Bootstrap 的 Alert 警告框反馈结果给用户
 */

//1.2 收集手机号和验证码数据
document.querySelector('.btn').addEventListener('click',()=>{
     const form=document.querySelector('.login-form')
     const data=serialize(form,{hash:true,empty:true})
     console.log(data)

    //1.3 基于 axios 调用验证码登录接口
    axios({
        url:'/v1_0/authorizations',
        method:'POST',
        data
    }).then(res=>{
        myAlert(true,'登录成功')
        console.log(res);
    }).catch(err=>{
        myAlert(false,err.response.data.message)
        console.dir(err.response.data.message);
    })
})