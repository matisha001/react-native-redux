//首页
import * as MainActions from './MainActions'
//订单
import * as OrderActions from './OrderActions'
//我的
import * as MyActions from './MyActions'
//菜单
import * as TabActions from"./TabActions"
//详情
import * as DetailActions from"./DetailActions"
export default {
    ...MainActions,
    ...OrderActions,
    ...MyActions,
    ...TabActions,
    ...DetailActions
}
