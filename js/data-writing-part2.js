const writingPart2OldData = [
    {
        id: 'wp2_travel_club',
        title: 'Chủ đề 1: Travel Club',
        question: "Why are you interested in travel?",
        sampleAnswer: "I love travel because it opens my mind to new cultures, experiences, and people. Travel makes me happy and curious. I want to see the world and learn from it."
    },
    {
        id: 'wp2_home_living_club',
        title: 'Chủ đề 2: Home Living Club',
        question: "Describe where you live",
        sampleAnswer: "I live in Ho Chi Minh City, the largest and most populous city in Vietnam. It is a busy and lively place with many cultural and historical attractions. I enjoy the diversity and energy of this city."
    },
    {
        id: 'wp2_science_club',
        title: 'Chủ đề 3: Science Club',
        question: "Do you like Science? Why?",
        sampleAnswer: "Yes. I am really interested in science because it helps me understand the world around me. For example, science gives me a better understanding of the planets."
    },
    {
        id: 'wp2_food_club_lunch',
        title: 'Chủ đề 4: Food Club - Lunch',
        question: "What did you have for lunch yesterday and where did you eat it?",
        sampleAnswer: "I had grilled pork with broken rice (cơm tấm thịt nướng) for lunch yesterday. I enjoyed it at a local Vietnamese restaurant near my office. The tender meat and fragrant rice made for a delicious and filling meal."
    },
    {
        id: 'wp2_food_club_breakfast',
        title: 'Chủ đề 5: Food Club - Breakfast',
        question: "What do you usually eat for breakfast and when do you eat it?",
        sampleAnswer: "I like to eat Banh mi for breakfast. It is a Vietnamese sandwich with meat, vegetables and sauce. I usually eat it around 8 a.m., before I go to work. It is delicious and filling."
    },
    {
        id: 'wp2_language_club_usage',
        title: 'Chủ đề 6: Language Club',
        question: "In which cases do you often use foreign languages?",
        sampleAnswer: "I use foreign languages when I travel, watch movies, read books, or chat online. I like learning new words and cultures. It's fun and useful."
    },
    {
        id: 'wp2_walking_club_when_where',
        title: 'Chủ đề 7: Walking Club - When and where',
        question: "When and where you like to walk?",
        sampleAnswer: "I like to walk in the park on sunny days. It is relaxing and fun. I enjoy the fresh air and the nature. I walk for about an hour."
    },
    {
        id: 'wp2_walking_club_last_time',
        title: 'Chủ đề 8: Walking Club - Last time',
        question: "Tell about the last time you went for a long walk.",
        sampleAnswer: "I enjoy walking for exercise and relaxation. The last time I went for a long walk was two weeks ago. I walked around the park for an hour and admired the scenery and the fresh air."
    },
    {
        id: 'wp2_garden_club_join',
        title: 'Chủ đề 9: Garden Club',
        question: "Why did you join the club?",
        sampleAnswer: "I joined the garden club because I have always enjoyed spending time outdoors, and I want to learn more about gardening. I think it will be fun to meet new people who share similar interests and exchange gardening tips."
    },
    {
        id: 'wp2_travel_by_car',
        title: 'Chủ đề 10: Travel by car',
        question: "Do you usually travel by car?",
        sampleAnswer: "Yes, I usually travel by car, especially when I go to work or take short trips. It's more convenient and saves time compared to public transportation. I also enjoy the flexibility of stopping wherever I want."
    },
    {
        id: 'wp2_free_time_interests',
        title: 'Chủ đề 11: Free time and interests',
        question: "Tell me your free time and interests.",
        sampleAnswer: "In my free time, I enjoy listening to music, especially pop and rock. I also like reading books and watching movies, particularly action and thriller genres. Additionally, I like to spend time with my friends, going out and exploring new places."
    },
    {
        id: 'wp2_book_club_keep_books',
        title: 'Chủ đề 12: Book Club - Keeping books',
        question: "Where do you keep all your books in your home?",
        sampleAnswer: "I have a lot of books in my home. I keep them in different places. Some are on shelves, some are in boxes, and some are under my bed. I like to read everywhere, so I always have a book nearby."
    },
    {
        id: 'wp2_reading_club_last_book',
        title: 'Chủ đề 13: Reading Club - Last book',
        question: "Tell me about the last book or story you read.",
        sampleAnswer: "The last story I read was about Doraemon, a blue robot cat from the future. He uses his magical gadgets to help Nobita, a young boy, with everyday problems and adventures. It's fun and heartwarming!"
    },
    {
        id: 'wp2_photography_club',
        title: 'Chủ đề 14: Photography Club',
        question: "What is your favorite time and place to take pictures?",
        sampleAnswer: "I love taking pictures in the morning at the park. The light is soft and the flowers are fresh. I enjoy capturing the beauty of nature and the people there."
    },
    {
        id: 'wp2_outdoor_club',
        title: 'Chủ đề 15: Outdoor Club',
        question: "Which outdoor activities do you like? Why?",
        sampleAnswer: "I enjoy hiking and camping because I love being in nature. It's relaxing, and I like the challenge of exploring new places. It's a great way to stay active and enjoy the outdoors."
    },
    {
        id: 'wp2_course_attendance',
        title: 'Chủ đề 16: Course Attendance',
        question: "Please tell us about the days and times you can attend courses and what subject do you like to study?",
        sampleAnswer: "I can attend this course on Friday; the most reasonable time is from 5 p.m. to 7 p.m. I like studying speaking and listening skills because I want to improve them to get high marks in the exams."
    }
];

