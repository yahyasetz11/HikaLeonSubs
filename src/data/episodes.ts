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
  previewImage1?: string;
  previewImage2?: string;
  downloadUrl: string;
  mediafireUrl?: string;
  trakteerUrl?: string;
  rawMp4Url?: string;
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
    id: "ep-168-meets",
    showId: "sakura-meets",
    showName: "Sakura Meets",
    showSlug: "sakura-meets",
    episodeTitle: "260917 {Sakura Meets} #168 Sub Indo",
    episodeSubtitle:
      "Kilas Balik dari Panggung Sakura Meets Fes Bagian Hiru Meets",
    episodeNumber: "Episode 168",
    releaseDate: "2026-09-17",
    thumbnail: "/images/thumbnails/sakura-meets/168/sakura-meets-168-1.png",
    previewImage1: "/images/thumbnails/sakura-meets/168/sakura-meets-168-2.png",
    previewImage2: "/images/thumbnails/sakura-meets/168/sakura-meets-168-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260917-sakura-meets-168-sub-indo-5rFi5",
    rawMp4Url: "https://www.akari46.com/",
    description:
      "Episode Sakura Meets minggu ini menyajikan kilas balik dari panggung Sakura Meets Fes bagian Hiru Meets (sesi siang), yang secara resmi menyambut bergabungnya Yamada Momomi dan Sato Neo sebagai member reguler baru. Bersama Kosaka Marino yang hadir sebagai bintang tamu, para member membedah ragam momen tak terlupakan di balik layar—mulai dari reaksi kaget saat penyergapan pengumuman member baru, cerita di balik sketsa komedi kolaborasi bareng Long Coat Daddy dan Kano (A-Masso), kekacauan kostum dalam pertunjukan ritme Kega no Koumyou 2, hingga proses kreatif Masumoto Kira yang menulis naskah drama orisinal bertema gadis penyihir berdasarkan mimpi pribadinya. Nostalgia sesi siang ini ditutup dengan keharuan paduan suara massal yang menyatukan seluruh penonton. Sisanya bisa langsung kalian tonton sendiri!",
  },
  {
    id: "ep-024-channel",
    showId: "sakurazaka-channel",
    showName: "Sakurazaka Channel",
    showSlug: "sakurazaka-channel",
    episodeTitle: "260914 {Sakurazaka Channel} Sub Indo",
    episodeSubtitle:
      "Perjalanan Penuh Kenangan! Liburan santai ke Hiroshima bareng duo wilayah Chugoku! Bener-bener makan terus tanpa henti!",
    episodeNumber: "",
    releaseDate: "2026-09-14",
    thumbnail: "/images/thumbnails/sakura-channel/260914/sakura-channel-1.png",
    previewImage1:
      "/images/thumbnails/sakura-channel/260914/sakura-channel-2.png",
    previewImage2:
      "/images/thumbnails/sakura-channel/260914/sakura-channel-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260914-sakurazaka-channel-perjalanan-penuh-kenangan-liburan-santai-ke-hiroshima-bareng-duo-wilayah-chugoku-bener-bener-makan-terus-tanpa-henti-sub-indo-a2W87",
    rawMp4Url: "https://www.youtube.com/watch?v=HX2ezjOU12A",
    description:
      "Memanfaatkan waktu luang tepat sehari setelah merampungkan tur konser Sakurazaka46 di Hiroshima, Taniguchi Airi dan Mukai Itoha menghabiskan liburan santai untuk bernapak tilas ke Pulau Miyajima. Perjalanan berdua ini diisi dengan beragam aktivitas seru—mulai dari menaiki kapal feri sambil menyapa pemandangan gerbang Ootorii, berinteraksi akrab dengan rusa-rusa liar, menjajal ropeway menuju ketinggian Stasiun Shishiiwa, hingga mencicipi kuliner khas seperti hidangan anagomeshi, tiram goreng, serta pengalaman memanggang sendiri kue momiji manju yang manis. Tidak ketinggalan, keduanya juga mencoba melukis piring keramik bertema kenangan konser serta menutup trip nostalgia mereka di kedai ramen favorit masa sekolah sebelum kembali ke Tokyo. Sisanya bisa langsung kalian tonton sendiri!",
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
    thumbnail: "/images/thumbnails/chokosaku/302/chokosaku-302-1.png",
    previewImage1: "/images/thumbnails/chokosaku/302/chokosaku-302-2.png",
    previewImage2: "/images/thumbnails/chokosaku/302/chokosaku-302-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260913-chokosaku-302-sub-indo-oIONd",
    rawMp4Url:
      "https://www.akari46.com/2026/09/260913-sakurazaka46chokosaku302.html",
    description:
      'Melanjutkan keseruan dari tayangan utama, Chokosaku pekan ini menghadirkan segmen lanjutan bertajuk "Masih Ada Lagi, Ajang Unjuk Pesona yang Bikin Kepincut" yang dipandu oleh Murai Yu dan Sato Neo. Tanpa tekanan sistem tebak kuis, para member saling membongkar perlakuan manis dan perhatian tak terduga yang pernah mereka terima—mulai dari gaya pujian blak-blakan Murayama Miu, kebaikan diam-diam si bungsu Yamada Momom, hingga pesona gentleman Matono Mio dan Murai Yu. Puncaknya, tawa seisi studio pecah saat Airi nekat memuji dan membongkar aksi keren dirinya. Sisanya bisa langsung kalian tonton sendiri!',
  },
  {
    id: "ep-302-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260913 {Soko Magattara, Sakurazaka} #302 Sub Indo",
    episodeSubtitle: "Kuis Episode Keren Sakurazaka46, Jawab Tanpa Ragu!",
    episodeNumber: "Episode 302",
    releaseDate: "2026-09-13",
    thumbnail: "/images/thumbnails/sokomagattara/302/sokomagattara-302-1.png",
    previewImage1:
      "/images/thumbnails/sokomagattara/302/sokomagattara-302-2.png",
    previewImage2:
      "/images/thumbnails/sokomagattara/302/sokomagattara-302-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260913-soko-magattara-sakurazaka-302-sub-indo-ruXbr",
    rawMp4Url:
      "https://www.akari46.com/2026/09/260913-soko-magattara-sakurazaka-302.html",
    description:
      'Sokomagattara, Sakurazaka? minggu ini menghadirkan proyek seru "Kuis Episode Keren Sakurazaka46, Jawab Tanpa Ragu!", sebuah wadah unik bagi para member untuk memamerkan kebaikan dan perlakuan keren yang pernah mereka lakukan kepada rekan satu grup tanpa takut dicap sombong. Suasana studio dipenuhi gelak tawa sekaligus momen menghangatkan hati saat para member berebut mengklaim diri sebagai sosok paling berjasa. Menutup keseruan episode, panggung beralih ke momen yang ditunggu, yaitu pengumuman formasi senbatsu untuk single ke-16 "Ai must be", yang resmi mendapuk Taniguchi Airi sebagai center baru. Sisanya bisa langsung kamu tonton sendiri!',
  },
  {
    id: "ep-167-meets",
    showId: "sakura-meets",
    showName: "Sakura Meets",
    showSlug: "sakura-meets",
    episodeTitle: "260910 Sakura Meets #167 Sub Indo",
    episodeSubtitle:
      "Part Kedua dari Proyek Telephone Bingo, Pertarungan Sengit Tim Masumoto vs Tim Onuma",
    episodeNumber: "Episode 167",
    releaseDate: "2026-09-10",
    thumbnail: "/images/thumbnails/sakura-meets/167/sakura-meets-167-1.png",
    previewImage1: "/images/thumbnails/sakura-meets/167/sakura-meets-167-2.png",
    previewImage2: "/images/thumbnails/sakura-meets/167/sakura-meets-167-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260910-sakura-meets-167-sub-indo-bArUO",
    rawMp4Url: "https://www.akari46.com/",
    description:
      'Melanjutkan persaingan sengit babak sebelumnya bersama duo komedian Saraba Seishun no Hikari, Sakura Meets pekan ini memasuki babak penentuan dalam proyek "Telephone Bingo". Pertarungan antara Tim Masumoto dan Tim Onuma berlangsung semakin kacau sekaligus menggelitik ketika kedua tim beradu taktik menebak kategori sulit seperti sejarah, musik, psikologi, hingga tokoh komedian demi menyusun garis kemenangan. Kejutan demi kejutan terus bermunculan hingga akhir ronde. Sisanya bisa langsung kalian tonton sendiri!',
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
    thumbnail:
      "/images/thumbnails/documentary/5th-annila/documentary-5th-annila-1.png",
    previewImage1:
      "/images/thumbnails/documentary/5th-annila/documentary-5th-annila-2.png",
    previewImage2:
      "/images/thumbnails/documentary/5th-annila/documentary-5th-annila-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/documentary-behind-the-scenes-of-5th-year-anniversary-live-sakurazaka46-sub-indo-EBP1k",
    rawMp4Url:
      "https://drive.google.com/file/d/1-X5R486hG16nwG0KZFRM_r-sa_sSgJhY/view?usp=sharing",
    description:
      "Dokumenter di balik layar ini merekam secara intim perjuangan, keringat, dan luapan emosi para member Sakurazaka46 saat mempersiapkan konser bersejarah 5th YEAR ANNIVERSARY LIVE di panggung megah Stadion Nasional (Kokuritsu). Mulai dari kilas balik perjalanan berliku selama lima tahun melewati masa-masa sulit, proses Takemoto Yui merancang koreografi dance track untuk seluruh formasi grup, beban emosional generasi baru saat dipercaya membawakan lagu-lagu sarat makna, hingga momen sakral penunjukan Yamasaki Ten sebagai wakil kapten, mendampingi kapten saat ini, Matsuda Rina. Menyajikan sudut pandang personal yang jujur di ruang latihan hingga atmosfer magis ketika puluhan ribu Buddies memenuhi tribun, tayangan ini menjadi potret ketulusan serta pembuktian ikatan antargenerasi sebelum mereka melangkah lebih jauh menyongsong tahun keenam perjalanan grup. Sisanya bisa langsung kamu tonton sendiri! ",
  },
  {
    id: "ep-301-choko",
    showId: "chokosaku",
    showName: "Chokosaku",
    showSlug: "chokosaku",
    episodeTitle: "260906 {Chokosaku} #301 Sub Indo",
    episodeSubtitle:
      "Sesi Rapat Penyemangat, Ajang Unjuk Ambisi dan Kekompakan",
    episodeNumber: "Episode 301",
    releaseDate: "2026-09-06",
    thumbnail: "/images/thumbnails/chokosaku/301/chokosaku-301-1.png",
    previewImage1: "/images/thumbnails/chokosaku/301/chokosaku-301-2.png",
    previewImage2: "/images/thumbnails/chokosaku/301/chokosaku-301-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260906-chokosaku-301-sub-indo-jWVCV",
    rawMp4Url:
      "https://www.akari46.com/2026/09/260906-sakurazaka46chokosaku301.html",
    description:
      'Melanjutkan suasana evaluasi dari tayangan utama demi menyambut tahun ke-7 acara, Chokosaku pekan ini menggelar sesi rapat penyemangat yang dipandu oleh Moriya Rena dan Kojima Nagisa. Para member ditantang berteriak sekencang-kencangnya lewat undian untuk menumpahkan unek-unek terpendam—mulai dari ambisi terpendam Matsuda Rina, curhatan polos Inaguma Hina, hingga momen memalukan Matsumoto Wako. Ketegangan studio pun memuncak saat para junior Generasi ke-3 dan ke-4 dihadapkan pada misi kekompakan fisik demi menyelamatkan para senior Generasi ke-2 dari hukuman meneguk "Jus Maut" legendaris yang sempat membuat Taniguchi Airi trauma berat. Sisanya bisa ditonton sendiri!',
  },
  {
    id: "ep-301-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260906 {Soko Magattara, Sakurazaka} #301 Sub Indo",
    episodeSubtitle:
      "Pelunasan Trauma Besar-besaran, Momen Nostalgia Sakurazaka46",
    episodeNumber: "Episode 301",
    releaseDate: "2026-09-06",
    thumbnail: "/images/thumbnails/sokomagattara/301/sokomagattara-301-1.png",
    previewImage1:
      "/images/thumbnails/sokomagattara/301/sokomagattara-301-2.png",
    previewImage2:
      "/images/thumbnails/sokomagattara/301/sokomagattara-301-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/file/uppnixneehfvs1i/260906_Soko_Magattara%252C_Sakurazaka_%2523301_Sub_Indo.ass/file",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260906-soko-magattara-sakurazaka-301-sub-indo-9cuJV",
    rawMp4Url:
      "https://www.akari46.com/2026/09/260906-sakurazaka46sokomagattara301.html",
    description:
      'Menjelang menginjak enam tahun, Sokosaku menggelar proyek spesial "Pelunasan Trauma Besar-besaran" demi memberi kesempatan bagi para member menuntaskan kenangan memalukan mereka di masa lalu. Berbagai insiden legendaris yang sempat meninggalkan luka batin pun diuji ulang di studio—mulai dari Yamasaki Ten yang menantang trauma ogiri, trauma Inaguma tentang melempar aba-aba VTR, hingga Matsuda Rina yang dipaksa menghadapi kembali teror pijat refleksi kaki. Puncaknya, drama kantor yang ikonik kembali berlanjut lewat simulasi telepon kocak Fujiyoshi Karin sebagai sekretaris ceroboh Presdir Sawabe yang harus meladeni komplain pelanggan rewel. Momen-momen nostalgia yang berbalut kepanikan dan gelak tawa ini bisa langsung disaksikan selengkapnya di episode kali ini!',
  },
  {
    id: "ep-166-meets",
    showId: "sakura-meets",
    showName: "Sakura Meets",
    showSlug: "sakura-meets",
    episodeTitle: "260903 {Sakura Meets} #166 Sub Indo",
    episodeSubtitle:
      "Telephone Bingo: Pertarungan Sengit Tim Masumoto vs Tim Onuma",
    episodeNumber: "Episode 166",
    releaseDate: "2026-09-03",
    thumbnail: "/images/thumbnails/sakura-meets/166/sakura-meets-166-1.png",
    previewImage1: "/images/thumbnails/sakura-meets/166/sakura-meets-166-2.png",
    previewImage2: "/images/thumbnails/sakura-meets/166/sakura-meets-166-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260903-sakura-meets-166-sub-indo-MpjmJ",
    rawMp4Url: "https://www.akari46.com/",
    description:
      'Sakura Meets minggu ini menghadirkan kolaborasi seru bersama duo komedian Saraba Seishun no Hikari dan Tamu Spesial, yaitu Sato Neo, lewat proyek baru bertajuk "Telephone Bingo", di mana Tim Masumoto dan Tim Onuma harus menelepon member Sakurazaka46 secara mendadak untuk memancing mereka mengucapkan kata kunci rahasia dalam batas waktu 30 detik. Member yang akan ditelpon diantaranya Nakagawa Chihiro, Endo Riko, Odakura Reina, Matsumoto Wako dan Katsumata Haru . Di sela-sela sengitnya adu strategi membuka petak bingo, episode ini juga membagikan deretan pengumuman penting menjelang gelaran Sakura Meets Fest, termasuk bocoran pengumuman member reguler baru. Sisanya bisa ditonton sendiri!  ',
  },
  {
    id: "ep-300-choko",
    showId: "chokosaku",
    showName: "Chokosaku",
    showSlug: "chokosaku",
    episodeTitle: "260830 {Chokosaku} #300 Sub Indo",
    episodeSubtitle:
      "Sasana Tinju Unek-Unek Odakura, Ajang Blak-Blakan Sakurazaka46",
    episodeNumber: "Episode 300",
    releaseDate: "2026-08-30",
    thumbnail: "/images/thumbnails/chokosaku/300/chokosaku-300-1.png",
    previewImage1: "/images/thumbnails/chokosaku/300/chokosaku-300-2.png",
    previewImage2: "/images/thumbnails/chokosaku/300/chokosaku-300-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260830-chokosaku-300-sub-indo-kK7BT",
    rawMp4Url:
      "https://www.akari46.com/2026/09/260830-sakurazaka46chokosaku-300.html",
    description:
      'Melanjutkan evaluasi blak-blakan dari acara utama, Chokosaku pekan ini menghadirkan proyek "Sasana Tinju Unek-Unek Odakura" yang dipandu oleh Morita Hikaru bersama sang instruktur, Odakura Reina. Di atas ring tinju mini, para member diberi wadah untuk meluapkan unek-unek yang selama ini terpendam secara langsung lewat pukulan bertenaga. Dinamika saling meluruskan isi hati yang dibalut aksi komedi segar dan pujian spontan antar-member sukses menciptakan atmosfer studio yang hangat sekaligus penuh tawa. Sisanya bisa ditonton sendiri! ',
  },
  {
    id: "ep-300-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260830 {Soko Magattara, Sakurazaka} #300 Sub Indo",
    episodeSubtitle: "Sesi Evaluasi Blak-Blakan Bersama Odakura Reina",
    episodeNumber: "Episode 300",
    releaseDate: "2026-08-30",
    thumbnail: "/images/thumbnails/sokomagattara/300/sokomagattara-300-1.png",
    previewImage1:
      "/images/thumbnails/sokomagattara/300/sokomagattara-300-2.png",
    previewImage2:
      "/images/thumbnails/sokomagattara/300/sokomagattara-300-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/file/yf5a2gkt512aj4o/260830_Soko_Magattara%252C_Sakurazaka_%2523300_Sub_Indo.ass/file",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260830-soko-magattara-sakurazaka-300-sub-indo-nnn3T",
    rawMp4Url:
      "https://www.akari46.com/2026/08/260830-soko-magattara-sakurazaka-300.html",
    description:
      'Merayakan penayangan episode ke-300, Sokomagattara Sakurazaka menghadirkan segmen evaluasi unik bersama Odakura Reina yang bertransformasi menjadi "Odakura-sensei". Mengusung persona yang blak-blakan, Sensei Odakura membedah berbagai sisi tersembunyi para member. Dipenuhi kritik tajam yang justru mengundang tawa, episode ini menjadi ajang saling membongkar rahasia sekaligus sesi terapi penuh komedi bagi para member Sakurazaka46. Sisanya bisa ditonton sendiri!',
  },
  {
    id: "ep-023-channel",
    showId: "sakurazaka-channel",
    showName: "Sakurazaka Channel",
    showSlug: "sakurazaka-channel",
    episodeTitle: "260825 {Sakurazaka Channel} Sub Indo",
    episodeSubtitle:
      "Planning oleh Murayama! Liburan Pribadi Myuzu ke Kanazawa! Benar-benar Perjalanan Berdua!",
    episodeNumber: "",
    releaseDate: "2026-08-25",
    thumbnail: "/images/thumbnails/sakura-channel/260825/sakura-channel-1.jpg",
    previewImage1:
      "/images/thumbnails/sakura-channel/260825/sakura-channel-2.png",
    previewImage2:
      "/images/thumbnails/sakura-channel/260825/sakura-channel-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260825-sakurazaka-channel-planning-oleh-murayama-liburan-pribadi-myuzu-ke-kanazawa-benar-benar-perjalanan-berdua-sub-indo-YYRXi",
    rawMp4Url: "https://www.youtube.com/watch?v=JCzJf-LOP90",
    description:
      "Mengikuti rencana perjalanan santai yang disusun oleh Murayama Miu, ia dan Nakashima Yuzuki menghabiskan waktu liburan berdua ke Kanazawa tanpa didampingi staf mau pun manajer. Mengusung suasana santai dan apa adanya, mereka menikmati berbagai sudut kota, mulai dari menyusuri kawasan bersejarah Higashi Chaya, mencicipi kuliner lokal seperti daging sapi Noto, es serut, dan jajanan di Pasar Omicho, hingga merasakan pengalaman menaiki becak tradisional jinrikisha. Di sela-sela perjalanan, obrolan akrab yang penuh canda tawa mengalir alami, memperlihatkan kekompakan hubungan mereka serta harapan untuk bisa mewujudkan liburan santai berdua berikutnya.",
  },
  {
    id: "ep-299-choko",
    showId: "chokosaku",
    showName: "Chokosaku",
    showSlug: "chokosaku",
    episodeTitle: "260823 {Chokosaku} #299 Sub Indo",
    episodeSubtitle:
      "Acara Kumpul Makanan Musim Panas Generasi 4, Obrolan Akrab Antar-Generasi",
    episodeNumber: "Episode 299",
    releaseDate: "2026-08-23",
    thumbnail: "/images/thumbnails/chokosaku/299/chokosaku-299-1.png",
    previewImage1: "/images/thumbnails/chokosaku/299/chokosaku-299-2.png",
    previewImage2: "/images/thumbnails/chokosaku/299/chokosaku-299-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260823-chokosaku-299-sub-indo-10oe7",
    rawMp4Url:
      "https://www.akari46.com/2026/08/260823-sakurazaka46chokosaku299.html",
    description:
      'Segmen Chokosaku minggu ini menghadirkan suasana santai dalam "Acara Kumpul Makanan Musim Panas Generasi 4", di mana Matsumoto Wako, Katsumata Haru, dan Sato Neo untuk pertama kalinya dipercaya memandu acara. Ketiganya berkumpul bersama para senior, Matsuda Rina dan Nakashima Yuzuki, untuk menikmati menu musim panas khas rumahan yang belum sempat dicicipi di tayangan utama. Sembari menyantap hidangan lezat, sesi makan siang ini berubah menjadi wadah obrolan akrab seputar kesan pertama antar-generasi, fakta unik di balik layar, hingga curhatan polos para junior yang malu-malu mengajak seniornya pergi makan bersama di luar pekerjaan. Sisanya bisa ditonton sendiri!',
  },
  {
    id: "ep-299-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260823 {Soko Magattara, Sakurazaka} #299 Sub Indo",
    episodeSubtitle:
      "Part 2 dari Ajang Kuliner Musim Panas, Salad & Camilan Manis",
    episodeNumber: "Episode 299",
    releaseDate: "2026-08-23",
    thumbnail: "/images/thumbnails/sokomagattara/299/sokomagattara-299-1.png",
    previewImage1:
      "/images/thumbnails/sokomagattara/299/sokomagattara-299-2.png",
    previewImage2:
      "/images/thumbnails/sokomagattara/299/sokomagattara-299-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/file/w5593nuktdl27et/260823_Soko_Magattara%252C_Sakurazaka_%2523299_Sub_Indo.ass/file",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260823-soko-magattara-sakurazaka-299-sub-indo-FONl3",
    rawMp4Url:
      "https://www.akari46.com/2026/08/260823-soko-magattara-sakurazaka-299.html",
    description:
      "Melanjutkan kemeriahan ajang kuliner musim panas, Sokosaku pekan ini masuk ke bagian kedua yang mempertandingkan kategori salad dan camilan manis andalan keluarga para member. Persaingan berlangsung seru sekaligus menggiurkan saat para peserta memamerkan resep rumahan yang unik—mulai dari kreasi salad praktis penuh tekstur dengan bumbu khas daerah hingga sajian penutup segar seperti kombinasi unik es krim senbei, adu racikan smoothie, dan atraksi meletupnya fruit punch yang langsung bertransformasi menjadi pesta perayaan ulang tahun Fujiyoshi Karin di studio. Sisanya bisa ditonton sendiri! ",
  },
  {
    id: "ep-165-meets",
    showId: "sakura-meets",
    showName: "Sakura Meets",
    showSlug: "sakura-meets",
    episodeTitle: "260820 {Sakura Meets} #165 Sub Indo",
    episodeSubtitle:
      "5 Ronde Adu Ketangkasan Yamada Momomi, Pertarungan Sengit Antar-Generasi",
    episodeNumber: "Episode 165",
    releaseDate: "2026-08-20",
    thumbnail: "/images/thumbnails/sakura-meets/165/sakura-meets-165-1.png",
    previewImage1: "/images/thumbnails/sakura-meets/165/sakura-meets-165-2.png",
    previewImage2: "/images/thumbnails/sakura-meets/165/sakura-meets-165-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260820-sakura-meets-165-sub-indo-Oq3gH",
    rawMp4Url: "https://www.akari46.com/2026/08/260820-sakura-meets-165.html",
    description:
      'Dalam episode spesial syuting terbuka ini, Sakura Meets menghadirkan proyek seru "5 Ronde Adu Ketangkasan Yamada Momomi" yang dipandu oleh duo komedian Sayaka. Berawal dari rasa penasaran para member terhadap ketangguhan fisik sang junior Generasi ke-4, tim member Meets pun beradu sengit melawan Yamada Momomi dalam serangkaian perlombaan unik—mulai dari lompat kuda tanpa bobot, rebutan buntut, duel absurd sumo rambut, tebak gestur musim panas, hingga adu cepat menembak target dengan pistol air. Atmosfer panggung luar ruangan yang riuh di tengah cuaca terik musim panas menambah keseruan persaingan antar-generasi yang dipenuhi gelak tawa dan aksi spontan tak terduga. Sisanya bisa ditonton sendiri!',
  },
  {
    id: "ep-022-channel",
    showId: "sakurazaka-channel",
    showName: "Sakurazaka Channel",
    showSlug: "sakurazaka-channel",
    episodeTitle: "260818 {Sakurazaka Channel} Sub Indo",
    episodeSubtitle:
      "Perjalanan Sakura! Ayo Jalan-jalan dengan Kereta Api Bersama Odakura Reina dan Yamakawa Ui, Edisi Nagano!",
    episodeNumber: "",
    releaseDate: "2026-08-18",
    thumbnail: "/images/thumbnails/sakura-channel/260818/sakura-channel-1.jpg",
    previewImage1:
      "/images/thumbnails/sakura-channel/260818/sakura-channel-2.png",
    previewImage2:
      "/images/thumbnails/sakura-channel/260818/sakura-channel-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260818-sakurazaka-channel-perjalanan-sakura-ayo-jalan-jalan-dengan-kereta-api-bersama-odakura-reina-dan-yamakawa-ui-edisi-nagano-sub-indo-j9cVd",
    rawMp4Url: "https://youtube.com/watch?v=x4ve5VzzEwI",
    description:
      'Edisi Sakurazaka Channel kali ini dalam proyek kolaborasi "Sakurazaka46 to Tetsudou de Tabi Shiyou" bersama JR East, Odakura Reina dan Yamakawa Ui mengajak penonton mengikuti perjalanan seru sekaligus menenangkan saat keduanya pertama kali menjelajahi Prefektur Nagano. Mulai dari napak tilas ke Kuil Zenkoji, mencicipi beragam kuliner khas daerah, membuat gelang kerajinan tangan, hingga menikmati suasana asri Nozawa Onsen dan kebun buah lokal, perjalanan ini merekam momen liburan musim panas yang hangat. Di balik keindahan lanskap yang dikunjungi, trip ini menjadi ruang nyaman bagi keduanya untuk saling mengenal lebih dekat lewat interaksi santai, obrolan personal, dan dinamika kebersamaan mereka yang manis.',
  },
  {
    id: "ep-298-choko",
    showId: "chokosaku",
    showName: "Chokosaku",
    showSlug: "chokosaku",
    episodeTitle: "260816 {Chokosaku} #298 Sub Indo",
    episodeSubtitle:
      "Pertarungan Kuliner Musim Panas Terkuat, Adu Daya Tarik Menu Andalan",
    episodeNumber: "Episode 298",
    releaseDate: "2026-08-16",
    thumbnail: "/images/thumbnails/chokosaku/298/chokosaku-1.png",
    previewImage1: "/images/thumbnails/chokosaku/298/chokosaku-2.png",
    previewImage2: "/images/thumbnails/chokosaku/298/chokosaku-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260816-chokosaku-298-sub-indo-rBQ0q",
    rawMp4Url:
      "https://www.akari46.com/2026/08/260816-sakurazaka46chokosaku298.html",
    description:
      "Dipandu oleh Kosaka Marino dan Masumoto Kira, Chokosaku episode kali ini menghadirkan pertarungan kuliner bertema sajian musim panas terkuat. Tim Merah (Tamura & Taniguchi) dan Tim Biru (Asai & Nakagawa) saling beradu daya tarik menu andalan masing-masing—mulai dari adu cepat presentasi 90 detik hingga unjuk kreativitas lewat sesi presentasi orisinal yang tak biasa,. Dengan pertaruhan hanya tim pemenang dan para pemilihnya yang berhak menyantap hidangan tersebut, para member penilai pun dihadapkan pada pilihan sulit untuk menentukan set hidangan musim panas mana yang paling memikat lidah mereka.",
  },
  {
    id: "ep-298-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260816 {Soko Magattara, Sakurazaka} #298 Sub Indo",
    episodeSubtitle:
      "Grand Prix Makanan Musim Panas Keluarga Sakurazaka46, Adu Resep Andalan",
    episodeNumber: "Episode 298",
    releaseDate: "2026-08-16",
    thumbnail: "/images/thumbnails/sokomagattara/298/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/298/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/298/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/file/7befcyx34z541mc/260816_Soko_Magattara%252C_Sakurazaka_%2523298_Sub_Indo.ass/file",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260816-soko-magattara-sakurazaka-298-sub-indo-5yWRN",
    rawMp4Url:
      "https://www.akari46.com/2026/08/260816-soko-magattara-sakurazaka-298.html",
    description:
      "Menyambut hawa panas yang menyengat, Sokosaku pekan ini menggelar ajang kuliner bergengsi bertajuk Grand Prix Makanan Musim Panas Keluarga Sakurazaka46. Mengadu resep andalan keluarga dari para member demi memperebutkan hadiah impian rumah masing-masing, persaingan babak pertama dibuka sangat meriah lewat pertarungan sengit di kategori hidangan penyegar somen dan lauk pauk pembakar nafsu makan. Mulai dari kreasi somen bergaya unik yang memicu perdebatan lidah, olahan segar bernuansa modern, hingga resep lauk praktis ala rumahan yang sukses membuat para MC dan member ketagihan mencicipinya. Episode ini menyajikan keseruan penuh tawa, aneka tips modifikasi rasa yang tak terduga, serta momen santap malam bersama yang dijamin ampuh membuat perut penonton ikut keroncongan!",
  },
  {
    id: "ep-164-meets",
    showId: "sakura-meets",
    showName: "Sakura Meets",
    showSlug: "sakura-meets",
    episodeTitle: "260813 {Sakura Meets} #164 Sub Indo",
    episodeSubtitle:
      "Obrolan Sepulang Sekolah: Keterusterangan, Curhat, dan Konsultasi Karier",
    episodeNumber: "Episode 164",
    releaseDate: "2026-08-13",
    thumbnail: "/images/thumbnails/sakura-meets/164/sakura-meets-1.png",
    previewImage1: "/images/thumbnails/sakura-meets/164/sakura-meets-2.png",
    previewImage2: "/images/thumbnails/sakura-meets/164/sakura-meets-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260813-sakura-meets-164-sub-indo-YYL13",
    rawMp4Url: "https://www.akari46.com/",
    description:
      'Program Sakura Meets minggu ini menyajikan segmen "Obrolan Sepulang Sekolah" yang penuh keterusterangan bersama komedian Kano (A Masso) dan Fukuda (Sanji no Heroine). Para member membagikan ragam pengalaman serta kecanduan mereka selama tampil di acara varietas, mulai dari perasaan sungkan saat menyapa komedian lain di luar panggung, cara membedakan karakter diri saat konser dan di acara humor, hingga strategi membangun kepercayaan diri lewat istilah bicara tenaga super. Suasana berubah hangat sekaligus emosional saat Masumoto Kira yang mengumumkan kelulusannya berkonsultasi secara mendalam mengenai opsi karier di masa depan, sebelum akhirnya ditutup dengan rapat pematangan ide untuk ajang Sakura Meets Fest. Sisanya bisa ditonton sendiri.',
  },
  {
    id: "ep-021-channel",
    showId: "sakurazaka-channel",
    showName: "Sakurazaka Channel",
    showSlug: "sakurazaka-channel",
    episodeTitle: "260811 {Sakurazaka Channel} Sub Indo",
    episodeSubtitle:
      "Perjuangan Keras! Keinginan 2 Orang Secara Kebetulan Sama! Pengalaman Menjadi Zookeeper Moritamura!",
    episodeNumber: "",
    releaseDate: "2026-08-11",
    thumbnail: "/images/thumbnails/sakura-channel/260811/sakura-channel-1.jpg",
    previewImage1:
      "/images/thumbnails/sakura-channel/260811/sakura-channel-2.png",
    previewImage2:
      "/images/thumbnails/sakura-channel/260811/sakura-channel-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260811-sakurazaka-channel-perjuangan-keras-keinginan-2-orang-secara-kebetulan-sama-pengalaman-menjadi-zookeeper-moritamura-sub-indo-h7q1m",
    rawMp4Url: "https://www.youtube.com/watch?v=1SqUIf1jlYM",
    description:
      "Edisi Sakurazaka Channel kali ini menampilkan petualangan seru Tamura Hono dan Morita Hikaru yang pergi ke Nagasaki Bio Park untuk mewujudkan impian mereka menjajal pengalaman menjadi penjaga hewan seharian. Berbalut seragam khusus, keduanya berinteraksi jarak dekat dengan beragam koleksi satwa—mulai dari melukis papan informasi untuk kura-kura dan bebek, berani memegang ular hingga ulat makanan, sampai memberi makan lemur, berang-berang, dan kudanil secara langsung. Di sela-sela aktivitas, kehangatan hubungan mereka juga terlihat saat menikmati makan siang bersama sambil mengobrolkan kebiasaan unik satu sama lain. Sisanya bisa ditonton sendiri.",
  },
];

export const latestEpisodes = episodes.slice(0, 3);
export const feedEpisodes = episodes;
