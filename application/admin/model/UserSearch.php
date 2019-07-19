<?php
/**
 * Created by PhpStorm.
 * User: Jim
 * Date: 2018/11/5
 * Time: 13:45
 */

namespace app\admin\model;

use think\Db;
use think\Model;

class userSearch extends Model
{
    public function get_userData(){
        $data = Db::name('user')->paginate(10);
        return $data;
    }

    //通过用户名查询
    public function username_search($username){
        $data = Db::name('user')->where('username','LIKE','%'.$username.'%')->paginate(10);
        return $data;
    }

    //通过昵称查询
    public function name_search($name){
        $data = Db::name('user')->where('name','LIKE','%'.$name.'%')->paginate(10);
        return $data;
    }

    //通过手机号查询
    public function phone_search($phone){
        $data = Db::name('user')->where('phone','LIKE','%'.$phone.'%')->paginate(10);
        return $data;
    }

    //通过邮箱查询
    public function email_search($email){
        $data = Db::name('user')->where('email','LIKE','%'.$email.'%')->paginate(10);
        return $data;
    }

}