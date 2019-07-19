<?php
namespace app\index\controller;

use app\index\model\ModifyPassword;
use think\Db;
use think\Request;
use think\File;
use think\Session;
use think\Controller;
use app\index\model\Login;
use app\index\model\UserRegister;
use app\index\model\ModifyData;
use app\index\model\AddCard;
use app\index\model\AccountNote;
use app\index\model\ModifyHeadLogo;
use app\index\model\TransferNote;
use app\index\model\BankCard;
use phpmailer\phpmailer;


class Index extends Controller
{
    //转账功能
    public function transfer_account(){
        $uid = Session::get('uid');
        $card_number=input('card_number');
        $shou_card_number=input('shou_card_number');
        $account=input('account');
        $email=input('email');

        $model = new BankCard();
        $balance = $model->get_card_data($card_number);
        $balance2 = $model->get_card_data($shou_card_number);

        //判断用户卡号是否正确
        if($balance==1){
            $data = array(
                'state'=>'您卡号错误，请输入正确卡号',
            );
            return json($data);
        }

        //判断转账卡号是否正确
        if($balance2==1){
            $data = array(
                'state'=>'您转账的卡号错误，请输入正确的转账卡号',
            );
            return json($data);
        }

        //判断转账金额是否大于银行卡内金额
        if($account > $balance){
            $data = array(
                'state'=>'您卡内的余额不足!',
            );
            return json($data);
        }else{
            $fa = $model->reduce_acount($card_number,$account);
            $shou = $model->add_acount($shou_card_number,$account);
            if($fa && $shou){
                $username = $model->get_username($uid);
                if($email != null){
                    $send = $this->send_email($email,$account,$username['name']);
                    if($send == 1){
                        $data = array(
                            'state'=>'成功转账并通知好友!',
                        );
                        return json($data);
                    }else{
                        $data = array(
                            'state'=>'转账成功,但通知好友失败!',
                        );
                        return json($data);
                    }
                }
            }else{
                $data = array(
                    'state'=>'转账失败!',
                );
                return json($data);
            }
        }
    }

    public function login()
    {
        return $this->fetch();
    }

    public function  index(){
        $uid = Session::get('uid');
        $name = Session::get('name');
        $username = Session::get('username');
        $email = Session::get('email');
        $phone = Session::get('phone');
        $region = Session::get('region');
        if( $uid != ""){
            $model = new Login;
            $data = $model->get_bc_data($uid);
            $imageUrl = $model->get_image_Url($uid);
            $card_number1 = substr($data[0]['card_number'],0,4);
            $card_number2 = substr($data[0]['card_number'],-4);
            $data[0]['card_number'] = $card_number1."************".$card_number2;
            $this->assign('card_data',$data);
            if($imageUrl == null){
                $url = "<img src=\"_INDEX_IMG_/logo.gif\" />";
            }else{
                $url = "<img src=\"_INDEX_IMG_/logo.gif\" />";
            }

            $this->assign(['url'=>$url,'name'=>$name,'username'=>$username,'email'=>$email,'phone'=>$phone,'region'=>$region,'imageUrl'=>$imageUrl]);
            return $this->fetch();
        }else{
            return false;
        }
    }
    public function  account_notebook(){
        $uid = Session::get('uid');
        if( $uid != "" ){
            $model = new AccountNote();
            $expend_data = $model->get_expend_note($uid);
            $data = $model->get_user_account($uid);
            $account =$data['card_balance'];
            $this->assign('expend_data',$expend_data);
            $this->assign(['account'=>$account]);
            return $this->fetch();
        }else{
            return false;
        }
    }
    public function account_notebook2(){
        $uid = Session::get('uid');
        if( $uid != "" ){
            $model = new AccountNote();
            $income_data = $model->get_income_note($uid);
            $data = $model->get_user_account($uid);
            $account =$data['card_balance'];
            $this->assign('income_data',$income_data);
            $this->assign(['account'=>$account]);
            return $this->fetch();
        }else{
            return false;
        }
    }
    //好友转账首页（转账记录）
    public function friends(){
        $uid = Session::get('uid');
        $model = new TransferNote();
        $card_model = new BankCard();
        $fa_data = $model->get_fa_transfer_note($uid);
        $card_datas = $card_model->get_bankcard($uid);

        $this->assign('fa_data',$fa_data);
        $this->assign('card_datas',$card_datas);
        return $this->fetch();
    }
    //好友转账（到账记录）
    public function friends_shou(){
        $uid = Session::get('uid');
        $model = new TransferNote();
        $shou_data = $model->get_shou_transfer_note($uid);
        $this->assign('shou_data',$shou_data);
        return $this->fetch();
    }
    public function financial_recommend(){
        return $this->fetch();
    }

