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
        "name": "Đề 16: Using the Internet (Watch films, Communicate friends, Assignments, Transport)",
        "prompt": "Four people are talking about using the Internet. Match each person to the correct information.",
        "speakers": {
            "A": "watch films",
            "B": "communicate with friends",
            "C": "complete assignments",
            "D": "find transport information"
        },
        "distractors": [
            "read news",
            "play online games"
        ],
        "script": {
            "A": "My travel budget is small, so the world comes to me through my screen instead. Friday nights are for cinema at home — I work through the classics one director at a time, and my watchlist currently holds two hundred titles. Last month it was old Japanese films; this month, French comedies with subtitles. My local cinema shows six films; my laptop shows sixty thousand. For the price of one ticket a month, I have the largest screen-room in history.",
            "B": "When my best friend moved to Australia, I thought our friendship would shrink to birthday messages. Instead, we talk more now than when she lived two streets away. Sunday morning calls over breakfast — her dinner time — the running joke chat that never sleeps, photos of everything from her new beach to my old dog. The distance is nine thousand kilometres; the conversation has never been closer. The connection is what keeps us next-door neighbours.",
            "C": "My degree happens as much online as in the lecture hall. The reading lists live on the portal, my group project shares one document across five laptops, and the deadline uploads happen at two minutes to midnight, always. When the statistics module nearly defeated me, a professor in another country rescued my grade through a free video series. Ask what the internet is to me and I will answer honestly: it is where my homework gets done.",
            "D": "I refuse to stand at a bus stop hoping anymore. Before my shoes are on, the app has told me which line is running late, where my bus is on the map, and whether the trains are behaving. When the bridge closed last month, my phone had redrawn my whole route before the radio mentioned it. My colleagues arrive complaining about their journeys. I arrive having read a book, xactly on time."
        },
        "explanation": "A = watch films (PARAPHRASE: 'cinema at home... watchlist... largest screen-room').\nB = communicate with friends (PARAPHRASE: 'we talk more now... conversation has never been closer').\nC = complete assignments (keyword 'homework gets done... deadline uploads').\nD = find transport information (keyword-lite 'which line is running late... redrawn my route').\nNhiễu: news, games. (Variant khác lời Đề 10/12.)"
    },
    {
        "id": 17,
        "name": "Đề 17: Using the Internet (Check transport, Friends, School assignments, Watch films)",
        "prompt": "Four people are talking about using the Internet. Match each person to the correct information.",
        "speakers": {
            "A": "check the transportation information",
            "B": "communicate with friends",
            "C": "complete school assignments",
            "D": "watch films"
        },
        "distractors": [
            "play online games",
            "shop online"
        ],
        "script": {
            "A": "I'm not really a fan of talking to people online, so I usually prefer to communicate with my friends face to face, especially when we study together. However, most of my friends live quite far away from me, so I normally travel by bus when I want to meet them. When I'm on the bus, I often use the Internet to check transportation information, especially bus routes and directions. It's really useful because I can find the best route and make sure I don't get lost. I also check the estimated travel time before I leave home, so I know when I'm likely to arrive.",
            "B": "I have quite a lot of friends, and one of the most convenient ways for me to keep in touch with them is through the Internet. Some of my friends live in different countries, so meeting them in person isn't always possible. For example, one of my close friends lives in Sydney. She takes cookery classes there, and we often have online calls to talk about what she has learned. Sometimes, we exchange recipes and discuss different ways of preparing food. I really enjoy these conversations because social media and other online platforms make it easy for us to stay connected, even though we live far apart.",
            "C": "I use the Internet a lot for my schoolwork. At the moment, I'm working on a big assignment about different airlines. I have to collect information about several companies, including their services, prices and destinations. Without the Internet, I would have to ask lots of different people or visit different places to find all this information. Fortunately, I can search for most of what I need online. I can also compare information from different websites and find useful pictures and statistics for my assignment. It saves me a lot of time and makes doing a big project much easier.",
            "D": "I used to spend a lot of time playing computer games, but I think I've grown out of it now. These days, I mainly use the Internet for entertainment, especially for watching films. I don't really need a television because I can watch films on my computer whenever I want. If there's a film I really like, I can download it and watch it later when I have some free time. I usually watch films in the evening, especially at weekends. It's much more convenient for me because I can choose what I want to watch instead of waiting for something interesting to be shown on TV."
        },
        "explanation": "LƯU Ý: Đây là bản ĐẢO SPEAKER của Đề 25 - The Internet (cùng 4 mục thông tin nhưng người nói khác nhau). Đề thi thật 25/8 ra bản này.\nA = check transportation information (tra routes trên xe buýt). Bẫy: A nhắc 'communication' nhưng là nói chuyện TRỰC TIẾP khi học nhóm, không phải qua mạng.\nB = communicate with friends (gọi điện trao đổi công thức với bạn ở Sydney).\nC = complete school assignments (bài tập lớn về airlines).\nD = watch films (tải phim về máy tính). Bẫy: D nhắc games nhưng đã BỎ ('grown out of it').\n'play online games' và 'shop online' là 2 mục nhiễu — không ai dùng."
    },
    {
        "id": 18,
        "name": "Đề 18: Journey to work (Walk friends, Go bus, Walk alone, Drive car)",
        "prompt": "Four people are talking about their journey to work. Match each person to the correct information.",
        "speakers": {
            "A": "Walk with friends",
            "B": "Go by bus",
            "C": "Walk alone",
            "D": "Drive car"
        },
        "distractors": [
            "Ride a bike",
            "Go by train"
        ],
        "script": {
            "A": "My office is twenty-five minutes from home on foot, and my neighbour Marta works in the same building, so every morning at eight we set off together. We solve the world's problems before nine — her divorce, my roses, everyone's politics. Honestly, the conversation is better exercise than the walking. On days she is ill, the same pavement feels twice as long, and I arrive at my desk with nobody's opinions but my own.",
            "B": "I am a devoted passenger of the seven-forty. Top deck, second row, window seat — my little office in the sky. While the traffic crawls underneath, I read my novel or answer messages, and somebody else worries about the driving. A monthly ticket costs less than a week of parking in my part of town. Colleagues complain about their steering wheels; I turn pages. I know who wins.",
            "C": "My commute is my meditation, and it only works because I do it with nobody. Thirty-five minutes on foot, headphones optional, thoughts wandering where they like. I rehearse difficult conversations, plan the weekend, sometimes just count magpies. People offer me lifts constantly and I refuse them all — those solitary steps between home and work are where I become ready for other humans.",
            "D": "I resisted for years, but the school run defeated me: two children, two schools, one office, three different directions. So now it is the family wagon every morning — bags in the boot, arguments about the radio station, goodbye kisses at two different gates, then the ring road to work. Parking costs a fortune and the traffic tests my soul. But with our timetable, four wheels are not a choice; they are survival."
        },
        "explanation": "A = Walk with friends (PARAPHRASE: 'set off together... conversation is better exercise').\nB = Go by bus (PARAPHRASE: 'passenger of the seven-forty... top deck... monthly ticket').\nC = Walk alone (PARAPHRASE: 'on foot... with nobody... solitary steps').\nD = Drive car (keyword-lite 'family wagon... parking... four wheels').\nNhiễu: bike, train."
    },
    {
        "id": 19,
        "name": "Đề 19: Travelling to work (Travel bus, Travel car, Walk alone, Walk friend)",
        "prompt": "Four people are talking about travelling to work. Match each person to the correct information.",
        "speakers": {
            "A": "travel by bus",
            "B": "travel by car",
            "C": "walk alone",
            "D": "walk with a friend"
        },
        "distractors": [
            "ride a bicycle",
            "ride a motorbike"
        ],
        "script": {
            "A": "My mornings start at the stop outside the flower shop, seven-fifteen sharp. The number twelve carries me and my thoughts across town while somebody else handles the gears and the traffic lights. I have a regular seat, a regular crossword, and a nodding acquaintance with the whole upper deck. Driving would save me ten minutes, my brother insists. Those ten minutes would cost me my crossword and my calm, so the twelve keeps winning.",
            "B": "Our house runs on a military timetable — two school drop-offs, then my clinic across town by eight-thirty. Only the family car makes that mathematics work. The children argue over the radio in the back, I drink my coffee at red lights, and the parking bill at the end of each month makes my eyes water. Friends preach about buses and bicycles. With our mornings, I would need three of each.",
            "C": "Between my front door and the office lie two parks and one bridge, and I cross them all on foot, by myself, every day. Those forty minutes are the only true silence I get — no passengers, no colleagues, just my own footsteps sorting out my thoughts. Offers of lifts come daily and I decline them all politely. By the time I reach my desk, the day's problems have already been walked into order.",
            "D": "My commute doubles as my social hour. My colleague Anh lives three doors down, so we cover the thirty minutes to the office side by side, on foot, dissecting yesterday's meetings and planning our lunches. When she is away I genuinely feel the difference — the same streets, half the fun. Our boss says he can hear us laughing from his window before we reach the gate. Best part of the working day, both of us agree."
        },
        "explanation": "A = travel by bus (PARAPHRASE: 'the number twelve carries me... upper deck').\nB = travel by car (PARAPHRASE: 'family car... parking bill... red lights').\nC = walk alone (PARAPHRASE: 'on foot, by myself... own footsteps').\nD = walk with a friend (PARAPHRASE: 'cover the thirty minutes side by side, on foot').\nNhiễu: bicycle, motorbike. (Variant khác lời Đề 17.)"
    },
    {
        "id": 20,
        "name": "Đề 20: Where they like to run (Fitness centre, Seaside, Street, Running track)",
        "prompt": "Four people are talking about where they like to run. Match each person to the correct information.",
        "speakers": {
            "A": "in the fitness centre",
            "B": "at the seaside",
            "C": "in the street",
            "D": "on the running track"
        },
        "distractors": [
            "in the park",
            "in the forest"
        ],
        "script": {
            "A": "Rain, snow, heatwave — none of it matters to me anymore, because my kilometres happen indoors at the sports club. The machines measure everything, the physio works two doors down, and after my knee operation last year that safety means a lot. I book the same treadmill by the window every morning at six. My running friends call indoor running fake running. I call it running that my surgeon approves of.",
            "B": "I moved to the coast three years ago, and now I cannot imagine training anywhere else. Low tide gives me two kilometres of firm, flat sand, the salt air fills my lungs, and the sound of the water sets my rhythm better than any playlist. Some mornings I share the beach with nobody but the gulls and one old fisherman. My city friends visit, run one sunrise with me, and start checking property prices by lunchtime.",
            "C": "Give me the pavements, the crossings, the crowds — my route cuts straight through the busiest part of town. I time my runs by the bakery smells and wave at the flower seller setting up her stall. Yes, I stop for traffic lights, and yes, the ground is hard. But a city waking up around you is the best film ever made, and I get a free showing every single morning.",
            "D": "I train with a club, and we are spoiled: our sessions happen at the athletics stadium, on the proper red surface, under the floodlights. Marked lanes, exact distances, a coach with a whistle and no mercy. Interval nights are brutal — sprint, recover, sprint again, all measured to the metre. But when race day comes, I know my pace to the second, and that certainty was built lap by counted lap."
        },
        "explanation": "A = in the fitness centre (PARAPHRASE: 'indoors at the sports club... treadmill').\nB = at the seaside (PARAPHRASE: 'the coast... firm flat sand... gulls').\nC = in the street (keyword 'pavements... through the busiest part of town').\nD = on the running track (keyword 'athletics stadium... red surface... lanes').\nNhiễu: park, forest."
    },
    {
        "id": 21,
        "name": "Đề 21: Running locations (Street, Seaside, Running track, Fitness center)",
        "prompt": "Four people are talking about running. Match each person to the correct information.",
        "speakers": {
            "A": "prefer running in the street",
            "B": "at the seaside",
            "C": "on the running track",
            "D": "in the fitness center"
        },
        "distractors": [
            "in the park",
            "mountain trail"
        ],
        "script": {
            "A": "Call me odd, but I do my kilometres right through the middle of town, on the pavements, dodging lamp posts and prams. I love running in the street — the shop windows, the smells from the bakeries, the little nods from the regulars I pass at the same corner every morning. Friends warn me about the traffic and the hard ground, and fair enough. But out there among the crowds and the noise, I never once feel bored.",
            "B": "I am lucky enough to live ten minutes from the coast, and that decides everything. Every morning I jog along the sand with the waves on one side and the cliffs on the other, gulls complaining overhead. When the tide is out I run on the firm wet sand, which is kind to the ankles. In winter the wind can be brutal, but watching the sun climb out of the water makes every frozen ear worth it.",
            "C": "I train for competitions, so guesswork is not good enough for me — I need exact distances and a clock I can trust. That is why you will find me at the stadium oval three evenings a week, counting laps on the rubber surface with my stopwatch. Four hundred metres, no surprises, no puddles, no dogs. My friends call it running in circles. I call it knowing precisely how fast I am getting.",
            "D": "I gave up on outdoor jogging the winter I turned forty — the dark evenings and icy paths defeated me. Now I do my five kilometres on the machine at the gym, warm and dry, with the television screens in front of me and a proper shower afterwards. The trainers there adjust my programme every month too. My friends tease me about running to nowhere, but nowhere has excellent air conditioning."
        },
        "explanation": "A = prefer running in the street (keyword 'running in the street').\nB = at the seaside (PARAPHRASE: 'along the sand... waves... tide' — không có chữ seaside).\nC = on the running track (PARAPHRASE: 'stadium oval... counting laps... four hundred metres').\nD = in the fitness center (keyword-lite: 'machine at the gym' — bắt được qua gym).\nNhiễu: in the park, mountain trail."
    },
    {
        "id": 22,
        "name": "Đề 22: Studying habits (Various places, Quiet place, With music, Late at night)",
        "prompt": "Four people are talking about their studying habits. Match each person to the correct information.",
        "speakers": {
            "A": "At various places",
            "B": "In a quiet place",
            "C": "With music",
            "D": "Late at night"
        },
        "distractors": [
            "in a group",
            "early morning"
        ],
        "script": {
            "A": "People laugh when they see my rucksack — my books live in it because my study spot changes daily. Monday might be the kitchen table, Tuesday the bus, Wednesday a café, Thursday the steps outside the lecture hall if the sun is out. Staying in one seat makes my brain fall asleep; a fresh background keeps the material fresh too. My record is five different spots in a single day of revision, and that was my best exam ever.",
            "B": "For me, the enemy is sound. One conversation through the wall, one motorbike outside, and the sentence I was holding shatters. So I have built myself a little fortress: the back corner of the top floor of the library, behind the old journals nobody touches. Not a whisper reaches there. My friends know that between two and six I simply disappear from the world — that silence is where my concentration lives.",
            "C": "My housemates find it strange, but I cannot open a textbook without my headphones on. Soft piano for reading, something with a beat for writing notes — the melodies wrap around me like a wall and the hours slide by. In a silent room my thoughts wander everywhere; give them a soundtrack and they march in line. My playlist for the final exams lasted nine hours, and I knew every note by the end.",
            "D": "My day belongs to everyone else — work, family, dinner, dishes. My books only get me after the house goes quiet, usually from eleven until two in the morning. There is something magical about being the only mind awake on the street: no messages, no doorbells, just me and the pages in a pool of lamplight. My mother worries about the dark circles under my eyes. I tell her that is when my brain finally switches on."
        },
        "explanation": "A = At various places (PARAPHRASE: 'study spot changes daily... five different spots').\nB = In a quiet place (PARAPHRASE: 'little fortress... Not a whisper reaches there').\nC = With music (keyword 'headphones... melodies... playlist').\nD = Late at night (keyword 'from eleven until two in the morning').\nNhiễu: in a group, early morning."
    },
    {
        "id": 23,
        "name": "Đề 23: Studying habits (Late at night, Various places, With music, Quiet place)",
        "prompt": "Four people are talking about their studying habits. Match each person to the correct information.",
        "speakers": {
            "A": "Prefer to study late at night",
            "B": "Prefer to study at various places",
            "C": "Prefer to study with music",
            "D": "Prefer to study in a quiet place"
        },
        "distractors": [
            "in a group",
            "early morning"
        ],
        "script": {
            "A": "The house is chaos until about ten — children, dishes, doorbells. So my textbooks wait, and they know they will get me when everyone else has surrendered to sleep. Between eleven and two, the flat is mine: no interruptions, no noise, just the desk lamp and my notes. My friends call those hours unnatural. I call them the only hours the world agrees to leave me alone, and my best marks were all born in them.",
            "B": "Ask my friends where I revise and they will laugh: everywhere. The train into college, the bench outside the sports hall, my aunt's kitchen, the launderette while my clothes spin. I have finished essays in waiting rooms and memorised vocabulary in a queue. One fixed desk makes my mind stiff; carrying my notes through the day keeps them alive. My record is studying in six locations before dinner — and remembering every page of it.",
            "C": "My secret weapon has wires: nothing enters my head without a soundtrack. Gentle jazz for heavy reading, film scores for essays, and one particular symphony that has carried me through every exam since I was sixteen. The melodies build a wall between me and the world, and inside that wall everything sticks. Silence, strangely, is what distracts me — my thoughts scatter without a rhythm to hold them in line.",
            "D": "I have one requirement, and it is absolute: no sound. I revise in the reading room where even a cough draws stares, or at home with everyone out and the windows shut. One barking dog can cost me a whole paragraph. My sister studies happily in noisy cafés and I genuinely do not understand how. For my brain, stillness is not a preference — it is the on switch."
        },
        "explanation": "A = study late at night (PARAPHRASE: 'between eleven and two... hours the world leaves me alone').\nB = at various places (PARAPHRASE: 'everywhere... six locations before dinner').\nC = with music (keyword 'soundtrack... melodies').\nD = in a quiet place (keyword-lite 'no sound... stillness').\nNhiễu: in a group, early morning."
    },
    {
        "id": 24,
        "name": "Đề 24: Using the Internet (Watch film, Friends, School assignments, Transport)",
        "prompt": "Four people are talking about using the Internet. Match each person to the correct information.",
        "speakers": {
            "A": "watch film",
            "B": "communicate with friends",
            "C": "complete school assignments",
            "D": "find transport information"
        },
        "distractors": [
            "take online courses",
            "play online games"
        ],
        "script": {
            "A": "My evenings have one ritual: lights off, snacks ready, and something good on the screen. The internet has turned my little bedroom into a cinema — old classics, new releases, series from Korea and Spain with subtitles. I have not bought a cinema ticket in two years, because why queue when the whole film library of the world sits behind my login? Saturday nights, my sister joins me and we argue for twenty minutes about what to watch.",
            "B": "Half the people I love live in other time zones now — university scattered us across three continents. So my internet hours are spent talking: video calls with my best friend in Toronto every Sunday, voice messages to the group that never sleeps, long chats with my old roommate about nothing. Without the connection, those friendships would have faded into birthday texts. With it, we still finish each other's sentences from opposite sides of the planet.",
            "C": "For me the internet is basically a homework machine. Every essay starts with the online library, every presentation leans on the journals my university subscribes to, and when the deadline panics arrive, the tutorial videos save my grade. Last term I wrote my entire dissertation without borrowing a single paper book. My classmates use it the same way — the night before submission, you can feel the whole class online, typing.",
            "D": "I check one thing before leaving the house, always: which bus is actually coming, and when. The app knows about the roadworks before the radio does, shows me where my bus is crawling on the map, and reroutes me when the trains misbehave. Since I started trusting it, I have stopped standing at stops in the rain guessing. My whole journey to work is planned by my phone before I finish my coffee."
        },
        "explanation": "A = watch film (keyword 'cinema... film library').\nB = communicate with friends (PARAPHRASE: 'spent talking... video calls... friendships').\nC = complete school assignments (PARAPHRASE: 'homework machine... essay... dissertation').\nD = find transport information (keyword 'which bus is coming... journey planned').\nNhiễu: online courses, games."
    },
    {
        "id": 25,
        "name": "Đề 25: Using the Internet (Watch movies, Assignments, Family, Transport)",
        "prompt": "Four people are talking about using the Internet. Match each person to the correct information.",
        "speakers": {
            "A": "Watch movies",
            "B": "Complete assignments",
            "C": "Stay in touch with family",
            "D": "Find transport information"
        },
        "distractors": [
            "read news",
            "play games"
        ],
        "script": {
            "A": "After a long shift, my routine never changes: dinner, sofa, screen. The internet replaced my television years ago — I follow three series at once and pick films by mood, from black-and-white classics to last month's releases. My flatmate and I have a Friday tradition of choosing the worst-reviewed film we can find and enjoying every terrible minute. Without the streaming sites, my evenings would be a lot quieter and a lot duller.",
            "B": "University turned me into a night-time typist. Every project, every essay, every group presentation runs through the online portal — I download the readings, join the shared documents, and submit everything before the midnight deadline. When I got stuck on statistics last term, a tutorial video explained in nine minutes what the lecture had failed to explain in ninety. My grades genuinely live or die by my connection.",
            "C": "My parents are back in the countryside and my brother works abroad, so the internet is really our dinner table now. Sunday evening video calls with the whole family, my mother showing me her garden through the camera, my father asking if I am eating properly. In between there are voice messages and photos of everything from new haircuts to burnt pancakes. Distance used to mean silence; now it just means a screen between us.",
            "D": "Before I even brush my teeth, I check the transport app. It tells me whether my usual bus is on time, which platform the train leaves from, and how the traffic is moving on the ring road. Twice last month it warned me about strikes before my colleagues had heard a word. Planning my route used to be guesswork and luck. Now the whole journey is arranged while the kettle boils."
        },
        "explanation": "A = Watch movies (keyword 'films by mood... streaming').\nB = Complete assignments (keyword 'essay... submit').\nC = Stay in touch with family (PARAPHRASE: 'our dinner table now... Distance used to mean silence').\nD = Find transport information (PARAPHRASE: 'whether my usual bus is on time... journey arranged').\nNhiễu: news, games."
    },
    {
        "id": 26,
        "name": "Đề 26: Listening to music (To relax, While studying, While singing, After waking up)",
        "prompt": "Four people are talking about listening to music. Match each person to the correct information.",
        "speakers": {
            "A": "To relax",
            "B": "While studying",
            "C": "While singing",
            "D": "After waking up"
        },
        "distractors": [
            "While driving",
            "Before bed"
        ],
        "script": {
            "A": "My job empties me — eight hours of phone calls and complaints. So the first thing I do at home is drop onto the sofa, close my eyes, and let my favourite slow album wash the day away. Twenty minutes of those warm melodies and my shoulders finally come down from my ears. No wine, no television — just the speakers doing their quiet repair work. My wife says she can tell which song is playing by the look on my face.",
            "B": "My flatmates think I am strange, but my headphones go on the moment my books open. Instrumental only — words in songs fight with the words on the page. With the right quiet piano behind me, three hours of revision pass like one; without it, I check my phone every four minutes. I even match albums to subjects now: strings for history, soft electronic for maths. My exam playlist is basically a study partner.",
            "C": "In my family, music is not for listening — it is for joining in. The moment a song I know starts, my voice is already in it, harmonies and all. In the shower, over the cooking, in the car at full volume with the windows down. My neighbours have learned my entire repertoire through the walls, poor people. A song without my voice on top feels unfinished; that is simply how I enjoy music.",
            "D": "My alarm is set to silence — what actually starts my day is pressing play. Before my eyes fully open, the first song of my morning playlist is filling the bedroom, and by track three I am upright and human. Coffee, shower, dressing: all of it happens to music, every single morning. On the rare day the speaker battery dies, the whole house feels wrong until noon. Waking up without songs, to me, is only half waking up."
        },
        "explanation": "A = To relax (PARAPHRASE: 'wash the day away... shoulders come down... quiet repair work').\nB = While studying (keyword 'books open... revision').\nC = While singing (PARAPHRASE: 'my voice is already in it... my entire repertoire').\nD = After waking up (keyword-lite 'starts my day... morning playlist... waking up').\nNhiễu: while driving, before bed."
    },
    {
        "id": 27,
        "name": "Đề 27: Listening to music (To relax, While studying, While singing, After waking up)",
        "prompt": "Four people are talking about listening to music. Match each person to the correct information.",
        "speakers": {
            "A": "To relax",
            "B": "While studying",
            "C": "While singing",
            "D": "After waking up"
        },
        "distractors": [
            "While driving",
            "Before bed"
        ],
        "script": {
            "A": "Sunday evenings are sacred in my flat: phone in the drawer, lights low, and one full album from start to finish on the good speakers. That hour dissolves whatever the week left in my muscles — I can feel the tension draining somewhere around the third track. Doctors talk about massages and hot baths; my medicine has always been melodies and a closed door. By the final song I am a calmer, kinder version of myself.",
            "B": "My study desk has three permanent residents: my laptop, my coffee, and my headphones. The moment revision starts, so does my instrumental playlist — nothing with lyrics, because sung words elbow the textbook words out of my memory. With the right background running, formulas settle in quietly and essays untangle themselves. My study group finds it funny that I refuse to revise in silence. Silence, for me, is where concentration goes to die.",
            "C": "I cannot keep a tune to myself — the moment I recognise a song, I am part of it. Full performances happen in my shower, duets with the radio while I cook, and my long drives are basically concerts where I hold every part. My family bangs on the bathroom door; my colleagues have votes about my humming. I accept all criticism and change nothing. Music you only listen to is music half-enjoyed.",
            "D": "The first thing my hand touches in the morning is not the snooze button — it is the play button. My wake-up playlist starts gentle and grows louder, and by the fourth song even my teenage son is vertical. Breakfast has a soundtrack, brushing teeth has a soundtrack, finding lost keys has a dramatic soundtrack. Mornings without that music feel like films with the sound off: technically functional, but joyless."
        },
        "explanation": "A = To relax (PARAPHRASE: 'dissolves whatever the week left... tension draining... calmer version').\nB = While studying (keyword 'revision... textbook... study group').\nC = While singing (PARAPHRASE: 'I am part of it... performances... hold every part').\nD = After waking up (PARAPHRASE: 'first thing my hand touches in the morning... wake-up playlist').\nNhiễu: while driving, before bed. (Variant khác lời Đề 16/22.)"
    },
    {
        "id": 28,
        "name": "Đề 28: Listening to music (To relax, After waking up, While singing, While studying)",
        "prompt": "Four people are talking about listening to music. Match each person to the correct information.",
        "speakers": {
            "A": "To relax",
            "B": "After waking up",
            "C": "While singing",
            "D": "While studying"
        },
        "distractors": [
            "while exercising",
            "before bed"
        ],
        "script": {
            "A": "My nervous system has an off switch, and it is shaped like a record player. After the children are in bed, I pour a tea, lower the needle on something slow, and let the day's knots untie themselves one by one. No screens, no talking — just twenty quiet minutes while the melodies do their gentle housework inside my head. My husband says he can measure my week by which record I reach for on Friday night.",
            "B": "I wake up before my alarm just to beat it to the speaker. The first song goes on while my eyes are still half closed, and it walks me through the whole morning — louder for the shower, brighter for breakfast, something cheerful for finding my keys. By the time I close the front door, side one is finished and I am fully human. A morning that starts in silence feels broken to me all day.",
            "C": "My voice is not good, and I could not care less — every song I know is a duet the moment it starts. I harmonise with the kettle-side radio, perform full choruses into the hairbrush, and my car is a one-woman concert hall on the motorway. The neighbours applauded from their balcony once, only half joking. Listening quietly feels like watching a dance and refusing to move; joining in with my own voice is the entire pleasure.",
            "D": "Exam season turned me into a musical creature. My revision only works with a instrumental stream in my ears — the notes hold my attention on the page the way a fence holds sheep. Lyrics ruin it: the words on the page and the words in the song start fighting. Four hours of formulas pass gently when the piano is playing. In silence, I last twenty minutes before my phone wins."
        },
        "explanation": "A = To relax (PARAPHRASE: 'off switch... knots untie themselves... gentle housework').\nB = After waking up (PARAPHRASE: 'wake up before my alarm... walks me through the morning').\nC = While singing (PARAPHRASE: 'every song is a duet... my own voice is the pleasure').\nD = While studying (keyword 'revision... formulas').\nNhiễu: while exercising, before bed. (Variant khác lời 16/18.)"
    },
    {
        "id": 29,
        "name": "Đề 29: Doing arts (Social activity, With children, Part of job, Alone)",
        "prompt": "Four people are talking about doing arts. Match each person to the correct information.",
        "speakers": {
            "A": "Doing as a social activity",
            "B": "Doing arts with children",
            "C": "Doing arts as part of the job",
            "D": "Doing arts alone"
        },
        "distractors": [
            "Taking online classes",
            "Joining art competitions"
        ],
        "script": {
            "A": "Wednesday evening is the highlight of my week: eight of us meet above the bakery with our easels, paint for two hours, then argue about whose sunset is worse over tea and biscuits. Half of us have no talent whatsoever, and it truly does not matter. I joined to meet people after moving to this town, and the painting turned out to be the easiest doorway into friendship I have ever found. We are planning a little group show in the spring.",
            "B": "Every Sunday morning my kitchen table disappears under glue, glitter and coloured card, because that is craft time with my two little ones. We make lopsided animals, potato-print wrapping paper, birthday cards for the grandparents. The floor suffers terribly. But watching a five-year-old concentrate on her wobbly giraffe is worth any mess, and the fridge door has become our family gallery. It is our time together, away from every screen in the house.",
            "C": "People assume drawing is my hobby, but it is actually how I pay my rent. I illustrate children's books for two publishers, so from nine to five I am sketching dragons and checking colour proofs against deadlines. When your passion becomes your profession, it changes — some days the pencil feels heavy, like any tool. Still, I remind myself that plenty of people would trade their desk for mine, deadlines and all.",
            "D": "My painting happens behind a closed door, and that is exactly how I like it. Sunday afternoons, the flat empty, the phone off — just me, the brushes and the radio. Nobody sees the results; most canvases end up stacked in the wardrobe. Friends keep telling me to join a class or share pictures online, and I always refuse. The whole point is that no one is watching. It is the only truly private hour I own."
        },
        "explanation": "A = social activity (PARAPHRASE: 'easiest doorway into friendship... meet people').\nB = with children (keyword 'craft time with my two little ones').\nC = part of the job (PARAPHRASE: 'how I pay my rent... profession... deadlines').\nD = alone (keyword 'behind a closed door... no one is watching').\nNhiễu: online classes, competitions."
    },
    {
        "id": 30,
        "name": "Đề 30: Reading books (Travelling to school, No time, Prefer other activity, In bed)",
        "prompt": "Four people are talking about reading books. Match each person to the correct information.",
        "speakers": {
            "A": "read when travelling to school",
            "B": "don't have time to read",
            "C": "prefer another activity to reading books",
            "D": "read on their beds"
        },
        "distractors": [
            "read on phones",
            "read in the library"
        ],
        "script": {
            "A": "My reading happens between two train stations. Forty minutes into college, forty minutes home — that is a solid chapter and a half each day, bookmarked precisely as we pull into the platform. The carriage rocks, the pages turn, and the crowd around me disappears entirely. My friends complain the commute steals their day. Mine gave me back reading; I finished twenty-three books last year without ever sitting in an armchair.",
            "B": "I keep buying books and life keeps cancelling them. Between the double shifts at the restaurant, the baby, and the house that never stays clean, my bedside pile has become furniture. I open a novel on my rare free evening and my eyes surrender within a page. My sister sends me her favourites with little notes inside, and I add them to the tower guiltily. One day the pile and I will have our year. Not this year.",
            "C": "I've got shelves full of books at home — novels, biographies, travel writing, the lot — and for years I read every single evening. Then in January I joined the fitness club near my office, and everything changed. Now my evenings are spin classes and lengths in the pool, and honestly I'd rather be moving than sitting still with a paperback. The books are still there on the shelves, waiting. I just prefer doing something active these days.",
            "D": "When I was small, my parents read to me every night — one story, then lights out — and the habit never left me. Even now I can't fall asleep without a chapter under the lamp, propped up on my pillows. And I've passed it on: every evening I sit on my daughter's bed and we read a book together, taking turns with the pages. Her teacher says it has helped her reading at school no end, and it's the best part of my day."
        },
        "explanation": "A = read when travelling to school ('between two train stations... into college').\nB = don't have time to read ('life keeps cancelling them... bedside pile has become furniture').\nC = prefer another activity to reading books ('joined the fitness club... I\\'d rather be moving than sitting still with a paperback').\nD = read on their beds ('can\\'t fall asleep without a chapter... propped up on my pillows', đọc cùng con gái trên giường).\nNhiễu: on phones, in the library.\n👉 Đề thật 16/9: C = thích hoạt động khác (fitness club), D = đọc trên giường (bố mẹ kể chuyện trước ngủ, giờ đọc cùng con)."
    },
    {
        "id": 31,
        "name": "Đề 31: Visiting a new museum (Finished quickly, Got lost, Use of technology, Visit again)",
        "prompt": "Four people are talking about visiting a new museum. Match each person to the correct information.",
        "speakers": {
            "A": "Finished the visit quickly",
            "B": "Got lost during the visit",
            "C": "Enjoyed the use of technology",
            "D": "Wants to visit again"
        },
        "distractors": [
            "Bought souvenirs at the shop",
            "Complained about ticket price"
        ],
        "script": {
            "A": "I will be honest: museums are my wife's love, not mine, and Saturday was her birthday choice. I walked the halls at a polite pace, admired what required admiring, and was back at the entrance café within fifty minutes while she was still in the second room. The building is impressive, I suppose. But my legs were done, my interest was done, and the cake selection downstairs deserved serious attention.",
            "B": "My visit turned into an accidental adventure — the place is a labyrinth. I followed the arrows to the Egyptian rooms and somehow surfaced among medieval armour, twice. The floor plan they hand out disagrees with the actual corridors, I swear. A kind guard finally walked me to the exhibition I had actually come for, one hour late. Beautiful collections, genuinely — but next time I am bringing breadcrumbs to drop behind me.",
            "C": "What won me over completely were the screens. Point your phone at any exhibit and the app resurrects it — the broken temple rebuilds itself in front of you, the faded painting recovers its colours, and a soft voice tells the story at your own pace. My favourite was the interactive table where you could virtually unwrap a mummy, layer by layer. The objects are ancient; the experience is anything but. This is how history should be shown.",
            "D": "One afternoon was criminal shortness for that collection — I saw perhaps a third before the closing bell chased us out. I have already booked the first Saturday of next month, and this time I am starting on the top floor where I never arrived. The membership card is under consideration too, since three visits pay for it. Places like that are not visits; they are relationships, and mine has only just begun."
        },
        "explanation": "A = Finished the visit quickly (PARAPHRASE: 'back at the entrance café within fifty minutes').\nB = Got lost during the visit (PARAPHRASE: 'labyrinth... surfaced among medieval armour... walked me to the exhibition').\nC = Enjoyed the use of technology (keyword-lite 'screens... app... interactive table').\nD = Wants to visit again (PARAPHRASE: 'already booked the first Saturday of next month').\nNhiễu: souvenirs, ticket price."
    },
    {
        "id": 32,
        "name": "Đề 32: Outdoor activities (Horse riding, Run, Climbing, Mountain biking)",
        "prompt": "Four people are talking about outdoor activities. Match each person to the correct information.",
        "speakers": {
            "A": "horse riding",
            "B": "going for a run",
            "C": "climbing",
            "D": "mountain biking"
        },
        "distractors": [
            "swimming",
            "camping"
        ],
        "script": {
            "A": "My Saturdays begin at the stables before the mist lifts. Brushing her down, checking her hooves, then two hours through the fields with only hoofbeats for conversation — my mare knows the route better than I do by now. People ask if it frightens me, trusting an animal that size. It is the opposite: those two hours of moving together are the calmest partnership in my week. The saddle is my favourite chair in the world.",
            "B": "Rain or shine, my trainers hit the path along the canal at seven. Nothing complicated — just me, my breathing, and five kilometres of towpath before the world wakes up properly. I started to lose my temper less, honestly, and kept going because the mornings felt unfinished without it. Last month I entered my first ten-kilometre race and finished grinning like a fool. Simple legs, simple happiness.",
            "C": "My weekends are vertical. My club drives out to the crags every Sunday, ropes and helmets rattling in the boot, and we spend the day solving the rock face metre by metre. Fingertips ache, forearms burn, and the moment you pull over the top edge repays every scrape. People call it dangerous; done properly, it is chess with your whole body. I have never trusted people more than the ones holding my rope.",
            "D": "Two wheels, fat tyres, forest trails — that is my religion. Saturday mornings I load the bike, drive to the hills, and spend four muddy hours flying down tracks and pushing back up them. The bruises are a fair tax on the joy. My wife inspects the scratches on my arms every weekend and sighs; I remind her the alternative was golf, and she agrees the mud is better."
        },
        "explanation": "A = horse riding (PARAPHRASE: 'stables... my mare... saddle').\nB = going for a run (PARAPHRASE: 'trainers hit the path... five kilometres... race').\nC = climbing (PARAPHRASE: 'vertical... crags... ropes and helmets... rock face').\nD = mountain biking (keyword-lite 'Two wheels... bike... forest trails').\nNhiễu: swimming, camping."
    },
    {
        "id": 33,
        "name": "Đề 33: Outdoor activities (Run, Horse riding, Mountain biking, Walking)",
        "prompt": "Four people are talking about outdoor activities. Match each person to the correct information.",
        "speakers": {
            "A": "going for a run",
            "B": "horse riding",
            "C": "mountain biking",
            "D": "walking"
        },
        "distractors": [
            "snow sports",
            "climbing"
        ],
        "script": {
            "A": "I like sport because it keeps me active, but I've had to be careful about which one. Years ago I fell off a horse and broke my arm, so I gave up riding for good. And climbing is out of the question — I'm terrified of heights. Luckily, there's a forest just behind my house with wide, flat paths, and lots of people jog there. So every morning before work I put on my trainers and run for about forty minutes. It's simple, it's free, and it clears my head.",
            "B": "I've loved horses since I was a little girl. Owning one is far too expensive, of course — the food and the vet bills would eat my whole salary. Many of my friends go skiing in winter, but I've never found snow sports very interesting; I hate the cold. What I'm lucky about is that there are several riding stables near my home, so I don't need a horse of my own. I still spend most weekends there, brushing the horses and riding out through the fields.",
            "C": "Where I live there's a very long beach, and hundreds of people jog along it every morning. I go in the opposite direction. There's a mountain behind the town with steep, rocky trails, and I love riding my bike up there. Pushing up to the top is hard work, but then you get the view — and the ride down is fast and exciting. It's a real challenge every time, and my legs certainly know about it the next day.",
            "D": "I'm getting on a bit now, so I can't do the things I used to. Climbing and cycling are far too much for my knees these days. Jogging isn't a bad idea, I suppose, but I need something slower. So what I do is go for a walk every day in the late afternoon. I follow the path by the river, enjoy the scenery, and by that time of day it's not too hot. It's gentle, but it keeps me fit and happy."
        },
        "explanation": "A – going for a run: 'every morning before work I put on my trainers and run for about forty minutes'. Bẫy: ngựa (đã bỏ vì ngã), climbing (sợ độ cao).\nB – horse riding: 'there are several riding stables near my home... riding out through the fields'. Bẫy: skiing/snow sports là sở thích của BẠN cô ấy.\nC – mountain biking: 'I love riding my bike up there... the ride down is fast and exciting'. Bẫy: jogging là việc người khác làm trên bãi biển.\nD – walking: 'I go for a walk every day in the late afternoon'. Bẫy: climbing, cycling (quá sức), jogging (cần chậm hơn).\nKhông ai chọn: snow sports, climbing — đều được nhắc như thứ KHÔNG làm.\n👉 Mẹo: mỗi người nhắc 2–3 môn nhưng chỉ 1 môn đi với 'I do / I go / I love'; các môn khác đi với 'gave up', 'out of the question', 'my friends'."
    }
];