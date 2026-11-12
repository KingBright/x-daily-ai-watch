# 横向对比

按子类对库内项目做横向对比，比较技术路线、核心能力、成熟度、开源情况和适用场景。每个项目的详细分析见 `projects.json` 里的 `analysis` 字段。

- 更新：2026-11-12（Asia/Shanghai）；既有条目的星标多在 2026-11-09 至 11-10 查询，本批新条目的星标在 2026-11-12 查询，数字会变化
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

### 分析

这一类分成三条技术路线：一是「AI 资产流水线」，包括 3d-os-scenario-skills、scenario-blender-plugin、parametric-topdown-pixel-architecture，以及后来的 pixelfx（代码像素特效）和 guizang-game-skill（可玩网页动作游戏技能）；二是「渲染引擎和技术底座」，包括 threepp、solstice，以及重写商业游戏运行时的 iw4l，外加与 AI 无关的成熟关卡编辑器 LDtk；三是「AI 直接写出的成品或演示」，包括 portals、poke-bonk、书桌之上，以及 dread-and-district、earth-on-spawn、voxel-engine、the-quiet-elevation，再加上后来在热门帖评论里见到的 a-little-earth、our-3d-reality、fable-contra、sapper-minesweeper，大多是网页 3D。

结论 1：最成熟、最值得接入工作流的是 Scenario 的两件套。技能库覆盖整条流水线，Blender 插件的工程质量最高（测试、模糊测试、发布签名齐全），两者合起来就是「Agent 驱动 DCC」的参考实现。

结论 2：渲染底座里，threepp 胜在成熟，solstice 胜在技术前沿（WebGPU 上的虚拟化几何），但后者还只是演示。three-voxel-destruction 把 WebGPU 用在可玩的体素刚体破坏上，并开源了演示和底层求解器 three-avbd，适合对照「只有托管页的体素演示」。想在浏览器之外做原生 3D，选 threepp；想研究 Web 端下一代渲染，看 solstice；想看可玩的 WebGPU 物理，看 three-voxel-destruction。

结论 3：成品类项目仍有不少只是「能玩的演示」（dread-and-district、earth-on-spawn、voxel-engine、the-quiet-elevation，以及评论里出现的 a-little-earth、our-3d-reality、fable-contra、sapper-minesweeper），只能做 light 分析。其中 three-voxel-destruction 是例外：它有 MIT 源码和自研 GPU 求解器，不是一次性提示词小品。可复用的方法件仍是 pixelfx、guizang-game-skill 和与模型无关的 LDtk。可复用价值仍然更多在方法和工具，而不在某一款展示游戏。

## 研发效率

范围：agent-eng/dev-efficiency

| 项目 id | 技术路线 | 核心能力 | 成熟度 | 开源 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
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

### 分析

这一类可以按作用分成五层：方法论和技能层（superpowers、pstack、elephant-goldfish-model、unslop、stageshow、agents-md）；理解和审计层（understand-anything、security-audit-skill、stroq、landmine）；安全和成本层（openmoat、tokeneconomizer、agav、playbasis-agent-hub）；运行时和自治层（borg、oar-kanso、agent-autoloop、dsh-superagent-prototype、octopus-si-os、exact，以及后来补入的 kwwk、minimax-code、optiq-code）；生态和目录层（Grok Bot 相关项目、xai-plugin-marketplace）。

结论 1：技能（SKILL.md）已经成为研发效率工具的主流载体。星标最高的几个（superpowers 31.5 万、understand-anything 9.2 万、security-audit-skill 6.8 万）都是技能或插件，而且同时适配多种 harness，技能本身几乎不绑定具体 Agent。

结论 2：多个项目不约而同用「换一个干净的上下文去复核」来提高质量：elephant-goldfish-model 用无记忆评审，security-audit-skill 用新上下文证伪，pstack 强调验证。这是目前对抗 Agent 自我确认偏差最有效的套路。

结论 3：安全和成本工具大多还很早期（openmoat、landmine、borg 都不到 20 星），但定位清晰。tokeneconomizer 有大厂论文背书，是成本优化里唯一有系统评测的；安全方面，openmoat（事前拦截）、stroq（事后审计）和 security-audit-skill（代码审计）可以组合使用。本窗口补入的 sem 是少见的高星、非技能型底座，给 Agent 提供实体级 diff 和影响分析；anabasis 则把「换干净上下文验收」用到了自动改进 harness 上，仍偏研究。评论里后来又出现三类可运行的 harness：minimax-code 是厂商维护的跨平台开源 CLI，体量最大；kwwk 是少见的纯 Swift 方案，适合要嵌进 macOS 应用的人；optiq-code 针对本机小模型的失败模式，但还没有公开源码，榜分数也是作者自报。