const writingPart2NewData = [
    {
        id: 'wp2_art_club',
        title: 'Chủ đề 1 – ART CLUB',
        question: "Tell me about a painting or a photo that you like.",
        sampleAnswer: "I like a photo of my family because it is very beautiful. It makes me feel happy and reminds me of good memories."
    },
    {
        id: 'wp2_art_club_new',
        title: 'Chủ đề 2 – ART CLUB (New)',
        question: "Tell me about the last time you drew a picture.",
        sampleAnswer: "The last time I drew a picture was last week. I drew it at home with my close friends. It was a very relaxing and enjoyable time."
    },
    {
        id: 'wp2_beautiful_homes_club',
        title: 'Chủ đề 3 – BEAUTIFUL HOMES CLUB',
        question: "Why do you want to join the Beautiful Homes Club?",
        sampleAnswer: "I want to join the Beautiful Homes Club because I love beautiful houses and I want to meet people who share the same hobby."
    },
    {
        id: 'wp2_book_club',
        title: 'Chủ đề 4 – BOOK CLUB',
        questions: [
            {
                question: "What do you often do in your free time?",
                sampleAnswer: "In my free time, I usually play badminton with my friends because it is fun and good for my health. It helps me relax and reduce stress after a hard-working day."
            },
            {
                question: "Please tell me about the last time you bought a book.",
                sampleAnswer: "The last time I bought a book was last week. I went to a bookstore with my close friends. It was a very relaxing and enjoyable time."
            }
        ],
        question: "1. What do you often do in your free time?\n2. Please tell me about the last time you bought a book.",
        sampleAnswer: "Câu 1: In my free time, I usually play badminton with my friends because it is fun and good for my health. It helps me relax and reduce stress after a hard-working day.\n\nCâu 2: The last time I bought a book was last week. I went to a bookstore with my close friends. It was a very relaxing and enjoyable time."
    },
    {
        id: 'wp2_book_club_new',
        title: 'Chủ đề 5 – BOOK CLUB (New)',
        question: "Please tell us about the days and times you can come for meetings and books you would like to discuss.",
        sampleAnswer: "I can come to meetings on the weekends from 8 a.m. to 10 a.m. I would like to discuss English books because they are very interesting."
    },
    {
        id: 'wp2_business_club',
        title: 'Chủ đề 6 – BUSINESS CLUB',
        question: "Where do you usually go shopping?",
        sampleAnswer: "I usually go shopping at the supermarket near my house. It is very convenient and I can buy everything I need."
    },
    {
        id: 'wp2_car_club',
        title: 'Chủ đề 7 – CAR CLUB',
        question: "Do you usually travel by car?",
        sampleAnswer: "Yes, I usually travel by car with my friend because it is convenient and comfortable. It helps me feel relaxed after a hard-working day."
    },
    {
        id: 'wp2_cinema_club',
        title: 'Chủ đề 8 – CINEMA CLUB',
        question: "When and how often do you watch movies?",
        sampleAnswer: "I usually watch movies on the weekends. I watch them once a week because they help me relax after a hard-working day."
    },
    {
        id: 'wp2_college_club',
        title: 'Chủ đề 9 – COLLEGE CLUB',
        question: "Please tell us about the days and times you can attend courses and what you would like to study.",
        sampleAnswer: "I can attend courses on the weekends from 8 a.m. to 10 a.m. I would like to study English because it is very useful."
    },
    {
        id: 'wp2_community_club',
        title: 'Chủ đề 10 – COMMUNITY CLUB',
        question: "Describe where you live.",
        sampleAnswer: "I live in Tuyen Quang City, in the city centre. It is very peaceful and has everything I need. I really love living there."
    },
    {
        id: 'wp2_community_club_v2',
        title: 'Chủ đề 11 – COMMUNITY CLUB (Version 2)',
        question: "Tell me about a famous area where you live.",
        sampleAnswer: "There is a famous park in my city. It is very beautiful and many people like to visit it on the weekends."
    },
    {
        id: 'wp2_computer_club',
        title: 'Chủ đề 12 – COMPUTER CLUB',
        question: "When and where do you usually use a computer?",
        sampleAnswer: "I usually use a computer in my room in the evening. It helps me study and do my homework."
    },
    {
        id: 'wp2_debate_club',
        title: 'Chủ đề 13 – DEBATE CLUB',
        question: "What do you usually talk about with your friends?",
        sampleAnswer: "I usually talk about school, sports and daily life with my friends. It is interesting and helps us understand each other better."
    },
    {
        id: 'wp2_design_club',
        title: 'Chủ đề 14 – DESIGN CLUB',
        question: "Why are you interested in design?",
        sampleAnswer: "I am interested in design because it is very creative. It helps me learn new ideas and improve my skills."
    },
    {
        id: 'wp2_english_club',
        title: 'Chủ đề 15 – ENGLISH CLUB',
        question: "What do you usually use the internet for?",
        sampleAnswer: "I usually use the internet to study English and watch videos. It helps me improve my knowledge every day."
    },
    {
        id: 'wp2_fashion_club',
        title: 'Chủ đề 16 – FASHION CLUB',
        question: "When was the last time you went shopping for clothes?",
        sampleAnswer: "The last time I went shopping for clothes was last week. I went to a shopping mall with my close friends. It was a very relaxing and enjoyable time."
    },
    {
        id: 'wp2_film_club',
        title: 'Chủ đề 17 – FILM CLUB',
        questions: [
            {
                question: "When and where do you watch movies?",
                sampleAnswer: "I usually watch movies at the cinema on the weekends. It helps me relax and reduce stress after a hard-working day."
            },
            {
                question: "Please write some of your favourite films.",
                sampleAnswer: "My favourite films are Tom and Jerry, Avatar and Frozen. They are very interesting and enjoyable."
            }
        ],
        question: "1. When and where do you watch movies?\n2. Please write some of your favourite films.",
        sampleAnswer: "Câu 1: I usually watch movies at the cinema on the weekends. It helps me relax and reduce stress after a hard-working day.\n\nCâu 2: My favourite films are Tom and Jerry, Avatar and Frozen. They are very interesting and enjoyable."
    },
    {
        id: 'wp2_fitness_club',
        title: 'Chủ đề 18 – FITNESS CLUB',
        question: "Please talk about the last time you went for a run.",
        sampleAnswer: "The last time I went for a run was last week. I ran in the park with my close friends. It was a very relaxing and enjoyable time."
    },
    {
        id: 'wp2_food_club',
        title: 'Chủ đề 19 – FOOD CLUB',
        question: "When and where do you usually have meals?",
        sampleAnswer: "I usually have meals at home with my family. We often eat together at about 7 p.m. every day."
    },
    {
        id: 'wp2_gardening_club',
        title: 'Chủ đề 20 – GARDENING CLUB',
        question: "Why did you join the club?",
        sampleAnswer: "I joined the gardening club because gardening is very interesting. It helps me relax and reduce stress after a hard-working day."
    },
    {
        id: 'wp2_health_club',
        title: 'Chủ đề 21 – HEALTH CLUB',
        question: "Tell me the classes you want to take and what times and days are suitable for you.",
        sampleAnswer: "I want to take fitness classes. I can attend classes on the weekends from 8 a.m. to 10 a.m. It is good for my health."
    },
    {
        id: 'wp2_home_living_club',
        title: 'Chủ đề 22 – HOME LIVING CLUB',
        question: "Describe where you live.",
        sampleAnswer: "I live in Tuyen Quang City, in the city centre. It is very peaceful and has everything I need. I really love living there."
    },
    {
        id: 'wp2_language_club',
        title: 'Chủ đề 23 – LANGUAGE CLUB',
        question: "Tell me about your free time and interests.",
        sampleAnswer: "In my free time, I usually play badminton with my friends because it is fun and good for my health. It helps me relax and reduce stress after a hard-working day."
    },
    {
        id: 'wp2_museum_club',
        title: 'Chủ đề 24 – MUSEUM CLUB',
        question: "Please tell me about the last time you went to a museum.",
        sampleAnswer: "The last time I went to a museum was last week. I went there with my close friends. It was a very relaxing and enjoyable time."
    },
    {
        id: 'wp2_music_club',
        title: 'Chủ đề 25 – MUSIC CLUB',
        question: "When and where do you usually listen to music?",
        sampleAnswer: "I usually listen to music in my room on the weekends. It helps me relax and reduce stress after a hard-working day."
    },
    {
        id: 'wp2_nature_club',
        title: 'Chủ đề 26 – NATURE CLUB',
        question: "Please tell me about your free time and hobbies.",
        sampleAnswer: "In my free time, I usually play badminton with my friends because it is fun and good for my health. It helps me relax and reduce stress after a hard-working day."
    },
    {
        id: 'wp2_outdoor_club',
        title: 'Chủ đề 27 – OUTDOOR CLUB',
        question: "Which outdoor activities do you like?",
        sampleAnswer: "I like playing badminton because it is fun and good for my health. It helps me relax and reduce stress after a hard-working day."
    },
    {
        id: 'wp2_photography_club',
        title: 'Chủ đề 28 – PHOTOGRAPHY CLUB',
        questions: [
            {
                question: "Please tell me the last time you took a picture.",
                sampleAnswer: "The last time I took a picture was last week. I took it in the park with my close friends. It was a very relaxing and enjoyable time."
            },
            {
                question: "What is your favorite time and place to take pictures?",
                sampleAnswer: "I like to take pictures in the park. I usually take pictures on the weekends from 8 a.m. to 10 a.m. It helps me relax and reduce stress after a hard-working day."
            }
        ],
        question: "1. Please tell me the last time you took a picture.\n2. What is your favorite time and place to take pictures?",
        sampleAnswer: "Câu 1: The last time I took a picture was last week. I took it in the park with my close friends. It was a very relaxing and enjoyable time.\n\nCâu 2: I like to take pictures in the park. I usually take pictures on the weekends from 8 a.m. to 10 a.m. It helps me relax and reduce stress after a hard-working day."
    },
    {
        id: 'wp2_science_club',
        title: 'Chủ đề 29 – SCIENCE CLUB',
        question: "Why do you like science?",
        sampleAnswer: "I like science because it is very interesting. It helps me learn many new things and improve my knowledge."
    },
    {
        id: 'wp2_social_club',
        title: 'Chủ đề 30 – SOCIAL CLUB',
        questions: [
            {
                question: "Tell me about your best friend.",
                sampleAnswer: "My best friend is very kind and friendly. We often study and play badminton together. I enjoy spending time with him."
            },
            {
                question: "Why did you decide to join the club?",
                sampleAnswer: "I decided to join this club because meeting new people is very interesting. It helps me improve my communication skills."
            }
        ],
        question: "1. Tell me about your best friend.\n2. Why did you decide to join the club?",
        sampleAnswer: "Câu 1: My best friend is very kind and friendly. We often study and play badminton together. I enjoy spending time with him.\n\nCâu 2: I decided to join this club because meeting new people is very interesting. It helps me improve my communication skills."
    },
    {
        id: 'wp2_sports_club',
        title: 'Chủ đề 31 – SPORTS CLUB',
        question: "Why did you decide to join the club?",
        sampleAnswer: "I decided to join this club because sports are very interesting and good for my health. It helps me relax and reduce stress after a hard-working day."
    },
    {
        id: 'wp2_technology_club',
        title: 'Chủ đề 32 – TECHNOLOGY CLUB',
        question: "What do you usually use your laptop for?",
        sampleAnswer: "I usually use my laptop to study, watch videos and search for information. It helps me improve my knowledge every day."
    },
    {
        id: 'wp2_television_club',
        title: 'Chủ đề 33 – TELEVISION CLUB',
        question: "Do you usually watch TV?",
        sampleAnswer: "Yes, I usually watch TV in the evening. It helps me relax and reduce stress after a hard-working day."
    },
    {
        id: 'wp2_travel_club_questions',
        title: 'Chủ đề 34 – TRAVEL CLUB',
        questions: [
            {
                question: "Why are you interested in travel?",
                sampleAnswer: "I am interested in travel because it is very interesting. It helps me relax and reduce stress after a hard-working day."
            },
            {
                question: "Tell me a place you often visit.",
                sampleAnswer: "I often visit the park on the weekends. It is very peaceful and helps me relax after a hard-working day."
            }
        ],
        question: "1. Why are you interested in travel?\n2. Tell me a place you often visit.",
        sampleAnswer: "Câu 1: I am interested in travel because it is very interesting. It helps me relax and reduce stress after a hard-working day.\n\nCâu 2: I often visit the park on the weekends. It is very peaceful and helps me relax after a hard-working day."
    },
    {
        id: 'wp2_travel_club_new',
        title: 'Chủ đề 35 – TRAVEL CLUB (New)',
        question: "When do you use public transport?",
        sampleAnswer: "I usually use public transport when I go to school or travel around the city. It is convenient and helps me save money."
    },
    {
        id: 'wp2_walking_club',
        title: 'Chủ đề 36 – WALKING CLUB',
        question: "Tell me about the last time you went for a walk.",
        sampleAnswer: "The last time I went for a walk was last week. I walked in the park with my close friends. It was a very relaxing and enjoyable time."
    }
];

// Fallback for backwards compatibility
const writingPart2Data = writingPart2NewData;
