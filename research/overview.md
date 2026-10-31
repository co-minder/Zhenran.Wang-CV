# 研究方向总览

## 统一主线

两个项目共享的研究习惯是：从失败或不可靠行为出发，保留中间轨迹，设计可验证干预，再用受控评测判断是否真的改进。

- **RSI-Math** 把对象换成数学推理模型：模型为什么错，什么训练数据能够修复这个错误；
- **Embodied-SocialSim** 把对象换成设备中的具身 Agent：机器人为什么这样观察、规划和行动，怎样把行动放回环境与社会关系中检验。

两者不能混写成一个“社会预测”项目。RSI-Math 的核心是推理能力改进；Embodied-SocialSim 的核心是设备可接入的具身 Agent 框架，社会模拟用于验证具身行为。

## 建议的研究叙述

> Build reliable, diagnosable, and improvable agents by closing the loop between failure traces, targeted interventions, and controlled evaluation.

中文可表述为：

> 围绕智能体失败轨迹，研究可诊断的能力缺口、可验证的干预方法和可复现的闭环改进。

## 项目已完成的研究问题清单

1. RSI-Math 已将 verifier、形式化证明和自生成数据纳入失败诊断—干预闭环；
2. Embodied-SocialSim 已完成模型、运行时、设备状态和传感器观测的分层接口；
3. 社会仿真已被定义为具身智能的可控实验场，并与底层导航、感知和控制分层评测；
4. 两个项目已分别建立推理改进、设备运行可靠性和社会行为质量的评测维度；
5. 两个项目的研究对象、交付物和证据边界已在独立页面中固定。