## Phone/Computer Use

范围：agent-eng/phone-computer-use

| 项目 id | 技术路线 | 核心能力 | 成熟度 | 开源 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
| mika | 安卓无障碍服务加隐藏虚拟屏，在手机本机运行 | 操作任意 App，不需要 Root 或电脑 | ★7.9k | Apache-2.0 | 个人安卓自动化 |
| phongent | Mika 的分支，加 iOS 主控和局域网群控 | 多台手机分派任务 | ★356 | Apache-2.0 | 手机群控和批量操作 |
| pinky | Go 桌面应用（GPU 自绘），go-ios 加安卓 helper，MCP | 任意 Agent 操控 iPhone 或安卓，付款前停下等人确认，带录屏 | ★1.5k | Apache-2.0 | 需要安全护栏的 Phone Use |
| poki | iPhone 端 UI Automation 加 Mac 端 MCP | 在 Mac 上让 Agent 操作真实 iPhone | ★806 | AGPL-3.0 | iOS 自动化 |
| opencode-browse | Chromium 扩展加 MCP，用 Playwright | 接管已登录的标签页，登录和付款交还给人 | ★427 | MIT | 在真实浏览器会话里跑 Agent |
| pointer | Chrome 扩展加本地 bridge，MCP 和 hook | 点选元素，把结构、样式和截图交给 Agent | ★1，刚发布 | MIT | 前端改 UI 时精确指代 |
| redraft | Chrome 扩展加本地 Claude Code bridge | 多 Agent 现场改网页版式 | ★5 | MIT | 网页设计探索 |
| windows-terminal | QEMU 加终端图形协议，MCP 提供 9 个工具 | 隔离的真实 Windows 11 虚拟机 | ★5 | MIT | 安全地做 Windows Computer Use |
| image-context-manager | Python（Pillow）加技能 | 截图裁剪压缩、记录发现、按需召回 | ★3 | MIT | 降低 Computer Use 的上下文成本 |
| aura-autopilot | Python Agent 加 UE5、Unity、Godot、Roblox 插件 | 在游戏引擎里自动试玩和测试 | ★831 | Apache-2.0 | 游戏 QA |
| poinky | Swift，常驻 Mac 刘海区 | 看屏幕、语音回答、画示意图 | ★9 | MIT | 桌面伴随式助手 |
| hermes-voice | Home Assistant 集成加刷机的 Echo | 旧 Echo 变成 Agent 的语音入口 | ★627 | MIT | 智能家居语音 |

### 分析

按控制对象分：手机（mika、phongent、pinky、poki）、浏览器（opencode-browse、pointer、redraft）、桌面或虚拟机（windows-terminal、poinky、image-context-manager）、垂直领域（aura-autopilot 控制游戏引擎，hermes-voice 控制语音设备）。

结论 1：手机方向分成两条路。mika 走「手机本机运行」，免 Root、免电脑，星标最高；pinky 和 poki 走「电脑控制手机」加 MCP，方便接入现有编程 Agent。其中 pinky 的安全设计（付款前停下等确认、录屏、网关强制执行规则）在同类中最完整。

结论 2：浏览器方向的共识是「复用用户已登录的真实会话」，同时把登录、付款这类敏感步骤交还给人（opencode-browse）。pointer、redraft 这类小工具解决的是指代精度和可视化编辑，属于前端开发的辅助，不是通用浏览器 Agent。

结论 3：隔离和上下文成本是 Computer Use 的两大短板，库里已有针对性的工具：windows-terminal 用 QEMU 做隔离，image-context-manager 压缩截图。这两个都很早期（个位数星标），但方向值得跟进。

## Agent 军团管理

范围：agent-eng/agent-fleet

| 项目 id | 技术路线 | 核心能力 | 成熟度 | 开源 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
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

### 分析

这一类有三种形态：编程 Agent 控制台（t3-code、coincide、tastecode，以及后来的 recalc 表格工作台、crommacode 游戏化桌面），管的是本机的 CLI Agent；通用 Bot 平台（openmausbot、open-duet-anil-matcha、openduet-copilotkit、rerun），对标 Grok Bot 这类托管 Bot；团队模板和胶水层（bot-teams、hypergrok-trading-desk、relay、the-office-agents）；面向公司组织的商业平台则有后来见到的 agent-ceo。

