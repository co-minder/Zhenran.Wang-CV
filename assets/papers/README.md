# Paper asset provenance

这些网页图片都来自本机保存的论文 PDF、作者图源或项目材料；网页没有使用 AI 生成的论文图，也没有把网页 CSS 示意图标成原论文 Figure。

| 网页目录 | 网页素材 | 来源 | 页面标注 |
| --- | --- | --- | --- |
| `visual-rsi/` | `cover.png` | `/home/ubuntu/rsi-v/main.pdf` 第 1 页 | 本地论文稿首页 |
| `visual-rsi/` | `figure1.png` | `rsi-v/figures/figure1_user_cropped.pdf` | Figure 1 |
| `visual-rsi/` | `task-overview.png` | `rsi-v/figures/Figure2_task_overview.pdf` | Figure 2 |
| `visual-rsi/` | `protocol.png` | `rsi-v/figures/Figure3_research_protocol.pdf` | Figure 3 |
| `visual-rsi/` | `case-study.png` | `rsi-v/figures/Figure5_case_study.pdf` | Figure 5 |
| `visual-rsi/` | `boundary-evolution.png` | `rsi-v/ppt/previews/Figure3_boundary_evolution.png` | 明确标为 archived design material，不作为当前正式 Figure |
| `societybench/` | `cover.png` | `societybench_paper_arxiv/main_arxiv.pdf` 第 1 页 | arXiv 版本首页 |
| `societybench/` | `teaser.png` | `societybench_paper_arxiv/figure/tease_aaai_cropped.png` | 论文 teaser |
| `societybench/` | `methodology.png` | `societybench_paper_arxiv/figure/fig_methodology_v3.pdf` | Figure 2 / methodology |
| `societybench/` | `score-bars.png` | `societybench_paper_arxiv/figure/fig_score_bars.pdf` | 结果图 |
| `societybench/` | `ablation.png` | `societybench_paper_arxiv/figure/fig_ablation_radar.pdf` | 消融图 |
| `groundbench/` | `cover.png` | `groundingbench_aaai/main.pdf` 第 1 页 | ICLR 工作稿首页 |
| `groundbench/` | `pipeline.png` | `groundingbench_aaai/figures/fig_pipeline_v2.pdf` | Figure 1 / pipeline |
| `groundbench/` | `budget-results.png` | `groundingbench_aaai/figures/fig_budget_results.pdf` | 顶点预算结果 |
| `groundbench/` | `qualitative-overview.jpg` | `groundingbench_aaai/figures/fig_qualitative_overview_optimized.jpg` | 补充定性材料 |
| `groundbench/` | `accuracy-surface.png` | `groundingbench_aaai/figures/fig_sup_accuracy_surface.png` | 补充分析 |
| `worldcup/` | `cover.png` | `worldcup_2026_paper_arxiv/main.pdf` 第 1 页 | arXiv 技术报告首页 |
| `worldcup/` | `teaser.png` | `worldcup_2026_paper_arxiv/figure/fig_teaser.pdf` | Figure 1 / teaser |
| `worldcup/` | `leaderboard.png` | `worldcup_2026_paper_arxiv/figure/fig_leaderboard.pdf` | 排行榜图 |
| `worldcup/` | `markets.png` | `worldcup_2026_paper_arxiv/figure/fig_markets.pdf` | 市场级结果 |
| `worldcup/` | `views.png` | `worldcup_2026_paper_arxiv/figure/fig_views.pdf` | 视角/评分分析 |
| `hurwitz-cc/` | `cover.png` + `paper.pdf` | `https://arxiv.org/pdf/2311.06316` | 真实原文首页和 PDF |

## 明确没有伪造的内容

- `papers/hurwitz-lambda.html`：当前本地公开材料没有找到可直接复用的该稿件封面或原始 Figure，页面使用公式排版和结构导读，并明确写出“原图未公开”。
- `papers/embodied-socialsim.html`：这是在准备中的项目式论文页面，页面中的 architecture map 是网页研究导图，不是已发表论文 Figure。
- Visual-RSI 论文中的完整模型结果在论文稿中标注为 simulated；网页只把局部构造检查写成已完成证据，不把模拟结果写成实证结果。

## 转换规则

PDF 图先用 `pdftoppm` 转 PNG，再对超宽图片做无损意义上的尺寸压缩；没有改动图内文字、数值或颜色。所有网页图均通过 `PIL` 重新打开检查，页面发布前再检查 HTTP 资源路径。
