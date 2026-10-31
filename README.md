# Zhenran Wang · CV / Research Web

这是王振冉简历的网页展示版，独立于 LaTeX 简历仓库，目录为：

```text
/home/ubuntu/zhenran_wang_cv_buaa_web
```

## 在线地址

- 网页：<https://co-minder.github.io/Zhenran.Wang-CV/>
- 仓库：<https://github.com/co-minder/Zhenran.Wang-CV>

推送到 `main` 后由 `.github/workflows/pages.yml` 自动发布到 GitHub Pages。

网页包含：

- 中文简历、详细版简历、英文简历的 PDF 下载；
- 首页完整展示教育背景、7 篇代表论文、6 个项目、工作经历、奖励和技能；
- `papers/` 下为 7 篇论文分别制作的网页介绍页，每篇可从首页论文卡片点击进入；
- RSI-Math 与 Embodied-SocialSim 的详细研究调研独立放在两个子页面，不和论文介绍混用；
- 调研材料、研究边界、研究问题、方法路线和来源链接；
- 论文图片来源清单见 `assets/papers/README.md`，三轮网页审核记录见 `research/site-review.md`。

## 本机浏览

在服务器上运行：

```bash
cd /home/ubuntu/zhenran_wang_cv_buaa_web
python3 -m http.server 5173 --bind 127.0.0.1
```

在本机建立 SSH 端口转发：

```bash
ssh -L 5173:127.0.0.1:5173 <server>
```

然后在本机浏览器打开：<http://127.0.0.1:5173>

## 研究主线

网页刻意区分两个方向：

1. **RSI-Math**：数学推理模型的失败诊断、针对性数据干预和递归自改进；
2. **Embodied-SocialSim**：以 Agnes Harness 为运行骨架、面向设备接入的具身 Agent 框架；社会仿真是研究机器人感知、决策和交互的实验环境，不是项目的唯一主线。

首页的论文卡片进入 `papers/*.html` 论文介绍；项目卡片进入 `rsi-math.html` 或 `embodied-socialsim.html` 调研子页。

## 事实边界

Agnes Harness、MHS/MOS、ROS 2、YOLO 和论文来源均通过网页中的链接标注。网页中的项目路线描述分为“已有项目设定”和“拟研究/拟接入模块”，不把尚未完成的设备验收或实验结果写成已验证结论。
