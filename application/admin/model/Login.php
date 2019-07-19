<?php
namespace app\admin\model;
use think\Model;
use think\Db;
use think\Session;

class Login extends Model{
    public function login_check($username,$password,$verify){
        $admin = Db::name('admin')->where('username','=',$username)->find();
        if($admin){
            if ( $admin['password'] == $password ){
               if( !captcha_check($verify) ){
                   return 3 ;//验证码错误
               }else{
                   Session::set('aid',$admin['aid']);
                   Session::set('username',$admin['username']);
                   return 1 ;//成功
               }
            }else{
                return 2 ;//用户名或密码错误
            }
        }else{
            return 4 ;//用户不存在
        }
    }
}