    public function test(){
        return EXTEND_PATH;
    }
    public function test2(){
        return phpinfo();
    }


    //登录验证
    public function loginCheck(){
        $username = input('username');
        $password = input('password');
        $verify = input('verify');

        $model = new Login ;//实例化类（别名引入）
        $status = $model->login_check($username,$password,$verify);
        if ( $status == 1 ){
            $sql = Db::name('sitedata')
                ->where('did','=', 1)
                ->setInc('login_number');
            $data = array(
                'status'=>'ok',
            );
            return json($data);//1登录成功
        }elseif ( $status == 2 ){
            $data = array(
                'status'=>'fail',
            );
            return json($data);// 2登录不成功
        }elseif ( $status == 3 ){
            $data = array(
                'status'=>'verify_error',
            );
            return json($data);// 3验证码错误
        }else{
            $data = array(
                'status'=>'no_user',
            );
            return json($data);// 4用户不存在
        }
    }

    //用户注册
    public function user_register(){
        $password = input('password');
        $username = input('username');
        $name = input('name');
        $email = input('email');
        $phone = input('phone');
        $region = input('region');

        $model = new UserRegister;
        $result = $model->user_Register($username,$password,$name,$email,$phone,$region);
        $result2 = $model->user_number_add();
        if($result == 1){
            $result3 = $model->bank_card_add();
            if($result2 == 1 && $result3 == 1){
                $data = array(
                    'status'=>'ok',
                );
                return json($data);
            }else{
                return false;
            }

        }else{
            $data = array(
                'status'=>'fail',
            );
            return json($data);
        }
    }

    //修改信息
    public function modify_data(){
        $uid = Session::get('uid');
        $name = input('name');
        $email = input('email');
        $phone = input('phone');
        $region = input('region');

        $model = new ModifyData;
        $result = $model->modify_data($uid,$name,$email,$phone,$region);
        if( $result == 1 ){
            $data = array(
                'status'=>'ok',
            );
            return json($data);
        }else{
            $data = array(
                'status'=>'fail',
            );
            return json($data);
        }
    }

    //修改密码
    public function modify_password(){
        $uid = Session::get('uid');
        $password = input('password');
        $new_password = input('new_password');

        $model = new ModifyPassword();
        $check_password = $model->check_password($uid);
        if( $check_password == $password ){
            $result2 = $model->password_modify($uid,$new_password);
            if( $result2 == 1 ){
                $data = array(
                    'status'=>'ok',
                );
                return json($data);
            }else{
                $data = array(
                    'status'=>'fail',
                );
                return json($data);// 2修改不成功
            }
        }else{
            $data = array(
                'status'=>'error',
            );
            return json($data);// 3密码不正确
        }
    }

    public function add_card(){
        $uid = Session::get('uid');
        $card_bank = input('card_bank');
        $card_username = input('card_username');
        $card_number = input('card_number');
        $card_balance = input('card_balance');

        $model = new AddCard;
        $result = $model->add_card($uid,$card_bank,$card_username,$card_number,$card_balance);
        if($result == 1){
            return json(['status'=>'ok']);
        }else{
            return json(['status'=>'fail']);
        }
    }

    //添加支出记录
    public function add_expendNote(){
        $uid = Session::get('uid');
        $type = input('type');
        $description = input('description');
        $account = input('account');
        $date = input('date');

        $model = new AccountNote();
        $result = $model->add_expend_note($uid,$type,$description,$account,$date);
        if($result == 1){
            $result2 = $model->reduce_user_balance($uid,$account);
            if($result2 == 1){
                return json(['status'=>'ok']);
            }else{
                return false;
            }
        }else{
            return json(['status'=>'fail']);
        }
    }
    //删除支出记录
    public function delete_expendNote(){
        $uid = Session::get('uid');
        $acid = input('acid');

        $model = new AccountNote();
        $account = $model->get_expend_account($acid);
        $result = $model->delete_expend_note($acid);
        if($result == 1){
            $result2 = $model->add_user_balance($uid,$account);
            if ($result2 == 1){
                return json(['status'=>'ok']);
            }else{
                return false;
            }
        }else{
            return json(['status'=>'fail']);
        }
    }

