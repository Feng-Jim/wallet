<?php
/**
 * Created by PhpStorm.
 * User: Jim
 * Date: 2018/10/22
 * Time: 15:42
 */
namespace app\admin\controller;

use think\Db;
use think\Controller;
use think\Session;
use app\admin\model\UserDelete;
use app\admin\model\UserMoidfy;
use app\admin\model\UserSearch;
use app\admin\model\PassModify;
use app\admin\model\UserAdd;
use app\admin\model\SiteData as Sit;
use app\admin\model\Login as Log;//引入使用模型命名空间 as Log 为别名，所以要起别名引入模型

class Admin extends Controller{
    public function index(){
        return $this->fetch();
    }

    public function  login(){
        return $this->fetch();
    }

    public function siteData(){
        $sit = new Sit;
        $sitedata = array();
        $data = $sit->get_siteData();
        $sitedata[0] = $data['user_number'];
        $sitedata[1] = $data['login_number'];
        $sitedata[2] = $data['transfer_number'];
        $aid = Session::get('aid');
        $username = Session::get('username');

        $user_count = $sit->get_userCount();
        $beijin_count = $sit->get_beiJin();
        $guangzhou_count = $sit->get_guangZhou();
        $shanghai_count = $sit->get_shangHai();
        $shenzhen_count = $sit->get_shenZhen();
        $regionother_count = $user_count - $beijin_count - $guangzhou_count - $shanghai_count - $shenzhen_count;
        $this->assign(['user_count'=>$user_count,'beijin_count'=>$beijin_count,'guangzhou_count'=>$guangzhou_count,'shenzhen_count'=>$shenzhen_count,'shanghai_count'=>$shanghai_count,'regionother_count'=>$regionother_count]);
        return $this->fetch('siteData',['username'=>$username,'aid'=>$aid,'login_number'=>$sitedata[1],'transfer_number'=>$sitedata[2]]);
    }

    public function passModify(){
        $aid = Session::get('aid');
        $username = Session::get('username');
        $this->assign(['username'=>$username,'aid'=>$aid]);
        return $this->fetch();
    }

    public function userAdd(){
        $aid = Session::get('aid');
        $username = Session::get('username');
        $this->assign(['username'=>$username,'aid'=>$aid]);
        return $this->fetch();
    }

    public function userSearch(){
        $aid = Session::get('aid');
        $username = Session::get('username');
        $this->assign(['username'=>$username,'aid'=>$aid]);

        $list = new UserSearch();
        $userlist = $list->get_userData();
        $this->assign('userlist',$userlist);
        return $this->fetch();
    }

    public function userModify(){
        $aid = Session::get('aid');
        $username = Session::get('username');
        $this->assign(['username'=>$username,'aid'=>$aid]);

        $uid = input('get.uid');
        $model = new UserMoidfy;
        $result = $model->get_userData($uid);
        $this->assign(['result'=>$result,'uid'=>$uid]);
        return $this->fetch('userModify');
    }







    //登录验证
    public function login_check(){
        $username = input('username');
        $password = input('password');
        $verify = input('verify');
        if( $username == "" or $password == "" ){
            return $this->error('账号或密码不能为空');
        }elseif( $verify == "" ){
            return $this->error('验证码不能为空');
        }else{
            if(request()->isPost()){
                $login = new Log ;//实例化类（别名引入）
                $status = $login->login_check($username,$password,$verify);
                if ( $status == 1 ){
                    return $this->siteData();
                }elseif ( $status == 2 ){
                    return $this->error('用户名或密码错误');
                }elseif ( $status == 3 ){
                    return $this->fetch('login');
                }else{
                    return $this->error('用户不存在');
                }
            }
        }
    }

    //管理员登录注销
    public function logout(){
        Session::clear('aid');
        Session::clear('username');
        return $this->fetch('login');
    }

    //修改密码
    public function password_Modify(){
            $aid = Session::get('aid');
            $username = Session::get('username');
            $password = input('password');
            $new_password = input('new_password');
            $new_password2 = input('new_password2');

            $pass = new PassModify;
            $get_pass = $pass->get_password($username);
            if( $get_pass == $password ){
                $result2 = $pass->password_modify($username,$new_password);
                if( $result2 == 1 ){
                    $data = array(
                        'status'=>'ok',
                    );
                    return json($data);
                }else{
                    $data = array(
                        'status'=>'fail',
                    );
                    return json($data);// 2修改不成功
                }
            }else{
                $data = array(
                    'status'=>'error',
                );
                return json($data);// 3密码不正确
            }
        }

    //添加用户
    public function user_Add(){
        $password = input('password');
        $username = input('username');
        $name = input('name');
        $email = input('email');
        $phone = input('phone');
        $region = input('region');

        $model = new UserAdd;
        $result = $model->user_add($username,$password,$name,$email,$phone,$region);
        if($result == 1){
            $data = array(
                'status'=>'ok',
            );
            return json($data);
        }else{
            $data = array(
                'status'=>'fail',
            );
            return json($data);
        }
    }

    //修改用户信息
    public function user_Modify(){
        $uid = input('uid');
        $name = input('name');
        $email = input('email');
        $phone = input('phone');
        $region = input('region');

        $model = new UserMoidfy;
        $result = $model->modify_user($uid,$name,$email,$phone,$region);
        if( $result == 1 ){
            $data = array(
                'status'=>'ok',
            );
            return json($data);
        }else{
            $data = array(
                'status'=>'fail',
            );
            return json($data);
        }
    }

    //删除用户
    public function user_Delete(){
        $uid = input('uid');
        $model = new UserDelete;
        $result = $model->delete_user($uid);
        if($result == 1){
            $data = array(
                'status'=>'ok',
            );
            return json($data);
        }else{
            $data = array(
                'status'=>'fail',
            );
            return json($data);
        }
    }

    //搜索用户
    public function userSearch_content(){
        $aid = Session::get('aid');
        $username = Session::get('username');
        $this->assign(['username'=>$username,'aid'=>$aid]);

        $value = input('value');
        $text = input('text');
        $model = new UserSearch;
        if($value == 1){
            $result = $model->username_search($text);
        }elseif ($value == 2){
            $result = $model->name_search($text);
        }elseif ($value == 3){
            $result = $model->phone_search($text);
        }else{
            $result = $model->email_search($text);
        }

        if( $result ){
            $this->assign(['result'=>$result]);
            return $this->fetch();
        }else{
           return false;
        }

    }



}