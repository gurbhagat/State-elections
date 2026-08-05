/* =============================================
   Punjab Elections 2027 — app.js
   Core application: i18n, navigation, utilities
   ============================================= */

/* ---- Translations ---- */
const I18N = {
  en: {
    "shareTitle": "Share:",
    "corrSection3Desc": "We maintain a clean log of data fixes in our central repository to preserve the audit trail and guarantee transparency for researchers and journalists.",
    "corrSection3Title": "3. Transparency Commitment",
    "corrSection2Desc": "Once a correction request is received, our researchers will verify the report against official ECI PDFs. If an error is confirmed, we will correct our database and republish the affected files within 48 hours.",
    "corrSection2Title": "2. Verification Timeline",
    "corrSection1Desc": "If you find a candidate name misspelling, data transcription error, or incorrect election figure, please email our data team at contact@indiaelections.org. Please include the specific page URL and a link to the official ECI record containing the correct information.",
    "corrSection1Title": "1. Reporting an Error",
    "corrLead": "Our transparent process for correcting data errors and reporting issues.",
    "corrTitle": "Corrections Policy",
    "edSection3Desc": "We verify all statistical inputs via programmatic verification against ECI summary data before deployment to prevent typos or visual reporting errors.",
    "edSection3Title": "3. Accuracy Check",
    "edSection2Desc": "Every election result, vote count, candidate list, and category layout is derived directly from publicly available government documents (primarily the Election Commission of India reports). We do not publish speculative predictions or exit polls.",
    "edSection2Title": "2. Data Sourcing Standards",
    "edSection1Desc": "Our network maintains absolute political neutrality. We are completely independent of any political party, candidate, or PR lobby. Our focus is exclusively on presenting clean, verifiable democratic metrics to the public.",
    "edSection1Title": "1. Non-Partisanship Commitment",
    "editorialLead": "Our non-partisan guidelines and data publishing ethics.",
    "editorialTitle": "Editorial Policy",
    "termsSection3Desc": "We are not legally liable for any political, commercial, or operational decisions made by users based on data discrepancies on this portal. Verify all election figures directly on the ECI official archives before reference.",
    "termsSection3Title": "3. Legal Liability",
    "termsSection2Desc": "This website is provided for educational, informational, and research purposes only. Users may not scrape the platform or copy entire datasets without explicit written authorization from IndiaElections.org.",
    "termsSection2Title": "2. Limitations of Use",
    "termsSection1Desc": "All election data, candidate profiles, vote shares, and results displayed on this portal are compiled from official Election Commission of India (ECI) public archives. While we verify all data points, results are approximate and should be cross-referenced with official records for absolute confirmation.",
    "termsSection1Title": "1. Data Accuracy Disclaimer",
    "termsLead": "Legal disclaimers, usage boundaries, and information guidelines.",
    "termsTitle": "Terms of Service",
    "privSection3Desc": "Our website contains links to external portals (such as the Election Commission of India official website). We are not responsible for the privacy practices or content of these external sites.",
    "privSection3Title": "3. External Links",
    "privSection2Desc": "When you send an email request for data access or advertising inquiries, we only use the email address and information you provide to fulfill your request. We never sell, rent, or share your contact details with third parties.",
    "privSection2Title": "2. Data Collected via Inquiries",
    "privSection1Desc": "We respect your privacy. We use Umami Analytics to track aggregate usage of our portal. Umami is a cookieless, privacy-first analytics platform. It does not collect any personally identifiable information (PII) or track users across different websites.",
    "privSection1Title": "1. Cookieless Analytics",
    "privacyLead": "Our commitment to protecting your privacy and transparent data practices.",
    "privacyTitle": "Privacy Policy",
    "footerCorrections": "Corrections Policy",
    "footerEditorial": "Editorial Policy",
    "footerTerms": "Terms of Service",
    "footerPrivacy": "Privacy Policy",
    "btnSendAdEmail": "Email Media Inquiry",
    "adContactDesc": "To request our media kit, traffic metrics, or customized advertising solutions, please send an email describing your campaign requirements to:",
    "adContactTitle": "Get in Touch",
    "adOpp3": "API & Data Sponsor: Co-branding and logo attribution on data downloads and CSV datasets.",
    "adOpp2": "Constituency Spotlight: Exclusive sponsorship opportunities on individual constituency detail pages.",
    "adOpp1": "Display Banners: Premium leaderboard and sidebar ad placements across the entire site.",
    "adOppTitle": "Advertising Formats",
    "adIntroDesc": "Our portal is a premier destination for election data, providing real-time constituency insights and historical analysis. We offer high-impact display ad placements, regional targeting, and programmatic sponsor opportunities.",
    "adIntroTitle": "Why Partner with IndiaElections.org?",
    "adLead": "Connect with a highly engaged audience of voters, researchers, policy makers, and journalists during the 2027 assembly elections.",
    "adTitle": "Advertise & Partner with Us",
    "footerAdvertise": "Advertise with Us",
    "btnSendEmail": "Send Email Request",
    "reqField4": "4. Specific datasets requested",
    "reqField3": "3. Intended use case (Research/Journalism/App)",
    "reqField2": "2. Organization or Institution name",
    "reqField1": "1. Your full name & role",
    "requestEmailFields": "Please include the following details in your message:",
    "requestEmailDesc": "To request historical datasets or API access, please send an email to:",
    "requestEmailTitle": "How to Request Access",
// Thank you! Your request has been recorded. Our data team will review your application and reach out to you via email shortly.",
// Submit Request",
// Email Address",
// Requested Dataset (e.g. Punjab 1997-2022 Results)",
// Intended Use Case (Research/Journalism/App)",
// Organization / Institution",
// Full Name",
    "dataApiAttributionDesc": "Data is provided free of charge for non-commercial research, academic studies and journalism. In return, we require a clear attribution with a do-follow link back to IndiaElections.org on your published articles, datasets or portals.",
    "dataApiAttributionTitle": "Free Academic & Media License",
    "dataApiDesc": "The IndiaElections.org central repository maintains complete constituency-level results, candidate profiles, vote shares and historical trends for all Lok Sabha and Legislative Assembly (Vidhan Sabha) elections since independence.",
    "dataApiLead": "We provide comprehensive, structured datasets of Indian elections to journalists, researchers, developers and academic institutions.",
    "dataApiTitle": "Historical Datasets & API Requests",
    "footerDataApi": "Data & API Requests",
    "constituencyDesc": "Browse every assembly constituency — searchable and filterable by district, category and party.",
    "candidatesDesc": "Search winners and runners-up from 2022 and 2017 assembly elections.",
    "districtsDesc": "Assembly constituencies grouped by district.",
    "partiesDesc": "Political parties active in assembly elections.",
    "trendsDesc": "Historical seat counts and turnout trends.",
    "results2022Desc": "Punjab Assembly Election held on February 20, 2022. Results declared March 10, 2022. Total turnout: 71.95%. AAP won 92 of 117 seats.",
    "results2017Desc": "Punjab Assembly Election held on February 4, 2017. Results declared March 11, 2017. Total turnout: 77.4%. INC won 77 of 117 seats.",
    "name": "Constituency",
    "feat1Title": "All 117 Constituencies",
    "feat1Desc": "Browse every Punjab assembly constituency with district, reservation status, and results.",
    "feat2Title": "2022 Election Results",
    "feat2Desc": "Full constituency-wise results from the 2022 Punjab assembly election with winners and margins.",
    "feat3Title": "2017 Election Results",
    "feat3Desc": "Congress landslide — 77 seats. Compare with 2022 to see how Punjab's politics changed.",
    "feat4Title": "Political Parties",
    "feat4Desc": "Profiles of AAP, INC, SAD, BJP and other parties with historical seat tallies and vote shares.",
    "feat5Title": "Candidates",
    "feat5Desc": "Search all winners and runners-up from 2022 and 2017 with votes and party information.",
    "feat6Title": "Historical Trends",
    "feat6Desc": "Punjab election data from 1997 to 2022 — seat counts, vote shares, and swing analysis.",
    "feat7Title": "District-wise View",
    "feat7Desc": "Analyse results by district — see which party dominated each of Punjab's 23 districts.",
    "feat8Title": "Data Sources & Methodology",
    "feat8Desc": "Information about our data sources, methodology and how to report errors.",
    "faq1Q": "When is the Punjab Assembly Election 2027?",
    "faq1A": "The Punjab Assembly Election 2027 is expected to be held in February 2027. The Election Commission of India will announce the official schedule approximately 2–3 months before polling. Dates on this site are estimates only.",
    "faq2Q": "How many seats are there in the Punjab Vidhan Sabha?",
    "faq2A": "The Punjab Legislative Assembly (Vidhan Sabha) has 117 seats spread across 23 districts. Of these, 34 seats are reserved for Scheduled Castes (SC). A party or alliance needs at least 59 seats to form the government.",
    "faq3Q": "Who won the 2022 Punjab election?",
    "faq3A": "Aam Aadmi Party (AAP) won a landslide victory in the 2022 Punjab Assembly Election, securing 92 of 117 seats with 42.01% vote share. Bhagwant Mann became Chief Minister.",
    "faq4Q": "What was the 2017 Punjab election result?",
    "faq4A": "In the 2017 Punjab Assembly Election, the Indian National Congress (INC) won a landslide, securing 77 of 117 seats. Captain Amarinder Singh became Chief Minister.",
    "faq5Q": "How many districts does Punjab have for assembly elections?",
    "faq5A": "Punjab has 23 administrative districts for electoral purposes. The largest district by number of assembly seats is Ludhiana (14 seats), followed by Amritsar (11 seats) and Jalandhar (9 seats).",
    "faq6Q": "What is the voter turnout history in Punjab elections?",
    "faq6A": "Punjab typically sees high voter turnout. The 2022 election recorded a turnout of 71.95%, whereas the 2017 election recorded 77.40%, and the 2012 election recorded 78.30%.",
    "faq7Q": "Who are the main political parties in Punjab?",
    "faq7A": "The major political parties active in Punjab are: Aam Aadmi Party (AAP, current ruling party), Indian National Congress (INC), Shiromani Akali Dal (SAD), and Bharatiya Janata Party (BJP).",
    "faq8Q": "How can I find results for my constituency?",
    "faq8A": "Use the Constituencies page to search by name or district. Each constituency page shows the 2022 and 2017 winner, vote margins, turnout, and a full candidate breakdown.",
    "siteName": "Punjab Elections 2027",
    "siteTagline": "Complete Election Data Portal",
    "navHome": "Home",
    "navConstituencies": "Constituencies",
    "navCandidates": "Candidates",
    "navResults": "Results",
    "nav2022": "2022 Results",
    "nav2017": "2017 Results",
    "navParties": "Parties",
    "navTrends": "Trends",
    "navDistricts": "Districts",
    "navAbout": "About",
    "navNetwork": "Network",
    "heroEyebrow": "Punjab Assembly Election",
    "heroTitle": "Punjab Elections 2027",
    "heroLead": "Your definitive data resource for all 117 Punjab Assembly constituencies — candidates, results, party tallies and historical trends.",
    "heroCta1": "View Constituencies",
    "heroCta2": "2022 Results",
    "countdownLabel": "Estimated time to election day",
    "countdownDays": "Days",
    "countdownHours": "Hrs",
    "countdownMins": "Min",
    "countdownSecs": "Sec",
    "stat1Num": "117",
    "stat1Lbl": "Constituencies",
    "stat2Num": "59",
    "stat2Lbl": "Majority Mark",
    "stat3Num": "2.14 Cr",
    "stat3Lbl": "Registered Voters",
    "stat4Num": "23",
    "stat4Lbl": "Districts",
    "tally2022": "2022 Election Results",
    "tallyLink": "View full results",
    "scheduleTitle": "2027 Election Schedule",
    "scheduleNote": "Dates are estimated based on the current 5-year assembly term (Mar 2022 – Mar 2027). Official schedule will be announced by the Election Commission of India.",
    "featuresTitle": "Explore Election Data",
    "faqTitle": "Frequently Asked Questions",
    "footerDesc": "Punjab Elections 2027 is an independent data portal providing comprehensive election information for Punjab Assembly Election 2027.",
    "footerData": "Data",
    "footerLinks": "Quick Links",
    "footerInfo": "Information",
    "footerConstituencies": "All Constituencies",
    "footerResults2022": "2022 Results",
    "footerResults2017": "2017 Results",
    "footerCandidates": "Candidates",
    "footerParties": "Parties",
    "footerTrends": "Historical Trends",
    "footerDistricts": "Districts",
    "footerAbout": "About Us",
    "footerNetwork": "Our Network",
    "footerSources": "Data Sources",
    "footerCopy": "© 2027 PunjabElectionResults.com",
    "footerDisclaimer": "Data sourced from Election Commission of India (ECI) official records. This is an independent information portal. All results are approximate; verify from ECI for official figures.",
    "winner": "Winner",
    "party": "Party",
    "votes": "Votes",
    "margin": "Margin",
    "turnout": "Turnout",
    "district": "District",
    "reserved": "Category",
    "acNo": "AC No.",
    "search": "Search constituencies...",
    "filterDist": "All Districts",
    "filterCat": "All Categories",
    "filterParty": "All Parties",
    "filterYear": "Select Year",
    "showing": "Showing",
    "of": "of",
    "results": "results",
    "noResults": "No results found.",
    "errTitle": "Page Not Found",
    "errDesc": "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
    "errBackHome": "Go to Home",
    "errBrowseAC": "All Constituencies",
    "netEyebrow": "Elections Network",
    "netTitle": "Our State Portals",
    "netDesc": "We are building specialized, lightning-fast election data portals for every Indian state. Explore the current network directories below.",
    "statusLive": "Active Hub",
    "statusLiveThis": "Current Portal",
    "statusSoon": "Coming Soon",
    "descIndia": "The central hub of our election analytics network. Offers general election updates, national party profiles, and centralized database archives.",
    "descPunjab": "Dedicated regional portal for the Punjab Vidhan Sabha. Complete coverage of all 117 assembly constituencies, candidate details, and 1997–2022 trends.",
    "descUP": "Dedicated regional portal for the Uttar Pradesh Vidhan Sabha. Complete coverage of all 403 assembly constituencies, candidate details, and 1997–2022 trends.",
    "descGujarat": "Upcoming election analytics portal for the Gujarat Legislative Assembly (182 seats).",
    "descHaryana": "Upcoming coverage for the Haryana Legislative Assembly elections (90 seats).",
    "descHimachal": "Upcoming election coverage for the Himachal Pradesh Vidhan Sabha (68 seats).",
    "visitHub": "Visit central hub ➔",
    "browsePunjab": "Browse Punjab data ➔",
    "launchSoon": "Launching soon",
    "visitPunjab": "Browse Punjab data ➔",
    "visitUP": "Visit UP portal ➔",
    "browseUP": "Browse UP data ➔",
    "tallySub": "Punjab Assembly Election — February 20, 2022 — Turnout: 71.95%",
    "countdownEst": "Est. polling date: February 2027 (subject to ECI announcement)",
    "countdownEstVal": "Est. polling date: February 2027 (subject to ECI announcement)",
    "runnerup": "Runner-up",
    "bjpSeats": "BJP Seats",
    "spSeats": "SP Seats",
    "aapSeats": "AAP Seats",
    "incSeats": "INC Seats",
    "pollingDate": "Polling Date",
    "voterTurnout": "Voter Turnout",
    "seats": "seats",
    "seat": "seat",
    "others": "Others",
    "aboutDesc": "Punjab Elections 2027 is an independent, non-partisan data portal covering all 117 Punjab assembly constituencies.",
    "aboutDisclaimerTitle": "Important Disclaimer & Network Attribution",
    "aboutDisclaimerDesc": "This portal is operated as part of the IndiaElections.org national election information network. Data is compiled from publicly available Election Commission of India (ECI) official records and IndiaElections.org historical archives. This portal is independent and non-partisan.",
    "aboutPurposeTitle": "Purpose & Network Partnership",
    "aboutPurposeDesc1": "Punjab Elections 2027 is part of the IndiaElections.org network — dedicated to providing transparent, accessible, fast election data across India. In the run-up to the 2027 Vidhan Sabha election, voters deserve a non-partisan, comprehensive data portal to explore their assembly constituency, candidate history, and election trends.",
    "aboutPurposeDesc2": "The portal is available in English, Hindi and Punjabi to serve all voters across Punjab.",
    "aboutSourcesTitle": "Data Sources & Attribution",
    "aboutMethodologyTitle": "Methodology & Accuracy",
    "aboutMethodologyItem1": "Constituency-level results (votes, margins, turnout) are approximate and may differ slightly from official ECI figures due to rounding or minor adjustments.",
    "aboutMethodologyItem2": "Historical election data (1997–2012) is sourced from ECI archives and may contain minor inaccuracies.",
    "aboutMethodologyItem3": "Winner and runner-up candidate names for historical elections are representative; verify from ECI for precise names.",
    "aboutMethodologyItem4": "The 2027 election schedule is entirely estimated. No official dates have been announced. The actual date will be decided by the Election Commission of India.",
    "aboutMethodologyItem5": "Party seat tallies include all candidates fielded under that party symbol, including rebel candidates where applicable.",
    "aboutCoverageTitle": "Coverage",
    "aboutPagesTitle": "Pages",
    "aboutLanguagesTitle": "Languages",
    "aboutContactTitle": "Reporting Errors & Contact",
    "aboutContactDesc1": "If you find an error in any constituency data, election results, or candidate information, please verify against the official Election Commission of India website.",
    "aboutContactDesc2": "For data corrections, feedback, media inquiries, or network partnerships, please email us at:",
    "sourceParent": "Parent Network",
    "sourceOfficial": "Primary Official Source",
    "source22Data": "2022 Election Data",
    "source17Data": "2017 Election Data",
    "sourceHistData": "Historical Trends (1997–2012)",
    "sourceSched": "2027 Schedule",
    "sourceSchedVal": "Estimated — subject to ECI announcement",
    "legendAap92": "AAP — 92 seats",
    "legendInc18": "INC — 18 seats",
    "legendSad3": "SAD — 3 seats",
    "legendBjp2": "BJP — 2 seats",
    "legendBsp1": "BSP — 1 seat",
    "legendInd1": "IND — 1 seat",
    "legendInc77": "INC — 77 seats",
    "legendAap20": "AAP — 20 seats",
    "legendSad15": "SAD — 15 seats",
    "legendBjp3": "BJP — 3 seats",
    "legendLip2": "LIP — 2 seats",
    "trendsTitle": "Seats Won — All Elections"
},
  hi: {
    "shareTitle": "साझा करें:",
    "corrSection3Desc": "हम ऑडिट ट्रेल को संरक्षित करने और शोधकर्ताओं और पत्रकारों के लिए पारदर्शिता की गारंटी के लिए अपने केंद्रीय भंडार में डेटा सुधारों का एक स्वच्छ लॉग बनाए रखते हैं।",
    "corrSection3Title": "3. पारदर्शिता प्रतिबद्धता",
    "corrSection2Desc": "सुधार का अनुरोध प्राप्त होने पर, हमारे शोधकर्ता आधिकारिक ECI पीडीएफ के खिलाफ रिपोर्ट को सत्यापित करेंगे। यदि किसी त्रुटि की पुष्टि होती है, तो हम अपने डेटाबेस को सही करेंगे और 48 घंटों के भीतर प्रभावित फाइलों को पुनः प्रकाशित करेंगे।",
    "corrSection2Title": "2. सत्यापन समयरेखा",
    "corrSection1Desc": "यदि आपको कोई उम्मीदवार के नाम की वर्तनी में गलती, डेटा ट्रांसक्रिप्शन त्रुटि, या गलत चुनाव का आंकड़ा मिलता है, तो कृपया हमारी डेटा टीम को contact@indiaelections.org पर ईमेल करें। कृपया विशिष्ट पृष्ठ का URL और सही जानकारी वाले आधिकारिक ECI रिकॉर्ड का एक लिंक शामिल करें।",
    "corrSection1Title": "1. त्रुटि की रिपोर्ट करना",
    "corrLead": "डेटा त्रुटियों को सुधारने और समस्याओं की रिपोर्ट करने के लिए हमारी पारदर्शी प्रक्रिया।",
    "corrTitle": "सुधार नीति",
    "edSection3Desc": "हम टाइपो या विज़ुअल रिपोर्टिंग त्रुटियों को रोकने के लिए तैनाती से पहले ECI सारांश डेटा के खिलाफ प्रोग्रामेटिक सत्यापन के माध्यम से सभी सांख्यिकीय इनपुट को सत्यापित करते हैं।",
    "edSection3Title": "3. सटीकता की जांच",
    "edSection2Desc": "प्रत्येक चुनाव परिणाम, वोट गणना, उम्मीदवार सूची और श्रेणी लेआउट सीधे सार्वजनिक रूप से उपलब्ध सरकारी दस्तावेजों (मुख्य रूप से भारत निर्वाचन आयोग की रिपोर्ट) से प्राप्त होते हैं। हम सट्टा भविष्यवाणियां या एग्जिट पोल प्रकाशित नहीं करते हैं।",
    "edSection2Title": "2. डेटा सोर्सिंग मानक",
    "edSection1Desc": "हमारा नेटवर्क पूर्ण राजनीतिक तटस्थता बनाए रखता है। हम किसी भी राजनीतिक दल, उम्मीदवार या पीआर लॉबी से पूरी तरह स्वतंत्र हैं। हमारा ध्यान विशेष रूप से जनता के सामने स्वच्छ, सत्यापन योग्य लोकतांत्रिक मैट्रिक्स प्रस्तुत करने पर है।",
    "edSection1Title": "1. गैर-पक्षपातपूर्ण प्रतिबद्धता",
    "editorialLead": "हमारे गैर-पक्षपातपूर्ण दिशानिर्देश और डेटा प्रकाशन नैतिकता।",
    "editorialTitle": "संपादकीय नीति",
    "termsSection3Desc": "हम इस पोर्टल पर डेटा विसंगतियों के आधार पर उपयोगकर्ताओं द्वारा लिए गए किसी भी राजनीतिक, व्यावसायिक या परिचालन संबंधी निर्णयों के लिए कानूनी रूप से उत्तरदायी नहीं हैं। संदर्भ से पहले सीधे ECI आधिकारिक अभिलेखागार पर सभी चुनाव आंकड़ों को सत्यापित करें।",
    "termsSection3Title": "3. कानूनी दायित्व",
    "termsSection2Desc": "यह वेबसाइट केवल शैक्षिक, सूचनात्मक और अनुसंधान उद्देश्यों के लिए प्रदान की गई है। उपयोगकर्ता IndiaElections.org से स्पष्ट लिखित प्राधिकरण के बिना प्लेटफॉर्म को स्क्रैप नहीं कर सकते हैं या पूरे डेटासेट की प्रतिलिपि नहीं बना सकते हैं।",
    "termsSection2Title": "2. उपयोग की सीमाएं",
    "termsSection1Desc": "इस पोर्टल पर प्रदर्शित सभी चुनाव डेटा, उम्मीदवार प्रोफाइल, मत प्रतिशत और परिणाम आधिकारिक भारत निर्वाचन आयोग (ECI) के सार्वजनिक अभिलेखागार से संकलित किए गए हैं। हालांकि हम सभी डेटा बिंदुओं को सत्यापित करते हैं, परिणाम अनुमानित हैं और पूर्ण पुष्टि के लिए आधिकारिक रिकॉर्ड के साथ क्रॉस-रेफरेंस किया जाना चाहिए।",
    "termsSection1Title": "1. डेटा सटीकता अस्वीकरण",
    "termsLead": "कानूनी अस्वीकरण, उपयोग की सीमाएं और सूचना दिशानिर्देश।",
    "termsTitle": "सेवा की शर्तें",
    "privSection3Desc": "हमारी वेबसाइट में बाहरी पोर्टलों (जैसे कि भारत निर्वाचन आयोग की आधिकारिक वेबसाइट) के लिंक शामिल हैं। हम इन बाहरी साइटों की गोपनीयता प्रथाओं या सामग्री के लिए ज़िम्मेदार नहीं हैं।",
    "privSection3Title": "3. बाहरी लिंक",
    "privSection2Desc": "जब आप डेटा एक्सेस या विज्ञापन पूछताछ के लिए एक ईमेल अनुरोध भेजते हैं, तो हम केवल आपके अनुरोध को पूरा करने के लिए आपके द्वारा प्रदान किए गए ईमेल पते और जानकारी का उपयोग करते हैं। हम आपके संपर्क विवरण को कभी भी तीसरे पक्ष के साथ बेचते, किराए पर या साझा नहीं करते हैं।",
    "privSection2Title": "2. पूछताछ के माध्यम से एकत्रित डेटा",
    "privSection1Desc": "हम आपकी गोपनीयता का सम्मान करते हैं। हम अपने पोर्टल के कुल उपयोग को ट्रैक करने के लिए उमामी एनालिटिक्स का उपयोग करते हैं। उमामी एक कुकी रहित, गोपनीयता-प्रथम विश्लेषण मंच है। यह कोई व्यक्तिगत पहचान योग्य जानकारी (PII) एकत्र नहीं करता है या विभिन्न वेबसाइटों पर उपयोगकर्ताओं को ट्रैक नहीं करता है।",
    "privSection1Title": "1. कुकी रहित विश्लेषण",
    "privacyLead": "आपकी गोपनीयता की रक्षा करने और पारदर्शी डेटा प्रथाओं के प्रति हमारी प्रतिबद्धता।",
    "privacyTitle": "गोपनीयता नीति",
    "footerCorrections": "सुधार नीति",
    "footerEditorial": "संपादकीय नीति",
    "footerTerms": "सेवा की शर्तें",
    "footerPrivacy": "गोपनीयता नीति",
    "btnSendAdEmail": "ईमेल मीडिया पूछताछ भेजें",
    "adContactDesc": "हमारे मीडिया किट, ट्रैफ़िक मेट्रिक्स, या अनुकूलित विज्ञापन समाधानों का अनुरोध करने के लिए, कृपया अपनी अभियान आवश्यकताओं का वर्णन करते हुए एक ईमेल भेजें:",
    "adContactTitle": "संपर्क करें",
    "adOpp3": "एपीआई और डेटा प्रायोजक: डेटा डाउनलोड और सीएसवी डेटासेट पर सह-ब्रांडिंग और लोगो विशेषता।",
    "adOpp2": "निर्वाचन क्षेत्र स्पॉटलाइट: व्यक्तिगत निर्वाचन क्षेत्र विवरण पृष्ठों पर विशेष प्रायोजन के अवसर।",
    "adOpp1": "डिस्प्ले बैनर: पूरी साइट पर प्रीमियम लीडरबोर्ड और साइडबार विज्ञापन।",
    "adOppTitle": "विज्ञापन प्रारूप",
    "adIntroDesc": "हमारा पोर्टल चुनाव डेटा के लिए एक प्रमुख गंतव्य है, जो रीयल-टाइम निर्वाचन क्षेत्र अंतर्दृष्टि और ऐतिहासिक विश्लेषण प्रदान करता है। हम उच्च-प्रभाव वाले डिस्प्ले विज्ञापन, क्षेत्रीय लक्ष्यीकरण और प्रायोजन अवसर प्रदान करते हैं।",
    "adIntroTitle": "IndiaElections.org के साथ साझेदारी क्यों करें?",
    "adLead": "2027 के विधानसभा चुनावों के दौरान मतदाताओं, शोधकर्ताओं, नीति निर्माताओं और पत्रकारों के अत्यधिक सक्रिय दर्शकों से जुड़ें।",
    "adTitle": "हमारे साथ विज्ञापन और साझेदारी करें",
    "footerAdvertise": "हमारे साथ विज्ञापन करें",
    "btnSendEmail": "ईमेल अनुरोध भेजें",
    "reqField4": "4. विशिष्ट डेटासेट जिसकी आवश्यकता है",
    "reqField3": "3. इच्छित उपयोग (अनुसंधान/पत्रकारिता/ऐप)",
    "reqField2": "2. संगठन या संस्थान का नाम",
    "reqField1": "1. आपका पूरा नाम और भूमिका",
    "requestEmailFields": "कृपया अपने संदेश में निम्नलिखित विवरण शामिल करें:",
    "requestEmailDesc": "ऐतिहासिक डेटासेट या एपीआई एक्सेस का अनुरोध करने के लिए, कृपया इस पते पर एक ईमेल भेजें:",
    "requestEmailTitle": "पहुंच का अनुरोध कैसे करें",
// धन्यवाद! आपका अनुरोध दर्ज कर लिया गया है। हमारी डेटा टीम आपके आवेदन की समीक्षा करेगी और जल्द ही ईमेल के माध्यम से आपसे संपर्क करेगी।",
// अनुरोध सबमिट करें",
// ईमेल पता",
// अनुरोधित डेटासेट (जैसे पंजाब 1997-2022 परिणाम)",
// इच्छित उपयोग (अनुसंधान/पत्रकारिता/ऐप)",
// संगठन / संस्थान",
// पूरा नाम",
    "dataApiAttributionDesc": "गैर-व्यावसायिक अनुसंधान, शैक्षणिक अध्ययन और पत्रकारिता के लिए डेटा मुफ्त प्रदान किया जाता है। बदले में, हमें आपके प्रकाशित लेखों, डेटासेट या पोर्टल्स पर IndiaElections.org के लिए एक स्पष्ट लिंक (do-follow link) की आवश्यकता होती है।",
    "dataApiAttributionTitle": "मुफ्त शैक्षणिक और मीडिया लाइसेंस",
    "dataApiDesc": "IndiaElections.org केंद्रीय भंडार स्वतंत्रता के बाद से सभी लोकसभा और विधानसभा चुनावों के लिए निर्वाचन क्षेत्र-वार परिणाम, उम्मीदवार प्रोफाइल, मत प्रतिशत और ऐतिहासिक रुझान बनाए रखता है।",
    "dataApiLead": "हम पत्रकारों, शोधकर्ताओं, डेवलपर्स और शैक्षणिक संस्थानों को भारतीय चुनावों के व्यापक, संरचित डेटासेट प्रदान करते हैं।",
    "dataApiTitle": "ऐतिहासिक डेटासेट और एपीआई अनुरोध",
    "footerDataApi": "डेटा और एपीआई अनुरोध",
    "constituencyDesc": "प्रत्येक विधानसभा क्षेत्र को ब्राउज़ करें — जिले, श्रेणी और पार्टी द्वारा खोज और फ़िल्टर योग्य।",
    "candidatesDesc": "2022 और 2017 विधानसभा चुनावों के विजेताओं और उपविजेताओं को खोजें।",
    "districtsDesc": "जिलेवार विधानसभा क्षेत्र।",
    "partiesDesc": "विधानसभा चुनावों में सक्रिय राजनीतिक दल।",
    "trendsDesc": "ऐतिहासिक सीट संख्या और मतदान के रुझान।",
    "results2022Desc": "पंजाब विधानसभा चुनाव 20 फरवरी 2022 को आयोजित। परिणाम 10 मार्च 2022 को घोषित। कुल मतदान: 71.95%। आप ने 117 में से 92 सीटें जीतीं।",
    "results2017Desc": "पंजाब विधानसभा चुनाव 4 फरवरी 2017 को आयोजित। परिणाम 11 मार्च 2017 को घोषित। कुल मतदान: 77.4%। कांग्रेस ने 117 में से 77 सीटें जीतीं।",
    "name": "निर्वाचन क्षेत्र",
    "feat1Title": "सभी 117 निर्वाचन क्षेत्र",
    "feat1Desc": "जिले, आरक्षण स्थिति और परिणामों के साथ प्रत्येक पंजाब विधानसभा क्षेत्र को ब्राउज़ करें।",
    "feat2Title": "2022 चुनाव परिणाम",
    "feat2Desc": "विजेताओं और अंतर के साथ 2022 पंजाब विधानसभा चुनाव के निर्वाचन क्षेत्रवार पूर्ण परिणाम।",
    "feat3Title": "2017 चुनाव परिणाम",
    "feat3Desc": "कांग्रेस की प्रचंड जीत - 77 सीटें। यह देखने के लिए 2022 से तुलना करें कि पंजाब की राजनीति कैसे बदली।",
    "feat4Title": "राजनीतिक दल",
    "feat4Desc": "ऐतिहासिक सीट योग और मत प्रतिशत के साथ आप, कांग्रेस, अकाली दल, भाजपा और अन्य दलों के प्रोफाइल।",
    "feat5Title": "उम्मीदवार",
    "feat5Desc": "वोट और पार्टी की जानकारी के साथ 2022 और 2017 के सभी विजेताओं और उपविजेताओं को खोजें।",
    "feat6Title": "ऐतिहासिक रुझान",
    "feat6Desc": "1997 से 2022 तक पंजाब चुनाव का डेटा — सीट संख्या, मत प्रतिशत, और स्विंग विश्लेषण।",
    "feat7Title": "जिला-वार दृश्य",
    "feat7Desc": "जिलेवार परिणामों का विश्लेषण करें — देखें कि पंजाब के 23 जिलों में से प्रत्येक पर किस पार्टी का दबदबा रहा।",
    "feat8Title": "डेटा स्रोत और कार्यप्रणाली",
    "feat8Desc": "हमारे डेटा स्रोतों, कार्यप्रणाली और त्रुटियों की रिपोर्ट करने के तरीके के बारे में जानकारी।",
    "faq1Q": "पंजाब विधानसभा चुनाव 2027 कब है?",
    "faq1A": "पंजाब विधानसभा चुनाव 2027 फरवरी 2027 में होने की उम्मीद है। भारत निर्वाचन आयोग मतदान से लगभग 2-3 महीने पहले आधिकारिक कार्यक्रम की घोषणा करेगा। इस साइट पर दी गई तारीखें केवल अनुमानित हैं।",
    "faq2Q": "पंजाब विधानसभा में कितनी सीटें हैं?",
    "faq2A": "पंजाब विधानसभा (विधानसभा) में 23 जिलों में फैली 117 सीटें हैं। इनमें से 34 सीटें अनुसूचित जाति (SC) के लिए आरक्षित हैं। सरकार बनाने और बहुमत के लिए किसी दल या गठबंधन को कम से कम 59 सीटों की आवश्यकता होती है।",
    "faq3Q": "2022 का पंजाब चुनाव किसने जीता?",
    "faq3A": "आम आदमी पार्टी (आप) ने 2022 के पंजाब विधानसभा चुनाव में 42.01% मत प्रतिशत के साथ 117 में से 92 सीटें जीतकर प्रचंड जीत हासिल की। भगवंत मान मुख्यमंत्री बने।",
    "faq4Q": "2017 के पंजाब चुनाव का क्या परिणाम रहा?",
    "faq4A": "2017 के पंजाब विधानसभा चुनाव में, भारतीय राष्ट्रीय कांग्रेस (कांग्रेस) ने 117 में से 77 सीटें जीतकर प्रचंड जीत हासिल की। कैप्टन अमरिंदर सिंह मुख्यमंत्री बने।",
    "faq5Q": "विधानसभा चुनावों के लिए पंजाब में कितने जिले हैं?",
    "faq5A": "पंजाब में चुनावी उद्देश्यों के लिए 23 प्रशासनिक जिले हैं। विधानसभा सीटों की संख्या के हिसाब से सबसे बड़ा जिला लुधियाना (14 सीटें) है, उसके बाद अमृतसर (11 सीटें) और जालंधर (9 सीटें) हैं।",
    "faq6Q": "पंजाब के चुनावों में मतदान का इतिहास क्या रहा है?",
    "faq6A": "पंजाब में आमतौर पर सक्रिय मतदाता भागीदारी देखी जाती. 2022 के चुनाव में 71.95% मतदान दर्ज किया गया था, जबकि 2017 के चुनाव में 77.40% और 2012 के चुनाव में 78.30% मतदान दर्ज किया गया था।",
    "faq7Q": "पंजाब में मुख्य राजनीतिक दल कौन से हैं?",
    "faq7A": "पंजाब में सक्रिय प्रमुख राजनीतिक दल हैं: आम आदमी पार्टी (आप, वर्तमान सत्तारूढ़ दल), भारतीय राष्ट्रीय कांग्रेस (कांग्रेस), शिरोमणि अकाली दल (अकाली दल), और भारतीय जनता पार्टी (भाजपा)।",
    "faq8Q": "मैं अपने निर्वाचन क्षेत्र के परिणाम कैसे ढूंढ सकता हूं?",
    "faq8A": "नाम या जिले से खोजने के लिए निर्वाचन क्षेत्र (Constituencies) पृष्ठ का उपयोग करें। प्रत्येक निर्वाचन क्षेत्र पृष्ठ 2022 and 2017 के विजेता, वोट अंतर, मतदान और पूर्ण उम्मीदवार विवरण दिखाता है। आप किसी भी कॉलम द्वारा क्रमबद्ध सूची के लिए परिणाम पृष्ठों का भी उपयोग कर सकते हैं।",
    "siteName": "पंजाब चुनाव 2027",
    "siteTagline": "संपूर्ण चुनाव डेटा पोर्टल",
    "navHome": "होम",
    "navConstituencies": "निर्वाचन क्षेत्र",
    "navCandidates": "उम्मीदवार",
    "navResults": "परिणाम",
    "nav2022": "2022 परिणाम",
    "nav2017": "2017 परिणाम",
    "navParties": "दल",
    "navTrends": "रुझान",
    "navDistricts": "जिले",
    "navAbout": "परिचय",
    "navNetwork": "नेटवर्क",
    "heroEyebrow": "पंजाब विधानसभा चुनाव",
    "heroTitle": "पंजाब चुनाव 2027",
    "heroLead": "सभी 117 पंजाब विधानसभा हलकों के लिए उम्मीदवारों, परिणामों, पार्टी सीटों और ऐतिहासिक रुझानों का संपूर्ण डेटा।",
    "heroCta1": "हलके देखें",
    "heroCta2": "2022 परिणाम",
    "countdownLabel": "चुनाव दिवस तक अनुमानित समय",
    "countdownDays": "दिन",
    "countdownHours": "घंटे",
    "countdownMins": "मिनट",
    "countdownSecs": "सेकंड",
    "stat1Num": "117",
    "stat1Lbl": "निर्वाचन क्षेत्र",
    "stat2Num": "59",
    "stat2Lbl": "बहुमत",
    "stat3Num": "2.14 करोड़",
    "stat3Lbl": "पंजीकृत मतदाता",
    "stat4Num": "23",
    "stat4Lbl": "जिले",
    "tally2022": "2022 चुनाव परिणाम",
    "tallyLink": "पूरे परिणाम देखें",
    "scheduleTitle": "2027 चुनाव कार्यक्रम",
    "scheduleNote": "तारीखें मौजूदा 5 वर्षीय विधानसभा कार्यकाल के आधार पर अनुमानित हैं। आधिकारिक कार्यक्रम भारत निर्वाचन आयोग द्वारा घोषित किया जाएगा।",
    "featuresTitle": "चुनाव डेटा एक्सप्लोर करें",
    "faqTitle": "अक्सर पूछे जाने वाले प्रश्न",
    "footerDesc": "पंजाब चुनाव 2027 पंजाब विधानसभा चुनाव 2027 के लिए व्यापक चुनाव जानकारी प्रदान करने वाला एक स्वतंत्र डेटा पोर्टल है।",
    "footerData": "डेटा",
    "footerLinks": "त्वरित लिंक",
    "footerInfo": "जानकारी",
    "footerConstituencies": "सभी निर्वाचन क्षेत्र",
    "footerResults2022": "2022 परिणाम",
    "footerResults2017": "2017 परिणाम",
    "footerCandidates": "उम्मीदवार",
    "footerParties": "राजनीतिक दल",
    "footerTrends": "ऐतिहासिक रुझान",
    "footerDistricts": "जिले",
    "footerAbout": "हमारे बारे में",
    "footerNetwork": "हमारा नेटवर्क",
    "footerSources": "डेटा स्रोत",
    "footerCopy": "© 2027 PunjabElectionResults.com",
    "footerDisclaimer": "डेटा भारत निर्वाचन आयोग (ECI) के आधिकारिक रिकॉर्ड से लिया गया है। यह एक स्वतंत्र सूचना पोर्टल है।",
    "winner": "विजेता",
    "party": "दल",
    "votes": "वोट",
    "margin": "अंतर",
    "turnout": "मतदान",
    "district": "जिला",
    "reserved": "श्रेणी",
    "acNo": "क्रमांक",
    "search": "खोजें...",
    "filterDist": "सभी जिले",
    "filterCat": "सभी श्रेणी",
    "filterParty": "सभी दल",
    "filterYear": "वर्ष चुनें",
    "showing": "दिखा रहा",
    "of": "में से",
    "results": "परिणाम",
    "noResults": "कोई परिणाम नहीं मिला।",
    "errTitle": "पृष्ठ नहीं मिला",
    "errDesc": "जिस पृष्ठ को आप खोज रहे हैं उसे शायद हटा दिया गया है, उसका नाम बदल दिया गया है, या वह अस्थायी रूप से अनुपलब्ध है।",
    "errBackHome": "मुख्य पृष्ठ पर जाएं",
    "errBrowseAC": "सभी निर्वाचन क्षेत्र",
    "netEyebrow": "चुनाव नेटवर्क",
    "netTitle": "हमारे राज्य पोर्टल",
    "netDesc": "हम भारत के प्रत्येक राज्य के लिए विशिष्ट और तेज़ चुनाव डेटा पोर्टल बना रहे हैं। नीचे दिए गए नेटवर्क डायरेक्टरी को देखें।",
    "statusLive": "सक्रिय हब",
    "statusLiveThis": "वर्तमान पोर्टल",
    "statusSoon": "जल्द आ रहा है",
    "descIndia": "हमारे चुनाव विश्लेषण नेटवर्क का मुख्य केंद्र। आम चुनाव अपडेट, राष्ट्रीय पार्टी प्रोफाइल और केंद्रीकृत डेटाबेस पुरालेख प्रदान करता है।",
    "descPunjab": "पंजाब विधानसभा के लिए समर्पित क्षेत्रीय पोर्टल। सभी 117 विधानसभा क्षेत्रों, उम्मीदवार विवरण और 1997-2022 के रुझानों की पूरी जानकारी।",
    "descUP": "उत्तर प्रदेश विधानसभा के लिए समर्पित क्षेत्रीय पोर्टल। सभी 403 विधानसभा क्षेत्रों, उम्मीदवार विवरण और 1997-2022 के रुझानों की पूरी जानकारी।",
    "descGujarat": "गुजरात विधानसभा (182 सीटें) के लिए आगामी चुनाव विश्लेषण पोर्टल।",
    "descHaryana": "हरियाणा विधानसभा चुनाव (90 सीटें) के लिए आगामी कवरेज।",
    "descHimachal": "हिमाचल प्रदेश विधानसभा (68 सीटें) के लिए आगामी चुनाव कवरेज।",
    "visitHub": "मुख्य केंद्र पर जाएं ➔",
    "browsePunjab": "पंजाब डेटा देखें ➔",
    "launchSoon": "जल्द लॉन्च होगा",
    "visitPunjab": "पंजाब डेटा देखें ➔",
    "visitUP": "यूपी पोर्टल देखें ➔",
    "browseUP": "यूपी डेटा देखें ➔",
    "tallySub": "पंजाब विधानसभा चुनाव — 20 फरवरी 2022 — कुल मतदान: 71.95%",
    "countdownEst": "अनुमानित मतदान तिथि: फरवरी 2027 (भारत निर्वाचन आयोग की घोषणा के अधीन)",
    "countdownEstVal": "अनुमानित मतदान तिथि: फरवरी 2027 (भारत निर्वाचन आयोग की घोषणा के अधीन)",
    "runnerup": "उपविजेता",
    "bjpSeats": "भाजपा सीटें",
    "spSeats": "सपा सीटें",
    "aapSeats": "आप सीटें",
    "incSeats": "कांग्रेस सीटें",
    "pollingDate": "मतदान तिथि",
    "voterTurnout": "मतदान प्रतिशत",
    "seats": "सीटें",
    "seat": "सीट",
    "others": "अन्य",
    "aboutDisclaimerTitle": "महत्वपूर्ण अस्वीकरण और नेटवर्क एट्रिब्यूशन",
    "aboutDisclaimerDesc": "यह पोर्टल IndiaElections.org राष्ट्रीय चुनाव सूचना नेटवर्क के हिस्से के रूप में संचालित है। डेटा भारत निर्वाचन आयोग (ECI) के आधिकारिक रिकॉर्ड और IndiaElections.org के ऐतिहासिक अभिलेखागार से संकलित किया गया है। यह पोर्टल स्वतंत्र और निष्पक्ष है।",
    "aboutPurposeTitle": "उद्देश्य और नेटवर्क साझेदारी",
    "aboutPurposeDesc1": "पंजाब चुनाव 2027 IndiaElections.org नेटवर्क का हिस्सा है — जो पूरे भारत में पारदर्शी, सुलभ और तेज़ चुनाव डेटा प्रदान करने के लिए समर्पित है। 2027 की विधानसभा चुनाव के दौरान, मतदाता अपने निर्वाचन क्षेत्र, उम्मीदवार के इतिहास और चुनावी रुझानों का पता लगाने के लिए एक निष्पक्ष, व्यापक डेटा पोर्टल के हकदार हैं।",
    "aboutPurposeDesc2": "पंजाब के सभी मतदाताओं की सुविधा के लिए यह पोर्टल अंग्रेजी, हिंदी और पंजाबी तीनों भाषाओं में उपलब्ध है।",
    "aboutSourcesTitle": "डेटा स्रोत और श्रेय",
    "aboutMethodologyTitle": "कार्यप्रणाली और सटीकता",
    "aboutMethodologyItem1": "निर्वाचन क्षेत्र-स्तरीय परिणाम (वोट, जीत का अंतर, मतदान) अनुमानित हैं और राउंडिंग या मामूली समायोजन के कारण आधिकारिक ECI आंकड़ों से थोड़े भिन्न हो सकते हैं।",
    "aboutMethodologyItem2": "ऐतिहासिक चुनाव डेटा (1997-2012) ECI अभिलेखागार से लिया गया है और इसमें मामूली अशुद्धियाँ हो सकती हैं।",
    "aboutMethodologyItem3": "ऐतिहासिक चुनावों के लिए विजेता और उपविजेता उम्मीदवारों के नाम प्रतिनिधि हैं; सटीक नामों के लिए ECI से सत्यापित करें।",
    "aboutMethodologyItem4": "2027 का चुनाव कार्यक्रम पूरी तरह से अनुमानित है। कोई आधिकारिक तारीख घोषित नहीं की गई है। वास्तविक तारीख का फैसला भारत निर्वाचन आयोग द्वारा किया जाएगा।",
    "aboutMethodologyItem5": "पार्टी सीट संख्या में उस पार्टी के चुनाव चिह्न के तहत खड़े सभी उम्मीदवार शामिल हैं, जिसमें लागू होने वाले विद्रोही उम्मीदवार भी शामिल हैं।",
    "aboutCoverageTitle": "कवरेज",
    "aboutPagesTitle": "पृष्ठ",
    "aboutLanguagesTitle": "भाषाएं",
    "aboutContactTitle": "त्रुटियों की रिपोर्टिंग और संपर्क",
    "aboutContactDesc1": "यदि आपको किसी भी निर्वाचन क्षेत्र के डेटा, चुनाव परिणाम या उम्मीदवार की जानकारी में कोई त्रुटि मिलती है, तो कृपया आधिकारिक भारत निर्वाचन आयोग की वेबसाइट से सत्यापित करें।",
    "aboutContactDesc2": "डेटा सुधार, प्रतिक्रिया, मीडिया पूछताछ या नेटवर्क साझेदारी के लिए, कृपया हमें ईमेल करें:",
    "sourceParent": "मूल नेटवर्क",
    "sourceOfficial": "प्राथमिक आधिकारिक स्रोत",
    "source22Data": "2022 चुनाव डेटा",
    "source17Data": "2017 चुनाव डेटा",
    "sourceHistData": "ऐतिहासिक रुझान (1997-2012)",
    "sourceSched": "2027 कार्यक्रम",
    "sourceSchedVal": "अनुमानित — चुनाव आयोग की घोषणा के अधीन",
    "legendAap92": "आप — 92 सीटें",
    "legendInc18": "कांग्रेस — 18 सीटें",
    "legendSad3": "अकाली दल — 3 सीटें",
    "legendBjp2": "भाजपा — 2 सीटें",
    "legendBsp1": "बसपा — 1 सीट",
    "legendInd1": "निर्दलीय — 1 सीट",
    "legendInc77": "कांग्रेस — 77 सीटें",
    "legendAap20": "आप — 20 सीटें",
    "legendSad15": "अकाली दल — 15 सीटें",
    "legendBjp3": "भाजपा — 3 सीटें",
    "legendLip2": "एलआईपी — 2 सीटें",
    "trendsTitle": "जीती गई सीटें — सभी चुनाव"
},
  pa: {
    "shareTitle": "ਸਾਂਝਾ ਕਰੋ:",
    "corrSection3Desc": "ਅਸੀਂ ਆਡਿਟ ਟ੍ਰੇਲ ਨੂੰ ਸੁਰੱਖਿਅਤ ਰੱਖਣ ਅਤੇ ਖੋਜਕਰਤਾਵਾਂ ਅਤੇ ਪੱਤਰਕਾਰਾਂ ਲਈ ਪਾਰਦਰਸ਼ਤਾ ਦੀ ਗਾਰੰਟੀ ਦੇਣ ਲਈ ਆਪਣੇ ਕੇਂਦਰੀ ਭੰਡਾਰ ਵਿੱਚ ਡੇਟਾ ਸੁਧਾਰਾਂ ਦਾ ਇੱਕ ਸਾਫ਼ ਲੌਗ ਬਣਾਏ ਰੱਖਦੇ ਹਾਂ।",
    "corrSection3Title": "3. ਪਾਰਦਰਸ਼ਤਾ ਵਚਨਬੱਧਤਾ",
    "corrSection2Desc": "ਸੋਧ ਦੀ ਬੇਨਤੀ ਪ੍ਰਾਪਤ ਹੋਣ 'ਤੇ, ਸਾਡੇ ਖੋਜਕਰਤਾ ਅਧਿਕਾਰਤ ECI ਪੀਡੀਐਫ ਦੇ ਵਿਰੁੱਧ ਰਿਪੋਰਟ ਦੀ ਪੁਸ਼ਟੀ ਕਰਨਗੇ। ਜੇਕਰ ਕਿਸੇ ਗਲਤੀ ਦੀ ਪੁਸ਼ਟੀ ਹੁੰਦੀ ਹੈ, ਤਾਂ ਅਸੀਂ ਆਪਣੇ ਡੇਟਾਬੇਸ ਨੂੰ ਸਹੀ ਕਰਾਂਗੇ ਅਤੇ 48 ਘੰਟਿਆਂ ਦੇ ਅੰਦਰ ਪ੍ਰਭਾਵਿਤ ਫਾਈਲਾਂ ਨੂੰ ਦੁਬਾਰਾ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਾਂਗੇ।",
    "corrSection2Title": "2. ਪੁਸ਼ਟੀ ਦੀ ਸਮਾਂ-ਸੀਮਾ",
    "corrSection1Desc": "ਜੇਕਰ ਤੁਹਾਨੂੰ ਕੋਈ ਉਮੀਦਵਾਰ ਦੇ ਨਾਮ ਦੇ ਸਪੈਲਿੰਗ ਵਿੱਚ ਗਲਤੀ, ਡੇਟਾ ਟ੍ਰਾਂਸਕ੍ਰਿਪਸ਼ਨ ਗਲਤੀ, ਜਾਂ ਗਲਤ ਚੋਣ ਦਾ ਅੰਕੜਾ ਮਿਲਦਾ ਹੈ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਸਾਡੀ ਡੇਟਾ ਟੀਮ ਨੂੰ contact@indiaelections.org 'ਤੇ ਈਮੇਲ ਕਰੋ। ਕਿਰਪਾ ਕਰਕੇ ਖਾਸ ਪੰਨੇ ਦਾ URL ਅਤੇ ਸਹੀ ਜਾਣਕਾਰੀ ਵਾਲੇ ਅਧਿਕਾਰਤ ECI ਰਿਕਾਰਡ ਦਾ ਲਿੰਕ ਸ਼ਾਮਲ ਕਰੋ।",
    "corrSection1Title": "1. ਗਲਤੀ ਦੀ ਰਿਪੋਰਟ ਕਰਨਾ",
    "corrLead": "ਡੇਟਾ ਗਲਤੀਆਂ ਨੂੰ ਸੁਧਾਰਨ ਅਤੇ ਸਮੱਸਿਆਵਾਂ ਦੀ ਰਿਪੋਰਟ ਕਰਨ ਲਈ ਸਾਡੀ ਪਾਰਦਰਸ਼ੀ ਪ੍ਰਕਿਰਿਆ।",
    "corrTitle": "ਸੋਧ ਨੀਤੀ",
    "edSection3Desc": "ਅਸੀਂ ਟਾਈਪੋ ਜਾਂ ਵਿਜ਼ੂਅਲ ਰਿਪੋਰਟਿੰਗ ਗਲਤੀਆਂ ਨੂੰ ਰੋਕਣ ਲਈ ਤੈਨਾਤੀ ਤੋਂ ਪਹਿਲਾਂ ECI ਸਾਰ ਡੇਟਾ ਦੇ ਵਿਰੁੱਧ ਪ੍ਰੋਗਰਾਮੇਟਿਕ ਪੁਸ਼ਟੀ ਦੁਆਰਾ ਸਾਰੇ ਅੰਕੜਿਆਂ ਦੀ ਪੁਸ਼ਟੀ ਕਰਦੇ ਹਾਂ।",
    "edSection3Title": "3. ਸ਼ੁੱਧਤਾ ਦੀ ਜਾਂਚ",
    "edSection2Desc": "ਹਰ ਚੋਣ ਨਤੀਜਾ, ਵੋਟਾਂ ਦੀ ਗਿਣਤੀ, ਉਮੀਦਵਾਰਾਂ ਦੀ ਸੂਚੀ ਅਤੇ ਸ਼੍ਰੇਣੀ ਦਾ ਖਾਕਾ ਸਿੱਧੇ ਤੌਰ 'ਤੇ ਜਨਤਕ ਤੌਰ 'ਤੇ ਉਪਲਬਧ ਸਰਕਾਰੀ ਦਸਤਾਵੇਜ਼ਾਂ (ਮੁੱਖ ਤੌਰ 'ਤੇ ਭਾਰਤ ਚੋਣ ਕਮਿਸ਼ਨ ਦੀਆਂ ਰਿਪੋਰਟਾਂ) ਤੋਂ ਲਿਆ ਗਿਆ ਹੈ। ਅਸੀਂ ਅੰਦਾਜ਼ੇ ਜਾਂ ਐਗਜ਼ਿਟ ਪੋਲ ਪ੍ਰਕਾਸ਼ਿਤ ਨਹੀਂ ਕਰਦੇ।",
    "edSection2Title": "2. ਡੇਟਾ ਸੋਰਸਿੰਗ ਮਾਪਦੰਡ",
    "edSection1Desc": "ਸਾਡਾ ਨੈੱਟਵਰਕ ਪੂਰਨ ਰਾਜਨੀਤਿਕ ਨਿਰਪੱਖਤਾ ਬਣਾਈ ਰੱਖਦਾ ਹੈ। ਅਸੀਂ ਕਿਸੇ ਵੀ ਸਿਆਸੀ ਪਾਰਟੀ, ਉਮੀਦਵਾਰ ਜਾਂ ਪੀਆਰ ਲਾਬੀ ਤੋਂ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸੁਤੰਤਰ ਹਾਂ। ਸਾਡਾ ਧਿਆਨ ਸਿਰਫ਼ ਜਨਤਾ ਦੇ ਸਾਹਮਣੇ ਸਾਫ਼-ਸੁਥਰੀ, ਪੁਸ਼ਟੀਯੋਗ ਲੋਕਤੰਤਰੀ ਮੈਟ੍ਰਿਕਸ ਪੇਸ਼ ਕਰਨ 'ਤੇ ਹੈ।",
    "edSection1Title": "1. ਗੈਰ-ਪੱਖਪਾਤੀ ਵਚਨਬੱਧਤਾ",
    "editorialLead": "ਸਾਡੇ ਗੈਰ-ਪੱਖਪਾਤੀ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼ ਅਤੇ ਡੇਟਾ ਪ੍ਰਕਾਸ਼ਨ ਨੈਤਿਕਤਾ।",
    "editorialTitle": "ਸੰਪਾਦਕੀ ਨੀਤੀ",
    "termsSection3Desc": "ਅਸੀਂ ਇਸ ਪੋਰਟਲ 'ਤੇ ਡੇਟਾ ਦੀਆਂ ਅਸੰਗਤੀਆਂ ਦੇ ਅਧਾਰ 'ਤੇ ਉਪਭੋਗਤਾਵਾਂ ਦੁਆਰਾ ਲਏ ਗਏ ਕਿਸੇ ਵੀ ਰਾਜਨੀਤਿਕ, ਵਪਾਰਕ ਜਾਂ ਸੰਚਾਲਨ ਫੈਸਲਿਆਂ ਲਈ ਕਾਨੂੰਨੀ ਤੌਰ 'ਤੇ ਜ਼ਿੰਮੇਵਾਰ ਨਹੀਂ ਹਾਂ। ਸੰਦਰਭ ਤੋਂ ਪਹਿਲਾਂ ਸਿੱਧੇ ECI ਅਧਿਕਾਰਤ ਪੁਰਾਲੇਖਾਂ 'ਤੇ ਸਾਰੇ ਚੋਣ ਅੰਕੜਿਆਂ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ।",
    "termsSection3Title": "3. ਕਾਨੂੰਨੀ ਜ਼ਿੰਮੇਵਾਰੀ",
    "termsSection2Desc": "ਇਹ ਵੈੱਬਸਾਈਟ ਸਿਰਫ਼ ਵਿਦਿਅਕ, ਜਾਣਕਾਰੀ ਅਤੇ ਖੋਜ ਉਦੇਸ਼ਾਂ ਲਈ ਪ੍ਰਦਾਨ ਕੀਤੀ ਗਈ ਹੈ। ਉਪਭੋਗਤਾ IndiaElections.org ਤੋਂ ਸਪੱਸ਼ਟ ਲਿਖਤੀ ਅਧਿਕਾਰ ਤੋਂ ਬਿਨਾਂ ਪਲੇਟਫਾਰਮ ਨੂੰ ਸਕ੍ਰੈਪ ਨਹੀਂ ਕਰ ਸਕਦੇ ਜਾਂ ਪੂਰੇ ਡੇਟਾਸੇਟ ਦੀ ਨਕਲ ਨਹੀਂ ਕਰ ਸਕਦੇ।",
    "termsSection2Title": "2. ਵਰਤੋਂ ਦੀਆਂ ਸੀਮਾਵਾਂ",
    "termsSection1Desc": "ਇਸ ਪੋਰਟਲ 'ਤੇ ਪ੍ਰਦਰਸ਼ਿਤ ਸਾਰੇ ਚੋਣ ਡੇਟਾ, ਉਮੀਦਵਾਰ ਪ੍ਰੋਫਾਈਲ, ਵੋਟ ਪ੍ਰਤੀਸ਼ਤ ਅਤੇ ਨਤੀਜੇ ਅਧਿਕਾਰਤ ਭਾਰਤ ਚੋਣ ਕਮਿਸ਼ਨ (ECI) ਦੇ ਜਨਤਕ ਪੁਰਾਲੇਖਾਂ ਤੋਂ ਇਕੱਤਰ ਕੀਤੇ ਗਏ ਹਨ। ਹਾਲਾਂਕਿ ਅਸੀਂ ਸਾਰੇ ਡੇਟਾ ਬਿੰਦੂਆਂ ਦੀ ਪੁਸ਼ਟੀ ਕਰਦੇ ਹਾਂ, ਨਤੀਜੇ ਅਨੁਮਾਨਿਤ ਹਨ ਅਤੇ ਪੂਰੀ ਪੁਸ਼ਟੀ ਲਈ ਅਧਿਕਾਰਤ ਰਿਕਾਰਡਾਂ ਨਾਲ ਕ੍ਰਾਸ-ਰੇਫਰੈਂਸ ਕੀਤੇ ਜਾਣੇ ਚਾਹੀਦੇ ਹਨ।",
    "termsSection1Title": "1. ਡੇਟਾ ਸ਼ੁੱਧਤਾ ਬੇਦਾਅਵਾ",
    "termsLead": "ਕਾਨੂੰਨੀ ਬੇਦਾਅਵਾ, ਵਰਤੋਂ ਦੀਆਂ ਸੀਮਾਵਾਂ ਅਤੇ ਸੂਚਨਾ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼।",
    "termsTitle": "ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ",
    "privSection3Desc": "ਸਾਡੀ ਵੈੱਬਸਾਈਟ ਵਿੱਚ ਬਾਹਰੀ ਪੋਰਟਲ (ਜਿਵੇਂ ਕਿ ਭਾਰਤ ਚੋਣ ਕਮਿਸ਼ਨ ਦੀ ਅਧਿਕਾਰਤ ਵੈੱਬਸਾਈਟ) ਦੇ ਲਿੰਕ ਸ਼ਾਮਲ ਹਨ। ਅਸੀਂ ਇਹਨਾਂ ਬਾਹਰੀ ਸਾਈਟਾਂ ਦੀ ਪ੍ਰਾਈਵੇਸੀ ਅਭਿਆਸਾਂ ਜਾਂ ਸਮੱਗਰੀ ਲਈ ਜ਼ਿੰਮੇਵਾਰ ਨਹੀਂ ਹਾਂ।",
    "privSection3Title": "3. ਬਾਹਰੀ ਲਿੰਕ",
    "privSection2Desc": "ਜਦੋਂ ਤੁਸੀਂ ਡੇਟਾ ਪਹੁੰਚ ਜਾਂ ਵਿਗਿਆਪਨ ਪੁੱਛਗਿੱਛ ਲਈ ਇੱਕ ਈਮੇਲ ਬੇਨਤੀ ਭੇਜਦੇ ਹੋ, ਤਾਂ ਅਸੀਂ ਸਿਰਫ ਤੁਹਾਡੀ ਬੇਨਤੀ ਨੂੰ ਪੂਰਾ ਕਰਨ ਲਈ ਤੁਹਾਡੇ ਦੁਆਰਾ ਪ੍ਰਦਾਨ ਕੀਤੇ ਗਏ ਈਮੇਲ ਪਤੇ ਅਤੇ ਜਾਣਕਾਰੀ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਾਂ। ਅਸੀਂ ਤੁਹਾਡੇ ਸੰਪਰਕ ਵੇਰਵਿਆਂ ਨੂੰ ਕਦੇ ਵੀ ਤੀਜੀ ਧਿਰ ਨਾਲ ਵੇਚਦੇ, ਕਿਰਾਏ 'ਤੇ ਜਾਂ ਸਾਂਝਾ ਨਹੀਂ ਕਰਦੇ।",
    "privSection2Title": "2. ਪੁੱਛਗਿੱਛ ਦੁਆਰਾ ਇਕੱਤਰ ਕੀਤਾ ਡੇਟਾ",
    "privSection1Desc": "ਅਸੀਂ ਤੁਹਾਡੀ ਪ੍ਰਾਈਵੇਸੀ ਦਾ ਸਤਿਕਾਰ ਕਰਦੇ ਹਾਂ। ਅਸੀਂ ਆਪਣੇ ਪੋਰਟਲ ਦੀ ਕੁੱਲ ਵਰਤੋਂ ਨੂੰ ਟਰੈਕ ਕਰਨ ਲਈ ਉਮਾਮੀ ਵਿਸ਼ਲੇਸ਼ਣ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਾਂ। ਉਮਾਮੀ ਇੱਕ ਕੁਕੀ-ਮੁਕਤ, ਪ੍ਰਾਈਵੇਸੀ-ਪਹਿਲੀ ਵਿਸ਼ਲੇਸ਼ਣ ਪਲੇਟਫਾਰਮ ਹੈ। ਇਹ ਕੋਈ ਨਿੱਜੀ ਪਛਾਣਯੋਗ ਜਾਣਕਾਰੀ (PII) ਇਕੱਠੀ ਨਹੀਂ ਕਰਦਾ ਜਾਂ ਵੱਖ-ਵੱਖ ਵੈੱਬਸਾਈਟਾਂ 'ਤੇ ਉਪਭੋਗਤਾਵਾਂ ਨੂੰ ਟਰੈਕ ਨਹੀਂ ਕਰਦਾ।",
    "privSection1Title": "1. ਕੁਕੀ-ਮੁਕਤ ਵਿਸ਼ਲੇਸ਼ਣ",
    "privacyLead": "ਤੁਹਾਡੀ ਪ੍ਰਾਈਵੇਸੀ ਦੀ ਰੱਖਿਆ ਕਰਨ ਅਤੇ ਪਾਰਦਰਸ਼ੀ ਡੇਟਾ ਅਭਿਆਸਾਂ ਪ੍ਰਤੀ ਸਾਡੀ ਵਚਨਬੱਧਤਾ।",
    "privacyTitle": "ਪ੍ਰਾਈਵੇਸੀ ਪਾਲਿਸੀ",
    "footerCorrections": "ਸੋਧ ਨੀਤੀ",
    "footerEditorial": "ਸੰਪਾਦਕੀ ਨੀਤੀ",
    "footerTerms": "ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ",
    "footerPrivacy": "ਪ੍ਰਾਈਵੇਸੀ ਪਾਲਿਸੀ",
    "btnSendAdEmail": "ਈਮੇਲ ਮੀਡੀਆ ਪੁੱਛਗਿੱਛ ਭੇਜੋ",
    "adContactDesc": "ਸਾਡੀ ਮੀਡੀਆ ਕਿੱਟ, ਟ੍ਰੈਫਿਕ ਮੈਟ੍ਰਿਕਸ, ਜਾਂ ਅਨੁਕੂਲਿਤ ਵਿਗਿਆਪਨ ਹੱਲਾਂ ਦੀ ਬੇਨਤੀ ਕਰਨ ਲਈ, ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀਆਂ ਮੁਹਿੰਮ ਦੀਆਂ ਲੋੜਾਂ ਦਾ ਵਰਣਨ ਕਰਦੇ ਹੋਏ ਇੱਕ ਈਮੇਲ ਭੇਜੋ:",
    "adContactTitle": "ਸੰਪਰਕ ਕਰੋ",
    "adOpp3": "API ਅਤੇ ਡੇਟਾ ਸਪਾਂਸਰ: ਡੇਟਾ ਡਾਊਨਲੋਡ ਅਤੇ CSV ਡੇਟਾਸੇਟਾਂ 'ਤੇ ਸਹਿ-ਬ੍ਰਾਂਡਿੰਗ ਅਤੇ ਲੋਗੋ ਵਿਸ਼ੇਸ਼ਤਾ।",
    "adOpp2": "ਹਲਕਾ ਸਪਾਟਲਾਈਟ: ਵਿਅਕਤੀਗਤ ਹਲਕੇ ਦੇ ਵੇਰਵਿਆਂ ਦੇ ਪੰਨਿਆਂ 'ਤੇ ਵਿਸ਼ੇਸ਼ ਸਪਾਂਸਰਸ਼ਿਪ ਮੌਕੇ।",
    "adOpp1": "ਡਿਸਪਲੇ ਬੈਨਰ: ਪੂਰੀ ਸਾਈਟ 'ਤੇ ਪ੍ਰੀਮੀਅਮ ਲੀਡਰਬੋਰਡ ਅਤੇ ਸਾਈਡਬਾਰ ਵਿਗਿਆਪਨ।",
    "adOppTitle": "ਵਿਗਿਆਪਨ ਫਾਰਮੈਟ",
    "adIntroDesc": "ਸਾਡਾ ਪੋਰਟਲ ਚੋਣ ਡੇਟਾ ਲਈ ਇੱਕ ਪ੍ਰਮੁੱਖ ਮੰਜ਼ਿਲ ਹੈ, ਜੋ ਰੀਅਲ-ਟਾਈਮ ਹਲਕੇ ਦੀ ਸੂਝ ਅਤੇ ਇਤਿਹਾਸਕ ਵਿਸ਼ਲੇਸ਼ਣ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ। ਅਸੀਂ ਉੱਚ-ਪ੍ਰਭਾਵ ਵਾਲੇ ਡਿਸਪਲੇ ਵਿਗਿਆਪਨ, ਖੇਤਰੀ ਨਿਸ਼ਾਨਾ ਬਣਾਉਣ ਅਤੇ ਪ੍ਰੋਗਰਾਮੇਟਿਕ ਸਪਾਂਸਰ ਮੌਕੇ ਪੇਸ਼ ਕਰਦੇ ਹਾਂ।",
    "adIntroTitle": "IndiaElections.org ਨਾਲ ਭਾਈਵਾਲੀ ਕਿਉਂ ਕਰੀਏ?",
    "adLead": "2027 ਦੀਆਂ ਵਿਧਾਨ ਸਭਾ ਚੋਣਾਂ ਦੌਰਾਨ ਵੋਟਰਾਂ, ਖੋਜਕਰਤਾਵਾਂ, ਨੀਤੀ ਘਾੜਿਆਂ ਅਤੇ ਪੱਤਰਕਾਰਾਂ ਦੇ ਬਹੁਤ ਸਰਗਰਮ ਦਰਸ਼ਕਾਂ ਨਾਲ ਜੁੜੋ।",
    "adTitle": "ਸਾਡੇ ਨਾਲ ਵਿਗਿਆਪਨ ਅਤੇ ਭਾਈਵਾਲੀ ਕਰੋ",
    "footerAdvertise": "ਸਾਡੇ ਨਾਲ ਵਿਗਿਆਪਨ ਕਰੋ",
    "btnSendEmail": "ਈਮੇਲ ਬੇਨਤੀ ਭੇਜੋ",
    "reqField4": "4. ਲੋੜੀਂਦੇ ਖਾਸ ਡੇਟਾਸੇਟ",
    "reqField3": "3. ਵਰਤੋਂ ਦਾ ਉਦੇਸ਼ (ਖੋਜ/ਪੱਤਰਕਾਰੀ/ਐਪ)",
    "reqField2": "2. ਸੰਸਥਾ ਜਾਂ ਅਦਾਰੇ ਦਾ ਨਾਮ",
    "reqField1": "1. ਤੁਹਾਡਾ ਪੂਰਾ ਨਾਮ ਅਤੇ ਭੂਮਿਕਾ",
    "requestEmailFields": "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੇ ਸੰਦੇਸ਼ ਵਿੱਚ ਹੇਠਾਂ ਦਿੱਤੇ ਵੇਰਵੇ ਸ਼ਾਮਲ ਕਰੋ:",
    "requestEmailDesc": "ਇਤਿਹਾਸਕ ਡੇਟਾਸੇਟ ਜਾਂ API ਪਹੁੰਚ ਦੀ ਬੇਨਤੀ ਕਰਨ ਲਈ, ਕਿਰਪਾ ਕਰਕੇ ਇਸ ਪਤੇ 'ਤੇ ਇੱਕ ਈਮੇਲ ਭੇਜੋ:",
    "requestEmailTitle": "ਪਹੁੰਚ ਦੀ ਬੇਨਤੀ ਕਿਵੇਂ ਕਰੀਏ",
// ਧੰਨਵਾਦ! ਤੁਹਾਡੀ ਬੇਨਤੀ ਦਰਜ ਕਰ ਲਈ ਗਈ ਹੈ। ਸਾਡੀ ਡੇਟਾ ਟੀਮ ਤੁਹਾਡੀ ਅਰਜ਼ੀ ਦੀ ਸਮੀਖਿਆ ਕਰੇਗੀ ਅਤੇ ਜਲਦੀ ਹੀ ਈਮੇਲ ਰਾਹੀਂ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੇਗੀ।",
// ਬੇਨਤੀ ਸਪੁਰਦ ਕਰੋ",
// ਈਮੇਲ ਪਤਾ",
// ਬੇਨਤੀ ਕੀਤਾ ਡੇਟਾਸੇਟ (ਜਿਵੇਂ ਪੰਜਾਬ 1997-2022 ਨਤੀਜੇ)",
// ਵਰਤੋਂ ਦਾ ਉਦੇਸ਼ (ਖੋਜ/ਪੱਤਰਕਾਰੀ/ਐਪ)",
// ਸੰਸਥਾ / ਅਦਾਰਾ",
// ਪੂਰਾ ਨਾਮ",
    "dataApiAttributionDesc": "ਗੈਰ-ਵਪਾਰਕ ਖੋਜ, ਵਿਦਿਅਕ ਅਧਿਐਨ ਅਤੇ ਪੱਤਰਕਾਰੀ ਲਈ ਡੇਟਾ ਮੁਫਤ ਪ੍ਰਦਾਨ ਕੀਤਾ ਜਾਂਦਾ ਹੈ। ਬਦਲੇ ਵਿੱਚ, ਸਾਨੂੰ ਤੁਹਾਡੇ ਪ੍ਰਕਾਸ਼ਿਤ ਲੇਖਾਂ, ਡੇਟਾਸੇਟਾਂ ਜਾਂ ਪੋਰਟਲ 'ਤੇ IndiaElections.org ਲਈ ਇੱਕ ਸਪੱਸ਼ਟ ਲਿੰਕ (do-follow link) ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।",
    "dataApiAttributionTitle": "ਮੁਫਤ ਵਿਦਿਅਕ ਅਤੇ ਮੀਡੀਆ ਲਾਇਸੈਂਸ",
    "dataApiDesc": "IndiaElections.org ਕੇਂਦਰੀ ਭੰਡਾਰ ਆਜ਼ਾਦੀ ਤੋਂ ਬਾਅਦ ਸਾਰੀਆਂ ਲੋਕ ਸਭਾ ਅਤੇ ਵਿਧਾਨ ਸਭਾ ਚੋਣਾਂ ਲਈ ਹਲਕੇਵਾਰ ਨਤੀਜੇ, ਉਮੀਦਵਾਰਾਂ ਦੇ ਪ੍ਰੋਫਾਈਲ, ਵੋਟ ਪ੍ਰਤੀਸ਼ਤ ਅਤੇ ਇਤਿਹਾਸਕ ਰੁਝਾਨ ਬਣਾਏ ਰੱਖਦਾ ਹੈ।",
    "dataApiLead": "ਅਸੀਂ ਪੱਤਰਕਾਰਾਂ, ਖੋਜਕਰਤਾਵਾਂ, ਡਿਵੈਲਪਰਾਂ ਅਤੇ ਵਿਦਿਅਕ ਸੰਸਥਾਵਾਂ ਨੂੰ ਭਾਰਤੀ ਚੋਣਾਂ ਦੇ ਵਿਆਪਕ, ਢਾਂਚਾਗਤ ਡੇਟਾਸੇਟ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਾਂ।",
    "dataApiTitle": "ਇਤਿਹਾਸਕ ਡੇਟਾਸੇਟ ਅਤੇ API ਬੇਨਤੀਆਂ",
    "footerDataApi": "ਡੇਟਾ ਅਤੇ API ਬੇਨਤੀਆਂ",
    "constituencyDesc": "ਹਰੇਕ ਵਿਧਾਨ ਸਭਾ ਹਲਕੇ ਦੀ ਪੜਚੋਲ ਕਰੋ — ਜ਼ਿਲ੍ਹੇ, ਸ਼੍ਰੇਣੀ ਅਤੇ ਪਾਰਟੀ ਦੁਆਰਾ ਖੋਜ ਅਤੇ ਫਿਲਟਰ ਯੋਗ।",
    "candidatesDesc": "2022 ਅਤੇ 2017 ਵਿਧਾਨ ਸਭਾ ਚੋਣਾਂ ਦੇ ਜੇਤੂਆਂ ਅਤੇ ਉਪ-ਜੇਤੂਆਂ ਦੀ ਖੋਜ ਕਰੋ।",
    "districtsDesc": "ਜ਼ਿਲ੍ਹੇਵਾਰ ਵਿਧਾਨ ਸਭਾ ਹਲਕੇ।",
    "partiesDesc": "ਵਿਧਾਨ ਸਭਾ ਚੋਣਾਂ ਵਿੱਚ ਸਰਗਰਮ ਸਿਆਸੀ ਪਾਰਟੀਆਂ।",
    "trendsDesc": "ਇਤਿਹਾਸਕ ਸੀਟਾਂ ਅਤੇ ਵੋਟਿੰਗ ਦੇ ਰੁਝਾਨ।",
    "results2022Desc": "ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ ਚੋਣਾਂ 20 ਫਰਵਰੀ 2022 ਨੂੰ ਕਰਵਾਈਆਂ ਗਈਆਂ। ਨਤੀਜੇ 10 ਮਾਰਚ 2022 ਨੂੰ ਘੋਸ਼ਿਤ ਕੀਤੇ ਗਏ। ਕੁੱਲ ਵੋਟਿੰਗ ਪ੍ਰਤੀਸ਼ਤ: 71.95%। ਆਪ ਨੇ 117 ਵਿੱਚੋਂ 92 ਸੀਟਾਂ ਜਿੱਤੀਆਂ।",
    "results2017Desc": "ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ ਚੋਣਾਂ 4 ਫਰਵਰੀ 2017 ਨੂੰ ਕਰਵਾਈਆਂ ਗਈਆਂ। ਨਤੀਜੇ 11 ਮਾਰਚ 2017 ਨੂੰ ਘੋਸ਼ਿਤ ਕੀਤੇ ਗਏ। ਕੁੱਲ ਵੋਟਿੰਗ ਪ੍ਰਤੀਸ਼ਤ: 77.4%। ਕਾਂਗਰਸ ਨੇ 117 ਵਿੱਚੋਂ 77 ਸੀਟਾਂ ਜਿੱਤੀਆਂ।",
    "name": "ਹਲਕਾ",
    "feat1Title": "ਸਾਰੇ 117 ਹਲਕੇ",
    "feat1Desc": "ਜ਼ਿਲ੍ਹੇ, ਰਾਖਵਾਂਕਰਨ ਸਥਿਤੀ ਅਤੇ ਨਤੀਜਿਆਂ ਦੇ ਨਾਲ ਹਰੇਕ ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ ਹਲਕੇ ਦੀ ਪੜਚੋਲ ਕਰੋ।",
    "feat2Title": "2022 ਚੋਣ ਨਤੀਜੇ",
    "feat2Desc": "ਵਿਜੇਤਾਵਾਂ ਅਤੇ ਅੰਤਰਾਂ ਦੇ ਨਾਲ 2022 ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ ਚੋਣਾਂ ਦੇ ਹਲਕੇਵਾਰ ਪੂਰੇ ਨਤੀਜੇ।",
    "feat3Title": "2017 ਚੋਣ ਨਤੀਜੇ",
    "feat3Desc": "ਕਾਂਗਰਸ ਦੀ ਹੂੰਝਾਫੇਰ ਜਿੱਤ - 77 ਸੀਟਾਂ। ਇਹ ਦੇਖਣ ਲਈ 2022 ਨਾਲ ਤੁਲਨਾ ਕਰੋ ਕਿ ਪੰਜਾਬ ਦੀ ਸਿਆਸਤ ਕਿਵੇਂ ਬਦਲੀ।",
    "feat4Title": "ਸਿਆਸੀ ਪਾਰਟੀਆਂ",
    "feat4Desc": "ਇਤਿਹਾਸਕ ਸੀਟਾਂ ਦੇ ਯੋਗ ਅਤੇ ਵੋਟ ਪ੍ਰਤੀਸ਼ਤ ਦੇ ਨਾਲ ਆਪ, ਕਾਂਗਰਸ, ਅਕਾਲੀ ਦਲ, ਭਾਜਪਾ ਅਤੇ ਹੋਰ ਪਾਰਟੀਆਂ ਦੇ ਪ੍ਰੋਫਾਈਲ।",
    "feat5Title": "ਉਮੀਦਵਾਰ",
    "feat5Desc": "ਵੋਟਾਂ ਅਤੇ ਪਾਰਟੀ ਦੀ ਜਾਣਕਾਰੀ ਦੇ ਨਾਲ 2022 ਅਤੇ 2017 ਦੇ ਸਾਰੇ ਜੇਤੂਆਂ ਅਤੇ ਉਪ-ਜੇਤੂਆਂ ਦੀ ਖੋਜ ਕਰੋ।",
    "feat6Title": "ਇਤਿਹਾਸਕ ਰੁਝਾਨ",
    "feat6Desc": "1997 ਤੋਂ 2022 ਤੱਕ ਪੰਜਾਬ ਚੋਣਾਂ ਦਾ ਡੇਟਾ — ਸੀਟਾਂ ਦੀ ਗਿਣਤੀ, ਵੋਟ ਪ੍ਰਤੀਸ਼ਤ, ਅਤੇ ਸਵਿੰਗ ਵਿਸ਼ਲੇਸ਼ਣ।",
    "feat7Title": "ਜ਼ਿਲ੍ਹਾ-ਵਾਰ ਦ੍ਰਿਸ਼",
    "feat7Desc": "ਜ਼ਿਲ੍ਹੇ ਅਨੁਸਾਰ ਨਤੀਜਿਆਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ — ਦੇਖੋ ਕਿ ਪੰਜਾਬ ਦੇ 23 ਜ਼ਿਲ੍ਹਿਆਂ ਵਿੱਚੋਂ ਕਿਸ ਪਾਰਟੀ ਦਾ ਦਬਦਬਾ ਰਿਹਾ।",
    "feat8Title": "ਡੇਟਾ ਸਰੋਤ ਅਤੇ ਵਿਧੀ",
    "feat8Desc": "ਸਾਡੇ ਡੇਟਾ ਸਰੋਤਾਂ, ਵਿਧੀ ਅਤੇ ਗਲਤੀਆਂ ਦੀ ਰਿਪੋਰਟ ਕਿਵੇਂ ਕਰਨੀ ਹੈ ਬਾਰੇ ਜਾਣਕਾਰੀ।",
    "faq1Q": "ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ ਚੋਣਾਂ 2027 ਕਦੋਂ ਹਨ?",
    "faq1A": "ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ ਚੋਣਾਂ 2027 ਫਰਵਰੀ 2027 ਵਿੱਚ ਹੋਣ ਦੀ ਉਮੀਦ ਹੈ। ਭਾਰਤ ਚੋਣ ਕਮਿਸ਼ਨ ਵੋਟਿੰਗ ਤੋਂ ਲਗਭਗ 2-3 ਮਹੀਨੇ ਪਹਿਲਾਂ ਅਧਿਕਾਰਤ ਸ਼ਡਿਊਲ ਦਾ ਐਲਾਨ ਕਰੇਗਾ। ਇਸ ਸਾਈਟ 'ਤੇ ਦਿੱਤੀਆਂ ਤਰੀਕਾਂ ਸਿਰਫ ਅਨੁਮਾਨਿਤ ਹਨ।",
    "faq2Q": "ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ ਵਿੱਚ ਕਿੰਨੀਆਂ ਸੀਟਾਂ ਹਨ?",
    "faq2A": "ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ (ਵਿਧਾਨ ਸਭਾ) ਵਿੱਚ 23 ਜ਼ਿਲ੍ਹਿਆਂ ਵਿੱਚ ਫੈਲੀਆਂ 117 ਸੀਟਾਂ ਹਨ। ਇਹਨਾਂ ਵਿੱਚੋਂ 34 ਸੀਟਾਂ ਅਨੁਸੂਚਿਤ ਜਾਤੀਆਂ (SC) ਲਈ ਰਾਖਵੀਆਂ ਹਨ। ਸਰਕਾਰ ਬਣਾਉਣ ਅਤੇ ਬਹੁਮਤ ਲਈ ਕਿਸੇ ਪਾਰਟੀ ਜਾਂ ਗਠਜੋੜ ਨੂੰ ਘੱਟੋ-ਘੱਟ 59 ਸੀਟਾਂ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।",
    "faq3Q": "2022 ਦੀ ਪੰਜਾਬ ਚੋਣ ਕਿਸ ਨੇ ਜਿੱਤੀ?",
    "faq3A": "ਆਮ ਆਦਮੀ ਪਾਰਟੀ (ਆਪ) ਨੇ 2022 ਦੀ ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ ਚੋਣਾਂ ਵਿੱਚ 42.01% ਵੋਟ ਪ੍ਰਤੀਸ਼ਤ ਨਾਲ 117 ਵਿੱਚੋਂ 92 ਸੀਟਾਂ ਜਿੱਤ ਕੇ ਹੂੰਝਾਫੇਰ ਜਿੱਤ ਹਾਸਲ ਕੀਤੀ। ਭਗਵੰਤ ਮਾਨ ਮੁੱਖ ਮੰਤਰੀ ਬਣੇ।",
    "faq4Q": "2017 ਦੀ ਪੰਜਾਬ ਚੋਣ ਦਾ ਕੀ ਨਤੀਜਾ ਰਿਹਾ?",
    "faq4A": "2017 ਦੀ ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ ਚੋਣਾਂ ਵਿੱਚ, ਭਾਰਤੀ ਰਾਸ਼ਟਰੀ ਕਾਂਗਰਸ (ਕਾਂਗਰਸ) ਨੇ 117 ਵਿੱਚੋਂ 77 ਸੀਟਾਂ ਜਿੱਤ ਕੇ ਵੱਡੀ ਜਿੱਤ ਹਾਸਲ ਕੀਤੀ। ਕੈਪਟਨ ਅਮਰਿੰਦਰ ਸਿੰਘ ਮੁੱਖ ਮੰਤਰੀ ਬਣੇ।",
    "faq5Q": "ਵਿਧਾਨ ਸਭਾ ਚੋਣਾਂ ਲਈ ਪੰਜਾਬ ਵਿੱਚ ਕਿੰਨੇ ਜ਼ਿਲ੍ਹੇ ਹਨ?",
    "faq5A": "ਪੰਜਾਬ ਵਿੱਚ ਚੋਣ ਉਦੇਸ਼ਾਂ ਲਈ 23 ਪ੍ਰਸ਼ਾਸਨਿਕ ਜ਼ਿਲ੍ਹੇ ਹਨ। ਸੀਟਾਂ ਦੀ ਗਿਣਤੀ ਦੇ ਹਿਸਾਬ ਨਾਲ ਸਭ ਤੋਂ ਵੱਡਾ ਜ਼ਿਲ੍ਹਾ ਲੁਧਿਆਣਾ (14 ਸੀਟਾਂ) ਹੈ, ਉਸ ਤੋਂ ਬਾਅਦ ਅੰਮ੍ਰਿਤਸਰ (11 ਸੀਟਾਂ) ਅਤੇ ਜਲੰਧਰ (9 ਸੀਟਾਂ) ਹਨ।",
    "faq6Q": "ਪੰਜਾਬ ਦੀਆਂ ਚੋਣਾਂ ਵਿੱਚ ਵੋਟਿੰਗ ਦਾ ਇਤਿਹਾਸ ਕੀ ਰਹੀ ਹੈ?",
    "faq6A": "ਪੰਜਾਬ ਵਿੱਚ ਆਮ ਤੌਰ 'ਤੇ ਵੋਟਰਾਂ ਦੀ ਭਾਰੀ ਭਾਗੀਦਾਰੀ ਦੇਖੀ ਜਾਂਦੀ ਹੈ। 2022 ਦੀ ਚੋਣ ਵਿੱਚ 71.95% ਵੋਟਿੰਗ ਦਰਜ ਕੀਤੀ ਗਈ ਸੀ, ਜਦੋਂ ਕਿ 2017 ਦੀ ਚੋਣ ਵਿੱਚ 77.40% ਅਤੇ 2012 ਦੀ ਚੋਣ ਵਿੱਚ 78.30% ਵੋਟਿੰਗ ਦਰਜ ਕੀਤੀ ਗਈ ਸੀ।",
    "faq7Q": "ਪੰਜਾਬ ਵਿੱਚ ਮੁੱਖ ਸਿਆਸੀ ਪਾਰਟੀਆਂ ਕਿਹੜੀਆਂ ਹਨ?",
    "faq7A": "ਪੰਜਾਬ ਵਿੱਚ ਸਰਗਰਮ ਮੁੱਖ ਸਿਆਸੀ ਪਾਰਟੀਆਂ ਹਨ: ਆਮ ਆਦਮੀ ਪਾਰਟੀ (ਆਪ, ਮੌਜੂਦਾ ਸੱਤਾਧਾਰੀ ਪਾਰਟੀ), ਭਾਰਤੀ ਰਾਸ਼ਟਰੀ ਕਾਂਗਰਸ (ਕਾਂਗਰਸ), ਸ਼ਿਰੋਮਣੀ ਅਕਾਲੀ ਦਲ (ਕਾਂਗਰਸ), ਅਤੇ ਭਾਰਤੀ ਜਨਤਾ ਪਾਰਟੀ (ਭਾਜਪਾ)।",
    "faq8Q": "ਮੈਂ ਆਪਣੇ ਹਲਕੇ ਦੇ ਨਤੀਜੇ ਕਿਵੇਂ ਲੱਭ ਸਕਦਾ ਹਾਂ?",
    "faq8A": "ਨਾਮ ਜਾਂ ਜ਼ਿਲ੍ਹੇ ਦੁਆਰਾ ਖੋਜ ਕਰਨ ਲਈ ਹਲਕੇ (Constituencies) ਪੰਨੇ ਦੀ ਵਰਤੋਂ ਕਰੋ। ਹਰੇਕ ਹਲਕੇ ਦਾ ਪੰਨਾ 2022 ਅਤੇ 2017 ਦੇ ਜੇਤੂ, ਵੋਟਾਂ ਦਾ ਅੰਤਰ, ਵੋਟਿੰਗ ਪ੍ਰਤੀਸ਼ਤ ਅਤੇ ਉਮੀਦਵਾਰਾਂ ਦੇ ਪੂਰੇ ਵੇਰਵੇ ਦਿਖਾਉਂਦਾ ਹੈ। ਤੁਸੀਂ ਨਤੀਜੇ ਪੰਨਿਆਂ ਦੀ ਵਰਤੋਂ ਵੀ ਕਰ ਸਕਦੇ ਹੋ।",
    "siteName": "ਪੰਜਾਬ ਚੋਣਾਂ 2027",
    "siteTagline": "ਸੰਪੂਰਨ ਚੋਣ ਡੇਟਾ ਪੋਰਟਲ",
    "navHome": "ਮੁੱਖ ਪੰਨਾ",
    "navConstituencies": "ਹਲਕੇ",
    "navCandidates": "ਉਮੀਦਵਾਰ",
    "navResults": "ਨਤੀਜੇ",
    "nav2022": "2022 ਨਤੀਜੇ",
    "nav2017": "2017 ਨਤੀਜੇ",
    "navParties": "ਪਾਰਟੀਆਂ",
    "navTrends": "ਰੁਝਾਨ",
    "navDistricts": "ਜ਼ਿਲ੍ਹੇ",
    "navAbout": "ਜਾਣਕਾਰੀ",
    "navNetwork": "ਨੈੱਟਵਰਕ",
    "heroEyebrow": "ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ ਚੋਣ",
    "heroTitle": "ਪੰਜਾਬ ਚੋਣਾਂ 2027",
    "heroLead": "ਸਾਰੇ 117 ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ ਹਲਕਿਆਂ ਲਈ ਉਮੀਦਵਾਰਾਂ, ਨਤੀਜਿਆਂ, ਪਾਰਟੀ ਸੀਟਾਂ ਅਤੇ ਇਤਿਹਾਸਕ ਰੁਝਾਨਾਂ ਦਾ ਸੰਪੂਰਨ ਡੇਟਾ।",
    "heroCta1": "ਹਲਕੇ ਦੇਖੋ",
    "heroCta2": "2022 ਨਤੀਜੇ",
    "countdownLabel": "ਚੋਣ ਦਿਵਸ ਤੱਕ ਅਨੁਮਾਨਿਤ ਸਮਾਂ",
    "countdownDays": "ਦਿਨ",
    "countdownHours": "ਘੰਟੇ",
    "countdownMins": "ਮਿੰਟ",
    "countdownSecs": "ਸਕਿੰਟ",
    "stat1Num": "117",
    "stat1Lbl": "ਹਲਕੇ",
    "stat2Num": "59",
    "stat2Lbl": "ਬਹੁਮਤ",
    "stat3Num": "2.14 ਕਰੋੜ",
    "stat3Lbl": "ਰਜਿਸਟਰਡ ਵੋਟਰ",
    "stat4Num": "23",
    "stat4Lbl": "ਜ਼ਿਲ੍ਹੇ",
    "tally2022": "2022 ਚੋਣ ਨਤੀਜੇ",
    "tallyLink": "ਪੂਰੇ ਨਤੀਜੇ ਦੇਖੋ",
    "scheduleTitle": "2027 ਚੋਣ ਕਾਰਜਕ੍ਰਮ",
    "scheduleNote": "ਮਿਤੀਆਂ ਮੌਜੂਦਾ 5 ਸਾਲਾਂ ਦੇ ਵਿਧਾਨ ਸਭਾ ਕਾਰਜਕਾਲ ਦੇ ਆਧਾਰ 'ਤੇ ਅਨੁਮਾਨਿਤ ਹਨ। ਅਧਿਕਾਰਤ ਸ਼ਡਿਊਲ ਦਾ ਐਲਾਨ ਭਾਰਤ ਚੋਣ ਕਮਿਸ਼ਨ ਦੁਆਰਾ ਕੀਤਾ ਜਾਵੇਗਾ।",
    "featuresTitle": "ਚੋਣ ਡੇਟਾ ਦੀ ਪੜਚੋਲ ਕਰੋ",
    "faqTitle": "ਅਕਸਰ ਪੁੱਛੇ ਜਾਂਦੇ ਸਵਾਲ",
    "footerDesc": "ਪੰਜਾਬ ਚੋਣਾਂ 2027 ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ ਚੋਣਾਂ 2027 ਲਈ ਵਿਆਪਕ ਚੋਣ ਜਾਣਕਾਰੀ ਪ੍ਰਦਾਨ ਕਰਨ ਵਾਲਾ ਇੱਕ ਸੁਤੰਤਰ ਡੇਟਾ ਪੋਰਟਲ ਹੈ।",
    "footerData": "ਡੇਟਾ",
    "footerLinks": "ਤੁਰੰਤ ਲਿੰਕ",
    "footerInfo": "ਜਾਣਕਾਰੀ",
    "footerConstituencies": "ਸਾਰੇ ਹਲਕੇ",
    "footerResults2022": "2022 ਨਤੀਜੇ",
    "footerResults2017": "2017 ਨਤੀਜੇ",
    "footerCandidates": "ਉਮੀਦਵਾਰ",
    "footerParties": "ਸਿਆਸੀ ਪਾਰਟੀਆਂ",
    "footerTrends": "ਇਤਿਹਾਸਕ ਰੁਝਾਨ",
    "footerDistricts": "ਜ਼ਿਲ੍ਹੇ",
    "footerAbout": "ਸਾਡੇ ਬਾਰੇ",
    "footerNetwork": "ਸਾਡਾ ਨੈੱਟਵਰਕ",
    "footerSources": "ਡੇਟਾ ਸਰੋਤ",
    "footerCopy": "© 2027 PunjabElectionResults.com",
    "footerDisclaimer": "ਡੇਟਾ ਭਾਰਤ ਚੋਣ ਕਮਿਸ਼ਨ (ECI) ਦੇ ਅਧਿਕਾਰਤ ਰਿਕਾਰਡਾਂ ਤੋਂ ਲਿਆ ਗਿਆ ਹੈ। ਇਹ ਇੱਕ ਸੁਤੰਤਰ ਸੂਚਨਾ ਪੋਰਟਲ ਹੈ।",
    "winner": "ਜੇਤੂ",
    "party": "ਪਾਰਟੀ",
    "votes": "ਵੋਟਾਂ",
    "margin": "ਅੰਤਰ",
    "turnout": "ਵੋਟਿੰਗ ਪ੍ਰਤੀਸ਼ਤ",
    "district": "ਜ਼ਿਲ੍ਹਾ",
    "reserved": "ਸ਼੍ਰੇਣੀ",
    "acNo": "ਹਲਕਾ ਨੰਬਰ",
    "search": "ਖੋਜੋ...",
    "filterDist": "ਸਾਰੇ ਜ਼ਿਲ੍ਹੇ",
    "filterCat": "ਸਾਰੀਆਂ ਸ਼੍ਰੇਣੀਆਂ",
    "filterParty": "ਸਾਰੀਆਂ ਪਾਰਟੀਆਂ",
    "filterYear": "ਸਾਲ ਚੁਣੋ",
    "showing": "ਦਿਖਾ ਰਿਹਾ",
    "of": "ਵਿੱਚੋਂ",
    "results": "ਨਤੀਜੇ",
    "noResults": "ਕੋਈ ਨਤੀਜਾ ਨਹੀਂ ਮਿਲਿਆ।",
    "errTitle": "ਪੰਨਾ ਨਹੀਂ ਮਿਲਿਆ",
    "errDesc": "ਜਿਸ ਪੰਨੇ ਨੂੰ ਤੁਸੀਂ ਦੇਖ ਰਹੇ ਹੋ ਉਸਨੂੰ ਸ਼ਾਇਦ ਹਟਾ ਦਿੱਤਾ ਗਿਆ ਹੈ, ਉਸਦਾ ਨਾਮ ਬਦਲ ਦਿੱਤਾ ਗਿਆ ਹੈ, ਜਾਂ ਉਹ ਅਸਥਾਈ ਤੌਰ 'ਤੇ ਉਪਲਬਧ ਨਹੀਂ ਹੈ।",
    "errBackHome": "ਮੁੱਖ ਪੰਨੇ 'ਤੇ ਜਾਓ",
    "errBrowseAC": "ਸਾਰੇ ਹਲਕੇ",
    "netEyebrow": "ਚੋਣ ਨੈੱਟਵਰਕ",
    "netTitle": "ਸਾਡੇ ਰਾਜ ਪੋਰਟਲ",
    "netDesc": "ਅਸੀਂ ਭਾਰਤ ਦੇ ਹਰੇਕ ਰਾਜ ਲਈ ਵਿਸ਼ੇਸ਼ ਅਤੇ ਤੇਜ਼ ਚੋਣ ਡੇਟਾ ਪੋਰਟਲ ਬਣਾ ਰਹੇ ਹਾਂ। ਹੇਠਾਂ ਦਿੱਤੀ ਨੈੱਟਵਰਕ ਡਾਇਰੈਕਟਰੀ ਦੀ ਪੜਚੋਲ ਕਰੋ।",
    "statusLive": "ਸਰਗਰਮ ਹੱਬ",
    "statusLiveThis": "ਮੌਜੂਦਾ ਪੋਰਟਲ",
    "statusSoon": "ਜਲਦੀ ਆ ਰਿਹਾ ਹੈ",
    "descIndia": "ਸਾਡੇ ਚੋਣ ਵਿਸ਼ਲੇਸ਼ਣ ਨੈੱਟਵਰਕ ਦਾ ਮੁੱਖ ਕੇਂਦਰ। ਆਮ ਚੋਣ ਅਪਡੇਟਾਂ, ਰਾਸ਼ਟਰੀ ਪਾਰਟੀ ਪ੍ਰੋਫਾਈਲਾਂ ਅਤੇ ਕੇਂਦਰੀਕ੍ਰਿਤ ਡੇਟਾਬੇਸ ਪੁਰਾਲੇਖ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।",
    "descPunjab": "ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ ਲਈ ਸਮਰਪਿਤ ਖੇਤਰੀ ਪੋਰਟਲ। ਸਾਰੇ 117 ਵਿਧਾਨ ਸਭਾ ਹਲਕਿਆਂ, ਉਮੀਦਵਾਰਾਂ ਦੇ ਵੇਰਵਿਆਂ ਅਤੇ 1997-2022 ਦੇ ਰੁਝਾਨਾਂ ਦੀ ਪੂਰੀ ਜਾਣਕਾਰੀ।",
    "descUP": "ਉੱਤਰ ਪ੍ਰਦੇਸ਼ ਵਿਧਾਨ ਸਭਾ ਲਈ ਸਮਰਪਿਤ ਖੇਤਰੀ ਪੋਰਟਲ। ਸਾਰੇ 403 ਵਿਧਾਨ ਸਭਾ ਹਲਕਿਆਂ, ਉਮੀਦਵਾਰਾਂ ਦੇ ਵੇਰਵਿਆਂ ਅਤੇ 1997-2022 ਦੇ ਰੁਝਾਨਾਂ ਦੀ ਪੂਰੀ ਜਾਣਕਾਰੀ।",
    "descGujarat": "ਗੁਜਰਾਤ ਵਿਧਾਨ ਸਭਾ (182 ਸੀਟਾਂ) ਲਈ ਆਉਣ ਵਾਲਾ ਚੋਣ ਵਿਸ਼ਲੇਸ਼ਣ ਪੋਰਟਲ।",
    "descHaryana": "ਹਰਿਆਣਾ ਵਿਧਾਨ ਸਭਾ ਚੋਣਾਂ (90 ਸੀਟਾਂ) ਲਈ ਆਉਣ ਵਾਲੀ ਕਵਰੇਜ।",
    "descHimachal": "ਹਿਮਾਚਲ ਪ੍ਰਦੇਸ਼ ਵਿਧਾਨ ਸਭਾ (68 ਸੀਟਾਂ) ਲਈ ਆਉਣ ਵਾਲੀ ਚੋਣ ਕਵਰੇਜ।",
    "visitHub": "ਮੁੱਖ ਕੇਂਦਰ 'ਤੇ ਜਾਓ ➔",
    "browsePunjab": "ਪੰਜਾਬ ਡੇਟਾ ਦੇਖੋ ➔",
    "launchSoon": "ਜਲਦੀ ਲਾਂਚ ਹੋਵੇਗਾ",
    "visitPunjab": "ਪੰਜਾਬ ਡੇਟਾ ਦੇਖੋ ➔",
    "visitUP": "ਯੂਪੀ ਪੋਰਟਲ ਦੇਖੋ ➔",
    "browseUP": "ਯੂਪੀ ਡੇਟਾ ਦੇਖੋ ➔",
    "tallySub": "ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ ਚੋਣਾਂ — 20 ਫਰਵਰੀ 2022 — ਕੁੱਲ ਵੋਟਿੰਗ ਪ੍ਰਤੀਸ਼ਤ: 71.95%",
    "countdownEst": "ਅਨੁਮਾਨਿਤ ਵੋਟਿੰਗ ਦੀ ਤਰੀਕ: ਫਰਵਰੀ 2027 (ਚੋਣ ਕਮਿਸ਼ਨ ਦੇ ਐਲਾਨ ਦੇ ਅਧੀਨ)",
    "countdownEstVal": "ਅਨੁਮਾਨਿਤ ਵੋਟਿੰਗ ਦੀ ਤਰੀਕ: ਫਰਵਰੀ 2027 (ਚੋਣ ਕਮਿਸ਼ਨ ਦੇ ਐਲਾਨ ਦੇ ਅਧੀਨ)",
    "runnerup": "ਉਪ ਜੇਤੂ",
    "bjpSeats": "ਭਾਜਪਾ ਸੀਟਾਂ",
    "spSeats": "ਸਪਾ ਸੀਟਾਂ",
    "aapSeats": "ਆਪ ਸੀਟਾਂ",
    "incSeats": "ਕਾਂਗਰਸ ਸੀਟਾਂ",
    "pollingDate": "ਵੋਟਿੰਗ ਦੀ ਤਰੀਕ",
    "voterTurnout": "ਵੋਟਿੰਗ ਪ੍ਰਤੀਸ਼ਤ",
    "seats": "ਸੀਟਾਂ",
    "seat": "ਸੀਟ",
    "others": "ਹੋਰ",
    "aboutDisclaimerTitle": "ਮਹੱਤਵਪੂਰਨ ਬੇਦਾਅਵਾ ਅਤੇ ਨੈੱਟਵਰਕ ਐਟਰੀਬਿਊਸ਼ਨ",
    "aboutDisclaimerDesc": "ਇਹ ਪੋਰਟਲ IndiaElections.org ਰਾਸ਼ਟਰੀ ਚੋਣ ਸੂਚਨਾ ਨੈੱਟਵਰਕ ਦੇ ਹਿੱਸੇ ਵਜੋਂ ਚਲਾਇਆ ਜਾਂਦਾ ਹੈ। ਡੇਟਾ ਭਾਰਤ ਚੋਣ ਕਮਿਸ਼ਨ (ECI) ਦੇ ਅਧਿਕਾਰਤ ਰਿਕਾਰਡਾਂ ਅਤੇ IndiaElections.org ਦੇ ਇਤਿਹਾਸਕ ਪੁਰਾਲੇਖਾਂ ਤੋਂ ਇਕੱਤਰ ਕੀਤਾ ਗਿਆ ਹੈ। ਇਹ ਪੋਰਟਲ ਸੁਤੰਤਰ ਅਤੇ ਨਿਰਪੱਖ ਹੈ।",
    "aboutPurposeTitle": "ਉਦੇਸ਼ ਅਤੇ ਨੈੱਟਵਰਕ ਭਾਈਵਾਲੀ",
    "aboutPurposeDesc1": "ਪੰਜਾਬ ਚੋਣਾਂ 2027 IndiaElections.org ਨੈੱਟਵਰਕ ਦਾ ਹਿੱਸਾ ਹੈ — ਜੋ ਪੂਰੇ ਭਾਰਤ ਵਿੱਚ ਪਾਰਦਰਸ਼ੀ, ਪਹੁੰਚਯੋਗ ਅਤੇ ਤੇਜ਼ ਚੋਣ ਡੇਟਾ ਪ੍ਰਦਾਨ ਕਰਨ ਲਈ ਸਮਰਪਿਤ ਹੈ। 2027 ਦੀਆਂ ਵਿਧਾਨ ਸਭਾ ਚੋਣਾਂ ਦੌਰਾਨ, ਵੋਟਰ ਆਪਣੇ ਹਲਕੇ, ਉਮੀਦਵਾਰ ਦੇ ਇਤਿਹਾਸ ਅਤੇ ਚੋਣ ਰੁਝਾਨਾਂ ਦੀ ਪੜਚੋਲ ਕਰਨ ਲਈ ਇੱਕ ਨਿਰਪੱਖ, ਵਿਆਪਕ ਡੇਟਾ ਪੋਰਟਲ ਦੇ ਹੱਕਦਾਰ ਹਨ।",
    "aboutPurposeDesc2": "ਪੰਜਾਬ ਦੇ ਸਾਰੇ ਵੋਟਰਾਂ ਦੀ ਸਹੂਲਤ ਲਈ ਇਹ ਪੋਰਟਲ ਅੰਗਰੇਜ਼ੀ, ਹਿੰਦੀ ਅਤੇ ਪੰਜਾਬੀ ਤਿੰਨੋਂ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਉਪਲਬਧ ਹੈ।",
    "aboutSourcesTitle": "ਡੇਟਾ ਸਰੋਤ ਅਤੇ ਸਿਹਰਾ",
    "aboutMethodologyTitle": "ਕਾਰਜਪ੍ਰਣਾਲੀ ਅਤੇ ਸ਼ੁੱਧਤਾ",
    "aboutMethodologyItem1": "ਹਲਕੇ ਪੱਧਰ ਦੇ ਨਤੀਜੇ (ਵੋਟਾਂ, ਜਿੱਤ ਦਾ ਅੰਤਰ, ਵੋਟਿੰਗ ਫੀਸਦੀ) ਅਨੁਮਾਨਿਤ ਹਨ ਅਤੇ ਰਾਊਂਡਿੰਗ ਜਾਂ ਮਾਮੂਲੀ ਤਬਦੀਲੀਆਂ ਕਾਰਨ ਅਧਿਕਾਰਤ ECI ਅੰਕੜਿਆਂ ਤੋਂ ਥੋੜ੍ਹੇ ਵੱਖਰੇ ਹੋ ਸਕਦੇ ਹਨ।",
    "aboutMethodologyItem2": "ਇਤਿਹਾਸਕ ਚੋਣ ਡੇਟਾ (1997-2012) ECI ਪੁਰਾਲੇਖਾਂ ਤੋਂ ਲਿਆ ਗਿਆ ਹੈ ਅਤੇ ਇਸ ਵਿੱਚ ਮਾਮੂਲੀ ਅਸ਼ੁੱਧੀਆਂ ਹੋ ਸਕਦੀਆਂ ਹਨ।",
    "aboutMethodologyItem3": "ਇਤਿਹਾਸਕ ਚੋਣਾਂ ਲਈ ਜੇਤੂ ਅਤੇ ਉਪ-ਜੇਤੂ ਉਮੀਦਵਾਰਾਂ ਦੇ ਨਾਮ ਪ੍ਰਤੀਨਿਧ ਹਨ; ਸਹੀ ਨਾਵਾਂ ਲਈ ECI ਤੋਂ ਤਸਦੀਕ ਕਰੋ।",
    "aboutMethodologyItem4": "2027 ਦਾ ਚੋਣ ਸ਼ਡਿਊਲ ਪੂਰੀ ਤਰ੍ਹਾਂ ਅਨੁਮਾਨਿਤ ਹੈ। ਕੋਈ ਅਧਿਕਾਰਤ ਤਰੀਕ ਘੋਸ਼ਿਤ ਨਹੀਂ ਕੀਤੀ ਗਈ ਹੈ। ਅਸਲ ਤਰੀਕ ਦਾ ਫੈਸਲਾ ਭਾਰਤ ਚੋਣ ਕਮਿਸ਼ਨ ਦੁਆਰਾ ਕੀਤਾ ਜਾਵੇਗਾ।",
    "aboutMethodologyItem5": "ਪਾਰਟੀ ਸੀਟਾਂ ਦੀ ਗਿਣਤੀ ਵਿੱਚ ਉਸ ਪਾਰਟੀ ਦੇ ਚੋਣ ਨਿਸ਼ਾਨ ਹੇਠ ਖੜ੍ਹੇ ਸਾਰੇ ਉਮੀਦਵਾਰ ਸ਼ਾਮਲ ਹਨ, ਜਿਸ ਵਿੱਚ ਲਾਗੂ ਹੋਣ ਵਾਲੇ ਬਾਗੀ ਉਮੀਦਵਾਰ ਵੀ ਸ਼ਾਮਲ ਹਨ।",
    "aboutCoverageTitle": "ਕਵਰੇਜ",
    "aboutPagesTitle": "ਪੰਨੇ",
    "aboutLanguagesTitle": "ਭਾਸ਼ਾਵਾਂ",
    "aboutContactTitle": "ਗਲਤੀਆਂ ਦੀ ਰਿਪੋਰਟਿੰਗ ਅਤੇ ਸੰਪਰਕ",
    "aboutContactDesc1": "ਜੇਕਰ ਤੁਹਾਨੂੰ ਕਿਸੇ ਵੀ ਹਲਕੇ ਦੇ ਡੇਟਾ, ਚੋਣ ਨਤੀਜਿਆਂ ਜਾਂ ਉਮੀਦਵਾਰ ਦੀ ਜਾਣਕਾਰੀ ਵਿੱਚ ਕੋਈ ਗਲਤੀ ਮਿਲਦੀ ਹੈ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਅਧਿਕਾਰਤ ਭਾਰਤ ਚੋਣ ਕਮਿਸ਼ਨ ਦੀ ਵੈੱਬਸਾਈਟ ਤੋਂ ਤਸਦੀਕ ਕਰੋ।",
    "aboutContactDesc2": "ਡੇਟਾ ਸੁਧਾਰ, ਫੀਡਬੈਕ, ਮੀਡੀਆ ਪੁੱਛਗਿੱਛ ਜਾਂ ਨੈੱਟਵਰਕ ਭਾਈਵਾਲੀ ਲਈ, ਕਿਰਪਾ ਕਰਕੇ ਸਾਨੂੰ ਈਮੇਲ ਕਰੋ:",
    "sourceParent": "ਮੂਲ ਨੈੱਟਵਰਕ",
    "sourceOfficial": "ਪ੍ਰਾਇਮਰੀ ਅਧਿਕਾਰਤ ਸਰੋਤ",
    "source22Data": "2022 ਚੋਣ ਡੇਟਾ",
    "source17Data": "2017 ਚੋਣ ਡੇਟਾ",
    "sourceHistData": "ਇਤਿਹਾਸਕ ਰੁਝਾਨ (1997-2012)",
    "sourceSched": "2027 ਸ਼ਡਿਊਲ",
    "sourceSchedVal": "ਅਨੁਮਾਨਿਤ — ਚੋਣ ਕਮਿਸ਼ਨ ਦੇ ਐਲਾਨ ਦੇ ਅਧੀਨ",
    "legendAap92": "ਆਪ — 92 ਸੀਟਾਂ",
    "legendInc18": "ਕਾਂਗਰਸ — 18 ਸੀਟਾਂ",
    "legendSad3": "ਅਕਾਲੀ ਦਲ — 3 ਸੀਟਾਂ",
    "legendBjp2": "ਭਾਜਪਾ — 2 ਸੀਟਾਂ",
    "legendBsp1": "ਬਸਪਾ — 1 ਸੀਟ",
    "legendInd1": "ਆਜ਼ਾਦ — 1 ਸੀਟ",
    "legendInc77": "ਕਾਂਗਰਸ — 77 ਸੀਟਾਂ",
    "legendAap20": "ਆਪ — 20 ਸੀਟਾਂ",
    "legendSad15": "ਅਕਾਲੀ ਦਲ — 15 ਸੀਟਾਂ",
    "legendBjp3": "ਭਾਜਪਾ — 3 ਸੀਟਾਂ",
    "legendLip2": "ਐੱਲਆਈਪੀ — 2 ਸੀਟਾਂ",
    "trendsTitle": "ਜਿੱਤੀਆਂ ਗਈਆਂ ਸੀਟਾਂ — ਸਾਰੇ ਚੋਣ ਨਤੀਜੇ"
}
};

