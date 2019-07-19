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

class AddCard extends Model
{
    public function add_card($uid,$card_bank,$card_username,$card_number,$card_balance){
        $sql = Db::name('bankcard')->insert([
            'uid'=>$uid,
            'card_bank'=>$card_bank,
            'card_username'=>$card_username,
            'card_number'=>$card_number,
            'card_balance'=>$card_balance
        ]);
        if ($sql){
            return 1;
        }else{
            return 2;
        }
    }

}