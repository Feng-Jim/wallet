<?php
/**
 * Created by PhpStorm.
 * User: Jim
 * Date: 2018/11/25
 * Time: 22:41
 */

namespace app\index\model;

use think\Db;
use think\Model;

class ModifyPassword extends Model
{
    public function check_password($uid){
        $result = Db::name('user')->where('uid','=',$uid)->find();
        return $result['password'];
    }
    public function password_modify($uid,$new_password){
        $result = Db::name('user')->where('uid','=',$uid)->update(['password' => $new_password]);
        if( $result ){
            return 1 ;
        }else{
            return 2 ;
        }
    }

}