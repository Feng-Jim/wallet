<?php
/**
 * Created by PhpStorm.
 * User: Jim
 * Date: 2018/10/28
 * Time: 21:50
 */

namespace app\admin\model;


use think\Db;
use think\Model;

class PassModify extends Model
{
    public function get_password($Session_username){
        $result = Db::name('admin')->where('username','=',$Session_username)->find();
        return $result['password'];
    }

    public function password_modify($Session_username,$new_password){
        $result = Db::name('admin')->where('username','=',$Session_username)->update(['password' => $new_password]);
        if( $result ){
            return 1 ;
        }else{
            return 2 ;
        }
    }

}