
const iconList={
    'out':['chongwu','baojian','shucai','shuiguo','xiaochi',
        'hufu','jiaju','meizhuang','wifi','baoxian','diannao','dianzi','yanjiu','yinle','jianshen','jiaoche'],
    'income':['baoxiao','baoxiao_1','baoxian','licai','nianzhongjiang']
};
type Tag={
    id: string;
    name: string;
    icon: string;
    type: string;
}
const tagArray: Tag[] = [
    {id: '1', name: '其它', icon: 'qita', type: '-'},
    {id: '2', name: '购物', icon: 'gouwuche', type: '-'},
    {id: '3', name: '住房', icon: 'zhufang', type: '-'},
    {id: '4', name: '交通', icon: 'jiaotong', type: '-'},
    {id: '5', name: '娱乐', icon: 'yule', type: '-'},
    {id: '6', name: '文教', icon: 'wenjiaoban', type: '-'},
    {id: '7', name: '通讯', icon: 'tongxun', type: '-'},
    {id: '8', name: '旅行', icon: 'lvxing', type: '-'},
    {id: '9', name: '医疗', icon: 'yiliao', type: '-'},
    {id: '10', name: '餐饮', icon: 'canyin', type: '-'},
    {id: '11', name: '人情', icon: 'renqing', type: '-'},
    {id: '16', name: '其它', icon: 'qitashouru', type: '+'},
    {id: '12', name: '薪资', icon: 'xinzi', type: '+'},
    {id: '13', name: '奖金', icon: 'jiangjin', type: '+'},
    {id: '14', name: '红包', icon: 'hongbao', type: '+'},

];
export {tagArray,iconList}