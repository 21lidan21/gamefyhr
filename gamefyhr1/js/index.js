
function view() {
    return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
    };
}
document.body.style.height=view().h+"px";
document.getElementsByTagName('html')[0].style.fontSize=view().h/10+"px";
//alert(document.body.style.height);
/*function showJSON() {
    var user =
    {
        "username":"andy",
        "age":20,
        "info": { "tel": "123456", "cellphone": "98765"},
        "address":
            [
                {"city":"beijing","postcode":"222333"},
                {"city":"newyork","postcode":"555666"}
            ]
    }

    alert(user.username);
    alert(user.age);
    alert(user.info.cellphone);
    alert(user.address[0].city);
    alert(user.address[0].postcode);
}*/
//function showJSON(){
var json={
    "positions": [
        {
            "title": "赛事经理",
            "duty": [
                {
                    "name": "管理工作",
                    "details": [
                        "负责频道的年度赛事激化及相关预算；",
                        "负责大型活动、赛事、会议、论坛的执行策划；",
                        "负责制定各项赛事现场监控执行管理；",
                        "负责各类赛事现场监控执行管理；",
                        "负责各类赛事活动执行报告及总结、优化。"
                    ]
                },
                {
                    "name": "客户开拓",
                    "details": [
                        "负责外部赛事、平台、渠道的上午开拓、维护和沟通。"
                    ]
                },
                {
                    "name": "团队管理",
                    "details": [
                        "管理赛事团队，并对团队成员和相关部门的员工进行赛事培训和指导，负责评估和激励团队成员的工作。"
                    ]
                }
            ],
            "demand": [
                "大学本科及以上学历，5年电竞行业相同岗位工作经验；",
                "具备良好的电竞赛事策划、执行经验和良好的人际沟通、协调能力；",
                "良好的组织策划能力和团队协调能力；",
                "热爱游戏行业。"
            ]
        },
        {
            "title": "游戏电商运营主管",
            "duty": [
                {"name": "游戏风云电商业务规划管理及实施，主播淘宝店、风云商城等运营管理；"},
                {"name": "制订电商年度、季度营销目标，与第三方代运营公司对接，监督实现销售目标；"},
                {"name": "配合第三方公司建立完善电商产品、销售、客服、物流等各项业务运营流程；"},
                {"name": "收集市场和行业信息，分析总结竞争对手，行业信息；"},
                {"name": "完成电商平台各项运营指标（如流量指标、页面点击率指标、重复点击率等指标）；"},
                {"name": "整理评估相关营销数据：交易数据、商品数据、顾客数据等；"},
                {"name": "负责监控周、月及季度运营结果，及时改进；"},
                {"name": "协助游戏风云赛事、内容、艺人经纪等各部门进行流量转化，通过电视，节目，微信，微博，外部合作网站、直播平台等移动端为线上引流。"}
            ],
            "demand": [
                "大学专科及以上学历，电子商务、计算机相关专业；",
                "具备3年以上互联网、电子商务（B2B/B2C)运营及管理经验；",
                "熟悉电子商务的运作模式和特点，按市场实际需求和特点拟订相关运营方案；",
                "有强烈的事业心、具备创造性思维及逻辑思维能力；",
                "具有较强的产品、用户心理分析的能力与看法，对市场发展方向和动态有较强的分析能力，能够根据客户需求与市场变化迅速做出回应；",
                "对网络游戏、动漫二次元、电子竞技等行业有从业经验或熟悉行业规律者优先。"
            ]
        },
        {
            "title": "运维工程师",
            "duty": [
                {
                    "name": "技术支持",
                    "details": [
                        "负责服务器及网络的架设，保障网站、直播、游戏等业务正常运行；搭建运维监控体系；",
                        "负责系统架构规划和优化，不断提高系统运行效率；",
                        "保障运维安全，处理运维负责突发事故处理,优化各项维护工作流程，不断降低系统风险。"
                    ]
                },
                {
                    "name": "团队管理",
                    "details": [
                        "进行内部工作分配、督导，外部工作沟通、协调；",
                        "团队人员日常管理、绩效考核，新员工培训等。"
                    ]
                }
            ],
            "demand": [
                "大学专科及以上学历，计算机网络或计算机相关专业；5年以上运维经验，2年以上管理经验；",
                "精通Linux操作系统以及服务器群的网络搭建、设置和维护、网络的安全监控、系统性能管理和调试、网络性能管理；",
                "熟悉Shell、Node或PHP中的一门语言；熟悉xen虚拟化产品；熟悉mysql主从及优化；",
                "热爱游戏行业。"
            ]
        },
        {
            "title": "安卓开发工程师",
            "duty": [
                {
                    "name": "移动端开发",
                    "details": [
                        "负责游戏风云移动端开发（安卓）;",
                        "负责移动端代码的调优和适配;",
                        "配合电视节目提供优质的移动端互动应用。"
                    ]
                }
            ],
            "demand": [
                "大学专科及以上学历， 3-5年以上手机Android开发经验；",
                "热爱开发事业，高度的责任心、良好的沟通技巧和团队合作精神；",
                "熟悉Android下网络通信机制，对HTTP有较深刻的理解和经验，有网络编程经验；",
                "熟悉Android SDK、熟悉Android下联系人、电话、信息、数据库等常见应用实现机制；",
                "具有PHP或Java或WEB开发经验优先考虑。"
            ]
        },
        {
            "title": "美工实习生",
            "duty": [
                {
                    "name": "配合美工做一些设计和图片美化等工作。"
                }
            ],
            "demand": [
                "大二、大三在读学生，美术相关专业；",
                "熟悉PS, AI 等图片美化设计软件。",
                "热爱游戏行业。"
            ]
        },
        {
            "title": "网管实习生",
            "duty": [

                { "name": "配合网管进行公司网络的维护；"},
                {  "name": "固定资产的统计。"}

            ],
            "demand": [
                "大二、大三在读学生;",
                "热爱游戏行业。"
            ]
        }
    ]
}



    /*console.log(json.positions[0].duty[0].details)
    console.log(json.positions[0].duty[0].name)*/
    //console.log(json.positions[0].duty[1].details)
