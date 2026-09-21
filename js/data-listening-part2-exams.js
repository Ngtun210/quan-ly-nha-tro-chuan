const listeningPart2Exams = [
    {
        "id": 1,
        "name": "Đề 1: Protecting the environment (Electricity, Driving, Shopping, Water)",
        "prompt": "Four people are talking about protecting the environment. Match each person to the correct information.",
        "speakers": {
            "A": "protects the environment by using less electricity.",
            "B": "protects the environment by not driving to work.",
            "C": "protects the environment by shopping online.",
            "D": "protects the environment by using less water."
        },
        "distractors": [
            "protects the environment by cycling.",
            "protects the environment by recycling bottles."
        ],
        "script": {
            "A": "In our house the war is against the meter on the wall. Lights off the second a room empties, the washing machine only runs full, and we swapped every bulb for the efficient kind. My son even unplugs the chargers at night because, he says, they drink secretly in the dark. Our bills have almost halved, and I like to think the power station burns a little less because of our small savings.",
            "B": "I made one big decision last spring: the car stays in the garage on weekdays. I take the number forty-two to the office instead, rain or shine. It adds fifteen minutes each way, and I read on the top deck, so honestly I have gained time rather than lost it. One less engine crawling through the morning jam — that is my contribution, and my head arrives at work calmer too.",
            "C": "Mine will sound lazy, but hear me out: I do almost all my buying from the sofa. One delivery van serving my whole street replaces forty separate trips to the shopping centre — forty engines, forty parking circles. I group my orders so everything comes in one box, once a week. My neighbour teases me about it, but I think my armchair habit is greener than her Saturday drive to the mall.",
            "D": "My obsession is the tap. Short showers with a timer, a bowl in the sink for washing vegetables, and that bowl then feeds the garden. I fixed the dripping bathroom tap the day I read how many litres it wastes in a year — the number shocked me. My children think I am strict about it, and I am. Clean water is the thing we will miss first, so every drop I keep matters."
        },
        "explanation": "A = using less electricity (PARAPHRASE: 'war against the meter... lights off... bills halved').\nB = not driving to work (PARAPHRASE: 'the car stays in the garage on weekdays... number forty-two to the office').\nC = shopping online (keyword 'buying from the sofa... orders... one box').\nD = using less water (keyword 'tap... short showers... every drop').\nNhiễu: cycling, recycling bottles."
    },
    {
        "id": 2,
        "name": "Đề 2: Protecting the environment (Giving away, Eco products, Reusing containers, Cleaning)",
        "prompt": "Four people are talking about protecting the environment. Match each person to the correct information.",
        "speakers": {
            "A": "give away used items",
            "B": "buy environmentally friendly products",
            "C": "reuse containers for storing food",
            "D": "not buy commercial cleaning products"
        },
        "distractors": [
            "recycle waste",
            "use public transport"
        ],
        "script": {
            "A": "My rule is simple: nothing usable leaves this house in a rubbish bag. The clothes my sons outgrow go to the church collection, the old bookshelf went to a student down the road, and my ancient laptop now lives at the community centre. Last month a young couple collected our spare bed within an hour of my posting it. Watching things start a second life in someone else's home feels far better than watching a skip swallow them.",
            "B": "I read labels the way detectives read clues. Before anything enters my basket, I check where it was made, what the packaging is, whether the company behaves itself. I pay a little more for washing liquid that rivers can forgive and coffee that farmers were fairly paid for. My husband groans at how long shopping takes, but every purchase is a small vote, and I intend to vote well.",
            "C": "In my kitchen, nothing with a lid gets thrown away. The big yoghurt pots hold my soup portions in the freezer, glass jars keep the rice and lentils, and the ice-cream tubs — washed, of course — carry my lunches to work. My cupboard looks like a museum of old packaging, I admit. But I have not bought a plastic box in six years, and my leftovers never see a rubbish bin.",
            "D": "I stopped trusting those bright bottles under the sink years ago. Vinegar and baking soda handle my kitchen, lemon juice brightens the taps, and the floors get plain hot water with a drop of olive soap. The chemical sprays with their skull warnings have not entered this flat since my daughter was born. My windows shine just as well, and the air in here smells of lemons instead of a laboratory."
        },
        "explanation": "A = give away used items (PARAPHRASE: 'second life in someone else\\'s home' — cho đồ cũ).\nB = buy environmentally friendly products (PARAPHRASE: 'washing liquid that rivers can forgive... every purchase is a small vote').\nC = reuse containers for storing food (keyword 'pots hold... jars keep... carry my lunches').\nD = not buy commercial cleaning products (keyword 'bright bottles... chemical sprays... not entered this flat').\nNhiễu: recycle waste, public transport."
    },
    {
        "id": 3,
        "name": "Đề 3: Protecting the environment (No cleaning chemicals, Donating, Eco labels, Jar storage)",
        "prompt": "Four people are talking about protecting the environment. Match each person to the correct information.",
        "speakers": {
            "A": "Does not use commercial cleaning products",
            "B": "Give away used items",
            "C": "Buy environmentally friendly products",
            "D": "Reuse containers for storing food"
        },
        "distractors": [
            "Walk instead of driving",
            "Use reusable bags"
        ],
        "script": {
            "A": "Open my cleaning cupboard and you will find exactly four things: white vinegar, baking soda, a block of plain soap and old cloths cut from worn-out shirts. The supermarket sprays with their skulls and warnings left this house when my asthma got worse, and honestly, nothing has been dirtier since. My mother-in-law inspects my kitchen on every visit hoping to win the argument. Five years running, the vinegar is still champion.",
            "B": "My loft was a museum of forgotten things until last spring. Now there is a rule: whatever we no longer use must find a new owner within the month. The children's bicycles went to the refugee centre, my old tools to the young man fixing up the house opposite, and four boxes of books to the hospital library. Selling never crossed my mind — watching the neighbour's boy ride off on my son's old bike paid better than money.",
            "C": "I have become that person who studies packaging in the supermarket aisle. If the label cannot tell me the cotton was grown responsibly or the paper came from managed forests, the product stays on the shelf. My weekly shop takes twice as long and costs a little extra, but my basket is my ballot paper. Companies count every purchase, so I make every purchase say something.",
            "D": "Nothing that once held food gets binned in my kitchen. The tall pasta jars now organise my whole pantry, margarine tubs stack in the freezer full of portioned stews, and the biscuit tins carry cakes to every school fair in the district. My wife jokes that our shelves are a graveyard of other products' packaging. Perhaps — but we have not bought storage boxes in a decade, and our food waste fits in a teacup."
        },
        "explanation": "A = Does not use commercial cleaning products (PARAPHRASE: 'supermarket sprays... left this house... vinegar is champion').\nB = Give away used items (PARAPHRASE: 'find a new owner... paid better than money').\nC = Buy environmentally friendly products (keyword-lite 'grown responsibly... managed forests').\nD = Reuse containers for storing food (keyword 'jars organise my pantry... tubs... tins').\nNhiễu: walk instead of driving, reusable bags."
    },
    {
        "id": 4,
        "name": "Đề 4: Protecting the environment (Shopping delivery, Transit, Power, Water meter)",
        "prompt": "Four people are talking about protecting the environment. Match each person to the correct information.",
        "speakers": {
            "A": "Shopping online",
            "B": "Not driving to work",
            "C": "Using less electricity",
            "D": "Using less water"
        },
        "distractors": [
            "Planting trees",
            "Recycling bottles"
        ],
        "script": {
            "A": "People are surprised when I call my armchair shopping an environmental habit, but do the sums with me. My orders arrive in one van that serves the whole neighbourhood — one engine replacing the thirty cars that would each have driven to the retail park and circled for parking. I batch everything into a single weekly delivery, so no extra trips, no impulse petrol. My sister burns a litre of fuel to buy a toothbrush; my toothbrush shares a van with her street's groceries.",
            "B": "My car has learned to live without me on weekdays. Since March I catch the six-fifty into the centre — no fuel burned in my name, no half hour hunting for parking, and the queue of single-driver cars I sail past confirms my choice every morning. My colleagues thought the novelty would wear off before summer. Instead my car now spends its weekdays under a cover, and the planet and my wallet both breathe easier.",
            "C": "My electricity meter used to spin like a fan; now it crawls, and that is my proudest achievement this year. Every lamp in the house went low-energy, the heating drops two degrees at night, and the television no longer sleeps with one glowing eye — everything goes off at the wall. My teenagers complained for a week, then turned it into a competition. Last month's usage was barely half of last year's.",
            "D": "In my bathroom hangs a four-minute hourglass, and the family showers race it. The washing-up happens in a basin, never under a running stream, and the rinsing water ends its life in my flowerpots. I fitted the little flow-savers on every tap the day the utility report showed what an average family pours away. My children think I am obsessed. I tell them: electricity can be made tomorrow, but the well does not refill on demand."
        },
        "explanation": "A = Shopping online (PARAPHRASE: 'armchair shopping... orders... single weekly delivery').\nB = Not driving to work (PARAPHRASE: 'car has learned to live without me... catch the six-fifty').\nC = Using less electricity (keyword-lite 'electricity meter... low-energy... usage half').\nD = Using less water (keyword-lite 'showers race it... running stream... well').\nNhiễu: planting trees, recycling bottles."
    },
    {
        "id": 5,
        "name": "Đề 5: Doing exercise (Enemy of sport, Morning swim, Heavy collapse, Classmates fun)",
        "prompt": "Four people are talking about doing exercise. Match each person to the correct information.",
        "speakers": {
            "A": "hate exercising",
            "B": "help improve work performance",
            "C": "find exercise tiring",
            "D": "has fun when exercising with friends"
        },
        "distractors": [
            "exercise to lose weight",
            "prefer exercising alone"
        ],
        "script": {
            "A": "Let me be the villain of this recording: sport and I are enemies, and we always have been. School athletics scarred me for life — the whistle, the shouting, the cold mud. As an adult I have politely tried yoga, tennis and one horrifying spinning class, and I walked out of each one certain of my truth. Some people were built to move; I was built to sit in a warm café watching them through the window.",
            "B": "I never cared about sport until my job nearly broke me. Endless reports, afternoon headaches, a brain like wet paper by Thursday. My doctor prescribed movement instead of pills, and the change shocked me: three morning swims a week, and suddenly my reports finish before lunch and my ideas queue up politely instead of hiding. My manager keeps asking what changed. The swimming pool changed, I tell her — everything else followed.",
            "C": "I admire people who bounce out of the gym glowing. My experience is the opposite: halfway through any session, my arms resign, my legs file complaints, and the last ten minutes happen in slow motion. Afterwards I do not glow — I collapse. Friends insist that one day the heaviness turns into energy. I have given it two years; the heaviness has only learned my name.",
            "D": "For me the magic ingredient is company. Saturday football with my old classmates, evening badminton with the people from my building — we play badly and laugh loudly, and that is exactly the point. Once, when everyone was away, I tried exercising by myself and quit in fifteen minutes from pure boredom. Put my friends on the court, though, and I will happily chase a ball until midnight."
        },
        "explanation": "A = hate exercising (PARAPHRASE: 'sport and I are enemies... walked out certain of my truth').\nB = help improve work performance (PARAPHRASE: 'reports finish before lunch... ideas queue up').\nC = find exercise tiring (keyword-lite 'heaviness... collapse... slow motion').\nD = has fun when exercising with friends (keyword 'with my old classmates... laugh loudly').\nNhiễu: lose weight, alone."
    },
    {
        "id": 6,
        "name": "Đề 6: Doing exercise (Bicycle rusts, Office sport, Lung negotiations, Friendly runs)",
        "prompt": "Four people are talking about doing exercise. Match each person to the correct information.",
        "speakers": {
            "A": "hate exercising",
            "B": "help improve work performance",
            "C": "find exercise tiring",
            "D": "has fun when exercising with friends"
        },
        "distractors": [
            "exercise to lose weight",
            "prefer exercising alone"
        ],
        "script": {
            "A": "I have made my peace with an unpopular truth: physical activity and I were never meant to be together. The bicycle my wife bought me rusts elegantly in the garage, the yoga mat became the cat's bed, and my single visit to her aerobics class is a story her friends still request at parties. I have stopped apologising. My heart belongs to slow breakfasts and crossword puzzles, and it is very happy there.",
            "B": "Sport entered my life through the office door, oddly enough. Our director introduced walking meetings and lunchtime badminton, and within a month I noticed the difference at my desk: the afternoon fog lifted, my proposals came out cleaner, and I stopped rereading the same paragraph four times. Now I guard my lunchtime game like an appointment with a client. Whatever it costs in sweat, it repays in finished work.",
            "C": "Every trainer I have ever had says the same thing: it gets easier. It does not. Twenty minutes into any class, my lungs demand negotiations, my legs vote to go home, and the mirror shows a tomato in sportswear. I complete every session — pride insists — but I complete it the way one completes a tax return: slowly, painfully, and with relief that it is over for another week.",
            "D": "The trick nobody told me for years: bring your people. My cousin and I turned our runs into gossip sessions, my old classmates and I have a Sunday football ritual that ends in a noisy café, and even the neighbours join our badminton evenings now. Surrounded by friendly faces, two hours of sport disappear like ten minutes. Alone, I would not last one lap of the park — together, we forget to stop."
        },
        "explanation": "A = hate exercising (PARAPHRASE: 'never meant to be together... stopped apologising').\nB = help improve work performance (PARAPHRASE: 'afternoon fog lifted... repays in finished work').\nC = find exercise tiring (PARAPHRASE: 'lungs demand negotiations... tomato in sportswear').\nD = has fun when exercising with friends (keyword 'with friendly faces... together').\nNhiễu: lose weight, alone."
    },
    {
        "id": 7,
        "name": "Đề 7: Doing exercise (Closing deals, Empties tank, Badminton jokes, Escaping family)",
        "prompt": "Four people are talking about doing exercise. Match each person to the correct information.",
        "speakers": {
            "A": "Improve work performance",
            "B": "Find exercise tiring",
            "C": "Have fun exercising with others",
            "D": "Hate exercising"
        },
        "distractors": [
            "Exercise alone",
            "Exercise to lose weight"
        ],
        "script": {
            "A": "I started going to the gym for one reason only: my job. I sit in meetings all day, and by three o'clock my brain used to switch off completely. Since I began training at lunchtime, the afternoons feel like mornings. I close deals better, I write faster, and my manager has actually commented on it. Fitness for its own sake never tempted me — but as a tool for doing my work better, exercise has become the most useful hour of my day.",
            "B": "I keep at it because I know it is good for me, but I will be honest about how it feels: every session empties the tank completely. Twenty minutes in, my legs turn to stone and the clock stops moving. Afterwards I need the whole evening on the sofa just to become a person again. My sporty friends promise it gets easier with time. Three years in, I am still waiting for that famous lightness they talk about.",
            "C": "What keeps me coming back is the crowd. Tuesday badminton with my colleagues, Sunday football with the cousins — half the time we laugh more than we play. Alone on a treadmill I last ten minutes and give up, but put four friends around me and two hours vanish like nothing. The sport is really just the excuse; the jokes, the teasing and the noisy dinner afterwards are the real workout.",
            "D": "Let me say what everyone thinks and nobody admits: I cannot stand any of it. The sweating, the counting, the machines — all of it. My family drags me out for a game occasionally and I spend the whole time planning my escape. People promise I will learn to love it. I am fifty-two; I know what I love, and it is a good book in a comfortable chair."
        },
        "explanation": "A = Improve work performance (PARAPHRASE: 'I close deals better... the most useful hour' — hiệu quả công việc).\nB = Find exercise tiring (PARAPHRASE: 'empties the tank... legs turn to stone').\nC = Have fun exercising with others (keyword 'friends... laugh more than we play').\nD = Hate exercising (keyword 'I cannot stand any of it').\nNhiễu: alone, lose weight."
    },
    {
        "id": 8,
        "name": "Đề 8: Doing exercise (Clear inbox, Wrung-out towel, Volleyball laughs, Detesting lycra)",
        "prompt": "Four people are talking about doing exercise. Match each person to the correct information.",
        "speakers": {
            "A": "Improve work performance",
            "B": "Find exercise tiring",
            "C": "Have fun exercising with others",
            "D": "Hate exercising"
        },
        "distractors": [
            "Exercise alone",
            "Exercise to lose weight"
        ],
        "script": {
            "A": "My company pays for our gym cards, and at first I thought it was just a nice perk. Six months later I understand their plan perfectly. On the days I swim before the office, I get through my inbox by ten and my ideas actually arrive when I need them. My boss noticed before I did — she said my reports read sharper. Exercise, for me, has become a work tool, as important as my laptop.",
            "B": "Everyone describes this wonderful energy after sport. Where is mine? Forty minutes of anything and I am a wrung-out towel — stairs become mountains, and my bed starts calling my name at eight in the evening. I still show up twice a week because the doctor insists, but let nobody tell you it feels light. For some of us, every single session is heavy from the first stretch to the last.",
            "C": "Book me for any sport, as long as there is a crowd. Wednesday volleyball with the neighbours, weekend badminton with my sisters — the score matters less than the laughing between points. Last week we spent more time imitating each other's serves than actually playing. Exercise alone feels like punishment; exercise with my favourite people is just a party where everyone happens to be sweating.",
            "D": "I will be the honest one here: I detest the whole business. The lycra, the counting, the mirrors, the smell of the changing rooms — every bit of it. My brother signs me up for things and I invent illnesses to escape. People say I simply have not found my sport yet. I have looked for forty years; my sport is reading on the balcony, and I am its champion."
        },
        "explanation": "A = Improve work performance (PARAPHRASE: 'inbox by ten... reports read sharper... a work tool').\nB = Find exercise tiring (PARAPHRASE: 'a wrung-out towel... every session is heavy').\nC = Have fun exercising with others (keyword 'neighbours... sisters... laughing').\nD = Hate exercising (keyword 'I detest the whole business').\nNhiễu: alone, lose weight."
    },
    {
        "id": 9,
        "name": "Đề 9: Doing exercise (Overwhelming job, Running on empty, Group classes party, Misery punishment)",
        "prompt": "Four people are talking about doing exercise. Match each person to the correct information.",
        "speakers": {
            "A": "Improve work performance",
            "B": "Find exercise tiring",
            "C": "Have fun exercising with others",
            "D": "Hate exercising"
        },
        "distractors": [
            "Enjoy exercising alone",
            "Exercise to lose weight"
        ],
        "script": {
            "A": "Exercise has become essential in my life, especially with my demanding and stressful job. The workload can be overwhelming at times, leaving me feeling exhausted and overwhelmed. That's why I turn to exercise as a way to unwind and rejuvenate. Whether it's going for a run, practicing yoga, or even just taking a brisk walk, exercise helps me release stress and clear my mind. I've noticed that after exercising, I feel more focused, energized, and ready to tackle my work with renewed vigor. It's incredible how something as simple as exercise can greatly improve my work performance and overall well-being.",
            "B": "Honestly? Exercise wears me out. The idea of getting all sweaty and sore doesn't excite me at all. Every time I try to work out, it feels like I'm running on empty within minutes. And people say it gives them energy? Are we talking about the same thing? I feel more tired just thinking about the treadmill. I know it's supposed to be good for me, and I try to do it for my health, but I don't get that rush people talk about. Exercise for me is just exhausting. Why do something that makes me want to lie down for three days afterward?",
            "C": "Exercising is a blast when you're with the right people. I've joined a few group classes, and they're like a party every time. The music is pumping, everyone's in sync, and it feels like we're all in this together. Working out alone can get boring, but with friends, you laugh, you encourage each other, and suddenly, an hour has flown by. We push each other, you know? It's kind of amazing half the time, I forget I'm even working out. I actually look forward to it. The camaraderie makes it worth every minute.",
            "D": "Exercise? Ugh, I can't stand it. I know it's supposed to be good for you and all that, but I find it completely miserable. The sweat, the strain, the way my muscles burn afterward, it's like a punishment. People say it'll get better or that I'll start to like it eventually, but I've tried, and I still hate it. Honestly, life's too short to spend it doing something you can't stand. There are other ways to be healthy that don't involve torturing myself. I'd rather read a book than jog any day."
        },
        "explanation": "• Improve work performance → Speaker A: tập xong 'I feel more focused, energized, and ready to tackle my work' — tập để làm việc tốt hơn.\n• Hate exercising → Speaker D: 'I can't stand it... it's like a punishment', đã thử nhưng vẫn ghét.\n• Find exercise tiring → Speaker B: 'Exercise wears me out... it feels like I'm running on empty within minutes' — thấy mệt chứ không thấy khỏe ra.\n• Have fun exercising with others → Speaker C: 'Exercising is a blast when you're with the right people', tập nhóm vui như đi tiệc.\n• Enjoy exercising alone và Exercise to lose weight là 2 phương án nhiễu — C còn nói ngược lại ('Working out alone can get boring'), và không ai nhắc tới giảm cân.\n⚠️ Phân biệt B và D: cả hai đều KHÔNG thích tập, nhưng B nhấn vào cảm giác KIỆT SỨC (tiring), còn D nói thẳng là GHÉT (hate)."
    },
    {
        "id": 10,
        "name": "Đề 10: Exercise preferences (Forest trails, River pavement, Evening stroll, Riding stable)",
        "prompt": "Four people are talking about their exercise preferences. Match each person to the correct information.",
        "speakers": {
            "A": "Mountain biking",
            "B": "Going for a run",
            "C": "Walking",
            "D": "Horse riding"
        },
        "distractors": [
            "Hiking",
            "Swimming"
        ],
        "script": {
            "A": "My weekends belong to the hills. I load the bike onto the car on Friday night, and by eight the next morning I am flying down a forest trail with mud everywhere. My friends think I am mad — the bruises, the repairs, the cold. But nothing else empties my head like picking a line between the trees at speed. I have tried gentler hobbies, honestly. None of them ever made me feel so completely awake.",
            "B": "For me it has to be simple, so I just go for a run before work. No equipment, no bookings, no team — shoes on, door shut, and thirty minutes later I am back, red-faced and happy. In summer I follow the river; in winter I do loops around my block under the streetlights. People keep inviting me to fancy gyms, and I always say the same thing: the pavement is free and it never closes.",
            "C": "My doctor told me to stay active without stressing my knees, so every evening after dinner my husband and I head out on foot and do a slow hour through the neighbourhood. We have done it so long that the neighbours joke they can set their clocks by us. It is gentle, it costs nothing, and we talk more in that hour than in the rest of the day. Not dramatic, I know — but at my age, steady beats spectacular.",
            "D": "Mine started with a birthday gift: one lesson at the stables outside town. Ten years later I am there every Saturday, brushing, saddling, and taking my favourite mare across the fields. Being carried by a living animal is nothing like any machine — you learn to listen with your whole body. It is not a cheap pastime, and my boots are permanently filthy, but walking into that yard is still the best moment of my week."
        },
        "explanation": "A = Mountain biking (keyword 'bike... forest trail').\nB = Going for a run (keyword 'go for a run').\nC = Walking (PARAPHRASE: 'head out on foot... slow hour through the neighbourhood' — không có chữ walk).\nD = Horse riding (PARAPHRASE: 'stables... favourite mare... carried by a living animal' — không có chữ horse/riding).\nNhiễu: Hiking, Swimming — không ai nói."
    },
    {
        "id": 11,
        "name": "Đề 11: Exercise preferences (Downhill bike, Jogging river, Calm daily steps, Stables horse)",
        "prompt": "Four people are talking about their exercise preferences. Match each person to the correct information.",
        "speakers": {
            "A": "Mountain biking",
            "B": "Going for a run",
            "C": "Walking",
            "D": "Horse riding"
        },
        "distractors": [
            "Hiking",
            "Swimming"
        ],
        "script": {
            "A": "I've always been drawn to outdoor activities, especially those that get my heart racing. While some of my friends prefer running or hiking, I find nothing more exciting than mountain biking. I love the challenge of rough terrains and feeling the wind rush by as I go downhill. It's also a great way to explore nature and stay fit. I try to hit the trails at least a few times a month because it's such a thrilling experience for me. It's become my go-to form of exercise whenever I have the time.",
            "B": "When it comes to staying active, I've tried lots of different things, but I've found that I get the most out of a good jog. It's a great way to keep my energy levels up, and I enjoy how it clears my mind. I usually jog around the park or along the river near my home. It's not too fast, but it still gets my heart pumping and helps me unwind. I try to fit it into my routine as often as I can, even if it's just for twenty minutes.",
            "C": "I prefer something more low-key and calming when it comes to exercise. I'm not really into intense activities like running or biking. Instead, I find walking to be the perfect balance for me. It allows me to relax while still staying active. Whether it's in the park or just around my neighborhood, I try to get my steps in every day. It's also a nice way to clear my head after a long day at work.",
            "D": "I've been involved in different sports over the years, but one thing that stands out for me is horse riding. There's something about being with horses that feels both calming and exciting. Riding through open fields or along forest paths is an amazing way to stay active. It's not just a workout, but also a chance to connect with animals and nature. I try to go riding whenever I have a free weekend. It's definitely my favorite way to keep fit."
        },
        "explanation": "• Going for a run → Speaker B: 'I get the most out of a good jog', chạy quanh công viên hoặc dọc bờ sông.\n• Mountain biking → Speaker A: 'nothing more exciting than mountain biking', thích địa hình gồ ghề và lao xuống dốc.\n• Walking → Speaker C: 'I find walking to be the perfect balance', thích vận động nhẹ nhàng, đi bộ mỗi ngày.\n• Horse riding → Speaker D: 'one thing that stands out for me is horse riding', cưỡi ngựa qua đồng và đường rừng.\n• Hiking và Swimming là 2 phương án nhiễu — hiking chỉ được A nhắc để LOẠI ('some of my friends prefer running or hiking'), còn swimming không ai nói."
    },
    {
        "id": 12,
        "name": "Đề 12: Studying habits (Frequent flyer textbooks, Archive monk, Sound engineer playlist, Midnight silence)",
        "prompt": "Four people are talking about their studying habits. Match each person to the correct information.",
        "speakers": {
            "A": "In various places",
            "B": "In a quiet place",
            "C": "With music",
            "D": "Late at night"
        },
        "distractors": [
            "With friends",
            "In a classroom"
        ],
        "script": {
            "A": "My friends joke that my textbooks have frequent flyer miles. Monday finds me at the kitchen counter, Tuesday in the corner café, Wednesday on the top floor of the faculty building, and sunny days pull me onto the grass by the fountain. A single fixed desk makes my thoughts go stale within an hour; every change of scenery presses a refresh button in my head. During finals I once revised in five spots in one day — my best results ever followed.",
            "B": "One squeaking chair can end my whole session, so I have searched the city for perfect stillness and found it: the archive room on the fourth floor, past the old maps, where even footsteps apologise. Nobody speaks, phones die at the door, and the loudest event of the afternoon is a page turning. My friends revise in the noisy common room and call me a monk. Fine — this monk remembers what he reads.",
            "C": "My revision has a sound engineer: me. Soft strings under heavy reading, low steady beats when the essay needs momentum, and one particular film soundtrack reserved for the night before every exam — my little superstition. Inside the headphones, the world disappears and the words on the page stand still. Take the melodies away and my eyes slide off every paragraph. My library is wherever my playlist is.",
            "D": "The house only becomes mine after midnight, and that is when the books open. One lamp, cold tea, absolute quiet from eleven until two — my brain does its finest work while the whole street sleeps. Morning people preach their sunrise routines at me, and I have honestly tried. Before nine, I read the same sentence six times; after midnight, I read it once and own it forever."
        },
        "explanation": "A = In various places (PARAPHRASE: 'textbooks have frequent flyer miles... change of scenery').\nB = In a quiet place (PARAPHRASE: 'perfect stillness... even footsteps apologise').\nC = With music (keyword-lite 'headphones... melodies... playlist').\nD = Late at night (keyword-lite 'after midnight... eleven until two').\nNhiễu: with friends, classroom."
    },
    {
        "id": 13,
        "name": "Đề 13: Where they study (Park breeze, Train commute, Quiet house sofa, Coffee shop buzz)",
        "prompt": "Four people are talking about where they study. Match each person to the correct information.",
        "speakers": {
            "A": "In the park",
            "B": "On public transport",
            "C": "At home",
            "D": "In the coffee shop"
        },
        "distractors": [
            "In the library",
            "In the classroom"
        ],
        "script": {
            "A": "I like studying somewhere with sunshine and fresh air. It doesn't have to be completely quiet — in fact, when it's too quiet I don't feel inspired at all, which is why I never study in the library or in a classroom. What I love is the park near my university. I take my books, sit on the grass, and read. Nice weather and a light breeze — what could be more perfect than that?",
            "B": "Every day I spend about an hour on the train, and that's when I do most of my homework. A lot of people ask me how anyone can concentrate on public transport, but honestly the background noise is exactly what helps me focus. Quite often I can finish an important assignment in that one hour, before I even get to campus.",
            "C": "I have a real problem with noise. I did think about the university library, but there's always something — cups clinking, people sipping coffee, and someone dragging a chair across the floor. I live with my parents, and they're usually out at work during the day, so the house is completely silent. That's when I sit on the sofa and get my assignments done.",
            "D": "I actually need background sound to concentrate. There's a coffee shop near my house that a lot of people go to, and I love the atmosphere there. I can sit in a corner with my laptop, enjoy a cup of coffee, and somehow the buzz of the place lets me focus completely on my work."
        },
        "explanation": "A → In the park: 'What I love is the park near my university... sit on the grass'. Bẫy: A NHẮC library và classroom nhưng là để loại ('never study in the library or in a classroom').\nB → On public transport: 'about an hour on the train... background noise is exactly what helps me focus'.\nC → At home: 'I live with my parents... the house is completely silent... sit on the sofa'. Bẫy: C nhắc library nhưng để chê (cups clinking, chair dragging).\nD → In the coffee shop: 'There\\'s a coffee shop near my house... enjoy a cup of coffee'.\nNhiễu: In the library (A và C đều nhắc nhưng đều KHÔNG học ở đó), In the classroom (A loại).\n👉 Mẹo: người nói nhắc một địa điểm để CHÊ rồi mới nói nơi mình học — chờ câu có 'what I love / that\\'s when I'."
    },
    {
        "id": 14,
        "name": "Đề 14: Online shopping (Eleven minutes, Price spreadsheet, Carried to door, Endless variety)",
        "prompt": "Four people are talking about online shopping. Match each person to the correct information.",
        "speakers": {
            "A": "It saves time",
            "B": "It is cheaper",
            "C": "Products are delivered",
            "D": "There are more choices"
        },
        "distractors": [
            "Easy to return",
            "Safer to pay online"
        ],
        "script": {
            "A": "Between two jobs and three children, my week has no spare hours in it. A trip to the shopping centre used to swallow an entire Saturday morning — the drive, the parking, the queues at every till. Now I do the same list from my phone during my lunch break, in eleven minutes flat. Those rescued Saturday mornings belong to the playground now. For a person whose diary is full, that change is worth more than any discount.",
            "B": "I am the one in my family who compares everything, and the numbers always tell the same story. The jacket in the high-street window costs a third more than the identical one on my screen, and with the discount codes my daughter finds me, the gap grows even wider. Last month I furnished half the kitchen for what one shop wanted for the oven alone. My friends laugh at my spreadsheet — until they see my receipts.",
            "C": "My building has no lift and my knees are past their best, so what won me over is simple: everything arrives at my door. The rice, the washing powder, even the new armchair — a nice young man carries it up the stairs, and I sign with a smile. My daughter set the whole thing up for me two years ago. I have not dragged a heavy bag up those four floors since, and I do not miss it at all.",
            "D": "I live in a small town with exactly two clothes shops, and both stock the same five brands. Online, the shelf is endless — colours, sizes, styles, brands from countries I could not place on a map. Last week I found the exact model of running shoe my podiatrist recommended, in my width. The lady in our local shop just laughed and said she had never heard of it. That endless variety is what keeps me clicking."
        },
        "explanation": "A = It saves time (PARAPHRASE: 'eleven minutes flat... rescued Saturday mornings').\nB = It is cheaper (PARAPHRASE: 'costs a third more in the window... see my receipts').\nC = Products are delivered (keyword 'everything arrives at my door').\nD = There are more choices (keyword 'the shelf is endless... endless variety').\nNhiễu: easy to return, safer to pay online."
    },
    {
        "id": 15,
        "name": "Đề 15: Online shopping (Doorbell arrival, Discount hunter, Stolen minutes, Mixed size shoes)",
        "prompt": "Four people are talking about online shopping. Match each person to the correct information.",
        "speakers": {
            "A": "The products are delivered",
            "B": "It is cheaper",
            "C": "It saves time",
            "D": "There are more choices"
        },
        "distractors": [
            "Easy to return",
            "Safe to pay"
        ],
        "script": {
            "A": "I broke my ankle in January, and that is when internet shopping saved my winter. Everything I needed simply appeared: the courier brought my groceries to the third floor, the pharmacy package came the next morning, and even my new crutch pads arrived faster than my sister could visit. Two months without leaving the flat, and I never missed a meal or a birthday present. The doorbell became my favourite sound in the house.",
            "B": "My grandmother taught me never to pay the first price, and the internet is her lesson made easy. I watch items for weeks, wait for the seasonal sales, stack the discount codes, and strike when the price bottoms out. The winter coat I am wearing cost me less than half the shop price. My colleagues call me stingy, but my bank account calls me clever — same product, same label, very different receipt.",
            "C": "I run my own bakery, which means my day off is Tuesday and only Tuesday. Spending it in queues would be a small tragedy, so my entire household shops itself online in stolen minutes — flour suppliers compared while the ovens heat, birthday gifts chosen on the bus, groceries ordered during my lunch break. The hours other people spend pushing trolleys, I spend by the river with my dog. That trade is the best bargain the internet ever offered me.",
            "D": "My daughter has unusual feet — one size larger than the other, if you can believe it. Every shoe shop in our city offers the same fifteen models and shrugs. Online, I found a maker who sells single shoes in mixed sizes, three colours, her exact fit. The same story repeats with everything unusual we need: left-handed scissors, extra-long trousers, that discontinued ink my husband swears by. The high street stocks the middle of the road; the internet stocks everyone else."
        },
        "explanation": "A = The products are delivered (PARAPHRASE: 'simply appeared... courier... doorbell became my favourite sound').\nB = It is cheaper (PARAPHRASE: 'less than half the shop price... different receipt').\nC = It saves time (PARAPHRASE: 'stolen minutes... hours other people spend pushing trolleys').\nD = There are more choices (PARAPHRASE: 'single shoes in mixed sizes... stocks everyone else').\nNhiễu: easy to return, safe to pay."
    },
    {
        "id": 16,
        "name": "Đề 16: Using the internet (Travel routes, Messaging friends, Homework research, Streaming films)",
        "prompt": "Four people are talking about using the internet. Match each person to the correct information.",
        "speakers": {
            "A": "Finds transport information",
            "B": "Communicates with friends",
            "C": "Completes assignments",
            "D": "Watches films"
        },
        "distractors": [
            "Plays online games",
            "Reads latest news"
        ],
        "script": {
            "A": "Whenever I need to plan a trip or get somewhere, I always use the internet to find transportation details. I can check train schedules, bus routes, and even look up flights. It helps me figure out the best way to travel without getting lost.",
            "B": "The main reason I use the internet is to stay in touch with my friends. It's great because I can talk to people who live far away without any issues. Whether it's through social media, video calls, or messaging apps, the internet allows me to communicate easily and quickly.",
            "C": "For me, the internet is an essential tool for completing my school assignments. I use it to research information, find articles, and access educational websites that help me understand my subjects better. I also use it to download notes and submit my homework.",
            "D": "I spend quite a bit of my free time online, mostly because I love watching movies. The internet makes it so easy to find a wide variety of films, from the latest releases to old classics. I can stream them directly on my laptop or TV without needing to go out."
        },
        "explanation": "A = Finds transport information (keyword 'transportation details... train schedules, bus routes').\nB = Communicates with friends (keyword 'stay in touch with my friends... talk to people').\nC = Completes assignments (keyword 'completing my school assignments... research, submit homework').\nD = Watches films (keyword 'watching movies... wide variety of films').\nNhiễu: Plays online games, Reads latest news."
    }
];