/* ---- State ---- */
let currentLang = localStorage.getItem('pe_lang') || 'en';
const urlParams = new URLSearchParams(window.location.search);
const langParam = urlParams.get('lang');
if (langParam && ['en', 'hi', 'pa'].includes(langParam)) {
  currentLang = langParam;
  localStorage.setItem('pe_lang', langParam);
}

/* ---- i18n ---- */
function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
}

function applyLang() {
  document.documentElement.lang = currentLang === 'pa' ? 'pa' : currentLang === 'hi' ? 'hi' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    const baseCanonical = canonical.href.split('?')[0];
    if (currentLang !== 'en') {
      canonical.href = baseCanonical + '?lang=' + currentLang;
    } else {
      canonical.href = baseCanonical;
    }
  }
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('pe_lang', lang);
  applyLang();
  document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
}

/* ---- Navigation ---- */
function initNav() {
  // Mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const navMain = document.getElementById('navMain');
  if (menuBtn && navMain) {
    menuBtn.addEventListener('click', () => {
      navMain.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', navMain.classList.contains('open'));
    });
    document.addEventListener('click', e => {
      if (!menuBtn.contains(e.target) && !navMain.contains(e.target)) {
        navMain.classList.remove('open');
      }
    });
  }

  // Language switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  // Highlight active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-main a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

/* ---- Countdown ---- */
function initCountdown(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;

  // Target: Feb 15, 2027 (estimated poll date)
  const target = new Date('2027-02-15T06:00:00');

  function update() {
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) {
      el.innerHTML = '<span style="font-size:var(--text-sm);color:var(--text-3)">Election day has passed</span>';
      return;
    }
    const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs  = Math.floor((diff % (1000 * 60)) / 1000);

    el.innerHTML = `
      <div class="countdown-unit"><span class="countdown-num" id="cd-days">${String(days).padStart(3,'0')}</span><span class="countdown-name" data-i18n="countdownDays">${t('countdownDays')}</span></div>
      <span class="countdown-divider">:</span>
      <div class="countdown-unit"><span class="countdown-num">${String(hours).padStart(2,'0')}</span><span class="countdown-name" data-i18n="countdownHours">${t('countdownHours')}</span></div>
      <span class="countdown-divider">:</span>
      <div class="countdown-unit"><span class="countdown-num">${String(mins).padStart(2,'0')}</span><span class="countdown-name" data-i18n="countdownMins">${t('countdownMins')}</span></div>
      <span class="countdown-divider">:</span>
      <div class="countdown-unit"><span class="countdown-num">${String(secs).padStart(2,'0')}</span><span class="countdown-name" data-i18n="countdownSecs">${t('countdownSecs')}</span></div>
    `;
  }
  update();
  setInterval(update, 1000);
}

