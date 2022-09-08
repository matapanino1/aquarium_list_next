import React from "react";
import Prefecturecntr from "./Prefecturecntr";

const Prefecture = ({ prefecture }) => {
  const Aquariums = {
    "東京": [
      {
       "name": "葛西臨海水族園",
        "url": "https://www.tokyo-zoo.net/zoo/kasai/"
      },
      {"name": "サンシャイン水族館",
        "url": "https://sunshinecity.jp/aquarium/"
      },
      {"name": "すみだ水族館",
        "url": "https://www.sumida-aquarium.com/index.html"
      },
      {"name": "マクセル アクアパーク品川",
        "url": "http://www.aqua-park.jp/en/aqua/index.html"
      },
       {"name": "しながわ水族館",
        "url": "https://www.aquarium.gr.jp/"
      },
      {"name": "井の頭自然文化園 水生物館",
        "url": "https://www.tokyo-zoo.net/zoo/ino/"
      },
      {"name": "上野動物園 両生爬虫類館",
        "url": "https://www.tokyo-zoo.net/zoo/ueno/"
      },
      {"name": "足立区生物園",
        "url": "https://seibutuen.jp/"
      },
      {"name": "グリーンドームねったいかん 板橋区立熱帯環境植物園",
        "url": "https://www.seibu-la.co.jp/nettaikan/"
      }
    ],
    "神奈川": [
      {
      "name": "新江ノ島水族館",
        "url": "https://www.enosui.com/"
      },
      {"name": "横浜・八景島シーパラダイス",
        "url": "http://www.seaparadise.co.jp/en/"
      },
      {"name": "よこはま動物園ズーラシア",
        "url": "https://www.hama-midorinokyokai.or.jp/zoo/zoorasia/"
      },
      {"name": "箱根園水族館",
        "url": "https://www.princehotels.co.jp/amuse/hakone-en/suizokukan/"
      },
      {"name": "相模川ふれあい科学館 アクアリウムさがみはら",
        "url": "https://sagamigawa-fureai.com/"
      }
    ],
    "千葉": [
      {
      "name": "鴨川シーワールド",
        "url": "https://www.kamogawa-seaworld.jp/"
      }
    ],
    "埼玉": [
      {
      "name": "さいたま水族館",
        "url": "https://www.parks.or.jp/suizokukan/"
      }
    ],
    "茨城": [
      {"name": "アクアワールド茨城県大洗水族館",
        "url": "https://aqua-world.jp/"
      },
      {"name": "かすみがうら市水族館",
        "url": "http://www.dane-kerry.com/aquarium/"
      },
      {"name": "山方淡水魚館",
        "url": "https://hitachiomiya-sinkouzaidan.opal.ne.jp/tansui/"
      }
    ],
    "栃木": [
      {"name": "栃木県 なかがわ水遊園",
        "url": "https://tnap.jp/"
      }
    ],
    "群馬": [
      {"name": "水紀行館 水産学習館",
        "url": "https://mizunofurusato.com/"
      }
    ],
    "北海道": [
      {"name": "北の大地の水族館 山の水族館",
        "url": "https://onneyu-aq.com/"
      },
      {"name": "おたる水族館",
        "url": "https://otaru-aq.jp/"
      },
      {"name": "豊平川さけ科学館",
        "url": "https://salmon-museum.jp/"
      },
      {"name": "サンピアザ水族館",
        "url": "http://www.sunpiazza-aquarium.com/"
      },
      {"name": "丸山動物園",
        "url": "https://www.city.sapporo.jp/zoo/"
      },
      {"name": "旭山動物園",
        "url": "https://www.city.asahikawa.hokkaido.jp/asahiyamazoo/"
      },
      {"name": "登別マリンパークニクス",
        "url": "https://www.nixe.co.jp/"
      },
      {"name": "標津サーモン科学館",
        "url": "http://s-salmon.com/"
      },
      {"name": "サケのふるさと 千歳水族館",
        "url": "https://chitose-aq.jp/"
      },
      {"name": "美深チョウザメ館",
        "url": "http://www.town.bifuka.hokkaido.jp/cms/section/soumu/qlmcaj000000559v.html"
      },
      {
        "name": "くしろ水族館ぷくぷく",
        "url": "https://www.sennosuke.net/pukupuku/"
      },
      {"name": "ノシャップ寒流水族館",
        "url": "https://www.city.wakkanai.hokkaido.jp/suizokukan/"
      },
      {"name": "市立室蘭水族館",
        "url": "http://iburi.net/murosui/index.html"
      },
      {"name": "氷海展望塔オホーツクタワー/とっかりセンター",
        "url": "https://o-tower.co.jp/okhotsktower.html"
      }
    ],
    "青森": [
      {"name": "浅虫水族館",
        "url": "https://asamushi-aqua.com/"
      },
      {"name": "八戸市水産科学館 マリエント",
        "url": "http://www.marient.org/"
      }
    ],
    "岩手": [
      {"name": "もぐらんぴあ水族館",
        "url": "https://www.moguranpia.com/"
      }
    ],
    "秋田": [
      {"name": "男鹿水族館GAO",
        "url": "https://www.gao-aqua.jp/"
      }
    ],
    "宮城": [
      {"name": "仙台うみの社水族館",
        "url": "http://www.uminomori.jp/umino/index.html"
      },
      {"name": "アクアテラス錦ヶ丘",
        "url": "https://aquaterrace.co.jp/"
      }
    ],
    "山形": [
      {"name": "鶴岡市立加茂水族館",
        "url": "https://kamo-kurage.jp/"
      }
    ],
    "福島": [
      {"name": "アクアマリンふくしま",
        "url": "https://www.aquamarine.or.jp/"
      },
      {"name": "アクアマリン いなわしろカワセミ水族館",
        "url": "https://www.aquamarine.or.jp/kawasemi/"
      }
    ],
    "新潟": [
      {"name": "新潟市水族館 マリンピア日本海",
        "url": "https://www.marinepia.or.jp/"
      },
      {"name": "上越市立 水族博物館",
        "url": "http://www.umigatari.jp/joetsu/index.html"
      },
      {"name": "イヨボヤ会館",
        "url": "https://www.iyoboya.jp/"
      },
      {"name": "尖閣湾揚島遊園",
        "url": "https://sado-ageshima.com/"
      },
      {"name": "長岡市 寺泊水族博物館",
        "url": "https://aquarium-teradomari.jp/"
      }
    ],
    "山梨": [
      {"name": "森の中の水族館。山梨県立富士湧水の里水族館",
        "url": "http://www.morinonakano-suizokukan.com/"
      }
    ],
    "長野": [
      {"name": "国営アルプスあづみの公園",
        "url": "http://www.azumino-koen.jp/"
      },
      {"name": "蓼科アミューズメント水族館",
        "url": "https://www.tateshina-aquarium.jp/"
      }
    ],
    "富山": [
      {"name": "魚津水族館",
        "url": "https://www.uozu-aquarium.jp/"
      }
    ],
    "石川": [
      {"name": "のとじま水族館",
        "url": "https://www.notoaqua.jp/"
      }
    ],
    "福井": [
      {"name": "越前松島水族館",
        "url": "http://www.awara.jp/seiryu/suizokukanE.html"
      },
      {"name": "福井県海浜自然センター",
        "url": "https://fcnc.pref.fukui.lg.jp/"
      }
    ],
    "愛知": [
      {"name": "名古屋港水族館",
        "url": "https://nagoyaaqua.jp/"
      },
      {"name": "名古屋市 東山動植物園",
        "url": "https://www.higashiyama.city.nagoya.jp/"
      },
      {"name": "赤塚山公園ぎょぎょランド",
        "url": "http://www.akatsukayama.jp/index.html"
      },
      {"name": "南知多ビーチランド",
        "url": "https://beachland.jp/"
      },
      {"name": "竹島水族館",
        "url": "https://www.city.gamagori.lg.jp/site/takesui/"
      },
      {"name": "のんほいパーク 豊橋総合動植物園",
        "url": "https://www.nonhoi.jp/"
      },
      {"name": "シーライフ名古屋",
        "url": "https://www.legoland.jp/resort-guide/sealife-nagoya/"
      },
      {"name": "碧南海浜水族館",
        "url": "https://www.city.hekinan.lg.jp/aquarium/index.html"
      }
    ],
    "静岡": [
      {"name": "沼津港深海水族館",
        "url": "http://www.numazu-deepsea.com/"
      },
      {"name": "下田海中水族館",
        "url": "https://shimoda-aquarium.com/"
      },
      {"name": "あわしまマリンパーク",
        "url": "http://www.marinepark.jp/"
      },
      {"name": "伊豆・三津シーパラダイス",
        "url": "https://www.mitosea.com/"
      },
      {"name": "熱川バナナワニ園",
        "url": "http://bananawani.jp/"
      },
      {"name": "時之栖 水中楽園 AQUARIUM",
        "url": "https://www.tokinosumika.com/eventinfo/details.php?log=1427705462"
      },
      {"name": "東海大学海洋科学博物館",
        "url": "https://www.umi.muse-tokai.jp/"
      },
      {"name":  "浜名湖体験学習施設ウォット",
        "url": "https://ulotto.entetsuassist-dms.com/"
      }
    ],
    "岐阜": [
      {"name": "世界淡水魚間 アクア・トトぎふ",
        "url": "https://aquatotto.com/"
      }
    ],
    "三重": [
      {"name": "伊勢シーパラダイス",
        "url": "https://ise-seaparadise.com/"
      },
      {"name": "鳥羽水族館",
        "url": "https://aquarium.co.jp/"
      },
      {"name": "日本サンショウウオセンター",
        "url": "https://www.akame48taki.com/"
      }
    ],
      "滋賀": [
        {"name": "滋賀県立 琵琶湖博物館",
          "url": "https://www.biwahaku.jp/"
        }
      ],
      "京都": [
        {"name": "丹後魚っ知館",
          "url": "https://www.kepco.co.jp/corporate/profile/community/pr/miyazu/"
        },
        {"name": "京都水族館",
          "url": "https://www.kyoto-aquarium.com/index.html"
        }
      ],
      "大阪": [
        {"name": "海遊館",
          "url": "https://www.kaiyukan.com/"
        },
        {"name": "ニフレル",
          "url": "https://www.nifrel.jp/"
        }
      ],
      "兵庫": [
        {"name": "神戸市立須磨海浜水族園",
          "url": "https://kobe-sumasui.jp/"
        },
        {"name": "城崎マリンワールド",
          "url": "https://marineworld.hiyoriyama.co.jp/"
        },
        {"name": "姫路市立水族館",
          "url": "https://www.city.himeji.lg.jp/aqua/"
        }
      ],
      "和歌山": [
        {"name": "京都大学白浜水族館",
          "url": "https://www.seto.kyoto-u.ac.jp/aquarium/"
        },
        {"name": "アドベンチャーワールド",
          "url": "https://www.aws-s.com/"
        },
        {"name": "和歌山県立自然博物館",
          "url": "https://www.shizenhaku.wakayama-c.ed.jp/"
        },
        {"name": "串本海中公園 水族館",
          "url": "https://www.kushimoto.co.jp/"
        },
        {"name": "太地町立くじらの博物館",
          "url": "http://www.kujirakan.jp/"
        },
        {"name": "すさみ町立エビとカニの水族館",
          "url": "https://ebikani-aquarium.com/"
        }
      ],
      "香川": [
        {"name": "新屋島水族館",
          "url": "https://r.goope.jp/new-yashima-aq"
        }
      ],
      "徳島": [
         {"name": "日和佐うみがめ水族館カレッタ",
          "url": "https://caretta.town.minami.lg.jp/"
        }
      ],
      "愛媛": [
        {"name": "虹の森公園おさかな館",
          "url": "https://morinokuni.or.jp/publics/index/27/"
        }
      ],
      "高知": [
        {"name": "桂浜水族館",
          "url": "https://katurahama-aq.jp/"
        },
        {"name": "四万十川学遊館あきついお",
          "url": "http://gakuyukan.sakura.ne.jp/wp_sakura/previous/doc/tombo-gakuyukan.html"
        },
        {"name": "むろと廃校水族館",
          "url": "https://www.city.muroto.kochi.jp/pages/page0343.php"
        },
        {"name": "高知県立足摺海洋館",
          "url": "https://kaiyoukan.jp/"
        }
      ],
      "山口": [
        {"name": "しものせき水族館 海響館",
          "url": "https://www.kaikyokan.com/"
        },
        {"name": "なぎさ水族館",
          "url": "https://nagisapark.jimdofree.com/%E3%81%AA%E3%81%8E%E3%81%95%E6%B0%B4%E6%97%8F%E9%A4%A8/"
        }
      ],
      "広島": [
        {"name": "マリホ水族館",
          "url": "https://mariho-aquarium.com/"
        },
        {"name": "みやじマリン宮島水族館",
          "url": "https://www.miyajima-aqua.jp/"
        },
        {"name": "福山大学マリンバイオセンター水族館",
          "url": "https://www.fukuyama-u.ac.jp/marine-bio-center/"
        }
      ],
      "岡山": [
        {"name": "笠岡市立カブトガニ博物館",
          "url": "https://www.city.kasaoka.okayama.jp/site/kabutogani/"
        },
        {"name": "渋川マリン水族館",
          "url": "https://www.city.tamano.lg.jp/site/kaihaku/"
        }
      ],
      "島根": [
        {"name": "しまね海洋館 アクアス",
          "url": "https://aquas.or.jp/"
        },
        {"name": "島根県立宍道湖自然館ゴビウス",
          "url": "https://www.gobius.jp/"
        }
      ],
      "鳥取": [
        {"name": "鳥取県とっとり賀露かにっこ館",
          "url": "https://kanikko.jp/"
        }
      ],
      "沖縄": [
        {"name": "沖縄美ら海水族館",
          "url": "https://churaumi.okinawa/"
        }
      ],
      "福岡": [
        {"name": "マリンワールド海の中道",
          "url": "https://marine-world.jp/"
        },
        {"name": "北九州水環境館",
          "url": "https://mizukankyokan.jp/"
        }
      ],
      "長崎": [
        {"name": "長崎ペンギン水族館",
          "url": "https://penguin-aqua.jp/"
        },
        {"name": "九十九島水族館 海きらら",
          "url": "https://umikirara.jp/en"
        },
        {"name": "むつごろう水族館",
          "url": "http://www.kantakunosato.co.jp/"
        }
      ],
      "佐賀": [
        {"name": "佐賀県宇宙科学館",
          "url": "https://www.yumeginga.jp/"
        }
      ],
      "大分": [
        {"name": "大分マリーンパレス水族館海たまご",
          "url": "https://www.umitamago.jp/"
        },
        {"name": "道の駅やよい番匠おさかな館",
          "url": "https://www.michinoeki-yayoi.com/banjou-osakanakan"
        }
      ],
      "熊本": [
        {"name": "わくわく海中水族館シードーナツ",
          "url": "https://amakusapearl.com/"
        }
      ],
      "宮崎": [
        {"name": "出の山淡水魚水族館",
          "url": "https://idenoyama-aquarium.weebly.com/"
        },
        {"name": "すみえファミリー水族館",
          "url": "https://nobekan.jp/activity/play/%E3%81%99%E3%81%BF%E3%81%88%E3%83%95%E3%82%A1%E3%83%9F%E3%83%AA%E3%83%BC%E6%B0%B4%E6%97%8F%E9%A4%A8/"
        },
        {"name": "高千穂峡淡水魚水族館",
          "url": "https://www.town-takachiho.jp/top/kanko_bunka/kanko_supotto/810.html"
        }
      ],
      "鹿児島": [
        {"name": "いおワールドかごしま水族館",
          "url": "https://ioworld.jp/"
        },
        {"name": "奄美海洋展示館",
          "url": "https://www.ohama.marutani-amami.com/ocean-exhibition-hall"
        }
      ]
  }

  return (
    <>
      {prefecture.map((pre) => (
        <Prefecturecntr key={{pre}} pre={pre} aquariums={Aquariums[pre]} />
      ))}
    </>
  );
};

export default Prefecture;
