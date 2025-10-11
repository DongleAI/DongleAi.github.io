import { motion } from 'framer-motion';
import AiNav from '../components/AiNav';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const Section = ({ id, title, children }) => (
  <motion.section 
    id={id}
    variants={fadeInUp} 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true, amount: 0.1 }}
    className="py-12 border-b border-slate-800 last:border-b-0"
  >
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{title}</h2>
    <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-4">
      {children}
    </div>
  </motion.section>
);

const SubSection = ({ title, children }) => (
  <div className="mt-8">
    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">{title}</h3>
    <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-4">
      {children}
    </div>
  </div>
);

export default function TermsPage() {
  const navItems = [
    { id: 'introduction', label: "소개" },
    { id: 'relationship', label: "사용자와 Google의 관계" },
    { id: 'using_services', label: "Google 서비스 이용" },
    { id: 'content_in_services', label: "Google 서비스의 콘텐츠" },
    { id: 'software_in_services', label: "Google 서비스의 소프트웨어" },
    { id: 'problems_disagreements', label: "문제 또는 의견 불일치가 있는 경우" },
    { id: 'about_terms', label: "이 약관에 대하여" }
  ];

  const renderList = (items) => (
    <ul className="list-disc pl-5 space-y-2">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <header className="px-6 py-24 sm:py-32 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-slate-400">국가 버전: 대한민국</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-white">Google 서비스 약관</h1>
          <p className="mt-4 text-sm text-slate-500">
            발효일: 2024년 5월 22일 | <a href="#" className="underline hover:text-white">보관처리된 버전</a> | <a href="#" className="underline hover:text-white">PDF 다운로드</a>
          </p>
        </div>
      </header>

      <AiNav items={navItems} />

      <main className="max-w-4xl mx-auto px-6">
        <Section id="introduction" title="이 약관의 내용">
          <p>이 서비스 약관을 건너뛰고 싶으시겠지만, Google 서비스를 이용하면서 Google에 기대할 수 있는 것과 Google이 사용자에게 기대하는 것을 명확히 하는 것이 중요합니다.</p>
          <p>이 서비스 약관은 Google의 비즈니스 방식, 회사에 적용되는 법률, 그리고 Google이 항상 사실이라고 믿어온 특정 사항을 반영합니다. 결과적으로 이 서비스 약관은 사용자가 Google 서비스와 상호작용할 때 Google과 사용자의 관계를 정의하는 데 도움이 됩니다. 예를 들어, 이 약관에는 다음과 같은 주제 제목이 포함됩니다.</p>
          {renderList([
            "Google이 서비스를 제공하고 개발하는 방법을 설명하는 Google에 기대할 수 있는 것",
            "Google 서비스 이용에 대한 특정 규칙을 설정하는 Google이 사용자에게 기대하는 것",
            "Google 서비스에서 찾는 콘텐츠에 대한 지적 재산권을 설명하는 Google 서비스의 콘텐츠 — 해당 콘텐츠가 사용자, Google 또는 다른 사람의 소유인지 여부",
            "사용자가 가진 다른 법적 권리와 누군가 이 약관을 위반할 경우 예상되는 결과를 설명하는 문제 또는 의견 불일치가 있는 경우"
          ])}
          <p>이 약관을 이해하는 것이 중요합니다. Google 서비스에 액세스하거나 이용함으로써 이 약관에 동의하는 것이기 때문입니다.</p>
          <p>이 약관 외에도 Google은 개인정보처리방침을 게시합니다. 이 약관의 일부는 아니지만, 정보를 업데이트, 관리, 내보내기 및 삭제하는 방법을 더 잘 이해하기 위해 읽어보시기 바랍니다.</p>
        </Section>

        <Section id="relationship" title="사용자와 Google의 관계">
            <p>이 약관은 사용자와 Google 간의 관계를 정의하는 데 도움이 됩니다. 'Google', '우리', '저희'라고 말할 때 Google LLC 및 그 계열사를 의미합니다. 대체로, Google의 비즈니스 방식과 수익 창출 방식을 반영하는 이 약관을 따르는 데 동의하면 Google 서비스에 액세스하고 이용할 수 있는 권한을 부여합니다.</p>
        </Section>

        <Section id="using_services" title="Google 서비스 이용">
            <SubSection title="귀하의 Google 계정">
                <p>이러한 연령 요건을 충족하는 경우 편의를 위해 Google 계정을 만들 수 있습니다. 일부 서비스는 작동하기 위해 Google 계정이 필요합니다. 예를 들어, Gmail을 사용하려면 이메일을 보내고 받을 장소가 필요하므로 Google 계정이 필요합니다.</p>
                <p>귀하는 Google 계정을 안전하게 유지하기 위한 합리적인 조치를 취하는 것을 포함하여 Google 계정으로 수행하는 모든 활동에 대한 책임이 있으며, 정기적으로 보안 진단을 사용하는 것이 좋습니다.</p>
            </SubSection>
            <SubSection title="조직 또는 비즈니스를 대신하여 Google 서비스 이용">
                <p>비즈니스, 비영리 단체, 학교와 같은 많은 조직이 Google 서비스를 이용합니다. 조직을 대신하여 Google 서비스를 이용하려면:</p>
                {renderList([
                  "해당 조직의 권한 있는 대표자가 이 약관에 동의해야 합니다.",
                  "조직의 관리자가 귀하에게 Google 계정을 할당할 수 있습니다. 해당 관리자는 귀하에게 추가 규칙을 따르도록 요구할 수 있으며 귀하의 Google 계정에 액세스하거나 비활성화할 수 있습니다."
                ])}
            </SubSection>
            <SubSection title="서비스 관련 커뮤니케이션">
                <p>서비스를 제공하기 위해 때때로 서비스 공지 및 기타 정보를 보냅니다. Google이 귀하와 소통하는 방법에 대해 자세히 알아보려면 Google의 개인정보처리방침을 참조하십시오.</p>
                <p>서비스 개선을 위한 제안과 같이 피드백을 제공하기로 선택한 경우, Google은 귀하에 대한 의무 없이 귀하의 피드백에 따라 조치를 취할 수 있습니다.</p>
            </SubSection>
        </Section>

        <Section id="content_in_services" title="Google 서비스의 콘텐츠">
            <SubSection title="귀하의 콘텐츠">
                <p>일부 Google 서비스에서는 독창적인 콘텐츠를 생성할 수 있습니다. Google은 해당 콘텐츠에 대한 소유권을 주장하지 않습니다.</p>
                <p>일부 Google 서비스에서는 콘텐츠를 공개적으로 제공할 수 있는 기회를 제공합니다. 예를 들어, 작성한 제품이나 레스토랑 리뷰를 게시하거나 만든 블로그 게시물을 업로드할 수 있습니다.</p>
                <p>콘텐츠에 대한 귀하의 권리와 서비스에서 콘텐츠가 사용되는 방식에 대한 자세한 내용은 콘텐츠 사용 허가 섹션을 참조하십시오.</p>
                <p>서비스에서 사용자 생성 콘텐츠를 제거할 수 있는 이유와 방법에 대한 자세한 내용은 콘텐츠 제거 섹션을 참조하십시오.</p>
                <p>누군가 귀하의 지적 재산권을 침해하고 있다고 생각되면 침해 사실을 통지할 수 있으며 Google은 적절한 조치를 취합니다. 예를 들어, 저작권 도움말 센터에 설명된 대로 반복적인 저작권 침해자의 Google 계정을 정지하거나 해지합니다.</p>
            </SubSection>
            <SubSection title="Google 콘텐츠">
                <p>일부 Google 서비스에는 Google 소유의 콘텐츠가 포함되어 있습니다. 예를 들어, Google 지도에서 볼 수 있는 많은 시각적 삽화가 있습니다. 귀하는 이 약관 및 모든 서비스별 추가 약관에서 허용하는 대로 Google의 콘텐츠를 사용할 수 있지만, Google은 콘텐츠에 대한 모든 지적 재산권을 보유합니다. Google의 브랜딩, 로고 또는 법적 고지를 제거, 가리기 또는 변경하지 마십시오. Google의 브랜딩이나 로고를 사용하려면 Google 브랜드 허가 페이지를 참조하십시오.</p>
            </SubSection>
            <SubSection title="기타 콘텐츠">
                <p>마지막으로, 일부 Google 서비스에서는 다른 사람이나 조직의 콘텐츠에 액세스할 수 있습니다. 예를 들어, 상점 주인이 자신의 비즈니스에 대해 설명하거나 Google 뉴스에 표시되는 신문 기사입니다. 귀하는 해당 개인이나 조직의 허락 없이 또는 법에서 허용하는 경우를 제외하고는 이 콘텐츠를 사용할 수 없습니다. 다른 사람이나 조직의 콘텐츠에 표현된 견해는 그들의 것이며 반드시 Google의 견해를 반영하는 것은 아닙니다.</p>
            </SubSection>
        </Section>

        <Section id="software_in_services" title="Google 서비스의 소프트웨어">
            <p>일부 Google 서비스에는 다운로드 가능하거나 사전 로드된 소프트웨어가 포함되어 있습니다. Google은 서비스의 일부로 해당 소프트웨어를 사용할 수 있는 권한을 부여합니다.</p>
            <p>Google이 귀하에게 부여하는 라이선스는 다음과 같습니다.</p>
            {renderList([
              "전 세계적, 즉 전 세계 어디에서나 유효합니다.",
              "비독점적, 즉 Google이 다른 사람에게 소프트웨어를 라이선스할 수 있습니다.",
              "로열티 프리, 즉 이 라이선스에 대한 금전적 수수료가 없습니다.",
              "개인적, 즉 다른 사람에게 확장되지 않습니다.",
              "양도 불가, 즉 다른 사람에게 라이선스를 양도할 수 없습니다."
            ])}
            <p>일부 Google 서비스에는 Google이 귀하에게 제공하는 오픈 소스 라이선스 조건에 따라 제공되는 소프트웨어가 포함되어 있습니다. 때로는 오픈 소스 라이선스에 이 약관의 일부를 명시적으로 재정의하는 조항이 있으므로 해당 라이선스를 반드시 읽어보십시오.</p>
            <p>귀하는 Google 서비스나 소프트웨어의 일부를 복사, 수정, 배포, 판매 또는 임대할 수 없습니다.</p>
        </Section>

        <Section id="problems_disagreements" title="문제 또는 의견 불일치가 있는 경우">
            <p>법률과 이 약관 모두 귀하에게 (1) 특정 품질의 서비스와 (2) 문제가 발생했을 때 문제를 해결할 수 있는 방법을 제공할 권리를 부여합니다.</p>
            {/* Further subsections can be added here if needed */}
        </Section>

        <Section id="about_terms" title="이 약관에 대하여">
            <p>법률에 따라 귀하는 이 서비스 약관과 같은 계약에 의해 제한될 수 없는 특정 권리를 가집니다. 이 약관은 어떠한 방식으로도 해당 권리를 제한하기 위한 것이 아닙니다.</p>
            <p>이 약관은 귀하와 Google 간의 관계를 설명합니다. 다른 사람이 이 약관에 따라 해당 관계로부터 이익을 얻더라도 다른 사람이나 조직에 대한 법적 권리를 생성하지 않습니다.</p>
            <p>Google은 이 약관을 이해하기 쉽게 만들고 싶어서 서비스의 예를 사용했습니다. 그러나 언급된 모든 서비스가 귀하의 국가에서 사용 가능한 것은 아닐 수 있습니다.</p>
            <p>이 약관이 서비스별 추가 약관과 충돌하는 경우, 해당 서비스에 대해서는 추가 약관이 우선합니다.</p>
            <p>특정 약관이 유효하지 않거나 시행할 수 없는 것으로 판명되더라도 다른 약관에는 영향을 미치지 않습니다.</p>
            <p>귀하가 이 약관 또는 서비스별 추가 약관을 따르지 않고 Google이 즉시 조치를 취하지 않는다고 해서, 향후 조치를 취하는 것과 같이 Google이 가질 수 있는 모든 권리를 포기하는 것을 의미하지는 않습니다.</p>
            <p>Google은 (1) 서비스 또는 비즈니스 방식의 변경 사항을 반영하기 위해(예: 새로운 서비스, 기능, 기술, 가격 또는 혜택을 추가하거나 기존 것을 제거할 때), (2) 법적, 규제 또는 보안상의 이유로, 또는 (3) 남용이나 해를 방지하기 위해 이 약관 및 서비스별 추가 약관을 업데이트할 수 있습니다.</p>
            <p>Google이 이 약관 또는 서비스별 추가 약관을 중대하게 변경하는 경우, (1) 사용자에게 유리한 새로운 서비스나 기능을 출시할 때, 또는 (2) 지속적인 남용을 방지하거나 법적 요건에 대응하는 등 긴급한 상황을 제외하고 30일 전에 사전 통지하고 변경 사항을 검토할 기회를 제공합니다. 새로운 약관에 동의하지 않으면 콘텐츠를 제거하고 서비스 이용을 중단해야 합니다. 언제든지 Google 계정을 해지하여 Google과의 관계를 종료할 수도 있습니다.</p>
        </Section>

      </main>
    </div>
  );
}
