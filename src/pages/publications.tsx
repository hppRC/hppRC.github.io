import { ResourcesSection } from "src/components";

const Publications: ReadonlyArray<Resource> = [
  {
    title: `Comparison and Combination of Sentence Embeddings\nDerived from Different Supervision Signals`,
    period: `*SEM 2022\nlong paper\nacceptance rate: 61.5%`,
    text: `Hayato Tsukagoshi, Ryohei Sasano, Koichi Takeda`,
    relatedLink: `https://aclanthology.org/2022.starsem-1.12/`,
    additionalHtml: `We have recently seen many successful applications of sentence embedding methods.
It has not been well understood, however, what kind of properties are captured in the resulting sentence embeddings, depending on the supervision signals.
In this paper, we focus on two types of sentence embeddings obtained by using natural language inference (NLI) datasets and definition sentences from a word dictionary and investigate their properties by comparing their performance with the semantic textual similarity (STS) task using the STS data partitioned by two perspectives:
1) the sources of sentences, and 2) the superficial similarity of the sentence pairs, and their performance on the downstream and probing tasks.
We also demonstrate that combining the two types of embeddings yields substantially better performances than respective models on unsupervised STS tasks and downstream tasks.`,
  },
  {
    title: `自然言語推論と再現器を用いたSplit and Rephrase における生成文の品質向上`,
    period: `言語処理学会第28回年次大会 (NLP2022)`,
    text: `塚越駿, 平尾努, 森下睦, 帖佐克己, 笹野遼平, 武田浩一`,
    relatedLink: `https://www.anlp.jp/proceedings/annual_meeting/2022/pdf_dir/D5-4.pdf`,
    additionalHtml: `複雑な文を同じ意味の単純な複数の文に分割するSplit and Rephraseタスクは，可読性の向上や機械的なテキスト処理の性能向上に有用である．
本研究では，Split and Rephrase の性能向上のため，訓練データセットに含まれている文分割前後の文意が一致しない事例を含意関係分類を用いて除去するフィルタリングと，モデルが入力文に対し忠実な文生成を行うよう出力から入力を再構成する再現器を用いた訓練手法を提案する．
標準的なベンチマークデータセットを用いた実験の結果，提案手法が世界最高性能を達成したことを確認した．`,
  },
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

const Component: React.FCX = function () {
  return (
    <>
      <section className="my-4">
        <h2 className="-ml-2 text-2xl font-bold lg:text-4xl">Publications</h2>
      </section>
      <ResourcesSection title="" resources={Publications} bold />
    </>
  );
};

const Container: React.FCX = function () {
  return <Component />;
};

export default Container;
