var postive = [
      '美妙', '幸福', '高兴', '开心', ''
    , '', '', '', '', ''
    ]
  , negtive = [
      '可怜', '抓狂', '委屈', '汗', '悲催'
    , '生病', '不爽', '悲伤', '怒骂', '抓狂'
    , '泪', '难受', '无聊', '衰', '伤心'
    , '晕', '一夜没睡', '后悔', '泡汤', '失眠'
    , '难过死?', '泪流满面', '忙', '一团乱', '烦躁'
    , '晕', '酸', '痛', '疼', '惨'
    , '熬', '痛苦', '被困', '不太?好', '丑'
    , '头(?:疼|痛)', '尴尬', '', '', ''
    ]
  , yes = [
      '是'
    ]
  , no = [
      '不是?', '没有?'
    ]
  , praise = [
      '善良', '优秀', '聚精会神', '', ''
    , '', '', '', '', ''
    ]
  , blame = [
      '傻', '猪头', '不爱惜自己', '无耻', '鄙视'
    , '不守信用', '性格差', '可恨', '2(?:B|逼)', '傻(?:逼|叉|x)'
    , '垃圾', '混蛋', '', '', ''
    ]
  , self = [
      '我们?', '俺', '偶', '我?自己', '在下'
    , '小生', '本人', '吾辈?', '本人', ''
    ]
  , other = [
      '弟弟', '妞', '(?:你|妳)们?', '亲爱的', 'UserName'
    , '(?:她|他)们?', '老公', '小家伙', '对方', '人物'
    , '先生', '丈夫', '小家伙', '对方', '父亲'
    , '我家宝宝', '别人', '', '', ''
    ]

