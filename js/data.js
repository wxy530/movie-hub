// 影视数据库 - 包含AI生成的内容摘要
const movieDatabase = [
  {
    id: 1,
    title: "流浪地球2",
    titleEn: "The Wandering Earth II",
    type: "movie",
    year: 2023,
    genres: ["科幻", "冒险", "灾难"],
    rating: 8.3,
    duration: "173分钟",
    director: "郭帆",
    cast: ["刘德华", "吴京", "李雪健", "沙溢"],
    poster: "🚀",
    backdrop: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    posterBg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    summary: "《流浪地球2》是《流浪地球》的前传，讲述了太阳危机爆发初期，人类提出并实施"移山计划"、"逐月计划"、"数字生命计划"等应对方案的故事。影片通过多条故事线交织，展现了人类在面对灭绝危机时的不同选择与挣扎。",
    aiSummary: "这是一部史诗级的科幻巨制，延续了前作的宏大世界观。影片通过图恒宇的数字生命线、刘培强的太空电梯任务、以及全球联合政府的政治博弈三条主线，深入探讨了人工智能伦理、数字永生、人类命运共同体等深刻主题。特效制作达到好莱坞一流水准，太空电梯的长镜头令人叹为观止。AI分析认为，该片在科学幻想与人文关怀之间找到了完美平衡，是中国科幻电影工业化成熟的重要标志。",
    tags: ["硬科幻", "中国制作", "视觉盛宴", "哲学思考", "集体主义"],
    episodes: null,
    status: "已完结",
    videoUrl: "",
    videoType: "url"
  },
  {
    id: 2,
    title: "满江红",
    titleEn: "Full River Red",
    type: "movie",
    year: 2023,
    genres: ["悬疑", "喜剧", "剧情"],
    rating: 7.8,
    duration: "159分钟",
    director: "张艺谋",
    cast: ["沈腾", "易烊千玺", "张译", "雷佳音"],
    poster: "🎭",
    backdrop: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    posterBg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    summary: "南宋绍兴年间，岳飞死后四年，秦桧率兵与金国会谈。会谈前夜，金国使者死在宰相驻地，所携密信也不翼而飞。一个小兵偶然被卷入这场巨大的阴谋之中。",
    aiSummary: "张艺谋导演的又一部风格化佳作，将悬疑、喜剧与历史剧情巧妙融合。影片采用三一律的戏剧结构，在封闭的空间内展开一场惊心动魄的心理博弈。沈腾的表演令人惊喜，打破了以往的喜剧标签，展现了角色的复杂性与悲剧色彩。AI分析指出，影片通过层层反转的叙事结构，既致敬了传统戏曲的叙事美学，又融入了现代悬疑片的节奏感。配乐与画面的完美配合，营造出紧张压抑又充满黑色幽默的独特氛围。",
    tags: ["国师作品", "悬疑推理", "历史改编", "演技派", "剧本精妙"],
    episodes: null,
    status: "已完结",
    videoUrl: "",
    videoType: "url"
  },
  {
    id: 3,
    title: "深海",
    titleEn: "Deep Sea",
    type: "movie",
    year: 2023,
    genres: ["动画", "奇幻", "冒险"],
    rating: 7.6,
    duration: "112分钟",
    director: "田晓鹏",
    cast: ["王亭文", "苏鑫", "王红卫"],
    poster: "🌊",
    backdrop: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    posterBg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    summary: "少女参宿误入梦幻的深海世界，却因此邂逅了一段独特的生命旅程。在那里，她结识了南河，两人共同踏上了奇幻的冒险之旅。",
    aiSummary: "田晓鹏导演继《大圣归来》后的又一力作，历时七年打磨。影片独创'粒子水墨'动画技术，将中国传统水墨画与3D动画完美融合，创造出前所未有的视觉奇观。AI分析认为，影片表层是一个奇幻冒险故事，深层则是对抑郁症、家庭关系、自我认同等心理议题的温柔探讨。深海大饭店的设定充满想象力，每一个场景都如梦如幻。配乐深情动人，与大银幕的视觉冲击力相得益彰，是一部技术革新与情感深度兼具的动画杰作。",
    tags: ["国产动画", "视觉创新", "心理叙事", "治愈系", "技术突破"],
    episodes: null,
    status: "已完结",
    videoUrl: "",
    videoType: "url"
  },
  {
    id: 4,
    title: "狂飙",
    titleEn: "The Knockout",
    type: "tv",
    year: 2023,
    genres: ["犯罪", "剧情", "悬疑"],
    rating: 8.5,
    duration: "45分钟/集",
    director: "徐纪周",
    cast: ["张译", "张颂文", "李一桐", "张志坚"],
    poster: "🔫",
    backdrop: "linear-gradient(135deg, #434343 0%, #000000 100%)",
    posterBg: "linear-gradient(135deg, #434343 0%, #000000 100%)",
    summary: "一线刑警安欣与黑恶势力高启强展开长达二十年的正邪较量，见证了时代变迁下小人物命运的起落沉浮。",
    aiSummary: "2023年开年爆款剧集，以横跨二十年的时间线，深刻描绘了扫黑除恶专项斗争中执法者与黑恶势力之间惊心动魄的较量。张颂文饰演的高启强从一个唯唯诺诺的鱼贩，逐步蜕变为心狠手辣的黑恶势力头目，演技炸裂，成为年度最出圈的反派角色。AI分析指出，该剧成功之处在于避免了脸谱化的正邪对立，而是深入挖掘了人物性格的复杂性与社会环境对人性的异化。剧本逻辑严密，节奏紧凑，群像刻画生动，是中国电视剧工业化水准的又一次突破。",
    tags: ["年度爆款", "演技炸裂", "扫黑除恶", "时代缩影", "人性探讨"],
    episodes: 39,
    status: "已完结",
    videoUrl: "",
    videoType: "url"
  },
  {
    id: 5,
    title: "三体",
    titleEn: "3 Body Problem",
    type: "tv",
    year: 2023,
    genres: ["科幻", "剧情", "悬疑"],
    rating: 8.7,
    duration: "50分钟/集",
    director: "杨磊",
    cast: ["张鲁一", "于和伟", "陈瑾", "王子文"],
    poster: "🌌",
    backdrop: "linear-gradient(135deg, #0c3483 0%, #a2b6df 100%)",
    posterBg: "linear-gradient(135deg, #0c3483 0%, #a2b6df 100%)",
    summary: "根据刘慈欣同名科幻小说改编，讲述地球人类文明与三体文明的信息交流、生死搏杀及两个文明在宇宙中的兴衰历程。",
    aiSummary: "中国科幻影视化的里程碑之作，忠实还原了刘慈欣原著宏大而深刻的科学构想。从文革时期的红岸基地，到现代纳米科学家汪淼的离奇遭遇，再到三体游戏中的异星文明，剧集以精湛的叙事技巧将复杂的科学概念转化为引人入胜的视觉盛宴。AI分析认为，该剧最成功之处在于保留了原著的哲学深度——对科学边界的探讨、对宇宙社会学的构建、对人类文明的终极关怀。特效制作精良，尤其是三体游戏的视觉呈现，达到了国际一流水准。",
    tags: ["硬核科幻", "小说改编", "思想深度", "中国制作", "宇宙史诗"],
    episodes: 30,
    status: "已完结",
    videoUrl: "",
    videoType: "url"
  },
  {
    id: 6,
    title: "无名",
    titleEn: "Hidden Blade",
    type: "movie",
    year: 2023,
    genres: ["剧情", "悬疑", "历史"],
    rating: 7.2,
    duration: "128分钟",
    director: "程耳",
    cast: ["梁朝伟", "王一博", "周迅", "黄磊"],
    poster: "🕵️",
    backdrop: "linear-gradient(135deg, #232526 0%, #414345 100%)",
    posterBg: "linear-gradient(135deg, #232526 0%, #414345 100%)",
    summary: "1941年12月7日，日本偷袭珍珠港，第二次世界大战格局发生重大变化。在此之后，中国整个反法西斯战场掀起了全面抗战的高潮。",
    aiSummary: "程耳导演的谍战力作，延续了《罗曼蒂克消亡史》的作者化叙事风格。影片采用非线性叙事结构，时空跳跃剪辑，需要观众主动拼凑剧情线索，这种'让观众动脑'的创作态度在商业片市场中显得尤为珍贵。梁朝伟的表演炉火纯青，每一个眼神都充满张力。AI分析指出，影片在谍战类型片的框架下，注入了导演强烈的个人美学风格——对称构图、低饱和度色调、留白式叙事，营造出一种冷峻而诗意的影像质感。",
    tags: ["作者电影", "非线性叙事", "谍战悬疑", "影帝飙戏", "美学典范"],
    episodes: null,
    status: "已完结",
    videoUrl: "",
    videoType: "url"
  },
  {
    id: 7,
    title: "中国乒乓之绝地反击",
    titleEn: "Ping Pong",
    type: "movie",
    year: 2023,
    genres: ["剧情", "运动", "励志"],
    rating: 7.9,
    duration: "137分钟",
    director: "邓超, 俞白眉",
    cast: ["邓超", "孙俪", "许魏洲", "段博文"],
    poster: "🏓",
    backdrop: "linear-gradient(135deg, #f5af19 0%, #f12711 100%)",
    posterBg: "linear-gradient(135deg, #f5af19 0%, #f12711 100%)",
    summary: "1992年至1995年期间，中国乒乓男团在天津向瑞典男团发起反击，最终在世乒赛上强势夺冠的热血故事。",
    aiSummary: "根据真实历史事件改编的体育励志佳作，讲述了中国乒乓球队在90年代初的低谷期如何卧薪尝胆、最终在天津世乒赛上绝地反击的感人故事。邓超和俞白眉的组合这次脱离了以往纯粹喜剧的路线，用真诚的态度向观众呈现了一群运动员和教练员的汗水与泪水。AI分析认为，影片最打动人之处在于它不仅展现了赛场上的热血拼搏，更深入挖掘了运动员作为普通人的脆弱与坚持。配角们的表现同样出色，共同构建了一幅生动的体育群像。",
    tags: ["真实改编", "体育励志", "家国情怀", "热血沸腾", "团队协作"],
    episodes: null,
    status: "已完结",
    videoUrl: "",
    videoType: "url"
  },
  {
    id: 8,
    title: "交换人生",
    titleEn: "Einstein and the Missing subtracted",
    type: "movie",
    year: 2023,
    genres: ["喜剧", "奇幻", "家庭"],
    rating: 6.8,
    duration: "119分钟",
    director: "苏伦",
    cast: ["雷佳音", "张小斐", "张宥浩", "马丽"],
    poster: "🔄",
    backdrop: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    posterBg: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    summary: "如果交换人生会交换家人，你还愿意吗？仲达和金好即将步入婚姻，却阴差阳错和暗恋金好的少年陆小谷换了身体。",
    aiSummary: "《你好，李焕英》后苏伦导演的又一部奇幻喜剧，延续了'交换身体'这一经典喜剧设定，但加入了更多对社会议题的温柔关照。雷佳音和张宥浩的'身体交换'带来了大量笑料，同时也让两个角色得以从对方的视角重新审视自己的人生选择。AI分析指出，影片在轻松幽默的表层叙事下，探讨了中年危机、代际沟通、自我认同等现实议题。张小斐的表演自然动人，为影片增添了不少温情底色。虽然剧本在某些情节处理上略显仓促，但整体仍是一部适合全家观看的合家欢电影。",
    tags: ["奇幻喜剧", "家庭温情", "身体交换", "合家欢", "现实关照"],
    episodes: null,
    status: "已完结",
    videoUrl: "",
    videoType: "url"
  },
  {
    id: 9,
    title: "去有风的地方",
    titleEn: "Meet Yourself",
    type: "tv",
    year: 2023,
    genres: ["剧情", "治愈", "生活"],
    rating: 8.4,
    duration: "45分钟/集",
    director: "丁梓光",
    cast: ["刘亦菲", "李现", "胡冰卿", "牛骏峰"],
    poster: "🍃",
    backdrop: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    posterBg: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    summary: "辞职后来到云南小镇的许红豆，在'有风小院'结识了一群热血的年轻人，在相互陪伴中治愈了内心的创伤，也找到了新的人生方向。",
    aiSummary: "2023年开年最治愈的剧集，没有狗血的冲突和反转，只用温柔的笔触描绘了一群年轻人在云南小镇相互陪伴、共同成长的故事。刘亦菲在剧中的状态松弛自然，与云南的山水风光相得益彰。李现饰演的谢之遥温暖踏实，两人之间的感情线细腻动人。AI分析认为，该剧成功捕捉到了当代年轻人渴望'慢生活'的心理需求，通过对乡村生活的诗意呈现，为观众提供了一个精神避难所。剧中对非遗文化、乡村振兴等议题的自然融入，也展现了创作者的社会责任感。",
    tags: ["治愈系", "田园生活", "慢节奏", "神仙姐姐", "文化自信"],
    episodes: 40,
    status: "已完结",
    videoUrl: "",
    videoType: "url"
  },
  {
    id: 10,
    title: "显微镜下的大明之丝绢案",
    titleEn: "The Longest Day in Chang'an",
    type: "tv",
    year: 2023,
    genres: ["剧情", "历史", "悬疑"],
    rating: 8.1,
    duration: "40分钟/集",
    director: "潘安子",
    cast: ["张若昀", "王阳", "戚薇", "吴刚"],
    poster: "📜",
    backdrop: "linear-gradient(135deg, #c79081 0%, #dfa579 100%)",
    posterBg: "linear-gradient(135deg, #c79081 0%, #dfa579 100%)",
    summary: "御史帅家默发现多年税收政策存在重大弊端，冒死上谏，由此引发了一场从县到府、从府到省、从省到部的拨乱反正。",
    aiSummary: "改编自马伯庸同名历史小说的古装悬疑剧，以明朝万历年间的一桩税赋案件为切入点，展现了一个小人物如何以一己之力挑战整个官僚体系的传奇故事。张若昀饰演的帅家默是一个有着数学天赋却不懂人情世故的'数学天才'，这个角色的设定新颖有趣。AI分析指出，该剧最精彩之处在于将一道复杂的数学题转化为一场惊心动魄的政治博弈，既有历史的厚重感，又有推理剧的烧脑快感。剧中对明代税收制度、官场生态的细致还原，展现了制作团队的诚意与功力。",
    tags: ["历史改编", "马伯庸IP", "古装悬疑", "小人物逆袭", "制度反思"],
    episodes: 36,
    status: "已完结",
    videoUrl: "",
    videoType: "url"
  },
  {
    id: 11,
    title: "阿凡达：水之道",
    titleEn: "Avatar: The Way of Water",
    type: "movie",
    year: 2022,
    genres: ["科幻", "冒险", "动作"],
    rating: 8.2,
    duration: "192分钟",
    director: "詹姆斯·卡梅隆",
    cast: ["萨姆·沃辛顿", "佐伊·索尔达娜", "西格妮·韦弗"],
    poster: "🌊",
    backdrop: "linear-gradient(135deg, #0093E9 0%, #80D0C7 100%)",
    posterBg: "linear-gradient(135deg, #0093E9 0%, #80D0C7 100%)",
    summary: "杰克·萨利在潘多拉星球上建立了新的生活，与奈蒂莉组建了家庭。但当人类殖民者重返潘多拉时，萨利一家被迫离开森林家园，前往海洋部落寻求庇护。",
    aiSummary: "卡梅隆时隔十三年带来的《阿凡达》续作，将叙事舞台从热带雨林扩展到了广阔的海洋世界。影片在视觉技术上再次刷新了电影工业的标杆——水下动作捕捉技术的突破让海底世界的呈现达到了前所未有的逼真程度。AI分析认为，相比第一部的'白人救世主'叙事，这一部更注重家庭情感与代际沟通的刻画，杰克·萨利从战士转变为父亲的角色令人动容。虽然剧情框架相对传统，但卡梅隆用无与伦比的视觉奇观弥补了叙事上的不足，是一部纯粹的视听盛宴。",
    tags: ["视觉革命", "好莱坞大片", "家庭主题", "技术创新", "环保主义"],
    episodes: null,
    status: "已完结",
    videoUrl: "",
    videoType: "url"
  },
  {
    id: 12,
    title: "灌篮高手",
    titleEn: "The First Slam Dunk",
    type: "movie",
    year: 2022,
    genres: ["动画", "运动", "热血"],
    rating: 9.4,
    duration: "124分钟",
    director: "井上雄彦",
    cast: ["仲村宗悠", "笠间淳", "梶原岳人"],
    poster: "🏀",
    backdrop: "linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)",
    posterBg: "linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)",
    summary: "湘北高中篮球队打入全国大赛，迎来了与最强球队山王工业的终极对决。宫城良田作为球队主力控球后卫，带领队友们挑战不可能的任务。",
    aiSummary: "井上雄彦亲自操刀的《灌篮高手》剧场版，以宫城良田的视角重新讲述了全国大赛对阵山王工业的经典战役。影片最令人惊喜的是将焦点从樱木花道转移到了宫城身上，通过穿插其家庭背景的回忆，赋予了这场比赛更深层的情感重量。AI分析指出，本片的动画制作达到了2D与3D完美融合的新高度，比赛场面流畅自然，每一个投篮、每一次突破都充满张力。配乐与音效的精心设计，让观众仿佛置身于比赛现场。对于一代人的青春回忆来说，这不仅是一部电影，更是一次跨越三十年的情感共鸣。",
    tags: ["经典IP", "青春回忆", "动画神作", "热血竞技", "情怀满分"],
    episodes: null,
    status: "已完结",
    videoUrl: "",
    videoType: "url"
  },
  {
    id: 13,
    title: "速度与激情10",
    titleEn: "Fast X",
    type: "movie",
    year: 2023,
    genres: ["动作", "犯罪", "冒险"],
    rating: 7.0,
    duration: "141分钟",
    director: "路易斯·莱特里尔",
    cast: ["范·迪塞尔", "杰森·莫玛", "查理兹·塞隆"],
    poster: "🏎️",
    backdrop: "linear-gradient(135deg, #f00000 0%, #DC008C 100%)",
    posterBg: "linear-gradient(135deg, #f00000 0%, #DC008C 100%)",
    summary: "唐老大和他的家族面临着迄今为止最危险的对手——但丁，他是黑帮大佬赫南·雷耶斯的儿子，多年来一直策划着对唐老大的复仇。",
    aiSummary: "《速度与激情》系列第十部作品，虽然剧情逻辑已经完全让位于夸张的动作场面，但作为一部纯粹的爆米花爽片，它依然完成了自己的使命。杰森·莫玛饰演的反派但丁充满魅力的疯狂表演成为影片最大亮点。AI分析认为，这个系列发展到第十部，已经彻底抛弃了现实物理定律，成为了某种现代神话史诗。每一场追车戏都如同电子游戏般的炫目，虽然剧情老套、逻辑漏洞百出，但对于系列粉丝来说，看到家族成员再次集结、完成不可能的任务，依然是一种满足。这是一部不需要动脑、只需享受视听刺激的商业娱乐大片。",
    tags: ["爆米花电影", "飙车动作", "家族情怀", "爽片", "好莱坞工业"],
    episodes: null,
    status: "已完结",
    videoUrl: "",
    videoType: "url"
  },
  {
    id: 14,
    title: "熊出没·伴我"熊芯"",
    titleEn: "Boonie Bears: Back to Earth",
    type: "movie",
    year: 2023,
    genres: ["动画", "喜剧", "科幻"],
    rating: 7.5,
    duration: "96分钟",
    director: "林永长, 庄殿君",
    cast: ["张秉君", "张伟", "谭笑"],
    poster: "🐻",
    backdrop: "linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)",
    posterBg: "linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)",
    summary: "熊强三人组意外发现了一个神秘的机器人女孩，由此展开了一段关于亲情、成长与守护的温情故事。",
    aiSummary: "《熊出没》系列电影第九部，延续了近年来该系列在故事深度上的持续探索。这一次，影片将焦点放在了'母爱'这一主题上，通过机器人母亲与熊强三人组的互动，探讨了亲情的定义与意义。AI分析指出，作为一部面向儿童的动画电影，《熊出没》系列已经超越了简单的搞笑情节，开始触及更为深刻的人文主题。影片中的母爱叙事既温暖又充满力量，不少成年观众也表示被打动。制作水准持续提升，科幻元素的加入也为故事增添了更多可能性。这是中国动画电影商业化与艺术性平衡发展的一个成功案例。",
    tags: ["合家欢", "国产动画", "亲情主题", "科幻元素", "情感动人"],
    episodes: null,
    status: "已完结",
    videoUrl: "",
    videoType: "url"
  },
  {
    id: 15,
    title: "人生之路",
    titleEn: "The Road of Life",
    type: "tv",
    year: 2023,
    genres: ["剧情", "年代", "励志"],
    rating: 8.0,
    duration: "45分钟/集",
    director: "阎建钢",
    cast: ["陈晓", "李沁", "张嘉倪", "王天辰"],
    poster: "🛤️",
    backdrop: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    posterBg: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    summary: "根据路遥中篇小说《人生》改编，讲述了生活在陕北高原的青年高加林，在时代变迁中不断奋斗、追求理想的人生故事。",
    aiSummary: "改编自路遥经典中篇小说《人生》的电视剧版，在保留原著精神内核的基础上，将故事时间线拉长至改革开放后的四十年，展现了一代中国人的命运变迁。陈晓饰演的高加林既有理想主义的热情，又有现实困顿中的挣扎，人物形象立体饱满。AI分析认为，该剧最成功之处在于将个人命运与时代洪流紧密结合，通过高加林、刘巧珍等角色的人生选择，折射出中国农村走向城市化、现代化的壮阔历程。虽然部分情节进行了戏剧化处理，但整体仍保持了路遥作品一贯的深沉与厚重。",
    tags: ["路遥IP", "年代叙事", "农村变迁", "理想主义", "时代史诗"],
    episodes: 46,
    status: "已完结",
    videoUrl: "",
    videoType: "url"
  },
  {
    id: 16,
    title: "黑豹2：瓦坎达万岁",
    titleEn: "Black Panther: Wakanda Forever",
    type: "movie",
    year: 2022,
    genres: ["动作", "科幻", "冒险"],
    rating: 7.8,
    duration: "161分钟",
    director: "瑞恩·库格勒",
    cast: ["莱蒂蒂亚·赖特", "安吉拉·贝塞特", "特诺切·韦尔塔"],
    poster: "🐾",
    backdrop: "linear-gradient(135deg, #0f0c29 0%, #302b63 100%)",
    posterBg: "linear-gradient(135deg, #0f0c29 0%, #302b63 100%)",
    summary: "在特查拉国王去世后，瓦坎达人民努力保护自己的国家免受世界列强的入侵。与此同时，海底王国塔罗肯的出现为这个世界带来了新的挑战。",
    aiSummary: "漫威《黑豹》系列的第二部，也是向已故主演查德维克·博斯曼致敬的感人作品。影片没有简单地重新选角，而是将'失去与哀悼'作为核心主题，让瓦坎达的故事在悲伤中继续。安吉拉·贝塞特饰演的王太后拉蒙达和莱蒂蒂亚·赖特饰演的苏睿都贡献了精彩表演。AI分析指出，该片在超级英雄电影的类型框架内，探讨了种族、殖民、失落与和解等严肃议题，赋予了商业娱乐片罕见的思想深度。虽然片长较长、节奏略慢，但这种沉稳的叙事风格反而让影片在漫威电影中独树一帜。",
    tags: ["漫威宇宙", "种族议题", "女性力量", "致敬经典", "文化反思"],
    episodes: null,
    status: "已完结",
    videoUrl: "",
    videoType: "url"
  },
  {
    id: 17,
    title: "之城",
    titleEn: "Light the Night",
    type: "tv",
    year: 2023,
    genres: ["剧情", "年代", "悬疑"],
    rating: 8.2,
    duration: "50分钟/集",
    director: "刘俊杰",
    cast: ["杨谨华", "杨祐宁", "修杰楷", "刘品言"],
    poster: "🌃",
    backdrop: "linear-gradient(135deg, #8A2387 0%, #E94057 100%)",
    posterBg: "linear-gradient(135deg, #8A2387 0%, #E94057 100%)",
    summary: "以1980年代台湾灯红酒绿的'之花'酒店为背景，讲述了在那个风云变幻的时代，一群女性在爱情、梦想与现实中挣扎求存的故事。",
    aiSummary: "台剧近年来的又一力作，以1980年代台湾'酒店文化'为背景，通过一群陪酒女郎的命运浮沉，展现了那个特殊年代的社会风貌与人文情怀。剧集在服化道上极尽考究，完美还原了80年代的复古氛围。AI分析认为，该剧最出色的是对女性群像的刻画——每个角色都有自己的尊严与梦想，她们在男性主导的社会中努力寻找自己的位置。悬疑线的加入为剧情增添了张力，而最终的真相揭示更是令人唏嘘。这是一部有质感、有温度、有深度的年代剧精品。",
    tags: ["台剧精品", "女性群像", "年代复古", "悬疑推理", "社会写实"],
    episodes: 24,
    status: "已完结",
    videoUrl: "",
    videoType: "url"
  },
  {
    id: 18,
    title: "诛雀",
    titleEn: "Devotion of Suspect X",
    type: "movie",
    year: 2023,
    genres: ["悬疑", "犯罪", "剧情"],
    rating: 7.4,
    duration: "112分钟",
    director: "姬智",
    cast: ["张钧甯", "阮经天", "陈妍希"],
    poster: "🕯️",
    backdrop: "linear-gradient(135deg, #3a1c71 0%, #d76d77 100%)",
    posterBg: "linear-gradient(135deg, #3a1c71 0%, #d76d77 100%)",
    summary: "一起看似意外的坠楼案，牵扯出一桩跨越二十年的恩怨情仇。女警官在追查真相的过程中，逐渐发现所有线索都指向一个她最不愿面对的人。",
    aiSummary: "国产悬疑电影的新锐之作，以一起离奇的坠楼案为开端，抽丝剥茧地展开了一场关于真相与谎言、正义与情感的复杂博弈。阮经天的表演令人印象深刻，将一个看似温文尔雅实则内心复杂的角色演绎得层次分明。AI分析指出，影片在类型片的框架内做出了一些有益的探索——它不追求炫技式的叙事诡计，而是将重心放在人物内心的挣扎与抉择上。虽然某些情节的处理略显刻意，但整体仍是一部有诚意、有看头的国产悬疑片，为中国电影的多样化发展贡献了力量。",
    tags: ["国产悬疑", "烧脑推理", "人性探讨", "演技对决", "社会派"],
    episodes: null,
    status: "已完结",
    videoUrl: "",
    videoType: "url"
  },
  {
    id: 19,
    title: "泰勒·斯威夫特：时代巡演",
    titleEn: "Taylor Swift: The Eras Tour",
    type: "movie",
    year: 2023,
    genres: ["音乐", "纪录片", "演唱会"],
    rating: 8.9,
    duration: "165分钟",
    director: "泰勒·斯威夫特",
    cast: ["泰勒·斯威夫特"],
    poster: "🎤",
    backdrop: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 100%)",
    posterBg: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 100%)",
    summary: "记录了泰勒·斯威夫特标志性'时代'巡演的精彩现场，涵盖了她从乡村音乐到流行巅峰的全部音乐时代，是一场视听盛宴。",
    aiSummary: "这不仅仅是一场演唱会的记录，更是一部关于音乐、成长与自我和解的珍贵文献。泰勒·斯威夫特通过这场巡演，以编年史的方式回顾了自己二十年的音乐生涯，从《Love Story》的青涩到《Anti-Hero》的成熟，每一个'时代'都是她人生某个阶段的真实写照。AI分析认为，该片的成功在于它超越了单纯的粉丝向作品，而是用真诚的态度向所有观众展示了创作者的心路历程。演唱会电影这一形式的成功，也为电影发行模式提供了新的可能性。对于Swifties来说，这是一份无价的礼物；对于普通观众来说，这也是一次感受流行音乐魅力的绝佳机会。",
    tags: ["演唱会电影", "流行文化", "音乐纪录片", "女性创作者", "文化现象"],
    episodes: null,
    status: "已完结",
    videoUrl: "",
    videoType: "url"
  },
  {
    id: 20,
    title: "平原上的摩西",
    titleEn: "Fire on the Plain",
    type: "tv",
    year: 2023,
    genres: ["悬疑", "犯罪", "剧情"],
    rating: 8.3,
    duration: "60分钟/集",
    director: "张大鹏",
    cast: ["董子健", "邱天", "海清", "张晨"],
    poster: "🔍",
    backdrop: "linear-gradient(135deg, #859398 0%, #283048 100%)",
    posterBg: "linear-gradient(135deg, #859398 0%, #283048 100%)",
    summary: "改编自双雪涛同名小说，以一起跨越八年的悬案为线索，展现了上世纪90年代东北老工业基地的世态人情与时代变迁。",
    aiSummary: "改编自双雪涛现象级小说的悬疑剧集，延续了原著'东北文艺复兴'的美学风格——萧瑟的厂区、纷飞的大雪、迷茫的年轻人，共同构建了一个充满文学性与电影感的影像世界。董子健的电影导演处女作虽是剧集，却有着电影般的质感。AI分析指出，该剧最珍贵的是在悬疑类型的外壳下，注入了对时代变迁、阶级固化、理想幻灭等沉重议题的深刻思考。它不追求快节奏的快感，而是用舒缓的镜头语言让观众沉浸在那个特殊的历史时刻。这是一部有文学品位、有艺术追求的类型剧佳作。",
    tags: ["文学改编", "东北叙事", "时代挽歌", "电影质感", "文艺悬疑"],
    episodes: 8,
    status: "已完结"
  }
];

