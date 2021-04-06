import { ResourcesSection } from "src/components";

const nlpPublications: ReadonlyArray<Resource> = [
  {
    title: `定義文を用いた文埋め込み構成法`,
    text: `semantic embeddings, sentence embeddings`,
    period: `March 2021`,
  },
];

const Component: React.FCX = () => (
  <>
    <section className="my-4">
      <h2 className="-ml-2 font-bold text-2xl lg:text-4xl">Publications</h2>
    </section>
    <ResourcesSection title="NLP2021" resources={nlpPublications} />
  </>
);

const Container: React.FCX = () => <Component />;

export default Container;
