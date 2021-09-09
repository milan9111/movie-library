function testWebP(callback) {
    var webP = new Image();
        webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
        };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function(support){
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

//===================================================================
const data = [
    {
        id: '1',
        genre: 'drama', 
        movie: 'Зелёная миля/The Green Mile',
        image: 'img/green_mile.jpg',
        year: 1999,
        yearforfilter: 90, 
        country: 'USA',
        rating: 8.5,
        director: 'Фрэнк Дарабонт',
        actors: 'Том Хэнкс, Дэвид Морс, Майкл Кларк Дункан',
        plot: 'Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TODt_q-_4C4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },
    {
        id: '2',
        genre: 'drama', 
        movie: 'Побег из Шоушенка/The Shawshank Redemption',
        image: 'img/shawshank_redemption.jpg',
        year: 1994,
        yearforfilter: 90, 
        country: 'USA',
        rating: 9.2,
        director: 'Фрэнк Дарабонт',
        actors: 'Тим Роббинс, Морган Фриман, Боб Гантон',
        plot: 'Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kgAeKpAPOYk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },
    {
        id: '3',
        genre: 'fantasy', 
        movie: 'Властелин колец: Возвраще́ние короля́/The Lord of the Rings: The Return of the King',
        image: 'img/lord_of_the_rings_the_return_of_the_king.jpg',
        year: 2003,
        yearforfilter: 0, 
        country: 'USA',
        rating: 8.9,
        director: 'Питер Джексон',
        actors: 'Элайджа Вуд, Вигго Мортенсен, Шон Астин',
        plot: 'Повелитель сил тьмы Саурон направляет свою бесчисленную армию под стены Минас-Тирита, крепости Последней Надежды. Он предвкушает близкую победу, но именно это мешает ему заметить две крохотные фигурки — хоббитов, приближающихся к Роковой Горе, где им предстоит уничтожить Кольцо Всевластья.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/lxAeV1-KpSA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },
    {
        id: '4',
        genre: 'fantasy', 
        movie: 'Властелин колец: Две крепости/The Lord of the Rings: The Two Towers',
        image: 'img/lord_of_the_rings_two_towers.jpg',
        year: 2002,
        yearforfilter: 0, 
        country: 'USA',
        rating: 8.7,
        director: 'Питер Джексон',
        actors: 'Элайджа Вуд, Вигго Мортенсен, Шон Астин',
        plot: 'Братство распалось, но Кольцо Всевластья должно быть уничтожено. Фродо и Сэм вынуждены доверится Голлуму, который взялся провести их к вратам Мордора. Громадная армия Сарумана приближается: члены братства и их союзники готовы принять бой. Битва за Средиземье продолжается.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/n8EaedqFfuU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },
    {
        id: '5', 
        genre: 'fantasy',
        movie: 'Властелин колец: Бра́тство Кольца/The Lord of the Rings: The Fellowship of the Ring',
        image: 'img/lord_of_the_rings_fellowship.jpg',
        year: 2001,
        yearforfilter: 0, 
        country: 'USA',
        rating: 8.8,
        director: 'Питер Джексон',
        actors: 'Элайджа Вуд, Иэн Маккеллен, Вигго Мортенсен',
        plot: 'Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/RNksw9VU2BQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },
    {
        id: '6',
        genre: 'drama', 
        movie: 'Форрест Гамп/Forrest Gump',
        image: 'img/forrest_gump.jpg',
        year: 1994,
        yearforfilter: 90, 
        country: 'USA',
        rating: 8.7,
        director: 'Роберт Земекис',
        actors: 'Том Хэнкс, Робин Райт, Гэри Синиз',
        plot: 'Сидя на автобусной остановке, Форрест Гамп — не очень умный, но добрый и открытый парень — рассказывает случайным встречным историю своей необыкновенной жизни. С самого малолетства он страдал от заболевания ног, и соседские хулиганы дразнили мальчика, и в один прекрасный день Форрест открыл в себе невероятные способности к бегу. Подруга детства Дженни всегда его поддерживала и защищала, но вскоре дороги их разошлись',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/gB7wy6YGCGA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },  
    {
        id: '7',
        genre: 'animation', 
        movie: 'Король Лев/The Lion King',
        image: 'img/lion_king.jpg',
        year: 1994,
        yearforfilter: 90, 
        country: 'USA',
        rating: 8.5,
        director: 'Роджер Аллерс',
        actors: '-',
        plot: 'У величественного Короля-Льва Муфасы рождается наследник по имени Симба. Уже в детстве любознательный малыш становится жертвой интриг своего завистливого дяди Шрама, мечтающего о власти.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/a-9JPXDfa_g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },
    {
        id: '8',
        genre: 'action', 
        movie: 'Карты, деньги, два ствола/Lock, Stock and Two Smoking Barrels',
        image: 'img/lock_stock_and_two_smoking.jpg',
        year: 1998,
        yearforfilter: 90, 
        country: 'Great Britain',
        rating: 8.2,
        director: 'Гай Ричи',
        actors: 'Ник Моран, Джейсон Флеминг, Декстер Флетчер',
        plot: 'Четверо молодых парней накопили каждый по 25 тысяч фунтов, чтобы один из них мог сыграть в карты с опытным шулером и матерым преступником, известным по кличке Гарри-Топор. Парень в итоге проиграл 500 тысяч, на уплату долга ему дали неделю.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/HwY1UqW3cgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },
    {
        id: '9',
        genre: 'animation', 
        movie: 'ВАЛЛ-И/WALL-E',
        image: 'img/WALL-E.png',
        year: 2008,
        yearforfilter: 0, 
        country: 'USA',
        rating: 8.4,
        director: 'Эндрю Стэнтон',
        actors: '-',
        plot: 'Робот ВАЛЛ·И из года в год прилежно трудится на опустевшей Земле, очищая нашу планету от гор мусора, которые оставили после себя улетевшие в космос люди. Он и не представляет, что совсем скоро произойдут невероятные события, благодаря которым он встретит друзей, поднимется к звездам и даже сумеет изменить к лучшему своих бывших хозяев, совсем позабывших родную Землю.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/WGiYjaDdgpA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },  
    {
        id: '10',
        genre: 'history', 
        movie: 'Список Шиндлера/Schindlers List',
        image: 'img/schindlers_list.jpg',
        year: 1993,
        yearforfilter: 90, 
        country: 'USA',
        rating: 8.9,
        director: 'Стивен Спилберг',
        actors: 'Лиам Нисон, Бен Кингсли, Рэйф Файнс',
        plot: 'Фильм рассказывает реальную историю загадочного Оскара Шиндлера, члена нацистской партии, преуспевающего фабриканта, спасшего во время Второй мировой войны почти 1200 евреев.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jeTmQgjWEjE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },
    {
        id: '11',
        genre: 'criminal', 
        movie: 'Большой куш/Snatch',
        image: 'img/snatch.jpg',
        year: 2000,
        yearforfilter: 0, 
        country: 'Great Britain',
        rating: 8.3,
        director: 'Гай Ричи',
        actors: 'Джейсон Стейтем, Бенисио дель Торо, Стивен Грэм',
        plot: 'Четырехпалый Френки должен был переправить краденый алмаз из Англии в США своему боссу Эви, но, сделав ставку на подпольный боксерский поединок, попадает в круговорот весьма нежелательных событий. Вокруг него и его груза разворачивается сложная интрига с участием множества колоритных персонажей лондонского дна — русского гангстера, троих незадачливых грабителей, хитрого боксера и угрюмого громилы грозного мафиози. Каждый норовит в одиночку сорвать большой куш.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4W2B-gM4S2c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },
    {
        id: '12',
        genre: 'criminal', 
        movie: 'Криминальное чтиво/Pulp Fiction',
        image: 'img/pulp_fiction.jpg',
        year: 1994,
        yearforfilter: 90, 
        country: 'USA',
        rating: 8.9,
        director: 'Квентин Тарантино',
        actors: 'Джон Траволта, Сэмюэл Л. Джексон, Брюс Уиллис',
        plot: 'Двое бандитов Винсент Вега и Джулс Винфилд ведут философские беседы в перерывах между разборками и решением проблем с должниками криминального босса Марселласа Уоллеса. В первой истории Винсент проводит незабываемый вечер с женой Марселласа Мией. Во второй рассказывается о боксёре Бутче Кулидже, купленном Уоллесом, чтобы сдать бой. В третьей истории Винсент и Джулс по нелепой случайности попадают в неприятности.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2fUuQsLcJVw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },  
    {
        id: '13',
        genre: 'fantastic', 
        movie: 'Назад в будущее/Back to the Future',
        image: 'img/bttf.jpg',
        year: 1985,
        yearforfilter: 80, 
        country: 'USA',
        rating: 8.5,
        director: 'Роберт Земекис',
        actors: 'Майкл Джей Фокс, Кристофер Ллойд, Криспин Гловер',
        plot: 'Подросток Марти с помощью машины времени, сооружённой его другом-профессором доком Брауном, попадает из 80-х в далекие 50-е. Там он встречается со своими будущими родителями, ещё подростками, и другом-профессором, совсем молодым.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ou8w0gQHlRE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },
    {
        id: '14',
        genre: 'drama', 
        movie: '1+1/Intouchables',
        image: 'img/intouchables.jpg',
        year: 2011,
        yearforfilter: 10, 
        country: 'France',
        rating: 8.5,
        director: 'Оливье Накаш',
        actors: 'Франсуа Клюзе, Омар Си',
        plot: 'Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека, который менее всего подходит для этой работы, – молодого жителя предместья Дрисса, только что освободившегося из тюрьмы. Несмотря на то, что Филипп прикован к инвалидному креслу, Дриссу удается привнести в размеренную жизнь аристократа дух приключений.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/tTwFeGArcrs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },
    {
        id: '15',
        genre: 'fantasy', 
        movie: 'Пираты Карибского моря: Проклятие Чёрной жемчужины/Pirates of the Caribbean: The Curse of The Black Pearl',
        image: 'img/pirates_of_the_caribbean.jpg',
        year: 2003,
        yearforfilter: 0, 
        country: 'USA',
        rating: 8,
        director: 'Гор Вербински',
        actors: 'Джонни Депп, Орландо Блум, Кира Найтли',
        plot: 'Жизнь харизматичного авантюриста, капитана Джека Воробья, полная увлекательных приключений, резко меняется, когда его заклятый враг капитан Барбосса похищает корабль Джека Черную Жемчужину а затем нападает на Порт Ройал и крадет прекрасную дочь губернатора Элизабет Свонн.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/SBxju8HuSIQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },  
    {
        id: '16',
        genre: 'fantastic', 
        movie: 'Матрица/The Matrix',
        image: 'img/matrix.jpg',
        year: 1999,
        yearforfilter: 90, 
        country: 'USA',
        rating: 8.7,
        director: 'братья Вачовски',
        actors: 'Киану Ривз, Лоуренс Фишборн, Керри-Энн Мосс',
        plot: 'Жизнь Томаса Андерсона разделена на две части: днём он — самый обычный офисный работник, получающий нагоняи от начальства, а ночью превращается в хакера по имени Нео, и нет места в сети, куда он бы не смог проникнуть. Но однажды всё меняется. Томас узнаёт ужасающую правду о реальности.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/YihPA42fdQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },
    {
        id: '17',
        genre: 'thriller', 
        movie: 'Остров проклятых/Shutter Island',
        image: 'img/shutter_island.jpg',
        year: 2010,
        yearforfilter: 10, 
        country: 'USA',
        rating: 8.2,
        director: 'Мартин Скорсезе',
        actors: 'Леонардо Ди Каприо, Марк Руффало, Бен Кингсли',
        plot: 'Два американских судебных пристава отправляются на один из островов в штате Массачусетс, чтобы расследовать исчезновение пациентки клиники для умалишенных преступников. При проведении расследования им придется столкнуться с паутиной лжи, обрушившимся ураганом и смертельным бунтом обитателей клиники.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_l7R9Rz5URw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },
    {
        id: '18',
        genre: 'drama', 
        movie: 'Достучаться до небес/Knockin On Heavens Door',
        image: 'img/knockin_on_heavens_door.jpg',
        year: 1997,
        yearforfilter: 90, 
        country: 'Germany',
        rating: 8.6,
        director: 'Томас Ян',
        actors: 'Тиль Швайгер, Ян Йозеф Лиферс, Мориц Блайбтрой',
        plot: 'Судьба сводит двух незнакомцев в больнице, где они получают смертельные диагнозы. Но парни не хотят мириться с судьбой и тихо заканчивать свои дни в больничной палате - угнав машину с миллионом немецких марок в багажнике, они сбегают из больницы.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4UGdzkn3UW0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },  
    {
        id: '19',
        genre: 'criminal', 
        movie: 'Джентльмены/The Gentlemen',
        image: 'img/gentlemen.jpg',
        year: 2019,
        yearforfilter: 10, 
        country: 'Great Britain',
        rating: 7.8,
        director: 'Гай Ричи',
        actors: 'Чарли Ханнэм, Генри Голдинг, Мишель Докери',
        plot: 'Один ушлый американец ещё со студенческих лет приторговывал наркотиками, а теперь придумал схему нелегального обогащения с использованием поместий обедневшей английской аристократии и очень неплохо на этом разбогател. Другой пронырливый журналист приходит к Рэю, правой руке американца, и предлагает тому купить киносценарий, в котором подробно описаны преступления его босса при участии других представителей лондонского криминального мира — партнёра-еврея, китайской диаспоры, чернокожих спортсменов и даже русского олигарха.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dABPCMxu074" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },
    {
        id: '20',
        genre: 'thriller', 
        movie: 'Бойцовский клуб/Fight Club',
        image: 'img/fight_club.jpg',
        year: 1999,
        yearforfilter: 90, 
        country: 'USA',
        rating: 8.8,
        director: 'Дэвид Финчер',
        actors: 'Эдвард Нортон, Брэд Питт, Хелена Бонэм Картер',
        plot: 'Сотрудник страховой компании страдает хронической бессонницей и отчаянно пытается вырваться из мучительно скучной жизни. Однажды в очередной командировке он встречает некоего Тайлера Дёрдена — харизматического торговца мылом с извращенной философией. Тайлер уверен, что самосовершенствование — удел слабых, а единственное, ради чего стоит жить — саморазрушение.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/C7-7qQ61QHU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },
    {
        id: '21',
        genre: 'animation', 
        movie: 'Шрек/Shrek',
        image: 'img/shrek.jpg',
        year: 2001,
        yearforfilter: 0, 
        country: 'USA',
        rating: 7.9,
        director: 'Эндрю Адамсон',
        actors: '-',
        plot: 'Жил да был в сказочном государстве большой зеленый великан по имени Шрэк. Жил он в гордом одиночестве в лесу, на болоте, которое считал своим. Но однажды злобный коротышка — лорд Фаркуад, правитель волшебного королевства, безжалостно согнал на Шрэково болото всех сказочных обитателей.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1w1wBO-hlmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },
    {
        id: '22',
        genre: 'animation', 
        movie: 'Душа/Soul',
        image: 'img/soul.jpg',
        year: 2020,
        yearforfilter: 10, 
        country: 'USA',
        rating: 8.1,
        director: 'Пит Доктер',
        actors: '-',
        plot: 'Уже немолодой школьный учитель музыки Джо Гарднер всю жизнь мечтал выступать на сцене в составе джазового ансамбля. Однажды он успешно проходит прослушивание у легендарной саксофонистки и, возвращаясь домой вне себя от счастья, падает в люк и умирает. Теперь у Джо одна дорога — в Великое После, но он сбегает с идущего в вечность эскалатора и случайно попадает в Великое До. Тут новенькие души обретают себя, и у будущих людей зарождаются увлечения, мечты и интересы. Джо становится наставником упрямой души 22, которая уже много веков не может найти свою искру и отправиться на Землю.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/vsb8762mE6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },    
    {
        id: '23', 
        genre: 'drama',
        movie: 'Невидимая сторона/The Blind Side',
        image: 'img/blind_side.jpg',
        year: 2009,
        yearforfilter: 0, 
        country: 'USA',
        rating: 7.6,
        director: 'Джон Ли Хэнкок',
        actors: 'Сандра Буллок, Тим Макгро, Куинтон Аарон',
        plot: 'Благополучная белая семья берет к себе толстого, неграмотного бездомного темнокожего подростка и помогает стать ему спортивной звездой, и поступить в университет.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/uCBjDSs42wI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },    
    {
        id: '24',
        genre: 'fantastic', 
        movie: 'Престиж/The Prestige',
        image: 'img/prestige.jpg',
        year: 2006,
        yearforfilter: 0, 
        country: 'USA',
        rating: 8.5,
        director: 'Кристофер Нолан',
        actors: 'Хью Джекман, Кристиан Бейл, Скарлетт Йоханссон',
        plot: 'Роберт и Альфред - фокусники-иллюзионисты, которые на рубеже XIX и XX веков соперничали друг с другом в Лондоне. С годами их дружеская конкуренция на профессиональной почве перерастает в настоящую войну.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0B6O17m9sWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },    
    {
        id: '25',
        genre: 'comedy', 
        movie: 'Один дома/Home Alone',
        image: 'img/home_alone.jpg',
        year: 1990,
        yearforfilter: 90, 
        country: 'USA',
        rating: 7.6,
        director: 'Крис Коламбус',
        actors: 'Маколей Калкин, Джо Пеши, Дэниел Стерн',
        plot: 'Американское семейство отправляется из Чикаго в Европу, но в спешке сборов бестолковые родители забывают дома... одного из своих детей. Юное создание, однако, не теряется и демонстрирует чудеса изобретательности. И когда в дом залезают грабители, им приходится не раз пожалеть о встрече с милым крошкой.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/bBU_64CTNsw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },    
    {
        id: '26', 
        genre: 'fantastic',
        movie: 'Тёмный рыцарь/The Dark Knight',
        image: 'img/dark_knigth.jpg',
        year: 2008,
        yearforfilter: 0, 
        country: 'USA',
        rating: 9,
        director: 'Кристофер Нолан',
        actors: 'Кристиан Бейл, Хит Леджер, Гэри Олдмен',
        plot: 'Бэтмен поднимает ставки в войне с криминалом. С помощью лейтенанта Джима Гордона и прокурора Харви Дента он намерен очистить улицы Готэма от преступности. Сотрудничество оказывается эффективным, но скоро они обнаружат себя посреди хаоса, развязанного восходящим криминальным гением, известным напуганным горожанам под именем Джокер.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/HF1_epZNoCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },    
    {
        id: '27', 
        genre: 'fantastic',
        movie: 'Терминатор 2: Судный день/Terminator 2: Judgment Day',
        image: 'img/terminator2.jpg',
        year: 1991,
        yearforfilter: 90, 
        country: 'USA',
        rating: 8.5,
        director: 'Джеймс Кэмерон',
        actors: 'Арнольд Шварценеггер, Линда Хэмилтон, Эдвард Фёрлонг',
        plot: 'Прошло более десяти лет с тех пор, как киборг из 2029 года пытался уничтожить Сару Коннор — женщину, чей будущий сын выиграет войну человечества против машин.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/M-SIftG16hU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },    
    {
        id: '28',
        genre: 'fantastic', 
        movie: 'Назад в будущее 2/Back To The Future, Part II',
        image: 'img/back_to_future_part_2.jpg',
        year: 1989,
        yearforfilter: 80, 
        country: 'USA',
        rating: 8.3,
        director: 'Роберт Земекис',
        actors: 'Майкл Джей Фокс, Кристофер Ллойд, Томас Ф. Уилсон',
        plot: 'Продолжение фантастической истории о приключениях американского подростка во времени. На этот раз с помощью модернизированной Доком машины времени Марти из 80-х попадает в будущее.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mukVibYWQDQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },    
    {
        id: '29',
        genre: 'fantasy', 
        movie: 'Гарри Поттер и узник Азкабана/Harry Potter and the Prisoner of Azkaban',
        image: 'img/harry_potter_and_the_prisoner_of_azkaban.jpg',
        year: 2004,
        yearforfilter: 0, 
        country: 'Great Britain',
        rating: 8.2,
        director: 'Альфонсо Куарон',
        actors: 'Дэниел Рэдклифф, Руперт Гринт, Эмма Уотсон',
        plot: 'В третьей части истории о юном волшебнике полюбившиеся всем герои — Гарри Поттер, Рон и Гермиона — возвращаются уже на третий курс школы чародейства и волшебства Хогвартс. На этот раз они должны раскрыть тайну узника, сбежавшего из зловещей тюрьмы Азкабан, чье пребывание на воле создает для Гарри смертельную опасность...',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ofHrcJFd8hA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },    
    {
        id: '30',
        genre: 'drama', 
        movie: 'Одержимость/Whiplash',
        image: 'img/whiplash.jpg',
        year: 2014,
        yearforfilter: 10, 
        country: 'USA',
        rating: 8.5,
        director: 'Дэмьен Шазелл',
        actors: 'Майлз Теллер, Дж. К. Симмонс',
        plot: 'Эндрю мечтает стать великим. Казалось бы, вот-вот его мечта осуществится. Юношу замечает настоящий гений, дирижер лучшего в стране оркестра. Желание Эндрю добиться успеха быстро становится одержимостью, а безжалостный наставник продолжает подталкивать его все дальше и дальше – за пределы человеческих возможностей. Кто выйдет победителем из этой схватки?',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Q9PxDPOo1jw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },    
    {
        id: '31',
        genre: 'animation', 
        movie: 'Твоё имя/Your Name',
        image: 'img/kimi_no_na_wa.jpg',
        year: 2016,
        yearforfilter: 10, 
        country: 'Japan',
        rating: 8.4,
        director: 'Макото Синкай',
        actors: '-',
        plot: 'Токийский парень Таки и провинциальная девушка Мицуха обнаруживают, что между ними существует странная связь. Во сне они меняются телами и проживают жизни друг друга. Но однажды эта способность исчезает так же внезапно, как появилась. Таки решает во что бы то ни стало отыскать Мицуху.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/tT7b5wR0IOM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },       
    {
        id: '32',
        genre: 'action', 
        movie: 'Леон/Leon',
        image: 'img/leon.jpg',
        year: 1994,
        yearforfilter: 90, 
        country: 'France',
        rating: 8.5,
        director: 'Люк Бессон',
        actors: 'Жан Рено, Натали Портман, Гэри Олдмен',
        plot: 'Профессиональный убийца Леон неожиданно для себя самого решает помочь 11-летней соседке Матильде, семью которой убили коррумпированные полицейские.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/hvya_q8KM80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },        
    {
        id: '33', 
        genre: 'fantasy',
        movie: 'Гарри Поттер и философский камень/Harry Potter and the Philosopher’s Stone',
        image: 'img/harry_potter_and_the_philosophers_stone.jpg',
        year: 2001,
        yearforfilter: 0, 
        country: 'Great Britain',
        rating: 8.2,
        director: 'Крис Коламбус',
        actors: 'Дэниел Рэдклифф, Руперт Гринт, Эмма Уотсон',
        plot: 'Жизнь десятилетнего Гарри Поттера нельзя назвать сладкой: родители умерли, едва ему исполнился год, а от дяди и тёти, взявших сироту на воспитание, достаются лишь тычки да подзатыльники. Но в одиннадцатый день рождения Гарри всё меняется. Странный гость, неожиданно появившийся на пороге, приносит письмо, из которого мальчик узнаёт, что на самом деле он - волшебник и зачислен в школу магии под названием Хогвартс. А уже через пару недель Гарри будет мчаться в поезде Хогвартс-экспресс навстречу новой жизни, где его ждут невероятные приключения, верные друзья и самое главное — ключ к разгадке тайны смерти его родителей.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ppnEwu-z9kU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },        
    {
        id: '34', 
        genre: 'action',
        movie: 'Джанго освобождённый/Django Unchained',
        image: 'img/django_unchained.jpg',
        year: 2012,
        yearforfilter: 10, 
        country: 'USA',
        rating: 8.4,
        director: 'Квентин Тарантино',
        actors: 'Джейми Фокс, Кристоф Вальц, Леонардо Ди Каприо',
        plot: 'Эксцентричный охотник за головами, также известный как Дантист, промышляет отстрелом самых опасных преступников. Работенка пыльная, и без надежного помощника ему не обойтись. Но как найти такого и желательно не очень дорогого? Освобождённый им раб по имени Джанго – прекрасная кандидатура. Правда, у нового помощника свои мотивы – кое с чем надо сперва разобраться.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4McenUEna3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },        
    {
        id: '35', 
        genre: 'history',
        movie: 'Гладиатор/Gladiator',
        image: 'img/gladiator.jpg',
        year: 2000,
        yearforfilter: 0, 
        country: 'USA',
        rating: 8.5,
        director: 'Ридли Скотт',
        actors: 'Рассел Кроу, Хоакин Феникс, Конни Нилсен',
        plot: 'В великой Римской империи не было военачальника, равного генералу Максимусу. Непобедимые легионы, которыми командовал этот благородный воин, боготворили его и могли последовать за ним даже в ад.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/F2Dr7Qb2Zf8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },        
    {
        id: '36', 
        genre: 'thriller',
        movie: 'Отступники/The Departed',
        image: 'img/departed.jpg',
        year: 2006,
        yearforfilter: 0, 
        country: 'USA',
        rating: 8.5,
        director: 'Мартин Скорсезе',
        actors: 'Леонардо Ди Каприо, Мэтт Деймон, Джек Николсон',
        plot: 'Два лучших выпускника полицейской академии оказались по разные стороны баррикады: один из них – агент мафии в рядах правоохранительных органов, другой – «крот», внедрённый в мафию. Каждый считает своим долгом обнаружить и уничтожить противника, но постоянная жизнь в искажённых реалиях меняет внутренний мир героев.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4c8-L3dYBB8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },        
    {
        id: '37',
        genre: 'history', 
        movie: 'Зелёная книга/Green Book',
        image: 'img/green_book.jpg',
        year: 2018,
        yearforfilter: 10, 
        country: 'USA',
        rating: 8.2,
        director: 'Питер Фаррелли',
        actors: 'Вигго Мортенсен, Махершала Али',
        plot: '1960-е годы. После закрытия нью-йоркского ночного клуба на ремонт вышибала Тони по прозвищу Болтун ищет подработку на пару месяцев. Как раз в это время Дон Ширли — утонченный светский лев, богатый и талантливый чернокожий музыкант, исполняющий классическую музыку — собирается в турне по южным штатам, где ещё сильны расистские убеждения и царит сегрегация. Он нанимает Тони в качестве водителя, телохранителя и человека, способного решать текущие проблемы. У этих двоих так мало общего, и эта поездка навсегда изменит жизнь обоих.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/e6b9urtUJt0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },        
    {
        id: '38', 
        genre: 'thriller',
        movie: 'Молчание ягнят/The Silence of the Lambs',
        image: 'img/the_silence_of_the_lambs.jpg',
        year: 1991,
        yearforfilter: 90, 
        country: 'USA',
        rating: 8.6,
        director: 'Джонатан Демми',
        actors: 'Энтони Хопкинс, Джоди Фостер, Скотт Гленн',
        plot: 'Психопат похищает и убивает молодых женщин по всему Среднему Западу. ФБР, уверенное, что все преступления совершены одним и тем же человеком, поручает агенту Клариссе Старлинг встретиться с заключенным-маньяком Ганнибалом Лектером, который мог бы помочь составить психологический портрет убийцы. Сам Лектер отбывает наказание за убийства и каннибализм. Он согласен помочь Клариссе лишь в том случае, если она попотчует его больное воображение подробностями своей личной жизни.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9JTNhAOVosk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },        
    {
        id: '39', 
        genre: 'drama',
        movie: 'Волк с Уолл-стрит/The Wolf of Wall Street',
        image: 'img/the_wolf_of_wall_street.jpg',
        year: 2013,
        yearforfilter: 10, 
        country: 'USA',
        rating: 8.2,
        director: 'Мартин Скорсезе',
        actors: 'Леонардо Ди Каприо, Джона Хилл, Марго Робби',
        plot: '1987 год. Джордан Белфорт становится брокером в успешном инвестиционном банке. Вскоре банк закрывается после внезапного обвала индекса Доу-Джонса. По совету жены Терезы Джордан устраивается в небольшое заведение, занимающееся мелкими акциями. Его настойчивый стиль общения с клиентами и врождённая харизма быстро даёт свои плоды. Он знакомится с соседом по дому Донни, торговцем, который сразу находит общий язык с Джорданом и решает открыть с ним собственную фирму.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CHivqmutR0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },   
    {
        id: '40', 
        genre: 'animation',
        movie: 'Корпорация монстров/Monsters, Inc',
        image: 'img/monsters.jpg',
        year: 2001,
        yearforfilter: 0, 
        country: 'USA',
        rating: 8.1,
        director: 'Пит Доктер',
        actors: '-',
        plot: 'Склизкий гад в сливном бачке, мохнатый зверь, похожий на чудовище из «Аленького цветочка», гигантские мокрицы под кроватью — все они существуют на самом деле. Все, что им нужно — пугать детей, потому что из детских криков они получают электричество.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ynXLEmJV4Ko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },    
    {
        id: '41', 
        genre: 'animation',
        movie: 'Рататуй/Ratatouille',
        image: 'img/ratatui.jpg',
        year: 2007,
        yearforfilter: 0, 
        country: 'USA',
        rating: 8,
        director: 'Брэд Бёрд',
        actors: '-',
        plot: 'Крыс Реми обладает уникальным вкусом. Он готов рисковать собственной жизнью, чтобы посмотреть любимое кулинарное шоу и раздобыть какую-нибудь приправку или просто свежий продукт. Реми живет со своими сородичами, которые его не понимают и не принимают его увлечения кулинарией. Когда Реми случайно попадает на кухню шикарного ресторана, он решает воспользоваться выпавшим ему шансом и проверить свои навыки.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mqV_C5eqUus" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },    
    {
        id: '42',
        genre: 'criminal', 
        movie: 'Поймай меня, если сможешь/Catch Me If You Can',
        image: 'img/catch_me_if_you_can.jpg',
        year: 2002,
        yearforfilter: 0, 
        country: 'USA',
        rating: 8.1,
        director: 'Стивен Спилберг',
        actors: 'Леонардо Ди Каприо, Том Хэнкс, Кристофер Уокен',
        plot: 'Фрэнк Эбегнейл успел поработать врачом, адвокатом и пилотом на пассажирской авиалинии – и все это до достижения полного совершеннолетия в 21 год. Мастер в обмане и жульничестве, он также обладал искусством подделки документов, что в конечном счете принесло ему миллионы долларов, которые он получил по фальшивым чекам.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/nH3wJYOlXYw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },    
    {
        id: '43', 
        genre: 'comedy',
        movie: 'Укрощение строптивого/Il bisbetico domato',
        image: 'img/il_bisbetico_domato.jpg',
        year: 1980,
        yearforfilter: 80, 
        country: 'Italy',
        rating: 7.7,
        director: 'Кастеллано и Пиполо',
        actors: 'Адриано Челентано, Орнелла Мути',
        plot: 'Категорически не приемлющий женского общества грубоватый фермер вполне счастлив и доволен своей холостяцкой жизнью. Но неожиданно появившаяся в его жизни женщина пытается изменить его взгляды на жизнь и очаровать его.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mhw8jnPJ-aQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },    
    {
        id: '44', 
        genre: 'animation',
        movie: 'Стальной гигант/The Iron Giant',
        image: 'img/iron_giant.jpg',
        year: 1999,
        yearforfilter: 90, 
        country: 'USA',
        rating: 8,
        director: 'Брэд Бёрд',
        actors: '-',
        plot: 'Жители тихого американского городка становятся свидетелями ослепительной вспышки и падения огромного объекта. Спустя несколько дней мальчуган по имени Хогарт Хьюз находит в окрестностях гигантского робота, прилетевшего на Землю из далекой космической галактики.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/zgqaxqCUUBY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },     
    {
        id: '45', 
        genre: 'history',
        movie: 'Титаник/Titanic',
        image: 'img/titanic.png',
        year: 1997,
        yearforfilter: 90, 
        country: 'USA',
        rating: 7.8,
        director: 'Джеймс Кэмерон',
        actors: 'Леонардо Ди Каприо, Кейт Уинслет, Билли Зейн',
        plot: 'В первом и последнем плавании шикарного «Титаника» встречаются двое. Пассажир нижней палубы Джек выиграл билет в карты, а богатая наследница Роза отправляется в Америку, чтобы выйти замуж по расчёту. Чувства молодых людей только успевают расцвести, и даже не классовые различия создадут испытания влюблённым, а айсберг, вставший на пути считавшегося непотопляемым лайнера.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/-vbSksVGg4s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        facts: 'Факты'
    },         
];


//===================================================================



// let dataURL = 'https://api.jsonbin.io/b/6134f9b2dfe0cf16eb558ebe';

// async function loadData() {
//     try {
//         const response = await fetch(dataURL);
//         const data = await response.json();
//     } catch (e) {
//         console.error(e);
//     } 
// }
// loadData();
  
//===================================================================

const nameUser = document.querySelector('.name-user'); 
const greetings = document.querySelector('.greetings'); 
const filmGenre = document.querySelector('.film-genre'); 
const releaseYear = document.querySelector('.release-year'); 
const selectedFilms = document.querySelector('.selected-films'); 
const information = document.querySelector('.information');

const selectedFilmsRow = document.querySelector('.selected-films__row');
const informationBody = document.querySelector('.information__body');

const nameUserSubmit = document.querySelector('.name-user__submit');
const greetingsBtn = document.querySelector('.greetings__btn');
const filmGenreBtn = document.querySelector('.film-genre__btn');
const filmGenreLabel = document.querySelectorAll('.film-genre__label');
const realeseYearSubmit = document.querySelector('.realese-year__submit');
const realeseYearBtn = document.querySelector('.realese-year__btn');

const informationBtn = document.querySelector('.information__btn');

const nameUserInput = document.querySelector('.name-user__input');

let greetingsTitle = document.querySelector('.greetings__title');
let greetingsTitleUser = '';

const filmGenreItem = document.querySelectorAll('.film-genre__item');
let arrFilmGenre = [];

const realeseYearOption = document.querySelector('.realese-year__option');
let arrRealeseYear = [];

let resultArrGenre = [];
let resultArrGenreAndYear = [];



nameUserInput.addEventListener('input', () => {
    nameUserInput.style.borderColor = 'rgb(255, 30, 0)';
    greetingsTitleUser = nameUserInput.value;
})

nameUserSubmit.addEventListener('click', (event) => {
    if(greetingsTitleUser.trim() !== '' && event.target) {
        // localStorage.setItem('name', greetingsTitleUser);
        greetingsTitle.innerText = `Добро пожаловать, ${greetingsTitleUser}!`;
        nameUser.classList.remove('active-block');
        greetings.classList.add('active-block');
    }
})

greetingsBtn.addEventListener('click', () => {
    greetings.classList.remove('active-block');
    filmGenre.classList.add('active-block');
})

filmGenreBtn.addEventListener('click', () => {
   if(arrFilmGenre.length > 0) {
    filmGenre.classList.remove('active-block');
    releaseYear.classList.add('active-block');
    sortByGenre(data, arrFilmGenre);
   }
})

realeseYearSubmit.addEventListener('click', () => {
    if(arrRealeseYear.length > 0) {
     releaseYear.classList.remove('active-block');
     selectedFilms.classList.add('active-block');
     sortByYear(arrRealeseYear);
    }
})

realeseYearBtn.addEventListener('click', () => {
    arrRealeseYear.length = 0;
    releaseYear.classList.remove('active-block');
    selectedFilms.classList.add('active-block');
    renderSelectedFilms(resultArrGenre);
})


informationBtn.addEventListener('click', () => {
    information.classList.remove('active-block');
    selectedFilms.classList.add('active-block');
})


filmGenreItem.forEach((item) => {
    item.addEventListener('click', setArrFilmGenre);
    function setArrFilmGenre(event) {
      if(item.checked) {
        arrFilmGenre.push(event.target.id);
        ((event.target).nextElementSibling).style.color = 'rgb(255, 30, 0)';
      } else {
        arrFilmGenre.splice(arrFilmGenre.indexOf(event.target.id), 1);
        ((event.target).nextElementSibling).style.color = 'rgba(255, 255, 0)'; 
      }
    }
});

 
realeseYearOption.addEventListener('click', setArrRealeseYear);
function setArrRealeseYear(event) {
     if(event.target.value === '80-89') {
        arrRealeseYear.length = 0;
        arrRealeseYear.push(80);
    } else if (event.target.value === '90-99') {
        arrRealeseYear.length = 0;
        arrRealeseYear.push(90);
    } else if (event.target.value === '00-09') {
        arrRealeseYear.length = 0;
        arrRealeseYear.push(0);
    } else if (event.target.value === '10-21') {
        arrRealeseYear.length = 0;
        arrRealeseYear.push(10);
    }
}


function sortByGenre(data, filterByGenre) {
    data.forEach((item) => {
        if(filterByGenre.includes(item.genre)) {
            resultArrGenre.push(item);
        }
    })
}

function sortByYear(year) {
    resultArrGenreAndYear = [];
    resultArrGenre.forEach((item) => {
        if(year.includes(item.yearforfilter)) {
            resultArrGenreAndYear.push(item);
        }
    })
    renderSelectedFilms(resultArrGenreAndYear); 
}


function renderSelectedFilms(selectedMovies) {
    if(selectedMovies.length === 0) {
        let renderInfo = `
        <div class="selected-films__colum">
        <div class="selected-films__title">
            <span>Извините, фильмов по Вашим предпочтениям нет!</span>    
        </div>
        <button class="selected-films__btn-none btn">Попробовать еще!</button>
        </div>
        `
        selectedFilmsRow.innerHTML += renderInfo;
        const selectedFilmsBtnNone = document.querySelector('.selected-films__btn-none');
        selectedFilmsBtnNone.addEventListener('click', () => {
            window.location.reload();
        })
    } else {
        selectedMovies.forEach((item) => {
            let renderInfo = `
            <div class="selected-films__colum">
                <div class="selected-films__title-movie">
                    <span>${item.movie}</span>    
                </div>
                <div class="selected-films__img">
                    <img src="${item.image}" alt="">
                </div>
                <button class="selected-films__btn btn" value="${item.id}">О фильме</button>
            </div>
            
            `
            selectedFilmsRow.innerHTML += renderInfo;
            const selectedFilmsBtn = document.querySelectorAll('.selected-films__btn');
            selectedFilmsBtn.forEach((elem) => {
                elem.addEventListener('click', createInfoPage);
            })
        })
    }
}

    function createInfoPage (event) {
        let idMovie = event.target.value;
        data.forEach((item) => {
            if(item.id === idMovie) {
                let renderInfoSelectedFilm = `
                <div class="information__title">
                    <span>${item.movie}</span>    
                </div>
                <div class="information__img">
                    <img src="${item.image}" alt="poster">
                </div>
                <div class="information__year">
                    Год:<span> ${item.year}</span>
                </div>
                <div class="information__country">
                    Страна:<span> ${item.country}</span>
                </div>
                <div class="information__rating">
                    Рейтинг IMDb: <i class="fas fa-star"></i> <span> ${item.rating}</span>
                </div>
                <div class="information__director">
                    Режиссер:<span> ${item.director}</span>
                </div>
                <div class="information__actors">
                    Актеры:<span> ${item.actors}</span>
                </div>
                <div class="information__plot">
                    ${item.plot}
                </div>
                <div class="information__trailer">
                    <div>Трейлер:</div> 
                    ${item.trailer}
                </div>
                <div class="information__facts">

                </div>
        `
            informationBody.innerHTML = renderInfoSelectedFilm;
            }
        }) 
        selectedFilms.classList.remove('active-block');
        information.classList.add('active-block');
    }



        

        






 