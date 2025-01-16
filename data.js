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
    },
    {
        word: "百",
        ipa_pronunciation: ["hyaku"],
        translations: {
            en: ["hundred"],
            vn: ["trăm"],
            my: ["seratus"],
            zh: ["百"],
            ja: ["ひゃく"],
            ar: ["مائة"]
        },
    },
    {
        word: "千",
        ipa_pronunciation: ["sen"],
        translations: {
            en: ["thousand"],
            vn: ["nghìn"],
            my: ["seribu"],
            zh: ["千"],
            ja: ["せん"],
            ar: ["ألف"]
        },
    },
    {
        word: "万",
        ipa_pronunciation: ["man"],
        translations: {
            en: ["ten thousand"],
            vn: ["vạn"],
            my: ["sepuluh ribu"],
            zh: ["万"],
            ja: ["まん"],
            ar: ["عشرة آلاف"]
        },
    },
    {
        word: "何",
        ipa_pronunciation: ["nan"],
        translations: {
            en: ["what"],
            vn: ["gì"],
            my: ["apa"],
            zh: ["什么"],
            ja: ["なに"],
            ar: ["ماذا"]
        },
    },
    {
        word: "誰",
        ipa_pronunciation: ["dare"],
        translations: {
            en: ["who"],
            vn: ["ai"],
            my: ["siapa"],
            zh: ["谁"],
            ja: ["だれ"],
            ar: ["من"]
        },
    },
    {
        word: "どこ",
        ipa_pronunciation: ["doʔo"],
        translations: {
            en: ["where"],
            vn: ["đâu"],
            my: ["di mana"],
            zh: ["哪里"],
            ja: ["どこ"],
            ar: ["أين"]
        },
    },
    {
        word: "いつ",
        ipa_pronunciation: ["itsu"],
        translations: {
            en: ["when"],
            vn: ["khi nào"],
            my: ["bilakah"],
            zh: ["什么时候"],
            ja: ["いつ"],
            ar: ["متى"]
        },
    },
    {
        word: "どう",
        ipa_pronunciation: ["doː"],
        translations: {
            en: ["how"],
            vn: ["như thế nào"],
            my: ["bagaimana"],
            zh: ["怎么样"],
            ja: ["どう"],
            ar: ["كيف"]
        },
    },
    {
        word: "なぜ",
        ipa_pronunciation: ["naze"],
        translations: {
            en: ["why"],
            vn: ["tại sao"],
            my: ["mengapa"],
            zh: ["为什么"],
            ja: ["なぜ"],
            ar: ["لماذا"]
        },
    },
    {
        word: "これ",
        ipa_pronunciation: ["koɾe"],
        translations: {
            en: ["this (near speaker)"],
            vn: ["cái này"],
            my: ["ini"],
            zh: ["这个"],
            ja: ["これ"],
            ar: ["هذا"]
        },
    },
    {
        word: "それ",
        ipa_pronunciation: ["soɾe"],
        translations: {
            en: ["that (near listener)"],
            vn: ["cái đó"],
            my: ["itu"],
            zh: ["那个"],
            ja: ["それ"],
            ar: ["ذلك"]
        },
    },
    {
        word: "あれ",
        ipa_pronunciation: ["aɾe"],
        translations: {
            en: ["that (far from both)"],
            vn: ["cái kia"],
            my: ["itu (jauh)"],
            zh: ["那个（远处）"],
            ja: ["あれ"],
            ar: ["ذاك"]
        },
    },
    {
        word: "ここ",
        ipa_pronunciation: ["kokoa"],
        translations: {
            en: ["here"],
            vn: ["ở đây"],
            my: ["di sini"],
            zh: ["这里"],
            ja: ["ここ"],
            ar: ["هنا"]
        },
    },
    {
        word: "そこ",
        ipa_pronunciation: ["sokoa"],
        translations: {
            en: ["there (near listener)"],
            vn: ["ở đó"],
            my: ["di situ"],
            zh: ["那里（近听者）"],
            ja: ["そこ"],
            ar: ["هناك"]
        },
    },
    {
        word: "あそこ",
        ipa_pronunciation: ["asoko"],
        translations: {
            en: ["over there (far from both)"],
            vn: ["ở đằng kia"],
            my: ["di sana (jauh)"],
            zh: ["那边（远处）"],
            ja: ["あそこ"],
            ar: ["هناك"]
        },
    },
    {
        word: "これだけ",
        ipa_pronunciation: ["koɾedake"],
        translations: {
            en: ["only this"],
            vn: ["chỉ cái này"],
            my: ["hanya ini"],
            zh: ["只有这个"],
            ja: ["これだけ"],
            ar: ["فقط هذا"]
        },
    },
    {
        word: "それだけ",
        ipa_pronunciation: ["soɾedake"],
        translations: {
            en: ["only that"],
            vn: ["chỉ cái đó"],
            my: ["hanya itu"],
            zh: ["只有那个"],
            ja: ["それだけ"],
            ar: ["فقط ذلك"]
        },
    },
    {
        word: "どれ",
        ipa_pronunciation: ["doɾe"],
        translations: {
            en: ["which one"],
            vn: ["cái nào"],
            my: ["yang mana"],
            zh: ["哪个"],
            ja: ["どれ"],
            ar: ["أي واحد"]
        },
    },
    {
        word: "どの",
        ipa_pronunciation: ["doʔno"],
        translations: {
            en: ["which"],
            vn: ["cái nào"],
            my: ["yang mana"],
            zh: ["哪个"],
            ja: ["どの"],
            ar: ["أي"]
        },
    },
    {
        word: "この",
        ipa_pronunciation: ["konotɕi"],
        translations: {
            en: ["this (adjective)"],
            vn: ["cái này"],
            my: ["ini"],
            zh: ["这个的"],
            ja: ["この"],
            ar: ["هذا"]
        },
    },
    {
        word: "その",
        ipa_pronunciation: ["sonotɕi"],
        translations: {
            en: ["that (adjective)"],
            vn: ["cái đó"],
            my: ["itu"],
            zh: ["那个的"],
            ja: ["その"],
            ar: ["ذلك"]
        },
    },
    {
        word: "あの",
        ipa_pronunciation: ["anotɕi"],
        translations: {
            en: ["that (far) adjective"],
            vn: ["cái kia"],
            my: ["itu (jauh)"],
            zh: ["那个（远处）的"],
            ja: ["あの"],
            ar: ["ذاك"]
        },
    },
    {
        word: "どれも",
        ipa_pronunciation: ["doɾemo"],
        translations: {
            en: ["anyone"],
            vn: ["bất kỳ cái nào"],
            my: ["mana-mana"],
            zh: ["任何一个"],
            ja: ["どれも"],
            ar: ["أي واحد"]
        },
    },
    {
        word: "どちら",
        ipa_pronunciation: ["doʔtaɾa"],
        translations: {
            en: ["which one"],
            vn: ["cái nào"],
            my: ["yang mana"],
            zh: ["哪一个"],
            ja: ["どちら"],
            ar: ["أي واحد"]
        },
    },
    {
        word: "どちらも",
        ipa_pronunciation: ["doʔtaɾamo"],
        translations: {
            en: ["both"],
            vn: ["cả hai"],
            my: ["kedua-duanya"],
            zh: ["两者都"],
            ja: ["どちらも"],
            ar: ["كلاهما"]
        },
    },
    {
        word: "どっち",
        ipa_pronunciation: ["dotɕi"],
        translations: {
            en: ["which one (casual)"],
            vn: ["cái nào"],
            my: ["yang mana"],
            zh: ["哪一个（非正式）"],
            ja: ["どっち"],
            ar: ["أي واحد"]
        },
    },
    {
        word: "こちら",
        ipa_pronunciation: ["koʔtaɾa"],
        translations: {
            en: ["this way"],
            vn: ["đằng này"],
            my: ["ke sini"],
            zh: ["这边"],
            ja: ["こちら"],
            ar: ["هنا"]
        },
    },
    {
        word: "そちら",
        ipa_pronunciation: ["soʔtaɾa"],
        translations: {
            en: ["that way (near listener)"],
            vn: ["đằng đó"],
            my: ["ke situ"],
            zh: ["那边（近听者）"],
            ja: ["そちら"],
            ar: ["هناك"]
        },
    },
    {
        word: "あちら",
        ipa_pronunciation: ["aʔtaɾa"],
        translations: {
            en: ["that way (far)"],
            vn: ["đằng kia"],
            my: ["ke sana (jauh)"],
            zh: ["那边（远处）"],
            ja: ["あちら"],
            ar: ["ذاك"]
        },
    },
    {
        word: "どちらか",
        ipa_pronunciation: ["doʔtaɾaka"],
        translations: {
            en: ["either"],
            vn: ["một trong hai"],
            my: ["salah satu"],
            zh: ["两者之一"],
            ja: ["どちらか"],
            ar: ["واحد من الاثنين"]
        },
    },
    {
        word: "どちらでも",
        ipa_pronunciation: ["doʔtaɾademoe"],
        translations: {
            en: ["either way"],
            vn: ["bất kỳ cách nào"],
            my: ["boleh salah satu"],
            zh: ["两种方式都可以"],
            ja: ["どちらでも"],
            ar: ["أي طريقة"]
        },
    },
    {
        word: "どちらも",
        ipa_pronunciation: ["doʔtaɾamo"],
        translations: {
            en: ["both"],
            vn: ["cả hai"],
            my: ["kedua-duanya"],
            zh: ["两者都"],
            ja: ["どちらも"],
            ar: ["كلاهما"]
        },
    },
    {
        word: "どちらへ",
        ipa_pronunciation: ["doʔtaɾae"],
        translations: {
            en: ["which way"],
            vn: ["đi đâu"],
            my: ["ke mana"],
            zh: ["哪条路"],
            ja: ["どちらへ"],
            ar: ["أي طريق"]
        },
    },
    {
        word: "どちらが",
        ipa_pronunciation: ["doʔtaɾaga"],
        translations: {
            en: ["which one"],
            vn: ["cái nào"],
            my: ["yang mana"],
            zh: ["哪一个"],
            ja: ["どちらが"],
            ar: ["أي واحد"]
        },
    },
    {
        word: "どちらの",
        ipa_pronunciation: ["doʔtaɾano"],
        translations: {
            en: ["whose"],
            vn: ["của ai"],
            my: ["milik siapa"],
            zh: ["谁的"],
            ja: ["どちらの"],
            ar: ["مِن مَن"]
        },
    },
    {
        word: "どちらさん",
        ipa_pronunciation: ["doʔtaɾasaɴ"],
        translations: {
            en: ["which person"],
            vn: ["người nào"],
            my: ["orang yang mana"],
            zh: ["哪个人"],
            ja: ["どちらさん"],
            ar: ["أي شخص"]
        },
    },
    {
        word: "こんにちは",
        ipa_pronunciation: ["koɴniʨiwa"],
        translations: {
            en: ["hello (good afternoon)"],
            vn: ["xin chào (buổi chiều)"],
            my: ["selamat tengah hari"],
            zh: ["你好（下午好）"],
            ja: ["こんにちは"],
            ar: ["مرحبا (مساء الخير)"]
        },
    },
    {
        word: "さようなら",
        ipa_pronunciation: ["saːjoːnaɾa"],
        translations: {
            en: ["goodbye"],
            vn: ["tạm biệt"],
            my: ["selamat tinggal"],
            zh: ["再见"],
            ja: ["さようなら"],
            ar: ["وداعا"]
        },
    },
    {
        word: "おはよう",
        ipa_pronunciation: ["oːhaːjoː"],
        translations: {
            en: ["good morning"],
            vn: ["chào buổi sáng"],
            my: ["selamat pagi"],
            zh: ["早上好"],
            ja: ["おはよう"],
            ar: ["صباح الخير"]
        },
    },
    {
        word: "こんばんは",
        ipa_pronunciation: ["koɴbaɴwa"],
        translations: {
            en: ["good evening"],
            vn: ["chào buổi tối"],
            my: ["selamat malam"],
            zh: ["晚上好"],
            ja: ["こんばんは"],
            ar: ["مساء الخير"]
        },
    },
    {
        word: "ありがとう",
        ipa_pronunciation: ["aɾiɡatoː"],
        translations: {
            en: ["thank you"],
            vn: ["cảm ơn"],
            my: ["terima kasih"],
            zh: ["谢谢"],
            ja: ["ありがとう"],
            ar: ["شكرا"]
        },
    },
    {
        word: "すみません",
        ipa_pronunciation: ["sumimasẽɴ"],
        translations: {
            en: ["excuse me", "sorry"],
            vn: ["xin lỗi"],
            my: ["maaf"],
            zh: ["对不起"],
            ja: ["すみません"],
            ar: ["عذرًا"]
        },
    },
    {
        word: "お願いします",
        ipa_pronunciation: ["oneɡaiʃimasɯ"],
        translations: {
            en: ["please"],
            vn: ["làm ơn"],
            my: ["tolong"],
            zh: ["请"],
            ja: ["お願いします"],
            ar: ["من فضلك"]
        },
    },
    {
        word: "いただきます",
        ipa_pronunciation: ["iteːdaːkimɯ"],
        translations: {
            en: ["bon appétit"],
            vn: ["mời ăn"],
            my: ["silakan makan"],
            zh: ["请享用"],
            ja: ["いただきます"],
            ar: ["بالهناء والشفاء"]
        },
    },
    {
        word: "ごちそうさまでした",
        ipa_pronunciation: ["goʧisoːsamadesʰita"],
        translations: {
            en: ["thanks for the meal"],
            vn: ["cảm ơn vì bữa ăn"],
            my: ["terima kasih atas hidangan"],
            zh: ["感谢款待"],
            ja: ["ごちそうさまでした"],
            ar: ["شكرًا على الوجبة"]
        },
    },
    {
        word: "おやすみなさい",
        ipa_pronunciation: ["ojaːsiminaːsaɪ"],
        translations: {
            en: ["good night"],
            vn: ["chúc ngủ ngon"],
            my: ["selamat tidur"],
            zh: ["晚安"],
            ja: ["おやすみなさい"],
            ar: ["تصبح على خير"]
        },
    },
    {
        word: "はい",
        ipa_pronunciation: ["hai"],
        translations: {
            en: ["yes"],
            vn: ["có"],
            my: ["ya"],
            zh: ["是的"],
            ja: ["はい"],
            ar: ["نعم"]
        },
    },
    {
        word: "いいえ",
        ipa_pronunciation: ["iːe"],
        translations: {
            en: ["no"],
            vn: ["không"],
            my: ["tidak"],
            zh: ["不"],
            ja: ["いいえ"],
            ar: ["لا"]
        },
    },
    {
        word: "わかりました",
        ipa_pronunciation: ["wakaɾimashita"],
        translations: {
            en: ["I understand"],
            vn: ["tôi hiểu"],
            my: ["saya faham"],
            zh: ["我明白了"],
            ja: ["わかりました"],
            ar: ["فهمت"]
        },
    },
    {
        word: "わかりません",
        ipa_pronunciation: ["wakaɾimasen"],
        translations: {
            en: ["I don't understand"],
            vn: ["tôi không hiểu"],
            my: ["saya tidak faham"],
            zh: ["我不明白"],
            ja: ["わかりません"],
            ar: ["لم أفهم"]
        },
    },
    {
        word: "大丈夫",
        ipa_pronunciation: ["daːndʑoːbu"],
        translations: {
            en: ["It's okay"],
            vn: ["không sao cả"],
            my: ["tidak apa-apa"],
            zh: ["没关系"],
            ja: ["大丈夫"],
            ar: ["حسنًا"]
        },
    },
    {
        word: "元気です",
        ipa_pronunciation: ["geŋkidese"],
        translations: {
            en: ["I'm fine"],
            vn: ["tôi khỏe"],
            my: ["saya baik-baik saja"],
            zh: ["我很好"],
            ja: ["元気です"],
            ar: ["أنا بخير"]
        },
    },
    {
        word: "どうぞ",
        ipa_pronunciation: ["doːzo"],
        translations: {
            en: ["please", "here you go"],
            vn: ["làm ơn", "đây nhé"],
            my: ["silakan"],
            zh: ["请", "给你"],
            ja: ["どうぞ"],
            ar: ["من فضلك"]
        },
    },
    {
        word: "どういたしまして",
        ipa_pronunciation: ["doːiɾaɕimasite"],
        translations: {
            en: ["you're welcome"],
            vn: ["không có gì"],
            my: ["sama-sama"],
            zh: ["不用谢"],
            ja: ["どういたしまして"],
            ar: ["على الرحب والسعة"]
        },
    },
    {
        word: "いただきます",
        ipa_pronunciation: ["iteːdaːkimɯ"],
        translations: {
            en: ["I receive", "let's eat"],
            vn: ["tôi nhận", "mời ăn"],
            my: ["saya terima", "silakan makan"],
            zh: ["我收下了", "请享用"],
            ja: ["いただきます"],
            ar: ["أنا أتلقى", "بالهناء والشفاء"]
        },
    },
    {
        word: "失礼します",
        ipa_pronunciation: ["ɕitteɾisimasɯ"],
        translations: {
            en: ["excuse me", "I'm leaving"],
            vn: ["xin lỗi", "tôi đi đây"],
            my: ["maaf", "saya pamit"],
            zh: ["对不起", "我要走了"],
            ja: ["失礼します"],
            ar: ["عذرًا", "سأغادر الآن"]
        },
    },
    {
        word: "ちょっと",
        ipa_pronunciation: ["tɕotto"],
        translations: {
            en: ["a little", "wait a minute"],
            vn: ["một chút", "chờ một chút"],
            my: ["sedikit", "tunggu sebentar"],
            zh: ["一点", "稍等一下"],
            ja: ["ちょっと"],
            ar: ["قليلاً", "انتظر لحظة"]
        },
    },
    {
        word: "お願いします",
        ipa_pronunciation: ["oneɡaiʃimasɯ"],
        translations: {
            en: ["please"],
            vn: ["làm ơn"],
            my: ["tolong"],
            zh: ["请"],
            ja: ["お願いします"],
            ar: ["من فضلك"]
        },
    },
    {
        word: "すみません",
        ipa_pronunciation: ["sumimasẽɴ"],
        translations: {
            en: ["excuse me", "sorry"],
            vn: ["xin lỗi"],
            my: ["maaf"],
            zh: ["对不起"],
            ja: ["すみません"],
            ar: ["عذرًا"]
        },
    },
    {
        word: "どうぞよろしく",
        ipa_pronunciation: ["doːzojoɾoɕiku"],
        translations: {
            en: ["nice to meet you", "please take care of me"],
            vn: ["rất vui được gặp bạn", "mong bạn giúp đỡ"],
            my: ["senang berkenalan", "mohon bantu saya"],
            zh: ["很高兴见到你", "请多关照"],
            ja: ["どうぞよろしく"],
            ar: ["يسعدني أن ألتقي بك", "من فضلك اعتن بي"]
        },
    },
    {
        word: "いただきます",
        ipa_pronunciation: ["iteːdaːkimɯ"],
        translations: {
            en: ["I receive", "let's eat"],
            vn: ["tôi nhận", "mời ăn"],
            my: ["saya terima", "silakan makan"],
            zh: ["我收下了", "请享用"],
            ja: ["いただきます"],
            ar: ["أنا أتلقى", "بالهناء والشفاء"]
        },
    },
    {
        word: "お疲れ様でした",
        ipa_pronunciation: ["oʦuɾeisaːmasʰita"],
        translations: {
            en: ["thank you for your hard work"],
            vn: ["cảm ơn vì công việc vất vả"],
            my: ["terima kasih atas kerja keras anda"],
            zh: ["辛苦了"],
            ja: ["お疲れ様でした"],
            ar: ["شكراً على عملك الشاق"]
        },
    },
    {
        word: "お邪魔します",
        ipa_pronunciation: ["oʥaːmasimasɯ"],
        translations: {
            en: ["excuse me for intruding"],
            vn: ["xin lỗi vì đã làm phiền"],
            my: ["maaf kerana mengganggu"],
            zh: ["打扰了"],
            ja: ["お邪魔します"],
            ar: ["عذرًا على الإزعاج"]
        },
    },
    {
        word: "お先に失礼します",
        ipa_pronunciation: ["osakiɲiɕitteɾisimasɯ"],
        translations: {
            en: ["excuse me for leaving early"],
            vn: ["xin lỗi vì về sớm"],
            my: ["maaf kerana pulang lebih awal"],
            zh: ["我先告辞了"],
            ja: ["お先に失礼します"],
            ar: ["عذرًا على المغادرة المبكرة"]
        },
    },
    {
        word: "高い",
        ipa_pronunciation: ["takaːi"],
        translations: {
            en: ["high", "expensive"],
            vn: ["cao", "đắt"],
            my: ["tinggi", "mahal"],
            zh: ["高", "贵"],
            ja: ["たかい"],
            ar: ["عالي", "غالي"]
        },
    },
    {
        word: "安い",
        ipa_pronunciation: ["yasɯi"],
        translations: {
            en: ["cheap"],
            vn: ["rẻ"],
            my: ["murah"],
            zh: ["便宜"],
            ja: ["やすい"],
            ar: ["رخيص"]
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
        word: "古い",
        ipa_pronunciation: ["fɯɾɯɕi"],
        translations: {
            en: ["old"],
            vn: ["cũ"],
            my: ["lama"],
            zh: ["旧"],
            ja: ["ふるい"],
            ar: ["قديم"]
        },
    },
    {
        word: "早い",
        ipa_pronunciation: ["hayai"],
        translations: {
            en: ["early", "fast"],
            vn: ["sớm", "nhanh"],
            my: ["awal", "cepat"],
            zh: ["早"],
            ja: ["はやい"],
            ar: ["مبكر", "سريع"]
        },
    },
    {
        word: "遅い",
        ipa_pronunciation: ["okuɾoi"],
        translations: {
            en: ["late", "slow"],
            vn: ["muộn", "chậm"],
            my: ["lewat", "lambat"],
            zh: ["晚", "慢"],
            ja: ["おそい"],
            ar: ["متأخر", "بطيء"]
        },
    },
    {
        word: "長い",
        ipa_pronunciation: ["naŋɡai"],
        translations: {
            en: ["long"],
            vn: ["dài"],
            my: ["panjang"],
            zh: ["长"],
            ja: ["ながい"],
            ar: ["طويل"]
        },
    },
    {
        word: "短い",
        ipa_pronunciation: ["mijikaɪ"],
        translations: {
            en: ["short"],
            vn: ["ngắn"],
            my: ["pendek"],
            zh: ["短"],
            ja: ["みじかい"],
            ar: ["قصير"]
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
        word: "広い",
        ipa_pronunciation: ["hiroi"],
        translations: {
            en: ["wide", "spacious"],
            vn: ["rộng"],
            my: ["luas"],
            zh: ["宽"],
            ja: ["ひろい"],
            ar: ["واسع"]
        },
    },
    {
        word: "狭い",
        ipa_pronunciation: ["seːtɕi"],
        translations: {
            en: ["narrow"],
            vn: ["hẹp"],
            my: ["sempit"],
            zh: ["窄"],
            ja: ["せまい"],
            ar: ["ضيق"]
        },
    },
    {
        word: "重い",
        ipa_pronunciation: ["omoːi"],
        translations: {
            en: ["heavy"],
            vn: ["nặng"],
            my: ["berat"],
            zh: ["重"],
            ja: ["おもい"],
            ar: ["ثقيل"]
        },
    },
    {
        word: "軽い",
        ipa_pronunciation: ["karɯi"],
        translations: {
            en: ["light"],
            vn: ["nhẹ"],
            my: ["ringan"],
            zh: ["轻"],
            ja: ["かるい"],
            ar: ["خفيف"]
        },
    },
    {
        word: "良い",
        ipa_pronunciation: ["joːi"],
        translations: {
            en: ["good"],
            vn: ["tốt"],
            my: ["baik"],
            zh: ["好"],
            ja: ["よい"],
            ar: ["جيد"]
        },
    },
    {
        word: "悪い",
        ipa_pronunciation: ["warɯi"],
        translations: {
            en: ["bad"],
            vn: ["xấu"],
            my: ["buruk"],
            zh: ["坏"],
            ja: ["わるい"],
            ar: ["سيء"]
        },
    },
    {
        word: "難しい",
        ipa_pronunciation: ["muzaɾɯi"],
        translations: {
            en: ["difficult"],
            vn: ["khó"],
            my: ["susah"],
            zh: ["难"],
            ja: ["むずかしい"],
            ar: ["صعب"]
        },
    },
    {
        word: "簡単",
        ipa_pronunciation: ["kaɴtaːn"],
        translations: {
            en: ["easy"],
            vn: ["dễ"],
            my: ["mudah"],
            zh: ["简单"],
            ja: ["かんたん"],
            ar: ["سهل"]
        },
    },
    {
        word: "多い",
        ipa_pronunciation: ["oːi"],
        translations: {
            en: ["many"],
            vn: ["nhiều"],
            my: ["banyak"],
            zh: ["多"],
            ja: ["おおい"],
            ar: ["كثير"]
        },
    },
    {
        word: "少ない",
        ipa_pronunciation: ["sɯkoʃii"],
        translations: {
            en: ["few"],
            vn: ["ít"],
            my: ["sedikit"],
            zh: ["少"],
            ja: ["すくない"],
            ar: ["قليل"]
        },
    },
    {
        word: "忙しい",
        ipa_pronunciation: ["isoɡaɕiː"],
        translations: {
            en: ["busy"],
            vn: ["bận rộn"],
            my: ["sibuk"],
            zh: ["忙"],
            ja: ["いそがしい"],
            ar: ["مشغول"]
        },
    },
    {
        word: "静か",
        ipa_pronunciation: ["ʃizɯka"],
        translations: {
            en: ["quiet"],
            vn: ["yên tĩnh"],
            my: ["sunyi"],
            zh: ["安静"],
            ja: ["しずか"],
            ar: ["هادئ"]
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
        word: "寒い",
        ipa_pronunciation: ["samɯi"],
        translations: {
            en: ["cold"],
            vn: ["lạnh"],
            my: ["dingin"],
            zh: ["冷"],
            ja: ["さむい"],
            ar: ["بارد"]
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
        ipa_pronunciation: ["suɾusʰii"],
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
        word: "明るい",
        ipa_pronunciation: ["akɯɾai"],
        translations: {
            en: ["bright"],
            vn: ["sáng"],
            my: ["cerah"],
            zh: ["明亮"],
            ja: ["あかるい"],
            ar: ["مضيء"]
        },
    },
    {
        word: "暗い",
        ipa_pronunciation: ["kuɾai"],
        translations: {
            en: ["dark"],
            vn: ["tối"],
            my: ["gelap"],
            zh: ["黑暗"],
            ja: ["くらい"],
            ar: ["مظلم"]
        },
    },
    {
        word: "甘い",
        ipa_pronunciation: ["amaːi"],
        translations: {
            en: ["sweet"],
            vn: ["ngọt"],
            my: ["manis"],
            zh: ["甜"],
            ja: ["あまい"],
            ar: ["حلو"]
        },
    },
    {
        word: "苦い",
        ipa_pronunciation: ["niːi"],
        translations: {
            en: ["bitter"],
            vn: ["đắng"],
            my: ["pahit"],
            zh: ["苦"],
            ja: ["にがい"],
            ar: ["مر"]
        },
    },
    {
        word: "辛い",
        ipa_pronunciation: ["kaɾai"],
        translations: {
            en: ["spicy", "tough"],
            vn: ["cay", "khổ"],
            my: ["pedas", "sukar"],
            zh: ["辣", "辛苦"],
            ja: ["からい"],
            ar: ["حار", "صعب"]
        },
    },
    {
        word: "酸っぱい",
        ipa_pronunciation: ["suppaːi"],
        translations: {
            en: ["sour"],
            vn: ["chua"],
            my: ["masam"],
            zh: ["酸"],
            ja: ["すっぱい"],
            ar: ["حامض"]
        },
    },
    {
        word: "塩辛い",
        ipa_pronunciation: ["ɕiozaɾai"],
        translations: {
            en: ["salty"],
            vn: ["mặn"],
            my: ["asin"],
            zh: ["咸"],
            ja: ["しおからい"],
            ar: ["مالح"]
        },
    },
    {
        word: "美味しい",
        ipa_pronunciation: ["oːɕii"],
        translations: {
            en: ["delicious"],
            vn: ["ngon"],
            my: ["enak"],
            zh: ["美味"],
            ja: ["おいしい"],
            ar: ["لذيذ"]
        },
    },
    {
        word: "嫌い",
        ipa_pronunciation: ["kiɾai"],
        translations: {
            en: ["dislike"],
            vn: ["ghét"],
            my: ["benci"],
            zh: ["讨厌"],
            ja: ["きらい"],
            ar: ["يكره"]
        },
    },
    {
        word: "好き",
        ipa_pronunciation: ["suki"],
        translations: {
            en: ["like"],
            vn: ["thích"],
            my: ["suka"],
            zh: ["喜欢"],
            ja: ["すき"],
            ar: ["يحب"]
        },
    },
    {
        word: "上手",
        ipa_pronunciation: ["uːdeːteɾu"],
        translations: {
            en: ["good at"],
            vn: ["giỏi"],
            my: ["pakar"],
            zh: ["擅长"],
            ja: ["うまい"],
            ar: ["بمهارة"]
        },
    },
    {
        word: "下手",
        ipa_pronunciation: ["heːteːteɾu"],
        translations: {
            en: ["bad at"],
            vn: ["kém"],
            my: ["kurang baik"],
            zh: ["不擅长"],
            ja: ["へた"],
            ar: ["بضعف"]
        },
    },
    {
        word: "面白い",
        ipa_pronunciation: ["omosiroi"],
        translations: {
            en: ["interesting"],
            vn: ["thú vị"],
            my: ["menarik"],
            zh: ["有趣"],
            ja: ["おもしろい"],
            ar: ["مثير للاهتمام"]
        },
    },
    {
        word: "退屈",
        ipa_pronunciation: ["taibutsu"],
        translations: {
            en: ["boring"],
            vn: ["nhàm chán"],
            my: ["bosan"],
            zh: ["无聊"],
            ja: ["たいくつ"],
            ar: ["ممل"]
        },
    },
    {
        word: "楽しい",
        ipa_pronunciation: ["tanoshiː"],
        translations: {
            en: ["fun", "enjoyable"],
            vn: ["vui vẻ"],
            my: ["bersenang-senang"],
            zh: ["快乐"],
            ja: ["たのしい"],
            ar: ["متعة"]
        },
    },
    {
        word: "悲しい",
        ipa_pronunciation: ["kanɑɕiː"],
        translations: {
            en: ["sad"],
            vn: ["buồn"],
            my: ["sedih"],
            zh: ["悲伤"],
            ja: ["かなしい"],
            ar: ["حزين"]
        },
    },
    {
        word: "嬉しい",
        ipa_pronunciation: ["ureɕiː"],
        translations: {
            en: ["happy"],
            vn: ["vui mừng"],
            my: ["gembira"],
            zh: ["高兴"],
            ja: ["うれしい"],
            ar: ["سعيد"]
        },
    },
    {
        word: "怖い",
        ipa_pronunciation: ["koraːi"],
        translations: {
            en: ["scary"],
            vn: ["sợ hãi"],
            my: ["seram"],
            zh: ["可怕"],
            ja: ["こわい"],
            ar: ["مخيف"]
        },
    },
    {
        word: "怒る",
        ipa_pronunciation: ["okaɾu"],
        translations: {
            en: ["angry"],
            vn: ["giận dữ"],
            my: ["marah"],
            zh: ["生气"],
            ja: ["おこる"],
            ar: ["غاضب"]
        },
    },
    {
        word: "驚く",
        ipa_pronunciation: ["odzɯɾu"],
        translations: {
            en: ["surprised"],
            vn: ["ngạc nhiên"],
            my: ["terkejut"],
            zh: ["惊讶"],
            ja: ["おどろく"],
            ar: ["مندهش"]
        },
    },
    {
        word: "疲れる",
        ipa_pronunciation: ["tukareɾu"],
        translations: {
            en: ["tired"],
            vn: ["mệt mỏi"],
            my: ["letih"],
            zh: ["累"],
            ja: ["つかれる"],
            ar: ["متعب"]
        },
    },
    {
        word: "元気",
        ipa_pronunciation: ["geŋki"],
        translations: {
            en: ["energetic"],
            vn: ["sức khỏe"],
            my: ["sihat"],
            zh: ["精神"],
            ja: ["げんき"],
            ar: ["نشيط"]
        },
    },
    {
        word: "病気",
        ipa_pronunciation: ["byoːki"],
        translations: {
            en: ["sick"],
            vn: ["bệnh"],
            my: ["sakit"],
            zh: ["生病"],
            ja: ["びょうき"],
            ar: ["مريض"]
        },
    },
    {
        word: "丈夫",
        ipa_pronunciation: ["daːndʑoːbu"],
        translations: {
            en: ["healthy", "strong"],
            vn: ["khỏe mạnh", "mạnh mẽ"],
            my: ["sihat", "kuat"],
            zh: ["健康", "强壮"],
            ja: ["じょうぶ"],
            ar: ["صحي", "قوي"]
        },
    },
    {
        word: "弱い",
        ipa_pronunciation: ["yowaːi"],
        translations: {
            en: ["weak"],
            vn: ["yếu"],
            my: ["lemah"],
            zh: ["弱"],
            ja: ["よわい"],
            ar: ["ضعيف"]
        },
    },
    {
        word: "強い",
        ipa_pronunciation: ["tsuyoːi"],
        translations: {
            en: ["strong"],
            vn: ["mạnh mẽ"],
            my: ["kuat"],
            zh: ["强"],
            ja: ["つよい"],
            ar: ["قوي"]
        },
    },
    {
        word: "安全",
        ipa_pronunciation: ["aŋzen"],
        translations: {
            en: ["safe"],
            vn: ["an toàn"],
            my: ["selamat"],
            zh: ["安全"],
            ja: ["あんぜん"],
            ar: ["آمن"]
        },
    },
    {
        word: "危険",
        ipa_pronunciation: ["kikeɴ"],
        translations: {
            en: ["dangerous"],
            vn: ["nguy hiểm"],
            my: ["bahaya"],
            zh: ["危险"],
            ja: ["きけん"],
            ar: ["خطير"]
        },
    },
    {
        word: "便利",
        ipa_pronunciation: ["beːneːki"],
        translations: {
            en: ["convenient"],
            vn: ["tiện lợi"],
            my: ["berguna"],
            zh: ["方便"],
            ja: ["べんり"],
            ar: ["مريح"]
        },
    },
    {
        word: "不便",
        ipa_pronunciation: ["fuːbeːneːki"],
        translations: {
            en: ["inconvenient"],
            vn: ["không tiện lợi"],
            my: ["tidak berguna"],
            zh: ["不方便"],
            ja: ["ふべん"],
            ar: ["غير مريح"]
        },
    },
    {
        word: "速い",
        ipa_pronunciation: ["haʔsoi"],
        translations: {
            en: ["fast"],
            vn: ["nhanh"],
            my: ["cepat"],
            zh: ["快"],
            ja: ["はやい"],
            ar: ["سريع"]
        },
    },
    {
        word: "遅い",
        ipa_pronunciation: ["okuɾoi"],
        translations: {
            en: ["slow"],
            vn: ["chậm"],
            my: ["lambat"],
            zh: ["慢"],
            ja: ["おそい"],
            ar: ["بطيء"]
        },
    },
    {
        word: "遠い",
        ipa_pronunciation: ["toːi"],
        translations: {
            en: ["far"],
            vn: ["xa"],
            my: ["jauh"],
            zh: ["远"],
            ja: ["とおい"],
            ar: ["بعيد"]
        },
    },
    {
        word: "近い",
        ipa_pronunciation: ["chiːkaɪ"],
        translations: {
            en: ["near"],
            vn: ["gần"],
            my: ["dekat"],
            zh: ["近"],
            ja: ["ちかい"],
            ar: ["قريب"]
        },
    },
    {
        word: "高い",
        ipa_pronunciation: ["takaːi"],
        translations: {
            en: ["high", "expensive"],
            vn: ["cao", "đắt"],
            my: ["tinggi", "mahal"],
            zh: ["高", "贵"],
            ja: ["たかい"],
            ar: ["عالي", "غالي"]
        },
    },
    {
        word: "低い",
        ipa_pronunciation: ["hikuɾoi"],
        translations: {
            en: ["low"],
            vn: ["thấp"],
            my: ["rendah"],
            zh: ["低"],
            ja: ["ひくい"],
            ar: ["منخفض"]
        },
    },
    {
        word: "重い",
        ipa_pronunciation: ["omoːi"],
        translations: {
            en: ["heavy"],
            vn: ["nặng"],
            my: ["berat"],
            zh: ["重"],
            ja: ["おもい"],
            ar: ["ثقيل"]
        },
    },
    {
        word: "軽い",
        ipa_pronunciation: ["karɯi"],
        translations: {
            en: ["light"],
            vn: ["nhẹ"],
            my: ["ringan"],
            zh: ["轻"],
            ja: ["かるい"],
            ar: ["خفيف"]
        },
    },
    {
        word: "乾燥する",
        ipa_pronunciation: ["kansoːsuɾu"],
        translations: {
            en: ["dry"],
            vn: ["khô"],
            my: ["kering"],
            zh: ["干燥"],
            ja: ["かんそうする"],
            ar: ["جاف"]
        },
    },
    {
        word: "濡れる",
        ipa_pronunciation: ["nuɾeɾu"],
        translations: {
            en: ["wet"],
            vn: ["ướt"],
            my: ["basah"],
            zh: ["湿"],
            ja: ["ぬれる"],
            ar: ["رطب"]
        },
    },
    {
        word: "乾く",
        ipa_pronunciation: ["huɾaku"],
        translations: {
            en: ["dry (intransitive)"],
            vn: ["khô đi"],
            my: ["kering"],
            zh: ["变干"],
            ja: ["かわく"],
            ar: ["يجف"]
        },
    },
    {
        word: "温かい",
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
        word: "冷たい",
        ipa_pronunciation: ["tsuɾetai"],
        translations: {
            en: ["cold (touch)"],
            vn: ["lạnh (cảm giác)"],
            my: ["sejuk"],
            zh: ["冷"],
            ja: ["つめたい"],
            ar: ["بارد"]
        },
    },
    {
        word: "熱い",
        ipa_pronunciation: ["atsuːi"],
        translations: {
            en: ["hot (touch)"],
            vn: ["nóng (cảm giác)"],
            my: ["panas"],
            zh: ["烫"],
            ja: ["あつい"],
            ar: ["حار"]
        },
    },
    {
        word: "冷える",
        ipa_pronunciation: ["huɾeɾu"],
        translations: {
            en: ["get cold"],
            vn: ["trở nên lạnh"],
            my: ["dingin"],
            zh: ["变冷"],
            ja: ["ひえる"],
            ar: ["يبرد"]
        },
    },
    {
        word: "暖める",
        ipa_pronunciation: ["atametaɾu"],
        translations: {
            en: ["warm up"],
            vn: ["làm ấm"],
            my: ["hangatkan"],
            zh: ["加热"],
            ja: ["あたためる"],
            ar: ["يسخن"]
        },
    }
];