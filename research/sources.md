# 调研来源与核对记录

核对日期：2026-10-29。以下链接是网页调研中实际读取或作为官方入口保留的来源。

## Embodied / runtime / device

1. **Agnes Harness repository** — <https://github.com/AgnesAI-Labs/agnes-harness>  
   官方 README 将 LLM、Jev、Harness、MHS 分别描述为大脑、小脑、记忆和身体；说明 Harness 负责任务上下文、执行治理、审批、轨迹和恢复，并将 MHS 作为可选设备接入路径。仓库当前标注为 developer preview / pre-alpha。

2. **Agnes Harness architecture** — <https://github.com/AgnesAI-Labs/agnes-harness/blob/main/docs/develop/architecture.md>  
   说明请求如何经过 daemon、Host、Core、AI provider、受控工具执行和 event ledger；强调模型提出动作，但授权、执行和持久状态不由模型文本直接决定。

3. **MHS and device integration / current docs entry** — <https://github.com/AgnesAI-Labs/agnes-harness/tree/main/docs>  
   当前仓库的公开文档入口。网页保留 MHS/MOS 作为项目协议层的研究命名；具体字段和设备能力应按对应版本文档核对。实时运动控制、互锁、急停和本地接管仍留在设备控制器侧。

4. **ROS 2 nodes** — <https://raw.githubusercontent.com/ros2/ros2_documentation/jazzy/source/Concepts/Basic/About-Nodes.rst>  
   官方文档将 node 定义为 ROS 2 图中的计算参与者，并通过 topic、service、action 和 parameter 组织通信与运行时配置。

5. **ROS 2 topics** — <https://raw.githubusercontent.com/ros2/ros2_documentation/jazzy/source/Concepts/Basic/About-Topics.rst>  
   官方文档说明 topic 适合持续数据流，例如传感器数据和机器人状态；发布者/订阅者可以替换，便于记录和调试。

6. **Ultralytics YOLO11** — <https://docs.ultralytics.com/models/yolo11/>  
   官方文档列出检测、分割、分类、姿态和旋转框等任务，并说明其面向速度、精度和边缘部署的平衡。网页中的 YOLO 仅作为可替换视觉模块示例，不等同于已完成某一具体设备验收。

## Embodied social simulation

7. **SocialGrid: A Benchmark for Planning and Social Reasoning in Embodied Multi-Agent Systems** — <https://arxiv.org/abs/2604.16022>  
   论文把规划、任务执行和社会推理放进具身多智能体环境，并使用 Planning Oracle 区分规划缺陷和社会推理缺陷；这直接支持本项目“社会环境是具身行为评测场”的定位。

8. **Generative Agents: Interactive Simulacra of Human Behavior** — <https://arxiv.org/abs/2304.03442>  
   论文使用观察、记忆、反思和规划构建可交互的社会模拟，说明长期记忆与多轮反馈是社会仿真的重要组件，但它不等同于物理机器人设备框架。

## RSI-Math / mathematical reasoning

9. **DeepSeekMath-V2: Towards Self-Verifiable Mathematical Reasoning** — <https://arxiv.org/abs/2511.22570>  
   摘要强调 verifier、证明检查、生成器—验证器闭环和通过验证计算构造更难的训练数据，支持 RSI-Math 的“失败诊断—验证—数据干预”路线。

10. **HERMES: Towards Efficient and Verifiable Mathematical Reasoning in LLMs** — <https://arxiv.org/abs/2511.18760>  
    摘要介绍在非正式推理和 Lean 形式化证明之间交错检查，并用记忆保持多步证明连续性，支持 RSI-Math 对过程可靠性和形式化验证的关注。

## 项目交付说明

- 上述来源用于定义项目采用的系统职责、协议语义和研究比较基线；
- 项目自身的架构、协议、流程和评测矩阵已整理为独立交付物；设备型号、运行日志和实验批次按项目记录单独归档；
- 网页中的数字优先表示已完成的模块、协议对象和评测轴，不把它们替换成未经记录的模型增益或硬件性能。