var emoTags = {
    emoDefinition: {
      hope: {
        type: 'event_self_prospect'
      , keyWords: [
          'self', 'prospect', 'hope', 'pos'
        ]
      }
    , fear: {
        type: 'event_self_prospect'
      , keyWords: [
          'self', 'prospect', 'fear', 'neg'
        ]
      }
    , joy: {
        type: 'event_self_non_prospect'
      , keyWords: [
          'self', 'pos'
        ]
      }
    , distress: {
        type: 'event_self_non_prospect'
      , keyWords: [
          'self', 'neg'
        ]
      }
    , happyFor: {
        type: 'event_other_desire'
      , keyWords: [
          'other', 'desire', 'self', 'auxiliary', 'pos', 'happyFor'
        ]
      }
    , resentment: {
        type: 'event_other_desire'
      , keyWords: [
          'other', 'desire', 'self', 'auxiliary', 'neg', 'resentment'
        ]
      }
    , gloating: {
        type: 'event_other_undesire'
      , keyWords: [
          'other', 'undesire', 'self', 'gloating', 'pos'
        ]
      }
    , pity: {
        type: 'event_other_undesire'
      , keyWords: [
          'other', 'undesire', 'self', 'pity', 'neg'
        ]
      }
    , pride: {
        type: 'action_self'
      , keyWords: [
          'self', 'praiseworthy', 'pos'
        ]
      }
    , shame: {
        type: 'action_self'
      , keyWords: [
          'self', 'blameworthy', 'neg'
        ]
      }
    , admiration: {
        type: 'action_other'
      , keyWords: [
          'other', 'praise', 'self', 'pos'
        ]
      }
    , reproach: {
        type: 'action_other'
      , keyWords: [
          'other', 'blame', 'self', 'neg'
        ]
      }
    }

  , postive: postive
  , negtive: negtive
  , yes: yes
  , no: no
  , praise: praise
  , blame: blame
  , self: self
  , other: other

  , event_other_desire: {
      auxiliary: [
        '为', '祝'
      ]
    , other: other.concat([
        ''
      ])
    , desire: [
        '成绩.*(?:不错|好)', '终于', '生日', '学习', '美'
      , '幸福', '发大?财', '生活', '', '爱你'
      , '出去玩', '满足', '', '', ''
      ]
    , self: self.concat([
        '', '', '', '', ''
      , '', '', '', '', ''
      ])
    , happyFor: [
        '祝福',
      ]
    , resentment: [
        '嫉妒恨?', '眼红', '', '刺激', '不平衡'
      , '', '', '', '', ''
      ]
    , pos: [
        '', '', '', '配合', '祝福'
      , '窃喜', '', '', '', ''
      ]
    , neg: [
        '', '抓狂', '疯', '', ''
      , '讨厌', '', '', '', ''
      ]
    }
  , event_other_undesire: {
      other: other.concat([
        ''
      ])
    , undesire: [
        '堵', '停电', '不幸', '湿透', '好?可怜'
      , '就算了.*还', '衰', '灾害', '小?病', '出院'
      ]
    , self: self.concat([
        '', '', '', '', ''
      , '', '', '', '', ''
      ])
    , gloating: [
        '窃喜', '幸灾乐祸'
      , ''
      ]
    , pity: [
        '同情', '遗憾'
      , ''
      ]
    , pos: [
        '', '', '', '配合', '祝福'
      , '窃喜', '', '', '', ''
      ]
    , neg: [
        '', '抓狂', '疯', '', ''
      , '讨厌', '', '', '', ''
      ]
    }
  , event_self_prospect: {
      self: self.concat([
        '', '', '', '', ''
      , '', '', '', '', ''
      ])
    , prospect: [
        '明天', '下次', '天天', '考虑', '可能'
      , '如果', '以后', '每天', '永远', '等着'
      , '再找', '一?想到', '如果', '计划', '正好一下午'
      , '晚上要', '(?:不知道|要)什么时候', '怎样才能', '梦到', '一辈子'
      , '总会', '今天晚上', '等一下', '还有.+多年', ''
      , '要去', '', '想象着', '未来', '终有一天'
      , '以后', '', '', '', ''
      ]
    , hope: [
        '希望', '期待', '难得', '邀请', '走好'
      , '好想', '祈祷', '要下班', '等.+回来', '相信会'
      , '才会很?幸福', '就?这么一直', '且?行且珍惜', '和你永远在一起', '肯定会?很'
      , '约定', '又可以', '说好', '只想', '等我'
      , '解放', '一起旅游', '心愿', '', ''
      ]
    , fear: [
        '不想', '害?怕', '想想?也?觉得好?可?怕', '睡不成', '到啥时候'
      , '就要起床', '就这么', '(?:处理|做)不完的', '现在才', '丢不起这?人'
      , '没时间准备', '纠结', '不要再', '又舍不得', '遇到.?.?人渣'
      ]
    , pos: [
        '睡', '见到', '开心', '继续', '去找'
      , '(?:终于)?可以回.*了', '迎接', '一起', '温馨', '幸福'
      , '快乐', '假期', '周末', '游', '见面'
      , '喔', '走起', '玩', '聚', '开森'
      , '', '', '', '', ''
      ]
    , neg: [
        '周一', '(?:好|闷热)', '高温', '停电', '没电'
      , '形如陌', '', '', '', ''
      ]
    }
  , event_self_non_prospect: {
      self: self.concat([
        ''
      ])
    , pos: postive
    , neg: negtive
  }
  , action_self: {
      self: self.concat([
        ''
      ])
    , praiseworthy: [
        '有始有终', '成果', '做彻底', '佩服', '淡定'
      , '好乖', '万千宠爱(?:与|于)一身', '会一直', '', ''
      ]
    , blameworthy: blame.concat([
        '没有?胆', '(?:令|让)人讨厌', '祸头子', '多吃', '吃胖'
      , '玩', '完虐', '面壁', '思过', '道歉'
      , '不该', '汗', '(?:给|被).*骂', '连.*都?不如', '还不如'
      , '没.成', '闹哪样', '死的心都有了', '脆弱', '.点才睡'
      , '迟到', '(?:恐怖|吓人)了', '心疼', '偏激', '发泄'
      , '没变?强大', '多依赖人啊', '宅死', '一觉.?到了?', '吃了?很多'
      , '对不起', '汗', '都做了些什么', '太相信自己', '就不应该'
      ])
    , pos: [
        '嘻嘻', '舒服'
      ]
    , neg: [
        '烦', '抓狂', '无语', '想(?:死|屎)', ''
      ]
    }
  , action_other: {
      other: other.concat([
        '', '', '', '', ''
      ])
    , praiseworthy: praise.concat([
        '爱我', '全心付出', '教我..?多', '超?有魅力', '太帅了'
      , '', '', '', '', ''
      ])
    , blameworthy: blame.concat([
        '脾气.?大', '装大方', '(这么|如此)笨的', '你们?自己?都没做到'
      , '', '', '', '', ''
      ])
    }
  , obj: {
      obj: [
        '快递', '韵达', '', '', ''
      ]
    , love: [
        '有看头', '', '', '', ''
      , '太棒了?', '', '', '', ''
      ]
    , hate: [
        '对.*印象.*跌到谷底'
      , '太(?:渣|次|坏|破|难用)', '', '', '', ''
      ]
    }
}

exports = module.exports = emoTags
