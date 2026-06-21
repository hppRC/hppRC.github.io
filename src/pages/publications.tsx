import { ResourcesSection } from "src/components";

const refereed: ReadonlyArray<Resource> = [
  {
    title: `Ruri: Japanese General Text Embeddings`,
    period: `自然言語処理 (Journal of Natural Language Processing) Vol.33 No.2`,
    text: `Journal paper`,
    additionalHtml: `<u>Hayato Tsukagoshi</u>, Ryohei Sasano`,
    relatedLink: `https://doi.org/10.5715/jnlp.33.591`,
  },
  {
    title: `Redundancy, Isotropy, and Intrinsic Dimensionality of Prompt-based Text Embeddings`,
    period: `自然言語処理 (Journal of Natural Language Processing) Vol.33 No.1`,
    text: `Journal version of the ACL 2025 Findings paper`,
    additionalHtml: `<u>Hayato Tsukagoshi</u>, Ryohei Sasano`,
    relatedLink: `https://doi.org/10.5715/jnlp.33.76`,
  },
  {
    title: `FrameEOL: Semantic Frame Induction using Causal Language Models`,
    period: `Findings of EMNLP 2025`,
    additionalHtml: `Chihiro Yano, Kosuke Yamada, <u>Hayato Tsukagoshi</u>, Ryohei Sasano, Koichi Takeda`,
    relatedLink: `https://aclanthology.org/2025.findings-emnlp.623/`,
  },
  {
    title: `Redundancy, Isotropy, and Intrinsic Dimensionality of Prompt-based Text Embeddings`,
    period: `Findings of ACL 2025`,
    additionalHtml: `<u>Hayato Tsukagoshi</u>, Ryohei Sasano`,
    relatedLink: `https://aclanthology.org/2025.findings-acl.1330/`,
  },
  {
    title: `Improving Sentence Embeddings with Automatic Generation of Training Data Using Few-shot Examples`,
    period: `ACL 2024 Student Research Workshop (SRW)`,
    additionalHtml: `Soma Sato, <u>Hayato Tsukagoshi</u>, Ryohei Sasano, Koichi Takeda`,
    relatedLink: `https://aclanthology.org/2024.acl-srw.43/`,
  },
  {
    title: `WikiSplit++: Easy Data Refinement for Split and Rephrase`,
    period: `LREC-COLING 2024`,
    additionalHtml: `<u>Hayato Tsukagoshi</u>, Tsutomu Hirao, Makoto Morishita, Katsuki Chousa, Ryohei Sasano, Koichi Takeda`,
    relatedLink: `https://aclanthology.org/2024.lrec-main.1533/`,
  },
  {
    title: `Sentence Representations via Gaussian Embedding`,
    period: `EACL 2024 (Main)`,
    additionalHtml: `Shohei Yoda, <u>Hayato Tsukagoshi</u>, Ryohei Sasano, Koichi Takeda`,
    relatedLink: `https://aclanthology.org/2024.eacl-short.36/`,
  },
  {
    title: `Sentence Embeddings using Definition Sentences`,
    period: `自然言語処理 (Journal of Natural Language Processing) Vol.30 No.1`,
    text: `Best Paper Award`,
    additionalHtml: `<u>Hayato Tsukagoshi</u>, Ryohei Sasano, Koichi Takeda`,
    relatedLink: `https://www.jstage.jst.go.jp/article/jnlp/30/1/30_125/_pdf/-char/ja`,
  },
  {
    title: `Comparison and Combination of Sentence Embeddings\nDerived from Different Supervision Signals`,
    period: `*SEM 2022 (long paper)\nacceptance rate: 61.5%`,
    additionalHtml: `<u>Hayato Tsukagoshi</u>, Ryohei Sasano, Koichi Takeda
<br /><br />
We have recently seen many successful applications of sentence embedding methods.
It has not been well understood, however, what kind of properties are captured in the resulting sentence embeddings, depending on the supervision signals.
In this paper, we focus on two types of sentence embeddings obtained by using natural language inference (NLI) datasets and definition sentences from a word dictionary and investigate their properties.
We also demonstrate that combining the two types of embeddings yields substantially better performances than respective models on unsupervised STS tasks and downstream tasks.`,
    relatedLink: `https://aclanthology.org/2022.starsem-1.12/`,
  },
  {
    title: `DefSent: Sentence Embeddings using Definition Sentences`,
    period: `ACL-IJCNLP 2021 main conference (short paper)\nacceptance rate: 21.3%`,
    additionalHtml: `<u>Hayato Tsukagoshi</u>, Ryohei Sasano, Koichi Takeda
<br /><br />
Sentence embedding methods using natural language inference (NLI) datasets have been successfully applied to various tasks.
However, these methods are only available for limited languages due to relying heavily on the large NLI datasets.
In this paper, we propose DefSent, a sentence embedding method that uses definition sentences from a word dictionary, which performs comparably on unsupervised semantic textual similarity (STS) tasks and slightly better on SentEval tasks than conventional methods.
Since dictionaries are available for many languages, DefSent is more broadly applicable than methods using NLI datasets without constructing additional datasets.
Our code is publicly available at <a href="https://github.com/hppRC/defsent">https://github.com/hppRC/defsent</a>.`,
    relatedLink: `https://aclanthology.org/2021.acl-short.52/`,
  },
];

