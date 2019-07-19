<?php
/**
 * Created by PhpStorm.
 * User: Jim
 * Date: 2018/11/1
 * Time: 16:48
 */

namespace app\index\model;

use think\Db;
use think\Model;
use think\Session;

class UserRegister extends Model
{
    public function user_Register($username,$password,$name,$email,$phone,$region)
    {
        $data = ['username' => $username, 'password' => $password, 'name' => $name, 'email' => $email, 'phone' => $phone, 'region' => $region];
        $result = Db::name('user')->insert($data);
        if ($result) {
            return 1;
        }else{
            return 2;
        }
    }


    //在数据表中用户数量加1
    public function user_number_add(){
        $sql = Db::name('sitedata')
            ->where('did', '=','1')
            ->setInc('user_number');
        if ($sql){
            return 1;
        }else{
            return 2;
        }
    }

    //在银行卡表中添加银行卡信息
//    public function bank_card_add($username,$card_number = '6222600260001072444',$card_balance = "10000.0",$card_username='张三',$card_bank='交通银行'){
//        $sql = Db::name('bank_card')->insert(['username'=> $username ,'card_number' => $card_number ,'card_balance' => $card_balance , 'card_username' => $card_username ,'card_bank' => $card_bank]);
//        if($sql){
//            return 1;
//        }else{
//            return 2;
//        }
//    }
    public function bank_card_add(){
        $uid = Db::name('user')->max('uid');
        Session::set('uid',$uid);
        $data = ['uid'=>$uid];
        $sql =Db::name('bankcard')->insert($data);
        if($sql){
            return 1;
        }else{
            return 2;
        }
    }


}