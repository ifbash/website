const fs=require('fs');const p=require('path');
const base='D:/website/app/portfolio';

// All 38 layout definitions
const layouts={
'it-service-management':{t:'ServiceNow ITSM — AI-Powered IT Service Management | ifBash',d:'Transform IT service delivery with AI-powered incident, problem, and change management. 60% faster resolution, 85% fewer recurring issues. ifBash delivers enterprise ITSM.',k:['ServiceNow ITSM','IT service management','incident management','problem management','change management','ITSM implementation','ITIL ServiceNow']},
'it-operations-management':{t:'ServiceNow ITOM — AI-Powered IT Operations Management | ifBash',d:'Gain full visibility across on-premises and cloud infrastructure. AIOps eliminates 99% of false positives. 60% faster cloud adoption. ifBash delivers enterprise ITOM.',k:['ServiceNow ITOM','IT operations management','ServiceNow Discovery','Service Mapping','AIOps','IT operations visibility','cloud management']},
'it-asset-management':{t:'ServiceNow ITAM — IT Asset Management Consulting | ifBash',d:'Automate the end-to-end lifecycle for software, hardware, and cloud assets. 30-50% cost reduction. 90% risk reduction. ifBash delivers enterprise ITAM.',k:['ServiceNow ITAM','IT asset management','software asset management','hardware asset management','SAM','HAM','license optimization']},
'enterprise-architecture':{t:'ServiceNow EA — Enterprise Architecture Consulting | ifBash',d:'Data-driven insights to assess, monitor, and align your application portfolio to business capabilities. 30% average cost reduction.',k:['ServiceNow enterprise architecture','EA','application rationalization','technology portfolio management','APM','business capability management']},
'service-operations-workspace':{t:'ServiceNow SOW — Unified Service Operations Workspace | ifBash',d:'Predict, prevent, and resolve incidents from a single workspace. 67% fewer incidents. 78% faster MTTR. ifBash delivers unified operations.',k:['ServiceNow SOW','Service Operations Workspace','unified operations','incident management','agent workspace','IT operations']},
'strategic-portfolio-management':{t:'ServiceNow SPM — Strategic Portfolio Management | ifBash',d:'Align your organization on a single platform with 360-degree visibility from strategy to business outcomes. ifBash delivers SPM.',k:['ServiceNow SPM','strategic portfolio management','ITBM','project portfolio management','agile development','demand management','innovation management']},
'digital-end-user-experience':{t:'ServiceNow DEX — Digital End-User Experience Management | ifBash',d:'Measure and continuously improve the technology experience for your employees. 90% employee satisfaction. 80% proactive issue resolution.',k:['ServiceNow DEX','digital end-user experience','employee experience','desktop assistant','DEX score','proactive IT support']},
'cloud-governance-suite':{t:'ServiceNow Cloud Governance — Automated Cloud Compliance | ifBash',d:'Automate cloud governance for compliance, security, and costs. 70% faster compliance reporting. 40% cost optimization.',k:['ServiceNow cloud governance','cloud compliance','cloud security','cloud cost management','multi-cloud governance','cloud automation']},
'servicenow-cloud-observability':{t:'ServiceNow Cloud Observability — Unified Service Visibility | ifBash',d:'Break down monitoring silos and resolve issues faster. 80% faster root cause analysis. 60% reduction in MTTR. ifBash delivers cloud observability.',k:['ServiceNow cloud observability','service observability','SLO','unified monitoring','MTTR reduction','observability platform']},
'operational-technology-management':{t:'ServiceNow OT Management — Industrial Operations Security | ifBash',d:'Gain visibility and context into your OT environment. 85% reduction in downtime. 90% security posture improvement.',k:['ServiceNow OT management','operational technology','industrial security','OT asset management','OT vulnerability response','IT-OT convergence']},
'integration-hub':{t:'ServiceNow Integration Hub — Enterprise Workflow Automation | ifBash',d:'200+ prebuilt connectors. Zero-code spoke generation. Connect ServiceNow to any system in minutes, not months.',k:['ServiceNow Integration Hub','workflow automation','enterprise integration','API integration','spoke generator','iPaaS','ServiceNow connectors']},
'app-engine':{t:'ServiceNow App Engine — Low-Code Application Development | ifBash',d:'Reimagine every process as a digital workflow. Low-code, high velocity. AI-powered development that scales.',k:['ServiceNow App Engine','low-code development','custom apps','Creator Studio','Now Assist','workflow automation','citizen development']},
'customer-service-management':{t:'ServiceNow CSM — AI-Powered Customer Service | ifBash',d:'AI agents operate 24/7. Journey mapping reveals every friction point. 95% CSAT. 80% faster response.',k:['ServiceNow CSM','customer service management','AI agents','customer journey mapping','omnichannel','NPS','virtual agent']},
'field-service-management':{t:'ServiceNow FSM — Intelligent Field Service Management | ifBash',d:'AI-powered scheduling. Mobile-first operations. 70% scheduling efficiency. 60% productivity improvement.',k:['ServiceNow FSM','field service management','dynamic scheduling','mobile workforce','route optimization','dispatcher workspace','preventive maintenance']},
'sales-and-order-management':{t:'ServiceNow SOM — Sales & Order Management | ifBash',d:'Streamline lead-to-cash with AI-powered CPQ and intelligent order management. 40% faster sales cycles. 95% quote accuracy.',k:['ServiceNow SOM','sales order management','lead-to-cash','CPQ','order management','sales automation','omnichannel sales']},
'configure-price-quote':{t:'ServiceNow CPQ — AI-Powered Configure Price Quote | ifBash',d:'AI-powered CPQ that drives omnichannel revenue. 40% faster quote processing. Powers 85% of Fortune 500.',k:['ServiceNow CPQ','configure price quote','guided selling','dynamic pricing','quote automation','subscription management','sales configuration']},
'technology-provider-service-management':{t:'ServiceNow TPSM — Technology Provider Service Management | ifBash',d:'Elevate XaaS customer experience with AI-powered platform. Service Bridge connects your ecosystem.',k:['ServiceNow TPSM','technology provider','XaaS','Service Bridge','customer success','proactive service','technology service management']},
'telecommunications-service-management':{t:'ServiceNow TSM — Telecom Service Management | ifBash',d:'Connect telecom operations from network to customer on a single AI-powered platform. NVIDIA-powered AI.',k:['ServiceNow TSM','telecom service management','CSP','5G service orchestration','NVIDIA AI','OSS/BSS','telecom operations']},
'financial-services-operations':{t:'ServiceNow FSO — Financial Services Operations | ifBash',d:'Connect your entire financial institution. Disputes built with Visa. AI-powered risk and compliance.',k:['ServiceNow FSO','financial services operations','banking operations','disputes management','Visa compliance','payment operations']},
'healthcare-and-life-sciences-service-management':{t:'ServiceNow HCLS — Healthcare & Life Sciences | ifBash',d:'Patient 360. EMR integration. AI-powered healthcare workflows. 90% first-contact resolution.',k:['ServiceNow HCLS','healthcare service management','life sciences','Patient 360','EMR integration','HL7 FHIR','HIPAA compliance']},
'public-sector-digital-services':{t:'ServiceNow PSDS — Public Sector Digital Services | ifBash',d:'Consumer-grade constituent experiences. FedRAMP High authorized. 62 services automated in 2 months.',k:['ServiceNow PSDS','public sector','government digital services','FedRAMP','citizen engagement','government transformation']},
'security-operations':{t:'ServiceNow SecOps — Security Operations Consulting | ifBash',d:'Simplify and automate threat and vulnerability management with AI-powered security operations.',k:['ServiceNow SecOps','security operations','SIR','vulnerability response','threat intelligence','MITRE ATT&CK','security automation']},
'security-incident-response':{t:'ServiceNow SIR — Security Incident Response | ifBash',d:'Respond rapidly to evolving threats with MITRE ATT&CK integration and AI-powered incident response.',k:['ServiceNow SIR','security incident response','MITRE ATT&CK','SOC automation','incident management','threat response']},
'vulnerability-response':{t:'ServiceNow VR — Vulnerability Response Management | ifBash',d:'Prioritize and respond to vulnerabilities with risk-based management and threat intelligence.',k:['ServiceNow VR','vulnerability response','risk-based prioritization','patch orchestration','container security','vulnerability management']},
'threat-intelligence-security-center':{t:'ServiceNow TISC — Threat Intelligence Security Center | ifBash',d:'Gain advanced threat intelligence with threat hunting, modeling, and analysis built into ServiceNow.',k:['ServiceNow TISC','threat intelligence','threat hunting','threat modeling','IOC','MITRE ATT&CK','security analytics']},
'integrated-risk-management':{t:'ServiceNow IRM — Integrated Risk Management | ifBash',d:'Make risk-informed decisions and increase efficiency with integrated risk management.',k:['ServiceNow IRM','integrated risk management','GRC','policy compliance','operational risk','audit management','regulatory change']},
'third-party-risk-management':{t:'ServiceNow TPRM — Third-Party Risk Management | ifBash',d:'Take control of the third-party risk lifecycle from onboarding to retirement.',k:['ServiceNow TPRM','third-party risk management','vendor risk','supplier risk','concentration risk','risk intelligence','VRM']},
'security-posture-control':{t:'ServiceNow SPC — Security Posture Control | ifBash',d:'Get 360-degree visibility into your attack surface. Detect and remediate security control gaps.',k:['ServiceNow SPC','security posture control','attack surface','security control gaps','CMDB security','vulnerability prioritization']},
'privacy-management':{t:'ServiceNow Privacy Management — Data Privacy Compliance | ifBash',d:'Identify and manage privacy risks across the enterprise with workflow automation.',k:['ServiceNow privacy management','GDPR','CCPA','HIPAA','privacy compliance','data protection','ROPA','PIA']},
'hr-service-delivery':{t:'ServiceNow HRSD — HR Service Delivery Consulting | ifBash',d:'Improve productivity with AI-driven self-service and streamlined HR case resolution.',k:['ServiceNow HRSD','HR service delivery','employee center','employee journey','HR automation','virtual agent','knowledge management']},
'talent-development':{t:'ServiceNow Talent Development — Skills Intelligence | ifBash',d:'Gain insights into workforce skills. Empower people to own their growth with AI and skills intelligence.',k:['ServiceNow talent development','skills intelligence','career hub','manager hub','opportunity marketplace','workforce planning']},
'legal-service-delivery':{t:'ServiceNow LSD — Legal Service Delivery | ifBash',d:'Transform legal operations with comprehensive automation and real-time insights.',k:['ServiceNow LSD','legal service delivery','contract management','matter management','legal operations','legal portal','compliance']},
'workplace-service-delivery':{t:'ServiceNow WSD — Workplace Service Delivery | ifBash',d:'Make it easy for employees to reserve, navigate, and request service for any space.',k:['ServiceNow WSD','workplace service delivery','space management','facilities management','workplace reservation','intelligent building','hybrid work']},
'accounts-payable-operations':{t:'ServiceNow AP Operations — Accounts Payable Automation | ifBash',d:'Streamline accounts payable processes. Pay suppliers confidently and accurately with AI-powered automation.',k:['ServiceNow AP operations','accounts payable','invoice automation','document intelligence','payment operations','supplier management']},
'sourcing-and-procurement-operations':{t:'ServiceNow SPO — Sourcing & Procurement Operations | ifBash',d:'Deliver a streamlined buying experience with self-service procurement and intelligent automation.',k:['ServiceNow SPO','sourcing procurement','ShoppingHub','procurement automation','purchase requests','supplier management']},
'supplier-lifecycle-operations':{t:'ServiceNow SLO — Supplier Lifecycle Operations | ifBash',d:'Create a unified digital experience for teams and suppliers from onboarding to ongoing engagement.',k:['ServiceNow SLO','supplier lifecycle','supplier onboarding','supplier portal','supplier collaboration','vendor management']},
'sales-and-order-management-for-technology-providers':{t:'ServiceNow SOM for Technology Providers — Sales & Order | ifBash',d:'Streamline lead-to-cash for technology providers with AI-powered CPQ and intelligent order management.',k:['ServiceNow SOM','technology providers','lead-to-cash','CPQ','order management','sales automation','XaaS']},
'sales-and-order-management-for-telecommunications':{t:'ServiceNow SOM for Telecom — Sales & Order Management | ifBash',d:'Streamline lead-to-cash for telecommunications with AI-powered CPQ and intelligent order management.',k:['ServiceNow SOM','telecom','lead-to-cash','CPQ','order management','CSP','sales automation']}
};

for(const slug of Object.keys(layouts)){
  const d=layouts[slug];
  const kwStr=d.k.map(x=>`    '${x}'`).join(',\n');
  const content=`import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${d.t}',
  description: '${d.d}',
  keywords: [
${kwStr}
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: '${d.t}',
    description: '${d.d}',
    url: 'https://ifbash.com/portfolio/${slug}',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/${slug}' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`;
  const fp=p.join(base,slug,'layout.tsx');
  fs.writeFileSync(fp,content,'utf8');
  console.log('OK: '+slug);
}
console.log('All 38 layouts fixed!');
