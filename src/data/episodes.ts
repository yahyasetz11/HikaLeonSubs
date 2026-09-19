export interface Episode {
  id: string;
  showId: string;
  showName: string;
  showSlug: string;
  episodeTitle: string;
  episodeSubtitle?: string;
  episodeNumber: string;
  releaseDate: string;
  thumbnail: string;
  downloadUrl: string;
  description?: string;
}

export interface Show {
  id: string;
  slug: string;
  name: string;
  description: string;
  thumbnail: string;
}

export const shows: Show[] = [
  {
    id: "sokomagattara",
    slug: "sokomagattara",
    name: "Sokomagattara, Sakurazaka?",
    description:
      "Variety show following the members of Sakurazaka46 in their daily lives and special activities.",
    thumbnail: "/images/thumbnails/sokomagattara-show.jpg",
  },
  {
    id: "sakurazaka-channel",
    slug: "sakurazaka-channel",
    name: "Sakurazaka Channel",
    description:
      "Official YouTube channel content with behind-the-scenes footage and exclusive clips.",
    thumbnail: "/images/thumbnails/sakurazaka-channel-show.jpg",
  },
  {
    id: "chokosaku",
    slug: "chokosaku",
    name: "Chokosaku",
    description:
      "Short-form variety content featuring members in quick, fun challenges.",
    thumbnail: "/images/thumbnails/chokosaku-show.jpg",
  },
  {
    id: "sakura-meets",
    slug: "sakura-meets",
    name: "Sakura Meets",
    description:
      "Members meet with guests and celebrities in this talk-style variety format.",
    thumbnail: "/images/thumbnails/sakura-meets-show.jpg",
  },
  {
    id: "documentary",
    slug: "documentary",
    name: "Documentary",
    description:
      "In-depth documentary content covering Sakurazaka46 performances and events.",
    thumbnail: "/images/thumbnails/documentary-show.jpg",
  },
];

