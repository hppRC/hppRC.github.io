import { ResourcesSection } from "src/components";

const nlp2021Publications: ReadonlyArray<Resource> = [
  {
    title: `定義文を用いた文埋め込み構成法`,
    period: `言語処理学会第27回年次大会 (NLP2021)`,
    text: `塚越駿, 笹野遼平, 武田浩一`,
    relatedLink: `https://www.anlp.jp/proceedings/annual_meeting/2021/pdf_dir/C4-2.pdf`,
  },
];

const ACLIJCNLP2021Publications: ReadonlyArray<Resource> = [
  {
    title: `DefSent: Sentence Embeddings using Definition Sentences`,
    period: `ACL-IJCNLP 2021 main conference (short paper)`,
    text: `Hayato Tsukagoshi, Ryohei Sasano, Koichi Takeda`,
    relatedLink: `https://aclanthology.org/2021.acl-short.52/`,
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
      bold
    />
    <ResourcesSection title="NLP2021" resources={nlp2021Publications} bold />
  </>
);

const Container: React.FCX = () => <Component />;

export default Container;