结论 1：控制台方向 t3-code 仍然体量最大（既有记录约 5.4 万星），coincide、tastecode 做原生性能和创意场景上的差异化。recalc 把控制台收成一张可公式化验收的表，crommacode 把观察做成游戏并加 worktree 蜂群，但后者暂不开放源码。除 crommacode 外，这类方案大多仍选择驱动本机已登录的 CLI，沿用用户已有的订阅。

结论 2：Grok Bot 开源替代里，openmausbot（2 万星，执行环境最完整）和 open-duet-anil-matcha（7 千星，历史最久）最成熟。rerun 的 Foreman 自动组队最接近「管理者」角色，但采用 AGPL 许可。选型时主要看隔离方式（VM 还是 Docker）、许可证、要不要自带模型 key。若目标是公司组织而不是本机编码控制台，agent-ceo 给出了「人和 Agent 共用组织规则、完成判定要分开」的产品形态，但闭源，页面上的规模数字均为自报，需要自己试用。

结论 3：「团队即配置」正在出现：bot-teams 用 markdown 定义团队，hypergrok 用角色加技能加审批组合团队，说明多 Agent 的价值正在从运行时转向可复用的组织模板。

## 大模型工具

范围：category=llm-tools

| 项目 id | 技术路线 | 核心能力 | 成熟度 | 开源 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
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

### 分析

可以分成 7 组：模型（表中前几行）、推理和效率（kimi-k3-in-c、ferrite、mlx-serve、latent-sparse-attention、xerj-query-1）、权重和训练（nesformer、权重空间编程-mit、oumi-faie）、评测（rsi-inference-bench、science-s-last-exam、vybbench）、学习和科研（deeptutor 到 archimedes-reynolds）、内容创作（视频、动效、设计、写作），以及语音（cicada-知了、hy-simulmt、argument-cat、phonic-1）。

结论 1：模型组全部是 light 分析，因为只有官方博客或 API，没有可验证的代码。开放权重小模型（twil-8b、sensenova-loop-9b-preview）适合本地实验；大模型（mistral-large-4、longcat-2-5）的价值更多在于部署选项。基准数据都是厂商自报。

结论 2：最有技术含量的是「权重即程序」这条新路线：nesformer 用编译器写权重，权重空间编程-mit 让 LLM 推理后改权重，两者方向相反、互相补充。推理效率方向的 kimi-k3-in-c（极限省内存）、ferrite（全 Rust）、latent-sparse-attention（长上下文）都还以自报数据为主，生产可用性需要自己验证。

结论 3：内容创作类是数量最多的一组，而且几乎都以技能或 MCP 的形式交付，说明「LLM 加确定性工具链（ffmpeg、Playwright、Metal、GSAP、Manim）」是目前做可控内容生产的主流方式。lieflat 的写作与可视化技能（去 AI 味、公文、风格蒸馏、示意图、代码短片）把「先测量再改、先确认再写」写进了流程，但多用非商用许可。math-to-manim 把数学影片做成可重复跑的开源工具链。评测方面，frontier-harness-eval 补上了「只换 harness、不换模型」的公开对照；tracetrial-bench 则进一步把任务通过和 harness 轨迹是否可靠拆开计分，两者不宜直接比百分数。其中涉及他人肖像和 IP 的 ai-character-swap、gif-factory，以及依赖逆向接口的 zhihu-mcp，存在合规风险。

## 其他（未做对比）

`other` 类是教育站、效率工具、内容聚合等杂项，彼此关联很弱，所以不做整体对比；每个项目的 `analysis.comparison` 里有点对点的参照。其中可以对照着看的有：

- 教育交互：cn-math-taxonomy（知识图谱加诊断）、wrong-notebook（错题闭环）、wedulab、atlas-of-physics、protocol-explorer、3d-periodic-table、江山地图、cs329z（斯坦福 Agent 工程公开课）
- 知识聚合：hacker-papers、hackerbooks、lex-fridman-中文学习站、xnews（海外长文中文改写站）、x-article-hub（人工挑选的 X 长文归档）、musk-daily（马斯克动态日报）、what-new-ai-in-x（按模型与产品切的 X 合集档案）
- 效率工具：duodesk、theysay、quairone、terminus-notes、gr8r-studio、wowtype（Linux 拼音输入法）、cassotis-ime（跨平台开源拼音输入法「言泉」）、harper（离线英文语法检查）
