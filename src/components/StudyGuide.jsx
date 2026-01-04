import React, { useState } from 'react';
import { Book, Users, Brain, Clock, Lightbulb, CheckCircle, ChevronDown, ChevronRight } from 'lucide-react';

const StudyGuide = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const sections = [
    {
      id: 'birth',
      icon: <Users className="w-6 h-6" />,
      title: "1. THE BIRTH OF AI (Know This Cold!)",
      color: "bg-blue-500",
      content: {
        who: {
          title: "WHO? - The Person Behind AI",
          items: [
            "👤 JOHN MCCARTHY - The Father of AI",
            "",
            "📍 LOCATION: Dartmouth Conference, Summer 1956",
            "  → Only 10 attendees (small group, big impact!)",
            "  → This conference is considered AI's birthday",
            "",
            "🎓 HIS JOURNEY:",
            "  → PhD in Mathematics at Princeton University",
            "  → First job: Carnegie Mellon University (CMU)",
            "  → Then moved to MIT (worked with Minsky)",
            "  → Finally moved to Stanford University",
            "  → Why so many moves? See THE BIG CONFLICT below!",
            "",
            "💰 FUNDING: US Defense Ministry (DARPA)",
            "  → Most early AI was military-funded",
            "  → Research was kept as military secrets",
            "  → This is why public didn't know about AI for years"
          ]
        },
        what: {
          title: "WHAT? - The Name 'Artificial Intelligence'",
          items: [
            "🏷️ McCarthy COINED the term 'Artificial Intelligence'",
            "  → Before this: 'Intelligent Machines', 'Thinking Machines'",
            "  → He chose 'Artificial Intelligence' to make it a distinct field",
            "",
            "⚗️ IMPORTANT CONCEPT: Cannot separate the words!",
            "  → 'Artificial' + 'Intelligence' ≠ AI",
            "  → Example: Like NaCl (salt)",
            "    • Na (Sodium) = Explodes in water, deadly",
            "    • Cl (Chlorine) = Poisonous gas",
            "    • NaCl = Safe to eat!",
            "  → Similarly, 'AI' is ONE complete concept",
            "",
            "📖 DEFINITION McCarthy gave:",
            "  → 'AI is the Science and Engineering of intelligent machines'",
            "  → Science = Understanding natural intelligence",
            "  → Engineering = Building intelligent machines",
            "  → Both are needed!"
          ]
        },
        conflict: {
          title: "THE BIG CONFLICT - McCarthy vs Minsky",
          items: [
            "🥊 THE DEBATE that shaped AI's future:",
            "",
            "McCarthy's View: 'Intelligence is LOGIC-based'",
            "  → Use rules, mathematics, formal logic",
            "  → Example: IF-THEN rules, mathematical proofs",
            "  → This is LEFT BRAIN thinking (analytical)",
            "  → Led to: Artificial Cognitive Systems (ACS)",
            "  → Programs: Expert Systems, Logic-based AI",
            "",
            "Minsky's View: 'Intelligence is ANTI-LOGIC too'",
            "  → Not everything can be written as logic",
            "  → Learning from experience is important",
            "  → Example: Recognizing faces, riding bicycle",
            "  → This is RIGHT BRAIN thinking (pattern-based)",
            "  → Led to: Machine Learning (ML)",
            "  → Programs: Neural Networks, Learning systems",
            "",
            "⚡ RESULT OF CONFLICT:",
            "  → McCarthy left MIT → went to Stanford",
            "  → Minsky stayed at MIT",
            "  → BUT: Both were right! Modern AI uses BOTH approaches",
            "  → This split created two branches of AI we see today"
          ]
        },
        impact: {
          title: "IMPACT - Why This Matters",
          items: [
            "🎯 CREATED A DISTINCT FIELD:",
            "  → Before: AI was just part of Computer Science",
            "  → After: AI became its own subject",
            "",
            "📚 ACADEMIC EVOLUTION:",
            "  → 1952: AI taught as few modules in CS degree",
            "  → 1980s: AI as specialization in CS",
            "  → 2018: Full BSc (Hons) degree programs in AI!",
            "  → Today: AI departments in major universities",
            "",
            "🌳 SPLIT AI INTO TWO BRANCHES:",
            "  → Branch 1: Symbolic AI (McCarthy's logic-based)",
            "    • Expert Systems, NLP, Game Playing",
            "  → Branch 2: Non-symbolic AI (Minsky's learning-based)",
            "    • Neural Networks, Deep Learning, Robotics",
            "",
            "🌍 GLOBAL IMPACT:",
            "  → AI is now the '4th Industrial Revolution'",
            "  → 1st: Steam power, 2nd: Electricity",
            "  → 3rd: Electronics, 4th: AI algorithms!",
            "  → Changed how we work, live, think"
          ]
        }
      }
    },
    {
      id: 'turing',
      icon: <Brain className="w-6 h-6" />,
      title: "2. TURING'S 4 MEGA CONTRIBUTIONS",
      color: "bg-purple-500",
      content: {
        theoretical: {
          title: "1️⃣ THEORETICAL FOUNDATION (1936)",
          items: [
            "📜 What he said: 'ANY task can be computerized'",
            "",
            "💡 What this means:",
            "  → If humans can do it step-by-step, machines can too",
            "  → Mathematical calculations, logical reasoning, games",
            "  → Even complex tasks can be broken into steps",
            "",
            "🎯 Why this matters:",
            "  → Gave theoretical proof that intelligent machines are POSSIBLE",
            "  → Before: People thought 'thinking' is only for humans/animals",
            "  → After: Realized machines can be intelligent too",
            "  → This is the foundation ALL of AI stands on",
            "",
            "🔧 Called: 'Turing Machine' concept",
            "  → Abstract machine that can compute anything computable",
            "  → Your computer, phone, AI - all based on this idea"
          ]
        },
        paper: {
          title: "2️⃣ PHILOSOPHICAL PAPER (1950)",
          items: [
            "📄 Paper Title: 'Computing Machinery and Intelligence'",
            "  → Published 14 years after his theoretical work",
            "  → This happened during AI's 'Gestation Period'",
            "",
            "❓ BIG QUESTION he asked: 'Can machines think?'",
            "",
            "💭 What he discussed:",
            "  → What does 'thinking' mean?",
            "  → How do we know if someone/something is intelligent?",
            "  → Can we test machine intelligence?",
            "",
            "🌟 IMPACT:",
            "  → Stimulated curiosity about intelligent machines",
            "  → Made people seriously think about AI possibility",
            "  → Led directly to the 1956 Dartmouth Conference",
            "  → Without this paper, McCarthy might not have proposed AI field",
            "",
            "🕐 TIMING:",
            "  → 1945: World War 2 ended → enthusiasm for discovery",
            "  → 1948: Transistor invented → computers becoming possible",
            "  → 1950: Turing's paper → philosophical foundation ready",
            "  → 1956: AI field officially born"
          ]
        },
        test: {
          title: "3️⃣ THE TURING TEST (1952) ⭐ MOST IMPORTANT",
          items: [
            "🎯 THE PROBLEM: How do we know if a machine is intelligent?",
            "",
            "🎭 THE SETUP (Imitation Game):",
            "  Step 1: Three players in separate rooms",
            "    → Player A: A woman",
            "    → Player B: A man",
            "    → Player C: An interrogator (can't see A or B)",
            "",
            "  Step 2: Interrogator asks questions via text",
            "    → Asks both A and B questions",
            "    → Tries to figure out who is the woman",
            "    → Man tries to trick interrogator",
            "",
            "  Step 3: Replace man with a MACHINE",
            "    → Interrogator doesn't know this happened!",
            "    → Machine tries to answer like a human",
            "    → Woman still answers honestly",
            "",
            "✅ THE TEST:",
            "  → If interrogator CANNOT tell which is the machine",
            "  → Then machine = as intelligent as woman",
            "  → If machine 'fools' the interrogator → machine is intelligent!",
            "",
            "💡 KEY INSIGHT: 'Intelligence is COMPARATIVE'",
            "  → You're intelligent compared to SOMEONE/SOMETHING",
            "  → Not absolute (you're intelligent, period)",
            "  → Examples:",
            "    • Calculator vs 2-year-old baby in math? Calculator intelligent!",
            "    • Calculator vs Math Professor in math? Calculator NOT intelligent!",
            "    • MS Word Spell Checker vs 1-year baby? Spell Checker intelligent!",
            "    • Spell Checker vs English Professor? NOT intelligent!",
            "",
            "🎓 WHAT THIS MEANS FOR AI:",
            "  → Can prove a machine IS intelligent (compare with right person)",
            "  → Can prove a machine is NOT intelligent (compare with expert)",
            "  → Depends on what questions you ask",
            "  → Depends on who you compare with",
            "",
            "⚠️ LIMITATIONS (identified later):",
            "  → Original TT: Only keyboard/text input",
            "  → Couldn't test: Vision, hearing, movement",
            "  → Led to 'Total Turing Test' (with cameras, voice, etc.)"
          ]
        },
        practical: {
          title: "4️⃣ PRACTICAL APPLICATION (1943)",
          items: [
            "⚙️ BOMBE MACHINE (World War 2 project)",
            "",
            "❓ THE PROBLEM:",
            "  → Germans used 'Enigma' machine to encrypt messages",
            "  → Enigma had 159 quintillion possible settings!",
            "  → Impossible for humans to crack manually",
            "  → British needed to read German military plans",
            "",
            "💡 TURING'S SOLUTION:",
            "  → Built 'Bombe' - an electromechanical machine",
            "  → Used logic and mathematics to crack codes",
            "  → Could test thousands of settings quickly",
            "  → Found the correct Enigma settings each day",
            "",
            "🏆 RESULTS:",
            "  → Successfully cracked German codes throughout WW2",
            "  → Helped Allies win the war (saved millions of lives)",
            "  → Showed: Machines CAN do 'intelligent' work",
            "  → Proved his theory: Intelligent tasks can be automated",
            "",
            "🎯 WHY THIS MATTERS FOR AI:",
            "  → First REAL intelligent machine (not just theory)",
            "  → Demonstrated machines can solve problems humans can't",
            "  → Showed practical value of intelligent machines",
            "  → Inspired post-war research into intelligent machines"
          ]
        },
        implications: {
          title: "🌟 OVERALL IMPLICATIONS OF TURING'S WORK",
          items: [
            "✅ POSITIVE VIEW: Machines CAN be intelligent",
            "  → This is OPPOSITE of John Searle (who says machines can't)",
            "  → Turing: 'If it acts intelligent, it IS intelligent'",
            "  → Encouraged researchers to pursue AI",
            "",
            "🔍 IDENTIFIED WHAT AI NEEDS:",
            "  1. Knowledge Representation",
            "     → How to store information in machines",
            "     → Led to: Logic, Rules, Frames, Ontology",
            "",
            "  2. Automated Reasoning",
            "     → How machines draw conclusions",
            "     → Led to: Inference rules, Search algorithms",
            "",
            "  3. Machine Learning",
            "     → How machines adapt to new situations",
            "     → Led to: Neural Networks, Deep Learning",
            "",
            "📱 MODERN IMPACT:",
            "  → All these needs are NOW addressed",
            "  → Modern AI programs: ChatGPT, Watson, Alexa",
            "  → Many programs now PASS Turing Test",
            "  → Example: ALICE (first program to pass TT)",
            "",
            "🏅 LOEBNER PRIZE:",
            "  → Annual competition for best AI (like Turing Test)",
            "  → Programs compete to fool human judges",
            "  → Awards given for most 'human-like' AI",
            "",
            "💭 PHILOSOPHICAL IMPACT:",
            "  → Changed question from 'Can machines think?'",
            "  → To 'How can we make machines think?'",
            "  → Made AI a practical field, not just philosophy"
          ]
        }
      }
    },
    {
      id: 'influential',
      icon: <Lightbulb className="w-6 h-6" />,
      title: "3. INFLUENTIAL AREAS (The Three Questions)",
      color: "bg-green-500",
      content: {
        types: {
          title: "Q1: Understanding TYPES of Intelligence",
          items: [
            "🧠 NEUROSCIENCE (1861-) ⭐ THE STAR CONTRIBUTOR",
            "",
            "🔬 WHAT THEY DISCOVERED:",
            "  → Human brain has TWO types of intelligence",
            "  → Located in different parts of brain",
            "  → Work differently, store info differently",
            "",
            "🧩 LEFT BRAIN (Logical/Analytical Intelligence):",
            "  → Uses: Rules, logic, step-by-step thinking",
            "  → Examples: Math calculations, grammar rules, chess strategies",
            "  → When you learn: Study textbooks, memorize formulas, understand theories",
            "  → In AI world: Created Artificial Cognitive Systems (ACS)",
            "  → Also called: Symbolic AI",
            "  → Programs use: Expert Systems, Logic, Rules, IF-THEN statements",
            "",
            "🎨 RIGHT BRAIN (Training/Pattern-based Intelligence):",
            "  → Uses: Experience, patterns, practice, intuition",
            "  → Examples: Recognizing faces, riding bicycle, catching ball",
            "  → When you learn: Practice, repetition, trial-and-error",
            "  → In AI world: Created Machine Learning (ML)",
            "  → Also called: Non-symbolic AI",
            "  → Programs use: Neural Networks, Deep Learning, Training Data",
            "",
            "🔧 PRACTICAL EXAMPLE:",
            "  Learning to drive:",
            "  → Left brain: Study traffic rules, road signs (logical)",
            "  → Right brain: Practice steering, braking (training)",
            "  → Need BOTH to be a good driver!",
            "  → Similarly, modern AI uses BOTH approaches",
            "",
            "📊 EEG TECHNOLOGY:",
            "  → Electroencephalography - measures brain activity",
            "  → Helps understand how brain processes information",
            "  → Used to develop brain-machine interfaces",
            "  → Example: Neuralink (AI chip in brain)",
            "",
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
            "",
            "🧪 PSYCHOLOGY (1887-)",
            "",
            "🔬 WHAT THEY STUDY:",
            "  → Mental behaviors - how mind works",
            "  → Cognitive processes - thinking, memory, understanding",
            "  → Mental health vs mental disease",
            "",
            "🤖 CONTRIBUTION TO AI:",
            "  → Understanding HOW humans think and learn",
            "  → Identifying cognitive skills:",
            "    • Thinking, Memory, Understanding",
            "    • Imagination, Creativity, Decision-making",
            "  → These became features to model in AI",
            "",
            "💡 EXAMPLES IN AI:",
            "  → Memory: How AI stores and retrieves information",
            "  → Learning: How AI improves over time",
            "  → Problem-solving: How AI approaches challenges",
            "",
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
            "",
            "📚 EDUCATION THEORY",
            "",
            "📖 KEY THEORY:",
            "  → 'Learning is the process that reduces errors over cycles'",
            "",
            "🔄 HOW IT WORKS:",
            "  Cycle 1: Try task → Make 10 mistakes",
            "  Cycle 2: Try again → Make 7 mistakes",
            "  Cycle 3: Try again → Make 3 mistakes",
            "  Cycle 4: Try again → Make 0 mistakes = LEARNED!",
            "",
            "🤖 INFLUENCED MACHINE LEARNING:",
            "  → ML algorithms work the same way!",
            "  → Training: Show examples repeatedly",
            "  → Each cycle: Adjust to reduce errors",
            "  → Result: AI 'learns' the task",
            "",
            "🎯 PRACTICAL EXAMPLE:",
            "  Teaching AI to recognize cats:",
            "  → Show 1000 cat pictures",
            "  → AI guesses, makes errors",
            "  → Adjust AI parameters",
            "  → Repeat until error rate is low",
            "  → This is Machine Learning!"
          ]
        },
        ingredients: {
          title: "Q2: INGREDIENTS to Build AI Solutions",
          items: [
            "🎯 PHILOSOPHY (428 BC - Ancient Greece)",
            "",
            "❓ BIG QUESTIONS philosophers asked:",
            "  → What is intelligence?",
            "  → What is knowledge?",
            "  → What is the mind? Can machines have minds?",
            "  → What is consciousness? Do you need it to be intelligent?",
            "  → Can everything be simulated?",
            "  → Should machines be autonomous (make own decisions)?",
            "",
            "⚠️ CRITICAL CONCEPT: Singularity",
            "  → Singularity = Point when machines become smarter than humans",
            "  → Will machines supersede mankind?",
            "  → Should we be worried?",
            "  → Modern solutions: Responsible AI, Human-centered AI",
            "",
            "🧠 EXAMPLE PHILOSOPHICAL DEBATES:",
            "  → John Searle: 'Machines can't truly be intelligent (no consciousness)'",
            "  → Turing: 'If it acts intelligent, it IS intelligent'",
            "  → These debates shape how we build AI",
            "",
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
            "",
            "➗ MATHEMATICS & STATISTICS",
            "",
            "📐 MATHEMATICS CONTRIBUTION:",
            "  1. Formalizing knowledge:",
            "     → Using symbols instead of words",
            "     → F=ma (force equals mass times acceleration)",
            "     → Makes knowledge precise and unambiguous",
            "",
            "  2. Computability:",
            "     → Can this problem be solved by calculation?",
            "     → Led to Turing's 'any task can be computerized'",
            "",
            "  3. Reasoning methods:",
            "     → Logic (AND, OR, NOT, IF-THEN)",
            "     → Proofs and theorems",
            "     → Used in AI reasoning engines",
            "",
            "📊 STATISTICS CONTRIBUTION:",
            "  1. Probability:",
            "     → Dealing with uncertainty",
            "     → 'AI is 80% confident this is a cat'",
            "     → Bayesian reasoning in AI",
            "",
            "  2. Inference:",
            "     → Drawing conclusions from data",
            "     → Pattern recognition",
            "     → Machine Learning algorithms",
            "",
            "  3. Data analysis:",
            "     → Making sense of large datasets",
            "     → Finding patterns humans can't see",
            "     → Foundation for Big Data AI",
            "",
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
            "",
            "🧠 NEUROSCIENCE (Repeated for ingredients)",
            "",
            "🔑 TWO MAIN INGREDIENTS IT IDENTIFIED:",
            "",
            "  Ingredient 1: KNOWLEDGE (Left brain)",
            "    → Facts, rules, theories, procedures",
            "    → 'What' and 'How' of things",
            "    → Stored as: Logic, Rules, Algorithms",
            "    → Used in: Expert Systems, Game Players",
            "",
            "  Ingredient 2: DATA (Right brain)",
            "    → Examples, experiences, patterns",
            "    → Training information",
            "    → Stored as: Numbers, Images, Sequences",
            "    → Used in: Neural Networks, Deep Learning",
            "",
            "⚡ KEY INSIGHT:",
            "  → 'Problem-solving needs Knowledge AND/OR Data'",
            "  → Some problems need knowledge (playing chess with rules)",
            "  → Some need data (recognizing handwriting through examples)",
            "  → Some need BOTH (self-driving cars use maps + learn from driving)",
            "",
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
            "",
            "💬 LINGUISTICS (1957-)",
            "",
            "📚 WHAT IS LINGUISTICS?",
            "  → Study of languages and how they work",
            "  → Grammar, syntax, semantics, meaning",
            "",
            "🗣️ WHY IMPORTANT FOR AI?",
            "  → Humans became intelligent through LANGUAGE",
            "  → Communication made us superior to animals",
            "  → Language is device for knowledge transfer",
            "",
            "🤖 CONTRIBUTION TO AI:",
            "  1. Theory of Languages:",
            "     → How sentences are structured",
            "     → How meaning is represented",
            "     → Grammar rules and exceptions",
            "",
            "  2. Natural Language Processing (NLP):",
            "     → Teaching machines to understand human language",
            "     → Examples: ELIZA chatbot, Google Assistant",
            "",
            "  3. Large Language Models (LLM):",
            "     → Modern AI like ChatGPT",
            "     → Can understand and generate human-like text",
            "     → Based on linguistic theories",
            "",
            "💡 EXAMPLE:",
            "  'There are 10 balls in box A and 12 balls in box B.",
            "  Saman took 3 from A, kept 2, remainder to B. How many in A?'",
            "  → NLP breaks down sentence",
            "  → Understands relationships",
            "  → Solves the math problem",
            "  → This needs linguistic understanding!"
          ]
        },
        programming: {
          title: "Q3: DEVELOPING AI as Programs",
          items: [
            "💻 COMPUTER SCIENCE (1952-) ⭐ CRITICAL FOR PROGRAMMING",
            "",
            "🎯 WHY CS IS ESSENTIAL:",
            "  → AI ideas are just theories until you can PROGRAM them",
            "  → Need tools to translate intelligence into running code",
            "  → This is the 'Engineering' part of AI",
            "",
            "🔧 FOUR KEY CONTRIBUTIONS:",
            "",
            "  1️⃣ ALGORITHMS (How to solve):",
            "     → Step-by-step instructions",
            "     → Example: Sorting algorithm, Search algorithm",
            "     → For AI: How to make decisions, search for solutions",
            "     → Without algorithms: AI is just random",
            "",
            "  2️⃣ DATA STRUCTURES (How to organize):",
            "     → How to store information efficiently",
            "     → Examples: Arrays, Trees, Graphs, Hash tables",
            "     → For AI: Store knowledge, organize search space",
            "     → Example: Chess AI stores possible moves as tree",
            "",
            "  3️⃣ PROGRAMMING LANGUAGES (How to express):",
            "     → Languages to write AI programs",
            "     → Early AI: LISP, Prolog (special AI languages)",
            "     → Modern AI: Python, Java, C++",
            "     → For AI: Need to express logic, rules, learning algorithms",
            "",
            "  4️⃣ COMPILERS (How to execute):",
            "     → Translate human code → machine code",
            "     → Make programs actually run on computers",
            "     → For AI: Turn AI algorithms into executable programs",
            "",
            "📦 COMPLETE PICTURE:",
            "  Idea (AI concept)",
            "  ↓ Algorithm (step-by-step method)",
            "  ↓ Data Structure (organized storage)",
            "  ↓ Programming Language (written code)",
            "  ↓ Compiler (machine instructions)",
            "  ↓ Running AI Program!",
            "",
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
            "",
            "🔧 COMPUTER ENGINEERING (1940-)",
            "",
            "⚙️ WHAT THEY BUILD:",
            "  → The actual HARDWARE (physical machines)",
            "  → Computer Science writes software, Engineering builds hardware",
            "",
            "🖥️ KEY COMPONENTS:",
            "",
            "  1. CPU (Central Processing Unit):",
            "     → 'Brain' of computer",
            "     → Executes instructions",
            "     → Speed matters: Faster CPU = Faster AI",
            "",
            "  2. MEMORY (RAM):",
            "     → Stores data temporarily while program runs",
            "     → More memory = Can handle larger AI problems",
            "     → Example: Neural networks need lots of memory",
            "",
            "  3. STORAGE (Hard drive, SSD):",
            "     → Permanent storage for programs and data",
            "     → AI needs to store training data, models",
            "",
            "  4. SPECIALIZED AI HARDWARE:",
            "     → GPU (Graphics cards) - Parallel processing for ML",
            "     → TPU (Tensor Processing Units) - Google's AI chips",
            "     → Neuromorphic chips - Mimic brain structure",
            "",
            "⚡ WHY BOTH CS AND CE NEEDED:",
            "  → CS writes brilliant AI algorithm",
            "  → But without fast hardware, it runs too slow!",
            "  → CE builds powerful hardware",
            "  → But without smart software, hardware is useless!",
            "  → BOTH needed for AI to work",
            "",
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
            "",
            "🤖 CONTROL THEORY & CYBERNETICS (1984-)",
            "",
            "🎮 WHAT IS CONTROL THEORY?",
            "  → Science of controlling systems automatically",
            "  → Making machines respond to environment",
            "",
            "🔄 FEEDBACK SYSTEMS:",
            "  → Sense environment → Make decision → Take action → Check result → Adjust",
            "  → Example: Thermostat",
            "    • Senses temperature (too hot?)",
            "    • Decides (turn on AC)",
            "    • Takes action (AC starts)",
            "    • Checks result (still too hot?)",
            "    • Adjusts (AC power up/down)",
            "",
            "🤖 FOR ROBOTICS:",
            "  → How robots move and respond",
            "  → Walking, grasping, balancing",
            "  → Sensors → Processing → Actuators",
            "  → Example: Robot vacuum",
            "    • Sensors detect obstacles",
            "    • AI decides direction",
            "    • Motors move robot",
            "    • Continuously adjusts path",
            "",
            "🌐 FOR NETWORKING:",
            "  → Multiple AI agents working together",
            "  → Communication between intelligent systems",
            "  → Coordination and cooperation",
            "",
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
            "",
            "💰 ECONOMICS (1776-)",
            "",
            "💡 CORE CONCEPT:",
            "  → 'Effective use of resources to maximize profit'",
            "  → Resources are LIMITED, needs are UNLIMITED",
            "  → How to get best results with what you have?",
            "",
            "🤖 CONTRIBUTION TO AI:",
            "",
            "  1. OPTIMIZATION ALGORITHMS:",
            "     → Find best solution among many options",
            "     → Minimize cost, maximize benefit",
            "     → Example: AI finding shortest delivery route",
            "",
            "  2. RESOURCE ALLOCATION:",
            "     → Divide limited resources efficiently",
            "     → Example: Cloud computing allocating servers",
            "     → AI deciding how much CPU/memory each task needs",
            "",
            "  3. DECISION THEORY:",
            "     → Making choices under uncertainty",
            "     → Cost-benefit analysis",
            "     → Example: Should AI invest in Stock A or Stock B?",
            "",
            "  4. GAME THEORY:",
            "     → Strategic decision-making",
            "     → When multiple AI agents compete or cooperate",
            "     → Example: AI playing poker (bluffing, betting)",
            "",
            "📊 PRACTICAL EXAMPLE:",
            "  AI Taxi Service:",
            "  → Limited taxis (resource)",
            "  → Many customers (demand)",
            "  → Economic principles help AI decide:",
            "    • Which customer to pick up first?",
            "    • What route minimizes fuel?",
            "    • How to price rides for maximum profit?",
            "    • When to position taxis for future demand?"
          ]
        }
      }
    },
    {
      id: 'timeline',
      icon: <Clock className="w-6 h-6" />,
      title: "4. AI HISTORY TIMELINE (Memorize the Flow)",
      color: "bg-orange-500",
      content: {
        gestation: {
          title: "GESTATION (<1956)",
          items: [
            "1936: Turing - Any task can be computerized",
            "1943: Bombe machine, McCulloch & Pitts ANN model",
            "1945: Post-WW2 enthusiasm",
            "1948: Transistor invented, digital computer born",
            "1950: Turing's paper 'Computing Machinery and Intelligence'",
            "1950s: McCarthy & Minsky PhD at Princeton"
          ]
        },
        birth: {
          title: "BIRTH (1956)",
          items: [
            "Dartmouth Conference - 10 attendees",
            "McCarthy coins 'Artificial Intelligence'",
            "McCarthy-Minsky conflict begins",
            "Funding: US DARPA (military secrets)"
          ]
        },
        early: {
          title: "EARLY ENTHUSIASM (1952-1969)",
          items: [
            "McCarthy's logic-based approach dominated",
            "✅ General Problem Solver (CMU)",
            "✅ Game playing (CMU, IBM)",
            "✅ Theorem provers (IBM)",
            "❌ Minsky criticized ANN (1960s)",
            "Result: ANN research stopped for 25 years!",
            "Search = 1st approach to model intelligence"
          ]
        },
        knowledge: {
          title: "KNOWLEDGE ERA (1969-1979) ⭐",
          items: [
            "💡 REALIZATION: Knowledge is main ingredient!",
            "Allen Newell (CMU): Model knowledge, not intelligence",
            "Knowledge modeling = 2nd approach",
            "✅ ELIZA (1964) - First chatbot (MIT)",
            "✅ SHRDLU (1968) - NLP (MIT)",
            "✅ DENDRAL, MYCIN - Expert Systems (Stanford, CMU)",
            "1975: Minsky proposes Frames"
          ]
        },
        industry: {
          title: "INDUSTRY ERA (1980-present)",
          items: [
            "1987: XCON Expert System (CMU/DEC)",
            "  → First industry recognition!",
            "  → Configured computers in minutes, 100% accuracy",
            "  → DEC earned BILLIONS",
            "1986: ANN RETURNS with Backpropagation",
            "  → Machine Learning born",
            "1988: AI Winter (no funding)",
            "Many AI companies: OpenAI, Google, Apple, IBM"
          ]
        },
        science: {
          title: "BECOMES SCIENCE (1990s-)",
          items: [
            "Before: AI = Engineering (no experiments)",
            "After: AI = Science (hypothesis, experiments, statistics)",
            "Result: People started TRUSTING AI"
          ]
        },
        agents: {
          title: "AGENTS ERA (1995-)",
          items: [
            "1987: Newell, Laird, Rosenbloom - First Agent architecture",
            "New approach: Software as Agents (not just objects)",
            "Agent = Small entity doing specific tasks"
          ]
        },
        modern: {
          title: "MODERN (2000s-)",
          items: [
            "2000s: Internet → Large datasets",
            "Deep Learning solves big data problems",
            "Knowledge less important, Data more important",
            "BUT: LLM brings knowledge back!"
          ]
        }
      }
    },
    {
      id: 'programs',
      icon: <CheckCircle className="w-6 h-6" />,
      title: "5. FAMOUS AI PROGRAMS (Know These!)",
      color: "bg-red-500",
      content: {
        early: {
          title: "EARLY PROGRAMS (Did NOT pass Turing Test)",
          items: [
            "⭐ KEY POINT: Being intelligent ≠ Passing Turing Test",
            "  → These programs were INTELLIGENT",
            "  → But didn't need to fool humans in conversation",
            "  → Demonstrated intelligence through TASK PERFORMANCE",
            "",
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
            "",
            "1️⃣ XCON (1984-1987) - EXPERT SYSTEM ⭐ MOST IMPORTANT",
            "",
            "🏢 Created by: DEC (Digital Equipment Corporation) with CMU",
            "",
            "❓ THE PROBLEM:",
            "  → DEC sold minicomputers (big machines for companies)",
            "  → Each customer needed different configuration",
            "  → Hundreds of parts: CPUs, memory, disks, cables, etc.",
            "  → Human experts took DAYS to configure",
            "  → Often made mistakes → customers angry",
            "",
            "💡 XCON'S SOLUTION:",
            "  → Expert System with 2,500+ rules",
            "  → Example rules:",
            "    IF customer needs database THEN add extra memory",
            "    IF system has 4 disk drives THEN need power supply X",
            "  → Could configure computer in MINUTES (not days!)",
            "  → 100% accuracy (no mistakes!)",
            "",
            "💰 BUSINESS IMPACT:",
            "  → DEC earned BILLIONS of dollars",
            "  → Reduced configuration time by 95%",
            "  → Eliminated costly mistakes",
            "  → OTHER companies noticed → wanted AI too!",
            "",
            "🌟 HISTORIC SIGNIFICANCE:",
            "  → First time AI got INDUSTRY RECOGNITION",
            "  → Before: AI was just research/military",
            "  → After: Companies realized AI = MONEY!",
            "  → Started the 'AI Industry' era",
            "  → Proved AI could solve real business problems",
            "",
            "🧠 TYPE: Artificial Cognitive Systems (ACS)",
            "  → Used rules and logic (left-brain approach)",
            "  → Knowledge-based (not learning-based)",
            "",
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
            "",
            "2️⃣ DART (1991) - LOGISTICS EXPERT SYSTEM",
            "",
            "⚔️ Created by: DARPA (US Defense) - Used in Gulf War",
            "",
            "❓ THE PROBLEM:",
            "  → Gulf War involved massive logistics:",
            "    • 3 military forces (Army, Navy, Air Force)",
            "    • 50,000+ entities to manage:",
            "      - Weapons, vehicles, soldiers",
            "      - Ambulances, medicine, water, food",
            "      - Equipment, fuel, supplies",
            "  → Planning manually = IMPOSSIBLE",
            "  → Too many variables, too complex",
            "  → Human planners would take months",
            "",
            "💡 DART'S SOLUTION:",
            "  → AI system that handled ALL logistics",
            "  → Planned entire war operations automatically:",
            "    • Which troops go where?",
            "    • What supplies needed when?",
            "    • How to transport everything?",
            "    • Emergency medical planning",
            "  → Could adjust plans in REAL-TIME",
            "",
            "🏆 RESULTS:",
            "  → Executed ENTIRE Gulf War logistics",
            "  → Handled 50,000+ entities simultaneously",
            "  → Adjusted to changing battlefield conditions",
            "  → War was very efficient (militarily)",
            "",
            "💰 FINANCIAL IMPACT:",
            "  → DARPA recovered ALL 30-year AI research investment!",
            "  → Billions spent on AI research (1960-1990)",
            "  → This ONE program paid it all back",
            "  → Justified continued AI funding",
            "",
            "🌟 SIGNIFICANCE:",
            "  → Proved AI can handle MASSIVE complexity",
            "  → Showed AI can work in critical, real-time situations",
            "  → Made AI suddenly POPULAR with public",
            "  → After DART, everyone wanted to know about AI",
            "",
            "🧠 TYPE: Artificial Cognitive Systems (ACS)",
            "  → Rule-based planning",
            "  → Knowledge about military logistics",
            "",
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
            "",
            "3️⃣ DEEP BLUE (1996-1997) - CHESS GAME PLAYER",
            "",
            "🏢 Created by: IBM",
            "",
            "❓ THE CHALLENGE:",
            "  → Chess is EXTREMELY complex:",
            "    • Average game: 40 moves",
            "    • Each move: 25-35 possible options",
            "    • Must think many moves ahead",
            "    • Grandmasters train for YEARS",
            "  → 1996: Deep Blue LOST to Kasparov (world champion)",
            "  → 1997: Deep Blue came back for rematch",
            "",
            "💡 HOW DEEP BLUE WORKED:",
            "  → Rule-based chess knowledge",
            "  → Could evaluate 200 million positions per second!",
            "  → Visualized multiple steps ahead (beyond human capacity)",
            "  → Used chess strategies programmed by experts",
            "  → Combined: Brute force calculation + Chess theory",
            "",
            "🏆 HISTORIC MOMENT (1997):",
            "  → Deep Blue DEFEATED Garry Kasparov",
            "  → First time machine beat human world champion",
            "  → Score: 3.5 - 2.5 (6 game match)",
            "",
            "💰 BUSINESS IMPACT:",
            "  → IBM stock price increased by $18 BILLION!",
            "  → Huge publicity for AI",
            "  → Showed: Machines can beat humans at thinking games",
            "",
            "🌟 SIGNIFICANCE:",
            "  → Chess = symbol of human intelligence",
            "  → Beating chess champion = machines ARE intelligent",
            "  → Changed public perception of AI",
            "  → Inspired more AI research and investment",
            "",
            "🧠 TYPE: Artificial Cognitive Systems (ACS)",
            "  → Rule/logic-based (NOT learning-based)",
            "  → Used programmed chess strategies",
            "  → No neural networks, no training",
            "",
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
            "",
            "4️⃣ PATHFINDER (1997) - MARS ROVER",
            "",
            "🚀 Created by: NASA",
            "",
            "❓ THE CHALLENGE:",
            "  → Mars is 140 million miles from Earth",
            "  → Radio signals take 20 minutes to reach Mars",
            "  → Can't control rover in real-time (too slow!)",
            "  → Rover must navigate UNKNOWN terrain:",
            "    • Rocks, craters, steep slopes",
            "    • No maps available",
            "    • Must avoid getting stuck",
            "",
            "💡 PATHFINDER'S INTELLIGENCE:",
            "  → Autonomous navigation (makes own decisions)",
            "  → Could:",
            "    • See obstacles with cameras",
            "    • Plan safe routes",
            "    • Avoid dangerous areas",
            "    • Adjust to unexpected situations",
            "  → Operated WITHOUT human control",
            "",
            "🏆 ACHIEVEMENT:",
            "  → Successfully explored Mars surface",
            "  → Collected scientific data",
            "  → Demonstrated AI can work in:",
            "    • Unknown environments",
            "    • Without human supervision",
            "    • In critical situations (can't fix if breaks!)",
            "",
            "🌟 SIGNIFICANCE:",
            "  → Proved AI autonomy in extreme conditions",
            "  → Showed AI can explore where humans can't go",
            "  → Foundation for future space AI missions",
            "",
            "🧠 TYPE: Artificial Cognitive Systems (ACS)",
            "  → Rule-based navigation",
            "  → Programmed decision-making",
            "",
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
            "",
            "🎯 COMMON THEME - Why these are intelligent WITHOUT Turing Test:",
            "",
            "✅ Demonstrated specific intelligent features:",
            "  → Problem-solving (XCON)",
            "  → Complex planning (DART)",
            "  → Strategic thinking (Deep Blue)",
            "  → Autonomous decision-making (Pathfinder)",
            "",
            "✅ Performed tasks humans consider 'intelligent'",
            "",
            "✅ Turing Test is just ONE way to test intelligence",
            "  → These programs proved intelligence through PERFORMANCE",
            "  → Don't need conversation to be intelligent",
            "",
            "📚 EXAM ANSWER TEMPLATE:",
            "  'To claim a program to be intelligent, it does NOT need to pass",
            "  the Turing Test. Intelligence can be demonstrated through task",
            "  performance. Early AI programs like XCON (configuration), DART",
            "  (planning), Deep Blue (game playing), and Pathfinder (autonomous",
            "  navigation) were all considered intelligent because they",
            "  implemented intelligent features, even though they did not face",
            "  the Turing Test. Passing TT is an ADDITIONAL ability, not a",
            "  requirement for intelligence.'"
          ]
        },
        modern: {
          title: "MODERN PROGRAMS (2000s onwards)",
          items: [
            "🎮 ALPHAGO (2015) - GO GAME PLAYER",
            "  → Created by: Google DeepMind",
            "  → Game: GO (more complex than chess - 10^170 positions!)",
            "  → Defeated: Lee Sedol (world champion), 4-1",
            "  → TYPE: Machine Learning (ML) ⭐",
            "  → HOW: Trained on millions of games + self-play",
            "  → SIGNIFICANCE: First time TRAINING beat RULES",
            "  → Showed: ML > Logic for some problems",
            "  → Breakthrough: Reinforcement Learning",
            "",
            "❓ WATSON (2011) - QUESTION ANSWERING",
            "  → Created by: IBM",
            "  → Won: Jeopardy! game show against human champions",
            "  → Can answer ANY question (trivia, facts, reasoning)",
            "  → TYPE: Hybrid (ACS + ML)",
            "  → Uses: Natural Language Processing, Search, ML",
            "  → Now used in: Healthcare (cancer diagnosis), Business",
            "",
            "🤖 SOPHIA (2016) - HUMANOID ROBOT",
            "  → Created by: Hanson Robotics",
            "  → First robot to get CITIZENSHIP (Saudi Arabia!)",
            "  → Can: Talk, show facial expressions, interact",
            "  → TYPE: Hybrid (ACS + ML)",
            "  → Combines: Conversation rules + Learning",
            "  → Controversial: Is she really 'intelligent' or just impressive demo?",
            "",
            "💬 CHATGPT (2022) - LARGE LANGUAGE MODEL",
            "  → Created by: OpenAI",
            "  → Called: 'Energetic Idiot' (knows a lot, but makes mistakes)",
            "  → TYPE: Machine Learning (Deep Learning)",
            "  → Trained on: Billions of web pages",
            "  → Can: Write essays, code, poems, explain anything",
            "  → BUT: Sometimes confidently wrong!",
            "  → SIGNIFICANCE: Made AI accessible to everyone",
            "",
            "🚗 TESLA - SELF-DRIVING CARS",
            "  → Founded by: Elon Musk",
            "  → First commercial self-driving cars",
            "  → TYPE: Machine Learning (Computer Vision + ML)",
            "  → Uses cameras + sensors to 'see' road",
            "  → Learns from millions of miles driven",
            "  → Autopilot: Can drive on highways autonomously",
            "",
            "🤸 BOSTON DYNAMICS - ADVANCED ROBOTICS",
            "  → Robots: Atlas (humanoid), Spot (dog), Handle",
            "  → Can: Walk, run, jump, do backflips!",
            "  → TYPE: Machine Learning (Reinforcement Learning)",
            "  → Learns: Balance, movement through practice",
            "  → Amazing videos showing robot agility",
            "",
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
            "",
            "📊 TREND COMPARISON:",
            "",
            "EARLY (1980s-1990s):",
            "  → Mostly ACS (rules, logic, knowledge)",
            "  → Examples: XCON, DART, Deep Blue",
            "  → Why? Limited data, powerful theory",
            "",
            "MODERN (2000s-2020s):",
            "  → Mostly ML (training, data, patterns)",
            "  → Examples: AlphaGo, Tesla, ChatGPT",
            "  → Why? Internet → massive data available",
            "  → Deep Learning can learn from huge datasets",
            "",
            "⚖️ BALANCE:",
            "  → Some modern systems use BOTH (Watson, Sophia)",
            "  → Best approach: Combine knowledge AND data",
            "  → Future: Hybrid systems that use strengths of both"
          ]
        }
      }
    },
    {
      id: 'branches',
      icon: <Brain className="w-6 h-6" />,
      title: "6. AI BRANCHES (Can Be Both ACS & ML)",
      color: "bg-indigo-500",
      content: {
        both: {
          title: "AREAS UNDER BOTH SYMBOLIC & NON-SYMBOLIC",
          items: [
            "🎯 KEY CONCEPT: Some intelligent tasks can be achieved TWO ways:",
            "  → Way 1: Learn RULES/LOGIC (Left brain → ACS)",
            "  → Way 2: Practice/TRAINING (Right brain → ML)",
            "",
            "🧠 NEUROSCIENCE BASIS:",
            "  → Remember: Brain has TWO types of intelligence",
            "  → Some skills use EITHER left OR right brain",
            "  → Modern AI can use EITHER approach!",
            "",
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
            "",
            "1️⃣ NATURAL LANGUAGE PROCESSING (NLP)",
            "",
            "📚 ACS APPROACH (Rules/Grammar):",
            "  → Example: ELIZA (1964 - MIT)",
            "  → How it works:",
            "    • Programmed with grammar rules",
            "    • Pattern matching: IF user says X, THEN respond Y",
            "    • Example rules:",
            "      'I am sad' → 'Why are you sad?'",
            "      'My mother' → 'Tell me more about your family'",
            "  → Used: Syntax rules, semantic rules, logic",
            "  → Type: Left brain (analytical)",
            "",
            "🤖 ML APPROACH (Training/Data):",
            "  → Example: ChatGPT, Google Assistant",
            "  → How it works:",
            "    • Trained on BILLIONS of text examples",
            "    • Learns patterns in language",
            "    • No explicit grammar rules programmed",
            "    • Learns from seeing correct examples",
            "  → Used: Neural networks, massive datasets",
            "  → Type: Right brain (pattern recognition)",
            "",
            "💡 WHY BOTH WORK?",
            "  → Think about YOU learning English:",
            "    • Method 1: Study grammar book, memorize rules (ACS)",
            "    • Method 2: Live in England, practice daily (ML)",
            "    • BOTH methods work to learn language!",
            "  → Similarly, AI can learn language EITHER way",
            "",
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
            "",
            "2️⃣ ROBOTICS",
            "",
            "🤖 ACS APPROACH (Programmed/Rules):",
            "  → Examples: Unimate (1961), Shakey (1970s)",
            "  → How it works:",
            "    • Every movement pre-programmed",
            "    • Rules for each action:",
            "      IF obstacle detected THEN stop",
            "      IF at position X THEN move arm to Y",
            "  → Precise, repeatable, predictable",
            "  → Used in: Factory assembly lines (same task repeatedly)",
            "  → Type: Left brain (step-by-step instructions)",
            "",
            "🦾 ML APPROACH (Learning/Training):",
            "  → Examples: Atlas, Spot (Boston Dynamics)",
            "  → How it works:",
            "    • Robot tries movement, gets feedback",
            "    • Falls down? Learn to balance better",
            "    • Repeats until movement is good",
            "    • Reinforcement Learning: Trial and error",
            "  → Adaptive, can handle new situations",
            "  → Used in: Dynamic environments (walking on rough terrain)",
            "  → Type: Right brain (learning from experience)",
            "",
            "💡 WHY BOTH WORK?",
            "  → Think about learning to walk:",
            "    • Baby doesn't read 'walking manual' (no rules!)",
            "    • Baby tries, falls, tries again, learns (ML approach)",
            "  → But you CAN teach robot to walk by programming (ACS)",
            "  → Modern robots use BOTH:",
            "    • Basic movements programmed (ACS)",
            "    • Adaptation learned through practice (ML)",
            "",
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
            "",
            "3️⃣ GAME PLAYING",
            "",
            "♟️ ACS APPROACH (Rules/Strategy):",
            "  → Example: Deep Blue (1997 - Chess)",
            "  → How it works:",
            "    • Chess experts write strategy rules",
            "    • Rules like:",
            "      'Control center of board'",
            "      'Protect king'",
            "      'Knights are worth 3 points'",
            "  → Evaluates positions using these rules",
            "  → Searches millions of moves per second",
            "  → Pure calculation + programmed knowledge",
            "  → Type: Left brain (logical strategy)",
            "",
            "🎮 ML APPROACH (Training/Experience):",
            "  → Example: AlphaGo (2015 - GO game)",
            "  → How it works:",
            "    • NO strategy rules programmed!",
            "    • Trained on millions of past games",
            "    • Learned what moves win by seeing examples",
            "    • Self-play: Played against itself millions of times",
            "    • Discovered NEW strategies humans never thought of!",
            "  → Type: Right brain (pattern recognition from experience)",
            "",
            "💡 WHY BOTH WORK?",
            "  → Think about learning chess:",
            "    • Method 1: Study chess books, learn strategies (ACS)",
            "    • Method 2: Play 1000s of games, learn from mistakes (ML)",
            "    • Grandmasters use BOTH!",
            "  → Deep Blue: All rules, no learning",
            "  → AlphaGo: Mostly learning, minimal rules",
            "  → Both defeated world champions!",
            "",
            "🏆 HISTORIC SHIFT:",
            "  → 1997: Deep Blue (ACS) beat human → Rules work!",
            "  → 2015: AlphaGo (ML) beat human → Training works too!",
            "  → 2015: AlphaGo showed ML can beat ACS at complex games",
            "  → GO is MORE complex than chess (10^170 vs 10^120 positions)",
            "  → Too complex for rule-based approach",
            "  → Learning from examples worked better!",
            "",
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
            "",
            "4️⃣ FUZZY LOGIC",
            "",
            "📏 WHAT IS FUZZY LOGIC?",
            "  → World is not black/white, yes/no",
            "  → Has shades of gray, 'sort of', 'mostly'",
            "  → Examples:",
            "    • Temperature: Not just hot/cold, but 'warm', 'cool'",
            "    • Speed: Not just fast/slow, but 'medium', 'quite fast'",
            "    • Age: Not just young/old, but 'middle-aged', 'elderly'",
            "",
            "🎯 ACS APPROACH (Rule-based Fuzzy):",
            "  → Example: Fuzzy Air Conditioner",
            "  → Rules with fuzzy values:",
            "    IF temperature is 'warm' THEN cooling is 'medium'",
            "    IF temperature is 'very hot' THEN cooling is 'high'",
            "  → Programmed by experts",
            "  → Membership functions defined mathematically",
            "",
            "🤖 ML APPROACH (Learning-based Fuzzy):",
            "  → Train system to learn fuzzy relationships",
            "  → Example: Smart thermostat learns YOUR preferences:",
            "    • You like 22°C in morning",
            "    • You like 24°C in evening",
            "    • System learns your 'comfort zones'",
            "  → No rules programmed, learns from usage",
            "",
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
            "",
            "<TABLE_SUMMARY>",
            "",
            "🎓 EXAM ANSWER TEMPLATE:",
            "",
            "'Natural Language Processing, Robotics, and Game Playing can be",
            "developed under both ACS and ML because these tasks can be",
            "achieved through two different approaches based on neuroscience:",
            "",
            "1. Left-brain approach (ACS): Using rules, logic, and programmed",
            "   knowledge. Example: ELIZA uses grammar rules for NLP.",
            "",
            "2. Right-brain approach (ML): Using training, experience, and",
            "   pattern recognition. Example: ChatGPT learns from data.",
            "",
            "Both approaches can achieve the same intelligent behavior, just",
            "like humans can learn skills either by studying rules or through",
            "practice. Modern AI often combines both approaches for best results.'",
            "",
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
            "",
            "🔑 REMEMBER:",
            "  → ACS = Symbolic AI = Rules/Logic = Left brain",
            "  → ML = Non-symbolic AI = Training/Data = Right brain",
            "  → Some AI areas can use EITHER approach",
            "  → Choice depends on:",
            "    • Available data (lots of data → ML better)",
            "    • Available knowledge (clear rules → ACS better)",
            "    • Problem complexity (very complex → ML often better)",
            "  → Best modern AI: Uses BOTH!"
          ]
        }
      }
    },
    {
      id: 'philosophy',
      icon: <Book className="w-6 h-6" />,
      title: "7. PHILOSOPHICAL DEBATES",
      color: "bg-pink-500",
      content: {
        turing: {
          title: "TURING TEST (Machines CAN be intelligent)",
          items: [
            "Setup: Woman + Interrogator + Machine",
            "If can't tell difference → Intelligent",
            "Implication: Intelligence is COMPARATIVE",
            "View: POSITIVE for AI"
          ]
        },
        searle: {
          title: "SEARLE'S CHINESE ROOM (Machines CANNOT)",
          items: [
            "Person translates Chinese without understanding",
            "Just symbol manipulation, no consciousness",
            "Computers same: No awareness → Not intelligent",
            "View: NEGATIVE for AI"
          ]
        },
        schools: {
          title: "4 SCHOOLS OF THOUGHT",
          items: [
            "1. Acting Humanly - Behave like humans (Turing Test)",
            "2. Thinking Humanly - Think like humans",
            "3. Thinking Rationally - Think logically",
            "4. Acting Rationally - Do the RIGHT thing (Modern)",
            "",
            "Both Turing & Searle apply to ALL 4 schools!"
          ]
        }
      }
    },
    {
      id: 'powercontrol',
      icon: <Lightbulb className="w-6 h-6" />,
      title: "8. POWER + CONTROL (The Big Difference)",
      color: "bg-yellow-500",
      content: {
        difference: {
          title: "HOW AI DIFFERS",
          items: [
            "❌ Other Tech: Power in tech, Control with human",
            "  → Electricity: Power (lights city), Control (human flips switch)",
            "  → Car: Power (engine), Control (human drives)",
            "",
            "✅ AI: Power AND Control BOTH in tech",
            "  → Self-driving car: Power (engine), Control (AI decides)",
            "  → Robot: Power (actuators), Control (AI chooses actions)"
          ]
        },
        advantages: {
          title: "ADVANTAGES ✅",
          items: [
            "1. Autonomy - Makes own decisions (UAVs, self-driving)",
            "2. Superior performance - Efficiency, accuracy, speed",
            "3. Complex decisions - Handle 50,000+ parameters (DART)",
            "4. 24/7 operation - No fatigue",
            "5. Rapid response - Faster than humans"
          ]
        },
        disadvantages: {
          title: "DISADVANTAGES ❌",
          items: [
            "1. SINGULARITY - Machines may supersede humans",
            "2. Loss of control - Can't stop autonomous systems",
            "3. Accountability - Who's responsible for AI mistakes?",
            "4. Human dependency - Over-reliance on AI",
            "5. COGNITIVE DECLINE - Humans losing skills",
            "   Analogy: Elevators → Physical fitness down",
            "   Similarly: AI → Mental fitness down"
          ]
        },
        solutions: {
          title: "SOLUTIONS 💡",
          items: [
            "1. Human-Centered AI - Human approval for critical decisions",
            "2. AI for Human Enhancement - Build 'cognitive exercise machines'",
            "   'Exercise 30min/day or heart attack'",
            "   'Solve 10 math problems/day or lose skills'",
            "3. Explainable AI (XAI) - Transparent decisions",
            "4. Responsible AI - Ethics, legal, accountability",
            "5. Balanced Integration - Humans maintain skills"
          ]
        }
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-xl p-8 mb-8 text-white">
          <h1 className="text-4xl font-bold mb-4">🎓 AI Foundation - Master Guide</h1>
          <p className="text-xl opacity-90">Your Professor's Question Pattern - Organized & Connected</p>
          <div className="mt-4 bg-white/20 rounded p-4">
            <p className="font-semibold">💡 Study Strategy:</p>
            <p className="text-sm mt-2">1. Read each section top to bottom</p>
            <p className="text-sm">2. Note the connections (arrows →)</p>
            <p className="text-sm">3. Practice explaining to someone</p>
            <p className="text-sm">4. Use this for quick revision before exam</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className={`w-full ${section.color} text-white p-6 flex items-center justify-between hover:opacity-90 transition-opacity`}
              >
                <div className="flex items-center gap-4">
                  {section.icon}
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
                {expandedSections[section.id] ? (
                  <ChevronDown className="w-6 h-6" />
                ) : (
                  <ChevronRight className="w-6 h-6" />
                )}
              </button>

              {/* Section Content */}
              {expandedSections[section.id] && (
                <div className="p-6 bg-gray-50">
                  <div className={`grid ${section.id === 'branches' ? 'md:grid-cols-1' : 'md:grid-cols-2'} gap-6`}>
                    {Object.entries(section.content).map(([key, subsection]) => (
                      <div key={key} className="bg-white rounded-lg p-5 shadow">
                        <h3 className="text-lg font-bold text-gray-800 mb-3 border-b-2 border-gray-200 pb-2">
                          {subsection.title}
                        </h3>
                        <ul className="space-y-2">
                          {subsection.items.map((item, idx) => {
                            if (item === '<TABLE_SUMMARY>') {
                              return (
                                <li key={idx} className="text-gray-700 leading-relaxed">
                                  <div className="overflow-x-auto">
                                    <table className="min-w-full text-sm text-left text-gray-700">
                                      <thead>
                                        <tr>
                                          <th className="px-3 py-2 border-b">Area</th>
                                          <th className="px-3 py-2 border-b">ACS Example</th>
                                          <th className="px-3 py-2 border-b">ML Example</th>
                                          <th className="px-3 py-2 border-b">Why Both?</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr className="bg-gray-50">
                                          <td className="px-3 py-2 border-b">NLP</td>
                                          <td className="px-3 py-2 border-b">ELIZA (grammar rules)</td>
                                          <td className="px-3 py-2 border-b">ChatGPT (trained on text)</td>
                                          <td className="px-3 py-2 border-b">Language learned by rules OR practice</td>
                                        </tr>
                                        <tr>
                                          <td className="px-3 py-2 border-b">Robotics</td>
                                          <td className="px-3 py-2 border-b">Unimate (programmed movements)</td>
                                          <td className="px-3 py-2 border-b">Atlas (learned balance)</td>
                                          <td className="px-3 py-2 border-b">Movement by programming OR trial-error</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                          <td className="px-3 py-2 border-b">Gaming</td>
                                          <td className="px-3 py-2 border-b">Deep Blue (chess strategy)</td>
                                          <td className="px-3 py-2 border-b">AlphaGo (learned patterns)</td>
                                          <td className="px-3 py-2 border-b">Win by rules OR experience</td>
                                        </tr>
                                        <tr>
                                          <td className="px-3 py-2">Fuzzy Logic</td>
                                          <td className="px-3 py-2">Rule-based fuzzy</td>
                                          <td className="px-3 py-2">Learning-based adaptive fuzzy</td>
                                          <td className="px-3 py-2">Fuzzy values programmed OR learned</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </li>
                              );
                            }

                            if (typeof item === 'string') {
                              return (
                                <li key={idx} className="text-gray-700 leading-relaxed">
                                  {item.startsWith('  →') ? (
                                    <span className="ml-4 text-blue-600">{item}</span>
                                  ) : item.startsWith('✅') || item.startsWith('❌') || item.startsWith('💡') ? (
                                    <span className="font-semibold">{item}</span>
                                  ) : item.startsWith('  ') ? (
                                    <span className="ml-4 text-gray-600">{item}</span>
                                  ) : item === '' ? (
                                    <div className="h-2" />
                                  ) : (
                                    <span>{item}</span>
                                  )}
                                </li>
                              );
                            }

                            return (
                              <li key={idx} className="text-gray-700 leading-relaxed">
                                <span>{String(item)}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Reference Card */}
        <div className="mt-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg shadow-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">🎯 QUICK CONNECTIONS MAP</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-white/20 rounded p-4">
              <p className="font-bold mb-2">McCarthy → AI Birth</p>
              <p>Dartmouth 1956 → Coined "AI" → Logic-based → ACS</p>
            </div>
            <div className="bg-white/20 rounded p-4">
              <p className="font-bold mb-2">Turing → Foundation</p>
              <p>1936 Theory → 1950 Paper → 1952 Test → Intelligence is comparative</p>
            </div>
            <div className="bg-white/20 rounded p-4">
              <p className="font-bold mb-2">Neuroscience → Two AIs</p>
              <p>Left brain (Logic) → ACS | Right brain (Training) → ML</p>
            </div>
            <div className="bg-white/20 rounded p-4">
              <p className="font-bold mb-2">CMU & Allen Newell → Knowledge Era</p>
              <p>1969-1979 → Knowledge modeling → XCON → Industry recognition</p>
            </div>
            <div className="bg-white/20 rounded p-4">
              <p className="font-bold mb-2">Early Programs → Didn't need Turing Test</p>
              <p>XCON, DART, Deep Blue → Intelligent without passing TT</p>
            </div>
            <div className="bg-white/20 rounded p-4">
              <p className="font-bold mb-2">AI's Unique Feature</p>
              <p>Other tech: Power ≠ Control | AI: Power = Control → Autonomy & Risk</p>
            </div>
          </div>
        </div>

        {/* Footer Tips */}
        <div className="mt-8 bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6">
          <h3 className="text-xl font-bold text-yellow-800 mb-3">📚 Exam Day Tips:</h3>
          <ul className="space-y-2 text-yellow-900">
            <li>✓ Section 1-2: Know McCarthy & Turing perfectly (always asked)</li>
            <li>✓ Section 3: Match question keywords (types/ingredients/programs) to areas</li>
            <li>✓ Section 4: Timeline shows WHY things happened (not just WHEN)</li>
            <li>✓ Section 5: Name + Year + What it did + ACS or ML</li>
            <li>✓ Section 8: Power+Control always connects to advantages/disadvantages</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudyGuide;