# 横向对比

按子类对库内项目做横向对比，比较技术路线、核心能力、成熟度、开源情况和适用场景。每个项目的详细分析见 `projects.json` 里的 `analysis` 字段。

- 更新：2026-11-27（Asia/Shanghai）；2026-11-18（Asia/Shanghai）；2026-11-17（美西）全量书签补录条目的星标在 2026-11-17（美西时间）查询；2026-11-16 每周书签新条目的星标在 2026-11-15（美西时间）查询；2026-11-15 新条目的星标在 2026-11-14（美西时间）查询；2026-11-14 新条目的星标在 2026-11-13（美西时间）查询；既有条目的星标多在 2026-11-09 至 11-10 查询，本批新条目的星标在 2026-11-12 查询，数字会变化
- 「自报」表示数字来自项目方的 README 或博客，未经独立验证；light 表示只有页面或帖子，没有可查的源码
- 各类项目数量不在本文写死，以 `projects.json` 的 `projects` 数组为准（「项目库」Page 会实时计算）

## 目录

- [游戏](#游戏)
- [研发效率](#研发效率)
- [Phone/Computer Use](#phonecomputer-use)
- [Agent 军团管理](#agent-军团管理)
- [大模型工具](#大模型工具)
- [其他（未做对比）](#其他未做对比)

## 游戏

范围：category=game

| 项目 id | 技术路线 | 核心能力 | 成熟度 | 开源 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
| opengame | 给已有编码 Agent 的 TypeScript 工作室：技能 + MCP + Three.js 模板库 | 25 个可玩模板 remix、无头试玩、竖屏广告和上架路径 | ★950，2026-11-25 建仓；传播文案有夸大 | Apache-2.0 | 要用现成 Claude Code/Codex/DeepSeek 做小游戏 remix 和发行 |
| 3d-os-scenario-skills | Agent 技能加 Scenario MCP，驱动 Blender、Maya、UE、Unity 等 DCC 和引擎 | 从概念图到引擎落地的多部门美术流水线 | ★3.6k，2026-08 创建，活跃 | MIT | AI 辅助游戏美术和资产生产 |
| scenario-blender-plugin | Blender 5 Python 扩展，内置本地 MCP | 在 Blender 里一站式调用多模态生成模型 | ★968，有 425 个测试文件和模糊测试 | GPL-3.0 | Blender 用户的 AI 资产工作流 |
| parametric-topdown-pixel-architecture | 零依赖 JS 参数化渲染加 Node CLI，配方嵌入 PNG | 批量生成像素建筑并导出 Godot 预制体 | ★182，早期 | NOASSERTION | 2D 俯视角游戏批量造城 |
| threepp | C++20 移植 three.js，有 OpenGL 和 Vulkan 两套后端，支持 Python 绑定 | 通用 3D 渲染，含光追、DLSS、FSR | ★1.2k，2021 年起维护 | MIT | C++、Python 原生 3D 应用和仿真 |
| solstice | Rust、wgpu、WGSL，离线烘焙后在浏览器流式加载 | 程序化植被和虚拟化几何（类 Nanite） | ★76，刚发布的演示 | MIT | WebGPU 渲染技术参考 |
| portals | three.js 加纯静态站，由 Claude 长时间持续生成 | 471 个程序化 3D 世界 | ★43，作品型 | NOASSERTION | 展示 AI 长程生成能力 |
| moss-keeper | 单文件 HTML，内嵌 base64 视频 | 离线播放的动画场景 | ★234，作品型 | 未声明 | 单文件分发示例 |
| modretro-chromatic-codex-edition | Codex 插件生成 GB 风格 ROM，烧进实体卡带 | AI 写复古掌机游戏并在真机上跑 | 商业联名硬件（light） | 未查到 | 复古硬件和 AI 创作 |
| poke-bonk | 浏览器 3D 游戏 | AI 编程做出的成品游戏 | light，商业数据未查到 | 闭源 | AI 做游戏的商业化样本 |
| hard-rock-hero | Wavedash 上的浏览器节奏游戏（摘要称用 Three.js） | 一拍一动作的节奏玩法 | light | 闭源 | 轻量网页小游戏 |
| viper-one-one | 网页战斗机模拟器（摘要称用 Three.js） | 飞行模拟和座舱 | light，官网抓取为空 | 未查到 | 网页模拟游戏 |
| bee-x9 | Vercel 上的 3D 网页演示 | 机器蜜蜂展示 | light | 未查到 | AI 生成 3D 演示 |
| 书桌之上 | three.js 游戏加 Tripo 生成 3D 素材 | 3D 解谜叙事 | light | 未查到 | 中文独立小游戏 |
| guizang-game-skill | Agent 技能加 three.js 网页游戏，三种打包脚本 | 可复用的 3D 动作游戏流程，附演示《雾锁山门》 | ★73，刚发布 | 技能 AGPL-3.0；演示内容保留版权 | 用 AI 做可玩的网页 3D 动作游戏 |
| pixelfx | JS 代码绘制像素特效，附 Claude Code 技能 | 文档称 244 种特效，可导出精灵表 | ★7029，两周内快速增长 | MIT（字体除外） | 2D 游戏特效和打击感 |
| ldtk | Haxe 加 Electron 的 2D 关卡编辑器 | 快速摆关并导出到游戏项目 | ★4904，2020 年起维护 | MIT | 2D 关卡迭代 |
| iw4l | Rust、Bevy 重写的 MW2（2009）运行时 | 读取已有正版安装中的地图和武器 | ★1200，玩法仍不完整 | Apache-2.0 | 引擎重写和模组研究（需自备正版数据） |
| dread-and-district | 网页运输模拟（Netlify），无源码 | 奇幻物流玩法 | light | 未查到 | AI 生成的可玩演示 |
| the-quiet-elevation | Google AI Studio 网页解谜，无源码 | 温馨解谜小品 | light | 未查到 | 短时解谜演示 |
| earth-on-spawn | Spawn 平台上的网页 3D 地球，无源码 | 帖文称可前往真实地点，天气同步 | light | 未查到 | 探索向展示 |
| voxel-engine | Spawn 平台上的体素破坏演示，无源码 | 浏览器内破坏体素 | light | 未查到 | 体素演示 |
| three-voxel-destruction | Three.js 加 WebGPU，体素交给 three-avbd GPU 刚体求解 | 城市、赛道、空间站三关可破坏，有源码和在线演示 | ★24，物理库仍为预览 | MIT | 浏览器体素破坏和 WebGPU 物理参考 |
| a-little-earth | three.js 网页步行，数据标注 Natural Earth | 多处真实地点的小场景，正在扩建 | light | 未查到 | 步行尺度的地点探索 |
| our-3d-reality | 网页 3D 城市漫游（引擎未公开） | 纽约中城步行游览，作者自述后来加了跑酷和语音 | light | 未查到 | 把一座真实城市做深 |
| fable-contra | Claude Artifact 网页动作游戏 | 短时间重做 Contra 风格关卡 | light；预览可能过期 | 未查到 | Fable 经典动作复刻展示 |
| sapper-minesweeper | 独立托管的网页扫雷 | 战争主题包装的完整扫雷规则 | light | 未查到 | 规则清晰、可验收的 Fable 演示 |
| worldlabs-atlas | 闭源世界模型，托管应用加 API，输出视频/关键帧/高斯泼溅，可转网格 | 从图片或灰盒生成可漫游 3D 世界 | light，2026-11-12 全面开放 | 闭源 | 场景级资产、关卡原型、影视预演 |
| mela-tycoon | Fable 5.2 全自动开发的网页模拟经营，Blender 脚本出 3D 资产 | 印度庙会版过山车大亨，带游客模拟和自测机器人 | light；源码私有 | 未公开 | 观察 Agent 自产资产+自测的游戏闭环 |
| 孤枪入夜 | three.js（WebGLRenderer、GLTFLoader）网页游戏，Tripo 从立绘生成 3D 角色与场景 | 俯视角暗黑三国动作肉鸽首章，手机横屏可玩，双骨 IK 握枪 | light；无源码，模型分工来自转发者 | 未公开 | 研究「立绘→3D 角色→可战斗」的单人资产管线 |
| godotprompter | 基于 Superpowers 的 Agent 技能插件，59 个 Godot 4.x 技能，多宿主清单 | 让编程 Agent 按 Godot 规范写 GDScript/C#（状态机、联机、着色器等） | ★964，v1.17，跟进到 Godot 4.8 | MIT | 用 Agent 做 Godot 游戏的团队 |
| qingming-3d | three.js r128 单页，同提示词交给 8 个前沿模型各自一轮生成 | 3D《清明上河图》长卷加 token/用时/规模对照表 | 新建，0 星；规模多为模型自报 | 未声明代码许可 | 对比前沿模型程序化大场景能力 |
| idol | 单图条件 DiT + 八叉树/Gaussian 解码器，DINOv3 与 FLUX.2 VAE 编码 | 一张图出最多约 105 万 Gaussian 的 3DGS .ply，7.2GB 显存 | ★1.1k（SDK），HF 2.3k 赞；基准自测 | Apache-2.0 | 照片/概念图转 3D 资产（评论区发现） |
| port-of-halvard | 无构建 three.js r169 网页，canvas 纹理 + 手写 GLSL 水面/天空，Opus 5.5 规划、Fable 5.2 实现 | 写实集装箱港口：船、岸桥装卸、约 7500 个实例化集装箱、镜面水面 | 新建，1 星；「30 分钟」为自报 | MIT | 研究前沿模型纯代码程序化大场景 |
| inkline-town | TypeScript + PixiJS 3D（WebGPU）+ 自研 Ritmo ECS | 墨线风等距城镇经营，产业链与运输模拟，任期制 | ★94，可在线玩 | 未声明许可（源码可读） | 风格化模拟经营参考 |
| crimson-loong | 单 HTML，three.js r180 内联，SDF 建模、光线步进云、Worker 合成音频 | 90 秒双龙动画短片，零资产 | ★192 | 未声明（three.js MIT） | 纯代码程序化美术与叙事 |
| painted-valley | three.js WebGL2 + Rapier，少量 CC0 人物/动画，Kuwahara 收笔 | 吉卜力风可漫游山谷，手绘背景 + 赛璐璐人物 | Patch 上开源，可 remix | 代码 MIT、美术 CC0 | 风格化（日漫/手绘）游戏起点 |
| room-at-dawn | three.js + three-mesh-bvh CPU 路径追踪烘焙到顶点 + 离线 HDR 电影渲染 | 写实清晨卧室，可行走，4K HDR 短片 | ★84 | MIT | 浏览器写实光照与程序化室内 |
| waldo-stripes-soft | Vercel 托管网页 3D（引擎未查到） | 1 万+ 动画小人的找 Waldo 小镇 | light，无源码 | 未查到 | 大规模人群演示 |
| dreamwaze | three.js 网页（作者自述） | 梦境风 3D 迷宫漫游、计时 | light，评论区发现 | 未查到 | 轻量 3D 小游戏 |
| resoundle | 闭源 Web 服务（模型未查到） | 一种风格生成整套游戏 UI 音效 | light，评论区发现 | 闭源 | 游戏 UI 音效统一风格 |
| gtagentclinic | React 19 + three.js 0.187（WebGPU，回退 WebGL 2），Node 权威模拟，MCP/REST 接入 Agent | 3D 急诊科可玩，也可让 AI 住院医师值班并评分 | 新建，★4；研究原型 v0.3.0 | 代码 Apache-2.0，病例 CC BY 4.0 | 具身临床 Agent 评测与教学原型（非临床用途） |
| aura-underground | 自研 Rust + WebGPU 引擎（作者自述），Flow 多 Agent 管线，闭源托管页 | 浏览器夜间城市竞速，页面自述可换装贴膜和在线同场 | light，无源码；制作周期为自报 | 未公开 | 品牌向可玩竞速，观察自研引擎 + Agent 管线 |
| frogxteps | Unreal Engine 5.9，一人指挥 Claude Code 多 Agent（日志自述） | 第三人称动作：蛙+史莱姆机甲攻城，五种角色，Windows 下载 | light，无源码；四天 Jam 成品 | 未公开 | 看 UE5 + 多 Agent 在 Jam 周期里能做到哪一步 |
| blender-skills | 28 个 Agent Skills（Python），可选 Blender MCP，面向 Blender 5.2 LTS+/5.3 | 建模到导出的完整 3D 管线技能，对照页展示有/无技能差异（效果自述） | ★1966；测试与 5.3 验证为自述 | MIT | 已有编码 Agent、要用 Blender 做游戏资产 |
| papertrails | three.js 程序化纸片场景，Fable 5.2 + Opus 5.5（作者自述） | 可漫游的无限纸艺世界，立体书翻页感 | ★35，刚发布；工作流为自报 | MIT | 风格化网页漫游，研究 AI 美术工作流 |
| sprite-stacking | Agent 技能 + Python/NumPy 四视图雕刻和 HTML 查看器 | 把像素四视图变成可旋转的假 3D 切片和十六向精灵表 | ★369，2026-11-20 建仓 | MIT | 用编码 Agent 做可旋转像素道具，而不上 3D 引擎 |
| walking-block | three.js 纯代码场景，时间纯函数，可离线渲成 45 秒片 | 八足苏联板楼行走的可重现短片/观察器 | ★43；需本地运行 | MIT（音频另有许可） | 研究复杂程序化场景和可复现渲染 |
| cozy-country | 未查到源码，Nimian Legends 商业田园沙盒 | 画地形、摆房屋再走进去逛，无战斗 | light，闭源 | 未查到 | 无压力建造漫游 |
| ten-balls | 未查到源码的浏览器投篮小游戏 | 十球蓄力投篮，空心三分、连中加倍 | light | 未查到 | 极小可玩小品 |
| tibo-dog | 未查到源码的网页幸存者，可嵌在 X 帖里玩 | 自动开火，带最多三只狗，存活 15 分钟 | light；制作数据为自报 | 未公开 | 可分享的轻量幸存者 |
| forge-fly | 作者自报无 3D 引擎、约 32 KB 代码，托管在 UI8 Forge | 浏览器战斗机小品 | light，无公开源码 | 未公开 | 极小体积技术演示 |
| spinward | 书签称 three.js + Fable MCP，源码未查到 | 设计并漫游太空圆柱殖民地 | light | 未查到 | 少见题材的网页建造漫游 |
| brush-and-blade | 开源像素格斗网页游戏 | 八画师风格、AI 对手和必杀 | ★12，体量小但可玩可看源码 | MIT | 想要开源 2D 格斗小品时 |
| littleprince | 作者自述 Opus + Tripo + Blender，源码尚未公开 | 《小王子》星球探索剧情网页游戏 | light，电脑浏览器可玩 | 未公开 | 中文 3D 叙事体验 |
| athenaion | three.js 纯代码大型古希腊世界，Claude Code / Opus 5.5（自述） | 可探索的零资产大场景 | ★717 | MIT | 用 Agent 长期维护大世界的参考 |
| carriage | three.js 哥特马车站，Gemini 4 Argon 生成并重构 | 模型能力举证演示 | light，★10，文档很少 | 未声明 | 看模型能否改自己写的前端 |
| procedural-alpine-lake | 程序化地形、GPU 侵蚀与 Python 合成配乐 | 60 秒高山湖泊电影 | ★69；许可证未声明 | 未声明 | 纯代码地貌短片 |
| ohmygame | TypeScript + Electron/Bun 本地守护进程，内置 Pi，也可驱动 Claude Code/Codex/OpenCode | Agent 写设计、做资产、写代码并在预览里试玩，再发布到社区 | ★3072，仍 beta；发行版默认遥测 | Apache-2.0 | 要一体化的本机 AI 游戏工作室 |
| papercraft | Agent 技能 + three.js 纸片库和拍摄脚本 | 按立体书纸艺风格做游戏、页面和动画 | ★214，2026-11-21 建仓 | MIT | 要复用 Papertrails 那套纸艺风格做自己的内容 |
| cube-to-cafe-racer | Blender 5.2 / Cycles，全部 Python 程序化，无外部模型 | 金属立方体展开成咖啡馆赛车的 45 秒短片 | ★0；成片在仓库内，音频另有许可 | MIT（代码） | 研究程序化机械变形和可重渲短片 |
| burn-it-back | 未查到引擎，Steam 即将发售的商业单机 | 冰雪废土生存策略，夜里用火烧退会进化的活体组织 | light，计划 2027 发行，无源码 | 闭源 | 看题材和调性，尚不能试玩 |
| duskward | 单文件 HTML 托管在 agnt.gg，无独立仓库 | 可交互的奥尼尔圆柱殖民地 | light；体积和零依赖为自述 | 未查到 | 想打开看圆柱世界，不适合当实现教材 |
2026-11-27 每日精选补入 opengame：它不是再做一个 Agent，而是给已有编码 Agent 配游戏工作室工具链。和 ohmygame 的一体化桌面应用不同，这里强调 25 个模板和上架路径；传播帖里的「一键复刻 GTA6 / 黑神话」与 README 不符，应按模板 remix 理解。

### 分析

这一类分成三条技术路线：一是「AI 资产流水线」，包括 3d-os-scenario-skills、scenario-blender-plugin、parametric-topdown-pixel-architecture，以及后来的 pixelfx（代码像素特效）和 guizang-game-skill（可玩网页动作游戏技能）；二是「渲染引擎和技术底座」，包括 threepp、solstice，以及重写商业游戏运行时的 iw4l，外加与 AI 无关的成熟关卡编辑器 LDtk；三是「AI 直接写出的成品或演示」，包括 portals、poke-bonk、书桌之上，以及 dread-and-district、earth-on-spawn、voxel-engine、the-quiet-elevation，再加上后来在热门帖评论里见到的 a-little-earth、our-3d-reality、fable-contra、sapper-minesweeper，大多是网页 3D。

结论 1：最成熟、最值得接入工作流的是 Scenario 的两件套。技能库覆盖整条流水线，Blender 插件的工程质量最高（测试、模糊测试、发布签名齐全），两者合起来就是「Agent 驱动 DCC」的参考实现。

结论 2：渲染底座里，threepp 胜在成熟，solstice 胜在技术前沿（WebGPU 上的虚拟化几何），但后者还只是演示。three-voxel-destruction 把 WebGPU 用在可玩的体素刚体破坏上，并开源了演示和底层求解器 three-avbd，适合对照「只有托管页的体素演示」。想在浏览器之外做原生 3D，选 threepp；想研究 Web 端下一代渲染，看 solstice；想看可玩的 WebGPU 物理，看 three-voxel-destruction。

2026-11-14 补入的孤枪入夜把 three.js + Tripo 的组合推进到带 IK 握枪和动作的 3D 角色战斗，是「AI 资产管线」与「成品」交界处的样本，但没有源码。

2026-11-15 补入三项：godotprompter 把「领域技能」路线带到 Godot 引擎编码（59 个技能），属于方法件；评论区发现的 idol 是开源单图转 3D 高斯泼溅模型，可作为 AI 资产流水线的生成端，与闭源的 worldlabs-atlas 形成物体级/场景级的开源/闭源对照；qingming-3d 是同提示词多模型的 three.js 大场景对照，有完整源码和 token 日志，更像评测样本而非单个演示。

结论 3：成品类项目仍有不少只是「能玩的演示」（dread-and-district、earth-on-spawn、voxel-engine、the-quiet-elevation，以及评论里出现的 a-little-earth、our-3d-reality、fable-contra、sapper-minesweeper），只能做 light 分析。其中 three-voxel-destruction 是例外：它有 MIT 源码和自研 GPU 求解器，不是一次性提示词小品。可复用的方法件仍是 pixelfx、guizang-game-skill 和与模型无关的 LDtk。可复用价值仍然更多在方法和工具，而不在某一款展示游戏。

2026-11-16 补入 port-of-halvard：Fable 5.2 纯代码写实港口，有 MIT 源码和 PROMPT.md 制作记录，归入「可读源码的程序化场景」样本，与只有托管页的 Fable 演示形成对照。

2026-11-16 每周书签补入：painted-valley、inkline-town 代表「统一风格化渲染」路线（手绘背景 + 赛璐璐人物、墨线等距），说明画面观感更多来自统一的着色规则而非堆细节，对 rpg-core 的高清风格化目标参考价值最高；crimson-loong 与 room-at-dawn 都是可读源码的纯代码场景，前者风格化实时、后者写实离线烘焙，与 port-of-halvard 一起组成「程序化场景」的三种取向；waldo-stripes-soft、dreamwaze 只有托管页，仅 light。评论区发现的 resoundle 是库内第一个游戏音频生成工具，补上资产流水线里的声音一环。

2026-11-17 每日精选补入三项：gtagentclinic 是库内第一个「人与 Agent 共用动作接口」的开源 3D 医院，把临床评测从文本基准做成具身环境，文档和工程完整，但明确还不是经过验证的教学或临床工具；aura-underground 把自研 Rust/WebGPU 引擎和多 Agent 管线用到可玩的品牌竞速上，完成度高但完全闭源；frogxteps 是 UE5 Jam 的可下载成品，附详细制作日志，补上库内此前缺少的 Unreal + Claude Code 完整游戏样本。

2026-11-17 补入 blender-skills：28 个面向 Blender 5.x 的专业工作流技能，把「Agent 驱动 DCC」从 Scenario 两件套扩展到「把技能装进已有编码 Agent」这条更轻的路径；测试和对照效果为自述。

2026-11-18 书签全量补录：papertrails 把立体书翻页做成可走的无限世界，是「AI 直接写出的演示」里风格最明确的新样本之一；同一作者线补上 walking-block、athenaion、procedural-alpine-lake，分别对应机械巨构短片、可漫游大世界和地貌电影。tibo-dog、forge-fly、spinward、cozy-country、littleprince 等可玩或可逛作品多为 light。brush-and-blade 虽小，但是少见的开源像素格斗。

2026-11-22 每日精选补入 sprite-stacking：把经典精灵堆叠做成四视图雕刻加 Agent 技能，属于可复用的方法件，可与 pixelfx 的代码像素特效对照；它不做真 3D 资产，也替代不了 blender-skills。

2026-11-23 每日精选补入 ohmygame：库内第一个把设计、资产画布、编码、Agent 亲自试玩和发布收成一体的开源游戏工作室，可与 genex-desktop 的跨引擎构建试玩对照。它仍是 beta，发行版默认遥测，目前没有 Linux / Intel Mac 安装包。这补上了「可复用价值在方法和工具」之外的一条产品化工作室路线。

2026-11-23 每周书签补入四项：papercraft 把 Papertrails 的纸艺方法做成可安装技能，是风格化成品旁边的方法件；cube-to-cafe-racer 补上 Leon Lin 影像线里的 Blender/Cycles 机械变形短片；burn-it-back 是尚未发售的商业生存策略，只能看设定；duskward 提供圆柱殖民地的在线单文件预览，但没有独立源码，仍属 light 演示。

## 研发效率

范围：agent-eng/dev-efficiency

| 项目 id | 技术路线 | 核心能力 | 成熟度 | 开源 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
| rigdepot | Go CLI + 可选团队服务器，把技能/MCP/工作流放进一个 Git 仓库再同步到本机工具 | 同步 Claude Code、Codex、OpenCode，可预览、写入和撤销 | ★4，0.1.0；Windows 仍是预览 | Apache-2.0 | 要统一团队里多台机器、多种编码 Agent 的配置 |
| panel-firewall | Python MCP/OpenAI 代理，确定性策略 + 签名回执，裁决不用模型 | 拦工具调用、要求人工批准，对客「已办完」必须对上回执 | ★0，早期仅沙箱；自报数字需谨慎 | MIT | 要给支付或客服类 Agent 加运行时闸门 |
| superpowers | 可组合技能加 hooks，适配十几种 harness | 规划、调试、写作等研发方法论 | ★31.5 万，事实标准 | MIT | 任何编程 Agent 的基础技能层 |
| pstack | Cursor 插件（技能加 agents） | 验证驱动、少写代码、并行 Agent | ★1.6 万（cursor/plugins 仓库） | 未单独声明 | Cursor 重度用户 |
| elephant-goldfish-model | 跨平台插件：有上下文的 Agent 写规格，无记忆的 Agent 评审 | 先审设计再写代码 | ★1.7 万，Google 出品 | Apache-2.0 | 需要设计评审的中大型改动 |
| understand-anything | 多 Agent 流水线生成代码知识图谱 | 交互式理解陌生代码库 | ★9.2 万 | MIT | 接手、调研陌生仓库 |
| security-audit-skill | 单个技能加覆盖率台账和 schema 校验 | 分阶段审计，换新上下文证伪 | ★6.8 万，Cloudflare 出品 | MIT | 代码安全审计 |
| landmine | CLI 加 MCP，把依赖版本的已知 bug 写进 AGENTS.md | 提醒 Agent 避开依赖里已知但未修复的坑 | ★10，早期 | MIT | 依赖多的项目 |
| openmoat | 单个 Rust 二进制，确定性规则加代理 | 拦截敏感文件和危险命令 | ★4，早期 | MIT/Apache-2.0 | 本机运行 Agent 的安全阀 |
| stroq | TS CLI，677 个规则，本地控制台 | 会话审计、密钥泄露检测、指令溯源 | ★232 | Apache-2.0 | 事后审计 Agent 行为 |
| tokeneconomizer | Python 标准库加 harness 插件 | 仓库记忆压缩、按需加载（自报省 18–31%） | ★5.6k，MSR 和伯克利 | Apache-2.0 | 降低 Claude Code、Codex 成本 |
| agav | TS 终端 Agent（Ink TUI） | 靠工作流省钱（自报 TB2.1 得分 84.7%） | ★177 | Apache-2.0 | 自托管终端编程 Agent |
| agent-autoloop | 零依赖 TS 内核，插件化事件源和通知 | 定时任务和 issue 驱动 Agent，只在关键处要人确认 | ★4.3k，刚发布 | MIT | 无人值守的仓库维护 |
| dsh-superagent-prototype | DeepSeek Harness bundle | 监控 issue、PR，自动把需求转成任务 | ★2.2 万，研究原型 | MIT | 研究自治开发流程 |
| borg | Rust、Tokio，7 个 crate | Agent 运行时的取消、隔离、重试和预算 | ★15，早期 | Apache-2.0 | 自建可靠的 Agent 框架 |
| oar-kanso | TS 库，统一驱动 12 种以上 Agent 运行时 | Agent 工作台的底层抽象 | ★515 | Apache-2.0 | 开发多 Agent 产品 |
| octopus-si-os | Rust 内核约 4.5 万行，契约式注册 | 研究 Agent 能否主动并自我改进的系统 | ★748，范围很大 | MIT | 研究型 |
| anthropic-commerce-agents | Python 7 个包加 8 个 Web 应用 | 商业交易 Agent 的参考蓝图，含安全闸门 | ★3.4k，官方 | Apache-2.0 | 电商和支付类 Agent 开发 |
| anymodelbot | Electron 加 magpie 网关加 DSH | 个人 Bot，一个 key 接 70+ 模型 | ★2.8k，推广成分重 | MIT | 国产 IM 场景的个人 Bot |
| exact | Contract 声明式界面加 Rust 跨端 runner | Agent 能自己构建、运行、截图、测试各平台 | ★1.3k，Expo 出品 | MIT | 面向 Agent 的跨端应用开发 |
| captureflow | Nx 单仓，含扩展、macOS 和 Cloudflare 部署 | 开源录屏，Agent 可经 MCP 录演示 | ★71 | NOASSERTION | 演示和 bug 复现录屏 |
| catalex | 桌面应用（TS 加 Rust） | Agent 在草稿目录改论文，人审后合入 | ★12 | AGPL-3.0 | 学术写作 |
| perch | Rust 原生 GUI | GitHub、代码浏览和 Agent 放在同一个窗口 | ★16 | Apache-2.0 | 代码评审工作台 |
| playbasis-agent-hub | SwiftUI 菜单栏应用 | 统计 Claude Code、Codex 的时长、token 和余量 | ★1 | Apache-2.0 | 个人用量看板 |
| stageshow | 技能加 React kit 加录屏 | 界面示意和动效，录屏后自我修正 | ★2.9k | 未声明 | 前端演示和原型 |
| unslop | 设计技能，可选 Playwright | 去掉 AI 味视觉 | ★1.3 万 | CC-BY-4.0 | 前端视觉打磨 |
| agents-md | 纯文档 | 减少防御性垃圾代码的 AGENTS.md | ★125 | 未声明 | 放进仓库根目录即用 |
| grok-bot-cli | Node CLI 加 MCP | 在终端创建 Grok Bot、群组和线程 | ★181 | MIT | 把 Grok Bot 脚本化 |
| grokbot-field-notes | 文档：角色、剧本、反模式 | Grok Bot 实战经验 | ★700 | MIT | 搭建 Bot 团队 |
| awesome-grok-bot | awesome 列表加 CSV、JSON 目录 | 经过验证的技能和插件索引 | ★111 | NOASSERTION | 找插件 |
| xai-plugin-marketplace | marketplace.json 索引仓库 | Grok Build 官方插件目录 | ★324，官方 | 未声明 | Grok 生态入口 |
| aether | 云端开发机（light） | 约 20 秒拉起 devbox 跑 Agent，沿用自己的订阅 | 闭源商业 | 闭源 | 不想占用本机资源 |
| sem | Rust CLI，tree-sitter 实体索引加 Git | 实体级 diff、影响分析和认证，面向 Agent | ★3449 | Apache-2.0 或 MIT | 让 Agent 看清改动碰了哪些代码实体 |
| anabasis | TypeScript 加 Bun，基于 pi 自动造 harness 和考题 | 在留出题上证明变好才保留改动 | ★72，研究型 | MIT | 为难以验收的领域自动改进 harness |
| kwwk | Swift CLI 加 SwiftPM SDK，MCP 按需 tool_search | macOS 原生编程 Agent，也可嵌入应用 | ★138，Homebrew 可装 | MIT | 要在 Apple 平台嵌 Agent 的开发者 |
| minimax-code | TypeScript 终端 Agent，官方安装器加 npm 包 | 用 MiniMax 或自备接口在本地改代码、跑验证 | ★2223，官方维护到 v0.7.2 | 第一方默认 MIT | 需要完整安装和文档的跨平台编码 CLI |
| optiq-code | 经 optiq serve 调本机模型的终端循环（无公开源码） | 针对小模型空补丁、失败编辑和原地打转做防护 | light，分数为作者自报 | 未查到 | 在 Mac 上用本地小模型落地补丁 |
| magpie | Go 本地网关加菜单栏应用 | 任意 Agent 换任意模型，额度用完自动切账号/模型 | ★35k | MIT | 多 Agent、多提供商、多账号混用 |
| archify | Agent 技能，产出单文件交互 HTML | 想法/代码库转可交互架构图和一页式图解，带源码溯源 | ★96k | Apache-2.0/MIT | 理解和讲解系统架构 |
| aws-emulator | Rust workspace，每服务一 crate，Smithy 模型生成协议层；AWS 自述全部由 Agent 编写 | 本地/CI 离线模拟 200+ AWS 服务，服务器模式与 Rust 嵌入模式 | ★7.2k，GA，按服务公布 fidelity 分数 | CC0-1.0 | 无账号测试 AWS 应用；研究「规格+测试+合并闸」约束 Agent 写大型软件 |
| open-code-review | Go CLI，确定性流水线（选文件、打包、规则匹配、定位与反思）+ 工具型 LLM Agent | PR 行级结构化审查、全仓扫描、委托宿主 Agent 审查 | ★5.1 万，阿里内部两年生产验证；基准自报 | Apache-2.0 | 进 CI 的 AI 代码审查 |
| modern-web-guidance | TS CLI + 技能/插件，按需检索 250 个 Web 特性指南，Baseline 兼容数据 | 让 Agent 用现代 Web API 替代旧写法，legacy-scan 扫描 | ★6k（源码仓），四大浏览器厂商维护；评测提升自报 | Apache-2.0 | 前端开发 Agent |
| stack-diagram | Agent 技能：Python 脚本抓官方图标、模板生成单文件 HTML、Playwright 渲染自查 | 一句话出带官方 Logo 的云架构风格图（HTML/PNG/TSX） | ★2.5k，2026-11 创建 | MIT | 文档和方案里的技术栈图 |
| refactoring-ui-skill | Agent 技能（SKILL.md + 14 个按需引用）+ 零依赖 Python 脚本 + eval 用例 | 151 条 UI 设计规则约束与页面走查，带规则号和严重度 | ★468 | 未声明（NOASSERTION） | 让编码 Agent 自查 Web UI 设计 |
| nvidia-skillevaluator | Python CLI，三层门禁（静态检查 / 去重 / 沙箱对照实验） | 评 Agent Skill 与插件的安全、重叠和是否真能提升 Agent | ★3346，NVIDIA，Experimental | Apache-2.0 | 给技能仓库加 CI 门禁、做 Verified Skills |
| vercel-eve | TypeScript 约定目录框架（指令/工具/技能/频道/日程），npm 包 eve | 从零定义可检查、可部署的耐久 Agent，可加 Web Chat | ★5941，Vercel；当天有 1.0.1 讨论 | Apache-2.0 | 要做成可托管 Agent 产品，而不是编排现成 CLI |
| stitch-skills | Agent Skills + Stitch MCP，三个设计/构建/工具插件 | 在 Stitch 里生成界面并导出 React / React Native | ★1.0 万；代码约三个月未更新 | Apache-2.0 | 已在用 Google Stitch 的编码 Agent 工作流 |
| rust-anything | Rust CLI + 行为录制回放，桥接旧代码与 Rust 移植，含 MCP/技能 | 增量把多语言应用迁到 Rust 并验收行为 | ★1553，MIT；用例数字为自报 | MIT | 要用 Agent 改写但怕改坏行为 |
| clickhouse-loom | 自托管 MCP：ClickHouse 记忆 + 代码索引，Claude Code/Codex/Cursor 插件 | 跨会话共享记忆，记忆挂在文件和符号上，并可查定义与调用方 | ★180，官方基准为自报 | Apache-2.0 | 给编码 Agent 补团队长期记忆和代码定位 |
| tracer-opensre | Python CI/CD 可靠性 Agent，工具循环调查失败构建并可自托管 | 区分 CI 故障和代码故障，把修复推到 PR 上待审，也可查生产故障 | ★1.4 万，Public Alpha | Apache-2.0 | 流水线变红时先让 Agent 调查再人工合并 |
| beautifulrust | 三个 Agent 技能 + 测试过的 Clippy 配置 | 写、审、把其他语言改成较地道的 Rust | ★2046，有文档站 | MIT | 纠正「能跑但不像 Rust」 |
| swamp | CLI + TypeScript 行为类型和 YAML 工作流，CEL 传数据，AGPL | 把重复任务编成可再跑的行为和工作流 | ★959；效率数字为转述/自报 | AGPL-3.0 | 不想每次重新规划 Skill |
| diffity | Mac/Linux 桌面 diff 审阅器，把批注交给本机 Claude Code | 人审 Agent 代码并让它按评论修改 | ★919；无 Windows 包 | MIT | 本机审 Agent 提交 |
| craft-anything | Rust 桌面/CLI/MCP，Study→Build→Check，默认真访客可见信息 | 研究有权查看的软件并让本机 Agent 重做一版 | ★3.6 万，early alpha | Apache-2.0 | 只用于有权研究的软件；不是破解工具 |
| genex-desktop | 多 Agent 桌面应用，对接 UE/Unity/Godot 等并自动试玩 | 用订阅或本地模型做游戏、构建和试玩 | ★881，仍早；Windows 包未签名 | MIT | 想要跨引擎的游戏开发 Agent 闭环 |
| nvidia-skillspector | Python CLI / MCP，静态规则加可选 LLM 语义分析，输出 SARIF | 安装 Agent 技能前扫描提示注入、泄密和供应链风险 | ★2.7 万，NVIDIA 官方，是 SkillEvaluator 的安全层 | Apache-2.0 | 先判断技能能不能装 |
| papilot | 跨平台 LaTeX 编辑器，对接已有编程 Agent，在已排版 PDF 上审阅 | 圈选页面让 Agent 改 .tex，对照排版结果接受或拒绝 | ★363，v0.11.0，可与 Overleaf 同步 | MIT | 写论文时不想盯着源码 diff |
| onlook | Electron + React 19 画布，git worktree 跑真实 dev server，接入 Claude Code 或 Codex | 在真实产品界面上并列探索并改代码，差异作为可审 PR | ★27413，YC W25；官方包目前仅 macOS | Apache-2.0 | 设计师要在真实 Web 产品上做界面探索 |
| agent-thinking-meter | 标准库 Python CLI，读本机 Claude Code / Codex / Antigravity 日志 | 统计工具步还带不带推理、每回合工具次数，只输出聚合计数 | 新建，★0；案例数字为自报 | MIT | 用自己的日志验证「模型是不是更懒了」 |
2026-11-27 每日精选补入 rigdepot 和 panel-firewall。前者做团队级技能和 MCP 同步，和 vercel-eve 的「单项目约定目录」不同；后者是运行时确定性防火墙，裁决不用模型，目前仍是早期沙箱软件，数字为自报。

| seo-skills | 30 个 SKILL.md + 3 个预配置 MCP（AI SEO Tracker、Scribiz、Awesome Tools） | 把技术 SEO、GEO、内链、迁移等做成可合并的 PR 或仓库文件 | ★1550；部分技能通向作者的付费产品 | MIT | 要用编码 Agent 直接改站点 SEO，而不是只要审计 PDF |
| geo-sleuth | 标准 Agent Skill + 约 20 个单用途 Python 脚本；OSM/高程/卫星/街景 | 从一张照片求相机坐标、朝向和误差半径，并给出卫星证据图 | ★7352；案例误差为项目记录的盲测 | MIT | 需要可复现、可出示证据的照片地理定位 |
| agentest | 离线确定性规则，读取 OpenTelemetry GenAI 轨迹，不用 LLM 当评委 | 165 条检查，抓住「声称完成但轨迹不支持」 | ★20；演示数为自带样例 | Apache-2.0 | 要审计某次 Agent 运行是否说到做到 |
| sign-in-with-chatgpt-devkit | 本机 Node SDK + React 组件，走 ChatGPT OAuth 和订阅额度 | 让本机开源应用用 ChatGPT 登录并调用套餐，不必自备 API Key | ★321；非商业许可 | 非商业许可 v1.0 | 给开源 Agent 降低鉴权和计费门槛（商用需另申请） |
| open-artifact | 本机守护进程 + 开放文件夹格式 + 技能/MCP/插件 | 幻灯片、设计、表格、动画等可在本地编辑、评论并导回 Agent | ★362，由 baoyu-design 重建 | Apache-2.0 | 要在任意编码 Agent 里做可编辑的本地成品 |
| agy-milestone-progress | Antigravity 插件，纯 Python 标准库 + Hook | 大任务拆里程碑、白话播报，静默过久则提醒或刹车 | ★5，新建；绑定 Antigravity | MIT | 解决 Antigravity 长任务黑盒思考、看不到进度 |
| design-flow | Agent Skill + 本地 UX 画布和原型页 | 先画出屏幕、分支和错误路径，批准后才写代码 | ★14，新建 | MIT | 先对齐交互再开工，减少返工 |
| aihubbar | 原生 macOS 14+ Swift 6/SwiftUI 菜单栏，Windows/Linux 的 Tauri 2 仍在准备 | 多服务额度与实时会话、按项目发起命令并对比结果 | ★0，但有公证的 Mac 安装包和完整文档 | MIT | 要在 Mac 菜单栏同时看多家 AI 服务并顺手开工 |
| wa-mcp | Go（whatsmeow）本地桥 + Python MCP 服务端/SDK，存储默认加密 | 搜索 WhatsApp 聊天、转写语音、读截图；发送默认关闭 | ★5，2026-11-23 建仓；组织名需自行评估 | MIT | 要把本机 WhatsApp 只读（或受控发送）接进 Agent |
| usage-wizard | 小型 Swift 菜单栏，只读 ~/.claude/projects 日志 | 显示上下文和缓存窗口，两步交接把结论写入 .handoffs/ | ★0，仅 macOS / Claude Code，非官方 | MIT | 专门解决 Claude Code 对话变贵和该换新会话的时机 |
| mirage | Python/TypeScript/Rust 虚拟终端：统一 VFS + 按需把计算路由到本机或沙箱 | 用 Agent 熟悉的 shell 语义访问多服务，并用 profile/策略做权限裁剪 | ★3840，0.1.0 正式发布，仍标 experimental | Apache-2.0 | 要在应用或边缘里嵌入可策略控制的终端，而不默认起一台完整沙箱 |
| shirudo | C + eBPF，签名 upatch，TPM 测量；OpenAI 与 Cisco 联合开源 | Agent 起草热补丁，人批准后在不停机的 Linux 服务上挡住漏洞路径 | ★1737，pre-release，需定制内核和 TPM | BSD-2-Clause | 漏洞已公开、正式补丁未上时的虚拟补丁，不能替代真正的补丁 |
| agent-memory | 本机 Bun/TypeScript MCP：混合检索、知识图谱、代码图谱和 Web UI | 跨 Claude Code/Cursor 的本机记忆和会话交接 | 2026-11-24 建仓，★0；延迟和内存为自报 | MIT | 只要本机共享记忆、不要上图数据库或独立服务 |
| ai-werk-skills | 23 个 Markdown Agent Skills + 仓库内带 TTL 的大脑 | 把编码 Agent 编成五阶段软件交付线 | 2026-11-20 建仓，★0，2026-11-24 宣布开源 | Apache-2.0 | 已有编码宿主、想用纯技能而不是再上一套控制台 |

### 分析

这一类可以按作用分成五层：方法论和技能层（superpowers、pstack、elephant-goldfish-model、unslop、stageshow、agents-md）；理解和审计层（understand-anything、security-audit-skill、stroq、landmine）；安全和成本层（openmoat、tokeneconomizer、agav、playbasis-agent-hub）；运行时和自治层（borg、oar-kanso、agent-autoloop、dsh-superagent-prototype、octopus-si-os、exact，以及后来补入的 kwwk、minimax-code、optiq-code）；生态和目录层（Grok Bot 相关项目、xai-plugin-marketplace）。

结论 1：技能（SKILL.md）已经成为研发效率工具的主流载体。星标最高的几个（superpowers 31.5 万、understand-anything 9.2 万、security-audit-skill 6.8 万）都是技能或插件，而且同时适配多种 harness，技能本身几乎不绑定具体 Agent。

结论 2：多个项目不约而同用「换一个干净的上下文去复核」来提高质量：elephant-goldfish-model 用无记忆评审，security-audit-skill 用新上下文证伪，pstack 强调验证。这是目前对抗 Agent 自我确认偏差最有效的套路。

结论 3：安全和成本工具大多还很早期（openmoat、landmine、borg 都不到 20 星），但定位清晰。tokeneconomizer 有大厂论文背书，是成本优化里唯一有系统评测的；安全方面，openmoat（事前拦截）、stroq（事后审计）和 security-audit-skill（代码审计）可以组合使用。本窗口补入的 sem 是少见的高星、非技能型底座，给 Agent 提供实体级 diff 和影响分析；anabasis 则把「换干净上下文验收」用到了自动改进 harness 上，仍偏研究。2026-11-14 补入的 aws-emulator 是迄今最大的「Agent 写全部代码、人只写规格和校验」工业样本，可与 anabasis、octopus-si-os 的研究路线对照。评论里后来又出现三类可运行的 harness：minimax-code 是厂商维护的跨平台开源 CLI，体量最大；kwwk 是少见的纯 Swift 方案，适合要嵌进 macOS 应用的人；optiq-code 针对本机小模型的失败模式，但还没有公开源码，榜分数也是作者自报。

2026-11-15 补入的审查与知识类工具：open-code-review（阿里，5.1 万星）用「确定性流水线 + Agent」解决漏文件和行号漂移，是库内第一个可直接进 CI 的成熟 PR 审查 CLI，改变了审查/审计层「多为早期小项目」的格局；modern-web-guidance 由四大浏览器厂商维护，并带有「有无技能」对照评测，是领域知识型技能里证据最充分的；stack-diagram 与 archify 同属架构可视化，但更轻、更偏出图。

2026-11-16 补入 refactoring-ui-skill：和 modern-web-guidance 一样属于「领域知识技能」，但管的是视觉设计而不是 API 写法；它只做约束和诊断，不负责生成，正好可以串在 UI 生成工具之后做验收。

2026-11-17 补入三项：nvidia-skillevaluator 给技能生态补上「技能本身好不好、有没有真的提升 Agent」的评测门禁；vercel-eve 是从约定目录从零定义可部署 Agent 的框架，和编排现成 CLI 的平台不同；stitch-skills 把 Google Stitch 设计流程技能化，但依赖 Stitch MCP，且查询时代码已约三个月未更新。

2026-11-18 补录把「让 Agent 写得像样、改得不坏、流程可再跑」三条路写清楚了：BeautifulRust 管 Rust 惯用法，rust-anything 管对照旧行为的迁移验收，Swamp 把重复 Skill 编成工作流。Diffity 补上本机审 Agent 代码的桌面工具。Craft Anything 星标很高但仍是 early alpha，且只适用于有权研究的软件。Genex 则把构建和试玩收成跨引擎的游戏开发闭环。

2026-11-19 补入两项：nvidia-skillspector 把技能安全扫描做成可进 CI 的高星官方工具，和 nvidia-skillevaluator 分工明确——一个问能不能装，一个问装了有没有变好；研究报告中的漏洞比例为自报。papilot 把学术写作的人机界面从 .tex 差异改到排版后的 PDF，和 catalex 同类，但跨平台并在文档中支持 Overleaf 同步。

2026-11-20 补入 onlook 和 agent-thinking-meter。Onlook 把「在渲染结果上圈选、交给已有 Agent 改源码」做成设计师向的本地画布（对象是正在跑的 Web 应用，而不是 papilot 的 PDF），官方包目前只有 macOS。agent-thinking-meter 则补上一块库内没有的观测：不看代码或技能，只量本机日志里工具调用前还是否在推理。

2026-11-21 补入 seo-skills 和 geo-sleuth，都继续印证「技能是研发效率工具的主流载体」，但一个走向可合并的 SEO/GEO 改动（部分 MCP 连到作者的付费产品），一个是少见的、用脚本排序、模型只做裁决的照片地理定位技能，案例误差为项目自述。

2026-11-22 每日精选补入 clickhouse-loom 和 tracer-opensre。Loom 是数据库厂商做的自托管记忆和代码索引 MCP，官方费用与定位数字为自报，和 TokenEconomizer（省当前仓库 token）及 Omnigraph（图结构共享状态）互补。OpenSRE 补上库内此前缺少的 CI/CD 可靠性 Agent，星标已过万，但仍是 Public Alpha，交互式 shell 要登录，遥测默认开启。

2026-11-23 每日精选补入 agentest：用 165 条离线规则审计轨迹，专门抓「Agent 说做完了但记录对不上」，和 TraceTrial-Bench（任务完成 + harness 可靠性）、Agent Initiative Benchmark（该不该开口）互补。星标还很少，演示数字来自自带样例。

2026-11-23 每周书签补入四项：open-artifact 和 design-flow 都把「先在本机画布上改再继续」做成技能，前者覆盖八种成品类型，后者专管 UX 流程批准；agy-milestone-progress 给 Antigravity 长任务补上可见的里程碑和刹车；sign-in-with-chatgpt-devkit 是少见的官方身份/额度套件，但许可证为非商业，商用不能直接拿来就用。
2026-11-24 每日精选补入三项偏本机观测和连接的工具：AI Hub Bar 是覆盖多家服务额度和会话的原生 Mac 菜单栏应用，完成度明显高于 0 星这个数字；Usage Wizard 更窄，只解决 Claude Code 的上下文体积、缓存窗口和交接；WA MCP 补上库内此前缺少的 WhatsApp 本地 MCP，默认加密且默认不发送，但发布组织名需要使用者自己判断。

2026-11-25 每日精选补入 mirage、shirudo、agent-memory 和 ai-werk-skills。Mirage 给出一种新的本机/嵌入式终端抽象：统一 VFS 加按需路由计算，和再起一台沙箱不是同一条路，官方内存和数据源数字为自报，版本仍标 experimental。Shirudo 是 OpenAI 与 Cisco 的 eBPF 热补丁平台，库内此前没有同类，但 pre-release，生产还要定制内核和 TPM。agent-memory 是当天新建的本机 MCP 记忆层，和 clickhouse-loom、omnigraph、tokeneconomizer 对照更轻、完全本机，星标为 0，性能数字为自报。AI Werk Skills 把软件工厂写成 23 个可移植 Markdown 技能加带 TTL 的大脑，和 mastra-factory / tencent-loopforge 的运行时工厂不同，也还没有外部验证。
## Phone/Computer Use

范围：agent-eng/phone-computer-use

| 项目 id | 技术路线 | 核心能力 | 成熟度 | 开源 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
| mika | 安卓无障碍服务加隐藏虚拟屏，在手机本机运行 | 操作任意 App，不需要 Root 或电脑 | ★7.9k | Apache-2.0 | 个人安卓自动化 |
| phongent | Mika 的分支，加 iOS 主控和局域网群控 | 多台手机分派任务 | ★356 | Apache-2.0 | 手机群控和批量操作 |
| pinky | Go 桌面应用（GPU 自绘），go-ios 加安卓 helper，MCP | 任意 Agent 操控 iPhone 或安卓，付款前停下等人确认，带录屏 | ★1.5k | Apache-2.0 | 需要安全护栏的 Phone Use |
| poki | iPhone 端 UI Automation 加 Mac 端 MCP | 在 Mac 上让 Agent 操作真实 iPhone，0.4.0 起支持后台任务 | ★1.4k（2026-11-15） | AGPL-3.0 | iOS 自动化 |
| opencode-browse | Chromium 扩展加 MCP，用 Playwright | 接管已登录的标签页，登录和付款交还给人 | ★427 | MIT | 在真实浏览器会话里跑 Agent |
| pointer | Chrome 扩展加本地 bridge，MCP 和 hook | 点选元素，把结构、样式和截图交给 Agent | ★1，刚发布 | MIT | 前端改 UI 时精确指代 |
| redraft | Chrome 扩展加本地 Claude Code bridge | 多 Agent 现场改网页版式 | ★5 | MIT | 网页设计探索 |
| windows-terminal | QEMU 加终端图形协议，MCP 提供 9 个工具 | 隔离的真实 Windows 11 虚拟机 | ★5 | MIT | 安全地做 Windows Computer Use |
| image-context-manager | Python（Pillow）加技能 | 截图裁剪压缩、记录发现、按需召回 | ★3 | MIT | 降低 Computer Use 的上下文成本 |
| aura-autopilot | Python Agent 加 UE5、Unity、Godot、Roblox 插件 | 在游戏引擎里自动试玩和测试 | ★831 | Apache-2.0 | 游戏 QA |
| poinky | Swift，常驻 Mac 刘海区 | 看屏幕、语音回答、画示意图 | ★9 | MIT | 桌面伴随式助手 |
| hermes-voice | Home Assistant 集成加刷机的 Echo | 旧 Echo 变成 Agent 的语音入口 | ★627 | MIT | 智能家居语音 |
| moli | Rust 自研无头浏览器（V8），CDP/WebDriver 三协议 | 低内存网页抓取、语义树导出和自动化 | ★23.5k；自报成功率 80.7% | Apache-2.0/MIT | Agent 批量抓取和浏览器自动化后端 |
| smitline | 自托管 MCP 服务，OpenAI 实时语音加 Twilio/SignalWire | 代用户打电话、进 Zoom/Teams/Meet 开会并回报 | ★109，较新 | Apache-2.0 | 预约、询价、代参会做记录 |
| tencent-browserskill | Rust bsk CLI/守护进程 + MV3 扩展，WebSocket 加 CDP，独立可见 Agent Window | 在已登录的 Chrome/Edge 里读写页面、导出表格、网站调试，人可随时接管 | ★10.4k | MIT | 任意 Shell 型 Agent 处理需要登录态的网页任务 |
| xphoneuse | Rust 桌面应用：安卓 scrcpy、iPhone CoreDevice 隧道，内嵌 MCP | 免 Xcode 操控 iPhone/安卓，宏、定位模拟、文件管理 | ★4，评论区发现 | MIT | 跨 Windows/macOS/Linux 的真机 Phone Use |
| n8n-nod | TypeScript + Electron，本机容器里的 Linux 工作区与 Chromium，PostgreSQL + Vault | 在真实网站跑差事，行动先审批，密钥不进模型 | ★2347，n8n 官方，research preview；评测数字自报 | Apache-2.0 | 本机个人 Computer Use 助手 |
| coucou | Mac 灵动岛 + iPhone 锁屏伴侣，监视并批准编程 Agent | 在最容易看到的系统位置批准操作 | ★7309 | MIT | Apple 用户盯着后台 Agent |
| replit-amuse | TypeScript 本机 Web 个人助手，Chromium 实时浏览器 + PostgreSQL，Apache-2.0 | 可旁观/接管的浏览器，发送和付款前审批卡，记忆为工作区文件 | ★131，2026-11-19 开源；只需 OpenAI 密钥 | Apache-2.0 | 要在自己电脑上跑带审批的个人助手，并能看着它浏览 |
| obscura | Rust 无头浏览器，V8 + CDP，可截图和导出 PDF | 给 Agent 或自动化一个更轻的浏览器 | ★3.6 万；并非完整 Chromium 替代 | Apache-2.0 | 要轻量无头浏览；不是反爬教程 |
| openrocode | Python + MuJoCo，把机械臂做成三维 Computer Use；模型只看像素和厘米 | 点选或写短程序，套件负责几何、护栏、急停和留痕 | ★2，alpha；公开演示以仿真为主 | Apache-2.0 | 在仿真里试验「模型开车/开臂」的套件 |

| karpo-browser | TypeScript 库/CLI/MCP，Chrome CDP；System 1 决策模型 + System 2 规划模型 | 把点击/输入交给一次前向的决策模型，大模型只做规划、阅读和收尾 | 当天开源，★0；Browserbase 分数为自报 | Apache-2.0 | 要降低浏览器逐步操作的模型成本，并接到 Claude Code/Codex |
| pocket-dev | Node 22 CLI，手机浏览器连本机；ISC | 在手机上继续本机 Claude Code/Codex 终端、聊天、Git 和文件 | ★1；电脑需开机且默认同一 Wi-Fi | ISC | 人在外面盯或接着改本机编程 Agent，而不是控制手机 |
| phil | Python + ADB/uiautomator2，OpenAI 兼容接口 | 电脑用自然语言逐步操作已调试的安卓真机 | 当天开源，★0；有 pytest | MIT | 要从电脑控制安卓，并能换任意兼容 API 的模型 |
| nosis | Python 运行时：Core / Runtime / Bridge，TUI、GUI 与飞书共用协议 | 分档权限、沙箱 Shell、可确认的桌面操控，会话存 JSONL | ★65，当天无作者原帖 | MIT | 要可换前端、可接飞书的本机个人 Agent 运行时 |
| easi-run | 自托管真实 Chrome：Rust 控制器 + 自研合成器，MCP/REST | 隔离会话、人工接管登录/验证码，会话 ID 可交还给下一个 Agent | ★125，评论区发现；AGPL | AGPL-3.0 | 要在自己的 Linux 服务器上给 Agent 真 Chrome，而不是无头仿真引擎 |

### 分析

按控制对象分：手机（mika、phongent、pinky、poki）、浏览器（opencode-browse、pointer、redraft）、桌面或虚拟机（windows-terminal、poinky、image-context-manager）、垂直领域（aura-autopilot 控制游戏引擎，hermes-voice 控制语音设备）。

结论 1：手机方向分成两条路。mika 走「手机本机运行」，免 Root、免电脑，星标最高；pinky 和 poki 走「电脑控制手机」加 MCP，方便接入现有编程 Agent。其中 pinky 的安全设计（付款前停下等确认、录屏、网关强制执行规则）在同类中最完整。

结论 2：浏览器方向的共识是「复用用户已登录的真实会话」，同时把登录、付款这类敏感步骤交还给人（opencode-browse）。tencent-browserskill（腾讯，1 万星）把这条路做得最完整：独立可见 Agent 窗口、共享控制、本地配对认证，并与具体 Agent 解耦。pointer、redraft 这类小工具解决的是指代精度和可视化编辑，属于前端开发的辅助，不是通用浏览器 Agent。

结论 3：隔离和上下文成本是 Computer Use 的两大短板，库里已有针对性的工具：windows-terminal 用 QEMU 做隔离，image-context-manager 压缩截图。这两个都很早期（个位数星标），但方向值得跟进。

2026-11-16：poki 发布 0.4.0 Beta（后台任务、不抢前台），星标升到约 1.4 千；其发布帖评论区由作者自荐的 xphoneuse 走同一条「电脑控制真机 + MCP」路线，三系统通用、iPhone 免 Xcode 且工具更全，但极早期，安全护栏未见说明，选型上仍是 pinky（护栏）和 poki（iOS 成熟度）优先。

2026-11-17 补入 n8n-nod：n8n 官方的本机个人助手，自带沙箱电脑、浏览器、审批和 Vault，产品完整度高于大多数「给别的 Agent 当浏览器后端」的库；评测数字为自报，状态仍是 research preview。

2026-11-18 补录 coucou 和 obscura。前者是 Apple 设备上的批准/监视层，不管完整的手机屏幕接管；后者是给 Agent 用的轻量无头浏览引擎，不能把它理解成反爬教程，也不是 Chromium 的完整替代。

2026-11-19 补入 openrocode：把 Computer Use 的指屏幕、护栏和全程留痕搬到仿真机械臂上，是库内第一个这类机器人套件。它仍是 alpha，未查到完整真机适配说明，和浏览器/桌面操控工具不互相替代。

2026-11-21 补入三条不同方向：karpo-browser 把逐步网页动作交给决策模型，和 opencode-browse / tencent-browserskill 的「通用大模型直接点选」不同，基准为自报；pocket-dev 让人用手机接着指挥本机编码 Agent，和 coucou 同属监视/接续层，但提供终端和 Git；phil 是轻量的电脑控安卓实现，护栏完整度仍不如 pinky。

2026-11-22 每日精选补入 replit-amuse：Replit 开源的本机个人助手，核心是可旁观的实时浏览器和发送/付款审批卡，默认只接 OpenAI、不做 MCP。和 n8n-nod、Linger 同属本机助手，但产品范围更窄、安全边界写得更具体；没有公开托管演示。

2026-11-23 每日精选补入 nosis：可换前端的本机个人 Agent 运行时，桌面控制和分档权限写得很细，并一等接入飞书。和 replit-amuse、n8n-nod 同属本机助手，但更像运行时而不是成品助手；当天没有作者原帖，星标也更少。

2026-11-25 每日精选补入评论区发现的 easi-run：自托管真实 Chrome 会话，强调人工接管和会话交接，和 tencent-browserskill（本机已登录浏览器）、moli / obscura（自研无头引擎）不互相替代；许可证是 AGPL-3.0。
## Agent 军团管理

范围：agent-eng/agent-fleet

| 项目 id | 技术路线 | 核心能力 | 成熟度 | 开源 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
| pequalnp | Lean 4 钉死工具链 + 网站任务台，Agent 军团分解命题并由检查器判定 | 只把通过检查的证明记为 checked，外部 Agent 可领题提交 | ★261，2026-11-22 建仓；不声称 P vs NP 已解决 | Apache-2.0 | 要公开、可审计地用 Agent 做形式化数学 |
| t3-code | TS 单仓：本地服务器、Web、Electron 加移动端遥控 | 统一操控本机多种编程 Agent | ★5.4 万 | MIT | 多 Agent 编程控制台 |
| coincide | T3 Code 的原生 macOS 移植（AppKit、SwiftUI 加 Rust） | 并排运行、中途换 Agent | ★14 | MIT | 追求原生性能的 Mac 用户 |
| tastecode | Electron（TS、Swift）加本地编排服务 | 面向创意网页、3D 和动效的多 Agent 工作台 | ★513 | Apache-2.0 | 创意前端 |
| openmausbot | Electron 加本地 harness，提供云桌面、本地 VM、本机三种环境 | 开源版 Grok Bot，带可给 bot 用的虚拟机 | ★2 万 | Apache-2.0 | 自托管个人 Bot |
| open-duet-anil-matcha | Python 后端加 TS 前端，Docker 自托管 | 负责人分派任务，带记忆和审批（现名 Suparagent） | ★7k，2023 年起 | Apache-2.0 | 团队多 Agent |
| openduet-copilotkit | 构建在 CopilotKit OpenBot 上 | Agent 主动推进，人可以随时插手 | ★2k | MIT | 个人事务助理 |
| rerun | TS 单仓加 Supabase，Foreman 编排 | 自动组建团队，可沿用 ChatGPT 或 Claude 订阅 | ★930 | AGPL-3.0 | 自托管的多 Agent 协作 |
| bot-teams | Next.js 加仓库即 CMS（markdown 定义团队） | 一条提示词安装多 bot 团队模板 | ★26 | MIT | 快速搭建 Bot 团队 |
| hypergrok-trading-desk | 插件包：7 个角色、17 个技能、只读工具 | 交易研究台，含人工审批 | ★467 | MIT | 高风险领域的多角色协作样板 |
| relay | 零依赖 Node CLI，加 MCP 和 hooks | 在不同 Agent 之间交接任务和上下文 | ★2 | MIT | 多种 CLI Agent 混用 |
| the-office-agents | Claude Code 插件，three.js 像素办公室 | 把各 Agent 的会话可视化 | ★1 | MIT | 趣味化观察 |
| recalc | Rust 加 Tauri 的本地电子表格，格子里可跑 Agent，经 MCP 协同 | 多 Agent 共享一张表，用公式和测试格验收 | ★68，早期 beta | Apache-2.0 | 评测、审阅和并排调度多个编程 Agent |
| crommacode | 闭源原生桌面（文档自述 Rust、GPUI），钩子观察 CLI，蜂群走 git worktree | 把工具调用演成游戏，并派工蜂并行干活 | 稳定版 0.2.18（官方清单），源码未公开 | 闭源（公开仓只有文档） | 观察并编排已有的编程 CLI |
| agent-ceo | 闭源 SaaS，人和 Agent 共用组织架构（具体栈未公开） | 按角色协作、升级和共用记忆，宣称带 MCP 工具 | light，页面数字为自报 | 闭源 | 公司里要跑多 Agent 组织，而不是本机编码控制台 |
| herdr | 单 Rust 二进制终端复用器，后台 server 加 socket API | 断线不停工、多机统一面板、标出卡住的 Agent | ★50.6k | Apache-2.0 | 远程长跑多个编程 CLI |
| omnigraph | Rust 图数据库，Lance 存储，Git 式分支合并，Cedar 策略 | 多 Agent 共享记忆的版本控制和混合检索 | ★2k | MIT | 多 Agent 共用知识/记忆，需要审查合并 |
| agent-teams-ai | Electron 桌面应用，MCP 接入多家 CLI | 看板式自治 Agent 团队，互发消息互评审 | ★2.5k | AGPL-3.0 | 本机组建可视化的编码 Agent 团队 |
| antigravity-dynamic-workflows | Antigravity 内置技能生成 Python 编排脚本（parallel/pipeline/phase），子 Agent 返回 JSON Schema 结果 | 审批后运行的确定性多 Agent 工作流，可保存复用，可给每个 Agent 开 worktree | light；2026-11-13 上线，效率数字为 Google 自报 | 闭源（Google AI Pro/Ultra） | 批量审查、逐文件修复、审查-修复-复核循环 |
| plannotator | Bun/TS 单仓：浏览器审阅面板 + 10 余种 Agent 插件/hook + Inbox | 批注计划/HTML/diff 并一键回传 Agent，汇总多 Agent 待决事项 | ★1.1 万，v0.28 | MIT/Apache-2.0 | 人在回路审阅多 Agent 产出 |
| tokay | SwiftUI iOS 应用 + RexKit 协议包 + libghostty-vt 终端 + APNs 通知器 | 手机上回答 Agent、批权限提示、开终端，灵动岛显示进度 | 新建，0 星，未上架 | MIT | 离开电脑时照看 Rex 上的编程 Agent（评论区发现） |
| agentes-chat | Bun/Hono/Drizzle/Postgres 服务端 + React Web + Expo 手机 + Tauri 桌面 | 人和 Agent 同在频道协作，路由器分派，预算、审批、Agent 自带电脑和浏览器 | ★1.5k（一周） | AGPL-3.0 + 商业许可 | 团队级自托管「AI 同事」工作区 |
| clawd-on-desk | Electron 桌宠 + 各 Agent hooks + 手机 PWA | 20 多种编程 Agent 状态可视化，权限气泡审批，Telegram/飞书远程批 | ★6.7k | AGPL-3.0（美术另有版权） | 桌面常驻看「谁在等我」 |
| shoal | Node 24 + node-pty/ConPTY 服务端，Vite 前端，Tauri 2 外壳 | Windows 上并排跑 Claude Code/Codex/agy，待验收卡片，换 Agent 交接卡 | ★14，v0.1.10 | MIT | Windows 单机多 CLI 工作台 |
| hf-agent-manager | 私有 HF Docker Space + /data 存储桶，终端与对话阅读器双视图 | 云端并排运行多种 CLI，会话互相通信，跨设备续看 | ★73 | Apache-2.0 | 云端常驻、多设备照看编程 Agent（评论区发现） |
| agentrun | JS/TS 单仓，npm 一键起 server + runner，包住 Claude Code/Codex/OpenCode/pi | 跨运行自我学习（笔记/技能/工作流）、可恢复执行、审批与花费上限 | ★1.1k；案例数字自报 | Apache-2.0 | 重复性 Agent 任务降本、后台持久运行 |
| layerfs | Rust + FUSE，单 SQLite Store，分块去重，Branch/Commit/Layer | 每次工具调用一个完整可写工作区，自动检查点、分支、合并 | ★2.8k，v1.1.0；基准自测 | MIT | 多 Agent 并行改同一仓库的隔离与回滚 |
| bowl | Go + go-fuse，PostgreSQL 18 元数据 + Pebble/.pack 存储，ConnectRPC | 远程 POSIX 虚拟磁盘，零拷贝 Fork/Diff/三路 Merge，单写者栅栏 | ★52，未发布可用版本 | MIT | 云原生 Agent 沙箱工作区（研究阶段） |
| tencent-loopforge | Go 平台 + Docker 沙箱，编排 10 种编码 CLI；可选 Local 模式 | 可视化 SOP（Agent/脚本/人工门）和 Main Bot 聊天交付，带审批收件箱 | ★3169，腾讯，v0.4.0 前后 | MIT（含第三方声明） | 团队要把 AI 编码做成可重复交付流程 |
| autoswarm | 港多 Agent 协作框架，强调打通上下文，附论文 | 让多个 Agent 共享上下文一起干活 | ★2632，研究型 | MIT | 研究跨 Agent 上下文，而不是现成交付平台 |
| duskbot | 本地机器人团队桌面应用，复用已有模型订阅 | 对标 Grok Bot 的长期机器人体验 | ★327；PolyForm 非商用许可 | 非商用许可 | 想把数据放在自己机器上；商用需另谈 |
| anthropic-building-always-on-agents | 官方架构指南，不是开源成品；五个构件：inbox、timers、memory、permissions、outbox | 用短 run 和持久化队列做出常驻体验，收件箱为真相来源 | 2026-11-13 发布 | 指南，无附带仓库 | 要按官方处方设计常驻 Agent，而不是找现成产品 |
| tmux-island | Swift/SwiftUI macOS 灵动岛，只通过 tmux 读状态和跳窗格 | 多 Agent 状态一览，键盘跳转，岛上点选审批选项 | ★2，2026-11-20 发布；仅 Apple silicon | MIT | 在 macOS 的 tmux 里并行跑多个编码 Agent 时盯梢和跳转 |
| eta | 单个 Bun 宿主；默认自研 harness，也可经 OAR/ACP 接入 Claude Code、Codex、OpenCode、pi | 一人指挥常驻小队：任务需确认，记忆是可选 sidecar，会话以宿主用户身份跑 | ★229，v0.4.0；安装包未签名 | MIT（SearXNG 等另有许可） | 想自托管一队可检查的个人 Agent，而不是替换团队 SOP |
| stitch-loop | Google Labs 托管的常驻产品 Agent，接 GitHub 和线上指标，沙箱改代码后开 PR | 按目标持续建议、构建、观察，默认同伴安全/延迟/无障碍循环 | 2026-11-18 宣布，候补中，无源码 | 闭源实验 | 要上线后自动盯产品指标，并能接受排队 |
| grokbot-deskpet | Tauri 桌面宠物 + 加密 ntfy 通道，专看 Grok Bot 状态 | 一眼看出哪个 Bot 在思考、工作或等你 | ★0，macOS，非官方且未签名 | Apache-2.0 | 只想在桌面上盯 Grok Bot，不负责批准操作 |
| linger | TypeScript 本机个人 Agent + 自研 PolyStrata MoE 推理，Cua/Playwright 操控桌面和浏览器 | 本地或已有订阅上跑 Another Me：记忆 wiki、主动提醒、team.md 多 Agent | ★1540，2026-11-19 开源；速度与「接近 Claude」为自报 | Apache-2.0 加托管/品牌附加条款 | 要在自己电脑上跑带本地大模型的个人 Agent 团队 |
| mastra-factory | 薄 TypeScript 模板 + npm 包 @mastra/factory，Postgres，可选 Slack；默认可走 Mastra 平台 | 把 GitHub/Linear/Jira 的 issue 变成可审批的计划、实现和 PR | 模板仓 ★52；238/630 周 PR 数为团队自报 | 声明 Apache-2.0（根目录未见 LICENSE 文件） | 已在用 Mastra、想从看板或 Slack 开软件工厂的团队 |
2026-11-27 每日精选补入 pequalnp：Brilliant 的公开 Agent 军团攻击 P vs NP 相关命题，和 axiom-stacks 形式化 Stacks Project 是同一类「Agent + Lean」，但这里有在线任务台和红队，并且明确问题仍未解决。

| unified-dev | 原生 macOS 26/Swift 6.2 应用，每个任务一个 git worktree；MCP 回桥 | 并排跑 Claude Code/Codex/Grok，互不抢分支，可看 diff 和花费 | 仅 Apple silicon；Cursor/OpenCode 尚无 runner；星标本次未查到 | AGPL-3.0 | 要在 Mac 上给每个 Agent 独立 worktree，而不是共享同一工作区 |
| argo | TypeScript monorepo（React/Electron/Expo/Hono/Postgres），Docker 自托管 | 持久队友：记忆、例程、浏览器/终端/桌面、审批、可委派子 Agent | ★4，beta；也提供托管版；评论区发现 | Apache-2.0 | 要自托管对标 Grok Bot/OpenClaw 的个人/团队助手 |
| pibot | TypeScript/Electron，内核为钉死的 pi，命令走 sandbox-runtime | 具名 Bot 群聊分工、计划确认、沙箱与审批审计 | ★386，开源第二天，仍是 0.0.x | Apache-2.0 | 要在自己电脑上养一支带护栏的 AI 团队 |
| openvorld | 本地优先的像素风小镇 harness，可接 Claude Code/Codex 或兼容接口 | 组队对话、writ 批准文件夹/命令/网站，官网有网页演示 | ★26，早期 | MIT | 要把多 Agent 工作做成看得见的本地演示 |
| loopx | TypeScript 控制面 + SQLite / PostgreSQL 状态层，中立对接多种 CLI | 跨会话保存 Goal / Todo / Gate / Evidence，本地或自托管长程调度 | ★6748；v2.4；基准为自报 | Apache-2.0 | 要可验证、可换宿主的长程 Agent 控制面 |
| superhive | TypeScript pnpm monorepo，Web/桌面 + 本机或云上的房间服务器，对接已登录 CLI | 多人与多 Agent 进同一房间，权限留在 Agent 所在电脑，可用飞书/微信 | ★785，0.1.0；AGPL 对网络提供有互惠要求 | AGPL-3.0-only | 要自托管一个人和多个 CLI Agent 共用的房间 |
| beluga | TypeScript 引擎 + 桌面/手机应用，Claude Agent SDK，hyperdht 点对点 | 每任务一个 worktree，经批准可向朋友电脑上的 Agent 求助 | ★596，Mac/手机 3.8.0；Mac 未公证、Win 未签名 | MIT | 要隔离并行任务，并在人与人的电脑之间协作 |
| specwithcode | Effect-TS monorepo + ACP，桌面/Web/移动端，SpecWeave 把规格写入 git | 并排跑多家 CLI，额度用尽可按规则换提供方继续 | ★6，1.0.412；不转售推理 | MIT | 要在本机把多家订阅连起来，并在撞墙时换线 |
| paradev | TypeScript/Electron 多端控制面，默认每任务一个 git worktree | 并行跑已登录的 Claude Code/Codex 等，带手机端、自建 Linux 主机和自动化 | ★1.6 万，MIT（博客记 2026-11-04 改许可）；当天补了 Linux 下载 | MIT | 要产品化的多端控制面，并且接受 Electron 体量 |
| prism-agent | TypeScript 常驻 Agent，SQLite 单运行时，Slack/Teams，Vercel AI SDK | 目标跨会话推进，heartbeat 与日程，编码可交给 Claude Code/Codex | ★18，2026-11-24 开源，企业向 | Apache-2.0 | 要在公司已治理渠道里放一个可锁定身份的常驻助手 |
| open-agent | FastAPI + Next.js 本机工作流平台，聊天用类型化工具改画布 | n8n 风格节点与版本化回滚，可离线接本地模型 | ★1，体量不小但仍早期；测试数为自报与仓库统计 | MIT | 想在本机用聊天加画布做自动化，并能接受早期项目风险 |

### 分析

这一类有三种形态：编程 Agent 控制台（t3-code、coincide、tastecode，以及后来的 recalc 表格工作台、crommacode 游戏化桌面、herdr 终端复用器、agent-teams-ai 看板式自治团队），管的是本机的 CLI Agent；通用 Bot 平台（openmausbot、open-duet-anil-matcha、openduet-copilotkit、rerun），对标 Grok Bot 这类托管 Bot；团队模板和胶水层（bot-teams、hypergrok-trading-desk、relay、the-office-agents）；面向公司组织的商业平台则有后来见到的 agent-ceo。

结论 1：控制台方向 t3-code 仍然体量最大（既有记录约 5.4 万星），coincide、tastecode 做原生性能和创意场景上的差异化。recalc 把控制台收成一张可公式化验收的表，crommacode 把观察做成游戏并加 worktree 蜂群，但后者暂不开放源码。除 crommacode 外，这类方案大多仍选择驱动本机已登录的 CLI，沿用用户已有的订阅。

结论 2：Grok Bot 开源替代里，openmausbot（2 万星，执行环境最完整）和 open-duet-anil-matcha（7 千星，历史最久）最成熟。rerun 的 Foreman 自动组队最接近「管理者」角色，但采用 AGPL 许可。选型时主要看隔离方式（VM 还是 Docker）、许可证、要不要自带模型 key。若目标是公司组织而不是本机编码控制台，agent-ceo 给出了「人和 Agent 共用组织规则、完成判定要分开」的产品形态，但闭源，页面上的规模数字均为自报，需要自己试用。

结论 3：多 Agent 的瓶颈正从「能不能并行」转向「共享状态和协调」：omnigraph 给共享记忆加上 Git 式分支和合并检查，herdr 把「哪个 Agent 卡住了」做成一等状态。大厂也开始把编排做成脚本：antigravity-dynamic-workflows 让 Agent 生成可审阅的 Python 编排脚本，用确定性控制流代替提示词里的协作约定。「团队即配置」也在出现：bot-teams 用 markdown 定义团队，hypergrok 用角色加技能加审批组合团队，说明多 Agent 的价值正在从运行时转向可复用的组织模板。

2026-11-15 补入：plannotator（1.1 万星）不管调度，只管「人审阅 Agent 产出并把批注回传」，并用 Inbox 汇总多 Agent 待决事项，是控制台方向之外的审阅层；评论区发现的 tokay 把 Rex 上的 Agent 状态搬到 iPhone 通知与灵动岛，与 t3-code 的移动端遥控同方向但更原生、更窄。由此「人在回路」的入口正在从终端扩展到浏览器批注和手机通知。

2026-11-16 补入四项：agentes-chat 把通用 Bot 平台推进到「团队聊天里的 AI 同事」，预算和审批做成一等公民；clawd-on-desk（6.7k 星）与 tokay、herdr 一起说明「谁在等我」的提醒层正分化到桌面、手机和终端；shoal 是 Windows 专用的多 CLI 工作台，加入待验收与交接卡；评论区发现的 hf-agent-manager 把控制台搬到私有 HF Space，补上云端常驻这一形态。

2026-11-16 每周书签补入三项，都落在结论 3「共享状态和协调」上：layerfs 与 bowl 把多 Agent 隔离下沉到文件系统层（前者单机 SQLite、已有 DSH 集成和公开基准；后者服务端集中存储、多节点，但尚未可用），与 omnigraph（共享记忆的分支合并）构成「文件 + 知识」两层底座；agentrun 则在 harness 外层做跨运行学习和可恢复执行，把「Agent 反复摸索同一件事」当成本问题解决，案例数字为自报。

2026-11-17 补入 tencent-loopforge：腾讯把 SOP、沙箱和人工审批做成自托管交付平台，也可 Local 装进现有助手；和 shoal / hf-agent-manager 的并排终端、plannotator 的审阅层形成「编排 / 工作台 / 批注」分工。默认 Docker socket 安装只适合受信任团队。

2026-11-18 补录 AutoSwarm（研究型上下文打通）、dusk bot（本地机器人团队，非商用许可，和完全开源的 OpenMausBot 不是同一类许可）和 Eta（更早期的一体运行时）。 同日晚间按源码补读 Eta：它默认自研循环，但也可以把会话交给 Claude Code 等；长期记忆并不是 README 所说的「一份 SQLite」，而是可选的 PostgreSQL sidecar。它适合当可检查的个人常驻小队，不能替代 LoopForge 的沙箱 SOP，也不替代 AgentRun 的可恢复 CLI 编排。 2026-11-18 收录 Anthropic 官方指南 Building always-on agents（不是开源成品）。它把常驻理解成睡眠-唤醒的短 run，并用收件箱作为崩溃后可重试的真相来源；按这篇指南看，Eta 最缺的是可重试的事件队列，而不是一个永不退出的进程。

2026-11-19 补入 stitch-loop 和 grokbot-deskpet。Stitch Loop 是大厂把「上线后按指标持续改产品」做成候补产品，可与 LoopForge 的开源自托管 SOP、Anthropic 常驻指南对照，但目前看不到实现，也无法验证沙箱是否复现生产故障。Desk Pet 把「谁在等我」做成 Grok Bot 的桌面宠物，和 the-office-agents、coucou、clawd-on-desk 同属观察层，但不批准工具调用，且默认走可替换的 ntfy 邮箱。

2026-11-20 补入 Linger 和 Mastra Factory。Linger 把本机大模型推理、记忆、主动行动和桌面操控收成一支个人 Agent 团队，和 Eta、n8n-nod、OpenMausBot 同属「跑在自己电脑上」，差异是自研 MoE 推理和夜间规则自更新；速度和对标 Claude 的说法均为自报，许可也限制对外托管。Factory 则和 LoopForge、Stitch Loop 一样做 issue-to-PR 的交付工厂，但工作流绑在 Mastra 自己的看板和 Slack 上，公开模板仓很薄，引擎在 npm 包里。

2026-11-21 补入 unified-dev 和评论区发现的 Argo。前者把 worktree 隔离做成原生 macOS 控制台的核心，可与 t3-code、coincide 对照，但只支持 macOS 26 的 Apple silicon。Argo 是带多端客户端的自托管 Bot 平台，更接近 linger / agentes-chat / OpenMausBot 这一侧，不过仍是 beta、星标很少。

2026-11-22 每日精选补入 tmux-island：只通过 tmux 监视和跳转多个编码 Agent 的 macOS 灵动岛，和 coucou（岛上批准，不绑定 tmux）、herdr（跨机器运行时复用器）对照。工程完整但刚刚发布，仅 Apple silicon。

2026-11-23 每日精选补入 pibot 和 openvorld。Pi Bot 是开源次日即提供安装包的本机 AI 团队，重点是群聊协调、沙箱和审批，而不是调度已有 Claude Code/Codex CLI（那是 T3 Code 一侧）。OpenVorld 把同一问题做成像素风小镇和 writ 批准，有可玩网页演示，但星标很少、仍早期。

2026-11-23 每周书签补入 loopx：开源的长程控制面，把目标、验收、门禁和证据做成可跨会话、跨 Codex/Claude Code 等宿主保存的状态，可从本机 SQLite 起步或自托管 PostgreSQL。和 tencent-loopforge 的 Docker SOP、shoal / hf-agent-manager 的并排会话、stitch-loop 的托管持续优化形成对照。LHTB 等基准数字为项目自报。

2026-11-24 每日精选补入 SuperHive、Beluga 和 SpecWithCode。SuperHive 把控制台做成可自托管的共享房间，人可以从浏览器或飞书/微信加入，AGPL 对对外提供网络服务有要求；Beluga 与 unified-dev 一样用 worktree 隔离任务，但跨平台，并且能在批准后让 Agent 去朋友的电脑上办事；SpecWithCode 星标还很少，但把「额度用尽换提供方继续」和 git 里的规格/证据做成了差异点。t3-code 仍是体量最大的本机控制面。

2026-11-25 每日精选补入 paradev、prism-agent 和 open-agent。Paradev 是体量最大的新入库控制面之一（查询时约 1.6 万星），与 t3-code、unified-dev、beluga、superhive 对照更完整（多端、worktree、自建主机），但 MIT 变更的博客日期是 2026-11-04，当天主要是再次宣布并加上 Linux 下载。Prism Agent 是 Mirantis 的企业向常驻助手，渠道限于 Web/终端/Slack/Teams，更靠近 argo / linger 这一侧而不是 CLI 控制台；刚开源，星标很少。Open-Agent 是本机 n8n 风格工作流加聊天控制面，仓库和测试量不小，但几乎还没有社区使用，宣传文档可能超前。t3-code 仍是本机多 CLI 控制面的体量基准。
## 大模型工具

范围：category=llm-tools

| 项目 id | 技术路线 | 核心能力 | 成熟度 | 开源 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
| ming-image-0-2-design | 6B DiT 设计文生图，与 0.1 共用推理代码，MIT 权重 | UI/海报/主图/空间效果图，可读文字和构图（榜单为自报） | ★240（推理仓）；0.2 权重 2026-11-26 发布，推荐 80GB 显存 | MIT | 要开源权重做设计类出图 |
| lingbot-navi | 空间记忆编码器 + 视觉语言解码器 + flow matching 轨迹解码，Apache-2.0 | 跨任务 3D 记忆、语言找物和路径规划 | ★5，2026-11-26 首发；评测为 36 回合子集自报 | Apache-2.0 | 要研究「记住场景再导航」的具身模型 |
| cloudflare-search-for-agents | Cloudflare 网络侧开关，基于 AI Search，暴露 /.well-known/search | 自动索引站点并向 Agent 返回 Markdown 检索结果 | light，商业功能；2026-12-01 起计费 | 闭源 | 要给自己的网站提供官方 Agent 搜索入口 |
| inference-proofs | 公开规则下运行各证明系统，对照 vLLM 无证明推理 | 比较证明成本与命题范围，不跨模型排名 | ★27，Level 1 v1.0 | 代码 Apache-2.0，数据 CC BY 4.0 | 要比较可验证推理方案 |
| posts-design-mcp | 托管 MCP + 本地 remake 等技能，连人工精选品牌发布图库 | 按真实作品做方向拆解并在本机重做 | ★26；部分能力需 credits/Pro | MIT（技能/MCP 用法） | 要做发布向视觉并需要真实参考 |
| mistral-large-4 | 1T 参数原生多模态，开放权重 | 编程、防御性网络安全（官方说法） | light | 开放权重 | 需要私有部署大模型 |
| longcat-2-5 | 1.6T 参数，用国产芯片训练 | 长程 Agent 任务 | light | 未查到 | 国产算力生态 |
| ling-3-2-flash | 原生多模态 MoE，通过 API 提供 | 长上下文、文档和网页理解 | light | API | 多模态 API 选型 |
| hydrogen-1-0 | 基于 GLM-5.3 后训练的科学模型 | 化学、材料、生命科学 | light | 开放权重 | 科研垂类 |
| twil-8b | 约 9B 开放权重推理模型 | 本地推理、工具调用 | light | 开放权重 | 本地小模型 |
| sensenova-loop-9b-preview | Looped Transformer 加 mHC，权重复用 | 约 9B 参数、等效 14.6B 深度，多模态 | ★106，预览版 | Apache-2.0 | 研究参数效率 |
| kimi-k3-in-c | C99 推理引擎（176KB），MXFP4、MoE | 约 8GB 内存跑完整 Kimi K3（自报，非常慢） | ★1.2 万 | Apache-2.0 | 极限低资源推理 |
| ferrite | 全 Rust，kernel 编译成 PTX，两台 DGX Spark 做 TP2 | Qwen3.8-27B 高速推理（自报 273 tok/s） | ★0，刚发布 | Apache-2.0 | Rust GPU 编程参考 |
| mlx-serve | Zig 后端加 MLX，兼容 OpenAI、Anthropic、Ollama | Mac 本地一站式 AI 服务（含视频） | ★2.4k | NOASSERTION | Mac 本地推理 |
| latent-sparse-attention | PyTorch 加 Triton、CuTeDSL，在 SGLang 提供服务 | 超长上下文稀疏注意力加速（自报 22.7 倍） | ★452 | Apache-2.0 | 百万到千万级上下文 |
| xerj-query-1 | Rust 搜索引擎加查询编译模型 | 把问题编译成程序在事实库上执行，可拒答 | ★1.9 万 | Apache-2.0 | 本地私有数据问答 |
| nesformer | 把 6502 CPU 编译进 Qwen 权重 | 模型本身就能确定性地运行 NES 游戏 | ★296 | NOASSERTION | 「权重即程序」研究 |
| 权重空间编程-mit | 前沿 LLM 不用梯度直接读写权重 | 改 0.016% 权重修复复读循环（自报 MATH-500 从 7.9% 到 48.1%） | 研究博客加 HF 检查点 | HF 公开 | 可解释性和模型修复 |
| oumi-faie | 端到端训练平台（SFT、DPO、GRPO、LoRA） | 用自然语言描述任务，自动造数据并训出小模型 | ★9.4k，2024 年起 | Apache-2.0 | 定制专用小模型 |
| rsi-inference-bench | 在真实 vLLM、SGLang 和 GPU 上评测 | Agent 能否给推理栈做 Day-0 支持、优化和修复 | ★144，Apple | Apple 许可 | 评测系统工程 Agent |
| science-s-last-exam | Harbor 加隐藏参考答案 | 端到端科研能力（113 个任务） | ★21 | Apache-2.0 | 评测科研 Agent |
| vybbench | 像素比对加 Gemini 评判 | 字体、颜色、编辑保真度 | ★5，有利益相关 | Apache-2.0 | 图像模型选型 |
| deeptutor | 多 Agent 加 RAG，Web、桌面和 CLI | 输入学习资料后讲解、出测验、追踪进度 | ★5.8 万，港大 | Apache-2.0 | 自学 |
| janestreet-agent-skills | 单个技能 socratic-tutor | 苏格拉底式追问辅导 | ★2.5k | MIT | 学习辅导 |
| teachable-figures | 技能加渲染工具包加 Playwright 校验 | 可交互的 2D、3D 教学实验图 | ★303 | NOASSERTION | 课程制作 |
| norman-skill | 科研技能集 | 论文精读、科研制图、论文转 PPT | ★782 | 未声明 | 研究生科研 |
| axiom-stacks | Lean 4 加 Mathlib，由 AI Agent 写形式化 | 把 Stacks Project 形式化 | ★131 | Apache-2.0 | AI 数学 |
| archimedes-reynolds | Anthropic 工具调用循环加 OpenFOAM | Agent 做 CFD 工程设计 | ★115 | MIT | 工程仿真 |
| huashu-motion | 技能加 GSAP 运行时加 studio 编辑器 | 代码动效视频，可以指着改 | ★2.6k | MIT | 产品动效视频 |
| motion-graphics-music-video-skill | Swift、Metal 渲染加音频分析 | 由音乐驱动动态视觉，不用生成模型 | ★50 | MIT | 音乐可视化 |
| simcraft-perspective-illusion | 24 个技能之一，Playwright 加 ffmpeg | 透视错觉循环和视频拆解 | ★281 | MIT | 短视频特效 |
| claude-make-an-anime | Claude Code 插件，Ruby 工具链加 Fal | 从故事到动画、配音、字幕 | ★16 | MIT | AI 动画短片 |
| nomi | Electron 视频工作台加 MCP，接多家视频模型 | 分镜和粗剪，Agent 可以指挥 | ★638 | AGPL-3.0 | AI 视频制作 |
| jianying-ai-mcp | pyJianYingDraft 加 MCP | 读写剪映草稿 | ★18 | 未声明 | 剪映用户自动化 |
| ai-character-swap | 技能加 Seedance API | 短视频角色替换 | ★245，有肖像和 IP 风险 | 未声明 | 短视频二创（注意合规） |
| gif-factory | 技能加 Python | 按风格批量做 GIF | ★1k，有 IP 风险 | MIT | 社媒素材 |
| hairdeck | Card VAE 加集合扩散 Transformer | 单张图生成可绑定的 3D 发片 | ★1k，学术 | Apache-2.0 | 游戏和数字人美术 |
| lieflat-charts | HTML、SVG 模板技能 | 统一风格的数据可视化 | ★6.8k | NOASSERTION | 报告和 PPT 图表 |
| astryx | React 19 加 StyleX 设计系统 | 可定制的组件和主题 | ★2.1 万，Meta | MIT | Agent 按规范生成界面 |
| opendesigner | 插件加单文件 Python 引擎 | 设计审计和设计系统构建 | ★124 | MIT | 设计规范落地 |
| social-media-skills | 共享上下文的技能集 | 社媒策略、创作、分析 | ★643 | MIT | 海外社媒运营 |
| wewrite | 技能加 Python CLI | 公众号从热点到发布的全流程 | ★3.7k | MIT | 中文公众号 |
| trendradar | Python，litellm 加 MCP | 多平台热点聚合和 AI 简报 | ★6.4 万 | GPL-3.0 | 舆情和选题监控 |
| zhihu-mcp | Python MCP，基于逆向接口 | 知乎搜索、直答和监控 | ★4，有合规风险 | 未声明 | 中文知识检索 |
| cicada-知了 | 四端原生客户端，在本机做语音识别 | 会议纪要和同声传译 | ★2.1k | Apache-2.0 | 会议记录 |
| hy-simulmt | 腾讯混元流式同传模型 | 中英语音到语音同传，延迟约 3 秒（自报） | ★266 | NOASSERTION | 实时翻译 |
| argument-cat | QVAC SDK 在端侧串联 LLM、ASR 和 TTS | 安卓离线语音对话 | ★0 | MIT | 端侧多模态样例 |
| phonic-1-语音演示 | SwiftUI 演示合集 | iOS 语音接入示例 | light | 未声明 | 参考代码 |
| frontier-harness-eval | 固定任务和环境，只换 harness 做对照赛 | 比较通过率、费用和耗时；v1.1 正在扩展矩阵 | ★356；README 仍为 v1.0 | 未登记许可证 | 选编程 Agent harness 时做对照 |
| lieflat-less-ai-tone | 检测脚本加 Agent 技能，先报告再改写 | 去中文写作里的 AI 痕迹并复测 | ★7406 | CC BY-NC 4.0 | 成稿减痕（非商用） |
| lieflat-gongwen | 语料统计得到的公文参数和自检脚本 | 七类公文的可验收写作流程 | ★2491 | PolyForm Noncommercial | 公文体裁写作（非商用） |
| writing-dna-skill | 从语料蒸馏可再安装的风格技能 | 保存并复用某一种笔法 | ★3121 | PolyForm Noncommercial | 个人写作风格资产（非商用） |
| lieflat-diagrams | 示意图模板加导出脚本 | 文档称 35 套模板，可出 HTML/PNG/SVG | ★20，较早 | PolyForm Noncommercial | Agent 出结构图（非商用） |
| lieflat-code-video | 代码驱动镜头的起步项目 | 产品发布类短片的镜头和转场 | ★37，预览 | PolyForm Noncommercial（非 OSI 开源） | 学做发布片（非商用） |
| math-to-manim | Python 工具链调用 Manim 和多种 Agent | 从题目生成数学动画影片 | ★2857 | MIT | 数学可视化教学 |
| tracetrial-bench | Docker 实跑加轨迹证据，任务成功和 harness 合规分开打分 | 95 题、4 个 harness 的可靠性与失败归因基准 | ★28，有论文和排行榜 | MIT | 判断失败该记在模型头上还是 harness 头上 |
| agent-initiative-benchmark | 合成公司 PageMantle（11 个模拟服务，Parquet+DuckDB/SQLite），两名盲评 LLM 打分 | 测主动型 Agent 何时出手、发给谁、何时沉默，并报告成本和时延 | ★1（新公开），仓库含 8 个示例任务；分数自报 | Apache-2.0 | 为值守式工作 Agent 选模型 |
| llama-cpp | C/C++ 加 ggml 可插拔硬件后端，GGUF 量化 | 跨硬件本地推理，v1.0.0 起公共 C API 语义化版本 | ★13.5 万，3.5 年 | MIT | 本地/端侧推理的通用底座 |
| edge0 | latent-MoE 开放权重（145B/120B，Q3_K/NVFP4）+ SSD 流式权重、预测式路由的推理栈 | 单张 24GB 级 NVIDIA 卡本地跑 100B 级编程模型 | ★1.1 万；基准和速度自报，Mac 版引擎未发布 | Apache-2.0 | 离线本地编程 Agent |
| claude-obsidian | Claude Code 插件：15 个技能、3 个只读 Agent、Python 事务层 | 资料入库→带出处的链接笔记与知识图谱，问答、健康检查 | ★1.6 万，v3.0.1 | MIT | 个人/团队 LLM Wiki |
| ingar30-reviewer | Python 流水线，Codex 或 Claude Code 后端，24 个审稿模板 | 本地确定性 PDF 解析后多审稿人并行评审，编辑汇总报告 | ★262 | MIT | 经济学论文投稿前自查 |
| mirobody | Python + PostgreSQL + Docker，离线 LOINC/UCUM 标准化引擎 + MCP 服务器 | 化验单/可穿戴/基因数据统一标准化，回答逐数溯源 | ★1.5k，PyPI 发布 | Apache-2.0 | 自托管个人健康记录给 Agent 查询 |
| rea-video | Python CLI + Agent 技能，ffmpeg 离线分析 + 可选视频模型 | 逐镜头判定实拍/AI/代码并给复刻法，输出报告与分层 VIDEO.md | ★9.2k | Apache-2.0 | 拆解爆款视频、做复刻方案 |
| hyperframes | TS/Bun 框架，可寻址动画的 HTML 确定性渲染为 MP4，多 Agent 插件 | 写 HTML 出视频，约 450 个组件，Remotion 等迁移 | ★8.5 万，HeyGen 出品 | Apache-2.0（Pro 另付费） | Agent 批量做宣传片、解说、动态字幕 |
| yogurt | 桌面应用，whisper.cpp + llama.cpp 本地模型，只读本地 MCP | 不进会议的本地录音转写、纪要、跨会议问答 | ★1.7k | MIT | 注重隐私的会议纪要 |
| weight-space-index | Python + Rust SIMD 内核，直接读 .safetensors，带 MCP | 静态盲读权重编辑、外科式改写、跨模型神经元移植 | 新建，0 星；基准全为自报 | Apache-2.0 | 研究权重空间编程与可解释性（评论区发现） |
| gemini-4-hydrogen | 闭源，1M 上下文，四档思考强度 | Gemini 4 快速档，面向编程和 Agent 工作流 | light；基准多为 Google 自报，AA 指数 51 为第三方 | 闭源 | 需要速度与成本平衡的 Agent 主力模型 |
| paper-orchestra | Python 多 Agent 流水线（大纲/文献/分节/润色/绘图）+ 会议 LaTeX 模板 | 把想法和实验记录写成投稿级稿件，可选出图 | ★3025，Google Cloud AI Research；数据集未随仓发布 | Apache-2.0 | 学术稿件第一版，不能替代真正研究 |
| gmclip | Rust + Tauri + SolidJS，OS 编解码，本地 Parakeet 转写，内置 MCP | 按词剪长录像，一份素材出竖屏和横屏，人与 Agent 共用命令 | 新建，★1，仅 macOS Apple silicon 预发布 | Apache-2.0 或 MIT | 本机把口播/录像剪成 Shorts，并让 Agent 协助 |
| stick-scene | Agent 技能，提示词生成火柴人讲解动画 | 把概念画成短演示 | ★324，有演示页 | MIT | 快速做解释型小动画 |
| last30days-skill | Python 研究技能，并行检索社交/视频/论坛/预测市场等并汇总 | 近 30 天舆论简报，可装进 50 多种 Agent 宿主 | ★7.2 万；部分来源需自备密钥 | MIT | 开会或跟进话题前，要一份带引用的近期舆论摘要 |
| inference-optimisation-skill | 对本机推理栈做爬山式调参的技能 | 覆盖解码、推测解码、KV、TTFT 等 | ★945；收益数字为发帖自报 | MIT | 本地部署觉得慢、想让 Agent 调参 |
| scarlettkc-2-0 | Hugging Face 权重及 GGUF | 本地聊天和写代码（用户反馈为他评） | light，无独立评测 | 以模型卡为准 | 仅作来源记录，不做排名 |
| earshot | 本地 CPU 音频工具，让 Agent 听、评并用代码做声 | v0.2 可把录音转成代码 | ★5108 | MIT | 给编码 Agent 补上听觉和可复现声音 |
| cinetic | 技能驱动的代码化发布片和动效，声音也可代码生成 | 把宣传片变成可改的代码时间轴 | ★1274 | MIT | 要可版本管理的动效，而不是一次渲染 |
| harness2 | Google Research 递归改进 Agent 套件，不改模型权重 | Propose–Probe–Compose，可无标准答案 | ★2.4 万，研究框架 | Apache-2.0 | 研究如何改进整个 harness |
| edulab | 教育技能 + sympy 内核，出交互讲题页 | 立体几何、解析几何等，可从图片出题 | ★1812；与站点 WeduLab 不是同一项目 | Apache-2.0 | 要把单题做成可验证的交互课页 |
| topview-3d-builder | 在对话里搭可编辑 3D 场景再导出视频 | 先导戏、再出片 | ★285 | Apache-2.0 | 想先有可改分镜，再生成视频 |
| hand-drawn-storybook-animation-skill | 手绘绘本风动画技能，配合图文教程 | 降低绘本短片门槛 | ★131；许可证未声明 | 未声明 | 做手绘故事动画 |
| genie-4 | DeepMind 世界模型，集成在 Project Genie；实时改环境并带原生音频 | 走进生成世界并用文本修改，可发布到画廊再混 | 2026-11-18 上线，仅 Ultra（Pro 可候补），无源码 | 闭源 | 要体验可走进并实时修改的世界 |
| hy-nomas | 分段自回归 MMDiT + Qwen 文本编码器 + 相机条件，开源权重 | 按视频片段用文本和相机轨迹续写同一世界 | ★586，可单卡量化推理；标准配置偏多卡 | Apache-2.0 | 要自托管或对照闭源世界模型 |
| product-demo-agent-toolkit | TypeScript 工具包 + 本地 Studio，驱动你已有的编程 Agent 录真实产品 | 按人的节奏走流程并配旁白，可在不重拍的情况下改参数 | ★15，新建 | MIT | 给客户拍真实产品操作演示 |
| easyclip | 本机 ffmpeg + Claude 技能/MCP，模型只看很短的摘要表 | 从链接或文件剪竖屏 Shorts，带政策检查；Pro 另付费 | ★2，评论区发现；免费版有限额 | MIT（免费版） | 用 Claude 从长录像/直播切 Shorts |
2026-11-27 每日精选补入 ming-image-0-2-design、lingbot-navi、cloudflare-search-for-agents、inference-proofs 和 posts-design-mcp。前两者是蚂蚁系的开源模型（设计出图与带空间记忆的导航）；Cloudflare 把站内 Agent 搜索做成托管开关；Inference Proofs 比较的是可验证推理成本而不是智能；posts.design 把真实品牌发布图库接到 Agent 技能上。

| inkling-2-mini | 26.4B looped MoE，中间 12 层循环 3 次，NVFP4/MXFP8，约 20GB | 开放权重本地多模态模型，官方强调 agentic coding 和少写思维链 | 2026-11-20 发布；多数基准为官方自报；AA Index 20.1 | Apache-2.0 | 要在笔记本上跑开放权重编程/Agent 模型 |
| daisyrose-27b | 基于 Qwen3.8-27B，只做 RL、无 SFT/蒸馏（自述），Apache-2.0 权重 | 长程 agent 任务微调的即插即用替代权重 | Terminal Bench 4.1 等为官方自测；训练代码未查到 | Apache-2.0 | 已在用 Qwen3.8-27B 栈、想换一版 RL 过的权重 |
| stickman-video-director | Muse 用的 SKILL.md + 参考契约，基于 kaomei 上游（MIT） | 分场生成、配音、代码合成 BGM、ffmpeg 拼接验收返修 | 当天适配发布，★20；绑定 Muse 工作流 | MIT | 要让 Muse 按规范产出火柴人故事短片 |
| lingsante-3-1-flash | Hybrid-linear MoE，560B 总参 / 25B 激活，1M 上下文，MIT 权重 | 医疗推理、长程工作流和职业行为对齐（基准为官方自报） | light；需多卡高端 GPU；刚发布 | MIT 权重 | 要自托管的专业医疗文本模型 |
| lingsante-3-1-air-vl | 原生多模态 MoE，124B / 5.5B 激活，256K 上下文 | 影像报告、健康评估、检索和医疗 GUI（需外部环境） | light；官方分数本次未读到 | MIT 权重 | 要开源权重的医学影像与报告模型 |
| pan2 | GLP：LLM 写结构化世界状态 + 29B MMDiT + Wan 2.2 VAE | 按文本动作模拟最长约 20 秒视频后果 | ★107，HF 342 赞；本地推理很重 | Apache-2.0 | 要开放权重做动作后果推演的世界模型 |
| tunelm | LFM3-1.7B + LoRA SFT + GRPO，输出可执行 Strudel | 把音乐描述变成可在浏览器里播放和编辑的乐谱代码 | ★0；有在线演示和 HF 权重；评测为自报 | 文档自称 AGPL-3.0-or-later | 要「描述→可编辑乐曲代码」的小模型 |
| tufazip | 163M Transformer + 算术编码，压缩时在线学习 | enwik9 无损压到含解码器约 105.39 MB（自报） | 研究提交；双 B200、压缩/解压各约一周 | MIT | 研究「预测即压缩」，不是日常 zip |
| glm-5-4 | 约 750B 底座上 28 层循环 2 次的 Loop Transformer，1M 上下文 | 编程套餐旗舰，官方定位 Generalized Coding（视频/游戏/CAD 等） | light，闭源服务；权重和 API 尚未开放；数字为官方自报 | 未开放权重 | 要在 Claude Code 等工具里试用智谱循环旗舰，且能接受暂无权重 |

### 分析

可以分成 7 组：模型（表中前几行）、推理和效率（kimi-k3-in-c、ferrite、mlx-serve、latent-sparse-attention、xerj-query-1）、权重和训练（nesformer、权重空间编程-mit、oumi-faie）、评测（rsi-inference-bench、science-s-last-exam、vybbench）、学习和科研（deeptutor 到 archimedes-reynolds）、内容创作（视频、动效、设计、写作），以及语音（cicada-知了、hy-simulmt、argument-cat、phonic-1）。

结论 1：模型组全部是 light 分析，因为只有官方博客或 API，没有可验证的代码。开放权重小模型（twil-8b、sensenova-loop-9b-preview）适合本地实验；大模型（mistral-large-4、longcat-2-5）的价值更多在于部署选项。基准数据都是厂商自报。

结论 2：最有技术含量的是「权重即程序」这条新路线：nesformer 用编译器写权重，权重空间编程-mit 让 LLM 推理后改权重，两者方向相反、互相补充。推理效率方向的 kimi-k3-in-c（极限省内存）、ferrite（全 Rust）、latent-sparse-attention（长上下文）都还以自报数据为主，生产可用性需要自己验证。

结论 3：内容创作类是数量最多的一组，而且几乎都以技能或 MCP 的形式交付，说明「LLM 加确定性工具链（ffmpeg、Playwright、Metal、GSAP、Manim）」是目前做可控内容生产的主流方式。lieflat 的写作与可视化技能（去 AI 味、公文、风格蒸馏、示意图、代码短片）把「先测量再改、先确认再写」写进了流程，但多用非商用许可。math-to-manim 把数学影片做成可重复跑的开源工具链。推理底座方面，llama-cpp 发布 v1.0.0 给出 API 稳定承诺，edge0 则用 latent-MoE 加流式权重把 100B 级开放权重模型压到单卡（数据自报）。评测方面，agent-initiative-benchmark 首次把「该不该说话、发给谁」计分，与只比 harness 的 frontier-harness-eval 互补；frontier-harness-eval 补上了「只换 harness、不换模型」的公开对照；tracetrial-bench 则进一步把任务通过和 harness 轨迹是否可靠拆开计分，两者不宜直接比百分数。其中涉及他人肖像和 IP 的 ai-character-swap、gif-factory，以及依赖逆向接口的 zhihu-mcp，存在合规风险。

2026-11-15 补入的 mirobody 是库内第一个健康数据项目：核心是离线 LOINC/UCUM 标准化与逐数溯源，再通过 MCP 给 Agent 用，延续了「LLM + 确定性工具链」的结论。

2026-11-16 补入四项：rea-video（拆解视频）与 hyperframes（HTML 渲染视频，8.5 万星）构成内容创作组里「拆解→重做」的两端，继续印证「LLM + 确定性工具链」结论；yogurt 是全本地会议纪要，可与 cicada-知了 对照；评论区发现的 weight-space-index 把 权重空间编程-mit 的交互式分析做成静态工具，但数字全部自报，待复现。

2026-11-16 补入 gemini-4-hydrogen：与模型组其他条目一样只能 light；值得注意的是第三方 Artificial Analysis 指数（51）已高于同家族的 Argon，但单任务成本也高于同档对手，选型要看任务是否吃推理深度。

2026-11-17 补入两项：paper-orchestra 是学术写作的完整多 Agent 流水线，和写作风格技能、ingar30-reviewer（审稿）互补；gmclip 把本地剪辑做成人和 Agent 共用的命令表，继续印证内容创作组「LLM + 确定性工具链」的结论，不过目前只支持 Mac 预发布。

2026-11-18 补录里最值得看的是 Harness² 和 earshot：前者是改进整个 Agent 套件的研究框架，后者给编码 Agent 补上本地听觉和可复现声音。Cinetic、stick-scene 和手绘绘本技能继续扩展「用技能做视频/动画」；edulab 是可验证的讲题技能，不要和站点 WeduLab 混为一谈。inference-optimisation-skill 的收益数字为发帖自报。

2026-11-19 补入库内第一对交互世界生成对照：genie-4 是闭源产品，强调走进世界、实时改环境和原生音频，但只有 Ultra（及 Pro 候补）能用；评论区发现的 hy-nomas 提供开源实现和权重，用文本和相机按片段续写视频，标准推理偏多卡。两者都还没有被第三方系统评过长期一致性，官方也承认世界保持仍是研究问题。

2026-11-20 补入两项内容创作工具，继续印证「LLM 加确定性工具链」：product-demo-agent-toolkit 录的是真实产品界面，和 hyperframes / lieflat-code-video 的代码生成画面不同；easyclip 与 gmclip 一样从长视频剪短片，但走 Claude 技能/MCP，并把人脸布局、字幕等放进付费档。

2026-11-21 补入两款开放权重模型（均为 light，因没有训练源码）和一项 Muse 视频技能。Inkling 2 Mini 用 looped MoE 做可本机运行的编程模型，AA Index 20.1 为第三方指数，其余多数基准为官方自报；DaisyRose-27B 则在 Qwen3.8-27B 上只做 RL（自述）。stickman-video-director 继续内容创作组「技能 + ffmpeg 等确定性工具」的路线，但绑定 Muse。

2026-11-22 每日精选补入 last30days：星标很高的跨平台近 30 天舆论研究技能，补上库内此前缺少的「搜人正在说什么」这一层；完整来源往往要自备密钥或登录，当天是趋势曝光而不是首次发布。

2026-11-23 每日精选补入两项蚂蚁医疗开源权重和 PAN 2。LingSante-3.1-flash / air-VL 补上库内此前缺少的专业医疗生成模型，基准多为官方自报，且明确不是医疗器械；flash 偏大规模文本，air-VL 偏影像和 GUI。PAN 2 把开放权重世界模型从 Hy-Nomas 的「按轨迹续写」扩展到「先模拟动作后果」，可与闭源的 Genie 4 对照，但本地推理很重，当天热门帖是第三方演示而非官方首发。

2026-11-23 每周书签补入 tunelm 和 tufazip。TuneLM 把自然语言音乐描述变成可执行的 Strudel 代码，补上库内「代码做声音」里缺的专用微调模型，训练和听感数字为自报。tufazip 是以 Transformer 为唯一预测器的无损文本压缩研究记录，压缩率可核对，但耗时和硬件决定了它不是实用工具。
2026-11-24 每日精选补入 GLM-5.4：智谱把 Loop Transformer 做成约 750B 的旗舰编程模型，和 inkling-2-mini 这类可本机跑的小循环模型不在同一档；当天只对 Coding Plan 等产品开放，权重和 API 尚未放出，对标 2T–3T 与速度数字均为官方自报，官方也承认容易陷入过长思考。

## 其他（未做对比）

`other` 类是教育站、效率工具、内容聚合等杂项，彼此关联很弱，所以不做整体对比；每个项目的 `analysis.comparison` 里有点对点的参照。其中可以对照着看的有：

- 教育交互：cn-math-taxonomy（知识图谱加诊断）、wrong-notebook（错题闭环）、wedulab、edulab 是另一项目（开源讲题技能，不要和 WeduLab 站点搞混）、atlas-of-physics、protocol-explorer、3d-periodic-table、江山地图、cs329z（斯坦福 Agent 工程公开课）、magic-english-buddy（儿童英语阅读冒险）、xiaoai-doubao（把小爱音箱改成英语口语玩伴，有刷机和云端语音风险）、learn-arduino（入门站，本次页面 403）、square-circle-perceptron（感知机手绘实验）
- 知识聚合：hacker-papers、hackerbooks、lex-fridman-中文学习站、xnews（海外长文中文改写站）、x-article-hub（人工挑选的 X 长文归档）、musk-daily（马斯克动态日报）、elon-musk-cn（马斯克访谈中文精读与跳转）、what-new-ai-in-x（按模型与产品切的 X 合集档案）、lastbook（离线生存知识库）
- 算法可视化：astar-visualizer（Antigravity 生成的 C++ A* 寻路可视化，评论区发现）
- 前端/桌面组件：gpui-kit（Rust + GPUI 桌面框架，2 万星）、islandcn（React 灵动岛组件）、mdxcn（MDX 文档组件）、cockpit-ui（九十年代机甲座舱风 Web Component，含 Agent 全息状态）、rubber-hose-ui（同一作者的橡皮管卡通控件）、pinball-ui（同一作者的弹球机风零依赖控件，含技能）、cui（零依赖 C99 UI，附 cui-rs）、nsgo（Go + 各平台原生控件，0.1.0）
- 画布与设计：dessn（闭源，自研 Rust HTML 渲染器的设计画布）、gpucanvas（开源 WebGPU 无限画布，评论区发现）、isoui 与 colorfigures（April Zhu 的两套 UI 插画语言）、ink-studio（像素风高斯溅射工具包）
- 卫星可视化：watched-earth（某地本周被哪些卫星拍到）、azmth（实时卫星 3D 地球，评论区发现）
- 地图与三维地理：reearth-visualizer（可分享的 WebGIS 故事）、3d-tiles-renderer-js（3D Tiles 渲染库，有火星示例）
- 素材与演示合集：3dgarden（免费网页优化 GLB）、phc-pixel-heat-city（制作中的等距像素城市包）、waggles（three.js 演示合集）
- 效率工具：duodesk、theysay、quairone、terminus-notes、gr8r-studio、wowtype（Linux 拼音输入法）、mole（Mac/PC 清理 CLI，7.5 万星）、cassotis-ime（跨平台开源拼音输入法「言泉」）、harper（离线英文语法检查）、phonebox（安卓旧机当桌面副屏）、kiri（Rust 容器运行时，Docker API 兼容）、jiff（Rust 1.0 日期时间库）、bootvine（Linux 启动进度树）
- 本地笔记：quiet-md（Rust + GPUI 原生笔记，文件就是本地文件夹，可导入 Obsidian）
- 纯代码短片：aero-scarborough-fair（零依赖歌声物理建模 + Canvas 水彩短片）
