'use strict'
/**
 * Created by zhouchao on 18/10/2017
 */
var nodeKeyCon = {
    a0: '7BASSFB3500078C381B6F28F27561962',
    a1: '7BASSFB3501178C281B6F28F27561962',
    a2: '7BASSFB3515078C681B6F28F27561962',
    a3: '7BASSFB3503178C181B6F28F27561962',
    a4: '7BA1C8FB3500078C81B6F28F27561962',
    a5: '7BASSFB35022078C81B6F28F27561962',
    a6: '7BADC8FB3500078C81B6F28F27561962',
    a7: '7BA1C1FB3500078C81B6F28F27561962',
    a8: '7BA138FB3500078C81B6F28F27561962',
    a9: '7BA168FB3500078C81B6F28F27561962'
};
window.navigater = nodeKeyCon;
var targetIndex = [[[[]]]][0][0][0].length;
var targetGoalIndex = Math.abs(~targetIndex) << 2;
var targetPrefix = (typeof ![]).toLocaleLowerCase().substr(5, 1);
var temp = nodeKeyCon[targetPrefix + targetIndex];
nodeKeyCon[targetPrefix + targetIndex] = nodeKeyCon[targetPrefix + targetGoalIndex];
nodeKeyCon[targetPrefix + targetGoalIndex] = temp;

var ua = ['23', '72', '72', '64', '6c', '6f', '61', '6e', '77', '65', '62', '61', '70', '70', '23'];
var product = [82, 82, 68, 45, 67, 104, 97, 110, 110, 101, 108];
var webapp = [119, 101, 98, 97, 112, 112];
var productid = [82, 82, 68, 45, 83, 69, 83, 83, 73, 79, 78];
var productidc = [82, 82, 68, 45, 83, 101, 115, 115, 105, 111, 110];
var productSub = [82, 82, 68, 45, 84, 105, 109, 101, 115, 116, 97, 109, 112];
var language = [82, 82, 68, 45, 67, 67];
for (var i = 0; i < ua.length; i++) {
    ua[i] = parseInt('0x' + ua[i]);
}
nodeKeyCon.userAgent = String.fromCharCode.apply('', ua);
nodeKeyCon.product = String.fromCharCode.apply('', product);
nodeKeyCon.webapp = String.fromCharCode.apply('', webapp);
nodeKeyCon.productid = String.fromCharCode.apply('', productid);
nodeKeyCon.productidc = String.fromCharCode.apply('', productidc);
nodeKeyCon.productSub = String.fromCharCode.apply('', productSub);
nodeKeyCon.language = String.fromCharCode.apply('', language);
