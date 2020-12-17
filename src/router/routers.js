import Home from "../views/Home";

export default [
    {
        path: '/personMgr',
        name:'personMgr',
        meta:{
            title:'人事管理',
            icon:'md-person',
        },
        children:[
            {
                path: '/interRmd',
                name:'interRmd',
                meta:{
                    title: '内部推荐',
                    icon:'md-person-add'
                },
                showAlways:true,
            },
            {
                path: '/LaborRel',
                name: 'LaborRel',
                meta: {
                    title: '劳动关系',
                    icon: 'md-contacts'
                },
                children:[
                    {
                        path:'/InterMob',
                        name:'InterMob',
                        meta:{
                            title:'内部调动',
                            icon:'md-walk'
                        }
                    },
                    {
                        path: '/ContractRen',
                        name:'ContractRen',
                        meta:{
                            title: '合同续签',
                            icon: 'md-clipboard'
                        }
                    },
                    {
                        path: '/LeaveDeal',
                        name: 'LeaveDeal',
                        meta: {
                            title: '离职办理',
                            icon: 'ios-walk'
                        },
                    },
                ]
            },
            {
                path:'/StaffWelfare',
                name:'StaffWelfare',
                meta:{
                    title:'员工福利',
                    icon:'ios-heart'
                }
            },
            {
                path:'/PoliciesSys',
                name:'PoliciesSys',
                meta:{
                    title:'政策制度',
                    icon:'ios-square'
                }
            }
        ]
    },
    {
        path: '/ExpenseRbm',
        name: 'ExpenseRbm',
        meta: {
            title: '费用报销',
            icon: 'logo-usd'
        },
        children: [
            {
                path: '/MealRbm',
                name: 'MealRbm',
                meta: {
                    title: '餐费报销',
                    icon: 'logo-yen'
                }
            },
            {
                path: '/TransRbm',
                name: 'TransRbm',
                meta: {
                    title: '车费报销',
                    icon: 'md-car'
                }
            },
            {
                path: '/OfficeRbm',
                name: 'OfficeRbm',
                meta: {
                    title: '办公费报销',
                    icon: 'md-briefcase',
                }
            },
            {
                path: '/OthersRbm',
                name: 'OthersRbm',
                meta: {
                    title: '其他报销',
                    icon: 'md-cart'
                }
            }
        ]
    },
    {
        path: '/InfoMgr',
        name: 'InfoMgr',
        meta: {
            title: '信息管理',
            icon: 'md-information'
        },
        children: [
            {
                path: '/notificationMgr',
                name: 'notificationMgr',
                meta: {
                    title: '公告管理',
                    icon: 'md-notifications'
                }
            },
            {
                path: '/NewsRelease',
                name: 'NewsRelease',
                meta: {
                    title: '新闻发布',
                    icon: 'md-book'
                }
            },
        ]
    },
    {
        path: '/ProveStamp',
        name: 'ProveStamp',
        meta: {
            title: '证明盖章',
            icon: 'md-color-filter'
        },
        children: [
            {
                path: '/InternshipCer',
                name: 'InternshipCer',
                meta: {
                    title: '实习证明',
                    icon: 'md-color-filter'
                }
            },
            {
                path: '/IncomePro',
                name: 'IncomePro',
                meta: {
                    title: '在职收入证明',
                    icon: 'md-cog'
                }
            }
        ]
    },
    {
        path: '/AssistantMgr',
        name: 'AssistantMgr',
        meta: {
            title: '辅助管理',
            icon: 'logo-yahoo'
        }
    },
    {
        path: '/ProjectMgr',
        name: 'ProjectMgr',
        meta: {
            title: '项目管理',
            icon: 'md-infinite'
        }
    },
    {
        path: '/401',
        name: 'error_401',
        meta: {
            hideInMenu: true
        },
    },
    {
        path: '/500',
        name: 'error_500',
        meta: {
            hideInMenu: true
        },
    },
    {
        path: '*',
        name: 'error_404',
        meta: {
            hideInMenu: true
        },
    }
]
