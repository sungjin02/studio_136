export const homepageData = {
  introSection: {
    introVideos: [
      "videos/intro/technology.mp4",
      "videos/intro/wellness.mp4",
      "videos/intro/qualityOfLife.mp4",
    ],
    introWords: {
      left: "Studio 136",
      right: ["REVIVE", "ACCESS", "SHARE"],
    },
    introText: {
      text: "We bring classics to today, make them easy to access, and share their value widely.",
      lineBreaks: {
        pc: ["today,", "access,"],
        mobile: ["classics", "today,", "easy", "access,", "their"],
      },
    },
  },
  gallerySection: [
    [
      {
        title: "숙오음덕 뮤지컬",
        sub: ["Musical"],
        image: "/images/gallery/sukoemduk.png",
        // video: "/videos/gallery/gallery-koreren.mp4",
      },
    ],
    [
      {
        title: "MD 상품",
        sub: ["Merchandise"],
        image: "/images/gallery/gallery-cosmetic.webp",
        video: "/videos/gallery/gallery-cosmetic.mp4",
      },
    ],
    [
      {
        title: "관포지교 뮤지컬",
        sub: ["coming-soon", "관포지교"],
        image: "/images/gallery/gallery-ITdevelop.webp",
        video: "/videos/gallery/gallery-ITdevelop.mp4",
      },
    ],
  ],
  historySection: [
    //순서대로 화면에 적용
    {
      year: 2025.11,
      title: "창작 뮤지컬 〈숙오음덕〉 제작 및 공연 준비 진행",
    },
    {
      year: 2025.1,
      title: "첫 기획 공연 개발 착수",
    },
    {
      year: 2025.09,
      title: "고전 기반 문화콘텐츠 제작을 목표로 회사 설립",
    },
  ],
  expertiseSection: {
    default_description: [
      "CLASSICS",
      "CREATIVITY",
      "PERFORMANCE",
      "CULTURE",
      "VALUE",
    ],
    default_video: "/videos/expertise/main.mp4",
    //title과 description, video는 각 순서에 대응
    title: ["CLASSICS", "CREATIVITY", "PERFORMANCE", "CULTURE", "VALUE"],
    description: [
      [
        "HERITAGE",
        "TRADITION",
        "TEXTS",
        "WISDOM",
        "LEGACY",
        "STORY",
        "INTERPRETATION",
      ],
      [
        "IMAGINATION",
        "IDEAS",
        "ARTISTRY",
        "INSPIRATION",
        "CONCEPT",
        "VISION",
        "CRAFT",
      ],
      [
        "STAGE",
        "MUSIC",
        "DRAMA",
        "MOVEMENT",
        "EXPRESSION",
        "ENERGY",
        "PRESENCE",
      ],
      [
        "ARTS",
        "COMMUNITY",
        "DIVERSITY",
        "SHARING",
        "HISTORY",
        "SOCIAL IMPACT",
        "CONNECTION",
      ],
      ["MEANING", "PURPOSE", "MESSAGE", "ETHICS", "IMPACT", "INSIGHT", "TRUTH"],
    ],
    video: [
      "/videos/expertise/classics.mp4",
      "/videos/expertise/creativity.mp4",
      "/videos/expertise/performance.mp4",
      "/videos/expertise/culture.mp4",
      "/videos/expertise/value.mp4",
    ],
  },
  partnersSection: [
    {
      name: "서채은",
      img: "/images/partner/che-en.jpeg",
      // link: "https://www.gsland-global.com",
    },
    {
      name: "이우재",
      img: "/images/partner/gsland.webp",
      // link: "https://www.gsland-global.com",
    },
    {
      name: "정다혜",
      img: "/images/partner/gsland.webp",
      // link: "https://www.gsland-global.com",
    },
    {
      name: "김현주",
      img: "/images/partner/gsland.webp",
      // link: "https://www.gsland-global.com",
    },
    {
      name: "고성희",
      img: "/images/partner/sung-hee.png",
      // link: "https://www.gsland-global.com",
    },

    {
      name: "김성진",
      img: "/images/partner/sung-jin.png",
      // link: "https://www.gsland-global.com",
    },
  ],
  footerSection: {
    text: "Got a project in mind? We're listening :)",
    breakPoint: ["mind?"],
    email: "studio_136@studio_136",
    tel: "02-136-136",
    address: "대전광역시 어쩌구 1호",
    addressDetail: "2층, studio 136",
    mobileVideo: "/videos/footer/mobile-footer.mp4",
    pcVideo: "/videos/footer/pc-footer.mp4",
  },
  modal: {
    //gallery와 history 색션으로 구분
    //위에 작성한 각 gallery와 hisroty Section DATA의 array idx에 대응
    //desc.texts.pc&mobile분리
    //album은 needTap false면 content.default에 바로 채워준거 반영
    //need Tap true면 taps : [itemName1, itemName2] 탭 배열에 분리할 이름 적어주고
    //content 는 itemName1, itemName2를 각자 키값으로 구성해주면 됨.
    gallery: [
      {
        info: {
          //btnText : null 로 할 경우 btn 영역 삭제
          types: ["Musical"],
          title: "숙오음덕 뮤지컬",
          // link: "https://koreren.co.kr/",
          // btnText: "Visit Website",
        },
        mainImg: "/images/modal/gallery/main/modal-main-poster.png",
        desc: {
          texts: {
            pc: [
              "뮤지컬 ‘숙오음덕’은 보이지 않는 선행과 그에 따른 울림을 현대적 감성으로 담아낸 작품입니다.",
              "고전의 핵심 메시지를 간결하게 전달하며, 인물들의 선택과 감정이 무대 위에서 선명하게 드러납니다.",
              "절제된 연출과 상징적 이미지로 작품의 깊이를 강조하며, 관객에게 고전이 지닌 의미를 다시 묻습니다.",
              " ",
              "숙오음덕은 고전이 오늘에 남기는 질문을 가장 순수한 형태로 전달하고자 합니다.",
            ],
            mobile: [
              "뮤지컬 ‘숙오음덕’은",
              "보이지 않는 선행의 의미를",
              "현대적 감성으로 담아낸 작품입니다.",
              " ",
              "고전이 전하는 메시지를",
              "간결한 방식으로 제시하며,",
              "인물들의 감정과 선택을",
              "선명하게 보여줍니다.",
              " ",
              "절제된 연출과 상징적 이미지로",
              "작품의 깊이를 강조하며,",
              "고전이 남기는 질문을",
              "관객에게 조용히 전합니다.",
              " ",
              "숙오음덕은 고전의 울림을",
              "가장 순수한 형태로",
              "무대에 담아냅니다.",
            ],
          },
          points: ["#숙오음덕", "#고전의울림", "#보이지않는선행", "#뮤지컬"],
        },
        album: {
          needTap: false,
          content: {
            default: {
              mobile: [
                //type은 꼭 image와 video 로 구분
                [
                  {
                    type: "image",
                    src: "/images/modal/gallery/album/modal-album-poster-desc.png",
                  },
                ],
              ],
              pc: [
                //type은 꼭 image와 video 로 구분

                [
                  {
                    type: "image",
                    src: "/images/modal/gallery/album/modal-album-poster-desc.png",
                  },
                ],
              ],
            },
          },
        },
      },
      {
        info: {
          //btnText : null 로 할 경우 btn 영역 삭제
          types: ["Merchandise"],
          title: "MD products",
          // link: "https://www.youtube.com/",
          btnText: null,
        },
        mainImg: "/images/modal/gallery/main/modal-main-md.png",
        desc: {
          texts: {
            pc: [
              "숙오음덕의 깊은 메시지를 일상에서도 경험할 수 있도록, 특별한 MD 컬렉션을 선보입니다.",
              "공연의 상징적 요소와 감성을 담아낸 디자인을 중심으로 티셔츠, 머그컵, 키링 등",
              "실용성과 소장 가치를 모두 갖춘 제품 라인업을 준비했습니다.",
              "작품의 감동을 오래 간직하고, 하루의 순간에 작은 영감을 더하는 경험을 제공합니다.",
            ],
            mobile: [
              "숙오음덕의 깊은 메시지를",
              "일상에서도 경험할 수 있도록,",
              "특별한 MD 컬렉션을 선보입니다.",
              " ",
              "공연의 상징적 요소와 감성을 담아낸 디자인을 중심으로",
              "티셔츠, 머그컵, 키링 등",
              "실용성과 소장 가치를 갖춘",
              "제품 라인업을 준비했습니다.",
              " ",
              "작품의 감동을 오래 간직하고,",
              "하루의 순간에 작은 영감을 더하는",
              "특별한 경험을 제공합니다.",
            ],
          },
          points: [
            "#숙오음덕",
            "#뮤지컬MD",
            "#전통감성",
            "#고전모티프",
            "#프리미엄굿즈",
          ],
        },
        album: {
          needTap: false,
          //type은 꼭 image와 video 로 구분
          content: {
            default: {
              pc: [
                [
                  {
                    type: "image",
                    src: "/images/modal/gallery/album/modal-album-md-menu.png",
                  },
                ],
                [
                  {
                    type: "image",
                    src: "/images/modal/gallery/album/modal-album-md-shirt.png",
                  },
                  {
                    type: "image",
                    src: "/images/modal/gallery/album/modal-album-md-cup.png",
                  },
                ],
                [
                  {
                    type: "image",
                    src: "/images/modal/gallery/album/modal-album-md-btn.png",
                  },
                  {
                    type: "image",
                    src: "/images/modal/gallery/album/modal-album-md-kring.png",
                  },
                ],
                [
                  {
                    type: "image",
                    src: "/images/modal/gallery/album/modal-album-md-pen.png",
                  },
                  {
                    type: "image",
                    src: "/images/modal/gallery/album/modal-album-md-sticker.png",
                  },
                ],
              ],
              mobile: [
                [
                  {
                    type: "image",
                    src: "/images/modal/gallery/album/modal-album-md-menu.png",
                  },
                ],
                [
                  {
                    type: "image",
                    src: "/images/modal/gallery/album/modal-album-md-shirt.png",
                  },
                ],
                [
                  {
                    type: "image",
                    src: "/images/modal/gallery/album/modal-album-md-cup.png",
                  },
                ],
                [
                  {
                    type: "image",
                    src: "/images/modal/gallery/album/modal-album-md-btn.png",
                  },
                ],
                [
                  {
                    type: "image",
                    src: "/images/modal/gallery/album/modal-album-md-kring.png",
                  },
                ],
                [
                  {
                    type: "image",
                    src: "/images/modal/gallery/album/modal-album-md-pen.png",
                  },
                ],
                [
                  {
                    type: "image",
                    src: "/images/modal/gallery/album/modal-album-md-sticker.png",
                  },
                ],
              ],
            },
          },
        },
      },
      {
        info: {
          //btnText : null 로 할 경우 btn 영역 삭제
          types: ["musical", "coming soon"],
          title: "관포지교 뮤지컬",
          // link: "https://homerun.today/",
          btnText: null,
        },
        mainImg: "/images/modal/gallery/main/modal-main-coming.png",
        desc: {
          texts: {
            pc: [
              "뮤지컬 ‘관포지교’는 한 시대를 대표하는 깊은 우정과 신의를 중심으로, 인간 관계의 본질을 섬세하게 담아낸 작품입니다.",
              "서로를 끝까지 믿는 두 인물의 이야기를 음악, 무대, 드라마로 입체적으로 펼쳐내며,",
              "고전 속 가치가 현대적 감성으로 다시 살아나는 강렬한 서사를 선보입니다.",
              "현재 마지막 완성도를 높이는 단계에 있으며, 곧 관객들에게 그 깊이를 전할 예정입니다.",
            ],
            mobile: [
              "뮤지컬 ‘관포지교’는",
              "깊은 우정과 신의를 중심으로",
              "인간 관계의 본질을 담아낸 작품입니다.",
              " ",
              "두 인물의 믿음과 선택이",
              "음악과 무대미술을 통해",
              "입체적으로 표현되며,",
              "고전적 가치가 현대적으로",
              "되살아나는 서사를 전합니다.",
              " ",
              "현재 마지막 완성도를 높이고 있으며,",
              "곧 관객들에게 공개될 예정입니다.",
            ],
          },
          points: ["#고전서사", "#관포지교", "#뮤지컬", "#ComingSoon"],
        },
        album: {
          //type은 꼭 image와 video 로 구분
          needTap: false,
          // taps: ["Website", "CRM"],
          content: {
            default: {
              pc: [
                [
                  {
                    type: "image",
                    src: "/images/modal/gallery/album/modal-album-coming.png",
                  },
                ],
              ],
              mobile: [
                [
                  {
                    type: "image",
                    src: "/images/modal/gallery/album/modal-album-coming.png",
                  },
                ],
              ],
            },
          },
        },
      },
    ],
  },
};
