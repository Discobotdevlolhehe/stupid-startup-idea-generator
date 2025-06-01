const intros = [
  "Uber for",
  "AI-powered",
  "Decentralized",
  "Subscription-based",
  "Ethically sourced",
  "Quantum-encrypted",
  "Crowdsourced",
  "NFT-backed",
  "Blockchain-infused",
  "Gamified",
  "Metaverse-integrated",
  "Open-source",
  "Deepfake-enabled",
  "Voice-controlled",
  "Holographic",
  "Hyperlocal",
  "Zero-trust",
  "Neural-linked",
  "Time-travel-adjacent",
  "Scent-based",
  "Emotionally intelligent",
  "Apocalypse-ready",
  "Data-harvesting-as-a-service",
  "AI-generated",
  "SaaS but for"
];


const niches = [
  "cats",
  "haunted houses",
  "grandmas",
  "introverts",
  "clowns",
  "middle schoolers",
  "alien abductees",
  "MUN chairs",
  "flat-earthers",
  "people who hate Mondays",
  "crypto bros in denial",
  "emotionally unavailable teens",
  "cursed philosophers",
  "AI doomsday preppers",
  "people allergic to commitment",
  "post-apocalyptic influencers",
  "goose cultists",
  "NPCs in open-world games",
  "sleep-deprived programmers",
  "competitive eaters",
  "angry vegans",
  "conspiracy theorists",
  "ex-gifted kids",
  "doomsday startups",
  "soulless corporate mascots"
];


const formats = [
  "dating app",
  "marketplace",
  "meditation platform",
  "therapy chatbot",
  "fitness tracker",
  "delivery service",
  "social network",
  "virtual reality world",
  "crypto wallet",
  "AI therapist",
  "life simulator",
  "reincarnation planner",
  "panic attack scheduler",
  "quantum dating ring",
  "empathy exchange",
  "rage room booking system",
  "subscription box",
  "digital exorcism service",
  "emotional support chatbot",
  "sleep-paralysis assistant",
  "metaverse yoga retreat",
  "hypebeast recycling center",
  "public breakdown simulator",
  "startup graveyard archive"
];

const nameStarts = ["Snark", "Thera", "Byte", "Woke", "Neo", "Meta", "Flux", "Cryp", "Vibe", "Zeno", "Quanta"];
const nameEnds = ["ify", "zone", "loop", "hub", "net", "sync", "verse", "cloud", "core", "boi", "lyt"];
function generateStartupName() {
  return getRandom(nameStarts) + getRandom(nameEnds);
}

const taglines = [
  "Disrupting the future of emotional detachment.",
  "Because therapy is too mainstream.",
  "Monetizing your personal crisis, ethically.",
  "Pivoting into chaos since day one.",
  "Revolutionizing sadness with blockchain.",
  "Finally — an app your therapist will block.",
  "Not even God knows what this does.",
  "Funding guaranteed. Purpose optional.",
  "Solving problems nobody asked for.",
  "Your next breakdown? There's an app for that."
];


function generateIdea() {
  const name = generateStartupName();
  const idea = `${getRandom(intros)} ${getRandom(formats)} for ${getRandom(niches)}`;
  const tagline = getRandom(taglines);
  document.getElementById('name').textContent = name;
  document.getElementById('idea').textContent = idea;
  document.getElementById('tagline').textContent = tagline;
}

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
