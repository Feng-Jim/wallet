<?php
/**
 * Created by PhpStorm.
 * User: Jim
 * Date: 2018/11/25
 * Time: 22:23
 */

namespace app\index\model;
use think\Model;
use think\Db;

class ModifyData extends Model
{
    public function modify_data($uid,$name,$email,$phone,$region){
        $sql = Db::name('user')->where('uid',$uid)->update(['name'=>$name,'email'=>$email,'phone'=>$phone,'region'=>$region]);
        if( $sql ){
            return 1 ;
        }else{
            return 2 ;
        }
    }
}