// 分类标签
const genreCategories = {
  "全部": "all",
  "电影": "movie",
  "电视剧": "tv",
  "科幻": "科幻",
  "悬疑": "悬疑",
  "剧情": "剧情",
  "动画": "动画",
  "喜剧": "喜剧",
  "动作": "动作",
  "犯罪": "犯罪",
  "治愈": "治愈",
  "历史": "历史",
  "励志": "励志"
};

// 获取本地存储的自定义数据
function getLocalMovies() {
  try {
    const data = localStorage.getItem('moviehub_custom_data');
    return data ? JSON.parse(data) : [];
  } catch(e) {
    return [];
  }
}

// 获取合并后的全部影视数据（内置 + 本地自定义）
function getAllMovies() {
  return [...movieDatabase, ...getLocalMovies()];
}

// 获取所有唯一分类
function getAllGenres() {
  const genres = new Set();
  getAllMovies().forEach(item => {
    item.genres.forEach(genre => genres.add(genre));
  });
  return Array.from(genres);
}

// 根据ID获取影视详情
function getMovieById(id) {
  return getAllMovies().find(item => item.id === parseInt(id));
}

// 根据类型筛选
function filterByGenre(genre) {
  const all = getAllMovies();
  if (genre === 'all') return all;
  if (genre === 'movie' || genre === 'tv') {
    return all.filter(item => item.type === genre);
  }
  return all.filter(item => item.genres.includes(genre));
}

