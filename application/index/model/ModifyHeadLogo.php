<?php
/**
 * Created by PhpStorm.
 * User: Jim
 * Date: 2019/1/14
 * Time: 23:44
 */

namespace app\index\model;
use think\Model;
use think\Db;

class ModifyHeadLogo extends Model
{
    public function update_image_url($uid,$url){
        $sql = Db::name('user')->where('uid',$uid)->update(['imageUrl'=>$url]);
        if( $sql ){
            return 1 ;
        }else{
            return 2 ;
        }
    }
}