    //添加收入记录
    public function add_incomeNote(){
        $uid = Session::get('uid');
        $type = input('type');
        $description = input('description');
        $account = input('account');
        $date = input('date');

        $model = new AccountNote();
        $result = $model->add_income_note($uid,$type,$description,$account,$date);
        if($result == 1){
            $result2 = $model->add_user_balance($uid,$account);
            if($result2 == 1){
                return json(['status'=>'ok']);
            }else{
                return false;
            }
        }else{
            return json(['status'=>'fail']);
        }
    }

    //删除收入记录
    public function delete_incomeNote(){
        $uid = Session::get('uid');
        $iid = input('iid');

        $model = new AccountNote();
        $account = $model->get_income_account($iid);
        $result = $model->reduce_user_balance($uid,$account);
        if($result == 1){
            $result2 = $model->delete_income_note($iid);
            if($result2 == 1){
                return json(['status'=>'ok']);
            }else{
                return false;
            }
        }else{
            return json(['status'=>'fail']);
        }
    }

    //修改头像功能
    public function modify_image_url(){
        $uid = Session::get('uid');
        $file = request()->file('file');
        if (empty($file)) {
            $this->error('请选择上传文件');
        }
        //移动到框架应用根目录/public/uploads/ 目录下
        $url = ROOT_PATH . 'public/upload';
        $info = $file->move($url,$uid.".jpg");
        if ($info) {
            $model = new ModifyHeadLogo();
            $imageUrl = $url."/".$uid.".jpg";
            $model->update_image_url($uid,$imageUrl);
            $this->success('文件上传成功');
            echo $info->getFilename();
        } else {
            //上传失败获取错误信息
            $this->error($file->getError());
        }

    }

    //管理员登录注销
    public function logout(){
        Session::clear('uid');
        Session::clear('username');
        return $this->fetch('login');
    }

    private function send_email($email,$account,$username){
        {
            $mail = new PHPMailer();

            $mail->isSMTP();// 使用SMTP服务
            $mail->CharSet = "utf8";// 编码格式为utf8，不设置编码的话，中文会出现乱码
            $mail->Host = "smtp.163.com";// 发送方的SMTP服务器地址
            $mail->SMTPAuth = true;// 是否使用身份验证
            $mail->Username = "15915719715@163.com";// 发送方的163邮箱用户名，就是你申请163的SMTP服务使用的163邮箱
            $mail->Password = "F333666";// 发送方的邮箱密码，注意用163邮箱这里填写的是“客户端授权密码”而不是邮箱的登录密码！
            $mail->SMTPSecure = "ssl";// 使用ssl协议方式
            $mail->Port = 465;// 163邮箱的ssl协议方式端口号是465/994

            $mail->setFrom("15915719715@163.com","111");// 设置发件人信息，如邮件格式说明中的发件人，这里会显示为Mailer(xxxx@163.com），Mailer是当做名字显示
            $mail->addAddress("377157254@qq.com","222");// 设置收件人信息，如邮件格式说明中的收件人，这里会显示为Liang(yyyy@163.com)

            $mail->isHTML(true); // 设置邮件格式为HTML
            $mail->Subject = "到账通知";// 邮件标题
//            $mail->Body = "您好，".$username."成功给您转账 <b>".$account."元</b>！";// 邮件正文
            $mail->Body = "您好，";// 邮件正文
            if(!$mail->send()){// 发送邮件
                return 2;// 输出错误信息
            }else{
                return 1;
            }
        }
    }


    public function buffering(){
        ob_start();
        require_once('D:\phpStudy\wallet\application\index\view\index\login.html');
        if(file_put_contents('../application/index/view/index/buffering.html',ob_get_contents())){
            return $this->fetch();
        }else{
            echo "error";
        }
    }
}
