import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "코딩 테스트 노하우",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        취업 성공률을 높이는데 당장 여러분이 컨트롤 할 수 있는건 지원횟수를
        늘리는것이 효과적이에요. 당장 실력을 늘리거나, 채용 프리즈가 풀리는
        외부적인 상황을 기대하는것보다 훨씬 컨트롤 가능 하죠.
      </>
    ),
  },
  {
    title: "웹FE 기술 학습 방법",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        웹 프런트 기술을 가장 빠르게 배울 수 있는 방법은 클론코딩인것 같아요.
        나중에 기술 정리형태의 강의를 듣는것도 필요한데요. 클론코딩이 단기간
        실력상승에 압도적 우위가 있는것 같아요....
      </>
    ),
  },
  {
    title: "자소서/인성 면접 가이드 라인",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        저는 인성 면접을 처음에는 그냥 쉽게 생각했었는데, 아마존 리더십 면접
        후기 아티클을 보고 정말 잘못 생각하고 있었다고 관점이 바뀌었어요. 해당
        아티클을 같이 읽어보면서 짚어볼까요
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
