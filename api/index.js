/*暴露请求接口*/
import {ajax} from './ajax'

const serverUrl = "http://49.234.200.228:8080/shuzhai";

//注册
export const  reqRegister = (data) => ajax.post(serverUrl + '/user/register',data);

/* 登录 */
//账号密码登录
export const reqAccountLogin = (data) => ajax.post(serverUrl + '/user/login',data);

/*获取用户信息 */
export const reqUserInfo = (data) => ajax.get(serverUrl + '/userinfo',data);

/* 修改用户信息 */
export const reqModifiedInfo = (data) => ajax.post(serverUrl + '/userinfo/modified',data);

/* 上传头像 */
export const reqAvatorImg = (data) => ajax.post(serverUrl + '/userinfo/picture',data);

/* 发布卖书 */
export const reqissueUsedbook = (data) => ajax.get(serverUrl + '/book/addBook',data); 

/* 获取商家书籍分类 */
export const reqBookSortList = () => ajax.get(serverUrl+'/book/categoryInfo');

/* 获取每类书籍 */
export const reqBookSort = (data) => ajax.get(serverUrl + '/book/classifiedBook',data); 

/* 获取最新发布/推荐 */
export const reqNewIssue  = (data) => ajax.get(serverUrl+'/book/latestBook',data);

/* 获取用户已发布的书籍 */
export const reqBookIssue  = (data) => ajax.get(serverUrl+'/book/publishedBooks',data);