/* ---- FAQ Accordion ---- */
function initFaq() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-question');
    if (q) q.addEventListener('click', () => item.classList.toggle('open'));
  });
}

/* ---- Party badge helper ---- */
function partyBadge(party) {
  const p = (party || '').toUpperCase();
  const cls = ['AAP','INC','SAD','BJP','BSP','IND'].includes(p) ? p.toLowerCase() : 'ind';
  return `<span class="badge badge-${cls}">${party}</span>`;
}

/* ---- Format number ---- */
function fmtNum(n) {
  if (n == null) return '—';
  return Number(n).toLocaleString('en-IN');
}

/* ---- Render shared header ---- */
function renderHeader() {
  const el = document.getElementById('siteHeader');
  if (!el) return;
  const isSub = window.location.pathname.includes('/constituency/') || window.location.pathname.includes('/district/');
  const pathPrefix = isSub ? '../' : '';

  el.innerHTML = `
    <div class="container header-inner">
      <a href="${pathPrefix}index.html" class="logo">
        <img src="${pathPrefix}favicon.svg" alt="Punjab Elections Logo" class="logo-img" style="width:36px;height:36px;object-fit:contain;border-radius:var(--radius-sm)">
        <div>
          <div class="logo-title" data-i18n="siteName">${t('siteName')}</div>
          <div class="logo-sub" data-i18n="siteTagline">${t('siteTagline')}</div>
        </div>
      </a>
      <nav class="nav-main" id="navMain">
        <a href="${pathPrefix}constituencies.html" data-i18n="navConstituencies">${t('navConstituencies')}</a>
        <a href="${pathPrefix}candidates.html" data-i18n="navCandidates">${t('navCandidates')}</a>
        <div class="nav-dropdown">
          <button class="nav-dropdown-btn" data-i18n="navResults">${t('navResults')}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <div class="dropdown-menu">
            <a href="${pathPrefix}results-2022.html" data-i18n="nav2022">${t('nav2022')}</a>
            <a href="${pathPrefix}results-2017.html" data-i18n="nav2017">${t('nav2017')}</a>
          </div>
        </div>
        <a href="${pathPrefix}parties.html" data-i18n="navParties">${t('navParties')}</a>
        <a href="${pathPrefix}trends.html" data-i18n="navTrends">${t('navTrends')}</a>
        <a href="${pathPrefix}districts.html" data-i18n="navDistricts">${t('navDistricts')}</a>
        <a href="${pathPrefix}about.html" data-i18n="navAbout">${t('navAbout')}</a>
        <a href="${pathPrefix}network.html" data-i18n="navNetwork">${t('navNetwork')}</a>
      </nav>
      <div class="header-actions">
        <div class="lang-switcher">
          <button class="lang-btn ${currentLang==='en'?'active':''}" data-lang="en">EN</button>
          <button class="lang-btn ${currentLang==='hi'?'active':''}" data-lang="hi">हि</button>
          <button class="lang-btn ${currentLang==='pa'?'active':''}" data-lang="pa">ਪੰ</button>
        </div>
        <button class="menu-btn" id="menuBtn" aria-label="Menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>`;
}

