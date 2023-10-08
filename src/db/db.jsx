const data = [
  {
    id: 0,
    name: "nature",
    images: [
      "https://www.fonstola.ru/pic/202007/800x600/fonstola.ru_398828.jpg",
      "https://i.pinimg.com/originals/e8/5e/e6/e85ee67e957eddf12bf41a01360c2627.png",
      "https://i.pinimg.com/originals/d4/9e/b7/d49eb7ace3206ec03ffbf4cabd6b3129.png",
      "https://postila.ru/data/91/5f/f2/76/915ff276abbb4f38efe0b7584ad20c18bfded292bf259afc7eb21fa2636ffe01.png",
      "https://images.wallpaperscraft.ru/image/single/les_chelovek_odinochestvo_116306_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/ozero_les_sneg_130421_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/okean_pliazh_vid_sverhu_134429_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/vodopad_obryv_kamennyj_141850_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/pirs_ozero_kuvshinki_60806_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/doroga_asfalt_razmetka_130996_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/osen_les_park_128379_300x168.jpg",
    ],
  },

  {
    id: 1,
    name: "animals",
    images: [
      "https://images.wallpaperscraft.ru/image/single/shchenok_labrador_retriver_95296_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/shchenok_haski_lezhat_53643_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/kotenok_lezhit_polosatyj_102741_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/volk_hishchnik_voj_134450_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/enot_listia_maskirovka_119370_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/kotenok_kot_trava_123220_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/shchenok_sobaka_chashka_106508_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/kot_lezhat_kotenok_91882_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/volk_skala_obryv_120088_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/shchenok_haski_sobaka_146772_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/volk_volki_hishchniki_116660_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/sobaka_morda_babochka_93617_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/sobaka_vysunutyj_iazyk_sneg_134188_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/belyj_medved_aliaska_sneg_105367_300x168.jpg",
    ],
  },

  {
    id: 2,
    name: "love",
    images: [
      "https://images.wallpaperscraft.ru/image/single/para_liubov_zakat_128678_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/para_zvezdnoe_nebo_art_123338_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/para_ruki_liubov_118921_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/serdtse_poverhnost_liubov_85684_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/deti_siluety_liubov_133548_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/para_bereg_zakat_120844_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/kniga_koltso_serdtse_118982_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/siluety_liubov_derevo_128864_300x168.jpg",
    ],
  },
  {
    id: 3,
    name: "food",
    images: [
      "https://images.wallpaperscraft.ru/image/single/kakao_zefir_pled_118517_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/kofe_kapuchino_pena_108167_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/apelsin_led_miata_139564_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/kofe_kruzhka_stul_124443_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/makro_kofe_minimalizm_84953_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/kruzhka_knigi_nastroenie_128878_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/malina_iagody_korzina_95239_300x168.jpg",
      "https://images.wallpaperscraft.ru/image/single/kitajskaia_grusha_frukty_razdelochnaia_doska_108809_300x168.jpg",
    ],
  },
];

localStorage.setItem("images", JSON.stringify(data));

const db = () => {
  return JSON.parse(localStorage.getItem("images"));
};

export default db();
