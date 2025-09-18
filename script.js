
const quizData = {
  math: {
    1: [ // Easy
      { q: "2 + 2 = ?", opts: ["3","4","5"], ans: "4" },
      { q: "5 x 2 = ?", opts: ["7","10","12"], ans: "10" },
      { q: "10 - 3 = ?", opts: ["6","7","8"], ans: "7" },
      { q: "9 ÷ 3 = ?", opts: ["2","3","4"], ans: "3" },
      { q: "7 + 5 = ?", opts: ["11","12","13"], ans: "12" },
      { q: "6 x 6 = ?", opts: ["36","30","42"], ans: "36" },
      { q: "8 - 4 = ?", opts: ["2","4","5"], ans: "4" },
      { q: "Square of 5?", opts: ["15","20","25"], ans: "25" },
      { q: "Half of 20?", opts: ["5","10","15"], ans: "10" },
      { q: "3 + 9 = ?", opts: ["11","12","13"], ans: "12" }
    ],
    2: [ // Medium
      { q: "15 ÷ 3 = ?", opts: ["3","4","5"], ans: "5" },
      { q: "12 x 4 = ?", opts: ["48","44","50"], ans: "48" },
      { q: "Square root of 64?", opts: ["6","7","8"], ans: "8" },
      { q: "LCM of 4 & 6?", opts: ["12","18","24"], ans: "12" },
      { q: "HCF of 12 & 18?", opts: ["3","6","9"], ans: "6" },
      { q: "7 x 8 = ?", opts: ["54","56","58"], ans: "56" },
      { q: "25% of 200?", opts: ["25","40","50"], ans: "50" },
      { q: "Area of square (side=6)?", opts: ["36","30","42"], ans: "36" },
      { q: "Perimeter of rectangle (5x7)?", opts: ["22","24","26"], ans: "24" },
      { q: "Cube of 3?", opts: ["9","27","18"], ans: "27" }
    ],
    3: [ // Hard
      { q: "Simplify: (12 ÷ 3) + 2", opts: ["4","6","8"], ans: "6" },
      { q: "Cube of 5?", opts: ["100","125","150"], ans: "125" },
      { q: "Prime number?", opts: ["21","29","35"], ans: "29" },
      { q: "10² = ?", opts: ["20","100","1000"], ans: "100" },
      { q: "√121?", opts: ["10","11","12"], ans: "11" },
      { q: "Factorial of 4?", opts: ["12","24","20"], ans: "24" },
      { q: "Solve: 200 - 75", opts: ["115","120","125"], ans: "125" },
      { q: "Solve: 14 ÷ 2", opts: ["6","7","8"], ans: "7" },
      { q: "Simplify: (3x3)+4", opts: ["9","10","13"], ans: "13" },
      { q: "Which is irrational?", opts: ["√2","4/2","3"], ans: "√2" }
    ]
  },
  science: {
    1: [ // Easy
      { q: "H2O is?", opts: ["Water","Oxygen","Hydrogen"], ans: "Water" },
      { q: "Red Planet?", opts: ["Mars","Venus","Earth"], ans: "Mars" },
      { q: "Gas we breathe in?", opts: ["Oxygen","CO2","Nitrogen"], ans: "Oxygen" },
      { q: "Earth shape?", opts: ["Flat","Round","Square"], ans: "Round" },
      { q: "Biggest planet?", opts: ["Jupiter","Saturn","Mars"], ans: "Jupiter" },
      { q: "Nearest star?", opts: ["Moon","Sun","Polaris"], ans: "Sun" },
      { q: "Force pulling objects?", opts: ["Gravity","Magnetism","Friction"], ans: "Gravity" },
      { q: "Plants make food by?", opts: ["Respiration","Photosynthesis","Digestion"], ans: "Photosynthesis" },
      { q: "Gas exhaled?", opts: ["Oxygen","CO2","Hydrogen"], ans: "CO2" },
      { q: "Largest organ?", opts: ["Heart","Skin","Liver"], ans: "Skin" }
    ],
    2: [ // Medium
      { q: "Boiling point of water?", opts: ["90°C","100°C","110°C"], ans: "100°C" },
      { q: "Smallest unit of life?", opts: ["Atom","Molecule","Cell"], ans: "Cell" },
      { q: "Most abundant gas in air?", opts: ["Oxygen","Nitrogen","CO2"], ans: "Nitrogen" },
      { q: "Vitamin from sunlight?", opts: ["A","C","D"], ans: "D" },
      { q: "Sound travels fastest in?", opts: ["Air","Water","Solid"], ans: "Solid" },
      { q: "Human heart chambers?", opts: ["2","3","4"], ans: "4" },
      { q: "Blood red due to?", opts: ["Chlorophyll","Hemoglobin","Keratin"], ans: "Hemoglobin" },
      { q: "Who discovered penicillin?", opts: ["Newton","Fleming","Darwin"], ans: "Fleming" },
      { q: "Energy from moving air?", opts: ["Solar","Wind","Hydro"], ans: "Wind" },
      { q: "Animal that lays eggs?", opts: ["Dog","Cat","Hen"], ans: "Hen" }
    ],
    3: [ // Hard
      { q: "Speed of light?", opts: ["3x10^5 m/s","3x10^6 m/s","3x10^8 m/s"], ans: "3x10^8 m/s" },
      { q: "Atomic number = ?", opts: ["Protons","Electrons","Neutrons"], ans: "Protons" },
      { q: "Photosynthesis releases?", opts: ["Oxygen","CO2","Nitrogen"], ans: "Oxygen" },
      { q: "SI unit of force?", opts: ["Pascal","Newton","Joule"], ans: "Newton" },
      { q: "Instrument to see stars?", opts: ["Microscope","Telescope","Binoculars"], ans: "Telescope" },
      { q: "Human DNA is in?", opts: ["Nucleus","Cytoplasm","Ribosome"], ans: "Nucleus" },
      { q: "pH of neutral water?", opts: ["1","7","14"], ans: "7" },
      { q: "Planet with rings?", opts: ["Mars","Saturn","Venus"], ans: "Saturn" },
      { q: "Smallest planet?", opts: ["Mercury","Mars","Pluto"], ans: "Mercury" },
      { q: "Largest bone?", opts: ["Femur","Skull","Spine"], ans: "Femur" }
    ]
  },
  english: {
    1: [ // Easy
      { q: "Plural of 'Child'?", opts: ["Childs","Children","Childrens"], ans: "Children" },
      { q: "Opposite of 'Hot'?", opts: ["Cold","Warm","Boiling"], ans: "Cold" },
      { q: "Past tense of 'Go'?", opts: ["Went","Gone","Go"], ans: "Went" },
      { q: "Synonym of 'Happy'?", opts: ["Sad","Joyful","Angry"], ans: "Joyful" },
      { q: "Verb in 'She runs fast'?", opts: ["She","Runs","Fast"], ans: "Runs" },
      { q: "Noun in 'The dog barked'?", opts: ["Dog","Barked","The"], ans: "Dog" },
      { q: "Adjective in 'Blue sky'?", opts: ["Blue","Sky","Both"], ans: "Blue" },
      { q: "Antonym of 'Big'?", opts: ["Huge","Large","Small"], ans: "Small" },
      { q: "Correct article: ___ apple?", opts: ["A","An","The"], ans: "An" },
      { q: "Preposition in 'Book on the table'?", opts: ["Book","On","Table"], ans: "On" }
    ],
    2: [ // Medium
      { q: "Opposite of 'Early'?", opts: ["Late","Soon","Fast"], ans: "Late" },
      { q: "Past tense of 'Eat'?", opts: ["Eated","Ate","Eaten"], ans: "Ate" },
      { q: "Plural of 'Mouse'?", opts: ["Mouses","Mices","Mice"], ans: "Mice" },
      { q: "Antonym of 'Strong'?", opts: ["Weak","Powerful","Brave"], ans: "Weak" },
      { q: "Correct sentence?", opts: ["He go school","He goes to school","He going school"], ans: "He goes to school" },
      { q: "Synonym of 'Fast'?", opts: ["Quick","Slow","Lazy"], ans: "Quick" },
      { q: "Adverb in 'She sings beautifully'?", opts: ["She","Sings","Beautifully"], ans: "Beautifully" },
      { q: "Plural of 'Tooth'?", opts: ["Teeth","Tooths","Teeths"], ans: "Teeth" },
      { q: "Past tense of 'See'?", opts: ["Saw","Seen","See"], ans: "Saw" },
      { q: "Antonym of 'Clean'?", opts: ["Neat","Dirty","Tidy"], ans: "Dirty" }
    ],
    3: [ // Hard
      { q: "Correct form: 'I ___ a book yesterday.'", opts: ["Read","Reads","Reading"], ans: "Read" },
      { q: "Which is a pronoun?", opts: ["He","Run","Book"], ans: "He" },
      { q: "Synonym of 'Brave'?", opts: ["Coward","Courageous","Weak"], ans: "Courageous" },
      { q: "Past tense of 'Write'?", opts: ["Wrote","Written","Write"], ans: "Wrote" },
      { q: "Antonym of 'Rich'?", opts: ["Wealthy","Poor","Money"], ans: "Poor" },
      { q: "Which is an adjective?", opts: ["Run","Happy","Quickly"], ans: "Happy" },
      { q: "Plural of 'Person'?", opts: ["Persons","People","Peoples"], ans: "People" },
      { q: "Synonym of 'Intelligent'?", opts: ["Smart","Dull","Lazy"], ans: "Smart" },
      { q: "Past tense of 'Swim'?", opts: ["Swam","Swum","Swims"], ans: "Swam" },
      { q: "Antonym of 'Quiet'?", opts: ["Silent","Noisy","Calm"], ans: "Noisy" }
    ]
  },
  social: {
    1: [ // Easy
      { q: "Capital of India?", opts: ["Delhi","Mumbai","Kolkata"], ans: "Delhi" },
      { q: "Father of Nation (India)?", opts: ["Nehru","Gandhi","Ambedkar"], ans: "Gandhi" },
      { q: "National animal of India?", opts: ["Tiger","Lion","Elephant"], ans: "Tiger" },
      { q: "Taj Mahal is in?", opts: ["Agra","Delhi","Mumbai"], ans: "Agra" },
      { q: "National bird of India?", opts: ["Sparrow","Peacock","Parrot"], ans: "Peacock" },
      { q: "Republic Day?", opts: ["26 Jan","15 Aug","2 Oct"], ans: "26 Jan" },
      { q: "National flower of India?", opts: ["Rose","Lily","Lotus"], ans: "Lotus" },
      { q: "Currency of India?", opts: ["Dollar","Rupee","Yen"], ans: "Rupee" },
      { q: "Largest state in India?", opts: ["UP","Rajasthan","MP"], ans: "Rajasthan" },
      { q: "National flag has how many colors?", opts: ["2","3","4"], ans: "3" }
    ],
    2: [ // Medium
      { q: "Who wrote Constitution of India?", opts: ["Ambedkar","Gandhi","Patel"], ans: "Ambedkar" },
      { q: "Independence Day?", opts: ["15 Aug","26 Jan","2 Oct"], ans: "15 Aug" },
      { q: "First Prime Minister?", opts: ["Nehru","Gandhi","Patel"], ans: "Nehru" },
      { q: "Smallest state in India?", opts: ["Goa","Sikkim","Tripura"], ans: "Goa" },
      { q: "Which is Union Territory?", opts: ["Delhi","UP","Bihar"], ans: "Delhi" },
      { q: "Who discovered India (sea route)?", opts: ["Columbus","Vasco da Gama","Magellan"], ans: "Vasco da Gama" },
      { q: "Which state is 'Land of Rising Sun'?", opts: ["Arunachal","Assam","Nagaland"], ans: "Arunachal" },
      { q: "Mahatma Gandhi born in?", opts: ["Gujarat","UP","Bihar"], ans: "Gujarat" },
      { q: "National game of India?", opts: ["Cricket","Hockey","Football"], ans: "Hockey" },
      { q: "Which festival called 'Festival of Lights'?", opts: ["Holi","Diwali","Eid"], ans: "Diwali" }
    ],
    3: [ // Hard
      { q: "Who was first President of India?", opts: ["Rajendra Prasad","Nehru","Patel"], ans: "Rajendra Prasad" },
      { q: "Which state is largest by population?", opts: ["UP","Bihar","Maharashtra"], ans: "UP" },
      { q: "In which year India got Independence?", opts: ["1945","1947","1950"], ans: "1947" },
      { q: "Which river is longest in India?", opts: ["Ganga","Yamuna","Brahmaputra"], ans: "Ganga" },
      { q: "Which state is 'God's Own Country'?", opts: ["Kerala","Tamil Nadu","Karnataka"], ans: "Kerala" },
      { q: "Who built Qutub Minar?", opts: ["Qutubuddin Aibak","Akbar","Shah Jahan"], ans: "Qutubuddin Aibak" },
      { q: "India became Republic in?", opts: ["1947","1950","1952"], ans: "1950" },
      { q: "First woman PM of India?", opts: ["Indira Gandhi","Sonia Gandhi","Sarojini Naidu"], ans: "Indira Gandhi" },
      { q: "Which country shares longest border with India?", opts: ["China","Bangladesh","Pakistan"], ans: "Bangladesh" },
      { q: "Which city is Pink City?", opts: ["Jaipur","Delhi","Agra"], ans: "Jaipur" }
    ]
  },
  punjabi: {
  1: [ // Easy
    { q: "ਪੰਜਾਬ ਦੀ ਰਾਜਧਾਨੀ?", opts: ["ਲੁਧਿਆਣਾ","ਚੰਡੀਗੜ੍ਹ","ਅੰਮ੍ਰਿਤਸਰ"], ans: "ਚੰਡੀਗੜ੍ਹ" },
    { q: "ਪੰਜਾਬ ਦਾ ਰਾਸ਼ਟਰੀ ਪੰਛੀ?", opts: ["ਮੋਰ","ਗੌਰੀਆ","ਕਬੂਤਰ"], ans: "ਮੋਰ" },
    { q: "ਪੰਜਾਬ ਦੀ ਰਾਜਭਾਸ਼ਾ?", opts: ["ਹਿੰਦੀ","ਪੰਜਾਬੀ","ਅੰਗ੍ਰੇਜ਼ੀ"], ans: "ਪੰਜਾਬੀ" },
    { q: "ਬੈਸਾਖੀ ਕਿਸ ਮਹੀਨੇ ਮਨਾਈ ਜਾਂਦੀ ਹੈ?", opts: ["ਅਪ੍ਰੈਲ","ਮਈ","ਜੂਨ"], ans: "ਅਪ੍ਰੈਲ" },
    { q: "ਪੰਜਾਬ ਦੀ ਮੁੱਖ ਫਸਲ?", opts: ["ਗਹੂੰ","ਚਾਹ","ਕਾਫੀ"], ans: "ਗਹੂੰ" },
    { q: "ਪੰਜਾਬ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਸ਼ਹਿਰ?", opts: ["ਲੁਧਿਆਣਾ","ਜਲੰਧਰ","ਅੰਮ੍ਰਿਤਸਰ"], ans: "ਲੁਧਿਆਣਾ" },
    { q: "ਪੰਜਾਬ ਦਾ ਮੁੱਖ ਨਾਚ?", opts: ["ਭੰਗੜਾ","ਕਥਕ","ਭਰਤਨਾਟਯਮ"], ans: "ਭੰਗੜਾ" },
    { q: "ਪੰਜਾਬ ਵਿੱਚ ਮੁੱਖ ਦਰਿਆ?", opts: ["ਸੱਤਲੁਜ","ਗੰਗਾ","ਯਮੁਨਾ"], ans: "ਸੱਤਲੁਜ" },
    { q: "ਪੰਜਾਬ ਦੀ ਸਭ ਤੋਂ ਮਸ਼ਹੂਰ ਖੇਡ?", opts: ["ਹਾਕੀ","ਫੁੱਟਬਾਲ","ਕਬੱਡੀ"], ans: "ਕਬੱਡੀ" },
    { q: "ਪੰਜਾਬ ਦੇ ਲੋਕ-ਨਾਚ?", opts: ["ਭੰਗੜਾ","ਗਿੱਧਾ","ਦੋਵੇਂ"], ans: "ਦੋਵੇਂ" }
  ],
  2: [ // Medium
    { q: "ਪੰਜਾਬ ਦੇ ਮੁੱਖ ਗੁਰੂ ਘਰ?", opts: ["ਹਰਿਮੰਦਰ ਸਾਹਿਬ","ਬਾਦਰੀਨਾਥ","ਜਗੰਨਾਥ"], ans: "ਹਰਿਮੰਦਰ ਸਾਹਿਬ" },
    { q: "ਪੰਜਾਬ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਜ਼ਿਲ੍ਹਾ?", opts: ["ਫਿਰੋਜ਼ਪੁਰ","ਮੋਗਾ","ਪਟਿਆਲਾ"], ans: "ਫਿਰੋਜ਼ਪੁਰ" },
    { q: "ਪੰਜਾਬ ਦਾ ਸਭ ਤੋਂ ਛੋਟਾ ਜ਼ਿਲ੍ਹਾ?", opts: ["ਮੋਹਾਲੀ","ਫ਼ਤਿਹਗੜ੍ਹ ਸਾਹਿਬ","ਮਾਨਸਾ"], ans: "ਫ਼ਤਿਹਗੜ੍ਹ ਸਾਹਿਬ" },
    { q: "ਪੰਜਾਬ ਦੀ ਮੁੱਖ ਭੋਜਨ?", opts: ["ਮੱਕੀ ਦੀ ਰੋਟੀ ਤੇ ਸਰੋਂ ਦਾ ਸਾਗ","ਦੋਸਾ","ਇਡਲੀ"], ans: "ਮੱਕੀ ਦੀ ਰੋਟੀ ਤੇ ਸਰੋਂ ਦਾ ਸਾਗ" },
    { q: "ਪੰਜਾਬ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਮੇਲਾ?", opts: ["ਹੋਲਾ ਮੋਹੱਲਾ","ਪੁਸ਼ਕਰ ਮੇਲਾ","ਕੁੰਭ ਮੇਲਾ"], ans: "ਹੋਲਾ ਮੋਹੱਲਾ" },
    { q: "ਪੰਜਾਬ ਦੇ ਪਹਿਲੇ ਮੁੱਖ ਮੰਤਰੀ?", opts: ["ਗੋਪੀ ਚੰਦ ਭਰਗਵ","ਪ੍ਰਕਾਸ਼ ਸਿੰਘ ਬਾਦਲ","ਬੇਅੰਤ ਸਿੰਘ"], ans: "ਗੋਪੀ ਚੰਦ ਭਰਗਵ" },
    { q: "ਪੰਜਾਬ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਖੇਡ ਮੈਦਾਨ?", opts: ["ਮੋਹਾਲੀ ਕ੍ਰਿਕਟ ਸਟੇਡੀਅਮ","ਏਡਨ ਗਾਰਡਨ","ਵਾਂਖੇਡੇ"], ans: "ਮੋਹਾਲੀ ਕ੍ਰਿਕਟ ਸਟੇਡੀਅਮ" },
    { q: "ਪੰਜਾਬ ਦਾ ਲੋਕ ਗੀਤ?", opts: ["ਟੱਪੇ","ਭਜਨ","ਕਾਵਿ"], ans: "ਟੱਪੇ" },
    { q: "ਪੰਜਾਬ ਦੇ ਕਿਸਾਨਾਂ ਦੀ ਮੁੱਖ ਆਮਦਨ?", opts: ["ਖੇਤੀਬਾੜੀ","ਦੁਕਾਨਦਾਰੀ","ਕੱਪੜੇ"], ans: "ਖੇਤੀਬਾੜੀ" },
    { q: "ਪੰਜਾਬ ਦੀ ਸਭ ਤੋਂ ਮਸ਼ਹੂਰ ਦਰਗਾਹ?", opts: ["ਰੌਜ਼ਾ ਸ਼ਰੀਫ਼","ਅਜਮੇਰ ਸ਼ਰੀਫ਼","ਹਜ਼ਰਤਬਾਲ"], ans: "ਰੌਜ਼ਾ ਸ਼ਰੀਫ਼" }
  ],
  3: [ // Hard
    { q: "ਪੰਜਾਬ ਵਿੱਚ ਦਰਿਆਵਾਂ ਦੀ ਗਿਣਤੀ?", opts: ["5","6","7"], ans: "5" },
    { q: "ਪੰਜਾਬ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਗੁਰਦੁਆਰਾ?", opts: ["ਹਰਿਮੰਦਰ ਸਾਹਿਬ","ਦੱਖਣੀ ਸਾਹਿਬ","ਬੰਗਲਾ ਸਾਹਿਬ"], ans: "ਹਰਿਮੰਦਰ ਸਾਹਿਬ" },
    { q: "ਪੰਜਾਬ ਵਿੱਚ 'ਦੋਆਬਾ' ਕਿਸਨੂੰ ਕਹਿੰਦੇ ਹਨ?", opts: ["ਦੋ ਦਰਿਆਵਾਂ ਵਿਚਕਾਰ ਦੀ ਧਰਤੀ","ਪਹਾੜੀ ਇਲਾਕਾ","ਰੇਗਿਸਤਾਨ"], ans: "ਦੋ ਦਰਿਆਵਾਂ ਵਿਚਕਾਰ ਦੀ ਧਰਤੀ" },
    { q: "ਪੰਜਾਬ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਉਦਯੋਗ?", opts: ["ਟੈਕਸਟਾਈਲ","ਖੇਤੀਬਾੜੀ ਮਸ਼ੀਨਰੀ","ਆਈਟੀ"], ans: "ਟੈਕਸਟਾਈਲ" },
    { q: "ਪੰਜਾਬ ਦਾ ਮੁੱਖ ਸਿੱਖਿਆ ਬੋਰਡ?", opts: ["PSEB","CBSE","ICSE"], ans: "PSEB" },
    { q: "ਪੰਜਾਬ ਦਾ ਸਭ ਤੋਂ ਮਸ਼ਹੂਰ ਕਵੀ?", opts: ["ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ","ਰਬਿੰਦਰਨਾਥ ਟੈਗੋਰ","ਸੂਰਦਾਸ"], ans: "ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ" },
    { q: "ਪੰਜਾਬ ਵਿੱਚ 'ਮਾਲਵਾ' ਕਿਸ ਖੇਤਰ ਨੂੰ ਕਹਿੰਦੇ ਹਨ?", opts: ["ਦੱਖਣੀ ਪੰਜਾਬ","ਪੂਰਬੀ ਪੰਜਾਬ","ਪੱਛਮੀ ਪੰਜਾਬ"], ans: "ਦੱਖਣੀ ਪੰਜਾਬ" },
    { q: "ਪੰਜਾਬ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਤਿਉਹਾਰ?", opts: ["ਬੈਸਾਖੀ","ਹੋਲੀ","ਦੀਵਾਲੀ"], ans: "ਬੈਸਾਖੀ" },
    { q: "ਪੰਜਾਬ ਦਾ ਸਭ ਤੋਂ ਮਸ਼ਹੂਰ ਯੋਧਾ?", opts: ["ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ","ਸ਼ਿਵਾਜੀ","ਅਕਬਰ"], ans: "ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ" },
    { q: "ਪੰਜਾਬ ਦੀ ਸਭ ਤੋਂ ਪੁਰਾਣੀ ਯੂਨੀਵਰਸਿਟੀ?", opts: ["ਪੰਜਾਬ ਯੂਨੀਵਰਸਿਟੀ, ਲਾਹੌਰ","ਦਿੱਲੀ ਯੂਨੀਵਰਸਿਟੀ","ਬਨਾਰਸ ਯੂਨੀਵਰਸਿਟੀ"], ans: "ਪੰਜਾਬ ਯੂਨੀਵਰਸਿਟੀ, ਲਾਹੌਰ" }
  ]
}

};

