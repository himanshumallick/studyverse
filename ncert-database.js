const ALL_CLASS10_CONTENT = [
  // ==================== MATHS: CHAPTER 1 (REAL NUMBERS) ====================
  {
    id: "math-ch1",
    subject: "Mathematics",
    type: "solutions",
    badge: "Maths • Chapter 1",
    title: "Real Numbers",
    desc: "Complete step-by-step NCERT solutions for Exercise 1.1 and Exercise 1.2.",
    sections: [
      {
        name: "Exercise 1.1",
        items: [
          {
            title: "Q1. Express each number as a product of its prime factors: (i) 140 (ii) 156 (iii) 3825",
            content: [
              "Step 1 (For 140): Divide by smallest prime 2 → 140 = 2 × 70 → 2 × 2 × 35 → 2² × 5 × 7.",
              "Step 2 (For 156): 156 = 2 × 78 = 2 × 2 × 39 = 2² × 3 × 13.",
              "Step 3 (For 3825): 3825 = 3 × 1275 = 3² × 5² × 17."
            ],
            highlight: "(i) 2² × 5 × 7  |  (ii) 2² × 3 × 13  |  (iii) 3² × 5² × 17"
          },
          {
            title: "Q2. Find the LCM and HCF of 26 and 91 and verify LCM × HCF = Product of two numbers.",
            content: [
              "Step 1: Prime factorisation: 26 = 2 × 13 and 91 = 7 × 13.",
              "Step 2: HCF = Common factor with lowest power = 13.",
              "Step 3: LCM = Product of highest powers = 2 × 7 × 13 = 182.",
              "Step 4: Verification: 182 × 13 = 2366 and 26 × 91 = 2366. Both are equal!"
            ],
            highlight: "HCF = 13, LCM = 182 (Verified)"
          }
        ]
      },
      {
        name: "Exercise 1.2",
        items: [
          {
            title: "Q1. Prove that √5 is irrational.",
            content: [
              "Step 1: Assume √5 is rational, so √5 = a/b (where a, b are coprime, b ≠ 0).",
              "Step 2: Squaring both sides: a² = 5b², meaning 5 divides a² and thus 5 divides a.",
              "Step 3: Let a = 5c. Substituting gives b² = 5c², which means 5 divides b too.",
              "Step 4: Contradicts our coprime assumption. Hence, √5 is irrational."
            ],
            highlight: "Proved irrational by contradiction method."
          }
        ]
      }
    ]
  },

  // ==================== MATHS: CHAPTER 8 (TRIGONOMETRY) ====================
  {
    id: "math-trigo",
    subject: "Mathematics",
    type: "solutions",
    badge: "Maths • Chapter 8",
    title: "Introduction to Trigonometry",
    desc: "All formulas, trigonometric ratios, and detailed solutions for Ex 8.1 & Ex 8.4.",
    sections: [
      {
        name: "Formulas & Ratios",
        items: [
          {
            title: "Core Trigonometric Ratios",
            content: [
              "sin θ = P / H  |  cos θ = B / H  |  tan θ = P / B",
              "cosec θ = H / P  |  sec θ = H / B  |  cot θ = B / P",
              "Identities: sin²θ + cos²θ = 1  |  1 + tan²θ = sec²θ  |  1 + cot²θ = cosec²θ"
            ],
            highlight: "Essential formulas required for board examinations."
          }
        ]
      },
      {
        name: "Exercise 8.1",
        items: [
          {
            title: "Q1. In ΔABC right-angled at B, AB = 24 cm, BC = 7 cm. Find sin A, cos A.",
            content: [
              "Step 1: AC² = AB² + BC² = (24)² + (7)² = 576 + 49 = 625.",
              "Step 2: AC = √625 = 25 cm.",
              "Step 3: sin A = Perpendicular / Hypotenuse = BC / AC = 7 / 25.",
              "Step 4: cos A = Base / Hypotenuse = AB / AC = 24 / 25."
            ],
            highlight: "sin A = 7/25, cos A = 24/25"
          }
        ]
      }
    ]
  },

  // ==================== SCIENCE: BIOLOGY (LIFE PROCESSES) ====================
  {
    id: "sci-bio1",
    subject: "Science",
    type: "notes",
    badge: "Biology • Chapter 6",
    title: "Life Processes",
    desc: "Detailed revision notes with human digestive & respiratory system diagrams.",
    sections: [
      {
        name: "Nutrition & Digestion",
        items: [
          {
            title: "Human Alimentary Canal & Digestive Mechanism",
            content: [
              "Ingestion: Food taken through mouth. Saliva contains amylase enzyme which breaks starch into sugar.",
              "Oesophagus: Food moves down via peristaltic movements.",
              "Stomach: Releases HCl, Pepsin (protein digestion), and mucus.",
              "Small Intestine: Complete digestion of carbs, fats, and proteins. Villi absorb digested food."
            ],
            image: "https://hi-static.z-dn.net/files/d27/34f2f33f135fd771e690aacf7b773180.jpg",
            highlight: "Villi increase surface area for nutrient absorption into blood."
          }
        ]
      }
    ]
  },

  // ==================== SOCIAL SCIENCE: HISTORY ====================
  {
    id: "sst-history",
    subject: "Social Science",
    type: "notes",
    badge: "SST • History Ch 2",
    title: "Nationalism in India",
    desc: "Complete chronological point-wise notes for board exams.",
    sections: [
      {
        name: "Key Events",
        items: [
          {
            title: "The Non-Cooperation & Civil Disobedience Movements",
            content: [
              "Rowlatt Act (1919): Imprisonment without trial for 2 years, sparked nationwide outrage & Jallianwala Bagh massacre.",
              "Non-Cooperation Movement (1920-22): Boycott of British goods, schools, and titles. Withdrawn after Chauri Chaura incident.",
              "Civil Disobedience Movement (1930): Salt March (Dandi March) breaking the salt tax law."
            ],
            highlight: "Mahatma Gandhi's movements united India against colonial rule."
          }
        ]
      }
    ]
  }
];
