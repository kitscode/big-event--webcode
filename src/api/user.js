//导入request.js请求工具
import request from '@/utils/request.js'

//提供调用注册接口的函数
export const userRegisterService = (registerData)=>{
    //借助于urlSearchParams完成传递
    const params = new URLSearchParams()
    for(let key in registerData) {
        params.append(key,registerData[key]);
    }
    return request.post('user/register',params);
}

//提供调用登录接口的函数
export const userLoginService = (loginData)=>{
    const params = new URLSearchParams();
    for (let key in loginData) {
        params.append(key, loginData[key]);
    }
    return request.post('user/login',params);
}

//获取用户详细信息
export const userInfoService = ()=>{
    return request.get('/user/userInfo');
}

//更新用户信息
export const updateUserInfoService = (userInfoData)=>{
    return request.put('/user/update', userInfoData)
}

//更新用户头像
export const updateUserAvatarService = (avatarUrl)=>{
    const params = new URLSearchParams();
    params.append('avatarUrl',avatarUrl);
    return request.patch('/user/updateAvatar',params);
}

//更改用户密码
export const updateUserPasswordService = (passwordData)=>{
    // const params = new URLSearchParams();
    // for (let key in passwordData) {
    //     params.append(key, passwordData[key]);
    // }
    return request.patch('/user/updatePwd', passwordData);
}