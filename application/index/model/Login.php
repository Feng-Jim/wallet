<?php
/**
 * Created by PhpStorm.
 * User: Jim
 * Date: 2018/11/21
 * Time: 13:23
 */
namespace app\index\model;
use think\Model;
use think\Db;
use think\Session;

class Login extends Model {
    public function login_check($username,$password,$verify){
        $user = Db::name('user')->where('username','=',$username)->find();
        if($user){
            if ( $user['password'] == $password ){
                if( !captcha_check($verify) ){
                    return 3 ;//验证码错误
                }else{
                    Session::set('uid',$user['uid']);
                    Session::set('username',$user['username']);
                    Session::set('phone',$user['phone']);
                    Session::set('email',$user['email']);
                    Session::set('region',$user['region']);
                    Session::set('name',$user['name']);
                    return 1 ;//成功
                }
            }else{
                return 2 ;//用户名或密码错误
            }
        }else{
            return 4 ;//用户不存在
        }
    }

    //获取用户的银行卡信息
    public function get_bc_data($uid){
        $data = Db::name('bankcard')->where('uid','=',$uid)->select();
        return $data;
    }

    //获用户头像图片的服务器路径
    public function get_image_Url($uid){
        $imageUrl = Db::name('user')->field('imageUrl')->where('uid','=',$uid)->select();
        return $imageUrl;
    }
}