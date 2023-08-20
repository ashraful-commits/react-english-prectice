const englishLearningQuestions = [
  {
    level: 'medium',
    question: 'Translate the following sentence: "The weather is beautiful today."',
    options: [
      'আজ আবহাওয়া সুন্দর।',
      'আমি ভালো আছি।',
      'আমার প্রিয় রং লাল।'
    ],
    answer: 'আজ আবহাওয়া সুন্দর।' // Today the weather is beautiful.
  },
  {
    level: 'medium',
    question: 'Choose the correct translation: "I am going to the market."',
    options: [
      'আমি বাজার যাচ্ছি।',
      'তুমি কোথায় যাচ্ছো?',
      'সে খেলা খেলতে যাচ্ছে।'
    ],
    answer: 'আমি বাজার যাচ্ছি।' // I am going to the market.
  },
  {
    level: 'easy',
    question: 'What does "courage" mean?',
    options: ['শক্তি', 'আত্মবিশ্বাস', 'ভয়'],
    answer: 'আত্মবিশ্বাস' // Confidence
  },
  {
    level: 'medium',
    question: 'Translate: "She likes to read books in her free time."',
    options: [
      'তার ফ্রি টাইমে তিনি বই পড়তে ভালোবাসে।',
      'সে খেলা খেলতে ভালোবাসে।',
      'আমি বই পড়তে ভালোবাসি।'
    ],
    answer: 'তার ফ্রি টাইমে তিনি বই পড়তে ভালোবাসে।' // She likes to read books in her free time.
  },
  {
    level: 'medium',
    question: 'Which sentence is grammatically correct? "We was going to the park."',
    options: [
      'আমরা পার্কে যাচ্ছিলাম।',
      'আমরা পার্কে যাচ্ছি।',
      'আমরা পার্কে যাবো।'
    ],
    answer: 'আমরা পার্কে যাচ্ছি।' // We are going to the park.
  },
  {
    level: 'easy',
    question: 'Translate: "My favorite color is blue."',
    options: [
      'আমার প্রিয় রং নীল।',
      'আমি সব রং পছন্দ করি।',
      'আমার প্রিয় রং লাল।'
    ],
    answer: 'আমার প্রিয় রং নীল।' // My favorite color is blue.
  },
  {
    level: 'medium',
    question: 'Choose the correct translation: "He is a talented musician."',
    options: [
      'সে একজন প্রতিভাবান সংগীতজ্ঞ।',
      'তিনি একজন চিত্তমহাকাব্য লেখক।',
      'সে একজন খেলোয়াড়।'
    ],
    answer: 'সে একজন প্রতিভাবান সংগীতজ্ঞ।' // He is a talented musician.
  },
  {
    level: 'easy',
    question: 'What does "enthusiastic" mean?',
    options: ['উদ্যমশীল', 'দু: খিত', 'সুখী'],
    answer: 'উদ্যমশীল' // Enthusiastic
  },
  {
    question: 'Translate: "I will meet you at the cafe tomorrow."',
    options: [
      'আমি আপনার সাথে কাফে আগামীকাল মিলবো।',
      'আমি সাথে তোমার প্রতিবেশী আগামীকাল মিলবো।',
      'আমি কাফে আগামীকাল যাবো।'
    ],
    answer: 'আমি আপনার সাথে কাফে আগামীকাল মিলবো।', // I will meet you at the cafe tomorrow.
    level: 'medium'
  },
  {
    question: 'Which sentence is grammatically correct? "They has been studying all day."',
    options: [
      'তারা পুরস্কৃত হয়েছে পুরস্কৃত হয়েছে।',
      'তারা সারা দিন পড়ছে।',
      'তারা পুরস্কৃত হয়েছে সারা দিন পড়ছে।'
    ],
    answer: 'তারা সারা দিন পড়ছে।', // They have been studying all day.
    level: 'easy'
  },
  {
    question: 'What is the meaning of "adventure"?',
    options: ['প্রস্তাবনা', 'দু: খিত', 'সাহসিক অভিজ্ঞতা'],
    answer: 'সাহসিক অভিজ্ঞতা', // Adventure
    level: 'easy'
  },
  {
    question: 'Translate: "She speaks French fluently."',
    options: [
      'তিনি পারিপার্শ্বিক ভাষায় কথা বলে।',
      'তিনি ফরাসি ভাষা শিখেন।',
      'তিনি ফরাসি ভাষা বিশেষভাষী।'
    ],
    answer: 'তিনি ফরাসি ভাষা বিশেষভাষী।', // She speaks French fluently.
    level: 'medium'
  },
  {
    question: 'Choose the correct translation: "The movie was entertaining."',
    options: [
      'সিনেমা দেখা মজাদার ছিল।',
      'সিনেমা দেখা বাস্তবজীবনের মত ছিল।',
      'সিনেমা দেখা ভাল ছিল।'
    ],
    answer: 'সিনেমা দেখা মজাদার ছিল।', // The movie was entertaining.
    level: 'easy'
  },
  {
    question: 'What does "curious" mean?',
    options: ['অচেতন', 'অদ্বিতীয়', 'জিজ্ঞাসু'],
    answer: 'জিজ্ঞাসু', // Curious
    level: 'medium'
  },
  {
    question: 'Translate: "He is always punctual."',
    options: [
      'তিনি সর্বদা সময় মত প্রাণিবিশেষ।',
      'তিনি সর্বদা সময়ে পুঞ্জীবদার।',
      'তিনি সর্বদা সময়ে পৌঁছানোর চেষ্টা করে।',
    ],
    answer: 'তিনি সর্বদা সময়ে পৌঁছানোর চেষ্টা করে।', // He is always punctual.
    level: 'hard'
  },
  {
    question: 'Translate: "I love to read books."',
    options: [
      'আমি বই পড়তে ভালবাসি।',
      'আমি বই পড়তে পছন্দ করি।',
      'আমি বই পড়তে মহান উদ্যোগ দেই।'
    ],
    answer: 'আমি বই পড়তে ভালবাসি।', // I love to read books.
    level: 'easy'
  },
  {
    question: 'What is the meaning of "brilliant"?',
    options: ['দুবল', 'চমকপ্রদ', 'অস্বাভাবিক'],
    answer: 'চমকপ্রদ', // Brilliant
    level: 'medium'
  },
  {
    question: 'Translate: "She enjoys playing the piano."',
    options: [
      'তিনি পিয়ানো বাজাতে মজা পায়।',
      'তিনি পিয়ানো বাজাতে ভোগ করে।',
      'তিনি পিয়ানো বাজাতে সুখিবাদ পেয়।'
    ],
    answer: 'তিনি পিয়ানো বাজাতে ভোগ করে।', // She enjoys playing the piano.
    level: 'medium'
  },
  {
    question: 'What does "ambitious" mean?',
    options: ['অভিযান', 'প্রতিষ্ঠানপ্রিয়', 'উচ্চলক্ষ'],
    answer: 'উচ্চলক্ষ', // Ambitious
    level: 'hard'
  },
  {
    question: 'Translate: "They go for a walk every evening."',
    options: [
      'তারা প্রতিসান্ধ্যে একটি সৈরে যায়।',
      'তারা প্রতিসান্ধ্যে ঘুরে বেড়ায়।',
      'তারা প্রতিসান্ধ্যে একটি ব্যবস্থিত সৈরে যায়।'
    ],
    answer: 'তারা প্রতিসান্ধ্যে ঘুরে বেড়ায়।', // They go for a walk every evening.
    level: 'easy'
  },
  {
    question: 'Translate: "The weather is nice today."',
    options: [
      'আজ আবহাওয়া ভালো।',
      'আজ আবহাওয়া অপরিস্থিত।',
      'আজ আবহাওয়া খারাপ।'
    ],
    answer: 'আজ আবহাওয়া ভালো।', // The weather is nice today.
    level: 'easy'
  },
  {
    question: 'What is the synonym of "fortunate"?',
    options: ['দুর্দান্ত', 'সৌভাগ্যশালী', 'বিরক্ত'],
    answer: 'সৌভাগ্যশালী', // Fortunate
    level: 'medium'
  },
  {
    question: 'Translate: "I want to learn a new language."',
    options: [
      'আমি নতুন ভাষা শেখতে চাই।',
      'আমি নতুন ভাষা শেখা চেষ্টা করতে চাই।',
      'আমি নতুন ভাষা শেখতে চেষ্টা করতে চাই।'
    ],
    answer: 'আমি নতুন ভাষা শেখতে চাই।', // I want to learn a new language.
    level: 'medium'
  },
  {
    question: 'What is the antonym of "generous"?',
    options: ['দানশীল', 'বাঁচক', 'উদার'],
    answer: 'বাঁচক', // Generous
    level: 'medium'
  },
  {
    question: 'Translate: "The concert starts at 7 PM."',
    options: [
      'সংগীত সংস্কৃতি সাতটা সংজ্ঞা দেয়।',
      'সংগীত সংস্কৃতি সাতটা শুরু হয়।',
      'সংগীত সংস্কৃতি সাতটা প্রারম্ভ হয়।'
    ],
    answer: 'সংগীত সংস্কৃতি সাতটা শুরু হয়।', // The concert starts at 7 PM.
    level: 'medium'
  },{
    question: 'What does the word "exciting" mean?',
    options: ['উদ্বেগজনক', 'স্থির', 'অস্তির'],
    answer: 'উদ্বেগজনক', // Exciting
    level: 'medium'
  },
  {
    question: 'Translate: "I enjoy reading books."',
    options: [
      'আমি বই পড়ায় আনন্দ পাই।',
      'আমি বই পড়ায় ভোগ করি।',
      'আমি বই পড়ায় মজা পাই।'
    ],
    answer: 'আমি বই পড়ায় আনন্দ পাই।', // I enjoy reading books.
    level: 'medium'
  },
  {
    question: 'What is the synonym of "courageous"?',
    options: ['বিবৃদ্ধ', 'সাহসী', 'দুর্বল'],
    answer: 'সাহসী', // Courageous
    level: 'medium'
  },
  {
    question: 'Translate: "The museum is closed on Mondays."',
    options: [
      'মিউজিয়াম সোমবার বন্ধ থাকে।',
      'মিউজিয়াম সোমবার খোলা থাকে।',
      'মিউজিয়াম সোমবার আবর্জনা থাকে।'
    ],
    answer: 'মিউজিয়াম সোমবার বন্ধ থাকে।', // The museum is closed on Mondays.
    level: 'medium'
  },
  {
    question: 'What is the antonym of "anxious"?',
    options: ['প্রসান্ত', 'উদ্বিগ্ন', 'আত্মবিশ্বাসী'],
    answer: 'প্রসান্ত', // Anxious
    level: 'medium'
  },{
    question: 'Translate: "She plays the piano beautifully."',
    options: [
      'সে সুন্দরভাবে পিয়ানো বাজায়।',
      'সে সুন্দরভাবে পিয়ানো খেলে।',
      'সে সুন্দরভাবে পিয়ানো গায়।'
    ],
    answer: 'সে সুন্দরভাবে পিয়ানো বাজায়।', // She plays the piano beautifully.
    level: 'medium'
  },
  {
    question: 'What is the synonym of "generous"?',
    options: ['স্বার্থপর', 'উপকারী', 'উদার'],
    answer: 'উদার', // Generous
    level: 'medium'
  },
  {
    question: 'Translate: "They went to the beach for a picnic."',
    options: [
      'তারা পিকনিকের জন্য সমুদ্রকেড়ে গেল।',
      'তারা পিকনিক করার জন্য সমুদ্রকেড়ে গেল।',
      'তারা সমুদ্রকেড়ে গেল পিকনিক করতে।'
    ],
    answer: 'তারা পিকনিক করার জন্য সমুদ্রকেড়ে গেল।', // They went to the beach for a picnic.
    level: 'medium'
  },
  {
    question: 'What is the antonym of "confident"?',
    options: ['নির্দেশপর', 'নিরাশ', 'আত্মবিশ্বাসী'],
    answer: 'নিরাশ', // Confident
    level: 'medium'
  },
  {
    question: 'Translate: "His birthday is in December."',
    options: [
      'তার জন্মদিন ডিসেম্বরে।',
      'তার জন্মদিন নভেম্বরে।',
      'তার জন্মদিন জানুয়ারিতে।'
    ],
    answer: 'তার জন্মদিন ডিসেম্বরে।', // His birthday is in December.
    level: 'medium'
  },
  {
    question: 'Translate: "I enjoy reading novels in my free time."',
    options: [
      'আমি আমার ফ্রি সময়ে উপন্যাস পড়াটি উপভোগ করি।',
      'আমি আমার ফ্রি সময়ে উপন্যাস পড়া ভাল পাই।',
      'আমি আমার ফ্রি সময়ে উপন্যাস পড়া ভাল লাগে।'
    ],
    answer: 'আমি আমার ফ্রি সময়ে উপন্যাস পড়াটি উপভোগ করি।', // I enjoy reading novels in my free time.
    level: 'medium'
  },
  {
    question: 'What does "hilarious" mean?',
    options: ['অত্যন্ত বিরক্ত', 'বিদায়কাল', 'অত্যন্ত মজার'],
    answer: 'অত্যন্ত মজার', // Hilarious
    level: 'medium'
  },
  {
    question: 'Translate: "They are going to travel to Europe next summer."',
    options: [
      'তারা পরের গ্রীষ্মে ইউরোপে ভ্রমণ করবে।',
      'তারা পরের গ্রীষ্মে ইউরোপে যাবে।',
      'তারা পরের গ্রীষ্মে ইউরোপে মিলবে।'
    ],
    answer: 'তারা পরের গ্রীষ্মে ইউরোপে যাবে।', // They are going to travel to Europe next summer.
    level: 'medium'
  },
  {
    question: 'What is the synonym of "vivid"?',
    options: ['অস্পষ্ট', 'প্রকাশমান', 'দুঃস্বপ্নময়'],
    answer: 'প্রকাশমান', // Vivid
    level: 'medium'
  },
  {
    question: 'Translate: "The museum has a diverse collection of art."',
    options: [
      'মিউজিয়ামটির একটি বিবিধ কালা সংগ্রহ আছে।',
      'মিউজিয়ামটির একটি বিচিত্র কালা সংগ্রহ আছে।',
      'মিউজিয়ামটির একটি বিবর্ণ কালা সংগ্রহ আছে।'
    ],
    answer: 'মিউজিয়ামটির একটি বিচিত্র কালা সংগ্রহ আছে।', // The museum has a diverse collection of art.
    level: 'medium'
  },
  {
    question: 'What is the meaning of "benevolent"?',
    options: ['উদার', 'অকৃত্রিম', 'মূল্যবান'],
    answer: 'উদার', // Benevolent
    level: 'medium'
  },
  {
    question: 'Translate: "She is a talented musician and can play multiple instruments."',
    options: [
      'তিনি একজন দক্ষ সঙ্গীতকার এবং একাধিক সাধনা করতে পারেন।',
      'সে একজন দক্ষ সঙ্গীতকার এবং একাধিক যন্ত্র বাজাতে পারে।',
      'সে একজন প্রতিভাশালী সঙ্গীতশিল্পী এবং একাধিক যন্ত্র বাজাতে পারে।'
    ],
    answer: 'সে একজন দক্ষ সঙ্গীতকার এবং একাধিক যন্ত্র বাজাতে পারে।', // She is a talented musician and can play multiple instruments.
    level: 'medium'
  },
  {
    question: 'What is the antonym of "courageous"?',
    options: ['দুঃসাহসী', 'মন্দ', 'সাহসী'],
    answer: 'দুঃসাহসী', // Courageous
    level: 'medium'
  }, {
    question: 'Translate: "The novel is set in a dystopian future."',
    options: [
      'উপন্যাসটি একটি অশান্তমূলক ভবিষ্যতে নির্ধারিত আছে।',
      'উপন্যাসটি একটি আশান্তিকর ভবিষ্যতে নির্ধারিত আছে।',
      'উপন্যাসটি একটি পরশ্রুত ভবিষ্যতে নির্ধারিত আছে।'
    ],
    answer: 'উপন্যাসটি একটি অশান্তমূলক ভবিষ্যতে নির্ধারিত আছে।', // The novel is set in a dystopian future.
    level: 'medium'
  },
  {
    question: 'What does "elaborate" mean?',
    options: ['সংক্ষিপ্ত', 'মাথা ব্যথা', 'বিস্তারিত'],
    answer: 'বিস্তারিত', // Elaborate
    level: 'medium'
  }
  ,
  {
    question: 'Translate: "I enjoy hiking in the mountains."',
    options: [
      'আমি পাহাড়ে ট্রেকিং করতে ভালোবাসি।',
      'আমি পাহাড়ে ট্রেইল পাঠাতে ভালোবাসি।',
      'আমি পাহাড়ে ট্রেক পাঠাতে ভালোবাসি।'
    ],
    answer: 'আমি পাহাড়ে ট্রেকিং করতে ভালোবাসি।' // I enjoy hiking in the mountains.
  },
  {
    question: 'What is the meaning of "inquisitive"?',
    options: ['অপরিষ্কারপ্রিয়', 'অজ্ঞানী', 'অচঞ্চল'],
    answer: 'অপরিষ্কারপ্রিয়' // Inquisitive
  },
  {
    question: 'Translate: "The museum exhibits ancient artifacts."',
    options: [
      'যাদুকরি চলচ্চিত্র প্রদর্শন করে।',
      'যাদুকরি প্রাচীন শিল্পকলা প্রদর্শন করে।',
      'যাদুকরি প্রাচীন সামগ্রী প্রদর্শন করে।'
    ],
    answer: 'যাদুকরি প্রাচীন সামগ্রী প্রদর্শন করে।' // The museum exhibits ancient artifacts.
  },
  {
    question: 'Translate: "She is fluent in three languages."',
    options: [
      'তিনটি ভাষায় তার শখ় আছে।',
      'তিনটি ভাষায় তার চমৎকার ধারাবাহিকতা আছে।',
      'তিনটি ভাষায় তার বল্লাগম্যতা আছে।'
    ],
    answer: 'তিনটি ভাষায় তার চমৎকার ধারাবাহিকতা আছে।' // She is fluent in three languages.
  },
  {
    question: 'What is the antonym of "generous"?',
    options: ['ক্ষুধ্র', 'উদ্বেগী', 'বাড়ানো'],
    answer: 'ক্ষুধ্র' // Generous
  },
  {
    question: 'Translate: "The novel is set in a dystopian future."',
    options: [
      'উপনিষতে একটি প্রতিহিংসামূলক ভবিষ্যত্ দেখা যায়।',
      'উপনিষতে একটি গণ্ডমূলক ভবিষ্যত্ দেখা যায়।',
      'উপনিষতে একটি অশান্তিপূর্ণ ভবিষ্যত্ দেখা যায়।'
    ],
    answer: 'উপনিষতে একটি অশান্তিপূর্ণ ভবিষ্যত্ দেখা যায়।' // The novel is set in a dystopian future.
  },
  {
    question: 'What is the synonym of "fascinating"?',
    options: ['স্থির', 'স্বাগত', 'আকর্ষণীয়'],
    answer: 'আকর্ষণীয়' // Fascinating
  },
  {
    question: 'Translate: "He aspires to become a successful entrepreneur."',
    options: [
      'তিনি একজন সাফল্য়শীল উদ্যমিতা হতে চান।',
      'তিনি একজন সাফল্য়শীল বাণিজ্যিক ব্যক্তি হতে চান।',
      'তিনি একজন সাফল্য়শীল ব্যবসায়িক ব্যক্তি হতে চান।'
    ],
    answer: 'তিনি একজন সাফল্য়শীল ব্যবসায়িক ব্যক্তি হতে চান।', // He aspires to become a successful entrepreneur.
    level: 'medium'
  },
  {
    question: 'What does the word "resilient" mean?',
    options: [
      'অসহনশীল',
      'দৃঢ়',
      'বিশ্বাসী'
    ],
    answer: 'দৃঢ়', // Resilient
    level: 'medium'
  },
  {
    question: 'Translate: "The concert was canceled due to bad weather."',
    options: [
      'খারাপ আবহাওয়ার কারণে সংগীত সাংবাদিক হয়েছে।',
      'খারাপ আবহাওয়ার কারণে সংগীত বাতিল হয়েছে।',
      'খারাপ আবহাওয়ার কারণে সংগীত প্রদর্শনী হয়নি।'
    ],
    answer: 'খারাপ আবহাওয়ার কারণে সংগীত বাতিল হয়েছে।', // The concert was canceled due to bad weather.
    level: 'medium'
  },
  {
    question: 'Choose the correct synonym for "exquisite".',
    options: ['plain', 'delicate', 'ordinary'],
    answer: 'delicate', // Exquisite
    level: 'medium'
  },
  {
    question: 'Translate: "She expresses her thoughts eloquently."',
    options: [
      'তিনি তার ভাবনা প্রকৃতপক্ষে প্রকাশ করে।',
      'তিনি তার ভাবনা উদাত্তভাষণে প্রকাশ করে।',
      'তিনি তার ভাবনা প্রতিষ্ঠানমূলকভাষণে প্রকাশ করে।'
    ],
    answer: 'তিনি তার ভাবনা উদাত্তভাষণে প্রকাশ করে।', // She expresses her thoughts eloquently.
    level: 'medium'
  },{
    question: 'Translate: "He donated a large sum of money to charity."',
    options: [
      'তিনি একটি বড় অর্থ পরিশোধ দান করলেন।',
      'তিনি একটি বৃহত্তর অর্থ সহায়তা দিলেন।',
      'তিনি একটি দান সম্প্রদান সংখ্যা অবদান করলেন।'
    ],
    answer: 'তিনি একটি বড় অর্থ পরিশোধ দান করলেন।', // He donated a large sum of money to charity.
    level: 'medium'
  },
  {
    question: 'What is the meaning of "ephemeral"?',
    options: [
      'বহুদিনস্থ',
      'অবিচ্ছিন্ন',
      'অল্পদিনস্থ'
    ],
    answer: 'অল্পদিনস্থ', // Ephemeral
    level: 'medium'
  },
  {
    question: 'Translate: "The new building is environmentally friendly."',
    options: [
      'নতুন ভবন পরিবেশমত বন্ধুত্বপূর্ণ।',
      'নতুন ভবন পরিবেশগতভাবে সাহায্যকারী।',
      'নতুন ভবন পরিবেশবাদী ভাবে প্রতিষ্ঠিত।'
    ],
    answer: 'নতুন ভবন পরিবেশমত বন্ধুত্বপূর্ণ।', // The new building is environmentally friendly.
    level: 'medium'
  },
  {
    question: 'What is the synonym of "ubiquitous"?',
    options: ['rare', 'common', 'unique'],
    answer: 'common', // Ubiquitous
    level: 'medium'
  },
  {
    question: 'Translate: "The team celebrated their victory with a grand party."',
    options: [
      'দলটি একটি প্রসাদে তাদের বিজয় উদযাপন করল।',
      'দলটি একটি মহোত্সবে তাদের বিজয় উদযাপন করল।',
      'দলটি একটি প্রধান উদযাপনে তাদের বিজয় উদযাপন করল।'
    ],
    answer: 'দলটি একটি মহোত্সবে তাদের বিজয় উদযাপন করল।', // The team celebrated their victory with a grand party.
    level: 'medium'
  },{
    question: 'Which sentence is grammatically correct? "She have finished her homework."',
    options: [
    'সে তার পাঠ্যপুস্তক পড়েছে।',
    'সে তার পাঠ্যপুস্তক পড়ে।',
    'সে তার গৃহকাজ শেষ করেছে।'
    ],
    answer: 'সে তার গৃহকাজ শেষ করেছে।', // She has finished her homework.
    level: 'easy'
    },
    {
    question: 'Choose the correct synonym for "amazing".',
    options: ['অদ্বিতীয়', 'সামান্য', 'দুর্দান্ত'],
    answer: 'দুর্দান্ত', // Amazing
    level: 'easy'
    },
    {
    question: 'Which sentence is in passive voice? "The chef cooked a delicious meal."',
    options: [
    'শেফটি একটি মজাদার খাবার রান্ন করেছে।',
    'একটি মজাদার খাবার রান্ন শেফটি করেছে।',
    'একটি মজাদার খাবার রান্ন হয়েছে শেফদ্বারা।'
    ],
    answer: 'একটি মজাদার খাবার রান্ন হয়েছে শেফদ্বারা।', // A delicious meal has been cooked by the chef.
    level: 'easy'
    },{
      question: 'Translate: "The team celebrated their victory with a grand party."',
      options: [
        'দলটি একটি প্রসাদে তাদের বিজয় উদযাপন করল।',
        'দলটি একটি মহোত্সবে তাদের বিজয় উদযাপন করল।',
        'দলটি একটি প্রধান উদযাপনে তাদের বিজয় উদযাপন করল।'
      ],
      answer: 'দলটি একটি মহোত্সবে তাদের বিজয় উদযাপন করল।', // The team celebrated their victory with a grand party.
      level: 'medium'
    },
    {
      question: 'Translate: "He has a talent for playing the piano."',
      options: [
        'তার একটি স্বরবাদ্য বাজাতে দক্ষতা আছে।',
        'তার একটি পিয়ানো বাজাতে দক্ষতা আছে।',
        'তার একটি সুরক্ষার জন্য বাজাতে দক্ষতা আছে।'
      ],
      answer: 'তার একটি পিয়ানো বাজাতে দক্ষতা আছে।', // He has a talent for playing the piano.
      level: 'medium'
    },
    {
      question: 'Translate: "She is pursuing her dreams with determination."',
      options: [
        'তিনি নিশ্চয়তায় তার স্বপ্ন অনুসরণ করছে।',
        'তিনি নিশ্চয়তায় তার কৌশল অনুসরণ করছে।',
        'তিনি নিশ্চয়তায় তার যোগ্যতা অনুসরণ করছে।'
      ],
      answer: 'তিনি নিশ্চয়তায় তার স্বপ্ন অনুসরণ করছে।', // She is pursuing her dreams with determination.
      level: 'medium'
    },{
      question: 'Translate: "He always helps others in need."',
      options: [
        'সে সর্বদা প্রয়োজনে অন্যকে সাহায্য করে।',
        'সে সর্বদা অপরকে প্রয়োজন সাহায্য করে।',
        'সে সর্বদা প্রয়োজনে অপরকে সাহায্য করে।'
      ],
      answer: 'সে সর্বদা প্রয়োজনে অন্যকে সাহায্য করে।', // He always helps others in need.
      level: 'medium'
    },
    {
      question: 'Translate: "They are exploring new horizons in their careers."',
      options: [
        'তারা তাদের পেশায় নতুন দিকে অনুসন্ধান করছে।',
        'তারা তাদের পেশায় নতুন আয়তনে অনুসন্ধান করছে।',
        'তারা তাদের পেশায় নতুন গভীরতা অনুসন্ধান করছে।'
      ],
      answer: 'তারা তাদের পেশায় নতুন দিকে অনুসন্ধান করছে।', // They are exploring new horizons in their careers.
      level: 'medium'
    },
    {
      question: 'Translate: "The concert was attended by thousands of people."',
      options: [
        'সহস্রাধিক লোক সংগীতসভায় উপস্থিত ছিল।',
        'সহস্রাধিক লোক সংগীতসভায় আসেছিল।',
        'সহস্রাধিক লোক সংগীতসভায় হাজির ছিল।'
      ],
      answer: 'সহস্রাধিক লোক সংগীতসভায় উপস্থিত ছিল।', // The concert was attended by thousands of people.
      level: 'medium'
    },
    {
      question: 'Translate: "She expressed her gratitude in a heartfelt manner."',
      options: [
        'তিনি একটি আত্মিক মাধ্যমে তার কৃতজ্ঞতা প্রকাশ করেন।',
        'তিনি একটি আত্মত্যাগিত মাধ্যমে তার কৃতজ্ঞতা প্রকাশ করেন।',
        'তিনি একটি আত্মীয় মাধ্যমে তার কৃতজ্ঞতা প্রকাশ করেন।'
      ],
      answer: 'তিনি একটি আত্মত্যাগিত মাধ্যমে তার কৃতজ্ঞতা প্রকাশ করেন।', // She expressed her gratitude in a heartfelt manner.
      level: 'medium'
    },
    {
      question: 'Translate: "She is determined to achieve her goals."',
      options: [
        'তিনি তার লক্ষ্য অর্জন করতে নিশ্চিত।',
        'তিনি তার লক্ষ্য অর্জন করতে দৃঢ় নির্ধারিত।',
        'তিনি তার লক্ষ্য অর্জন করতে নির্ধারিত।'
      ],
      answer: 'তিনি তার লক্ষ্য অর্জন করতে নিশ্চিত।', // She is determined to achieve her goals.
      level: 'medium'
    },
    {
      question: 'Translate: "The novel captivated readers with its compelling storyline."',
      options: [
        'উপন্যাসটি আকর্ষণীয় কাহিনীর সাথে পাঠকদের আকর্ষিত করে।',
        'উপন্যাসটি আকর্ষণীয় প্লট সঙ্গে পাঠকদের জুড়ায়।',
        'উপন্যাসটি আকর্ষণীয় সুত্র দিয়ে পাঠকদের সম্মোহিত করে।'
      ],
      answer: 'উপন্যাসটি আকর্ষণীয় কাহিনীর সাথে পাঠকদের আকর্ষিত করে।', // The novel captivated readers with its compelling storyline.
      level: 'medium'
    },{
      question: "Translate: 'His music evokes a sense of nostalgia.'",
      options: [
        "তার সংগীত একটি জন্মদিনের আবেগ জাগিয়ে দেয়।",
        "তার সংগীত একটি বিরক্তির আবেগ জাগিয়ে দেয়।",
        "তার সংগীত একটি নোস্টালজিক আবেগ জাগিয়ে দেয়।",
      ],
      answer: "তার সংগীত একটি নোস্টালজিক আবেগ জাগিয়ে দেয়।",
      level: "medium",
    },
    {
      question: "Translate: 'The team displayed remarkable coordination during the match.'",
      options: [
        "দলটি খেলায় চমকপ্রদ সমন্বয় দেখে।",
        "দলটি খেলায় বিশেষ সম্পর্ক প্রদর্শন করে।",
        "দলটি খেলায় অসামান্য সমন্বয় দেখে।",
      ],
      answer: "দলটি খেলায় অসামান্য সমন্বয় দেখে।",
      level: "medium",
    },
    {
      question: "Translate: 'The artist's masterpiece was met with awe and admiration.'",
      options: [
        "শিল্পীর কৃতিত্বও স্তুপচক্ষণি ও প্রশংসা দেওয়া হল।",
        "শিল্পীর উপন্যাস আবেগ এবং সম্মাননা পেয়ে গেল।",
        "শিল্পীর মুকুটকৃতি উদ্ভূত হয়েছিল আশ্চর্য এবং প্রশংসা দ্বারা।",
      ],
      answer:
        "শিল্পীর মুকুটকৃতি উদ্ভূত হয়েছিল আশ্চর্য এবং প্রশংসা দ্বারা।",
      level: "medium",
    },
    {
      question:
        "Translate: 'The conference aims to foster collaboration among scientists.'",
      options: [
        "সম্মেলনটি বিজ্ঞানীদের মধ্যে সহযোগিতা উন্নীত করতে লক্ষ্য করে।",
        "সম্মেলনটি বিজ্ঞানীদের মধ্যে সহযোগিতা উন্নীত করার লক্ষ্য রয়েছে।",
        "সম্মেলনটি বিজ্ঞানীদের মধ্যে সহযোগিতা উদ্বৃত্ত করতে উদ্দেশ্য রাখে।",
      ],
      answer:
        "সম্মেলনটি বিজ্ঞানীদের মধ্যে সহযোগিতা উন্নীত করার লক্ষ্য রয়েছে।",
      level: "medium",
    },
    {
      question: "Translate: 'The documentary sheds light on environmental conservation.'",
      options: [
        "ডকুমেন্টারি পরিবেশ সংরক্ষণের উজ্জ্বলতা ছড়িয়ে দেয়।",
        "ডকুমেন্টারি পরিবেশ সংরক্ষণের উজ্জ্বলতা আলোকিত করে।",
        "ডকুমেন্টারি পরিবেশ সংরক্ষণ সম্পর্কে আলোকিত হয়।",
      ],
      answer:
        "ডকুমেন্টারি পরিবেশ সংরক্ষণের উজ্জ্বলতা আলোকিত করে।",
      level: "medium",
    }, {
      question: "Translate: 'The company emphasizes innovation in its products.'",
      options: [
        "প্রতিষ্ঠানটি তার পণ্যগুলিতে উদ্ভাবনের উপর সময়বদ্ধ করে।",
        "প্রতিষ্ঠানটি তার পণ্যগুলিতে উদ্ভাবন গুরুত্ব দেয়।",
        "প্রতিষ্ঠানটি তার পণ্যগুলিতে উদ্ভাবন সম্প্রসারণ করে।",
      ],
      answer:
        "প্রতিষ্ঠানটি তার পণ্যগুলিতে উদ্ভাবনের উপর সময়বদ্ধ করে।",
      level: "medium",
    },
    {
      question: "Translate: 'Her speech inspired many to take action.'",
      options: [
        "তার বক্তৃতা অনেকেই ক্রিয়া নেওয়ার উদ্দেশ্যে উৎসাহিত করে।",
        "তার বক্তৃতা অনেকেকে প্রেরণা দেয় ক্রিয়া নেওয়ার জন্য।",
        "তার বক্তৃতা অনেকেকে প্রকাশ দেয় ক্রিয়া নেওয়ার জন্য।",
      ],
      answer:
        "তার বক্তৃতা অনেকেই ক্রিয়া নেওয়ার উদ্দেশ্যে উৎসাহিত করে।",
      level: "medium",
    },
    {
      question: "Translate: 'The novel explores the complexities of human nature.'",
      options: [
        "উপন্যাসটি মানব প্রকৃতির জটিলতা অন্বেষণ করে।",
        "উপন্যাসটি মানব স্বাভাবিকতার জটিলতা পর্যালোচনা করে।",
        "উপন্যাসটি মানব স্বাভাবিকতার জটিলতা পরিক্ষণ করে।",
      ],
      answer:
        "উপন্যাসটি মানব প্রকৃতির জটিলতা অন্বেষণ করে।",
      level: "medium",
    },
    {
      question: "Translate: 'The new policy promotes equality and diversity.'",
      options: [
        "নতুন নীতি সমানতা এবং বৈচিত্র্য বৃদ্ধি করে।",
        "নতুন নীতি সমানতা এবং বিবিধতা উন্নত করে।",
        "নতুন নীতি সমানতা এবং বৈচিত্র্য প্রচার করে।",
      ],
      answer: "নতুন নীতি সমানতা এবং বিবিধতা উন্নত করে।",
      level: "medium",
    },
    {
      question: "Translate: 'I am a freelance graphic designer with a passion for creativity.'",
      options: [
        "আমি একজন স্বতন্ত্র গ্রাফিক ডিজাইনার যার ক্রিয়েটিভিটির প্রতি আগ্রহ।",
        "আমি একজন স্বাধীন গ্রাফিক ডিজাইনার যার ক্রিয়েটিভিটি প্রেমে দেয়।",
        "আমি একজন স্বাধীন গ্রাফিক ডিজাইনার যার ক্রিয়েটিভিটির উপর আকর্ষণ রয়েছে।",
      ],
      answer: "আমি একজন স্বতন্ত্র গ্রাফিক ডিজাইনার যার ক্রিয়েটিভিটির প্রতি আগ্রহ।",
      level: "medium",
    },
    {
      question: "Translate: 'Freelancing allows me to work on diverse projects and expand my skills.'",
      options: [
        "ফ্রিল্যান্সিং আমাকে বিভিন্ন প্রকল্পে কাজ করতে এবং আমার দক্ষতা প্রসারিত করতে সুযোগ দেয়।",
        "ফ্রিল্যান্সিং আমার দক্ষতা প্রসারিত করার জন্য আমাকে বিভিন্ন প্রকল্পে কাজ করতে দেয়।",
        "ফ্রিল্যান্সিং আমাকে বিভিন্ন প্রকল্পে কাজ করার এবং আমার দক্ষতা প্রসারিত করার সুযোগ দেয়।",
      ],
      answer: "ফ্রিল্যান্সিং আমাকে বিভিন্ন প্রকল্পে কাজ করতে এবং আমার দক্ষতা প্রসারিত করতে সুযোগ দেয়।",
      level: "medium",
    },
    {
      question: "Translate: 'Time management is crucial for freelancers to meet deadlines.'",
      options: [
        "সময় পরিচয় ফ্রিল্যান্সারদের শুরু করতে মুখ্য।",
        "ফ্রিল্যান্সারদের শখের জন্য সময় প্রবন্ধন গুরুত্বপূর্ণ।",
        "সময় পরিচয় ফ্রিল্যান্সারদের ডেডলাইন পূরণে গুরুত্বপূর্ণ।",
      ],
      answer: "সময় পরিচয় ফ্রিল্যান্সারদের ডেডলাইন পূরণে গুরুত্বপূর্ণ।",
      level: "medium",
    },{
      question: "Translate: 'Freelancers enjoy the flexibility to work from different locations.'",
      options: [
        "ফ্রিল্যান্সাররা বিভিন্ন স্থান থেকে কাজ করার সুবিধা উপভোগ করে।",
        "ফ্রিল্যান্সাররা পার্যটাইমে বিভিন্ন স্থান থেকে কাজ করার সুবিধা পায়।",
        "ফ্রিল্যান্সাররা বিভিন্ন স্থানে থেকে কাজ করার স্বাধীনতা উপভোগ করে।",
      ],
      answer: "ফ্রিল্যান্সাররা বিভিন্ন স্থান থেকে কাজ করার সুবিধা উপভোগ করে।",
      level: "medium",
    },
    {
      question: "Translate: 'Freelancing demands self-discipline and time management skills.'",
      options: [
        "ফ্রিল্যান্সিং নিজের শৃঙ্গে আত্ম-নির্দেশনা এবং সময় প্রবন্ধন দাবি করে।",
        "ফ্রিল্যান্সিং নিজেকে আত্ম-নির্দেশনা এবং সময় পরিচয় দেওয়ার দাবি করে।",
        "ফ্রিল্যান্সিং নিজের উপর আত্ম-নিয়ম এবং সময় প্রবন্ধন দাবি করে।",
      ],
      answer: "ফ্রিল্যান্সিং নিজের শৃঙ্গে আত্ম-নির্দেশনা এবং সময় প্রবন্ধন দাবি করে।",
      level: "medium",
    },
    {
      question: "Translate: 'Networking is essential for freelancers to find new opportunities.'",
      options: [
        "নেটওয়ার্কিং ফ্রিল্যান্সারদের নতুন সুযোগ খোঁজা জন্য প্রায়শই প্রয়োজনীয়।",
        "নেটওয়ার্কিং ফ্রিল্যান্সারদের নতুন সুযোগ খুঁজে পেতে প্রধান প্রয়োজন।",
        "নেটওয়ার্কিং ফ্রিল্যান্সারদের নতুন সুযোগ খোজার জন্য প্রায়শই অপরিহার্য।",
      ],
      answer: "নেটওয়ার্কিং ফ্রিল্যান্সারদের নতুন সুযোগ খোঁজা জন্য প্রায়শই প্রয়োজনীয়।",
      level: "medium",
    },{
      question: "Translate: 'Freelancers often need to manage their own taxes and finances.'",
      options: [
        "ফ্রিল্যান্সাররা অধিনিয়মিত ভাবে তাদের কর এবং আর্থিক সম্পদ পরিচয় করতে হতে পারে।",
        "ফ্রিল্যান্সাররা স্বয়ং তাদের কর এবং আর্থিক সাহায্য প্রবন্ধন করতে পারে।",
        "ফ্রিল্যান্সাররা স্বয়ং তাদের কর এবং আর্থিক পরিচয় প্রবন্ধন করতে সচ্ছন্দ হতে পারে।",
      ],
      answer: "ফ্রিল্যান্সাররা অধিনিয়মিত ভাবে তাদের কর এবং আর্থিক সম্পদ পরিচয় করতে হতে পারে।",
      level: "medium",
    },
    {
      question: "Translate: 'Freelancing offers the chance to work on a variety of projects.'",
      options: [
        "ফ্রিল্যান্সিং এক পৃষ্ঠভূমি প্রকল্পে কাজ করার সুযোগ প্রদান করে।",
        "ফ্রিল্যান্সিং প্রায়শই বিভিন্ন প্রকল্পে কাজ করার মৌকা দেয়।",
        "ফ্রিল্যান্সিং বিভিন্ন প্রকল্পে কাজ করার সুযোগ প্রদান করে।",
      ],
      answer: "ফ্রিল্যান্সিং বিভিন্ন প্রকল্পে কাজ করার সুযোগ প্রদান করে।",
      level: "medium",
    },
    {
      question: "Translate: 'Freelancing can be both rewarding and challenging.'",
      options: [
        "ফ্রিল্যান্সিং একটি উপহাসকর এবং চ্যালেঞ্জিং হতে পারে।",
        "ফ্রিল্যান্সিং একটি পুরস্কৃত এবং চ্যালেঞ্জিং হতে পারে।",
        "ফ্রিল্যান্সিং একটি উপহাসকর এবং চ্যালেঞ্জিং দুটি মুখোমুখি হতে পারে।",
      ],
      answer: "ফ্রিল্যান্সিং একটি উপহাসকর এবং চ্যালেঞ্জিং দুটি মুখোমুখি হতে পারে।",
      level: "medium",
    },{
      question: "Translate: 'Client: Hi! I'm looking for a freelance web developer to create a new website for my business.'",
      options: [
        "ক্লায়েন্ট: হাই! আমি আমার ব্যবসার জন্য একজন স্বতন্ত্র ওয়েব ডেভেলপার খুঁজছি যার সাথে একটি নতুন ওয়েবসাইট তৈরি করা হবে।",
        "ক্লায়েন্ট: হাই! আমি আমার ব্যবসার জন্য একজন স্বাধীন ওয়েব ডেভেলপার খুঁজছি যার সাথে একটি নতুন ওয়েবসাইট তৈরি হবে।",
        "ক্লায়েন্ট: হাই! আমি আমার ব্যবসার জন্য একজন স্বতন্ত্র ওয়েব ডেভেলপার খুঁজছি যার সাথে একটি নতুন ওয়েবসাইট তৈরি করা হচ্ছে।",
      ],
      answer: "ক্লায়েন্ট: হাই! আমি আমার ব্যবসার জন্য একজন স্বতন্ত্র ওয়েব ডেভেলপার খুঁজছি যার সাথে একটি নতুন ওয়েবসাইট তৈরি করা হবে।",
      level: "medium",
    },
    {
      question: "Translate: 'Freelancer: That sounds great! I have experience in building responsive and user-friendly websites.'",
      options: [
        "ফ্রিল্যান্সার: এটা শুনে অসাধারণ মনে হচ্ছে! আমি উত্তরণশীল এবং ব্যবহারকারী বন্ধুত্বপূর্ণ ওয়েবসাইট তৈরি করার অভিজ্ঞতা আছে।",
        "ফ্রিল্যান্সার: সেটা শোনাচ্ছে ভাল! আমি উত্তরণশীল এবং ব্যবহারকারী সহায়ক ওয়েবসাইট তৈরি করার অভিজ্ঞতা রয়েছে।",
        "ফ্রিল্যান্সার: এটা মনে হচ্ছে বাড়ি! আমি উত্তরণশীল এবং ব্যবহারকারী সহায়ক ওয়েবসাইট তৈরি করার অভিজ্ঞতা আছে।",
      ],
      answer: "ফ্রিল্যান্সার: এটা শুনে অসাধারণ মনে হচ্ছে! আমি উত্তরণশীল এবং ব্যবহারকারী বন্ধুত্বপূর্ণ ওয়েবসাইট তৈরি করার অভিজ্ঞতা আছে।",
      level: "medium",
    },
    {
      question: "Translate: 'Client: That's exactly what I'm looking for! Can you show me some of your previous work?'",
      options: [
        "ক্লায়েন্ট: এটা সঠিকভাবে যে আমি খুঁজছি! আপনি আমাকে কিছু আপনার পূর্ববর্তী কাজ দেখাতে পারবেন?",
        "ক্লায়েন্ট: সেটি সাথে মিল খোঁজছি! আপনি আমাকে কিছু আপনার পূর্ববর্তী কাজ দেখাতে পারবেন?",
        "ক্লায়েন্ট: সেটা ঠিক আমি খুঁজছি! আপনি কি আমাকে কিছু আপনার পূর্ববর্তী কাজ দেখাতে পারেন?",
      ],
      answer: "ক্লায়েন্ট: সেটি সাথে মিল খোঁজছি! আপনি আমাকে কিছু আপনার পূর্ববর্তী কাজ দেখাতে পারবেন?",
      level: "medium",
    },{
      question: "Translate: 'Freelancer: Absolutely! I can provide you with links to my portfolio showcasing my previous web development projects.'",
      options: [
        "ফ্রিল্যান্সার: নিশ্চিত! আমি আপনাকে আমার পূর্ববর্তী ওয়েব ডেভেলপমেন্ট প্রকল্পগুলি প্রদর্শন করার জন্য আমার পোর্টফোলিওর লিঙ্ক দিতে পারি।",
        "ফ্রিল্যান্সার: নিশ্চিত! আমি আপনাকে আমার আগের ওয়েব ডেভেলপমেন্ট প্রকল্পগুলির পোর্টফোলিও লিঙ্ক দিতে পারি।",
        "ফ্রিল্যান্সার: অবশ্যই! আমি আপনাকে আমার পূর্ববর্তী ওয়েব ডেভেলপমেন্ট প্রকল্পগুলির পোর্টফোলিও লিঙ্ক দিতে পারি।",
      ],
      answer: "ফ্রিল্যান্সার: অবশ্যই! আমি আপনাকে আমার পূর্ববর্তী ওয়েব ডেভেলপমেন্ট প্রকল্পগুলির পোর্টফোলিও লিঙ্ক দিতে পারি।",
      level: "medium",
    },
    {
      question: "Translate: 'Client: That would be great! I'd love to see your work before we move forward.'",
      options: [
        "ক্লায়েন্ট: সেটা খুব ভাল হবে! আমি আগে যেতে আমার কাজ দেখতে পাইতাম।",
        "ক্লায়েন্ট: সেটা সুন্দর হবে! আমি আগে আপনার কাজ দেখতে চাই।",
        "ক্লায়েন্ট: সেটি সুপার হবে! আমি আগে আপনার কাজ দেখতে ইচ্ছা করি।",
      ],
      answer: "ক্লায়েন্ট: সেটা সুন্দর হবে! আমি আগে আপনার কাজ দেখতে চাই।",
      level: "medium",
    },
    {
      question: "Translate: 'Freelancer: Of course! I'll share the portfolio link with you shortly. Feel free to reach out if you have any questions.'",
      options: [
        "ফ্রিল্যান্সার: বিশ্বস্ত! আমি শীঘ্রই আপনার সাথে পোর্টফোলিও লিঙ্ক শেয়ার করব। যদি কোনও প্রশ্ন থাকে তাহলে আমাকে যোগাযোগ করুন।",
        "ফ্রিল্যান্সার: নিশ্চিত! আমি শীঘ্রই আপনার সাথে পোর্টফোলিও লিঙ্ক শেয়ার করব। আপনি যদি কোনও প্রশ্ন থাকে তাহলে আমাকে যোগাযোগ করতে আপনি স্বাধীন।",
        "ফ্রিল্যান্সার: অবশ্যই! আমি শীঘ্রই আপনার সাথে পোর্টফোলিও লিঙ্ক শেয়ার করব। যদি আপনার কোনও প্রশ্ন থাকে তবে আমাকে যোগাযোগ করতে আপনি স্বাধীন।",
      ],
      answer: "ফ্রিল্যান্সার: বিশ্বস্ত! আমি শীঘ্রই আপনার সাথে পোর্টফোলিও লিঙ্ক শেয়ার করব। যদি কোনও প্রশ্ন থাকে তাহলে আমাকে যোগাযোগ করুন।",
      level: "medium",
    }, {
      question: "Translate: 'Client: Sounds good! Once I review your work, we can discuss the project details and timeline.'",
      options: [
        "ক্লায়েন্ট: শোনা ভাল! একবার আমি আপনার কাজ পর্যালোচনা করি, তারপরে আমরা প্রকল্পের বিশদ এবং সময়সূচি আলোচনা করতে পারি।",
        "ক্লায়েন্ট: শুনতে ভাল! আমি যখন আপনার কাজ পর্যালোচনা করব, তখন আমরা প্রকল্পের বিশদ এবং সময়সূচি আলোচনা করতে পারি।",
        "ক্লায়েন্ট: শুনতে ভাল! আমি যখন আপনার কাজ পর্যালোচনা করব, তখন আমরা প্রকল্পের বিশদ এবং সময়সূচি আলোচনা করতে পারব।",
      ],
      answer: "ক্লায়েন্ট: শুনতে ভাল! আমি যখন আপনার কাজ পর্যালোচনা করব, তখন আমরা প্রকল্পের বিশদ এবং সময়সূচি আলোচনা করতে পারি।",
      level: "medium",
    },
    {
      question: "Translate: 'Freelancer: That sounds like a plan! I'll wait for your feedback and then we can move forward.'",
      options: [
        "ফ্রিল্যান্সার: এটা একটি পরিকল্পনা মত! আমি আপনার মতামতের জন্য অপেক্ষা করব এবং তারপর আমরা এগিয়ে যেতে পারি।",
        "ফ্রিল্যান্সার: এটি একটি পরিকল্পনা মত শোনা যাচ্ছে! আমি আপনার মতামত পাবার জন্য অপেক্ষা করব এবং তারপর আমরা এগিয়ে যেতে পারি।",
        "ফ্রিল্যান্সার: এটা পরিকল্পনা মত শোনা যাচ্ছে! আমি আপনার মতামত পাওয়ার জন্য অপেক্ষা করব এবং তারপর আমরা এগিয়ে যেতে পারি।",
      ],
      answer: "ফ্রিল্যান্সার: এটি একটি পরিকল্পনা মত শোনা যাচ্ছে! আমি আপনার মতামত পাবার জন্য অপেক্ষা করব এবং তারপর আমরা এগিয়ে যেতে পারি।",
      level: "medium",
    },{
      question: "Translate: 'Client: Thank you for your understanding. I'm excited to see your portfolio.'",
      options: [
        "ক্লায়েন্ট: আপনার বুঝতে ধন্যবাদ। আমি আপনার পোর্টফোলিও দেখতে উত্সাহিত।",
        "ক্লায়েন্ট: আপনার বুঝতে ধন্যবাদ। আমি আপনার পোর্টফোলিও দেখতে উদ্বিগ্ন।",
        "ক্লায়েন্ট: আপনার বুঝতে ধন্যবাদ। আমি আপনার পোর্টফোলিও দেখতে উদ্বিগ্ন।",
      ],
      answer: "ক্লায়েন্ট: আপনার বুঝতে ধন্যবাদ। আমি আপনার পোর্টফোলিও দেখতে উত্সাহিত।",
      level: "medium",
    },
    {
      question: "Translate: 'Freelancer: I appreciate your interest! I'll make sure to share the link soon.'",
      options: [
        "ফ্রিল্যান্সার: আমি আপনার আগ্রহটি মূল্যায়ন করি! আমি নিশ্চিত করব যে আমি শীঘ্রই লিঙ্কটি শেয়ার করব।",
        "ফ্রিল্যান্সার: আপনার আগ্রহের জন্য আমি আভারী! আমি নিশ্চিত করব যে আমি শীঘ্রই লিঙ্কটি শেয়ার করব।",
        "ফ্রিল্যান্সার: আমি আপনার আগ্রহকে শ্রদ্ধা করি! আমি নিশ্চিত করব যে আমি শীঘ্রই লিঙ্কটি শেয়ার করব।",
      ],
      answer: "ফ্রিল্যান্সার: আমি আপনার আগ্রহটি মূল্যায়ন করি! আমি নিশ্চিত করব যে আমি শীঘ্রই লিঙ্কটি শেয়ার করব।",
      level: "medium",
    },
    {
      question: "Translate: 'Client: Great! Looking forward to it. Let's connect soon.'",
      options: [
        "ক্লায়েন্ট: অসাধারণ! এটি অপেক্ষা করছি। শীঘ্রই যোগাযোগ করা হবে।",
        "ক্লায়েন্ট: সুন্দর! এটি অপেক্ষা করছি। শীঘ্রই যোগাযোগ করতে হবে।",
        "ক্লায়েন্ট: অসুখে! এটি অপেক্ষা করছি। শীঘ্রই যোগাযোগ করা হবে।",
      ],
      answer: "ক্লায়েন্ট: অসাধারণ! এটি অপেক্ষা করছি। শীঘ্রই যোগাযোগ করা হবে।",
      level: "medium",
    },{
      question: "Translate: 'Freelancer: Absolutely! I'm looking forward to our collaboration. Have a great day!'",
      options: [
        "ফ্রিল্যান্সার: নিশ্চিত! আমি আমাদের সহযোগিতার অপেক্ষা করছি। সুদিন একটি সুখদিন পাশ করুন!",
        "ফ্রিল্যান্সার: নিশ্চিত! আমি আমাদের সহযোগিতার জন্য অপেক্ষা করছি। ভালো দিন কাটান!",
        "ফ্রিল্যান্সার: নিশ্চিত! আমি আমাদের সহযোগিতার অপেক্ষা করছি। সুখবর দিন আপনার হোক!",
      ],
      answer: "ফ্রিল্যান্সার: নিশ্চিত! আমি আমাদের সহযোগিতার অপেক্ষা করছি। সুদিন একটি সুখদিন পাশ করুন!",
      level: "medium",
    },
    {
      question: "Translate: 'Client: You too! Take care and talk to you soon.'",
      options: [
        "ক্লায়েন্ট: আপনিও! যত্ন নিন এবং শীঘ্রই কথা বলব।",
        "ক্লায়েন্ট: আপনিও! দেখভাল নিন এবং শীঘ্রই কথা বলা হবে।",
        "ক্লায়েন্ট: আপনিও! সুতরাং যত্ন নিন এবং কথা বলা হবে।",
      ],
      answer: "ক্লায়েন্ট: আপনিও! যত্ন নিন এবং শীঘ্রই কথা বলব।",
      level: "medium",
    },{
      question: "Translate: 'Freelancer: Absolutely! I'm looking forward to our collaboration. Have a great day!'",
      options: [
        "ফ্রিল্যান্সার: নিশ্চিত! আমি আমাদের সহযোগিতার অপেক্ষা করছি। সুদিন একটি সুখদিন পাশ করুন!",
        "ফ্রিল্যান্সার: নিশ্চিত! আমি আমাদের সহযোগিতার জন্য অপেক্ষা করছি। ভালো দিন কাটান!",
        "ফ্রিল্যান্সার: নিশ্চিত! আমি আমাদের সহযোগিতার অপেক্ষা করছি। সুখবর দিন আপনার হোক!",
      ],
      answer: "ফ্রিল্যান্সার: নিশ্চিত! আমি আমাদের সহযোগিতার অপেক্ষা করছি। সুদিন একটি সুখদিন পাশ করুন!",
      level: "medium",
    },
    {
      question: "Translate: 'Client: You too! Take care and talk to you soon.'",
      options: [
        "ক্লায়েন্ট: আপনিও! যত্ন নিন এবং শীঘ্রই কথা বলব।",
        "ক্লায়েন্ট: আপনিও! দেখভাল নিন এবং শীঘ্রই কথা বলা হবে।",
        "ক্লায়েন্ট: আপনিও! সুতরাং যত্ন নিন এবং কথা বলা হবে।",
      ],
      answer: "ক্লায়েন্ট: আপনিও! যত্ন নিন এবং শীঘ্রই কথা বলব।",
      level: "medium",
    },{
    question: "Translate: 'Client: Hello! I've reviewed your portfolio and I'm impressed. Let's discuss the project requirements.'",
    options: [
      "ক্লায়েন্ট: হ্যালো! আমি আপনার পোর্টফোলিও পর্যালোচনা করেছি এবং আমি আকর্ষিত হয়েছি। চলুন প্রকল্পের প্রয়োজনীয়তা আলোচনা করি।",
      "ক্লায়েন্ট: হ্যালো! আমি আপনার পোর্টফোলিও পর্যালোচনা করেছি এবং আমি প্রভাবিত হয়েছি। চলুন প্রকল্পের প্রয়োজনীয়তা আলোচনা করি।",
      "ক্লায়েন্ট: হ্যালো! আমি আপনার পোর্টফোলিও পর্যালোচনা করেছি এবং আমি প্রভাবিত হয়েছি। আসুন প্রকল্পের প্রয়োজনীয়তা আলোচনা করি।",
    ],
    answer: "ক্লায়েন্ট: হ্যালো! আমি আপনার পোর্টফোলিও পর্যালোচনা করেছি এবং আমি আকর্ষিত হয়েছি। চলুন প্রকল্পের প্রয়োজনীয়তা আলোচনা করি।",
    level: "medium",
  },{
    question: "Translate: 'Client: Thank you for your understanding. I'm excited to see your portfolio.'",
    options: [
      "ক্লায়েন্ট: আপনার বুঝতে ধন্যবাদ। আমি আপনার পোর্টফোলিও দেখতে উত্সাহিত।",
      "ক্লায়েন্ট: আপনার বুঝতে ধন্যবাদ। আমি আপনার পোর্টফোলিও দেখতে উদ্বিগ্ন।",
      "ক্লায়েন্ট: আপনার বুঝতে ধন্যবাদ। আমি আপনার পোর্টফোলিও দেখতে উদ্বিগ্ন।",
    ],
    answer: "ক্লায়েন্ট: আপনার বুঝতে ধন্যবাদ। আমি আপনার পোর্টফোলিও দেখতে উত্সাহিত।",
    level: "medium",
  },
  {
    question: "Translate: 'Freelancer: I appreciate your interest! I'll make sure to share the link soon.'",
    options: [
      "ফ্রিল্যান্সার: আমি আপনার আগ্রহটি মূল্যায়ন করি! আমি নিশ্চিত করব যে আমি শীঘ্রই লিঙ্কটি শেয়ার করব।",
      "ফ্রিল্যান্সার: আপনার আগ্রহের জন্য আমি আভারী! আমি নিশ্চিত করব যে আমি শীঘ্রই লিঙ্কটি শেয়ার করব।",
      "ফ্রিল্যান্সার: আমি আপনার আগ্রহকে শ্রদ্ধা করি! আমি নিশ্চিত করব যে আমি শীঘ্রই লিঙ্কটি শেয়ার করব।",
    ],
    answer: "ফ্রিল্যান্সার: আমি আপনার আগ্রহটি মূল্যায়ন করি! আমি নিশ্চিত করব যে আমি শীঘ্রই লিঙ্কটি শেয়ার করব।",
    level: "medium",
  },
  {
    question: "Translate: 'Client: Great! Looking forward to it. Let's connect soon.'",
    options: [
      "ক্লায়েন্ট: অসাধারণ! এটি অপেক্ষা করছি। শীঘ্রই যোগাযোগ করা হবে।",
      "ক্লায়েন্ট: সুন্দর! এটি অপেক্ষা করছি। শীঘ্রই যোগাযোগ করতে হবে।",
      "ক্লায়েন্ট: অসুখে! এটি অপেক্ষা করছি। শীঘ্রই যোগাযোগ করা হবে।",
    ],
    answer: "ক্লায়েন্ট: অসাধারণ! এটি অপেক্ষা করছি। শীঘ্রই যোগাযোগ করা হবে।",
    level: "medium",
  },{
    question: "Translate: 'Freelancer: Absolutely! I'm looking forward to our collaboration. Have a great day!'",
    options: [
      "ফ্রিল্যান্সার: নিশ্চিত! আমি আমাদের সহযোগিতার অপেক্ষা করছি। সুদিন একটি সুখদিন পাশ করুন!",
      "ফ্রিল্যান্সার: নিশ্চিত! আমি আমাদের সহযোগিতার জন্য অপেক্ষা করছি। ভালো দিন কাটান!",
      "ফ্রিল্যান্সার: নিশ্চিত! আমি আমাদের সহযোগিতার অপেক্ষা করছি। সুখবর দিন আপনার হোক!",
    ],
    answer: "ফ্রিল্যান্সার: নিশ্চিত! আমি আমাদের সহযোগিতার অপেক্ষা করছি। সুদিন একটি সুখদিন পাশ করুন!",
    level: "medium",
  },
  {
    question: "Translate: 'Client: You too! Take care and talk to you soon.'",
    options: [
      "ক্লায়েন্ট: আপনিও! যত্ন নিন এবং শীঘ্রই কথা বলব।",
      "ক্লায়েন্ট: আপনিও! দেখভাল নিন এবং শীঘ্রই কথা বলা হবে।",
      "ক্লায়েন্ট: আপনিও! সুতরাং যত্ন নিন এবং কথা বলা হবে।",
    ],
    answer: "ক্লায়েন্ট: আপনিও! যত্ন নিন এবং শীঘ্রই কথা বলব।",
    level: "medium",
  }, {
    question: "Translate: 'Client: Good morning! Have you had a chance to review my project requirements?'",
    options: [
      "ক্লায়েন্ট: শুভ সকাল! আপনি কি আমার প্রকল্পের প্রয়োজনীয়তা পর্যালোচনা করার সুযোগ পেয়েছেন?",
      "ক্লায়েন্ট: সুপ্রভাত! আপনি কি আমার প্রকল্পের প্রয়োজনীয়তা পর্যালোচনা করেছেন?",
      "ক্লায়েন্ট: সুপ্রভাত! আপনি আমার প্রকল্পের প্রয়োজনীয়তা দেখেছেন কি?",
    ],
    answer: "ক্লায়েন্ট: শুভ সকাল! আপনি কি আমার প্রকল্পের প্রয়োজনীয়তা পর্যালোচনা করার সুযোগ পেয়েছেন?",
    level: "medium",
  },
  {
    question: "Translate: 'Freelancer: Good morning! Yes, I've reviewed the project requirements and I'm ready to discuss the details.'",
    options: [
      "ফ্রিল্যান্সার: সুপ্রভাত! হ্যাঁ, আমি প্রকল্পের প্রয়োজনীয়তা পর্যালোচনা করেছি এবং আমি বিস্তারিত আলোচনা করার জন্য প্রস্তুত।",
      "ফ্রিল্যান্সার: সুপ্রভাত! হ্যাঁ, আমি প্রকল্পের প্রয়োজনীয়তা পর্যালোচনা করেছি এবং আমি বিস্তারিত আলোচনা করার জন্য প্রস্তুত আছি।",
      "ফ্রিল্যান্সার: সুপ্রভাত! হ্যাঁ, আমি প্রকল্পের প্রয়োজনীয়তা পর্যালোচনা করেছি এবং আমি বিস্তারিত আলোচনা করার জন্য প্রস্তুত আছি।",
    ],
    answer: "ফ্রিল্যান্সার: সুপ্রভাত! হ্যাঁ, আমি প্রকল্পের প্রয়োজনীয়তা পর্যালোচনা করেছি এবং আমি বিস্তারিত আলোচনা করার জন্য প্রস্তুত।",
    level: "medium",
  }, {
    question: "Translate: 'Client: Great! Let's start by discussing the project scope and deliverables.'",
    options: [
      "ক্লায়েন্ট: অসাধারণ! আসুন, আমরা শুরু করি প্রকল্পের সীমা এবং প্রলম্বনাদি আলোচনা করায়।",
      "ক্লায়েন্ট: ভাল! চলো শুরু করি প্রকল্প স্কোপ এবং ডেলিভারেবলস নিয়ে আলোচনা।",
      "ক্লায়েন্ট: মহান! এসে আলোচনা শুরু করা যাক প্রকল্পের পরিধি এবং ডেলিভারেবলস নিয়ে।",
    ],
    answer: "ক্লায়েন্ট: ভাল! চলো শুরু করি প্রকল্প স্কোপ এবং ডেলিভারেবলস নিয়ে আলোচনা।",
    level: "medium",
  },
  {
    question: "Translate: 'Freelancer: Absolutely! I've understood the scope and deliverables. How would you like to proceed?'",
    options: [
      "ফ্রিল্যান্সার: নিশ্চিত! আমি পরিধি এবং ডেলিভারেবলস বুঝেছি। আপনি কীভাবে এগিয়ে যেতে চান?",
      "ফ্রিল্যান্সার: নিশ্চিত! আমি স্কোপ এবং ডেলিভারেবলস বুঝেছি। আপনি কীভাবে এগিয়ে যেতে চান?",
      "ফ্রিল্যান্সার: নিশ্চিত! আমি প্রকল্প সীমা এবং ডেলিভারেবলস বুঝেছি। আপনি কীভাবে এগিয়ে যেতে চান?",
    ],
    answer: "ফ্রিল্যান্সার: নিশ্চিত! আমি স্কোপ এবং ডেলিভারেবলস বুঝেছি। আপনি কীভাবে এগিয়ে যেতে চান?",
    level: "medium",
  },{
    question: "Translate: 'Client: Let's start by outlining the main features the project should include.'",
    options: [
      "ক্লায়েন্ট: আসো শুরু করি প্রকল্পে অন্তর্ভুক্ত মৌলিক বৈশিষ্ট্যগুলি তৈরি করায়।",
      "ক্লায়েন্ট: চল শুরু করি প্রকল্পে অন্তর্ভুক্ত মুখ্য বৈশিষ্ট্যগুলি চিহ্নিত করায়।",
      "ক্লায়েন্ট: আসো শুরু করি প্রকল্পে অন্তর্ভুক্ত প্রধান বৈশিষ্ট্যগুলি তৈরি করায়।",
    ],
    answer: "ক্লায়েন্ট: চল শুরু করি প্রকল্পে অন্তর্ভুক্ত মুখ্য বৈশিষ্ট্যগুলি চিহ্নিত করায়।",
    level: "medium",
  },
  {
    question: "Translate: 'Freelancer: Absolutely! I'll create a list of the core features based on our discussion.'",
    options: [
      "ফ্রিল্যান্সার: নিশ্চিত! আমি আমাদের আলোচনার উপর ভিত্তি করে মৌলিক বৈশিষ্ট্যগুলির একটি তালিকা তৈরি করব।",
      "ফ্রিল্যান্সার: নিশ্চিত! আমি আমাদের আলোচনার ভিত্তি নিয়ে মৌলিক বৈশিষ্ট্যগুলির একটি তালিকা তৈরি করব।",
      "ফ্রিল্যান্সার: নিশ্চিত! আমি আমাদের আলোচনা ভিত্তিক মৌলিক বৈশিষ্ট্যগুলির একটি তালিকা তৈরি করব।",
    ],
    answer: "ফ্রিল্যান্সার: নিশ্চিত! আমি আমাদের আলোচনার ভিত্তি নিয়ে মৌলিক বৈশিষ্ট্যগুলির একটি তালিকা তৈরি করব।",
    level: "medium",
  }, {
    question: "Translate: 'Client: What is your estimated timeline for completing the project?'",
    options: [
      "ক্লায়েন্ট: প্রকল্প সম্পন্ন করার আপনার আনুমিত সময়সূচি কী?",
      "ক্লায়েন্ট: প্রকল্প শেষ করার আপনার আনুমিত সময়সূচি কত?",
      "ক্লায়েন্ট: প্রকল্প পূর্ণ করার জন্য আপনার আনুমিত সময়সূচি কি?",
    ],
    answer: "ক্লায়েন্ট: প্রকল্প সম্পন্ন করার আপনার আনুমিত সময়সূচি কী?",
    level: "medium",
  },
  {
    question: "Translate: 'Freelancer: I anticipate the project will take around 4-6 weeks to complete.'",
    options: [
      "ফ্রিল্যান্সার: আমি আশা করি প্রকল্পটি সম্পন্ন করার জন্য প্রায় 4-6 সপ্তাহ লাগবে।",
      "ফ্রিল্যান্সার: আমি আগ্রহ করি প্রকল্পটি সম্পন্ন করার জন্য প্রায় 4-6 সপ্তাহ প্রয়োজন।",
      "ফ্রিল্যান্সার: আমি মনে করি প্রকল্পটি সম্পন্ন করতে 4-6 সপ্তাহ লাগবে।",
    ],
    answer: "ফ্রিল্যান্সার: আমি আশা করি প্রকল্পটি সম্পন্ন করার জন্য প্রায় 4-6 সপ্তাহ লাগবে।",
    level: "medium",
  },
  {
    question: "Translate: 'Client: That sounds reasonable. What is your preferred method of communication during the project?'",
    options: [
      "ক্লায়েন্ট: এটি যথেষ্ট মন্তব্য করে। প্রকল্পের সময় আপনার পছন্দসই যোগাযোগ পদ্ধতি কী?",
      "ক্লায়েন্ট: এটি যথেষ্ট যাত্রী। প্রকল্পের সময় আপনার প্রাধান্য যোগাযোগ পদ্ধতি কী?",
      "ক্লায়েন্ট: এটি যথেষ্ট যুক্তিসই। প্রকল্পে আপনার প্রাথমিক যোগাযোগ পদ্ধতি কী?",
    ],
    answer: "ক্লায়েন্ট: এটি যথেষ্ট মন্তব্য করে। প্রকল্পের সময় আপনার পছন্দসই যোগাযোগ পদ্ধতি কী?",
    level: "medium",
  },
  {
    question: "Translate: 'Freelancer: I prefer using email for regular updates and scheduling video calls for more detailed discussions.'",
    options: [
      "ফ্রিল্যান্সার: আমি নিয়মিত হালনাগাদের জন্য ইমেল ব্যবহার করাটি পছন্দ করি এবং আবিষ্কারিত আলোচনার জন্য ভিডিও কল সূচনা দেওয়ার জন্য।",
      "ফ্রিল্যান্সার: আমি নিয়মিত হালনাগাদের জন্য ইমেল ব্যবহার পছন্দ করি এবং বিস্তারিত আলোচনার জন্য ভিডিও কল সময়সূচী করা পছন্দ করি।",
      "ফ্রিল্যান্সার: আমি নিয়মিত আপডেটের জন্য ইমেল ব্যবহার করাটি পছন্দ করি এবং বিস্তারিত আলোচনার জন্য ভিডিও কল সূচনা দেওয়ার জন্য।",
    ],
    answer: "ফ্রিল্যান্সার: আমি নিয়মিত হালনাগাদের জন্য ইমেল ব্যবহার করাটি পছন্দ করি এবং আবিষ্কারিত আলোচনার জন্য ভিডিও কল সূচনা দেওয়ার জন্য।",
    level: "medium",
  },
  {
    question: "Translate: 'Client: Do you have any experience with similar projects in the past?'",
    options: [
      "ক্লায়েন্ট: আপনার পূর্বে এই ধরনের প্রকল্পে কোন অভিজ্ঞতা আছে কি?",
      "ক্লায়েন্ট: আপনার পূর্বে এই প্রকল্পের মতো কোন অভিজ্ঞতা আছে কি?",
      "ক্লায়েন্ট: আপনার পাশে আগে এই প্রকল্পের ধরণের কোন অভিজ্ঞতা আছে কি?",
    ],
    answer: "ক্লায়েন্ট: আপনার পূর্বে এই প্রকল্পের মতো কোন অভিজ্ঞতা আছে কি?",
    level: "medium",
  },
  {
    question: "Translate: 'Freelancer: Yes, I've worked on similar projects in the past. I can provide you with references if needed.'",
    options: [
      "ফ্রিল্যান্সার: হ্যাঁ, আমি পূর্বে এই ধরনের প্রকল্প কাজ করেছি। প্রয়োজনে আমি আপনাকে সেইসাথে প্রেরণা দিতে পারি।",
      "ফ্রিল্যান্সার: হ্যাঁ, আমি পূর্বে এই প্রকল্পের মতো কাজ করেছি। আপনি যদি চান তাহলে আমি সন্দর্ভ সরবরাহ করতে পারি।",
      "ফ্রিল্যান্সার: হ্যাঁ, আমি আগে এই প্রকল্পের মতো কাজ করেছি। প্রয়োজন হলে আমি আপনাকে উল্লিখিত উল্লিখিত সেবার সন্দর্ভ প্রদান করতে পারি।",
    ],
    answer: "ফ্রিল্যান্সার: হ্যাঁ, আমি পূর্বে এই প্রকল্পের মতো কাজ করেছি। আপনি যদি চান তাহলে আমি সন্দর্ভ সরবরাহ করতে পারি।",
    level: "medium",
  },  {
    question: "Translate: 'Client: Once we finalize the features, how do you plan to handle the design aspect?'",
    options: [
      "ক্লায়েন্ট: আমরা একবার বৈশিষ্ট্যগুলি নির্ধারণ করলে, আপনি ডিজাইনের দিক কীভাবে হ্যান্ডল করতে চলেছেন?",
      "ক্লায়েন্ট: বৈশিষ্ট্যগুলি নির্ধারণ করার পর ডিজাইনের দিকে আপনি কীভাবে প্রস্তুত হতে চলেছেন?",
      "ক্লায়েন্ট: বৈশিষ্ট্যগুলি নির্ধারণ করার পর, আপনি ডিজাইন দিকে কীভাবে প্রস্তুতি নিতে চলেছেন?",
    ],
    answer: "ক্লায়েন্ট: আমরা একবার বৈশিষ্ট্যগুলি নির্ধারণ করলে, আপনি ডিজাইনের দিক কীভাবে হ্যান্ডল করতে চলেছেন?",
    level: "medium",
  }, {
    question: "Translate: 'Client: That sounds good. How will you ensure the project stays within the agreed timeline?'",
    options: [
      "ক্লায়েন্ট: এটি ভাল শোনা। আপনি কীভাবে নিশ্চিত করবেন যে প্রকল্পটি নির্ধারিত সময়সীমার মধ্যে থাকে?",
      "ক্লায়েন্ট: এটি সুন্দর শোনা। আপনি কীভাবে নিশ্চিত করবেন যে প্রকল্পটি নির্ধারিত সময়সীমার মধ্যে থাকে?",
      "ক্লায়েন্ট: এটি ভাল শোনা। আপনি কীভাবে নিশ্চিত করবেন যে প্রকল্পটি নির্ধারিত সময়সীমার মধ্যে থাকে?",
    ],
    answer: "ক্লায়েন্ট: এটি সুন্দর শোনা। আপনি কীভাবে নিশ্চিত করবেন যে প্রকল্পটি নির্ধারিত সময়সীমার মধ্যে থাকে?",
    level: "medium",
  },
  {
    question: "Translate: 'Freelancer: To ensure the project stays on track, I'll create a detailed project schedule and regularly update you on the progress.'",
    options: [
      "ফ্রিল্যান্সার: প্রকল্পটি মাঝে থাকার নিশ্চিততা নিশ্চিত করতে, আমি একটি বিস্তারিত প্রকল্প সময়সূচি তৈরি করব এবং আপনাকে নির্ধারিত সময়সীমার মধ্যে অপডেট করব।",
      "ফ্রিল্যান্সার: প্রকল্পটি নির্ধারিত মডেলে রাখতে, আমি একটি বিস্তারিত প্রকল্প সময়সূচি তৈরি করব এবং নিয়মিতভাবে আপনাকে অগ্রগতি আপডেট করব।",
      "ফ্রিল্যান্সার: প্রকল্পটি সঠিক পথে থাকার জন্য, আমি একটি বিস্তারিত প্রকল্প সময়সূচি তৈরি করব এবং নিয়মিত ভাবে আপডেট করব।",
    ],
    answer: "ফ্রিল্যান্সার: প্রকল্পটি সঠিক পথে থাকার জন্য, আমি একটি বিস্তারিত প্রকল্প সময়সূচি তৈরি করব এবং নিয়মিত ভাবে আপডেট করব।",
    level: "medium",
  },
  {
    question: "Translate: 'Client: Excellent! How often will we have progress review meetings?'",
    options: [
      "ক্লায়েন্ট: অত্যন্ত ভাল! আমরা কতবার অগ্রগতি পর্যালোচনা মিটিং করব?",
      "ক্লায়েন্ট: অসাধারণ! আমরা কতবার অগ্রগতি পর্যালোচনা সভা করব?",
      "ক্লায়েন্ট: সুখবর! আমরা কতবার অগ্রগতি পর্যালোচনা মিটিং রাখব?",
    ],
    answer: "ক্লায়েন্ট: অসাধারণ! আমরা কতবার অগ্রগতি পর্যালোচনা সভা করব?",
    level: "medium",
  },
  {
    question: "Translate: 'Freelancer: We'll have bi-weekly progress review meetings to keep you updated and address any concerns.'",
    options: [
      "ফ্রিল্যান্সার: আমরা আপডেট রাখতে এবং যে কোনও চিন্তা নিয়ে সংজ্ঞান করতে দ্বিসাপ্তাহিক অগ্রগতি পর্যালোচনা সভা করব।",
      "ফ্রিল্যান্সার: আমরা আপনাকে আপডেট করতে এবং যে কোনও চিন্তা নিয়ে সংজ্ঞান করতে দ্বিসাপ্তাহিক অগ্রগতি পর্যালোচনা মিটিং করব।",
      "ফ্রিল্যান্সার: আপডেট রাখতে এবং যে কোনও চিন্তা নিয়ে সংজ্ঞান করতে, আমরা দ্বিসাপ্তাহিক অগ্রগতি পর্যালোচনা সভা সংগ্রহ করব।",
    ],
    answer: "ফ্রিল্যান্সার: আমরা আপডেট রাখতে এবং যে কোনও চিন্তা নিয়ে সংজ্ঞান করতে দ্বিসাপ্তাহিক অগ্রগতি পর্যালোচনা সভা করব।",
    level: "medium",
  },{
    question: "Translate: 'Client: Thank you for clarifying. Let's proceed with the project planning.'",
    options: [
      "ক্লায়েন্ট: স্পষ্টতা জানানোর জন্য আপনাকে ধন্যবাদ। চলুন, আমরা প্রকল্প পরিকল্পনা করতে যাই।",
      "ক্লায়েন্ট: স্পষ্টতা জানানোর জন্য আপনাকে ধন্যবাদ। চলুন, আমরা প্রকল্প পরিকল্পনা শুরু করি।",
      "ক্লায়েন্ট: স্পষ্টতা জানানোর জন্য আপনাকে ধন্যবাদ। চলুন, আমরা প্রকল্প পরিকল্পনা করতে যাই।",
    ],
    answer: "ক্লায়েন্ট: স্পষ্টতা জানানোর জন্য আপনাকে ধন্যবাদ। চলুন, আমরা প্রকল্প পরিকল্পনা করতে যাই।",
    level: "medium",
  }, {
    question: "Translate: 'Freelancer: Absolutely, I'm excited to start the project planning. I'll create a detailed outline and share it with you.'",
    options: [
      "ফ্রিল্যান্সার: নিশ্চিত, আমি প্রকল্প পরিকল্পনা শুরু করার জন্য উত্সাহিত। আমি একটি বিস্তারিত রূপরেখা তৈরি করব এবং তা আপনার সাথে শেয়ার করব।",
      "ফ্রিল্যান্সার: নিশ্চিত, আমি প্রকল্প পরিকল্পনা শুরু করার জন্য উত্সাহিত। আমি একটি বিস্তারিত আউটলাইন তৈরি করব এবং তা আপনার সাথে শেয়ার করব।",
      "ফ্রিল্যান্সার: নিশ্চিত, আমি প্রকল্প পরিকল্পনা শুরু করার জন্য উত্সাহিত। আমি একটি বিস্তারিত আউটলাইন তৈরি করব এবং তা আপনার সাথে শেয়ার করব।",
    ],
    answer: "ফ্রিল্যান্সার: নিশ্চিত, আমি প্রকল্প পরিকল্পনা শুরু করার জন্য উত্সাহিত। আমি একটি বিস্তারিত আউটলাইন তৈরি করব এবং তা আপনার সাথে শেয়ার করব।",
    level: "medium",
  },
  {
    question: "Translate: 'Client: Sounds like a plan! Let's also discuss the budget and payment schedule.'",
    options: [
      "ক্লায়েন্ট: এটি একটি পরিকল্পনা মত! চলুন, আমরা বাজেট এবং পেমেন্ট সমূহও আলোচনা করি।",
      "ক্লায়েন্ট: সেটাও একটি পরিকল্পনা! চলুন, আমরা বাজেট এবং পেমেন্ট সমূহও আলোচনা করি।",
      "ক্লায়েন্ট: শুনতে একটি পরিকল্পনা! চলুন, আমরা বাজেট এবং পেমেন্ট সমূহও আলোচনা করি।",
    ],
    answer: "ক্লায়েন্ট: এটি একটি পরিকল্পনা মত! চলুন, আমরা বাজেট এবং পেমেন্ট সমূহও আলোচনা করি।",
    level: "medium",
  },
  {
    question: "Translate: 'Freelancer: Certainly, we'll go over the budget and establish a payment schedule that works for both of us.'",
    options: [
      "ফ্রিল্যান্সার: নিশ্চিতভাবে, আমরা বাজেট উল্লেখ করব এবং এমন একটি পেমেন্ট সমূহ প্রতিষ্ঠা করব যা আমাদের উভয়ের জন্যই কাজ করে।",
      "ফ্রিল্যান্সার: নিশ্চিতভাবে, আমরা বাজেট আলোচনা করব এবং এমন একটি পেমেন্ট সমূহ প্রতিষ্ঠা করব যা আমাদের উভয়ের জন্যই কাজ করে।",
      "ফ্রিল্যান্সার: নিশ্চিতভাবে, আমরা বাজেট আলোচনা করব এবং এমন একটি পেমেন্ট সমূহ প্রতিষ্ঠা করব যা আমাদের উভয়ের জন্যই কাজ করে।",
    ],
    answer: "ফ্রিল্যান্সার: নিশ্চিতভাবে, আমরা বাজেট আলোচনা করব এবং এমন একটি পেমেন্ট সমূহ প্রতিষ্ঠা করব যা আমাদের উভয়ের জন্যই কাজ করে।",
    level: "medium",
  }, {
    question: "Translate: 'Freelancer: Great! I'll start by outlining the project milestones and deliverables. Once that's ready, we can review and refine the plan.'",
    options: [
      "ফ্রিল্যান্সার: সুখবর! আমি প্রথমে প্রকল্পের মাইলস্টোন এবং ডেলিভারেবল আলোচনা করতে শুরু করব। এটি তৈরি হলে, আমরা পরিকল্পনাটি সমীক্ষা এবং সমর্পণ করতে পারি।",
      "ফ্রিল্যান্সার: সুখবর! আমি প্রথমে প্রকল্পের মাইলস্টোন এবং ডেলিভারেবল তৈরি করতে শুরু করব। এরপর, আমরা পরিকল্পনাটি সমীক্ষা এবং সাবধান করতে পারি।",
      "ফ্রিল্যান্সার: সুখবর! আমি প্রথমে প্রকল্পের মাইলস্টোন এবং ডেলিভারেবল নির্ধারণ করতে শুরু করব। তারপর, আমরা পরিকল্পনাটি সমীক্ষা এবং পারিষ্কার করতে পারি।",
    ],
    answer: "ফ্রিল্যান্সার: সুখবর! আমি প্রথমে প্রকল্পের মাইলস্টোন এবং ডেলিভারেবল আলোচনা করতে শুরু করব। এটি তৈরি হলে, আমরা পরিকল্পনাটি সমীক্ষা এবং সমর্পণ করতে পারি।",
    level: "medium",
  }, {
    topic: "Greetings and Introductions",
    question: "Translate: 'Client: How do you approach starting a conversation with new clients?'",
    options: [
      "ক্লায়েন্ট: নতুন ক্লায়েন্টদের সাথে কীভাবে সাক্ষর আপ করতে অভিগমন করেন?",
      "ক্লায়েন্ট: নতুন ক্লায়েন্টদের সাথে কীভাবে যোগাযোগ শুরু করতে অভিগমন করেন?",
      "ক্লায়েন্ট: নতুন ক্লায়েন্টদের সাথে কীভাবে সাক্ষর আপ করতে যোগাযোগ শুরু করেন?",
    ],
    answer: "ক্লায়েন্ট: নতুন ক্লায়েন্টদের সাথে কীভাবে সাক্ষর আপ করতে অভিগমন করেন?",
    level: "medium",
  },
  {
    topic: "Greetings and Introductions",
    question: "Translate: 'Freelancer: I usually begin by sending a warm welcome message along with a brief introduction of myself and my expertise.'",
    options: [
      "ফ্রিল্যান্সার: আমি সাধারণভাবে একটি উষ্ণ স্বাগত বার্তা পাঠানোর মাধ্যমে শুরু করি, যা আমার নিজের সংক্ষিপ্ত পরিচয় এবং আমার দক্ষতার সারাংশ সহ অন্তর্ভুক্ত থাকে।",
      "ফ্রিল্যান্সার: আমি সাধারণভাবে একটি উষ্ণ স্বাগত বার্তা পাঠানোর মাধ্যমে শুরু করি, যা আমার নিজের সংক্ষিপ্ত পরিচয় এবং আমার দক্ষতার সারাংশ সহ অন্তর্ভুক্ত থাকে।",
      "ফ্রিল্যান্সার: আমি সাধারণভাবে একটি উষ্ণ স্বাগত বার্তা পাঠানোর মাধ্যমে শুরু করি, যা আমার নিজের সংক্ষিপ্ত পরিচয় এবং আমার দক্ষতার সারাংশ সহ অন্তর্ভুক্ত থাকে।",
    ],
    answer: "ফ্রিল্যান্সার: আমি সাধারণভাবে একটি উষ্ণ স্বাগত বার্তা পাঠানোর মাধ্যমে শুরু করি, যা আমার নিজের সংক্ষিপ্ত পরিচয় এবং আমার দক্ষতার সারাংশ সহ অন্তর্ভুক্ত থাকে।",
    level: "medium",
  },
  {
    topic: "Greetings and Introductions",
    question: "Translate: 'Client: It's a pleasure to meet you! Can you tell me more about your experience in this field?'",
    options: [
      "ক্লায়েন্ট: আপনার সাথে মিলে খুশি! আপনি আমাকে বলতে পারবেন আপনার এই ক্ষেত্রে অভিজ্ঞতা সম্পর্কে আরও?",
      "ক্লায়েন্ট: আপনার সাথে মিলে খুশি! আপনি আমাকে বলতে পারবেন আপনার এই ক্ষেত্রে অভিজ্ঞতা সম্পর্কে আরও?",
      "ক্লায়েন্ট: আপনার সাথে মিলে খুশি! আপনি আমাকে বলতে পারবেন আপনার এই ক্ষেত্রে অভিজ্ঞতা সম্পর্কে আরও?",
    ],
    answer: "ক্লায়েন্ট: আপনার সাথে মিলে খুশি! আপনি আমাকে বলতে পারবেন আপনার এই ক্ষেত্রে অভিজ্ঞতা সম্পর্কে আরও?",
    level: "medium",
  }, {
    topic: "Greetings and Introductions",
    question: "Translate: 'Client: How do you approach starting a conversation with new clients?'",
    options: [
      "ক্লায়েন্ট: নতুন ক্লায়েন্টদের সাথে কীভাবে সাক্ষর আপ করতে অভিগমন করেন?",
      "ক্লায়েন্ট: নতুন ক্লায়েন্টদের সাথে কীভাবে যোগাযোগ শুরু করতে অভিগমন করেন?",
      "ক্লায়েন্ট: নতুন ক্লায়েন্টদের সাথে কীভাবে সাক্ষর আপ করতে যোগাযোগ শুরু করেন?",
    ],
    answer: "ক্লায়েন্ট: নতুন ক্লায়েন্টদের সাথে কীভাবে সাক্ষর আপ করতে অভিগমন করেন?",
    level: "medium",
  },
  {
    topic: "Greetings and Introductions",
    question: "Translate: 'Freelancer: I usually begin by sending a warm welcome message along with a brief introduction of myself and my expertise.'",
    options: [
      "ফ্রিল্যান্সার: আমি সাধারণভাবে একটি উষ্ণ স্বাগত বার্তা পাঠানোর মাধ্যমে শুরু করি, যা আমার নিজের সংক্ষিপ্ত পরিচয় এবং আমার দক্ষতার সারাংশ সহ অন্তর্ভুক্ত থাকে।",
      "ফ্রিল্যান্সার: আমি সাধারণভাবে একটি উষ্ণ স্বাগত বার্তা পাঠানোর মাধ্যমে শুরু করি, যা আমার নিজের সংক্ষিপ্ত পরিচয় এবং আমার দক্ষতার সারাংশ সহ অন্তর্ভুক্ত থাকে।",
      "ফ্রিল্যান্সার: আমি সাধারণভাবে একটি উষ্ণ স্বাগত বার্তা পাঠানোর মাধ্যমে শুরু করি, যা আমার নিজের সংক্ষিপ্ত পরিচয় এবং আমার দক্ষতার সারাংশ সহ অন্তর্ভুক্ত থাকে।",
    ],
    answer: "ফ্রিল্যান্সার: আমি সাধারণভাবে একটি উষ্ণ স্বাগত বার্তা পাঠানোর মাধ্যমে শুরু করি, যা আমার নিজের সংক্ষিপ্ত পরিচয় এবং আমার দক্ষতার সারাংশ সহ অন্তর্ভুক্ত থাকে।",
    level: "medium",
  },
  {
    topic: "Greetings and Introductions",
    question: "Translate: 'Client: It's a pleasure to meet you! Can you tell me more about your experience in this field?'",
    options: [
      "ক্লায়েন্ট: আপনার সাথে মিলে খুশি! আপনি আমাকে বলতে পারবেন আপনার এই ক্ষেত্রে অভিজ্ঞতা সম্পর্কে আরও?",
      "ক্লায়েন্ট: আপনার সাথে মিলে খুশি! আপনি আমাকে বলতে পারবেন আপনার এই ক্ষেত্রে অভিজ্ঞতা সম্পর্কে আরও?",
      "ক্লায়েন্ট: আপনার সাথে মিলে খুশি! আপনি আমাকে বলতে পারবেন আপনার এই ক্ষেত্রে অভিজ্ঞতা সম্পর্কে আরও?",
    ],
    answer: "ক্লায়েন্ট: আপনার সাথে মিলে খুশি! আপনি আমাকে বলতে পারবেন আপনার এই ক্ষেত্রে অভিজ্ঞতা সম্পর্কে আরও?",
    level: "medium",
  },{
    topic: "Greetings and Introductions",
    question: 'Translate: "The team celebrated their victory with a grand party."',
    options: [
      'দলটি একটি প্রসাদে তাদের বিজয় উদযাপন করল।',
      'দলটি একটি মহোত্সবে তাদের বিজয় উদযাপন করল।',
      'দলটি একটি প্রধান উদযাপনে তাদের বিজয় উদযাপন করল।'
    ],
    answer: 'দলটি একটি মহোত্সবে তাদের বিজয় উদযাপন করল।', // The team celebrated their victory with a grand party.
    level: 'medium'
  },
  {
    topic: "Freelancing and Remote Work",
    question: 'Translate: "I am working on a freelance project for an international client."',
    options: [
      'আমি একটি আন্তর্জাতিক ক্লায়েন্টের জন্য একটি ফ্রিল্যান্স প্রকল্পে কাজ করছি।',
      'আমি একটি আন্তর্জাতিক গ্রাহকের জন্য একটি প্রকল্পে দূরবর্তী কাজ করছি।',
      'আমি একটি আন্তর্জাতিক গ্রাহকের সাথে একটি ফ্রিল্যান্স প্রকল্পে কাজ করছি।'
    ],
    answer: 'আমি একটি আন্তর্জাতিক গ্রাহকের জন্য একটি প্রকল্পে দূরবর্তী কাজ করছি।', // I am working on a freelance project for an international client.
    level: 'medium'
  },
  // Add more questions here...
];

export default englishLearningQuestions;
