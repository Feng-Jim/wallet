<?php
/**
 * Created by PhpStorm.
 * User: Jim
 * Date: 2018/11/27
 * Time: 18:10
 */

namespace app\index\model;

use think\Db;
use think\Model;

class BankCard extends Model
{
    //获取用户银行卡号
    public function get_bankcard($uid){
        return Db::name('bankcard')->field('card_number')->where('uid','=',$uid)->select();
    }

    //获取用户银行卡号
    public function get_bankcard_balance($card_number){
        return Db::name('bankcard')->field('card_balance')->where('card_number','=',$card_number)->find();
    }

    //增加银行卡号金额
    public function add_acount($card_number,$account){
        return Db::name('bankcard')->where('card_number', '=',$card_number)->setInc('card_balance', $account);
    }

    //减少银行卡号金额
    public function reduce_acount($card_number,$account){
        return Db::name('bankcard')->where('card_number', '=',$card_number)->setDec('card_balance', $account);
    }

    //获取用户昵称
    public function get_username($uid){
        return Db::name('user')->field('name')->where('uid','=',$uid)->select();
    }

    //获取卡信息
    public function get_card_data($card_number){
        $sql = Db::name('bankcard')->where('card_number','=',$card_number)->select();
        if($sql==null){
            return 1;
        }else{
            return 2;
        }
    }
}