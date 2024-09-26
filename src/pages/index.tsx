import { ExternalLink, ResourcesSection } from "src/components";

const educationResources: ReadonlyArray<Resource> = [
  {
    title: `Doctor's degree, Department of Intelligent Systems, Graduate School of Informatics, Nagoya University, Japan`,
    period: `April 2023 - `,
  },
  {
    title: `Master's degree, Department of Intelligent Systems, Graduate School of Informatics, Nagoya University, Japan`,
    period: `April 2021 - March 2023`,
  },
  {
    title: `Bachelor's degree, Department of Computer Science, School of Informatics, Nagoya University, Japan`,
    period: `April 2017 - March 2021`,
    text: `GPA: 3.89/4.30`,
  },
  {
    title: `Short-term study abroad at Monash University, Australia`,
    period: `February 2019 - March 2019`,
  },
];

const internsihpsEmploymentsResources: ReadonlyArray<Resource> = [
  {
    title: `Part-time Employee at Preferred Elements, Inc.`,
    period: `November 2023 - June 2024`,
    text: `Research Engineer`,
  },
  {
    title: `Internship / Part-time Employee at Preferred Networks, Inc.`,
    period: `July 2023 - June 2024`,
    text: `Research Engineer`,
  },
  {
    title: `Writer for State of AI Guide`,
    period: `October 2022 - March 2023`,
    relatedLink: `https://ja.stateofaiguides.com/author/tsukagoshi/`,
  },
  {
    title: `Research Assistant of Moonshot R&D project "Observation and interpretation AI based on prior knowledge"`,
    period: `June 2021 - March 2024`,
    text: `ムーンショット型研究開発事業: 事前知識に基づく観察・解釈AI 研究アシスタント`,
  },
  {
    title: `Research Internship at NTT CS Lab.`,
    period: `August 2021 - September 2021`,
    text: `Natural Language Processing / Python`,
  },
  {
    title: `Software Engineering Internship at Mercari Inc.`,
    period: `May 2021 - August 2021`,
    text: `Machine Learning, Search / Go, Python`,
  },
  {
    title: `Server-side Engineering Internship at pixiv Inc.`,
    period: `April 2021 - May 2021`,
    text: `Novel team, Search System Engineer / Python, PHP`,
  },
  {
    title: `Server-side Engineering Internship at Recruit Co., Ltd.`,
    period: `February 2021 - March 2021`,
    text: `Search System Engineer / ElasticSearch, AES, Locust`,
  },
  {
    title: `Writer for AI-SCHOLAR`,
    period: `June 2020 - June 2021`,
  },
  {
    title: `Server-side Engineering Internship at CyberAgent Inc.`,
    period: `March 2020`,
    text: `Scala, Akka, AWS (ECS, DynamoDB Streams)`,
  },
  {
    title: `Server-side Engineer at Ateam Inc.`,
    period: `January 2020 - March 2020`,
    text: `Developed in-house management system / Rails, Vue.js`,
  },
  {
    title: `Server-side Engineering Internship at TeamLab Inc.`,
    period: `September 2019`,
    text: `Developed API using postal codes and geometrical information / Go, MySQL, AWS (Fargate)`,
  },
  {
    title: `R&D Engineering Internship at TRYETING Inc.`,
    period: `April 2019 - November 2019`,
    text: `Time series forecasting, denoising / Python, R`,
  },
];

const refereedPublicationsResources: ReadonlyArray<Resource> = [
  {
    title: `Improving Sentence Embeddings with Automatic Generation of Training Data Using Few-shot Examples`,
    period: `ACL 2024 SRW`,
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
    period: `自然言語処理 Vol.30 No.1`,
    text: `Best paper award`,
    additionalHtml: `<u>Hayato Tsukagoshi</u>, Ryohei Sasano, Koichi Takeda`,
    relatedLink: `https://www.jstage.jst.go.jp/article/jnlp/30/1/30_125/_pdf/-char/ja`,
  },
  {
    title: `Comparison and Combination of Sentence Embeddings\nDerived from Different Supervision Signals`,
    period: `*SEM 2022\nacceptance rate: 61.5%`,
    additionalHtml: `<u>Hayato Tsukagoshi</u>, Ryohei Sasano, Koichi Takeda`,
    relatedLink: `https://aclanthology.org/2022.starsem-1.12/`,
  },
  {
    title: `DefSent: Sentence Embeddings using Definition Sentences`,
    period: `ACL-IJCNLP 2021 main conference\nacceptance rate: 21.3%`,
    additionalHtml: `<u>Hayato Tsukagoshi</u>, Ryohei Sasano, Koichi Takeda`,
    relatedLink: `https://aclanthology.org/2021.acl-short.52/`,
  },
];

