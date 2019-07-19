<?php
/**
 * Created by PhpStorm.
 * User: Jim
 * Date: 2018/10/26
 * Time: 17:28
 */

namespace app\admin\model;

use phpDocumentor\Reflection\Types\Array_;
use think\helper\Arr;
use think\Model;
use think\Db;

class SiteData extends Model
{
    public function get_siteData(){
        $data = Db::name('sitedata')->where('did','=',1)->find();
        return $data;
    }

    public function get_userCount(){
        $data = Db::name('user')->count();
        return $data;
    }

    public function get_beiJin(){
        $data = Db::name('user')
            ->where('region','like','北京市')
            ->count();
        return $data;
    }

    public function get_guangZhou(){
        $data = Db::name('user')
            ->where('region','LIKE','广州市')
            ->count();
        return $data;
    }

    public function get_shangHai(){
        $data = Db::name('user')
            ->where('region','LIKE','上海市')
            ->count();
        return $data;
    }

    public function get_shenZhen(){
        $data = Db::name('user')
            ->where('region','LIKE','深圳市')
            ->count();
        return $data;
    }

}