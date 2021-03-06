import { ResourcesSection } from "src/components";

const nlp2021Publications: ReadonlyArray<Resource> = [
  {
    title: `定義文を用いた文埋め込み構成法`,
    text: `semantic embeddings, sentence embeddings`,
    period: `言語処理学会第27回年次大会 (NLP2021)`,
    relatedLink: `https://www.anlp.jp/proceedings/annual_meeting/2021/pdf_dir/C4-2.pdf`,
  },
];
const ACLIJCNLP2021Publications: ReadonlyArray<Resource> = [
  {
    title: `DefSent: Sentence Embeddings using Definition Sentences`,
    text: `semantic embeddings, sentence embeddings`,
    period: `ACL-IJCNLP 2021 main conference (short paper)`,
    relatedLink: `https://arxiv.org/abs/2105.04339`,
  },
];

const Component: React.FCX = () => (
  <>
    <section className="my-4">
      <h2 className="-ml-2 font-bold text-2xl lg:text-4xl">Publications</h2>
    </section>
    <ResourcesSection
      title="ACL-IJCNLP 2021"
      resources={ACLIJCNLP2021Publications}
    />
    <ResourcesSection title="NLP2021" resources={nlp2021Publications} />
  </>
);

const Container: React.FCX = () => <Component />;

export default Container;
