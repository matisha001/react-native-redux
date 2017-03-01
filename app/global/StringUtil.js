/**
 * Created by Administrator on 2016/12/17.
 */
export default class StringUtil {
    static isPhoneNumber(str) {
        let reg = /^1[34578]\d{9}$/;
        if (reg.test(str)) {
            return true;
        }
        return false;
    }
    static isQQNum(str) {
        let reg = /^[1-9][0-9]{4,}$/;
        if (reg.test(str)) {
            return true;
        }
        return false;
    }

    static isEmail(str) {
        let reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
        if (reg.test(str)) {
            return true;
        }
        return false;
    }

    static isPassword(str) {
        let reg1 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
        if (reg1.test(str)) {
            return true;
        }
        return false;
    }

    static isIdCard(str) {
        let reg15 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
        let reg18 = /^[1-9]\d{5}(((1[9|8])\d{2})|(20[0-1]\d))((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        if(reg18.test(str)||reg15.test(str)){
            return true;
        }
        return false;
    }
}
