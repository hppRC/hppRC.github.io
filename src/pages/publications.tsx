import { ResourcesSection } from "src/components";

const Publications: ReadonlyArray<Resource> = [
  {
    title: `DefSent: Sentence Embeddings using Definition Sentences`,
    period: `ACL-IJCNLP 2021 main conference\nshort paper\nacceptance rate: 21.3%`,
    text: `Hayato Tsukagoshi, Ryohei Sasano, Koichi Takeda`,
    relatedLink: `https://aclanthology.org/2021.acl-short.52/`,
    additionalHtml: `Sentence embedding methods using natural language inference (NLI) datasets have been successfully applied to various tasks.
However, these methods are only available for limited languages due to relying heavily on the large NLI datasets.
In this paper, we propose DefSent, a sentence embedding method that uses definition sentences from a word dictionary, which performs comparably on unsupervised semantics textual similarity (STS) tasks and slightly better on SentEval tasks than conventional methods.
Since dictionaries are available for many languages, DefSent is more broadly applicable than methods using NLI datasets without constructing additional datasets.
We demonstrate that DefSent performs comparably on unsupervised semantics textual similarity (STS) tasks and slightly better on SentEval tasks to the methods using large NLI datasets.
Our code is publicly available at <a href="https://github.com/hpprc/defsent">https://github.com/hpprc/defsent</a>.`,
  },
  {
    title: `定義文を用いた文埋め込み構成法`,
    period: `言語処理学会
第27回年次大会 (NLP2021)`,
    text: `塚越駿, 笹野遼平, 武田浩一`,
    relatedLink: `https://www.anlp.jp/proceedings/annual_meeting/2021/pdf_dir/C4-2.pdf`,
    additionalHtml: `近年，自然言語推論 (Natural Language Inference: NLI) データセットを用いて文埋め込みを構成する手法が成功を収めており，文類似度 (Semantic Textual Similarity: STS) タスクをはじめとする様々なタスクで活用されている．
これらの手法では，NLIデータセットの文ペアに付与されている「含意」「矛盾」「その他」のラベルを正しく分類するというタスクを通して文埋め込みを構成する．
しかし，このような手法は，大規模なNLIデータセットが整備されている言語でしか利用できないという問題がある．
本研究ではこの問題を解決するため，辞書に含まれる単語とその定義文が基本的に同一の意味内容を表すという関係に着目し，辞書の定義文を用いた文埋め込み構成法を提案する．
辞書はNLIデータセットと比べ，はるかに多くの言語において整備が行われており，定義文を用いた文埋め込み構成法は多くの言語に適用可能であると考えられる．`,
  },
];

const Component: React.FCX = () => (
  <>
    <section className="my-4">
      <h2 className="-ml-2 font-bold text-2xl lg:text-4xl">Publications</h2>
    </section>
    <ResourcesSection title="" resources={Publications} bold />
  </>
);

const Container: React.FCX = () => <Component />;

export default Container;
