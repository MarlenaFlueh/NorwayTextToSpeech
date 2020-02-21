const list = [
    [
        {
            "deu": "Hi",
            "nor": "Hei"
        },
        {
            "deu": "Ich heiße",
            "nor": "Jeg heter"
        },
        {
            "deu": "Guten Morgen",
            "nor": "God morgen"
        },
        {
            "deu": "Moin/Morgen",
            "nor": "Morn"
        },
        {
            "deu": "Danke für letztens.",
            "nor": "Takk for sist."
        },
        {
            "deu": "Danke gleichfalls (vorheriges)",
            "nor": "Takk i like mate."
        },
        {
            "deu": "Danke dir.",
            "nor": "Takk skal du ha."
        },
        {
            "deu": "Vielen Dank!",
            "nor": "Mange takk!"
        },
        {
            "deu": "Tausend Dank!",
            "nor": "Tusen takk!"
        },
        {
            "deu": "Dir auch.",
            "nor": "Så ha du."
        },
        {
            "deu": "Nicht's zu Danken.",
            "nor": "Ingenting å takke for."
        },
        {
            "deu": "Guten Abend!",
            "nor": "God kveld!"
        },
        {
            "deu": "Tschüss!",
            "nor": "Ha det!"
        },
        {
            "deu": "Mach’s gut!",
            "nor": "Ha det bra!"
        },
        {
            "deu": "Ich wohne in Oslo.",
            "nor": "Jeg bor i Oslo."
        },
        {
            "deu": "Ich komme aus Oslo.",
            "nor": "Jeg kommer fra Oslo."
        },
        {
            "deu": "Ich komme nicht aus Oslo.",
            "nor": "Jeg kommer ikke fra Oslo."
        },
        {
            "deu": "Ich auch nicht.",
            "nor": "Ikke jeg heller."
        },
        {
            "deu": "Ich komme auch aus Oslo.",
            "nor": "Jeg kommer også fra Oslo."
        },
        {
            "deu": "Wie heißt du?",
            "nor": "Hva heter du?"
        },
        {
            "deu": "Wo kommst du her?",
            "nor": "Hvor kommer du fra?"
        }
    ],
    [
        {
            "deu": "ebenfalls",
            "nor": "likeledes, likeså"
        },
        {
            "deu": "Kein Problem",
            "nor": "Ikke problem"
        },
        {
            "deu": "hun",
            "nor": "sie"
        },
        {
            "deu": "han",
            "nor": "er"
        },
        {
            "deu": "ein Mädchen",
            "nor": "ei jente"
        },
        {
            "deu": "ein Junge",
            "nor": "en gutt"
        },
        {
            "deu": "eine Tür",
            "nor": "en dør"
        },
        {
            "deu": "eine Frau",
            "nor": "ei kvinne"
        },
        {
            "deu": "ein Mann",
            "nor": "en mann"
        },
        {
            "deu": "Ich habe einen Tisch.",
            "nor": "Jeg har et bord."
        },
        {
            "deu": "Ja, das bin ich.",
            "nor": "Ja, det er jeg."
        },
        {
            "deu": "Und was (ist) mit dir?",
            "nor": "Og hva med deg?"
        },
        {
            "deu": "deshalb",
            "nor": "derfor"
        },
        {
            "deu": "daher",
            "nor": "derfra"
        },
        {
            "deu": "Versuche jetzt selbst.",
            "nor": "Å prøve nå selv."
        }
    ]
]