var names=[]
var duty_details=[]
var title_all=[]
var demands_all=[]
for (var i=0 ;i<json.positions.length;i++){
    for (var j=0 ;j<json.positions[i].duty.length;j++){
        var name=json.positions[i].duty[j].name
        names.push(name)
        var duty_detail=json.positions[i].duty[j].details
        duty_details.push(duty_detail)
    }
    var title_single= json.positions[i].title
    title_all.push(title_single)

    var demands=json.positions[i].demand
    demands_all.push(demands)
}

  /*console.log(json.positions[0].demand)

    var names=[]
    var duty_details=[]
       for (var i=0 ;i<json.positions[0].duty.length;i++){
            var name=json.positions[0].duty[i].name
            names.push(name)
            var duty_detail=json.positions[0].duty[i].details
            duty_details.push(duty_detail)
         }*/
  console.log(names)
console.log(duty_details)
console.log( title_all)
    //console.log(json.positions[0].duty[0].details.length)

/*}

showJSON()*/
//共用
var as=document.getElementsByClassName('position_title1')
for(var ss=0;ss<as.length;ss++){
    as[ss].innerHTML=title_all[ss]
}
var sections=document.getElementsByTagName('section')

   // var active= document.getElementsByClassName('swiper-slide-active')[0]
/*var now_index=active.getAttribute('id')
page=parseInt(now_index)-2*/

//var frag = document.createDocumentFragment();
var position_container=document.getElementsByClassName('position_container')
//console.log(json.positions[page].duty.length)

var page;

//岗位职责
function position_duty(page){
var duty_length= json.positions[page].duty.length
var m_last=0
for(var q=0;q<page;q++){
    m_last+=json.positions[page-1-q].duty.length
    duty_length+=json.positions[q].duty.length
}

for ( var m=m_last;m<duty_length;m++){
    var li=  document.createElement('li')
    li.innerHTML=names[m]
    //li.setAttribute('class','font_weight')
    //判断details是否存在
    console.log(names[m])
    if (duty_details[m]){
        var ul=  document.createElement('ul')
        for (var n=0 ;n<duty_details[m].length;n++) {
            var li_inner = document.createElement('li')
            li_inner.innerHTML = duty_details[m][n]
            ul.setAttribute("class", "list_style");
            ul.appendChild(li_inner)
        }
        li.appendChild(ul)
    }
    position_container[page].appendChild(li)
  }
}
//任职要求
function position_demand(page){

    var position_demands=document.getElementsByClassName('position_demands')
    //var demands=json.positions[0].demand
    var demands_p=demands_all[page]
    for (var p=0 ;p<demands_p.length;p++){
        var demand_li=  document.createElement('li')
        demand_li.innerHTML=demands_p[p]
        position_demands[page].appendChild(demand_li)
    }
}

for (var r=0 ;r<7;r++){
    position_duty(r)
    position_demand(r)
}







