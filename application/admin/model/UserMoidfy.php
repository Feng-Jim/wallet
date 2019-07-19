<?php
/**
 * Created by PhpStorm.
 * User: Jim
 * Date: 2018/11/9
 * Time: 18:43
 */

namespace app\admin\model;

use think\Db;
use think\Model;

class UserMoidfy extends Model
{
    //获取用户信息
    public function get_userData($uid){
        $result = Db::name('user')->where('uid',$uid)->find();
        return $result;
    }

    //修改用户信息
    public function modify_user($uid,$name,$email,$phone,$region){
        $sql = Db::name('user')->where('uid',$uid)->update(['name'=>$name,'email'=>$email,'phone'=>$phone,'region'=>$region]);
        if( $sql ){
            return 1 ;
        }else{
            return 2 ;
        }
    }

}