let currentSubject = "";
let currentLevel = 1;

function resetSubject() {
  currentSubject = document.getElementById("subjectSelect").value;
  currentLevel = 1;
  loadQuiz();
}

function loadQuiz() {
  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = "";

  if (!currentSubject || !quizData[currentSubject][currentLevel]) {
    quizDiv.innerHTML = "<p>Please select a subject to start quiz.</p>";
    return;
  }

  quizDiv.innerHTML = `<h3>${capitalize(currentSubject)} - Level ${currentLevel}</h3>`;
  quizData[currentSubject][currentLevel].forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "question-block";
    div.innerHTML = `<p>${i + 1}. ${q.q}</p>` +
      q.opts.map(opt =>
        `<label><input type="radio" name="q${i}" value="${opt}"> ${opt}</label><br>`
      ).join("");
    quizDiv.appendChild(div);
  });

  document.getElementById("result").innerText = "";
  document.getElementById("nextLevel").style.display = "none";
}

function submitQuiz() {
  let score = 0;
  const questions = quizData[currentSubject][currentLevel];
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === q.ans) score++;
  });

  const percent = Math.round((score / questions.length) * 100);
  document.getElementById("result").innerText =
    `You scored ${score}/${questions.length} (${percent}%)`;

  if (percent >= 70 && quizData[currentSubject][currentLevel + 1]) {
    document.getElementById("nextLevel").style.display = "inline-block";
  }
}

function loadNextLevel() {
  currentLevel++;
  loadQuiz();
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function submitQuiz() {
  let score = 0;
  const questions = quizData[currentSubject][currentLevel];
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === q.ans) score++;
  });

  const percent = Math.round((score / questions.length) * 100);
  document.getElementById("result").innerText =
    `You scored ${score}/${questions.length} (${percent}%)`;

  localStorage.setItem(
    `progress_${currentSubject}`,
    JSON.stringify({ level: currentLevel, score: percent })
  );

  if (percent >= 70 && quizData[currentSubject][currentLevel + 1]) {
    document.getElementById("nextLevel").style.display = "inline-block";
  }
}
localStorage.setItem('studentData',
  JSON.stringify({
   name:name,
   class:studentClass,
   school:school 
  }));