// 搜索功能
function searchMovies(query) {
  const lowerQuery = query.toLowerCase();
  return getAllMovies().filter(item =>
    item.title.toLowerCase().includes(lowerQuery) ||
    item.titleEn.toLowerCase().includes(lowerQuery) ||
    item.director.toLowerCase().includes(lowerQuery) ||
    item.cast.some(actor => actor.toLowerCase().includes(lowerQuery)) ||
    item.genres.some(genre => genre.includes(query)) ||
    item.tags.some(tag => tag.includes(query))
  );
}

// 获取推荐（基于相似类型）
function getRecommendations(currentId, limit = 6) {
  const all = getAllMovies();
  const current = all.find(item => item.id === parseInt(currentId));
  if (!current) return [];

  const scores = all
    .filter(item => item.id !== parseInt(currentId))
    .map(item => {
      let score = 0;
      // 类型相似度
      current.genres.forEach(genre => {
        if (item.genres.includes(genre)) score += 2;
      });
      // 年份相近
      if (Math.abs(item.year - current.year) <= 2) score += 1;
      // 标签相似度
      current.tags.forEach(tag => {
        if (item.tags.some(t => t === tag)) score += 1;
      });
      return { ...item, score };
    })
    .sort((a, b) => b.score - a.score);

  return scores.slice(0, limit);
}

// 获取热门内容（按评分排序）
function getTrending(limit = 10) {
  return [...getAllMovies()]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}

// 获取最新内容
function getLatest(limit = 10) {
  return [...getAllMovies()]
    .sort((a, b) => b.year - a.year)
    .slice(0, limit);
}
