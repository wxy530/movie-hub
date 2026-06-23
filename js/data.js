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
    summary: "《流浪地球2》是《流浪地球》的前传，讲述了太阳危机爆发初期，人类提出并实施「移山计划」、「逐月计划」、「数字生命计划」等应对方案的故事。影片通过多条故事线交织，展现了人类在面对灭绝危机时的不同选择与挣扎。",
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
    title: "熊出没·伴我「熊芯」",
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
  },
  {
    id: 1001,
    title: "【登陆少年】左航20岁生日特别企划纪录片《FORGET ME NOT-记忆存档》",
    titleEn: "【登陆少年】左航20岁生日特别企划纪录片《FORGET ME NOT-记忆存档》",
    type: "movie",
    year: 2026,
    genres: ["治愈"],
    rating: 7.0,
    duration: "120分钟",
    director: "TOP登陆少年组合",
    cast: ["左航"],
    poster: "🌊",
    backdrop: "linear-gradient(135deg,#4facfe,#00f2fe)",
    posterBg: "linear-gradient(135deg,#4facfe,#00f2fe)",
    summary: "一场从晚霞出发，驶向星空的漫谈。聊聊成长的淤青与宇宙的奥秘，陪LEFT度过一段与那个矛盾却自洽的自己，安静地相处一会儿的时光。欢迎收看调频060522，限定特别节目。",
    aiSummary: "左航20岁生日特别企划纪录片，记录了他成长过程中的真实感悟与内心世界。",
    tags: ["TOP登陆少年", "左航", "治愈"],
    episodes: null,
    status: "已完结",
    videoUrl: "//player.bilibili.com/player.html?isOutside=true&aid=116618529214211&bvid=BV1jhG86mEZZ&cid=38532877406&p=1",
    videoType: "iframe"
  },
  {
    id: 1002,
    title: "左航 有何不可枳月禁昼直拍",
    titleEn: "左航 有何不可枳月禁昼直拍",
    type: "movie",
    year: 2026,
    genres: ["音乐"],
    rating: 7.0,
    duration: "120分钟",
    director: "枳月禁昼丨左航",
    cast: ["左航"],
    poster: "🎬",
    backdrop: "linear-gradient(135deg, #a44afc, #fe00f2)",
    posterBg: "linear-gradient(135deg, #a44afc, #fe00f2)",
    summary: "【左航】掉进蓝色棉花糖里丨「有何不可」甜度超标预警！这是人类可以拥有的萌物吗？",
    aiSummary: "左航的音乐直拍作品，展现其独特的舞台魅力与音乐表现力。",
    tags: ["TOP登陆少年", "左航", "音乐"],
    episodes: null,
    status: "已完结",
    videoUrl: "//player.bilibili.com/player.html?isOutside=true&aid=116389352508242&bvid=BV1CjDDBGEqf&cid=37435868317&p=1",
    videoType: "iframe"
  },
  {
    id: 1003,
    title: "铁拳教育",
    titleEn: "Iron Fist Education",
    type: "tv",
    year: 2026,
    genres: ["剧情", "教育"],
    rating: 8.2,
    duration: "60分钟/集",
    director: "洪忠灿",
    cast: ["金武烈", "李星民", "秦基周", "表志勋", "何英", "李升规", "玉真旭", "李秦焕", "金钟秀"],
    poster: "✊",
    backdrop: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
    posterBg: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
    summary: "为了重新树立起崩塌的教师权威，教育部新建教师权威保护局。",
    aiSummary: "《铁拳教育》聚焦当代教育困境，以「教师权威保护局」为切入点，深刻揭示师生关系的裂变与重建。导演洪忠灿以犀利的镜头语言呈现教育体制的痛点，金武烈饰演的核心角色在压抑与爆发之间游走，展现出极强的表演张力。该剧以现实主义笔触探讨教育者尊严、家长干预、制度改革等社会议题，引发广泛共鸣，是2026年韩剧中难得的社会批判力作。",
    tags: ["韩剧", "教育题材", "社会批判", "现实主义", "金武烈"],
    episodes: 10,
    status: "已完结",
    videoUrl: "//player.bilibili.com/player.html?isOutside=true&bvid=BV1YgJs63E2r&autoplay=0",
    videoType: "iframe"
  },
  {
    id: 1004,
    title: "(G)I-DLE - Crow MV",
    titleEn: "(G)I-DLE 'Crow' Official Music Video",
    type: "movie",
    year: 2026,
    genres: ["音乐"],
    rating: 9.0,
    duration: "4分钟",
    director: "CUBE娱乐",
    cast: ["田小娟", "宋雨琦", "闵熙珍", "金优琦", "李瑞淵"],
    poster: "🪶",
    backdrop: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    posterBg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    summary: "(G)I-DLE 第九张迷你专辑《We made》先行曲《Crow》官方MV。以哥特暗黑美学呈现成员化身乌鸦意象，传达不被厄运打倒、在逆境中倔强生存并展翅高飞的信念。",
    aiSummary: "《Crow》延续了 (G)I-DLE 一贯的黑暗女王美学，以乌鸦作为核心意象，构建出反抗命运、重生逆袭的视觉叙事。哥特风格的造型设计与高饱和度的光影运用形成强烈视觉冲击，田小娟的创作在歌词层面将女性力量主题推向新高度。MV在YouTube上线首日即登顶韩国非英语单曲榜，展现出该组合在视听艺术上的持续进化。",
    tags: ["(G)I-DLE", "KPOP", "韩流", "哥特美学", "女团", "新曲"],
    episodes: null,
    status: "已完结",
    videoUrl: "//player.bilibili.com/player.html?isOutside=true&bvid=BV1DvJA6yEf7&autoplay=0",
    videoType: "iframe"
  },
  {
    id: 1005,
    title: "ITZY - Motto Dance Video (Rooftop Ver.)",
    titleEn: "ITZY 'Motto' Dance Video (Rooftop Ver.)",
    type: "movie",
    year: 2026,
    genres: ["音乐"],
    rating: 9.0,
    duration: "4分钟",
    director: "JYP娱乐",
    cast: ["黄礼志", "崔智秀", "申留真", "李彩领", "申有娜"],
    poster: "💃",
    backdrop: "linear-gradient(135deg, #f5576c 0%, #ff9a9e 100%)",
    posterBg: "linear-gradient(135deg, #f5576c 0%, #ff9a9e 100%)",
    summary: "ITZY「Motto」天台版舞蹈视频。五位成员在天台之上以极具感染力的刀群舞演绎青春热血与自由态度，展现五代女团顶级舞蹈实力。",
    aiSummary: "ITZY 的「Motto」Rooftop Ver. 以天台作为舞台背景，将都市感与青春活力完美融合。编舞延续了 ITZY 一贯的高强度、高整齐度的风格，开合之间展现出令人惊叹的团队配合。黄礼志的领舞张力、申留真的力量感、李彩领的线条美各具特色。天台的自然光线与开阔视野为舞蹈增添了自由不羁的氛围，是舞台感与MV质感兼具的作品。",
    tags: ["ITZY", "KPOP", "韩流", "舞蹈视频", "五代女团"],
    episodes: null,
    status: "已完结",
    videoUrl: "//player.bilibili.com/player.html?isOutside=true&bvid=BV1HpGE6WEMq&autoplay=0",
    videoType: "iframe"
  },
  {
    id: 1006,
    title: "飞驰人生3",
    titleEn: "Pegasus 3",
    type: "movie",
    year: 2026,
    genres: ["喜剧", "剧情"],
    rating: 9.6,
    duration: "128分钟",
    director: "韩寒",
    cast: ["沈腾", "尹正", "黄景瑜", "张本煜", "魏翔", "沙溢", "范丞丞", "孙艺洲", "段奕宏", "张新成", "胡先煦", "李治廷"],
    poster: "🏎️",
    backdrop: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)",
    posterBg: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)",
    summary: "带着「巴音布鲁克之王」的荣光，张驰（沈腾 饰）再一次踏上飞驰之路，不仅要赢下比赛，更要实现比赛之外的意义……",
    aiSummary: "韩寒执导的「飞驰人生」系列第三部，2026年春节档上映。沈腾再度饰演赛车手张驰，原班人马悉数回归并新增张新成、胡先煦等实力演员。影片延续前作的赛车热血与喜剧风格，在巴音布鲁克之外开辟全新赛道，将个人梦想与团队精神提升到新高度。韩寒的导演功力更加成熟，赛场戏份的调度和拍摄有了质的飞跃，真实赛车场面与CG特效的融合更加自然。AI分析认为，该片在国产赛车电影这一稀缺类型中继续深耕，9.6分的B站评分证明了观众对该系列的高度认可，是一部笑中带泪、燃点十足的合家欢春节档佳作。",
    tags: ["韩寒", "沈腾", "喜剧", "赛车", "春节档", "国产电影"],
    episodes: null,
    status: "已完结",
    videoUrl: "//player.bilibili.com/player.html?isOutside=true&bvid=BV1fX96B2ETT&autoplay=0",
    videoType: "iframe"
  },
  {
    id: 1007,
    title: "惊蛰无声",
    titleEn: "Silent Awakening",
    type: "movie",
    year: 2026,
    genres: ["悬疑", "犯罪", "谍战"],
    rating: 8.0,
    duration: "120分钟",
    director: "张艺谋",
    cast: ["易烊千玺", "朱一龙", "宋佳", "雷佳音", "杨幂", "张译", "刘诗诗", "刘耀文", "段奕宏"],
    poster: "🕵️",
    backdrop: "linear-gradient(135deg, #1c1c1c 0%, #434343 50%, #000000 100%)",
    posterBg: "linear-gradient(135deg, #1c1c1c 0%, #434343 50%, #000000 100%)",
    summary: "我国最新战机的涉密信息外泄，国家安全面临威胁。国安小组迅速行动抓捕间谍，在信任与背叛的漩涡中，一场惊心动魄且无声的较量悄然上演……",
    aiSummary: "张艺谋首次执导谍战题材影片，由国家安全部指导创作，集结易烊千玺、朱一龙、宋佳等顶级演员阵容。影片以国产最新战机涉密信息外泄为切入点，将国安干警与境外间谍组织的博弈搬上银幕。张艺谋标志性的视觉美学与谍战类型的紧张氛围相得益彰，在冷峻的现实主义基调中注入人性挣扎——当调查矛头指向国安内部时，谁是卧底、谁是忠臣的悬念层层递进。AI分析认为，该片在国产谍战电影中实现了类型升级，既有《悬崖之上》的冷峻质感，又有新时代国安题材的创新突破，是一部兼具商业观赏性与主旋律表达的张氏大片。",
    tags: ["张艺谋", "谍战", "国安", "易烊千玺", "朱一龙", "国产大片", "春节档"],
    episodes: null,
    status: "已完结",
    videoUrl: "//player.bilibili.com/player.html?isOutside=true&bvid=BV1fkL16NE4h&autoplay=0",
    videoType: "iframe"
  },
  {
    id: 1008,
    title: "熊出没·年年有熊",
    titleEn: "Boonie Bears: The Hidden Protector",
    type: "movie",
    year: 2026,
    genres: ["动画", "喜剧", "奇幻"],
    rating: 8.6,
    duration: "118分钟",
    director: "林汇达",
    cast: ["张伟", "张秉君", "谭笑", "王兵兵", "聂吉轩"],
    poster: "🐻",
    backdrop: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    posterBg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    summary: "熊大曾是森林里的「老大哥」，直到一个不速之客到来，将神力传给了熊强，熊大变成了三人组合内能力最弱者。为了改变现状，他步入了反派陷阱，引发了一场毁天灭地的危机……",
    aiSummary: "熊出没系列第12部大电影，2026春节档上映，累计票房突破10.67亿。导演林汇达继续为这个国民IP注入新活力——影片以「能力转移」为创意核心，让曾经的森林领袖熊大首次沦为最弱者，通过身份反转带出关于自我认同与友情的深刻主题。画质再度升级，奇幻元素与动作场面相得益彰，适合全家观看。AI分析指出，熊出没系列之所以年年春节档屹立不倒，在于它能在合家欢的外壳下持续探索新主题，从环保、亲情到自我价值，每一部都有独立的表达核心。《年年有熊》B站评分8.6，延续了系列一贯的高品质。",
    tags: ["熊出没", "国产动画", "合家欢", "春节档", "奇幻", "林汇达"],
    episodes: null,
    status: "已完结",
    videoUrl: "//player.bilibili.com/player.html?isOutside=true&bvid=BV1CjVs61Ez9&autoplay=0",
    videoType: "iframe"
  },
  {
    id: 1009,
    title: "想飞的女孩",
    titleEn: "Girls on Wire",
    type: "movie",
    year: 2025,
    genres: ["剧情"],
    rating: 7.5,
    duration: "108分钟",
    director: "文晏",
    cast: ["刘浩存", "文淇", "张宥浩", "刘奕铁", "彭静", "杨皓宇", "周游", "耿乐"],
    poster: "🕊️",
    backdrop: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    posterBg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    summary: "一对表姐妹二十余年的成长与救赎。拼死逃离毒窟的田恬走投无路，前去寻找已决裂五年的表姐方笛。而此时伤痕累累的方笛并没有做好接纳表妹的准备……命运的齿轮却不得不重新咬合。",
    aiSummary: "文晏继《嘉年华》后再度执导的女性题材力作，入围柏林国际电影节主竞赛单元。刘浩存与文淇两位新生代实力派演员饰演一对命运交织的表姐妹，在毒品、暴力与贫困的阴影下艰难求生。影片以极具克制的镜头语言呈现女性在社会夹缝中的困境与反抗，不煽情却直击人心。AI分析认为，文晏延续了她一贯的社会观察视角，但这次将叙事重心从单一事件扩展为跨越二十余年的时间跨度，通过两姐妹的离合悲欢折射出底层女性的生存图景。影片在柏林首映后获得国际影评人广泛关注，被认为是中国女性电影的重要作品。",
    tags: ["文晏", "女性题材", "柏林电影节", "刘浩存", "文淇", "文艺片"],
    episodes: null,
    status: "已完结",
    videoUrl: "//player.bilibili.com/player.html?isOutside=true&bvid=BV1835UzgEGw&autoplay=0",
    videoType: "iframe"
  },
  {
    id: 1010,
    title: "肖申克的救赎",
    titleEn: "The Shawshank Redemption",
    type: "movie",
    year: 1994,
    genres: ["剧情", "犯罪"],
    rating: 9.9,
    duration: "142分钟",
    director: "弗兰克·德拉邦特",
    cast: ["蒂姆·罗宾斯", "摩根·弗里曼", "鲍勃·冈顿", "威廉姆·赛德勒", "克兰西·布朗"],
    poster: "🕊️",
    backdrop: "linear-gradient(135deg, #485563 0%, #29323c 100%)",
    posterBg: "linear-gradient(135deg, #485563 0%, #29323c 100%)",
    summary: "银行家安迪因被误判杀害妻子及其情夫而入狱。在肖申克监狱中，他凭借智慧与坚韧，在绝望中寻找希望，用二十年凿出一条通往自由的路。改编自斯蒂芬·金原著小说。",
    aiSummary: "IMDb与豆瓣双料影史第一的传奇之作，弗兰克·德拉邦特将斯蒂芬·金的短篇小说升华为一部关于希望与自由的永恒寓言。蒂姆·罗宾斯饰演的安迪和摩根·弗里曼饰演的瑞德之间的友谊，是影史上最动人的银幕关系之一。影片以监狱为舞台，却讲述了最辽阔的自由——内心的自由。B站4940万播放、9.9分的成绩证明了这部1994年的经典跨越三十年依然能打动新一代观众。无论何时观看，那句「有些鸟是关不住的」都依然让人热血沸腾。",
    tags: ["影史经典", "斯蒂芬·金", "希望", "自由", "必看神作", "IMDb第一"],
    episodes: null,
    status: "已完结",
    videoUrl: "//player.bilibili.com/player.html?isOutside=true&bvid=BV1NJ411G7ZA&autoplay=0",
    videoType: "iframe"
  },
  {
    id: 1011,
    title: "霸王别姬",
    titleEn: "Farewell My Concubine",
    type: "movie",
    year: 1993,
    genres: ["剧情", "历史"],
    rating: 9.8,
    duration: "171分钟",
    director: "陈凯歌",
    cast: ["张国荣", "张丰毅", "巩俐", "葛优", "英达", "蒋雯丽"],
    poster: "🎭",
    backdrop: "linear-gradient(135deg, #c31432 0%, #240b36 100%)",
    posterBg: "linear-gradient(135deg, #c31432 0%, #240b36 100%)",
    summary: "段小楼与程蝶衣自小在戏班学艺，一个演生一个饰旦，合演的《霸王别姬》誉满京城。然而两人对戏与人生的理解截然不同——段小楼深知戏非人生，程蝶衣却人戏不分，一段跨越半个世纪的悲欢离合就此展开。",
    aiSummary: "华语电影的巅峰之作，也是迄今为止唯一获得戛纳金棕榈奖的中国电影。陈凯歌以京剧《霸王别姬》为戏中戏，将程蝶衣、段小楼、菊仙三人的爱恨纠葛嵌入中国近半个世纪的历史变迁之中。张国荣奉献了堪称不朽的表演——他饰演的程蝶衣不仅是角色，更是一个时代悲剧的化身。从清末到文革，从戏台到人生，影片借「不疯魔不成活」的程蝶衣之口，道尽了艺术与信仰在历史洪流中的无力与坚持。B站评分9.8、1140万播放，证明了这部1993年的经典至今仍是不可逾越的高峰。",
    tags: ["华语经典", "陈凯歌", "张国荣", "金棕榈奖", "京剧", "时代史诗", "必看神作"],
    episodes: null,
    status: "已完结",
    videoUrl: "//player.bilibili.com/player.html?isOutside=true&bvid=BV1uE411775S&autoplay=0",
    videoType: "iframe"
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

// ========== 自动合并本地自定义数据到 movieDatabase ==========
// 这样所有直接使用 movieDatabase 的代码也能看到本地添加的内容
(function mergeLocalDataToDatabase() {
  try {
    const localMovies = getLocalMovies();
    localMovies.forEach(m => {
      if (!movieDatabase.find(item => item.id === m.id)) {
        movieDatabase.push(m);
      }
    });
    console.log('[MovieHub] 已合并本地数据，共', localMovies.length, '部');
  } catch(e) {
    console.warn('[MovieHub] 合并本地数据失败:', e.message);
  }
})();

// 重新定义 getAllMovies，直接返回已合并的 movieDatabase
function getAllMovies() {
  return movieDatabase;
}
