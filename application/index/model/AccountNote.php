<?php
/**
 * Created by PhpStorm.
 * User: Jim
 * Date: 2018/12/4
 * Time: 17:16
 */

namespace app\index\model;
use think\Model;
use think\Db;
use think\Session;


class AccountNote extends Model
{
    //获取收入记录数据
    public function get_income_note( $uid ){
        $data = Db::name('userincome')->where('uid','=',$uid)->order('date')->paginate(10);
        return $data;
    }

    //获取支出记录数据
    public function get_expend_note( $uid ){
        $data = Db::name('userexpend')->where('uid','=',$uid)->paginate(10);
        return $data;
    }

    //获取用户剩余金额
    public function get_user_account($uid){
        $account = Db::name('bankcard')->field('card_balance')->where('uid','=',$uid)->find();
        return $account;
    }

    //添加支出记录
    public function add_expend_note($uid ,$type ,$description ,$account ,$date ){
        $sql = Db::name('userexpend')->insert([
            'uid'=>$uid,
            'type'=>$type,
            'description'=>$description,
            'account'=>$account,
            'date'=>$date]);
        if ($sql){
            return 1;
        }else{
            return 2;
        }
    }
    //删除支出记录
    public function delete_expend_note($acid){
        $sql = Db::name('userexpend')->where('acid','=',$acid)->delete();
        if ($sql){
            return 1;
        }else{
            return 2;
        }
    }

    //添加收入记录
    public function add_income_note($uid ,$type ,$description ,$account ,$date ){
        $sql = Db::name('userincome')->insert([
            'uid'=>$uid,
            'type'=>$type,
            'description'=>$description,
            'account'=>$account,
            'date'=>$date]);
        if ($sql){
            return 1;
        }else{
            return 2;
        }
    }
    //删除收入记录
    public function delete_income_note($iid){
        $sql = Db::name('userincome')->where('iid','=',$iid)->delete();
        if ($sql){
            return 1;
        }else{
            return 2;
        }
    }

    //增加用户收入金额
    public function add_user_balance($uid,$account){
        $sql = Db::name('bankcard')->where('uid', '=',$uid)->setInc('card_balance', $account);
        if ($sql){
            return 1;
        }else{
            return 2;
        }
    }

    //扣除用户支出金额
    public function reduce_user_balance($uid,$account){
        $sql = Db::name('bankcard')->where('uid', '=',$uid)->setDec('card_balance', $account);
        if ($sql){
            return 1;
        }else{
            return 2;
        }
    }

    //获取删除的收入记录的金额
    public function get_income_account($iid){
        $result = Db::name('userincome')->where('iid','=',$iid)->find();
        return $result['account'];
    }

    //获取删除的支出记录的金额
    public function get_expend_account($acid){
        $result = Db::name('userexpend')->where('acid','=',$acid)->find();
        return $result['account'];
    }

}