const verbs = [
    {
        "deutsch": "bitten",
        "infinitv": "be",
        "präsens": "ber",
        "präteritum": "bad",
        "perfect": "har bedt"
    },
    {
        "deutsch": "bringen",
        "infinitv": "bringe",
        "präsens": "bringer",
        "präteritum": "brakte",
        "perfect": "har brakt"
    },
    {
        "deutsch": "trinken",
        "infinitv": "drikke",
        "präsens": "drikker",
        "präteritum": "drakk",
        "perfect": "har drukket"
    },
    {
        "deutsch": "sterben",
        "infinitv": "dø",
        "präsens": "dør",
        "präteritum": "døde",
        "perfect": "har dødd"
    },
    {
        "deutsch": "finden",
        "infinitv": "finne",
        "präsens": "finner",
        "präteritum": "fant",
        "perfect": "har funnet"
    },
    {
        "deutsch": "fliegen",
        "infinitv": "fly",
        "präsens": "flyr",
        "präteritum": "fløy",
        "perfect": "har/er fløyet"
    },
    {
        "deutsch": "bekommen",
        "infinitv": "få",
        "präsens": "får",
        "präteritum": "fikk",
        "perfect": "har fått"
    },
    {
        "deutsch": "geben",
        "infinitv": "gi",
        "präsens": "gir",
        "präteritum": "ga(v)",
        "perfect": "har gitt"
    },
    {
        "deutsch": "machen",
        "infinitv": "gjøre",
        "präsens": "gjør",
        "präteritum": "giorde",
        "perfect": "har gjort"
    },
    {
        "deutsch": "gehen",
        "infinitv": "gå",
        "präsens": "går",
        "präteritum": "gikk",
        "perfect": "har/er gått"
    },
    {
        "deutsch": "haben",
        "infinitv": "ha",
        "präsens": "har",
        "präteritum": "hadde",
        "perfect": "har hatt"
    },
    {
        "deutsch": "helfen",
        "infinitv": "hjelpe",
        "präsens": "hjelper",
        "präteritum": "hjalp",
        "perfect": "har hjulpet"
    },
    {
        "deutsch": "heißen",
        "infinitv": "hete",
        "präsens": "heter",
        "präteritum": "het",
        "perfect": "har hett"
    },
    {
        "deutsch": "kommen",
        "infinitv": "komme",
        "präsens": "kommer",
        "präteritum": "kom",
        "perfect": "har/er kommet"
    },
    {
        "deutsch": "können",
        "infinitv": "kunne",
        "präsens": "kan",
        "präteritum": "kunne",
        "perfect": "har kunnet"
    },
    {
        "deutsch": "lassen",
        "infinitv": "la",
        "präsens": "lar",
        "präteritum": "lot",
        "perfect": "har latt"
    },
    {
        "deutsch": "lachen",
        "infinitv": "le",
        "präsens": "ler",
        "präteritum": "lo",
        "perfect": "har ledd"
    },
    {
        "deutsch": "liegen",
        "infinitv": "ligge",
        "präsens": "ligger",
        "präteritum": "lå",
        "perfect": "har ligget"
    },
    {
        "deutsch": "laufen",
        "infinitv": "løpe",
        "präsens": "løper",
        "präteritum": "løp",
        "perfect": "har løpt"
    },
    {
        "deutsch": "müssen",
        "infinitv": "måtte",
        "präsens": "må",
        "präteritum": "måtte",
        "perfect": "har måttet"
    },
    {
        "deutsch": "sehen",
        "infinitv": "se",
        "präsens": "ser",
        "präteritum": "så",
        "perfect": "har sett"
    },
    {
        "deutsch": "verkaufen",
        "infinitv": "selge",
        "präsens": "selger",
        "präteritum": "solgte",
        "perfect": "har solgt"
    },
    {
        "deutsch": "schreiben",
        "infinitv": "skrive",
        "präsens": "skriver",
        "präteritum": "skrev",
        "perfect": "har skrevet"
    },
    {
        "deutsch": "sagen",
        "infinitv": "si",
        "präsens": "sier",
        "präteritum": "sa",
        "perfect": "har sagt"
    },
    {
        "deutsch": "sitzen",
        "infinitv": "sitte",
        "präsens": "sitter",
        "präteritum": "satt",
        "perfect": "har sittet"
    },
    {
        "deutsch": "sollen",
        "infinitv": "skulle",
        "präsens": "skal",
        "präteritum": "skulle",
        "perfect": "har skullet"
    },
    {
        "deutsch": "schlafen",
        "infinitv": "sove",
        "präsens": "sover",
        "präteritum": "sov",
        "perfect": "har sovet"
    },
    {
        "deutsch": "rennen",
        "infinitv": "springe",
        "präsens": "springer",
        "präteritum": "sprang",
        "perfect": "har sprunget"
    },
    {
        "deutsch": "fragen",
        "infinitv": "spørre",
        "präsens": "spør",
        "präteritum": "spurte",
        "perfect": "har spurt"
    },
    {
        "deutsch": "stehen",
        "infinitv": "stå",
        "präsens": "står",
        "präteritum": "sto(d)",
        "perfect": "har stått"
    },
    {
        "deutsch": "singen",
        "infinitv": "synge",
        "präsens": "synger",
        "präteritum": "sang",
        "perfect": "har sunget"
    },
    {
        "deutsch": "treffen",
        "infinitv": "treffe",
        "präsens": "treffer",
        "präteritum": "traff",
        "perfect": "har truffet"
    },
    {
        "deutsch": "wollen",
        "infinitv": "ville",
        "präsens": "vil",
        "präteritum": "ville",
        "perfect": "har villet"
    },
    {
        "deutsch": "wissen",
        "infinitv": "vite",
        "präsens": "vet",
        "präteritum": "visste",
        "perfect": "har visst"
    },
    {
        "deutsch": "sein",
        "infinitv": "være",
        "präsens": "er",
        "präteritum": "var",
        "perfect": "har vært"
    }
]

export {
    list,
    verbs
}