/* ---- Render shared footer ---- */
function renderFooter() {
  const el = document.getElementById('siteFooter');
  if (!el) return;
  const isSub = window.location.pathname.includes('/constituency/') || window.location.pathname.includes('/district/');
  const pathPrefix = isSub ? '../' : '';

  el.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="${pathPrefix}favicon.svg" alt="Punjab Elections Logo" class="logo-img" style="width:40px;height:40px;object-fit:contain;margin-bottom:var(--s-4);border-radius:var(--radius-sm)">
          <div class="footer-brand-name" data-i18n="siteName">${t('siteName')}</div>
          <p class="footer-brand-desc" data-i18n="footerDesc">${t('footerDesc')}</p>
        </div>
        <div>
          <div class="footer-col-title" data-i18n="footerData">${t('footerData')}</div>
          <div class="footer-links">
            <a href="${pathPrefix}constituencies.html" data-i18n="footerConstituencies">${t('footerConstituencies')}</a>
            <a href="${pathPrefix}results-2022.html" data-i18n="footerResults2022">${t('footerResults2022')}</a>
            <a href="${pathPrefix}results-2017.html" data-i18n="footerResults2017">${t('footerResults2017')}</a>
            <a href="${pathPrefix}candidates.html" data-i18n="footerCandidates">${t('footerCandidates')}</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title" data-i18n="footerLinks">${t('footerLinks')}</div>
          <div class="footer-links">
            <a href="${pathPrefix}parties.html" data-i18n="footerParties">${t('footerParties')}</a>
            <a href="${pathPrefix}trends.html" data-i18n="footerTrends">${t('footerTrends')}</a>
            <a href="${pathPrefix}districts.html" data-i18n="footerDistricts">${t('footerDistricts')}</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title" data-i18n="footerInfo">${t('footerInfo')}</div>
          <div class="footer-links">
            <a href="${pathPrefix}about.html" data-i18n="footerAbout">${t('footerAbout')}</a>
            <a href="${pathPrefix}network.html" data-i18n="footerNetwork">${t('footerNetwork')}</a>
            <a href="${pathPrefix}privacy.html" data-i18n="footerPrivacy">${t('footerPrivacy')}</a>
            <a href="${pathPrefix}terms.html" data-i18n="footerTerms">${t('footerTerms')}</a>
            <a href="${pathPrefix}editorial.html" data-i18n="footerEditorial">${t('footerEditorial')}</a>
            <a href="${pathPrefix}corrections.html" data-i18n="footerCorrections">${t('footerCorrections')}</a>
            <a href="${pathPrefix}data-api.html" data-i18n="footerDataApi">${t('footerDataApi')}</a>
            <a href="${pathPrefix}advertise.html" data-i18n="footerAdvertise">${t('footerAdvertise')}</a>
            <a href="https://indiaelections.org" target="_blank" rel="noopener" title="IndiaElections.org — National Election Network">IndiaElections.org</a>
            <a href="https://eci.gov.in" target="_blank" rel="noopener">ECI Official Site</a>
            <a href="${pathPrefix}sitemap.xml">Sitemap</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copy">© 2027 PunjabElectionResults.com · Part of the <a href="https://indiaelections.org" target="_blank" rel="noopener" style="color:var(--accent);text-decoration:underline">IndiaElections.org</a> network</div>
        <div class="footer-disclaimer">Data sourced from Election Commission of India (ECI) official records and <a href="https://indiaelections.org" target="_blank" rel="noopener" style="color:rgba(255,255,255,.7);text-decoration:underline">IndiaElections.org</a> network archives. This is an independent information portal.</div>
      </div>
    </div>`;
}

/* ---- Render Social Share Bar ---- */
function renderShareBar(customTitle, customUrl) {
  const title = encodeURIComponent(customTitle || document.title);
  const url = encodeURIComponent(customUrl || window.location.href);

  return `
    <div class="share-bar">
      <span class="share-label">Share:</span>
      <a href="https://api.whatsapp.com/send?text=${title}%20${url}" target="_blank" rel="noopener" class="share-btn share-btn-wa" title="Share on WhatsApp">
        <svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.147 4.193 4.264-1.119z"/></svg> WhatsApp
      </a>
      <a href="https://twitter.com/intent/tweet?text=${title}&url=${url}" target="_blank" rel="noopener" class="share-btn share-btn-x" title="Share on X (Twitter)">
        <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> X
      </a>
      <a href="https://www.facebook.com/sharer/sharer.php?u=${url}" target="_blank" rel="noopener" class="share-btn share-btn-fb" title="Share on Facebook">
        <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> Facebook
      </a>
      <a href="https://t.me/share/url?url=${url}&text=${title}" target="_blank" rel="noopener" class="share-btn share-btn-tg" title="Share on Telegram">
        <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-2.03 9.57c-.15.68-.55.84-1.12.52l-3.1-2.28-1.5 1.44c-.17.17-.31.31-.63.31l.22-3.15 5.74-5.18c.25-.22-.05-.34-.38-.12L7.64 13.91l-3.06-.96c-.66-.21-.67-.66.14-.98l11.96-4.61c.55-.2 1.04.14.88.88z"/></svg> Telegram
      </a>
      <button onclick="copyShareLink(this)" class="share-btn share-btn-copy" title="Copy link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg> Copy Link
      </button>
    </div>`;
}

function copyShareLink(btn) {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const orig = btn.innerHTML;
    btn.innerHTML = '✓ Copied!';
    setTimeout(() => { btn.innerHTML = orig; }, 2000);
  }).catch(() => {
    alert('URL copied to clipboard');
  });
}

window.renderShareBar = renderShareBar;
window.copyShareLink = copyShareLink;

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  initNav();
  initFaq();
  applyLang();
  initCountdown('countdown');
});

document.addEventListener('langchange', () => {
  renderHeader();
  renderFooter();
  initNav();
  applyLang();
});