export const episodes: Episode[] = [
  {
    id: "ep-302-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260913 {Soko Magattara, Sakurazaka} #302 Sub Indo",
    episodeSubtitle: "Kuis Episode Keren Sakurazaka46, Jawab Tanpa Ragu!",
    episodeNumber: "Episode 302",
    releaseDate: "2026-09-13",
    thumbnail: "/images/thumbnails/sokomagattara-302.png",
    downloadUrl: "#",
    description:
      'Sokomagattara, Sakurazaka? minggu ini menghadirkan proyek seru "Kuis Episode Keren Sakurazaka46, Jawab Tanpa Ragu!", sebuah wadah unik bagi para member untuk memamerkan kebaikan dan perlakuan keren yang pernah mereka lakukan kepada rekan satu grup tanpa takut dicap sombong. Suasana studio dipenuhi gelak tawa sekaligus momen menghangatkan hati saat para member berebut mengklaim diri sebagai sosok paling berjasa. Menutup keseruan episode, panggung beralih ke momen yang ditunggu, yaitu pengumuman formasi senbatsu untuk single ke-16 "Ai must be", yang resmi mendapuk Taniguchi Airi sebagai center baru. Sisanya bisa langsung kamu tonton sendiri!',
  },
  {
    id: "ep-302-choko",
    showId: "chokosaku",
    showName: "Chokosaku",
    showSlug: "chokosaku",
    episodeTitle: "260913 {Chokosaku} #302 Sub Indo",
    episodeSubtitle: "Masih Ada Lagi, Ajang Unjuk Pesona yang Bikin Kepincut",
    episodeNumber: "Episode 302",
    releaseDate: "2026-09-13",
    thumbnail: "/images/thumbnails/chokosaku-302.png",
    downloadUrl: "#",
    description:
      'Melanjutkan keseruan dari tayangan utama, Chokosaku pekan ini menghadirkan segmen lanjutan bertajuk "Masih Ada Lagi, Ajang Unjuk Pesona yang Bikin Kepincut" yang dipandu oleh Murai Yu dan Sato Neo. Tanpa tekanan sistem tebak kuis, para member saling membongkar perlakuan manis dan perhatian tak terduga yang pernah mereka terima—mulai dari gaya pujian blak-blakan Murayama Miu, kebaikan diam-diam si bungsu Yamada Momom, hingga pesona gentleman Matono Mio dan Murai Yu. Puncaknya, tawa seisi studio pecah saat Airi nekat memuji dan membongkar aksi keren dirinya. Sisanya bisa langsung kalian tonton sendiri!',
  },
  {
    id: "ep-001-documentary",
    showId: "documentary",
    showName: "Documentary",
    showSlug: "documentary",
    episodeTitle:
      "Documentary Behind the scenes of {'5th YEAR ANNIVERSARY LIVE'} Sakurazaka46",
    episodeSubtitle:
      "From Blu-Ray Release of '5th YEAR ANNIVERSARY LIVE' Sakurazaka46",
    episodeNumber: "",
    releaseDate: "2026-09-09",
    thumbnail: "/images/thumbnails/documentary-5th-annila.png",
    downloadUrl: "#",
    description:
      "Dokumenter di balik layar ini merekam secara intim perjuangan, keringat, dan luapan emosi para member Sakurazaka46 saat mempersiapkan konser bersejarah 5th YEAR ANNIVERSARY LIVE di panggung megah Stadion Nasional (Kokuritsu). Mulai dari kilas balik perjalanan berliku selama lima tahun melewati masa-masa sulit, proses Takemoto Yui merancang koreografi dance track untuk seluruh formasi grup, beban emosional generasi baru saat dipercaya membawakan lagu-lagu sarat makna, hingga momen sakral penunjukan Yamasaki Ten sebagai wakil kapten, mendampingi kapten saat ini, Matsuda Rina. Menyajikan sudut pandang personal yang jujur di ruang latihan hingga atmosfer magis ketika puluhan ribu Buddies memenuhi tribun, tayangan ini menjadi potret ketulusan serta pembuktian ikatan antargenerasi sebelum mereka melangkah lebih jauh menyongsong tahun keenam perjalanan grup. Sisanya bisa langsung kamu tonton sendiri! ",
  },
  {
    id: "ep-168-meets",
    showId: "sakura-meets",
    showName: "Sakura Meets",
    showSlug: "sakura-meets",
    episodeTitle: "260917 {Sakura Meets} #168 Sub Indo",
    episodeSubtitle:
      "Kilas Balik dari Panggung Sakura Meets Fes Bagian Hiru Meets",
    episodeNumber: "Episode 168",
    releaseDate: "2026-09-17",
    thumbnail: "/images/thumbnails/sakura-meets-168.png",
    downloadUrl: "#",
    description:
      "Episode Sakura Meets minggu ini menyajikan kilas balik dari panggung Sakura Meets Fes bagian Hiru Meets (sesi siang), yang secara resmi menyambut bergabungnya Yamada Momomi dan Sato Neo sebagai member reguler baru. Bersama Kosaka Marino yang hadir sebagai bintang tamu, para member membedah ragam momen tak terlupakan di balik layar—mulai dari reaksi kaget saat penyergapan pengumuman member baru, cerita di balik sketsa komedi kolaborasi bareng Long Coat Daddy dan Kano (A-Masso), kekacauan kostum dalam pertunjukan ritme Kega no Koumyou 2, hingga proses kreatif Masumoto Kira yang menulis naskah drama orisinal bertema gadis penyihir berdasarkan mimpi pribadinya. Nostalgia sesi siang ini ditutup dengan keharuan paduan suara massal yang menyatukan seluruh penonton. Sisanya bisa langsung kalian tonton sendiri!",
  },
  {
    id: "ep-001-channel",
    showId: "sakurazaka-channel",
    showName: "Sakurazaka Channel",
    showSlug: "sakurazaka-channel",
    episodeTitle: "260914 {Sakurazaka Channel} Sub Indo",
    episodeSubtitle:
      "Perjalanan Penuh Kenangan! Liburan santai ke Hiroshima bareng duo wilayah Chugoku! Bener-bener makan terus tanpa henti! Sub Indo",
    episodeNumber: "",
    releaseDate: "2026-09-14",
    thumbnail: "/images/thumbnails/sakura-channel-121.png",
    downloadUrl: "#",
    description:
      "Memanfaatkan waktu luang tepat sehari setelah merampungkan tur konser Sakurazaka46 di Hiroshima, Taniguchi Airi dan Mukai Itoha menghabiskan liburan santai untuk bernapak tilas ke Pulau Miyajima. Perjalanan berdua ini diisi dengan beragam aktivitas seru—mulai dari menaiki kapal feri sambil menyapa pemandangan gerbang Ootorii, berinteraksi akrab dengan rusa-rusa liar, menjajal ropeway menuju ketinggian Stasiun Shishiiwa, hingga mencicipi kuliner khas seperti hidangan anagomeshi, tiram goreng, serta pengalaman memanggang sendiri kue momiji manju yang manis. Tidak ketinggalan, keduanya juga mencoba melukis piring keramik bertema kenangan konser serta menutup trip nostalgia mereka di kedai ramen favorit masa sekolah sebelum kembali ke Tokyo. Sisanya bisa langsung kalian tonton sendiri!",
  },
];

export const latestEpisodes = episodes.slice(0, 3);
export const feedEpisodes = episodes;
