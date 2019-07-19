<?php
/**
 * Created by PhpStorm.
 * User: Jim
 * Date: 2018/11/1
 * Time: 16:48
 */

namespace app\admin\model;

use think\Db;
use think\Model;

class UserAdd extends Model
{
    public function user_add($username,$password,$name,$email,$phone,$region){
        $data = ['username' => $username, 'password' => $password,'name'=>$name,'email'=>$email,'phone'=>$phone,'region'=>$region];
        $result = Db::name('user')->insert($data);
        if( $result ){
            $sql = Db::name('sitedata')
                ->where('id', 1)
                ->setInc('login_number');
            if( $sql ){
                return 1 ;
            }
        }else{
            return 2 ;
        }
    }

}