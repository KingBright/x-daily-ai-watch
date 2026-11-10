# X 每日 AI 应用观察

从公开的 X 帖与项目页面整理的前沿 AI 应用精选：按类别归档，并为每个项目做深度分析（核心技术、方法、功能、特点与局限），同类项目另有横向对比。

在线浏览：[X 每日 AI 应用观察](https://kingbright.github.io/x-daily-ai-watch/)

本仓库持续更新，收录数量以网站和 [`data/projects.json`](data/projects.json) 为准。

## 分类

| 类别 | 说明 |
| --- | --- |
| 游戏（`game`） | 游戏成品、引擎、游戏资产流水线、游戏向 3D / 像素工具 |
| Agent 工程（`agent-eng`） | 围绕 Agent 工程，下分三个子类 |
| 大模型工具（`llm-tools`） | 模型、推理引擎、评测基准，以及多模态 / 语音 / 可视化等周边工具 |
| 其他（`other`） | 教育站、笔记、效率工具等其余项目 |

Agent 工程的子类：

- `dev-efficiency`：提升研发效率的整体工具、技能、安全阀、省 token、审计等
- `phone-computer-use`：Phone Use / Computer Use / Browser Use
- `agent-fleet`：整合多个 Agent 或终端，形成可管理的 Agent 军团

一条记录可以有多个标签，但只有一个主类，以及（仅 Agent 工程）一个子类。

## 网站

静态站点从 `data/projects.json` 和 `data/comparisons.json` 读取数据，不经过构建步骤。页面会按当前数据计算项目总数、各类数量和完整 / 轻量分析数量。

- 按类别、子类、标签筛选，并支持关键词搜索
- 点击项目名或「分析」会打开该项目的分析，不必再往下翻
- 每个项目都有可分享的锚点，例如 `https://kingbright.github.io/x-daily-ai-watch/#portals`
- 「横向对比」里的项目名和分析正文中的库内项目 id 也可点击定位

## 数据字段

主数据在 [`data/projects.json`](data/projects.json)，另有扁平表 [`data/projects.csv`](data/projects.csv) 和 Markdown 对比 [`data/comparisons.md`](data/comparisons.md)。

| 字段 | 说明 |
| --- | --- |
| `id` | 唯一 slug，也是网站锚点 |
| `name` | 项目名 |
| `summary` | 中文一句话简介 |
| `category` | `game` / `agent-eng` / `llm-tools` / `other` |
| `subcategory` | 仅 `agent-eng` 使用：`dev-efficiency` / `phone-computer-use` / `agent-fleet` |
| `tags` | 自由标签，如 `mcp`、`skill`、`开源` |
| `source_url` | 源码仓库 |
| `preview_url` | 预览、官网或 Demo |
| `post_url` | 原始 X 帖 |
| `author` | 作者或组织 |
| `models` | 相关模型名 |
| `first_seen` | 首次观察到的日期（`YYYY-MM-DD` 或 `YYYY-MM`） |
| `origin` | `bookmark`（来自整理过的公开项目书签）或 `daily-digest`（每日精选） |
| `stars` | 可选，GitHub 星标（查询日期见 `notes`） |
| `notes` | 缺口、失效链接或待核实说明 |
| `analysis` | 深度分析对象，见下表 |

`analysis` 字段：

| 字段 | 说明 |
| --- | --- |
| `depth` | `full`：读过 README 或文档，并浏览过源码目录或关键文件；`light`：只有帖子、官网或博客，没有可查的源码 |
| `core_tech` | 核心技术（语言、框架、架构、运行形态、许可证等） |
| `method` | 核心方法（它靠什么机制解决问题） |
| `features` | 主要功能 |
| `highlights` | 特点和亮点 |
| `limitations` | 局限和风险 |
| `comparison` | 和库内哪些项目可以对比（用 `id` 指称） |
| `researched_at` | 研究日期 |

## 更新方式

观察库更新后，维护者运行同步脚本，把清理过的公开数据写入 `data/` 并推送到本仓库的 `main` 分支。GitHub Pages 随 `main` 根目录自动发布。没有数据变化时不会产生新的提交。

欢迎通过 Issue 指出事实错误、失效链接或分类问题。请勿提交盗版、破解或未授权资源。

## 免责声明

分析由 AI 辅助生成，可能有遗漏、过时或不准确之处，不能代替你自己阅读原项目。标注「自报」或「自述」的性能、星标和基准数字来自项目方，未经独立验证。查不到的信息会写明「未查到」，而不编造。

各项目的名称、代码、商标、文档与演示等内容，版权归其原作者所有。本仓库只提供观察与整理，收录不代表推荐或背书。

## 许可证

- 内容（简介、分析、横向对比等）：[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- 网站与脚本代码：[MIT](LICENSE-MIT)

引用本仓库的分析或整理时，请署名「X 每日 AI 应用观察」，并链接到本仓库。
