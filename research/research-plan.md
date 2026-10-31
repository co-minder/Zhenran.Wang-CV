# 项目交付与记录

这份记录汇总两个项目已经完成的研究拆解、接口定义和页面交付。

## 共同方法

- 从失败或不可靠行为出发，保留中间轨迹；
- 设计可验证的数据、协议和干预；
- 用受控评测区分能力变化、选择波动和系统执行问题。

## RSI-Math 交付内容

| 模块 | 已完成内容 |
| --- | --- |
| Failure diagnosis | 表示/解析、局部计算、策略选择、全局证明、迁移/可靠性 5 类失败分类 |
| Data intervention | 随机扩充、错误针对性扩充、verifier 反馈、混合策略 4 类干预 |
| Training control | 共同初始化 M<sub>0</sub>、固定训练配方、候选选择与递归停止字段 |
| Evaluation | In-domain、hold-out、cross-task、formal/verifier、stability、cost 6 轴 |

## Embodied-SocialSim 交付内容

| 模块 | 已完成内容 |
| --- | --- |
| System layers | Device、ROS2、MHS/MOS、Agnes Harness、Agent + SocialSim 5 层职责 |
| Protocol objects | Observation、ActionRequest、ActionResult、Recovery 4 类记录对象 |
| Runtime governance | 状态、审批、轨迹、恢复和设备控制器安全职责分层 |
| Evaluation | Perception、Planning、Execution、Social reasoning、Reliability、Transfer 6 轴 |

## 研究资料产出

- 研究方向总览与项目定位图；
- 相关工作矩阵和来源清单；
- RSI-Math 失败诊断、数据协议和评测页面；
- Embodied-SocialSim 系统架构、设备协议、社会仿真和评测页面；
- 可直接用于简历、个人陈述和论文 introduction 的短版叙述。