const preprints: ReadonlyArray<Resource> = [
  {
    title: `When Is 0.1% Enough? Analyzing the Combined Effects of Dimensionality Reduction and Quantization on Text Embedding Compression`,
    period: `arXiv 2026`,
    additionalHtml: `Riku Kisako, <u>Hayato Tsukagoshi</u>, Ryohei Sasano`,
    relatedLink: `https://arxiv.org/abs/2606.01074`,
  },
  {
    title: `Ruri: Japanese General Text Embeddings`,
    period: `arXiv 2024`,
    additionalHtml: `<u>Hayato Tsukagoshi</u>, Ryohei Sasano`,
    relatedLink: `https://arxiv.org/abs/2409.07737`,
  },
  {
    title: `Japanese SimCSE Technical Report`,
    period: `arXiv 2023`,
    additionalHtml: `<u>Hayato Tsukagoshi</u>, Ryohei Sasano, Koichi Takeda`,
    relatedLink: `https://arxiv.org/abs/2310.19349`,
  },
];

const domestic: ReadonlyArray<Resource> = [
  {
    title: `Ruri: 日本語に特化した汎用テキスト埋め込みモデル`,
    period: `言語処理学会第31回年次大会 (NLP2025)`,
    text: `若手奨励賞 (Young Researcher Encouragement Award)`,
    additionalHtml: `<u>塚越駿</u>, 笹野遼平`,
    relatedLink: `https://www.anlp.jp/proceedings/annual_meeting/2025/pdf_dir/Q4-3.pdf`,
  },
  {
    title: `プロンプトに基づくテキスト埋め込みのタスクによる冗長性の違い`,
    period: `言語処理学会第31回年次大会 (NLP2025)`,
    additionalHtml: `<u>塚越駿</u>, 笹野遼平`,
    relatedLink: `https://www.anlp.jp/proceedings/annual_meeting/2025/pdf_dir/A5-4.pdf`,
  },
  {
    title: `実在しないエンティティや出来事に関する合成文書を用いたRAGベンチマークの構築`,
    period: `第263回 自然言語処理研究発表会`,
    text: `優秀研究賞 (Outstanding Research Award)`,
    additionalHtml: `李聖哲, 大萩雅也, <u>塚越駿</u>, 福地成彦, 柴田知秀, 河原大輔`,
    relatedLink: `https://www.ipsj.or.jp/kenkyukai/event/nl263.html`,
  },
  {
    title: `培地改良論文の特定と組成情報の抽出`,
    period: `第263回 自然言語処理研究発表会`,
    additionalHtml: `陽田翔平, <u>塚越駿</u>, 笹野遼平, 鵜飼優子, 佐藤良勝`,
    relatedLink: `https://www.ipsj.or.jp/kenkyukai/event/nl263.html`,
  },
  {
    title: `自動生成した NLI データを用いた教師なし文埋め込みの改良`,
    period: `言語処理学会第30回年次大会 (NLP2024)`,
    additionalHtml: `佐藤蒼馬, <u>塚越駿</u>, 笹野遼平, 武田浩一`,
    relatedLink: `https://www.anlp.jp/proceedings/annual_meeting/2024/pdf_dir/P6-8.pdf`,
  },
  {
    title: `論文テキストを用いた化合物探索の漸進的効率化`,
    period: `第256回 自然言語処理研究発表会`,
    additionalHtml: `<u>塚越駿</u>, 岩田和樹, 花田博幸, 笹野遼平, 竹内一郎, 魚住信之, 有澤美枝子`,
    relatedLink: `https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=226105&item_no=1&page_id=13&block_id=8`,
  },
  {
    title: `ガウス埋め込みに基づく文表現生成`,
    period: `言語処理学会第29回年次大会 (NLP2023)`,
    additionalHtml: `陽田翔平 (若手奨励賞), <u>塚越駿</u>, 笹野遼平, 武田浩一`,
    relatedLink: `https://www.anlp.jp/proceedings/annual_meeting/2023/pdf_dir/C4-4.pdf`,
  },
  {
    title: `自然言語推論と再現器を用いたSplit and Rephrase における生成文の品質向上`,
    period: `言語処理学会第28回年次大会 (NLP2022)`,
    additionalHtml: `<u>塚越駿</u>, 平尾努, 森下睦, 帖佐克己, 笹野遼平, 武田浩一`,
    relatedLink: `https://www.anlp.jp/proceedings/annual_meeting/2022/pdf_dir/D5-4.pdf`,
  },
  {
    title: `定義文を用いた文埋め込み構成法`,
    period: `言語処理学会第27回年次大会 (NLP2021)`,
    additionalHtml: `<u>塚越駿</u>, 笹野遼平, 武田浩一`,
    relatedLink: `https://www.anlp.jp/proceedings/annual_meeting/2021/pdf_dir/C4-2.pdf`,
  },
];

const Component: React.FCX = function () {
  return (
    <>
      <section className="my-4">
        <h2 className="text-2xl font-bold lg:text-4xl">Publications</h2>
      </section>
      <ResourcesSection
        title="Refereed Publications"
        resources={refereed}
        bold
      />
      <ResourcesSection title="Preprints" resources={preprints} bold />
      <ResourcesSection
        title="Domestic Conferences (Japanese)"
        resources={domestic}
        bold
      />
    </>
  );
};

const Container: React.FCX = function () {
  return <Component />;
};

export default Container;
