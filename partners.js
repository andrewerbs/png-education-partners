// PNG Education Partnership Mapping 2025
// Source of truth: NDoE-endorsed final report (Feb 2026)
// All 22 provinces + NCD
const PROVINCES = [
  "Bougainville (AROB)", "Central", "Chimbu (Simbu)", "East New Britain", "East Sepik",
  "Eastern Highlands", "Enga", "Gulf", "Hela", "Jiwaka", "Madang", "Manus", "Milne Bay",
  "Morobe", "National Capital District", "New Ireland", "Northern (Oro)", "Sandaun (West Sepik)",
  "Southern Highlands", "Western", "Western Highlands", "West New Britain"
];

const FOCUS_AREAS = [
  "Early Childhood Education", "Primary/Elementary", "Secondary", "TVET",
  "Teacher Training", "Tertiary/Scholarships", "Curriculum", "Infrastructure",
  "Inclusive Education", "Girls' Education / Gender", "Literacy/Numeracy",
  "Digital Learning / EdTech", "Emergency Response", "System Strengthening", "WASH"
];

const PARTNERS = [
  // ===================== BILATERAL =====================
  {
    id: "australia-dfat",
    name: "Australia (DFAT)",
    category: "Bilateral",
    orgType: "Foreign Government",
    role: "Donor",
    partnerSince: 1975,
    flagshipFunding: "~AUD 100M annually",
    logo: "assets/logos/australia-dfat.png",
    about: "Australia, through the Department of Foreign Affairs and Trade (DFAT), is Papua New Guinea's largest development partner and plays a pivotal role in PNG's education sector. The partnership began at PNG's independence in 1975 and has evolved into a comprehensive strategic relationship spanning all education levels. DFAT views education as essential for building PNG's human capital and long-term prosperity, with support underpinned by high-level bilateral agreements, including the PNG-Australia Comprehensive Strategic and Economic Partnership (CSEP, 2020) and the Australia-PNG Development Partnership Plan (DPP, 2024-29). Australia's approach focuses on inclusive and equitable improvement of learning outcomes, targeting critical challenges such as low literacy/numeracy rates, gender disparities, and rural access barriers through close collaboration with PNG's National Department of Education.",
    coordination: [
      { name: "PNG-Australia Ministerial Forum", description: "Annual high-level policy dialogue and commitment review" },
      { name: "LEG meetings", description: "Active participant in Local Education Group coordination" }
    ],
    programs: [
      { name: "Partnerships for Improving Education", funding: "AUD 75M over 5 years (2022-2027)", desc: "Australia's flagship 5-year early grades program improving student learning outcomes and school attendance for children in Prep-Grade 2, with a particular focus on girls and children with disabilities across four target subnational locations." },
      { name: "Pacific Australia Skills (PAS)", funding: "AUD 229M regionally (2025-2029)", desc: "Australia's regional program supporting skills for inclusive employment. Focuses on partnering with local institutions to deliver training to support international labour mobility opportunities and other Australian regional initiatives." },
      { name: "PNG Secondary Education Program", funding: "A$25M ≈ PGK 77M (2026-2029)", desc: "Secondary education program targeting high-performing schools to boost STEM outcomes through teacher development, promote leadership, student safety, climate resilience and build links between Australia and PNG's education systems." },
      { name: "Global Partnership for Education Programs", funding: "AUD 169M ≈ PGK 521M total funding for global programs for 2021-25 period", desc: "Bilateral donor and GPE board member, supporting teacher training, textbook distribution and systems strengthening." },
      { name: "Australia Awards PNG", funding: "Ongoing — over 6,500 scholarship recipients since 2012", desc: "Comprehensive scholarship program providing annual awards for tertiary studies in Australia and PNG, as well as short-term professional development studies targeting future leaders across priority development sectors." },
      { name: "PNG-Australia Incentive Fund", funding: "AUD 90.8M ≈ PGK 275M education component since 2000", desc: "Infrastructure development program providing grants for education facility upgrades from primary schools to universities, including classrooms, laboratories, dormitories and teacher housing." },
      { name: "Strongim Wok Long TVET (SWLT) program", funding: "AUD 80M (2025-2029)", desc: "Program supporting improvements in the TVET sector to help more Papua New Guineans gain skills that match workforce needs, including through curriculum development, teacher training, enhanced industry links, scholarships for women and persons with disabilities, and inclusive learning environments through wraparound support services for students." }
    ],
    provinces: ["all"],
    focusAreas: ["Early Childhood Education", "Primary/Elementary", "Secondary", "TVET", "Teacher Training", "Tertiary/Scholarships", "Infrastructure", "Inclusive Education", "Girls' Education / Gender", "System Strengthening"],
    strategic: [
      { title: "Largest education donor", detail: "Providing nearly A$100 million annually with commitment to further scale-up, representing PNG's most substantial education partnership" },
      { title: "Comprehensive coverage", detail: "Supporting all education levels from early childhood through higher education with an integrated approach addressing teacher training, curriculum, infrastructure, and policy" },
      { title: "Geographic equity focus", detail: "Balancing national system support with targeted interventions in remote and underserved communities, including innovative approaches in challenging environments" },
      { title: "Long-term institutional partnerships", detail: "50-year relationship enabling deep collaboration on education reform, policy development, and sustainable capacity building within PNG systems" },
      { title: "Scholarship excellence", detail: "Developing PNG's future leaders, including in education, through prestigious tertiary education opportunities, with over 6,500 scholarship recipients since 2012 contributing to PNG's development across all sectors" }
    ]
  },
  {
    id: "uk-fcdo",
    name: "British High Commission (FCDO)",
    category: "Bilateral",
    orgType: "Foreign Government",
    role: "Donor",
    partnerSince: 1975,
    flagshipFunding: "Largest bilateral GPE donor 2021-25",
    logo: "assets/logos/uk-fcdo.png",
    about: "The British High Commission was established in Papua New Guinea in 1975, coinciding with PNG's independence, and has maintained diplomatic and development relations since then. The UK government operates as a bilateral donor with a targeted but strategic approach, focusing primarily on multilateral funding through the Global Partnership for Education and prestigious scholarship programs. While not among the largest donors by volume, the UK's contributions complement those of other donors by leveraging global partnerships and emphasising girls' education, human capital development, and system-strengthening approaches that align with PNG's development priorities.",
    coordination: [
      { name: "LEG meetings", description: "Active participant in Local Education Group coordination" },
      { name: "Education Ministers' 2025 annual meetings in London", description: "" },
      { name: "Conference of Pacific Education Ministers 2025", description: "" }
    ],
    programs: [
      { name: "Global Partnership for Education Programs", funding: "US$40.6M total funding for global programs since 2010", desc: "Bilateral donor contribution to GPE supporting teacher training, textbook distribution, and system strengthening reaching 3,500+ schools." },
      { name: "British Council Teacher Training & Support", funding: "UK Government funded (2023-2025)", desc: "English teachers and education leaders, enhanced teacher capacity in English and inclusive education." },
      { name: "Chevening and Commonwealth Scholarship Programmes", funding: "PGK 333,577 annually, ongoing", desc: "Fully funded postgraduate Masters degrees at UK universities for future leaders." },
      { name: "Commonwealth Scholarship Scheme", funding: "Ongoing", desc: "Merit-based postgraduate scholarships covering PhD, Masters and Fellowship programs in priority development areas." }
    ],
    provinces: ["all"],
    focusAreas: ["Teacher Training", "Tertiary/Scholarships", "Girls' Education / Gender", "Inclusive Education", "System Strengthening"],
    strategic: [
      { title: "Largest bilateral donor to GPE globally 2021-25 (PGK 2.35 billion)", detail: "Enabling nationwide teacher training and textbook distribution reaching over 3,500 schools" },
      { title: "Major investor in World Bank IDA 2025-28 (PGK 9.7 billion)", detail: "Supporting large-scale education infrastructure and learning enhancement projects" },
      { title: "Offering international scholarship opportunities that develop PNG's future education", detail: "Leaders and policy makers through world-class UK university programs" },
      { title: "Long-term institutional partnerships", detail: "50-year relationship enabling deep collaboration on education reform, policy development, and sustainable capacity building within PNG systems" },
      { title: "Leveraging diplomatic networks and technical expertise to facilitate knowledge exchange", detail: "Complement other donors' infrastructure investments, and promote evidence-based approaches to girls' education and inclusive learning" }
    ]
  },
  {
    id: "indonesia",
    name: "Indonesia",
    category: "Bilateral",
    orgType: "Foreign Government",
    role: "Donor",
    partnerSince: 1997,
    flagshipFunding: "2,000 scholarships (2023-28)",
    logo: "assets/logos/indonesia.png",
    about: "Indonesia has emerged as a significant development partner for Papua New Guinea's education sector, particularly since establishing Indonesian AID in 2019. Through South-South cooperation initiatives, Indonesia emphasises \"equality, mutual benefit, and the pursuit of global prosperity\" in its development approach. The partnership, formalised through education cooperation frameworks dating back to 1997, has dramatically expanded since 2023 with major scholarship programs and infrastructure investments, positioning Indonesia as a key contributor to PNG's human capital development goals.",
    coordination: [
      { name: "Joint Ministerial Committee (JMC)", description: "Meeting in March 2023 focused on education cooperation" },
      { name: "Bilateral Leaders' Dialogues", description: "Significant education commitments agreed in July 2023" },
      { name: "Framework Agreement on Development and Technical Cooperation", description: "" }
    ],
    programs: [
      { name: "I2,000 Scholarships Initiative (TIAS & KNB Scholarship Schemes)", funding: "Launch July 2023; implementation 2023-28, scholarships continuing beyond 2025", desc: "A major education cooperation framework and political commitment providing fully funded Diploma, Undergraduate, Master's, and Doctoral (PhD) degree opportunities for up to 2,000 Papua New Guinean students at Indonesian universities. This initiative consolidates the Indonesian Aid Scholarship Program (TIAS) and the KNB Scholarship Scheme, targeting young public servants, educators, professionals, and high-performing school leavers, with mandatory Indonesian language preparatory studies and priority fields aligned with PNG's national development needs, including engineering, agriculture, education, medicine, & other strategic sectors." },
      { name: "Wutung Primary School Renovation", funding: "PGK 5M from PGK 60M grant package, completed 2024", desc: "Infrastructure development improving basic education facilities in PNG's border area (West Sepik Province), including school reconstruction and electricity infrastructure provision." },
      { name: "Basic and Secondary Education MoU Programs", funding: "Signed 2023, ongoing", desc: "Framework facilitating teacher exchanges, curriculum development support, and sister-school relationships between PNG and Indonesian institutions at Basic, primary and secondary levels as well as TVET." }
    ],
    provinces: ["Sandaun (West Sepik)"],
    focusAreas: ["Tertiary/Scholarships", "Primary/Elementary", "Secondary", "TVET", "Curriculum", "Infrastructure"],
    strategic: [
      { title: "Large-scale scholarship provision", detail: "Addressing skills gaps via 2,000 tertiary scholarships targeting PNG's need for professionals in education, engineering, health fields" },
      { title: "South-South cooperation model", detail: "Development based on equality and mutual benefit, providing PNG with diversified international partnerships beyond traditional donors" },
      { title: "Border community development", detail: "Targeted infrastructure investments improving educational access in remote West Sepik areas while strengthening bilateral relations" },
      { title: "Alternative tertiary pathways", detail: "Complementing traditional donor support with diverse international education exposure and qualifications at Indonesian universities" },
      { title: "Multi-level institutional linkages", detail: "MoUs covering basic, secondary, and higher education enabling knowledge exchange and capacity building across all education levels" }
    ]
  },
  {
    id: "jica",
    name: "Japan (JICA)",
    category: "Bilateral",
    orgType: "Foreign Government",
    role: "Donor",
    partnerSince: 1974,
    flagshipFunding: "GPE coordinating agency (~US$40.7M)",
    logo: "assets/logos/jica.png",
    about: "Japan International Cooperation Agency has been operating in Papua New Guinea since 1974, making it one of the longest-serving development partners in the country. JICA formally established relations with the National Department of Education in 1980 and has since become a cornerstone of PNG's education development. The agency focuses on technical cooperation, capacity building, and sustainable development aligned with PNG's national priorities. Since 2022, JICA serves as the coordinating agency for the Global Partnership for Education in PNG, stewarding dialogue between the National Department of Education and international partners while promoting transparent, participatory approaches. JICA's mission aligns with improving access to and quality of basic education, supporting PNG's goals of achieving universal basic education and implementing the Standards-Based Curriculum.",
    coordination: [
      { name: "LEG meetings", description: "Active participant in Local Education Group coordination" },
      { name: "Education Donor Partner Coordination Committee (EDPaCC) meetings", description: "" },
      { name: "SEOC meetings", description: "Participates in sector oversight and coordination" }
    ],
    programs: [
      { name: "Quality Improvement of Mathematics and Science Education (QUISME)", funding: "¥581M + K1.5M, 2016-2019 (completed)", desc: "Developed PNG's first national textbooks for Grades 3-6 mathematics and science, training curriculum writers and teachers." },
      { name: "Strengthening Primary Teacher Pre-service Education in Mathematics and Science (STEPMAS)", funding: "¥466M ≈ US$4.2M (2021-2025)", desc: "Develops lecturer manuals and student-teacher modules across 15 primary teacher colleges, training 25 lecturers and creating 720 maths and 360 science lesson plans." },
      { name: "Enhancing Quality in Teaching through TV (EQUITV Phase 1 & 2)", funding: "Phase 1: 2005-2008; Phase 2: ¥504M + ¥71.8M equipment grant (2012-2015)", desc: "Pioneered distance education via television, establishing National Education Media Centre and broadcasting quality lessons nationwide." },
      { name: "Japanese Volunteer Program", funding: "Ongoing, in-kind human resources", desc: "Over 800 Japanese volunteers dispatched since 1980s, serving as teachers and technical experts in schools nationwide." },
      { name: "Grassroots Human Security Projects", funding: "¥34M (2011-2014), continuing ¥5-10M annually", desc: "Community-level education infrastructure including classroom construction, equipment provision, and facility upgrades." },
      { name: "National Fisheries College Upgrade", funding: "Grant aid signed June 2025, implementation 2025-2027", desc: "Modernizing facilities and training equipment for fisheries and marine resource training." },
      { name: "Boosting Education Standards Together (BEST PNG)", funding: "US$10.5M of US$21M total via GPE Multiplier (~2019-2022)", desc: "Multi-donor program targeting 870,000 students through improved math/science education, with Japan contributing US$10.5M via GPE Multiplier mechanism." }
    ],
    provinces: ["all"],
    focusAreas: ["Primary/Elementary", "Teacher Training", "Curriculum", "Infrastructure", "Digital Learning / EdTech", "TVET", "System Strengthening"],
    strategic: [
      { title: "GPE coordination leadership", detail: "Serves as coordinating agency managing nearly $40.7 million in total GPE support, facilitating donor harmonisation and reducing duplication" },
      { title: "Technical excellence in STEM education", detail: "Pioneering curriculum development, textbook creation, and teacher training methodologies specifically for mathematics and science education" },
      { title: "Innovation in distance learning", detail: "First to establish educational television broadcasting in PNG, providing scalable solutions for remote area education delivery" },
      { title: "Comprehensive multi-level approach", detail: "Integrates policy support, infrastructure development, capacity building, and grassroots initiatives for systemic education strengthening" },
      { title: "Sustainable institutional capacity building", detail: "Focus on training local educators and developing PNG systems for long-term sustainability beyond project cycles" }
    ]
  },
  {
    id: "nz-mfat",
    name: "New Zealand (MFAT)",
    category: "Bilateral",
    orgType: "Foreign Government",
    role: "Donor",
    partnerSince: 1975,
    flagshipFunding: "NZ$4-5M annually + program funds",
    logo: "assets/logos/nz-mfat.png",
    about: "The New Zealand Ministry of Foreign Affairs and Trade (MFAT) has been a steadfast development partner in Papua New Guinea's education sector since PNG's independence in 1975. MFAT positions itself as a targeted, niche donor that complements larger partners by focusing on human capital development, innovation pilots, and filling critical gaps. Through its Pacific-focused approach, New Zealand emphasises quality education, inclusive learning, and sustainable capacity building as cornerstones of PNG's development journey.",
    coordination: [
      { name: "Pacific Regional Education Framework", description: "Co-financier program of implementation regionally" }
    ],
    programs: [
      { name: "Manaaki New Zealand Scholarships Programme", funding: "~NZ$4-5M annually, ongoing", desc: "Provides full tertiary scholarships for Papua New Guineans to study in New Zealand, with 570+ graduates since the 1970s and 71 current scholars. Focus areas include education, health, agriculture, and public administration." },
      { name: "MFAT-UNICEF Pacific Early Childhood Development Partnership", funding: "New Zealand provides 80% of program funding (2021-2026)", desc: "Establishes early childhood education centers, WASH facilities in schools, and child protection services across Morobe, Eastern Highlands, East Sepik, Western Highlands, Simbu, Central, and Gulf provinces." },
      { name: "Partnership for Open, Distance and Flexible Learning (ODFL)", funding: "NZ$10M regional (2020-2025)", desc: "Strengthens digital learning through teacher training, education hubs with internet connectivity, and youth skills development. Has trained 384+ PNG teachers in online pedagogy across Jiwaka, Morobe, Madang, Eastern Highlands, and Southern Highlands." },
      { name: "Inclusive Education Initiative", funding: "MFAT Manaaki fund (2019-2022)", desc: "Through CBM New Zealand and Callan Services, established Inclusive Education Resource Centres supporting children with disabilities in Madang, East Sepik, Western Highlands, Central, and Bougainville. Trained 85 mainstream teachers and enrolled 120+ children with disabilities in regular schools." }
    ],
    provinces: ["Bougainville (AROB)", "Central", "East Sepik", "Eastern Highlands", "Gulf", "Jiwaka", "Madang", "Morobe", "Chimbu (Simbu)", "Southern Highlands", "Western Highlands"],
    focusAreas: ["Early Childhood Education", "Teacher Training", "Tertiary/Scholarships", "Inclusive Education", "Digital Learning / EdTech", "WASH"],
    strategic: [
      { title: "Niche expertise in teacher quality", detail: "Pioneering in-service teacher mentoring, digital professional development, and innovative pedagogical approaches" },
      { title: "Early childhood education leadership", detail: "Catalyzing PNG's recognition of preschool education through successful community-based ECCE pilots" },
      { title: "Technology and innovation focus", detail: "Leveraging digital learning solutions to bridge geographic gaps and improve access in remote areas" },
      { title: "Long-term human capital investment", detail: "Building PNG's future leaders through 50+ years of scholarship programs with strong alumni networks" },
      { title: "Evidence-based policy support", detail: "Contributing to global education monitoring and strengthening PNG's data systems for informed decision-making" }
    ]
  },
  {
    id: "china-prc",
    name: "People's Republic of China (PRC)",
    category: "Bilateral",
    orgType: "Foreign Government",
    role: "Donor",
    partnerSince: 1976,
    flagshipFunding: "~1,000 PNG scholarship beneficiaries",
    logo: "assets/logos/china-prc.png",
    about: "China has been a significant development partner in PNG's education sector since diplomatic relations began in 1976, framing its support as part of human resource development and bilateral cooperation. As PNG's largest Pacific development partner, China emphasises capacity-building through its \"teaching a man to fish\" philosophy, combining grant aid with people-to-people exchanges. Under the Belt and Road Initiative (which PNG joined in 2018), education features prominently alongside infrastructure and health as a key sector for connectivity and improving livelihoods.",
    coordination: [
      { name: "Bilateral Government-to-Government", description: "Direct coordination via Chinese Embassy and PNG ministries" },
      { name: "Belt and Road Initiative Framework", description: "Education as a priority sector for development cooperation" },
      { name: "China-Pacific Island Countries Ministerial Meetings", description: "Regional platform for education commitments" }
    ],
    programs: [
      { name: "Butuka Academy (PNG-China Friendship School)", funding: "PGK 70M grant from Shenzhen Municipal Government, 2018-ongoing", desc: "Modern K-12 facility in Port Moresby with 58 classrooms, serving 2,700+ students. Includes science labs, library, sports facilities, and teacher accommodations, with 20-year maintenance program." },
      { name: "Western Pacific University Infrastructure", funding: "PGK 50M grant (2018-2022, operational)", desc: "Phase-one development of PNG's newest university in Southern Highlands, including digital library (first of its kind in PNG), teaching buildings, student dormitories, and faculty housing." },
      { name: "Government Scholarship Program", funding: "40+ years ongoing, approximately 1,000 beneficiaries to date", desc: "Comprehensive human capital development providing 30-50 fully-funded undergraduate and postgraduate scholarships annually at Chinese universities, plus 100+ short-term training positions for officials and professionals in fields including education administration, STEM, and vocational skills." },
      { name: "TVET and Secondary Education Support", funding: "PGK 50M grant announced 2023, implementation ongoing", desc: "Targeted funding for secondary schools and technical institutions nationwide, including planned Enga Province Polytechnic Institute development to strengthen vocational training in the Highlands." }
    ],
    provinces: ["National Capital District", "Southern Highlands", "Enga", "Morobe"],
    focusAreas: ["Primary/Elementary", "Secondary", "TVET", "Tertiary/Scholarships", "Infrastructure", "Digital Learning / EdTech"],
    strategic: [
      { title: "Substantial infrastructure investment", detail: "Building modern educational facilities from early childhood through tertiary levels, addressing critical infrastructure gaps in both urban and rural areas" },
      { title: "Comprehensive human resource development", detail: "Scholarship programs and professional training that have educated nearly 1,000 PNG citizens in China, creating a cadre of skilled professionals across sectors" },
      { title: "Geographic reach beyond capitals", detail: "Supporting institutions in Southern Highlands (WPU), Enga Province (technical college), and Morobe (Confucius Institute), ensuring nationwide coverage" },
      { title: "Long-term human capital investment", detail: "Building PNG's future leaders through 50+ years of scholarship programs with strong alumni networks" },
      { title: "Cultural and academic exchange", detail: "Establishing Confucius Institutes at PNG universities to promote language learning and facilitate research partnerships, strengthening people-to-people ties" }
    ]
  },
  {
    id: "usa",
    name: "United States of America (USA)",
    category: "Bilateral",
    orgType: "Foreign Government",
    role: "Donor",
    partnerSince: null,
    flagshipFunding: "~US$18M for rural schools (2020-25)",
    logo: "assets/logos/usa.png",
    about: "The United States, through the U.S. Department of State, advances self-reliance in Papua New Guinea by supporting targeted education and foreign assistance programs that promote economic opportunities and innovation. U.S. engagement aligns with U.S. foreign policy priorities to strengthen human capital and build resilient communities. The United States delivers lifesaving programs and strategic assistance, leveraging innovative American companies to achieve these objectives.",
    coordination: [
      { name: "Development Partner Forums", description: "Participate in donor coordination meetings and provide input into the National Education Plan" },
      { name: "U.S.-PNG Strategic Partnership Dialogue", description: "Annual high-level policy dialogue and partnership review, working directly with national and provincial governments on development programs" },
      { name: "Regional Pacific Initiatives", description: "Implement education components through broader Pacific regional programs and partnerships" }
    ],
    programs: [
      { name: "Fulbright Programs", funding: "Ongoing", desc: "The U.S. Government's flagship exchange program sends Papua New Guineans to the United States for fully funded degree programs, professional exchanges, and research trips, and brings Americans to PNG as teachers and fellows with universities and communities." },
      { name: "Cross-Sector Professional Development", funding: "Ongoing", desc: "The Department of State, the Department of War, and partners such as the East-West Center and the Daniel K. Inouye Asia-Pacific Center for Security Studies, provide professional development across sectors. Programming includes resume and interview workshops, disaster preparedness, medical and practical training with the PNGDF, and short-term exchange programs in the United States." },
      { name: "PNG Electrification Partnership", funding: "~US$18M for rural schools and education facilities, of US$58M+ total U.S. commitments (2020-2025)", desc: "The PNG Electrification Partnership supports off-grid solar electrification for rural schools and education facilities in Hela, Northern (Oro), and Manus provinces, improving access to reliable power for ICT and extended learning." },
      { name: "American Corner and Literacy Initiatives", funding: "Ongoing", desc: "The U.S. sponsors children's book distributions and hosts literacy events. Three American Spaces across PNG make hundreds of titles and internet access available for free." },
      { name: "Pacific Regional Initiative and Support for More Effective Counter Trafficking in Persons (TIP) - Pacific RISE-CTIP", funding: "US$270,000 in PNG (2021-2025)", desc: "A regional program focused on TIP awareness and reducing human trafficking in PNG, Fiji, RMI, and Tonga. The United States supports education and awareness with NGOs, particularly in schools." },
      { name: "Disaster Response Community Training", funding: "Part of U.S. US$6 million commitment (2024-2026)", desc: "The U.S. partners with PNG's disaster / response management agencies and local leaders to improve disaster readiness in remote, high-risk areas. In 2024-2025, 198 individuals received disaster preparedness training and over 5,000 members of vulnerable communities gained skills to assess and address risks." },
      { name: "Entrepreneurship and Financial Empowerment", funding: "MiBank US$5M lending portfolio (2021-2029); AWE US$130,000 (2021-2025)", desc: "The United States supports MiBank to expand loans and financial literacy training, helping PNG entrepreneurs and small businesses access capital and grow. Through the Academy for Women Entrepreneurs, over 270 women have gained business skills and support. These initiatives empower PNG entrepreneurs and increase access to investment opportunities." }
    ],
    provinces: ["Hela", "Northern (Oro)", "Manus"],
    focusAreas: ["Tertiary/Scholarships", "Literacy/Numeracy", "Infrastructure", "Digital Learning / EdTech", "Emergency Response", "Girls' Education / Gender"],
    strategic: [
      { title: "Niche technical expertise", detail: "Focusing on literacy innovation and EdTech solutions" },
      { title: "Innovation and piloting", detail: "Testing scalable models like digital learning and community-based education that can be adopted by the PNG government or other partners" },
      { title: "Remote area reach", detail: "Targeting underserved provinces like Western Province and isolated Highland communities, often overlooked by larger programs" },
      { title: "Cross-sector integration", detail: "Embedding education components within health, countering trafficking in persons, and governance programs for sustainable community development" }
    ]
  },

  // ===================== MULTILATERAL =====================
  {
    id: "adb",
    name: "Asian Development Bank",
    category: "Multilateral",
    orgType: "Multilateral Development Bank",
    role: "Donor and Implementing Partner",
    partnerSince: 1971,
    flagshipFunding: "Cumulative >US$110M",
    about: "Established in PNG since 1971; partnered with NDoE since 1999. PNG's largest multilateral donor, focusing on financing inclusive growth and sustainable development through concessional loans, grants, and technical assistance with strategic emphasis on TVET to reduce skills gaps and youth unemployment.",
    coordination: ["Local Education Group", "TVET Sub-Committee"],
    programs: [
      { name: "Improved TVET for Employment Project (ITVET4E)", funding: "USD 66.3M (ADB 50M + Aus 10.6M + PNG 5.7M), 2022-2030", desc: "Comprehensive TVET reform upgrading 10 technical colleges across Bougainville, Eastern Highlands, Madang, Morobe, NCD, Simbu, West New Britain, Western Highlands. Includes Centers of Excellence in construction and agriculture, gender-responsive infrastructure." },
      { name: "ITVET4E Phase 2", funding: "USD 60M, planned 2028", desc: "Follow-on investment to scale TVET reforms, expand skills development, strengthen employment outcomes." },
      { name: "Education Access and Quality Improvement Project (EAQIP)", funding: "USD 60M loan + co-financing, planned 2027", desc: "Will enhance basic education services through improved infrastructure, teaching quality, inclusive access." },
      { name: "ADB-Japan Scholarship Program", funding: "Ongoing", desc: "Graduate scholarships at partner universities across Asia-Pacific." }
    ],
    provinces: ["Bougainville (AROB)", "Eastern Highlands", "Madang", "Morobe", "National Capital District", "Chimbu (Simbu)", "West New Britain", "Western Highlands"],
    focusAreas: ["TVET", "Primary/Elementary", "Infrastructure", "Teacher Training", "Tertiary/Scholarships", "Inclusive Education", "Girls' Education / Gender"],
    strategic: ["Large-scale financing (>$110M cumulative)", "Comprehensive technical assistance", "Strategic co-financing with DFAT and PNG Government", "Four decades of sectoral engagement"]
  },
  {
    id: "eu",
    name: "European Union",
    category: "Multilateral",
    orgType: "Foreign Government",
    role: "Donor and Implementing Partner",
    partnerSince: null,
    flagshipFunding: "€39M across HRDP1+2",
    about: "Significant development partner for decades. EU's mission centers on supporting universal access to quality education and strengthening education system capacity through the European Development Fund. Operates closely with NDoE and the National Authorising Officer.",
    coordination: ["Local Education Group", "Sector Wide Approach (SWAp)"],
    programs: [
      { name: "Human Resource Development Programme Phase 1 (HRDP1)", funding: "€13M (2011-2016)", desc: "Capacity-building strengthening education system management, upgrading 11 Teacher Training Colleges nationwide, and providing scholarships for 250 trainee teachers from rural areas. Infrastructure at Balob, Gaulim, Madang Teachers Colleges." },
      { name: "Human Resource Development Programme Phase 2 (HRDP2)", funding: "€26M (2016-2020)", desc: "Expanding lower-secondary TVET access and quality through upgrading 10 vocational centers in six provinces (East New Britain, East Sepik, Eastern Highlands, Enga, Morobe, NCD), 250 vocational teacher qualifications, 600 student workplace attachments." },
      { name: "PNG Education Advocacy Project", funding: "EIDHR grant (2018-2020)", desc: "Supporting civil society organizations including PEAN to monitor education service delivery and promote the right to education." },
      { name: "Erasmus+ Scholarships", funding: "Ongoing", desc: "Higher education and academic exchanges in European universities, building research links and human capital." }
    ],
    provinces: ["East New Britain", "East Sepik", "Eastern Highlands", "Enga", "Morobe", "National Capital District", "Madang"],
    focusAreas: ["TVET", "Teacher Training", "Infrastructure", "Tertiary/Scholarships", "Inclusive Education", "Girls' Education / Gender", "System Strengthening"],
    strategic: ["System-wide capacity building", "Strategic infrastructure investment", "Technical and vocational focus", "Inclusive education principles", "Policy reform support", "Sustainability emphasis"]
  },
  {
    id: "unicef",
    name: "UNICEF",
    category: "Multilateral",
    orgType: "UN Agency",
    role: "Grant Agent & Implementing Partner",
    partnerSince: 1986,
    flagshipFunding: "GPE Grant Agent (US$16.6M STG/SCG)",
    about: "Active in PNG since 1986; formal partnership through Basic Cooperation Agreement in 1994. UNICEF focuses on ensuring every child has access to quality, safe learning opportunities, with emphasis on the most vulnerable children - including girls, children with disabilities, and those in remote areas.",
    coordination: ["LEG meetings", "EDPaCC meetings", "EiE meetings (co-lead)", "SEOC meetings"],
    programs: [
      { name: "Global Partnership for Education Grants (STG & SCG)", funding: "US$16.6M (2025-2029)", desc: "Grant Agent for the System Transformation Grant, supporting 1-6-6 school restructuring reform, Standards-Based Curriculum, and textbook provision. Operates in Bougainville, Central, East Sepik, Enga, Hela, Jiwaka, Manus, Southern Highlands, and Western Highlands provinces, targeting 317,283 students." },
      { name: "Smarter Safer Schools", funding: "AUD 33M (~PGK 101.7M) (2025-2029)", desc: "Australian Government investment improving school retention and learning outcomes. Operates in Central, Morobe and Western Highlands (Phase 1), Bougainville, East New Britain and East Sepik (Phase 2)." },
      { name: "Climate Action and WASH Programs", funding: "US$1.3M (2023-2027)", desc: "Two KOICA-funded initiatives: Conflict-sensitive WASH in Morobe + Climate Smart Education in Central (Rigo District)." },
      { name: "COVID-19 Education Emergency Response", funding: "US$25M (GPE $9.44M + DFAT AUD 22M), 2020-2023", desc: "Crisis response maintaining education continuity for 600,000+ students through distance learning, psychosocial support, disaster risk management." },
      { name: "Early Childhood Education Expansion", funding: "2017-ongoing", desc: "Established 1,061 community-based preschools across 11 provinces, reaching 20,000 children and creating PNG's first nationwide ECE system, including the government ECE Unit." }
    ],
    provinces: ["Bougainville (AROB)", "Central", "East New Britain", "East Sepik", "Enga", "Hela", "Jiwaka", "Manus", "Morobe", "Southern Highlands", "Western Highlands"],
    focusAreas: ["Early Childhood Education", "Primary/Elementary", "Inclusive Education", "WASH", "Emergency Response", "Curriculum", "System Strengthening"],
    strategic: ["Emergency response leadership (co-lead EiE Cluster)", "Grant management expertise (GPE, DFAT, KOICA, ECW)", "Inclusive education specialisation (17 SERCs)", "Global and regional technical networks"]
  },
  {
    id: "unesco",
    name: "UNESCO",
    category: "Multilateral",
    orgType: "UN Agency",
    role: "Grant Agent & Implementing Partner",
    partnerSince: 1976,
    flagshipFunding: "PacREF + CSESI multi-donor",
    about: "Member partner in PNG since 1976. Operates through Pacific regional office in Apia, Samoa (with a planned country office in Port Moresby), serving as technical advisor, advocate, policy guide, and funder for targeted initiatives aligned with 'Quality Education for All.'",
    coordination: ["Pacific Heads of Education Systems", "PNG National Commission for UNESCO", "Education Sector Working Groups"],
    programs: [
      { name: "Pacific Regional Education Framework (PacREF)", funding: "Multi-donor (GPE, NZ, Aus, ADB), 2018-2030", desc: "Multi-country program covering 15 Pacific nations including PNG, developing curriculum frameworks, teacher training modules, policy guidelines." },
      { name: "Climate Smart Education Systems Initiative (CSESI)", funding: "GPE, 2023-2026", desc: "Multi-country program strengthening ministry capacity to mainstream climate change adaptation. Technical assistance supported by UNESCO, IIEP, and Save the Children Australia." },
      { name: "UNESCO Participation Programme", funding: "Up to USD 26,000 per project, ongoing", desc: "Biennial small grants for literacy, teacher training, inclusive education, and disaster preparedness." },
      { name: "Education Sector Analysis and Planning Support", funding: "2015-2020 continuing", desc: "Technical assistance for National Education Plans, EFA reviews, SDG4 alignment with Policy and Planning Division." }
    ],
    provinces: ["all"],
    focusAreas: ["Curriculum", "Teacher Training", "System Strengthening", "Inclusive Education", "Emergency Response"],
    strategic: ["Technical expertise in policy and curriculum", "Global knowledge networks", "Capacity building focus", "Multi-level education support", "Regional coordination"]
  },
  {
    id: "world-bank",
    name: "World Bank",
    category: "Multilateral",
    orgType: "Multilateral Development Bank",
    role: "Donor & Implementing Partner",
    partnerSince: 1975,
    flagshipFunding: "US$100M LEAP flagship",
    about: "Active in PNG since 1975, with the first education project approved in 1976. The Bank's partnership with NDoE focuses on evidence-based interventions targeting PNG's learning crisis. Emphasizes foundational learning, teacher development, and education system strengthening.",
    coordination: ["LEG meetings", "EDPaCC meetings", "SEOC meetings", "LEAP Technical Working Group", "LEAP Project Steering Committee (Observer)"],
    programs: [
      { name: "Learning Enhancement & Access Project (LEAP)", funding: "US$100M (2025-2030)", desc: "Flagship investment targeting 375,000 children across 3,500 schools in eight provinces, including teacher development for 9,000 educators, ECE pilots, and digital infrastructure for 200 secondary school hubs." },
      { name: "Reading Education Project (READ-PNG)", funding: "US$19.2M GPE grant (2011-2015)", desc: "Established 21,000 classroom libraries in all 22 provinces, trained thousands of teachers in phonics and reading pedagogy, and achieved significant improvements in early grade literacy." },
      { name: "Flexible Open and Distance Education (FODE) Project", funding: "US$5M IDA credit (2011-2017)", desc: "Expanded secondary education access for out-of-school youth through distance learning, updated curriculum for grades 7-12, and introduced ICT innovations." },
      { name: "Education Programmatic Advisory Services and Analytics", funding: "AUD 9M Phase 1 (2022-25) + AUD 9.5M Phase 2 (2025-28)", desc: "Policy advisory and analytics across teacher development, school leadership, public financial management, monitoring and evaluation, and ECE." }
    ],
    provinces: ["all"],
    focusAreas: ["Early Childhood Education", "Primary/Elementary", "Secondary", "Teacher Training", "Literacy/Numeracy", "Digital Learning / EdTech", "System Strengthening"],
    strategic: ["Proven track record (READ-PNG, FODE)", "Comprehensive approach ECE-secondary", "Evidence-based methodology with rigorous M&E"]
  },

  // ===================== IMPLEMENTING =====================
  {
    id: "bbp",
    name: "Buk bilong Pikinini (BBP)",
    category: "Implementing",
    orgType: "International NGO",
    role: "Implementing Partner",
    partnerSince: 2009,
    flagshipFunding: "PGK 4.5M Library Learning Centres",
    about: "Established in PNG in 2007; formal partnership with NDoE since 2009. Focuses on improving education access and quality through community-based programming with emphasis on early childhood education, literacy, and inclusive education.",
    coordination: ["LEG meetings", "SEOC meetings"],
    programs: [
      { name: "Library Learning Centres Initiative", funding: "PGK 4.5M (2024-2025)", desc: "ECE, after-school support, school-readiness (K1 & K2), nutrition, digital learning, inclusive education across Eastern Highlands, Manus, Morobe, Gulf, NCD through 21 centres targeting 5-year-olds." },
      { name: "Literacy Libraries Project", funding: "PGK 500,000 (2025)", desc: "Establishing libraries and reading resources in Gulf, Hela, Southern Highlands, targeting 250 schools and 500 teachers across Kikori, Tari-Pori, Nipa/Kutubu districts." },
      { name: "Infrastructure and Nutrition Programs", funding: "PGK 250,000 from Digicel Foundation, ExxonMobil PNG, others (2025)", desc: "Combined playground construction and sanitation facilities development in NCD schools, plus child nutrition education program." },
      { name: "Publishing and Digital Learning", funding: "PGK 200,000 annually, ongoing", desc: "In-house content development producing 40+ PNG-specific children's books including 'When I Grow Up' career series, picture books, readers, textbooks. BbP learning app with offline content." }
    ],
    provinces: ["Eastern Highlands", "Gulf", "Hela", "Manus", "Morobe", "National Capital District", "Southern Highlands"],
    focusAreas: ["Early Childhood Education", "Literacy/Numeracy", "Inclusive Education", "Digital Learning / EdTech", "Infrastructure", "WASH"],
    strategic: ["Nationwide ECE focus (21 LLCs)", "18 years operation, PGK 15M+ funded", "Comprehensive program integration", "Local curriculum and content development", "Corporate partnership leverage (40+ partners)", "Teacher training and capacity building"]
  },
  {
    id: "care",
    name: "CARE International",
    category: "Implementing",
    orgType: "International NGO",
    role: "Implementing Partner",
    partnerSince: 2009,
    flagshipFunding: "AUD 15M Pikinini Kisim Save",
    about: "Active in PNG since 2009 with mission to improve access to quality education for remote and disadvantaged communities. Emphasizes partnership with government and local communities, with focus on women and girls' empowerment.",
    coordination: ["Education Cluster", "PNG Partnership Fund", "NDoE - Technical advisor for ECCE policy"],
    programs: [
      { name: "Pikinini Kisim Save (PKS)", funding: "AUD 15M Australian Government (2018-2020)", desc: "Flagship elementary education program across Western Highlands, Jiwaka, Simbu, West New Britain - 160,000 students, training 5,200+ teachers, 295 classroom libraries." },
      { name: "Integrated Community Development Project (ICDP) Education Component", funding: "Multi-donor including AusAID and EU (2009-2015)", desc: "Bottom-up education development in Obura-Wonenara District (Eastern Highlands), establishing new elementary schools, training volunteer teachers, adult literacy programs." },
      { name: "Better Schools for Papua New Guinea", funding: "ANCP and public donations (2017-2020)", desc: "Community-driven education initiative in Eastern Highlands - 6,000 people including 926 children accessing quality education." },
      { name: "COVID-19 Education Emergency Response", funding: "2020", desc: "Education in Emergencies Response - distribution of home-learning materials, WASH improvements, health/safety training reaching 4,037." }
    ],
    provinces: ["Eastern Highlands", "Jiwaka", "Chimbu (Simbu)", "Western Highlands", "West New Britain"],
    focusAreas: ["Primary/Elementary", "Teacher Training", "Girls' Education / Gender", "Literacy/Numeracy", "Inclusive Education", "Emergency Response"],
    strategic: ["Proven track record in disadvantaged communities", "Gender transformation focus (10% enrolment increase)", "Trained 5,200+ elementary teachers", "Community-driven approach", "Systems strengthening capability", "Sustainability focus"]
  },
  {
    id: "catalpa",
    name: "Catalpa International",
    category: "Implementing",
    orgType: "International NGO",
    role: "Implementing Partner",
    partnerSince: 2024,
    flagshipFunding: "CGA: 33,000 users by end-2025",
    about: "Established in PNG in 2020; formal partnership with NDoE in 2024. Partners with governments to improve public services using human-centered design and digital systems. Brings technical expertise in digital learning platforms and education technology.",
    coordination: ["LEG", "DFAT Partnership Design - Technical advisor for PIE", "District Systems Support (Bilum/DIMS)"],
    programs: [
      { name: "Clean Generation Academy (CGA) Digital Platform", funding: "PGK 318,125 (2025)", desc: "Scaling The Voice Inc's digital learning platform from 4,000 to 33,000 users by end-2025 (target: 100,000 by 2027), providing leadership and citizenship modules across East New Britain, Eastern Highlands, Morobe, NCD." },
      { name: "Bilum/District Information Management System (DIMS)", funding: "GoPNG/DFAT funded, 2019-ongoing", desc: "Governance data platform strengthening district planning, reporting, and SIP fund allocation. Active in Wabag, Nuku and expanding districts." },
      { name: "Partnerships for Improving Education (PIE) Design Support", funding: "AUD 75M total program (2022-2027)", desc: "Technical design collaboration with DFAT for PIE early grade learning program (literacy/numeracy, inclusive access)." },
      { name: "Kumul Helt Skul Mobile Learning", funding: "Health sector pilot (2020s)", desc: "Blended professional development platform proven in Port Moresby General and ANGAU hospitals - transferable model for teacher training and workforce development." }
    ],
    provinces: ["East New Britain", "Eastern Highlands", "Morobe", "National Capital District", "Enga", "Sandaun (West Sepik)"],
    focusAreas: ["Digital Learning / EdTech", "Teacher Training", "System Strengthening", "Curriculum"],
    strategic: ["Digital innovation expertise", "Systems strengthening capacity (Bilum/DIMS)", "Cross-sector learning transfer (health → education)", "Design partnership excellence (DFAT PIE)", "Pacific regional knowledge (UNESCO co-author)", "Future-ready solutions"]
  },
  {
    id: "childfund",
    name: "ChildFund Papua New Guinea",
    category: "Implementing",
    orgType: "International NGO",
    role: "Implementing Partner",
    partnerSince: 2015,
    flagshipFunding: "NZD 11.2M RRR + AUD 14.5M T4E",
    about: "Active in PNG since 1994; formal partnership with NDoE in 2015. Child-focused organization with vision that every child can say 'I am safe. I am educated. I contribute. I have a future.' Specializes in foundational education, child-friendly schools, and social-emotional learning.",
    coordination: ["LEG meetings", "EiE meetings", "SEOC meetings (Observer)"],
    programs: [
      { name: "Together for Education (T4E)", funding: "AUD 14.5M consortium (2017-2022)", desc: "Major consortium program led by World Vision enhancing elementary education quality through teacher training, community reading clubs, digital libraries reaching 1,400 schools. ChildFund led Central Province implementation." },
      { name: "Rights, Respect, Resilience (RRR)", funding: "NZD 11.2M multi-country (2020-2025)", desc: "Five-year secondary education project training teachers in 17 schools to deliver respectful relationships curriculum, engaging 12,204 out-of-school youth." },
      { name: "Partnership in Education (PIE)", funding: "AUD 75M (2022-2027)", desc: "School Leadership and Management Training for primary in Bougainville, Central, and Sandaun provinces - improving enrolment, attendance, inclusion, learning outcomes, SLIP development." },
      { name: "Education in Emergencies & COVID-19 Response", funding: "Australian Humanitarian Partnership (2020-ongoing)", desc: "Disaster preparedness training, psychosocial support, home learning packets, solar radios for remote learning." }
    ],
    provinces: ["Bougainville (AROB)", "Central", "Sandaun (West Sepik)"],
    focusAreas: ["Primary/Elementary", "Secondary", "Teacher Training", "Girls' Education / Gender", "Inclusive Education", "Emergency Response", "System Strengthening"],
    strategic: ["30+ years community presence (especially Central Province)", "Child-Friendly Schools expertise", "Social-emotional learning specialization (RRR addresses GBV)"]
  },
  {
    id: "epf",
    name: "Equal Playing Field (EPF)",
    category: "Implementing",
    orgType: "Local NGO/CSO",
    role: "Implementing Partner",
    partnerSince: 2013,
    flagshipFunding: "PGK 5M Safe Communities (2024-27)",
    about: "Established in PNG in 2012 (initially as 'Rugby League Against Violence'); partnership with NDoE since 2013. Pioneers violence prevention through respectful relationships education using sporting concepts. Addressing PNG's critical challenge where two-thirds of women experience violence.",
    coordination: ["LEG meetings", "NDoE Guidance & Counselling and School Intervention"],
    programs: [
      { name: "Safe Communities Project", funding: "PGK 5M from DFAT (Jul 2024-Jun 2027)", desc: "Comprehensive violence prevention program reaching 24,000 students and 480 teachers across NCD schools. Uses 8-week EPF4S curriculum combining mixed-gender sports with respectful relationships." },
      { name: "Equal Playing Field for Schools (EPF4S)", funding: "Aus Aid PGK 4M (2015-2018) + UNICEF PGK 1.2M annually Bougainville", desc: "Flagship Program - Eight-week respectful relationships curriculum delivered to over 26,000 students across PNG since inception. Operating in NCD, AROB, and Western Highlands. 84% observe increased cross-gender play, 75% note reduced peer violence." },
      { name: "School Action Groups (SAGs) & Youth Leadership", funding: "Ongoing", desc: "Student-led clubs in 130+ partner schools sustaining violence prevention messaging year-round. Complemented by University Action Groups at UPNG and Changemakers Academy." }
    ],
    provinces: ["Bougainville (AROB)", "National Capital District", "Western Highlands"],
    focusAreas: ["Girls' Education / Gender", "Secondary", "Primary/Elementary"],
    strategic: ["Proven impact model (26,000+ students)", "Sports-based innovation", "Multi-level engagement (primary, secondary, tertiary)", "Strategic geographic presence (post-conflict/high-violence)", "Strong partnership network (Aus Aid, UNICEF, UNFPA, EU Spotlight)"]
  },
  {
    id: "ktf",
    name: "Kokoda Track Foundation (KTF)",
    category: "Implementing",
    orgType: "Local NGO/CSO",
    role: "Implementing Partner",
    partnerSince: 2009,
    flagshipFunding: "USD 12.4M Western Province initiative",
    about: "Established in PNG in 2003 to honor WWII Kokoda legacy; formal partnership with NDoE since 2009. KTF specializes in teacher training, distance education delivery, and early childhood development for PNG's most remote communities, with deep engagement in Oro, Central, and Western Provinces.",
    coordination: ["EDPaCC meetings", "SEOC meetings", "Provincial Education Offices - Teacher training accreditation"],
    programs: [
      { name: "Teach for Tomorrow Program", funding: "DFAT/ANCP, ExxonMobil, multiple, 2016-ongoing", desc: "Flagship teacher training that certified 3,685 untrained elementary teachers across 15 provinces (2016-2019), improving education quality for 136,000+ children. Continues through Train-the-Trainer and Early Years ECE specialization." },
      { name: "Western Province Education Initiative", funding: "USD 12.4M from PNGSDP (2018-2025+)", desc: "Comprehensive education hub in Balimo including PNG's first Western Province teachers college (101 diploma students), five FODE centers serving 2,097+ secondary students, 36 elementary/primary schools, Community Health Worker training." },
      { name: "Flexible Open Distance Education (FODE) Network", funding: "PGK 15M multi-donor (2012-2030)", desc: "Operating Kokoda College and Mt. Koiari FODE centers in Oro/Central, plus Western Province centers - second-chance secondary (Grades 9-12), boarding facilities, solar-powered e-learning." },
      { name: "Light for Learning Solar Initiative", funding: "DFAT/ANCP, SolarBuddy partnership (2020-2022)", desc: "Deployed 7,416 solar lighting units to households and schools across Western and Oro Provinces, replacing toxic kerosene lamps." }
    ],
    provinces: ["Central", "Northern (Oro)", "Western"],
    focusAreas: ["Teacher Training", "Early Childhood Education", "Secondary", "Digital Learning / EdTech", "Infrastructure", "Tertiary/Scholarships"],
    strategic: ["Systemic teacher capacity building (3,685 certified, 97% retention)", "Innovation in remote education delivery (FODE + solar)", "Pipeline approach (ECE → primary → secondary → tertiary)", "Evidence-based policy influence"]
  },
  {
    id: "pean",
    name: "PNG Education Advocacy Network (PEAN)",
    category: "Implementing",
    orgType: "Local NGO / CSO",
    role: "Implementing Partner",
    partnerSince: 2003,
    flagshipFunding: "USD 867,629 Education Out Loud",
    about: "Established in 2003 as PNG's national civil society coalition for Education for All (EFA). Serves as the collective voice of education NGOs in PNG. Conducts evidence-based research, mobilises civil society engagement, and bridges grassroots perspectives with national policy.",
    coordination: ["LEG (Recognised civil society representative)", "EiE meetings", "GPE Compact Team & Grant Selection Committee", "SEOC", "Technical Working Groups"],
    programs: [
      { name: "Education Out Loud Gender & Inclusion Initiative", funding: "USD 867,629 total (2020-2026)", desc: "Multi-phase advocacy program strengthening civil society capacity and promoting gender-responsive, inclusive education policies. Provincial MOUs for SDG4 localisation, youth-led disability research, budget tracking, community mobilisation across multiple provinces." },
      { name: "Literacy Assessment & Adult Education Advocacy", funding: "CSEF/GPE ~USD 100-120k annually, EU research grant (2006-2015)", desc: "Comprehensive literacy surveys across NCT, New Ireland, Simbu, Sandaun, and Gulf provinces, revealing an education crisis. PEAN was government-invited to develop national adult literacy strategies." },
      { name: "School Budget Tracking & Social Accountability", funding: "CSEF/GPE support (2014-2016)", desc: "Pioneered community-based monitoring of school finances, training local representatives to track fund flows. Established social audit concept in PNG education." }
    ],
    provinces: ["Chimbu (Simbu)", "Gulf", "National Capital District", "New Ireland", "Sandaun (West Sepik)"],
    focusAreas: ["System Strengthening", "Literacy/Numeracy", "Inclusive Education", "Girls' Education / Gender"],
    strategic: ["Evidence-based advocacy", "National-provincial bridge (11+ provinces)", "Civil society coordination (since 2003)", "Policy influence (National Education Plans, adult literacy, TFF)", "22-year sustained partnership"]
  },
  {
    id: "plan",
    name: "Plan International",
    category: "Implementing",
    orgType: "International NGO",
    role: "Implementing Partner",
    partnerSince: 2015,
    flagshipFunding: "AUD 110.6M Water for Women",
    about: "Child-focused humanitarian and development organization. Began PNG operations in 2015 to advance children's rights and equality for girls. Tackles root causes of discrimination, exclusion, and vulnerability among children and adolescents.",
    coordination: ["National Education Forums", "Bougainville Government Partnership", "WASH in Schools Network"],
    programs: [
      { name: "Bougainville Youth Empowerment Program (YEP)", funding: "Australian DFAT via PNG-Australia Partnership (2019-ongoing)", desc: "Comprehensive youth development initiative - peer education, leadership training, SRH education. Operates in 10+ local-level government wards in Central Bougainville with 17 secondary schools." },
      { name: "Resilient WASH in Schools Project", funding: "AUD 110.6M Water for Women Fund (2018-2024)", desc: "Climate-resilient WASH infrastructure across 40+ schools in New Ireland Province (Kavieng and Namatanai Districts), benefiting 8,380 people." },
      { name: "Equal Playing Field Partnership", funding: "ANCP grant (2017-2020)", desc: "Sports-based respectful relationships program for secondary students 13-15 - mixed-gender sports tournaments combined with curriculum on gender equality, consent, violence prevention." }
    ],
    provinces: ["Bougainville (AROB)", "New Ireland"],
    focusAreas: ["Secondary", "Girls' Education / Gender", "WASH", "Infrastructure", "Inclusive Education"],
    strategic: ["Geographic concentration in post-conflict areas (Bougainville)", "Gender-transformative education expertise", "Integrated WASH-education approach", "Youth-led development model", "Climate-resilient infrastructure design"]
  },
  {
    id: "room-to-read",
    name: "Room to Read",
    category: "Implementing",
    orgType: "International NGO",
    role: "Implementing Partner",
    partnerSince: 2011,
    flagshipFunding: "US$19.2M READ-PNG (GPE)",
    about: "Global nonprofit established in 2000; entered PNG in 2011 to address critical literacy and girls' education gaps. PNG has some of the lowest literacy rates in the Asia-Pacific region. Key technical partner for literacy instruction and gender equity initiatives.",
    coordination: ["LEG", "PNG Education Partnership Compact (2025) - co-chairs Teaching and Learning Materials working group"],
    programs: [
      { name: "READ PNG Initiative", funding: "US$19.2M GPE grant via World Bank (2011-2015)", desc: "Established 21,000+ classroom libraries nationwide, trained 12,000 teachers in library management and reading instruction, conducted reading assessments across four provinces - books distribution covered all 22 provinces." },
      { name: "Reading Booster Pilot", funding: "Part of READ PNG (2013-2015)", desc: "Intensive literacy intervention in Western Highlands, Madang, East New Britain, NCD - non-readers dropping from 35% to 4% in Western Highlands." },
      { name: "Girls' Education Program", funding: "Private foundations and corporate sponsors (2016-Present)", desc: "Scholarships, life skills, mentoring for secondary girls in Central, Morobe, and Highlands - ~400 girls supported initially, doubling capacity by 2025." },
      { name: "Digital Literacy Initiative", funding: "Planned, aligned with LEAP (2025-Forward)", desc: "Planned rollout of 'Literacy Cloud' digital library with e-books in local languages and English - target 50 schools by 2026." }
    ],
    provinces: ["all"],
    focusAreas: ["Literacy/Numeracy", "Primary/Elementary", "Girls' Education / Gender", "Digital Learning / EdTech", "Teacher Training", "Curriculum"],
    strategic: ["Proven literacy expertise (4% → 25% fluency)", "Nationwide reach (all 22 provinces)", "Local language publishing (100+ Tok Pisin storybooks)", "Girls' education specialisation (95% retention)", "System strengthening (integrated into Standards-Based Curriculum)"]
  },
  {
    id: "save-children",
    name: "Save the Children",
    category: "Implementing",
    orgType: "International NGO",
    role: "Implementing Partner",
    partnerSince: 1974,
    flagshipFunding: "US$21M BEST PNG (Grant Agent)",
    about: "Active in PNG since the 1970s; formal operations 1974-1978. Serves as both implementing partner and grant agent for major education initiatives, with over 40 years of on-ground experience. Mission focuses on ensuring every child survives, learns, and is protected.",
    coordination: ["Local Education Group (ESIP Committee)", "EiE meetings", "EDPaCC", "SEOC"],
    programs: [
      { name: "BEST PNG - Boosting Education Standards Together", funding: "US$21M (GPE + Japan), 2020-2024", desc: "Served as Grant Agent improving basic education quality - teacher training for 7,000+ teachers and distribution of 450,000+ textbooks nationwide." },
      { name: "Female Teachers Education Scholarship Scheme", funding: "Newmont Corporation (2020-ongoing)", desc: "Supporting 120+ women from remote areas through teacher colleges to become qualified primary teachers in mathematics and science." },
      { name: "RISE - Rapidly Improving Standards of Education", funding: "Australia (2017-2020)", desc: "Led consortium reaching 650 schools across three provinces, training 1,800 elementary teachers and 750 pre-school facilitators." },
      { name: "Yumi Read Together", funding: "2021-2023", desc: "Award-winning inclusive digital learning pilot using Bloom Reader app for children with disabilities in Western Province, training 1,000 teachers." },
      { name: "Education in Emergencies Response", funding: "2018-ongoing", desc: "Rapid deployment of Temporary Learning Spaces and Emergency Education Kits including 2018 Hela earthquake response and COVID-19 response reaching 220,000+ students." }
    ],
    provinces: ["Hela", "Western"],
    focusAreas: ["Teacher Training", "Curriculum", "Inclusive Education", "Girls' Education / Gender", "Digital Learning / EdTech", "Emergency Response"],
    strategic: ["Comprehensive technical capacity (teacher training, curriculum, inclusive ed, emergency)", "Geographic reach across 9+ provinces", "Strong partnerships (government, GPE, Japan, DFAT, Newmont)", "47-year relationship"]
  },
  {
    id: "wings",
    name: "WINGS Education Limited",
    category: "Implementing",
    orgType: "Local NGO / CSO",
    role: "Implementing Partner",
    partnerSince: 2011,
    flagshipFunding: "AUD-funded TSSP leadership (2020-21)",
    about: "Established in PNG in 2011 as a nationally registered training organization (DHERST Registration No. 215). 'With Integrity we Nurture Growth and Sustainability.' Bridges public sector, private sector, and civil society through values-based, contextually relevant training programs.",
    coordination: ["LEG meetings", "GPE Grant Selection Committee", "PNG Business Coalition for Women"],
    programs: [
      { name: "BCFW Women's Leadership & Management Course", funding: "Australian Gov/Pacific Women, IFC, Oil Search Foundation, corporate (2015-ongoing)", desc: "Flagship Certificate IV qualification program developed with PNG Business Coalition for Women - 300+ women trained as emerging leaders. Three-block course over six months, accredited under Aus/PNG framework." },
      { name: "PNG Transport Sector Leadership Program", funding: "Australian DFAT via TSSP (2020-2021)", desc: "'Leading for Change in the Workplace' Certificate 4 Leadership for 174 transport agency managers - PNG's first locally accredited leadership qualification." },
      { name: "Early Childhood Education Parental Handbook", funding: "Self-funded, ongoing", desc: "Self-funded initiative supporting Curriculum Development Division to create awareness about early childhood education among parents and community members." },
      { name: "Corporate and Public Sector Training Services", funding: "Various clients, ongoing", desc: "Ongoing fee-for-service training including ExxonMobil PNG, government departments, international schools, NGOs - communication, customer service, cultural awareness, executive coaching." }
    ],
    provinces: ["all"],
    focusAreas: ["Teacher Training", "Tertiary/Scholarships", "Girls' Education / Gender", "Early Childhood Education", "System Strengthening"],
    strategic: ["Local expertise and contextual relevance (30+ years collective experience)", "Women's leadership development", "Sustainable capacity building model (donor + commercial)", "Cross-sector partnerships"]
  },
  {
    id: "world-vision",
    name: "World Vision",
    category: "Implementing",
    orgType: "International NGO",
    role: "Implementing Partner",
    partnerSince: 1978,
    flagshipFunding: "AUD 75M PIE (2022-2027)",
    about: "Active in PNG for over 40 years, with operations starting in early 1980s and formal education partnerships dating back to 1978. Faith-based international NGO. Collaborative approach leverages PNG's dual education delivery system (government schools and church/community schools).",
    coordination: ["LEG (Active member)", "Education Cluster (Co-lead with UNICEF)", "NGO Council (Secretary)", "WASH Cluster (Lead with UNICEF as co-lead)"],
    programs: [
      { name: "Partnerships for Improving Education (PIE)", funding: "AUD 75M (2022-2027)", desc: "Technical monitoring and data collection across 750+ schools in three provinces, training hundreds of teachers to improve early grade literacy and numeracy outcomes." },
      { name: "Together for Education (T4E)", funding: "AUD 16.5M (2017-2022)", desc: "Led consortium of six partners implementing education improvements across 31 districts in 10 provinces, reaching 612 schools. Trained elementary teachers on literacy and numeracy, distributed 93,810 reading books." },
      { name: "Access to Literacy and Learning (ALL)", funding: "AUD 1.7M DFAT (2017-2021)", desc: "4-year literacy improvement project, training 152 primary teachers, engaging 7,460 parents/caregivers, establishing after-school reading clubs in Madang and Morobe." },
      { name: "Early Childhood Education (ECE)", funding: "AUD 95,000 (2022-2023)", desc: "Developed and launched localised 'PNG Thrive by Five (TB5)' app with 124 translated ECE contents - hosted PNG's first-ever TED talk on early childhood development." },
      { name: "Vocational Education and Development", funding: "AUD 1.9M from DFAT/EU/UNDP/Private, ongoing", desc: "Youth vocational including WASH technical maintenance, livelihood, agriculture training - soft skills in leadership, communication, peacebuilding." },
      { name: "WASH in Schools Programme", funding: "AUD 14.5M DFAT/EU/UNICEF/Private (2018-ongoing)", desc: "Large-scale infrastructure program across six provinces - 600+ schools and 45,000+ students. Combines facility construction, hygiene education, governance support." },
      { name: "COVID-19 Education in Emergencies", funding: "AUD 5.4M DFAT/UNICEF (2020-2023)", desc: "Emergency education program across NCD, AROB, Morobe, Madang, Sandaun, Western Province - hygiene kits, handwashing stations, toilet facilities." }
    ],
    provinces: ["Bougainville (AROB)", "Madang", "Morobe", "National Capital District", "Sandaun (West Sepik)", "Western"],
    focusAreas: ["Primary/Elementary", "Early Childhood Education", "Teacher Training", "Literacy/Numeracy", "WASH", "TVET", "Emergency Response", "Digital Learning / EdTech"],
    strategic: ["Extensive geographic reach (16 provinces, 8 field offices)", "Faith-based community engagement", "Technical monitoring expertise (750+ schools)", "Emergency response capability (Education Cluster co-lead)", "Cross-cutting integration", "Evidence-based approach"]
  }
];
