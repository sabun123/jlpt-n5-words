const data = [
    {
        word: "食べます",
        ipa_pronunciation: ["tabemasɯ"],
        translations: {
            en: ["eat"],
            vn: ["ăn"],
            my: ["makan"],
            zh: ["吃"],
            ja: ["たべます"],
            ar: ["يأكل"]
        },
    },
    {
        word: "本",
        ipa_pronunciation: ["hoɴ"],
        translations: {
            en: ["book"],
            vn: ["sách"],
            my: ["buku"],
            zh: ["书"],
            ja: ["ほん"],
            ar: ["كتاب"]
        },
    },
    {
        word: "行きます",
        ipa_pronunciation: ["ikimasɯ"],
        translations: {
            en: ["go"],
            vn: ["đi"],
            my: ["pergi"],
            zh: ["去"],
            ja: ["いきます"],
            ar: ["يذهب"]
        },
    },
    {
        word: "学生",
        ipa_pronunciation: ["ɡaːkseː"],
        translations: {
            en: ["student"],
            vn: ["học sinh"],
            my: ["pelajar"],
            zh: ["学生"],
            ja: ["がくせい"],
            ar: ["طالب"]
        },
    },
    {
        word: "先生",
        ipa_pronunciation: ["senseː"],
        translations: {
            en: ["teacher"],
            vn: ["thầy giáo", "cô giáo"],
            my: ["guru"],
            zh: ["老师"],
            ja: ["せんせい"],
            ar: ["معلم"]
        },
    },
    {
        word: "学校",
        ipa_pronunciation: ["ɡaːkoː"],
        translations: {
            en: ["school"],
            vn: ["trường học"],
            my: ["sekolah"],
            zh: ["学校"],
            ja: ["がっこう"],
            ar: ["مدرسة"]
        },
    },
    {
        word: "好きです",
        ipa_pronunciation: ["suki desɯ"],
        translations: {
            en: ["like"],
            vn: ["thích"],
            my: ["suka"],
            zh: ["喜欢"],
            ja: ["すきです"],
            ar: ["يحب"]
        },
    },
    {
        word: "大きい",
        ipa_pronunciation: ["oːkii"],
        translations: {
            en: ["big"],
            vn: ["lớn"],
            my: ["besar"],
            zh: ["大"],
            ja: ["おおきい"],
            ar: ["كبير"]
        },
    },
    {
        word: "小さい",
        ipa_pronunciation: ["tɕisiː"],
        translations: {
            en: ["small"],
            vn: ["nhỏ"],
            my: ["kecil"],
            zh: ["小"],
            ja: ["ちいさい"],
            ar: ["صغير"]
        },
    },
    {
        word: "新しい",
        ipa_pronunciation: ["atarasikɯ"],
        translations: {
            en: ["new"],
            vn: ["mới"],
            my: ["baru"],
            zh: ["新"],
            ja: ["あたらしい"],
            ar: ["جديد"]
        },
    },
    {
        word: "来ます",
        ipa_pronunciation: ["kimasɯ"],
        translations: {
            en: ["come"],
            vn: ["đến"],
            my: ["datang"],
            zh: ["来"],
            ja: ["きます"],
            ar: ["يأتي"]
        },
    },
    {
        word: "見ます",
        ipa_pronunciation: ["mimasɯ"],
        translations: {
            en: ["see", "look"],
            vn: ["xem", "nhìn"],
            my: ["lihat"],
            zh: ["看"],
            ja: ["みます"],
            ar: ["يرى"]
        },
    },
    {
        word: "話します",
        ipa_pronunciation: ["hanasimasɯ"],
        translations: {
            en: ["talk", "speak"],
            vn: ["nói chuyện"],
            my: ["berbicara"],
            zh: ["说话"],
            ja: ["はなします"],
            ar: ["يتكلم"]
        },
    },
    {
        word: "友達",
        ipa_pronunciation: ["toːmo dʑi"],
        translations: {
            en: ["friend"],
            vn: ["bạn bè"],
            my: ["kawan"],
            zh: ["朋友"],
            ja: ["ともだち"],
            ar: ["صديق"]
        },
    },
    {
        word: "時間",
        ipa_pronunciation: ["dʑikaɴ"],
        translations: {
            en: ["time"],
            vn: ["thời gian"],
            my: ["masa"],
            zh: ["时间"],
            ja: ["じかん"],
            ar: ["وقت"]
        },
    },
    {
        word: "家",
        ipa_pronunciation: ["ie"],
        translations: {
            en: ["house"],
            vn: ["nhà"],
            my: ["rumah"],
            zh: ["家"],
            ja: ["いえ"],
            ar: ["منزل"]
        },
    },
    {
        word: "犬",
        ipa_pronunciation: ["iɴ"],
        translations: {
            en: ["dog"],
            vn: ["chó"],
            my: ["anjing"],
            zh: ["狗"],
            ja: ["いぬ"],
            ar: ["كلب"]
        },
    },
    {
        word: "猫",
        ipa_pronunciation: ["neko"],
        translations: {
            en: ["cat"],
            vn: ["mèo"],
            my: ["kucing"],
            zh: ["猫"],
            ja: ["ねこ"],
            ar: ["قطة"]
        },
    },
    {
        word: "鳥",
        ipa_pronunciation: ["toːɾi"],
        translations: {
            en: ["bird"],
            vn: ["chim"],
            my: ["burung"],
            zh: ["鸟"],
            ja: ["とり"],
            ar: ["طائر"]
        },
    },
    {
        word: "花",
        ipa_pronunciation: ["hana"],
        translations: {
            en: ["flower"],
            vn: ["hoa"],
            my: ["bunga"],
            zh: ["花"],
            ja: ["はな"],
            ar: ["زهرة"]
        },
    },
    {
        word: "山",
        ipa_pronunciation: ["jama"],
        translations: {
            en: ["mountain"],
            vn: ["núi"],
            my: ["gunung"],
            zh: ["山"],
            ja: ["やま"],
            ar: ["جبل"]
        },
    },
    {
        word: "川",
        ipa_pronunciation: ["kawa"],
        translations: {
            en: ["river"],
            vn: ["sông"],
            my: ["sungai"],
            zh: ["河"],
            ja: ["かわ"],
            ar: ["نهر"]
        },
    },
    {
        word: "公園",
        ipa_pronunciation: ["koːeŋ"],
        translations: {
            en: ["park"],
            vn: ["công viên"],
            my: ["taman"],
            zh: ["公园"],
            ja: ["こうえん"],
            ar: ["حديقة"]
        },
    },
    {
        word: "部屋",
        ipa_pronunciation: ["beja"],
        translations: {
            en: ["room"],
            vn: ["phòng"],
            my: ["bilik"],
            zh: ["房间"],
            ja: ["へや"],
            ar: ["غرفة"]
        },
    },
    {
        word: "男",
        ipa_pronunciation: ["otoko"],
        translations: {
            en: ["man"],
            vn: ["nam giới"],
            my: ["lelaki"],
            zh: ["男"],
            ja: ["おとこ"],
            ar: ["رجل"]
        },
    },
    {
        word: "女",
        ipa_pronunciation: ["onna"],
        translations: {
            en: ["woman"],
            vn: ["nữ giới"],
            my: ["perempuan"],
            zh: ["女"],
            ja: ["おんな"],
            ar: ["امرأة"]
        },
    },
    {
        word: "子供",
        ipa_pronunciation: ["kodomo"],
        translations: {
            en: ["child"],
            vn: ["trẻ em"],
            my: ["anak-anak"],
            zh: ["孩子"],
            ja: ["こども"],
            ar: ["طفل"]
        },
    },
    {
        word: "父",
        ipa_pronunciation: ["otoːso"],
        translations: {
            en: ["father"],
            vn: ["cha"],
            my: ["ayah"],
            zh: ["父"],
            ja: ["おとうさん"],
            ar: ["أب"]
        },
    },
    {
        word: "母",
        ipa_pronunciation: ["okaːsa"],
        translations: {
            en: ["mother"],
            vn: ["mẹ"],
            my: ["ibu"],
            zh: ["母"],
            ja: ["おかあさん"],
            ar: ["أم"]
        },
    },
    {
        word: "兄",
        ipa_pronunciation: ["aːni"],
        translations: {
            en: ["older brother"],
            vn: ["anh trai"],
            my: ["abang"],
            zh: ["兄"],
            ja: ["あに"],
            ar: ["أخ"]
        },
    },
    {
        word: "姉",
        ipa_pronunciation: ["aːne"],
        translations: {
            en: ["older sister"],
            vn: ["chị gái"],
            my: ["kakak perempuan"],
            zh: ["姐"],
            ja: ["あね"],
            ar: ["أخت"]
        },
    },
    {
        word: "弟",
        ipa_pronunciation: ["otoːto"],
        translations: {
            en: ["younger brother"],
            vn: ["em trai"],
            my: ["adik lelaki"],
            zh: ["弟"],
            ja: ["おとうと"],
            ar: ["أخ"]
        },
    },
    {
        word: "妹",
        ipa_pronunciation: ["imoːto"],
        translations: {
            en: ["younger sister"],
            vn: ["em gái"],
            my: ["adik perempuan"],
            zh: ["妹"],
            ja: ["いもうと"],
            ar: ["أخت"]
        },
    },
    {
        word: "車",
        ipa_pronunciation: ["kuːɾa"],
        translations: {
            en: ["car"],
            vn: ["xe hơi"],
            my: ["kereta"],
            zh: ["车"],
            ja: ["くるま"],
            ar: ["سيارة"]
        },
    },
    {
        word: "電車",
        ipa_pronunciation: ["deːnsja"],
        translations: {
            en: ["train"],
            vn: ["tàu điện"],
            my: ["kereta api"],
            zh: ["电车"],
            ja: ["でんしゃ"],
            ar: ["قطار كهربائي"]
        },
    },
    {
        word: "自転車",
        ipa_pronunciation: ["dʑiteːnʃa"],
        translations: {
            en: ["bicycle"],
            vn: ["xe đạp"],
            my: ["basikal"],
            zh: ["自行车"],
            ja: ["じてんしゃ"],
            ar: ["دراجة هوائية"]
        },
    },
    {
        word: "飛行機",
        ipa_pronunciation: ["hikoːki"],
        translations: {
            en: ["airplane"],
            vn: ["máy bay"],
            my: ["kapal terbang"],
            zh: ["飞机"],
            ja: ["ひこうき"],
            ar: ["طائرة"]
        },
    },
    {
        word: "雨",
        ipa_pronunciation: ["ame"],
        translations: {
            en: ["rain"],
            vn: ["mưa"],
            my: ["hujan"],
            zh: ["雨"],
            ja: ["あめ"],
            ar: ["مطر"]
        },
    },
    {
        word: "雪",
        ipa_pronunciation: ["juːki"],
        translations: {
            en: ["snow"],
            vn: ["tuyết"],
            my: ["salji"],
            zh: ["雪"],
            ja: ["ゆき"],
            ar: ["ثلج"]
        },
    },
    {
        word: "風",
        ipa_pronunciation: ["kaːze"],
        translations: {
            en: ["wind"],
            vn: ["gió"],
            my: ["angin"],
            zh: ["风"],
            ja: ["かぜ"],
            ar: ["رياح"]
        },
    },
    {
        word: "寒い",
        ipa_pronunciation: ["samɯi"],
        translations: {
            en: ["cold"],
            vn: ["lạnh"],
            my: ["sejuk"],
            zh: ["冷"],
            ja: ["さむい"],
            ar: ["بارد"]
        },
    },
    {
        word: "暑い",
        ipa_pronunciation: ["atsɯi"],
        translations: {
            en: ["hot"],
            vn: ["nóng"],
            my: ["panas"],
            zh: ["热"],
            ja: ["あつい"],
            ar: ["حار"]
        },
    },
    {
        word: "暖かい",
        ipa_pronunciation: ["atatakai"],
        translations: {
            en: ["warm"],
            vn: ["ấm áp"],
            my: ["hangat"],
            zh: ["温暖"],
            ja: ["あったかい"],
            ar: ["دافئ"]
        },
    },
    {
        word: "涼しい",
        ipa_pronunciation: ["suzusʰii"],
        translations: {
            en: ["cool"],
            vn: ["mát mẻ"],
            my: ["sejuk"],
            zh: ["凉爽"],
            ja: ["すずしい"],
            ar: ["معتدل"]
        },
    },
    {
        word: "朝",
        ipa_pronunciation: ["asa"],
        translations: {
            en: ["morning"],
            vn: ["buổi sáng"],
            my: ["pagi"],
            zh: ["早晨"],
            ja: ["あさ"],
            ar: ["صباح"]
        },
    },
    {
        word: "昼",
        ipa_pronunciation: ["hiru"],
        translations: {
            en: ["noon"],
            vn: ["buổi trưa"],
            my: ["tengah hari"],
            zh: ["中午"],
            ja: ["ひる"],
            ar: ["ظهيرة"]
        },
    },
    {
        word: "夜",
        ipa_pronunciation: ["yoɾu"],
        translations: {
            en: ["night"],
            vn: ["buổi tối"],
            my: ["malam"],
            zh: ["夜晚"],
            ja: ["よる"],
            ar: ["ليل"]
        },
    },
    {
        word: "春",
        ipa_pronunciation: ["haɾɯ"],
        translations: {
            en: ["spring"],
            vn: ["mùa xuân"],
            my: ["musim bunga"],
            zh: ["春天"],
            ja: ["はる"],
            ar: ["ربيع"]
        },
    },
    {
        word: "夏",
        ipa_pronunciation: ["naɾɯ"],
        translations: {
            en: ["summer"],
            vn: ["mùa hè"],
            my: ["musim panas"],
            zh: ["夏天"],
            ja: ["なつ"],
            ar: ["صيف"]
        },
    },
    {
        word: "秋",
        ipa_pronunciation: ["aɾɯ"],
        translations: {
            en: ["autumn"],
            vn: ["mùa thu"],
            my: ["musim gugur"],
            zh: ["秋天"],
            ja: ["あき"],
            ar: ["خريف"]
        },
    },
    {
        word: "冬",
        ipa_pronunciation: ["fɯɾɯ"],
        translations: {
            en: ["winter"],
            vn: ["mùa đông"],
            my: ["musim sejuk"],
            zh: ["冬天"],
            ja: ["ふゆ"],
            ar: ["شتاء"]
        },
    },
    {
        word: "月曜日",
        ipa_pronunciation: ["getsujoːbi"],
        translations: {
            en: ["Monday"],
            vn: ["thứ hai"],
            my: ["Isnin"],
            zh: ["星期一"],
            ja: ["げつようび"],
            ar: ["الاثنين"]
        },
    },
    {
        word: "火曜日",
        ipa_pronunciation: ["kaʝoːbi"],
        translations: {
            en: ["Tuesday"],
            vn: ["thứ ba"],
            my: ["Selasa"],
            zh: ["星期二"],
            ja: ["かようび"],
            ar: ["الثلاثاء"]
        },
    },
    {
        word: "水曜日",
        ipa_pronunciation: ["suʝoːbi"],
        translations: {
            en: ["Wednesday"],
            vn: ["thứ tư"],
            my: ["Rabu"],
            zh: ["星期三"],
            ja: ["すいようび"],
            ar: ["الأربعاء"]
        },
    },
    {
        word: "木曜日",
        ipa_pronunciation: ["mokuyoːbi"],
        translations: {
            en: ["Thursday"],
            vn: ["thứ năm"],
            my: ["Khamis"],
            zh: ["星期四"],
            ja: ["もくようび"],
            ar: ["الخميس"]
        },
    },
    {
        word: "金曜日",
        ipa_pronunciation: ["kinjoːbi"],
        translations: {
            en: ["Friday"],
            vn: ["thứ sáu"],
            my: ["Jumaat"],
            zh: ["星期五"],
            ja: ["きんようび"],
            ar: ["الجمعة"]
        },
    },
    {
        word: "土曜日",
        ipa_pronunciation: ["dojoːbi"],
        translations: {
            en: ["Saturday"],
            vn: ["thứ bảy"],
            my: ["Sabtu"],
            zh: ["星期六"],
            ja: ["どようび"],
            ar: ["السبت"]
        },
    },
    {
        word: "日曜日",
        ipa_pronunciation: ["nʲitoːbi"],
        translations: {
            en: ["Sunday"],
            vn: ["chủ nhật"],
            my: ["Ahad"],
            zh: ["星期日"],
            ja: ["にちようび"],
            ar: ["الأحد"]
        },
    },
    {
        word: "今",
        ipa_pronunciation: ["ima"],
        translations: {
            en: ["now"],
            vn: ["bây giờ"],
            my: ["sekarang"],
            zh: ["现在"],
            ja: ["いま"],
            ar: ["الآن"]
        },
    },
    {
        word: "昨日",
        ipa_pronunciation: ["kinoo"],
        translations: {
            en: ["yesterday"],
            vn: ["hôm qua"],
            my: ["semalam"],
            zh: ["昨天"],
            ja: ["きのう"],
            ar: ["أمس"]
        },
    },
    {
        word: "今日",
        ipa_pronunciation: ["kjoːɾi"],
        translations: {
            en: ["today"],
            vn: ["hôm nay"],
            my: ["hari ini"],
            zh: ["今天"],
            ja: ["きょう"],
            ar: ["اليوم"]
        },
    },
    {
        word: "明日",
        ipa_pronunciation: ["asuː"],
        translations: {
            en: ["tomorrow"],
            vn: ["ngày mai"],
            my: ["esok"],
            zh: ["明天"],
            ja: ["あした"],
            ar: ["غدا"]
        },
    },
    {
        word: "先週",
        ipa_pronunciation: ["seːɕuː"],
        translations: {
            en: ["last week"],
            vn: ["tuần trước"],
            my: ["minggu lalu"],
            zh: ["上个星期"],
            ja: ["せんしゅう"],
            ar: ["الأسبوع الماضي"]
        },
    },
    {
        word: "来週",
        ipa_pronunciation: ["raiːɕuː"],
        translations: {
            en: ["next week"],
            vn: ["tuần sau"],
            my: ["minggu depan"],
            zh: ["下个星期"],
            ja: ["らいしゅう"],
            ar: ["الأسبوع القادم"]
        },
    },
    {
        word: "去年",
        ipa_pronunciation: ["koyoːɾi"],
        translations: {
            en: ["last year"],
            vn: ["năm ngoái"],
            my: ["tahun lepas"],
            zh: ["去年"],
            ja: ["きょねん"],
            ar: ["العام الماضي"]
        },
    },
    {
        word: "今年",
        ipa_pronunciation: ["kjoːnen"],
        translations: {
            en: ["this year"],
            vn: ["năm nay"],
            my: ["tahun ini"],
            zh: ["今年"],
            ja: ["ことし"],
            ar: ["هذا العام"]
        },
    },
    {
        word: "来年",
        ipa_pronunciation: ["raiːnen"],
        translations: {
            en: ["next year"],
            vn: ["năm sau"],
            my: ["tahun depan"],
            zh: ["明年"],
            ja: ["らいねん"],
            ar: ["العام القادم"]
        },
    },
    {
        word: "毎日",
        ipa_pronunciation: ["mainiʧi"],
        translations: {
            en: ["every day"],
            vn: ["mỗi ngày"],
            my: ["setiap hari"],
            zh: ["每天"],
            ja: ["まいにち"],
            ar: ["كل يوم"]
        },
    },
    {
        word: "いつも",
        ipa_pronunciation: ["itsumo"],
        translations: {
            en: ["always"],
            vn: ["luôn luôn"],
            my: ["selalu"],
            zh: ["总是"],
            ja: ["いつも"],
            ar: ["دائما"]
        },
    },
    {
        word: "ときどき",
        ipa_pronunciation: ["tokidoʔi"],
        translations: {
            en: ["sometimes"],
            vn: ["thỉnh thoảng"],
            my: ["kadang-kadang"],
            zh: ["有时候"],
            ja: ["ときどき"],
            ar: ["في بعض الأحيان"]
        },
    },
    {
        word: "あまり",
        ipa_pronunciation: ["amari"],
        translations: {
            en: ["not much"],
            vn: ["không nhiều"],
            my: ["tidak banyak"],
            zh: ["不太多"],
            ja: ["あまり"],
            ar: ["ليس كثيرا"]
        },
    },
    {
        word: "とても",
        ipa_pronunciation: ["totemo"],
        translations: {
            en: ["very"],
            vn: ["rất"],
            my: ["sangat"],
            zh: ["非常"],
            ja: ["とても"],
            ar: ["جدا"]
        },
    },
    {
        word: "少し",
        ipa_pronunciation: ["sukoʃi"],
        translations: {
            en: ["a little"],
            vn: ["ít"],
            my: ["sedikit"],
            zh: ["一点"],
            ja: ["すこし"],
            ar: ["قليلا"]
        },
    },
    {
        word: "全部",
        ipa_pronunciation: ["zeŋbuː"],
        translations: {
            en: ["all"],
            vn: ["tất cả"],
            my: ["semua"],
            zh: ["全部"],
            ja: ["ぜんぶ"],
            ar: ["كامل"]
        },
    },
    {
        word: "一つ",
        ipa_pronunciation: ["hitotsu"],
        translations: {
            en: ["one"],
            vn: ["một cái"],
            my: ["satu"],
            zh: ["一个"],
            ja: ["ひとつ"],
            ar: ["واحد"]
        },
    },
    {
        word: "二つ",
        ipa_pronunciation: ["fuτatsu"],
        translations: {
            en: ["two"],
            vn: ["hai cái"],
            my: ["dua"],
            zh: ["两个"],
            ja: ["ふたつ"],
            ar: ["اثنان"]
        },
    },
    {
        word: "三つ",
        ipa_pronunciation: ["mitatsu"],
        translations: {
            en: ["three"],
            vn: ["ba cái"],
            my: ["tiga"],
            zh: ["三个"],
            ja: ["みっつ"],
            ar: ["ثلاثة"]
        },
    },
    {
        word: "四つ",
        ipa_pronunciation: ["yonko"],
        translations: {
            en: ["four"],
            vn: ["bốn cái"],
            my: ["empat"],
            zh: ["四个"],
            ja: ["よっつ"],
            ar: ["أربعة"]
        },
    },
    {
        word: "五つ",
        ipa_pronunciation: ["itutsu"],
        translations: {
            en: ["five"],
            vn: ["năm cái"],
            my: ["lima"],
            zh: ["五个"],
            ja: ["いつつ"],
            ar: ["خمسة"]
        },
    },
    {
        word: "六つ",
        ipa_pronunciation: ["muttsu"],
        translations: {
            en: ["six"],
            vn: ["sáu cái"],
            my: ["enam"],
            zh: ["六个"],
            ja: ["むっつ"],
            ar: ["ستة"]
        },
    },
    {
        word: "七つ",
        ipa_pronunciation: ["nanatsu"],
        translations: {
            en: ["seven"],
            vn: ["bảy cái"],
            my: ["tujuh"],
            zh: ["七个"],
            ja: ["ななつ"],
            ar: ["سبعة"]
        },
    },
    {
        word: "八つ",
        ipa_pronunciation: ["yatso"],
        translations: {
            en: ["eight"],
            vn: ["tám cái"],
            my: ["lapan"],
            zh: ["八个"],
            ja: ["やっつ"],
            ar: ["ثمانية"]
        },
    },
    {
        word: "九つ",
        ipa_pronunciation: ["kokonotsu"],
        translations: {
            en: ["nine"],
            vn: ["chín cái"],
            my: ["sembilan"],
            zh: ["九个"],
            ja: ["ここのつ"],
            ar: ["تسعة"]
        },
    },
    {
        word: "十",
        ipa_pronunciation: ["toː"],
        translations: {
            en: ["ten"],
            vn: ["mười"],
            my: ["sepuluh"],
            zh: ["十"],
            ja: ["とお"],
            ar: ["عشرة"]
        },
    }
];