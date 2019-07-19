<?php
/**
 * Created by PhpStorm.
 * User: Jim
 * Date: 2018/11/9
 * Time: 18:54
 */

namespace app\admin\model;

use think\Db;
use think\Model;

class UserDelete extends Model
{
    public function delete_user($uid){
        $sql = Db::name('user')->where('uid',$uid)->delete();
        if( $sql ){
            return 1 ;
        }else{
            return 2 ;
        }
    }

}