const nonRefereedPublicationsResources: ReadonlyArray<Resource> = [
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
  {
    title: `論文テキストを用いた化合物探索の漸進的効率化`,
    period: `第256回 自然言語処理研究発表会`,
    additionalHtml: `<u>塚越駿</u>, 岩田 和樹, 花田 博幸, 笹野 遼平, 竹内 一郎, 魚住 信之, 有澤 美枝子`,
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

const activitiesResources: ReadonlyArray<Resource> = [
  {
    title: `Development of General Text Embedding Model for Japanese`,
    period: `September 2024`,
    text: `Encouragement Award (23/182), Sponshor Award (PKSHA)`,
    relatedLink: `http://cr.fvcrc.i.nagoya-u.ac.jp/~tsukagoshi/presentations/YANS2024.pdf`,
  },
  {
    title: `Isotropy, Clusters, and Classifiers`,
    period: `August 2024`,
    relatedLink: `https://speakerdeck.com/hpprc/isotropy-clusters-and-classifiers`,
  },
  {
    title: `[輪講資料] Matryoshka Representation Learning`,
    period: `August 2024`,
    relatedLink: `https://speakerdeck.com/hpprc/lun-jiang-zi-liao-matryoshka-representation-learning`,
  },
  {
    title: `[輪講資料] Text Embeddings by Weakly-Supervised Contrastive Pre-training`,
    period: `May 2024`,
    relatedLink: `https://speakerdeck.com/hpprc/lun-jiang-zi-liao-text-embeddings-by-weakly-supervised-contrastive-pre-training`,
  },
  {
    title: `[輪講資料] One Embedder, Any Task: Instruction-Finetuned Text Embeddings`,
    period: `December 2023`,
    relatedLink: `https://speakerdeck.com/hpprc/one-embedder-any-task-instruction-finetuned-text-embeddings`,
  },
  {
    title: `[解説資料] WhitenedCSE: Whitening-based Contrastive Learning of Sentence Embeddings`,
    period: `ACL2023読み会 at 名大`,
    relatedLink: `https://speakerdeck.com/hpprc/whitenedcse-whitening-based-contrastive-learning-of-sentence-embeddings`,
  },
  {
    title: `[解説資料] Hyena Hierarchy: Towards Larger Convolutional Language Models`,
    period: `第15回 最先端NLP勉強会`,
    relatedLink: `https://speakerdeck.com/hpprc/hyena-hierarchy-towards-larger-convolutional-language-models`,
  },
  {
    title: `[輪講資料] LoRA: Low-Rank Adaptation of Large Language Models`,
    period: `April 2023`,
    relatedLink: `https://speakerdeck.com/hpprc/lun-jiang-zi-liao-lora-low-rank-adaptation-of-large-language-models`,
  },
  {
    title: `BERTによるテキスト分類チュートリアル`,
    period: `May 2023`,
    relatedLink: `https://www.jstage.jst.go.jp/article/jnlp/30/2/30_867/_article/-char/ja`,
  },
  {
    title: `NLP Dの会 幹事`,
    period: `April 2023 - present`,
    relatedLink: `https://sites.google.com/view/nlp-phd`,
  },
  {
    title: `資源として見る実験プログラム`,
    period: `March 2023`,
    relatedLink: `https://speakerdeck.com/hpprc/zi-yuan-tositejian-rushi-yan-puroguramu`,
    text: `Oral presentation at JLR2023, which is a workshop of the 29th Annual Meeting of the Association for Natural Language Processing.`,
  },
  {
    title: `埋め込みで論理演算！データを確率分布で表す確率埋め込みの最前線`,
    period: `March 2023`,
    relatedLink: `https://ja.stateofaiguides.com/20230313-probabilistic-embeddings/`,
    text: `Discuss probabilistic embeddings.`,
  },
  {
    title: `次世代のトランスフォーマーを目指して: 状態空間モデル S4 の発展`,
    period: `Feburary 2023`,
    relatedLink: `https://ja.stateofaiguides.com/20230218-s4-successor/`,
    text: `Discuss S4 sucsessors.`,
  },
  {
    title: `BERT Classification Tutorial (BERTによるテキスト分類)`,
    period: `January 2023`,
    relatedLink: `https://github.com/hppRC/bert-classification-tutorial`,
    text: `A tutorial, reference implementation of text classification using BERT in 2023`,
  },
  {
    title: `歪んだ空間の使い方: 双曲埋め込み＋深層学習の主要研究まとめと最新動向`,
    period: `December 2022`,
    relatedLink: `https://ja.stateofaiguides.com/20221227-hyperbolic-embeddings/`,
    text: `Article for State of AI Guides. Discuss Hyperbolic Embeddings, which embed words in a hyperbolic space instead of a Euclidean space.`,
  },
  {
    title: `単語を箱で表現！新たな埋め込み手法 Box Embedding を基礎から理解`,
    period: `October 2022`,
    relatedLink: `https://ja.stateofaiguides.com/20221013-box-embeddings/`,
    text: `Article for State of AI Guides. Discuss Box Embeddings, which represent words using a box instead of a vector.`,
  },
  {
    title: `[輪講資料] Optimus: Organizing Sentences via Pre-trained Modeling of a Latent Space`,
    period: `October 2022`,
    relatedLink: `https://speakerdeck.com/hpprc/lun-jiang-zi-liao-optimus-organizing-sentences-via-pre-trained-modeling-of-a-latent-space`,
    text: `Reading group material. Discuss Optimus, which is a pre-trained VAE-based language model.`,
  },
  {
    title: `Simple-SimCSE`,
    period: `October 2022`,
    relatedLink: `https://github.com/hppRC/simple-simcse`,
    text: `An easy-to-read, easy-to-use implementation of SimCSE, which is a simple contrastive sentence embedding method.`,
  },
  {
    title: `[輪講資料] Language-agnostic BERT Sentence Embedding`,
    period: `May 2022`,
    relatedLink: `https://speakerdeck.com/hpprc/lun-jiang-zi-liao-language-agnostic-bert-sentence-embedding`,
    text: `Reading group material. Discuss LaBSE, which is a effective multilingual sentence embedding model.`,
  },
  {
    title: `輪読会主催: MLPシリーズ 深層学習 改訂第2版`,
    period: `April 2022 -`,
    text: `Study group organizer.`,
  },
  {
    title: `[輪講資料] SimCSE: Simple Contrastive Learning of Sentence Embeddings`,
    period: `February 2022`,
    relatedLink: `https://speakerdeck.com/hpprc/lun-jiang-zi-liao-simcse-simple-contrastive-learning-of-sentence-embeddings-823255cd-bd1f-40ec-a65c-0eced7a9191d`,
    text: `Reading group material. Discuss SimCSE, which is a very simple but effective State-of-the-Art sentence embedding method using a pre-trained language model and contrastive learning.`,
  },
  {
    title: `人工知能学会 言語・音声理解と対話処理研究会(SLUD) 第93回研究会 「第12回対話システムシンポジウム」 国際会議報告(ACL-IJCNLP)`,
    period: `November 2021`,
    relatedLink: `https://github.com/jsai-slud/sig-slud/blob/bb874324f3dbb2f309d46ec321ef977f37f23a92/material/93th/conference_report_2021.pdf`,
    text: `Introduction to ACL.`,
  },
  {
    title: `ログデータと言語モデルを用いた同義語辞書の自動構築`,
    period: `May 2021 - August 2021`,
    relatedLink: `https://engineering.mercari.com/blog/entry/20220210-eab9f5d823/`,
    text: `Blog post. Software Engineer, Machine Learning, Search Internship at Mercari Inc.`,
  },
  {
    title: `Amazon Elasticsearch Serviceへの移行にかかる調査とLocustを用いた負荷試験`,
    period: `February 2021 - March 2021`,
    relatedLink: `https://blog.recruit.co.jp/rtc/2021/04/01/amazon-elasticsearch-service/`,
    text: `Blog post. Server-side Engineering Internship at Recruit Inc.`,
  },
  {
    title: `DynamoDB Streamsを用いたAkka Streamsによるキャッシュ処理の実装とDynalystでのインターン`,
    period: `March 2020`,
    relatedLink: `https://developers.cyberagent.co.jp/blog/archives/25747/`,
    text: `Blog post. Server-side Engineering Internship at CyberAgent Inc.`,
  },
];

const awardsHonorsResources: ReadonlyArray<Resource> = [
  {
    title: `Japan Society for Promotion of Science (JSPS) Research Fellowship for Young Scientists (DC1)`,
    period: `April 2023 - March 2027`,
    text: `200,000 yen / month + 1,000,000 yen / year`,
  },
  {
    title: `Nagoya University Interdisciplinary Frontier Fellowship`,
    period: `April 2023 - March 2026`,
    text: `180,000 yen / month + 250,000 yen / year`,
  },
  {
    title: `名古屋大学大学院 情報学研究科 修士研究中間発表 優秀賞`,
    period: `April 2022`,
    text: `異なる教師信号から構築した文ベクトルの比較と統合手法の提案`,
  },
  {
    title: `JEES/Softbank AI Human Resource Development Scholarship 2021`,
    period: `April 2021 - March 2022`,
    text: `1,000,000 yen / year`,
  },
  {
    title: `Cyber Agent Backend Tuning Competition`,
    period: `June 2020`,
    text: `1st place out of 20 competitors`,
  },
];

const certificatesResources: ReadonlyArray<Resource> = [
  {
    title: `Database Specialist Examination (DB)`,
    period: `December 2020`,
  },
  {
    title: `TOEFL iBT`,
    text: `72 (Reading: 24, Listening 14, Speaking 16, Writing 18)`,
    period: `April 2020`,
  },
  {
    title: `TOEIC`,
    text: `790 (Listening 395, Reading 395)`,
    period: `January 2020`,
  },
  {
    title: `Applied Information Technology Engineer Examination (AP)`,
    period: `December 2019`,
  },
];

const Component: React.FCX = function () {
  return (
    <>
      <section className="my-4 flex items-center text-sm lg:text-base">
        <div className="mx-auto flex flex-col md:flex-row md:space-x-12 lg:md:space-x-20">
          <div className="flex items-center justify-center pb-4 md:pb-0">
            <img
              src="/images/icon.jpg"
              width={256}
              height={256}
              className="h-36 w-36 rounded-full"
              alt="Hayato Tsukagoshi icon"
            />
          </div>
          <div className="mx-auto flex flex-col justify-end space-y-2 p-2 md:pb-0">
            <div>
              4th year Ph.D. student at Graduate School of Informatics,
              NagoyaUniversity, Japan.
              {` `}
              <br className="hidden md:block" />
              <ExternalLink
                href="http://cr.fvcrc.i.nagoya-u.ac.jp/"
                className="inline-block"
              >
                Takeda-Sasano Lab.
              </ExternalLink>
            </div>
            <div>
              <p>Main: tsukagoshi.hayato[at]gmail.com</p>
              <p>Research: research.tsukagoshi.hayato[at]gmail.com</p>
            </div>
            <ExternalLink
              href="https://docs.google.com/document/d/1qvzatUKi2lxxkYgx5s3yCWRabX6pVKTctLlRIwGj5qo/edit?usp=sharing"
              className="inline-block text-base"
            >
              resume
            </ExternalLink>
            <ExternalLink
              href="https://docs.google.com/document/d/1A5q5OJY0BvCIGuQHQCh5b_uiRGAXh59QKeJyFiIb600/edit?usp=sharing"
              className="inline-block text-base"
            >
              CV (Japanese)
            </ExternalLink>
            <ExternalLink
              href="https://twitter.com/hayato_tkgs"
              className="inline-block text-base"
            >
              Twitter
            </ExternalLink>
            <ExternalLink
              href="https://scholar.google.co.jp/citations?user=3xeQ7VYAAAAJ"
              className="inline-block text-base"
            >
              Google Scholar
            </ExternalLink>
            <ExternalLink
              href="https://www.semanticscholar.org/author/Hayato-Tsukagoshi/2090616568"
              className="inline-block text-base"
            >
              Semantic Scholar
            </ExternalLink>
          </div>
        </div>
      </section>
      <ResourcesSection title="Education" resources={educationResources} bold />
      <ResourcesSection
        title="Refereed Publications"
        resources={refereedPublicationsResources}
        bold
      />
      <ResourcesSection
        title="Non-Refereed Publications"
        resources={nonRefereedPublicationsResources}
        bold
      />
      <ResourcesSection
        title="Internships / Employments"
        resources={internsihpsEmploymentsResources}
        bold
      />
      <ResourcesSection
        title="Activities"
        resources={activitiesResources}
        bold
      />
      <ResourcesSection
        title="Awards / Honors"
        resources={awardsHonorsResources}
      />
      <ResourcesSection
        title="Certificates"
        resources={certificatesResources}
      />
    </>
  );
};

const Container: React.FCX = function () {
  return <Component />;
};

export default Container;
