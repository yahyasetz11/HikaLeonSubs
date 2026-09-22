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
    thumbnail: "/images/thumbnails/chokosaku-show.png",
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
    thumbnail: "/images/thumbnails/documentary-show.png",
  },
];

export const episodes: Episode[] = [
  {
    id: "ep-303-choko",
    showId: "chokosaku",
    showName: "Chokosaku",
    showSlug: "chokosaku",
    episodeTitle: "260920 {Chokosaku} #303 Sub Indo",
    episodeSubtitle: "Babak Tambahan Tes Kemampuan Komentar!",
    episodeNumber: "Episode 303",
    releaseDate: "2026-09-21",
    thumbnail: "/images/thumbnails/chokosaku/303/chokosaku-1.png",
    previewImage1: "/images/thumbnails/chokosaku/303/chokosaku-2.png",
    previewImage2: "/images/thumbnails/chokosaku/303/chokosaku-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260920-chokosaku-303-sub-indo-2ONSk",
    rawMp4Url:
      "https://www.akari46.com/2026/09/260920-sakurazaka46chokosaku303.html",
    description:
      'Melanjutkan keseruan dari tayangan utama, Chokosaku pekan ini menghadirkan segmen lanjutan bertajuk "Babak Tambahan Tes Kemampuan Komentar!" yang dipandu oleh Endo Riko dan Yamashita Shizuki, dengan Matono Mio dan Konomi-chan didapuk sebagai juri penilai skor. Segmen ini terbagi menjadi beberapa babak, mulai dari memberi komentar spontan atas hasil survei ranking fiktif seputar sesama member, hingga tantangan membuat video promosi singkat yang bakal benar-benar diunggah ke media sosial resmi grup. Setiap penampilan dinilai langsung oleh kedua juri lengkap dengan alasan di baliknya, bikin suasana studio makin tegang sekaligus seru. Sisanya bisa langsung kalian tonton sendiri di rilisannya ya!',
  },
  {
    id: "ep-303-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260920 {Soko Magattara, Sakurazaka} #303 Sub Indo",
    episodeSubtitle: "Uji Kemampuan Berkomentar Sakurazaka46!",
    episodeNumber: "Episode 303",
    releaseDate: "2026-09-21",
    thumbnail: "/images/thumbnails/sokomagattara/303/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/303/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/303/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.akari46.com/2026/09/260920-soko-magattara-sakurazaka-303.html",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260920-soko-magattara-sakurazaka-303-sub-indo-jTiOo",
    rawMp4Url:
      "https://www.akari46.com/2026/09/260920-soko-magattara-sakurazaka-303.html",
    description:
      'Sokosaku minggu ini menghadirkan segmen "Uji Kemampuan Berkomentar!", tantangan bagi para member untuk membuktikan kemampuan mereka berkomentar dalam berbagai situasi. Segmen ini terbagi ke dalam beberapa babak, mulai dari menanggapi berita-berita ringan tanpa mengulang komentar rekan yang tampil sebelumnya, hingga sesi debat dadakan di mana posisi yang harus dibela baru diketahui tepat sebelum perdebatan dimulai. Babak pamungkas menguji member lewat peran sebagai juri yang menilai sebuah karya seni. Sisanya bisa langsung kalian tonton sendiri di rilisannya ya!',
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
    mediafireUrl:
      "https://www.mediafire.com/file/cfyqzouj3sf92sh/260913_Soko_Magattara%252C_Sakurazaka_%2523302_Sub_Indo.ass/file",
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
  {
    id: "ep-297-choko",
    showId: "chokosaku",
    showName: "Chokosaku",
    showSlug: "chokosaku",
    episodeTitle: "260809 {Chokosaku} #297 Sub Indo",
    episodeSubtitle:
      "Kuis Murayama Miu: Menebak Isi Percakapan dan Perilaku Unik Miu di Saitama",
    episodeNumber: "Episode 297",
    releaseDate: "2026-08-09",
    thumbnail: "/images/thumbnails/chokosaku/297/chokosaku-1.png",
    previewImage1: "/images/thumbnails/chokosaku/297/chokosaku-2.png",
    previewImage2: "/images/thumbnails/chokosaku/297/chokosaku-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260809-chokosaku-297-sub-indo-WcRTD",
    rawMp4Url:
      "https://www.akari46.com/2026/08/260809-sakurazaka46chokosaku297.html",
    description:
      'Segmen Chokotto Sokosaku minggu ini menghadirkan "Kuis Murayama Miu" yang dipandu oleh Odakura Reina dan Murayama Miu, menampilkan berbagai rekaman menarik yang belum sempat ditayangkan pada episode utama saat Miu melakukan liputan di Saitama. Para member memperebutkan poin kuis dengan menebak isi percakapan hingga perilaku unik Miu selama jalan-jalan di toko tontonan lokal, tempat makan, hingga menjajal wahana game AR bersama staf. Persaingan antar tim berlangsung cair dan penuh gelak tawa berkat kelakar ceroboh para member serta pemberian "Poin Odakura" untuk jawaban-jawaban paling menghibur. Sisanya bisa ditonton sendiri.',
  },
  {
    id: "ep-297-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260809 {Soko Magattara, Sakurazaka} #297 Sub Indo",
    episodeSubtitle:
      "Proyek Khusus Liputan Luar Studio: Saitama Gokil Bersama Murayama Miu",
    episodeNumber: "Episode 297",
    releaseDate: "2026-08-09",
    thumbnail: "/images/thumbnails/sokomagattara/297/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/297/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/297/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/file/vcn0m8obz7wq8ge/260809_Soko_Magattara%252C_Sakurazaka_%2523297_Sub_Indo.ass/file",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260809-soko-magattara-sakurazaka-297-sub-indo-u75iv",
    rawMp4Url:
      "https://www.akari46.com/2026/08/260809-soko-magattara-sakurazaka-297.html",
    description:
      'Episode minggu ini dari Sokomagattara Sakurazaka menghadirkan proyek khusus liputan luar studio bertajuk "Saitama Gokil" yang dibintangi oleh Murayama Miu. Berawal dari pernyataannya yang meragukan keberadaan Prefektur Saitama, Murayama dikirim langsung untuk mengeksplorasi berbagai destinasi terkenal seperti kota bersejarah Kawagoe, taman edukasi kecap asin Kinbue, hingga kedai kuliner lokal Yamada Udon. Selagi VTR liputannya diputar, para member di studio beradu cepat menjawab kuis seputar kejadian unik selama syuting demi memenangkan hadiah oleh-oleh khas Saitama. Kepolosan Murayama saat memandu acara serta celotehan spontannya sukses memicu berbagai momen kocak yang menghibur di sepanjang episode. Sisanya bisa ditonton sendiri.',
  },
  {
    id: "ep-163-meets",
    showId: "sakura-meets",
    showName: "Sakura Meets",
    showSlug: "sakura-meets",
    episodeTitle: "260806 {Sakura Meets} #163 Sub Indo",
    episodeSubtitle:
      "Babak Terakhir Kuis Only One Meets, Aksi Panggung Komedi Corochiki",
    episodeNumber: "Episode 163",
    releaseDate: "2026-08-06",
    thumbnail: "/images/thumbnails/sakura-meets/163/sakura-meets-1.png",
    previewImage1: "/images/thumbnails/sakura-meets/163/sakura-meets-2.png",
    previewImage2: "/images/thumbnails/sakura-meets/163/sakura-meets-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260806-sakura-meets-163-sub-indo-IlHa3",
    rawMp4Url: "https://www.akari46.com/",
    description:
      "Segmen Sakura Meets minggu ini menyajikan babak terakhir kuis Only One Meets dan ditutup dengan aksi panggung komedi bersama duo komedian Corocoro Chikichiki Peppers (Corochiki). Di segmen pertama, persaingan kuis berlanjut seru lewat tebak suara tiruan Masumoto Kira, alasan ucapan favorit Yamashita Shizuki, hingga dialog khas Nakashima Yuzuki saat cemas. Lalu berpindah ke segmen kedua saat para member menantang skit perkelahian berlatar sekolah, di mana tiap member tampil totalitas membawa karakter, julukan, serta gaya bertarung unik mereka masing-masing yang memicu aksi kocak tak terduga. Sisanya bisa ditonton sendiri.",
  },
  {
    id: "ep-020-channel",
    showId: "sakurazaka-channel",
    showName: "Sakurazaka Channel",
    showSlug: "sakurazaka-channel",
    episodeTitle: "260804 {Sakurazaka Channel} Sub Indo",
    episodeSubtitle:
      "Anakku! Belanja, Makan, & Rekaman Radio Bareng Kocchan Tersayang ♡ Kosaka Marino & Korilakkuma!",
    episodeNumber: "#",
    releaseDate: "2026-08-04",
    thumbnail: "/images/thumbnails/sakura-channel/260804/sakura-channel-1.jpg",
    previewImage1:
      "/images/thumbnails/sakura-channel/260804/sakura-channel-2.png",
    previewImage2:
      "/images/thumbnails/sakura-channel/260804/sakura-channel-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260804-sakurazaka-channel-anakku-belanja-makan-rekaman-radio-bareng-kocchan-tersayang-kosaka-marino-korilakkuma-sub-indo-2wFLY",
    rawMp4Url: "https://www.youtube.com/watch?v=wPlHICzC8S4",
    description:
      "Dalam edisi Sakurazaka Channel kali ini, Kosaka Marino menikmati hari libur spesial dengan mengajak boneka beruang kesayangannya, Kocchan, berbelanja di Harajuku. Perjalanan santai tersebut diisi dengan berburu squishy menggemaskan di toko Mosh Squishy, mengunjungi Rilakkuma Store untuk mencari boneka pendamping Kocchan, hingga menyempatkan diri melakukan rekaman radio bersama rekan sesama grup. Momen kebersamaan berlanjut di rumah saat Kosaka memasak pancake untuk makan malam dan membongkar seluruh barang belanjaannya, memperlihatkan sisi keseharian yang hangat dan jarang terlihat dari sang idol. Sisanya bisa ditonton sendiri.",
  },
  {
    id: "ep-296-choko",
    showId: "chokosaku",
    showName: "Chokosaku",
    showSlug: "chokosaku",
    episodeTitle: "260802 {Chokosaku} #296 Sub Indo",
    episodeSubtitle:
      "Babak Tambahan Pasangan Nomor Satu: Uji Kekompakan dan Ikatan Batin Antar-Generasi",
    episodeNumber: "Episode 296",
    releaseDate: "2026-08-02",
    thumbnail: "/images/thumbnails/chokosaku/296/chokosaku-1.png",
    previewImage1: "/images/thumbnails/chokosaku/296/chokosaku-2.png",
    previewImage2: "/images/thumbnails/chokosaku/296/chokosaku-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260802-chokosaku-296-hardsub-indo-4Bfd7",
    rawMp4Url:
      "https://www.akari46.com/2026/08/260802-sakurazaka46chokosaku296.html",
    description:
      'Eps minggu ini dari Chokosaku menghadirkan proyek lanjutan bertajuk "Babak Tambahan Pasangan Nomor Satu" yang bertujuan menguji kekompakan dan ikatan batin antar pasangan Generasi ke-2 dan ke-3. Dipandu oleh Mukai Itoha dan Endo Riko, tiga pasangan yang berlaga—Morita Hikaru & Taniguchi Airi, Endo Hikari & Matono Mio, serta Ozono Rei & Murayama Miu—saling beradu poin lewat serangkaian tantangan kooperatif, mulai dari game keselarasan jawaban "Satu Hati Satu Jiwa", tebak pose yang sedang tren, hingga merancang menara gelas tinggi berbatas waktu. Sisanya bisa ditonton sendiri.',
  },
  {
    id: "ep-296-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260802 {Soko Magattara, Sakurazaka} #296 Sub Indo",
    episodeSubtitle:
      "Part 2 Pertandingan Penentuan Pasangan Nomor Satu: Babak Penentuan",
    episodeNumber: "Episode 296",
    releaseDate: "2026-08-02",
    thumbnail: "/images/thumbnails/sokomagattara/296/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/296/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/296/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/file/tqchi8je8mscil0/260802_Soko_Magattara%252C_Sakurazaka_%2523296_Sub_Indo.ass/file",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260802-soko-magattara-sakurazaka-296-sub-indo-utiqf",
    rawMp4Url:
      "https://www.akari46.com/2026/08/260802-soko-magattara-sakurazaka-296.html",
    description:
      'Persaingan sengit antara Generasi ke-2 dan ke-3 Sakurazaka46 berlanjut ke babak penentuan dalam "Pertandingan Penentuan Pasangan Nomor Satu". Episode kali ini diwarnai oleh berbagai tantangan kocak yang menguji kekompakan dan nyali antar pasangan, mulai dari permainan Kompak Tatap Kamera, kuis estafet cangkir kertas balon, tebak kata pakai headphone, hingga kuis tsukkomi peniruan gaya member. Suasana semakin tegang sekaligus menggelikan di babak final saat para pasangan yang lolos harus menghadapi tantangan ekstrem Menjatuhkan Baskom Penuh Tekanan untuk menentukan siapa yang berhak menyabet gelar pasangan nomor satu. Sisanya bisa ditonton sendiri.',
  },
  {
    id: "ep-162-meets",
    showId: "sakura-meets",
    showName: "Sakura Meets",
    showSlug: "sakura-meets",
    episodeTitle: "260730 {Sakura Meets} #162 Sub Indo",
    episodeSubtitle: "Part 2: Kuis Only One Meets, Adu Strategi Antar-Generasi",
    episodeNumber: "Episode 162",
    releaseDate: "2026-07-30",
    thumbnail: "/images/thumbnails/sakura-meets/162/sakura-meets-1.png",
    previewImage1: "/images/thumbnails/sakura-meets/162/sakura-meets-2.png",
    previewImage2: "/images/thumbnails/sakura-meets/162/sakura-meets-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260730-sakura-meets-162-sub-indo-0pNsc",
    rawMp4Url: "https://www.akari46.com/",
    description:
      'Melanjutkan keseruan babak sebelumnya dalam proyek "Only One Meets", episode Sakura Meets kali ini, para member Sakurazaka46 bersama duo komedian Cotton kembali beradu strategi dalam membuat kuis pribadi demi mencetak poin tunggal. Di episode ini, deretan pertanyaan menggelitik bermunculan—mulai dari Nakashima Yuzuki yang mengulas momen kecerobohan Taniguchi Airi hingga pengakuan unik Yamashita Shizuki mengenai alasan ia meminta oleh-oleh sandal rumah beberapa tahun lalu. Serta momen tawa pun pecah saat giliran Masumoto Kira dan Onuma Akiho saling membongkar fakta konyol seputar preferensi tubuh, lokasi tempat belanja langganan, hingga syarat unik agar bisa bertamu ke rumah. Sisanya bisa ditonton sendiri.',
  },
  {
    id: "ep-295-choko",
    showId: "chokosaku",
    showName: "Chokosaku",
    showSlug: "chokosaku",
    episodeTitle: "260726 {Chokosaku} #295 Sub Indo",
    episodeSubtitle: "Kejuaraan Kombi Boneka Tangan Sakurazaka46",
    episodeNumber: "Episode 295",
    releaseDate: "2026-07-26",
    thumbnail: "/images/thumbnails/chokosaku/295/chokosaku-1.png",
    previewImage1: "/images/thumbnails/chokosaku/295/chokosaku-2.png",
    previewImage2: "/images/thumbnails/chokosaku/295/chokosaku-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260726-chokosaku-295-sub-indo-VJ4tO",
    rawMp4Url:
      "https://www.akari46.com/2026/07/260726-sakurazaka46chokosaku295.html",
    description:
      'Chokosaku minggu ini menggelar "Kejuaraan Kombi Boneka Tangan", sebuah proyek unik yang menguji kekompakan para member dalam menyelesaikan tantangan kuis sambil menjiwai karakter boneka tangan masing-masing. Dipandu oleh Matsuda Rina dan Nakashima Yuzuki, tiga pasangan member—Fujiyoshi Karin & Yamazaki Ten, Kojima Nagisa & Yamashita Shizuki, serta Kosaka Marino & Odakura Reina—saling beradu dalam permainan tebak member hingga kuis  bertema kebiasaan dan fakta unik rekan grup mereka. Pembatasan ekspresi wajah yang digantikan oleh gestur lucu boneka justru memancing interaksi kocak dan celetukan spontan yang membuat suasana studio menjadi sangat ramai. Sisanya bisa ditonton sendiri.',
  },
  {
    id: "ep-295-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260726 {Soko Magattara, Sakurazaka} #295 Sub Indo",
    episodeSubtitle:
      "Pertandingan Penentuan Pasangan Nomor Satu: Uji Kekompakan dan Nyali Antar-Generasi",
    episodeNumber: "Episode 295",
    releaseDate: "2026-07-26",
    thumbnail: "/images/thumbnails/sokomagattara/295/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/295/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/295/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/file/4clsej0sfn1e25f/260726_Soko_Magattara%252C_Sakurazaka_%2523295_Sub_Indo.ass/file",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260726-soko-magattara-sakurazaka-295-sub-indo-hyZjs",
    rawMp4Url:
      "https://www.akari46.com/2026/07/260726-soko-magattara-sakurazaka-295.html",
    description:
      'Melanjutkan absennya Generasi 4 yang sedang menggelar konser, Sokosaku minggu ini menggelar "Pertandingan Penentuan Pasangan Nomor Satu Gen 2 & Gen 3" lewat pembagian 11 pasangan lintas generasi. Suasana studio langsung memanas saat para member saling beradu kekompakan dalam babak penyisihan lewat berbagai permainan adu ketangkasan dan pengetahuan, mulai dari Kuis Rebutan Hak Jawab yang mewajibkan tantangan menyusun menara kartu hingga push-up, permainan Shiritori kata panjang, Kuis Strike Out lempar bola, hingga ujian menyamakan onomatope dari makanan yang dicicipi dalam kondisi mata tertutup. Sisanya bisa ditonton sendiri.',
  },
  {
    id: "ep-161-meets",
    showId: "sakura-meets",
    showName: "Sakura Meets",
    showSlug: "sakura-meets",
    episodeTitle: "260723 {Sakura Meets} #161 Sub Indo",
    episodeSubtitle: "Kuis Only One Meets, Adu Strategi Antar-Generasi",
    episodeNumber: "Episode 161",
    releaseDate: "2026-07-23",
    thumbnail: "/images/thumbnails/sakura-meets/161/sakura-meets-1.png",
    previewImage1: "/images/thumbnails/sakura-meets/161/sakura-meets-2.png",
    previewImage2: "/images/thumbnails/sakura-meets/161/sakura-meets-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260723-sakura-meets-161-sub-indo-5MWf9",
    rawMp4Url: "https://www.akari46.com/2026/07/260723-sakura-meets-161.html",
    description:
      'Segmen Sakura Meets minggu ini menghadirkan proyek baru bertajuk "Only One Meets" bersama grup komedian Cotton, serta penampilan perdana Yamashita Shizuki sebagai bintang tamu. Kuis ini menguji seberapa dalam para member saling mengenal lewat aturan unik: pembuat soal harus bisa memancing tepat satu orang member agar menjawab benar demi meraih poin. Episode ini juga diselingi keseruan rapat ide untuk festival Sakura Meets Fest ke-4. Sisanya bisa ditonton sendiri.',
  },
  {
    id: "ep-019-channel",
    showId: "sakurazaka-channel",
    showName: "Sakurazaka Channel",
    showSlug: "sakurazaka-channel",
    episodeTitle: "260724 {Sakurazaka Channel} Sub Indo",
    episodeSubtitle:
      "Drama 'Terjun ke Laut' Akiho Onuma Dimulai! Tantangan Membuat Ramen Kakap Merah yang Lezat!!",
    episodeNumber: "#",
    releaseDate: "2026-07-24",
    thumbnail: "/images/thumbnails/sakura-channel/260724/sakura-channel-1.jpg",
    previewImage1:
      "/images/thumbnails/sakura-channel/260724/sakura-channel-2.png",
    previewImage2:
      "/images/thumbnails/sakura-channel/260724/sakura-channel-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260724-sakurazaka-channel-drama-terjun-ke-laut-akiho-onuma-dimulai-tantangan-membuat-ramen-kakap-merah-yang-lezat-sub-indo-EgPXY",
    rawMp4Url: "https://www.youtube.com/watch?v=R4t6f23GBlU",
    description:
      "Konten vlog Sakurazaka Channel kali ini menampilkan Onuma Akiho membagikan momen kulineran uniknya dengan memasak ramen ikan kakap merah (tai). Menariknya, bahan utama ikan tersebut ditangkap langsung dari keramba laut milik sang ayah. Proses berlanjut ke dapur, di mana Onuma menunjukkan keterampilannya memfilet ikan, meracik kaldu gurih dari sisa kepala dan tulang, hingga memanggang dagingnya untuk topping ramen. Demi mencari suasana makan yang pas, ia bahkan membawa mangkuk ramen buatannya ke atas tanggul laut di tengah terpaan angin dingin, hingga harus mengambil garam dan rumput laut tambahan untuk menyempurnakan rasanya. Sisanya bisa ditonton sendiri.",
  },
  {
    id: "ep-018-channel",
    showId: "sakurazaka-channel",
    showName: "Sakurazaka Channel",
    showSlug: "sakurazaka-channel",
    episodeTitle: "260721 {Sakurazaka Channel} Sub Indo",
    episodeSubtitle:
      "Perjalanan Sakura! Ayo Jalan-jalan Naik Kereta Bareng Hono Tamura & Yuzuki Nakajima! Edisi Niigata",
    episodeNumber: "#",
    releaseDate: "2026-07-21",
    thumbnail: "/images/thumbnails/sakura-channel/260721/sakura-channel-1.jpg",
    previewImage1:
      "/images/thumbnails/sakura-channel/260721/sakura-channel-2.png",
    previewImage2:
      "/images/thumbnails/sakura-channel/260721/sakura-channel-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260721-sakurazaka-channel-perjalanan-sakura-ayo-jalan-jalan-naik-kereta-bareng-hono-tamura-yuzuki-nakajima-edisi-niigata-sub-indo-W6UZN",
    rawMp4Url: "https://www.youtube.com/watch?v=9srP51koR-s",
    description:
      'Vlog Sakurazaka Channel kali ini, dalam edisi kolaborasi bersama JR East bertajuk "Sakura Tabi", Tamura Hono dan Nakashima Yuzuki menjalani wisata singkat ke Prefektur Niigata hingga menyeberang ke Pulau Sado. Perjalanan hari pertama diisi dengan berburu kuliner laut segar di pasar Pia Bandai, menjajal cita rasa unik air mineral di Tsukioka Onsen, hingga bermalam di penginapan tradisional berlatar pemandangan sawah. Memasuki hari kedua, petualangan berlanjut ke Pulau Sado menggunakan jetfoil, di mana keduanya menaiki perahu bak (taraibune), menjajal pengalaman mendulang serpihan emas di Sado Gold Park, serta menikmati pemandangan laut dari Dermaga Ameya sebelum akhirnya kembali ke Stasiun Niigata untuk berbelanja oleh-oleh. Sisanya bisa ditonton sendiri.',
  },
  {
    id: "ep-294-choko",
    showId: "chokosaku",
    showName: "Chokosaku",
    showSlug: "chokosaku",
    episodeTitle: "260719 {Chokosaku} #294 Sub Indo",
    episodeSubtitle: "Rapat Kelas Update",
    episodeNumber: "Episode 294",
    releaseDate: "2026-07-19",
    thumbnail: "/images/thumbnails/chokosaku/294/chokosaku-1.png",
    previewImage1: "/images/thumbnails/chokosaku/294/chokosaku-2.png",
    previewImage2: "/images/thumbnails/chokosaku/294/chokosaku-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260719-chokosaku-294-sub-indo-ODUdA",
    rawMp4Url:
      "https://www.akari46.com/2026/07/260719-sakurazaka46chokosaku294.html",
    description:
      'Segmen Chokosaku kali ini menghadirkan "Rapat Kelas Update", di mana Kojima Nagisa mengambil peran sebagai ketua kelas untuk memimpin pemungutan suara terkait usulan pembaruan karakter para member.  Dalam episode ini, Onuma Akiho mencoba meyakinkan rekan-rekannya demi mendapatkan citra "keren", sementara Masumoto Kira dan Murai Yu saling beradu pola hidup sehat lewat kebiasaan makan serta keahlian memasak. Suasana berlanjut saat Ishimori Rika membagikan hobi memotret bulan yang romantis, hingga Odakura Reina yang menantang Rika dalam duel melipat kaos demi membuktikan kelincahannya. Sisanya bisa ditonton sendiri.',
  },
  {
    id: "ep-294-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260719 {Soko Magattara, Sakurazaka} #294 Sub Indo",
    episodeSubtitle: "Sesi Laporan Karakter Update Sakurazaka46",
    episodeNumber: "Episode 294",
    releaseDate: "2026-07-19",
    thumbnail: "/images/thumbnails/sokomagattara/294/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/294/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/294/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/file/dhq8an2bhgyo8t6/260719_Soko_Magattara%252C_Sakurazaka_%2523294_Sub_Indo.ass/file",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260719-soko-magattara-sakurazaka-294-sub-indo-kLQTc",
    rawMp4Url:
      "https://www.akari46.com/2026/07/260719-soko-magattara-sakurazaka-294.html",
    description:
      'Eps minggu ini dari Sokosaku menghadirkan segmen "Sesi Laporan Karakter Update Sakurazaka46". Memanfaatkan absennya Generasi ke-4, member Generasi ke-2 dan ke-3 mengambil alih acara untuk melaporkan berbagai kebiasaan unik, hobi baru, hingga perubahan karakter rekan-rekannya kepada duo MC Sawabe dan Tsuchida. Mulai dari hobi jalan-jalan sendirian, tren kekinian, hingga respons jenaka saat mengamati ekspresi sang MC, episode ini dipenuhi cerita menarik dari balik layar para member. Sisanya bisa ditonton sendiri.',
  },
  {
    id: "ep-017-channel",
    showId: "sakurazaka-channel",
    showName: "Sakurazaka Channel",
    showSlug: "sakurazaka-channel",
    episodeTitle: "260718 {Sakurazaka Channel} Sub Indo",
    episodeSubtitle:
      "amashita Shizuki & Yamashita Haruka, Menjelang Libur Musim Panas! Spesial Penelitian Bebas!",
    episodeNumber: "#",
    releaseDate: "2026-07-18",
    thumbnail: "/images/thumbnails/sakura-channel/260718/sakura-channel-1.jpg",
    previewImage1:
      "/images/thumbnails/sakura-channel/260718/sakura-channel-2.png",
    previewImage2:
      "/images/thumbnails/sakura-channel/260718/sakura-channel-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260718-sakurazaka-channel-yamashita-shizuki-yamashita-haruka-menjelang-libur-musim-panas-spesial-penelitian-bebas-sub-indo-ZAkWs",
    rawMp4Url: "https://www.youtube.com/watch?v=9q_r_a_HIIU",
    description:
      'Vlog Sakurazaka Channel kali ini menghadirkan edisi spesial liburan musim panas bertajuk "Penelitian Bebas Kelompok Yamashita", yang mempertemukan duo Yamashita—Yamashita Shizuki (Sakurazaka46) dan Yamashita Haruka (Hinatazaka46). Kembali berkolaborasi setelah dua tahun, keduanya menjajal serangkaian eksperimen sains seru yang bisa dilakukan di rumah. Mulai dari tantangan berlari di atas cairan dilatansi, menguji tren permainan keseimbangan jungkat-jungkit, membuat bola air yang bisa digenggam, hingga membuktikan ketahanan balon di atas paku payung. Selain diwarnai aksi eksperimen dan adegan kocak "Profesor & Asisten", vlog ini juga diisi momen makan santai sambil mengobrolkan perkembangan diri dan kenangan konser satu sama lain. Sisanya bisa ditonton sendiri.',
  },
  {
    id: "ep-016-channel",
    showId: "sakurazaka-channel",
    showName: "Sakurazaka Channel",
    showSlug: "sakurazaka-channel",
    episodeTitle: "260717 {Sakurazaka Channel} Sub Indo",
    episodeSubtitle:
      "Taniguchi Airi & Yamaguchi Haruyo, Jalan-jalan Santai ke Hakone Bareng Sahabat! Kulineran・Pengalaman Baru・Berendam Kaki!",
    episodeNumber: "#",
    releaseDate: "2026-07-17",
    thumbnail: "/images/thumbnails/sakura-channel/260717/sakura-channel-1.jpg",
    previewImage1:
      "/images/thumbnails/sakura-channel/260717/sakura-channel-2.png",
    previewImage2:
      "/images/thumbnails/sakura-channel/260717/sakura-channel-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260717-sakurazaka-channel-taniguchi-airi-yamaguchi-haruyo-jalan-jalan-santai-ke-hakone-bareng-sahabat-kulineranpengalaman-baruberendam-kaki-sub-indo-drG04",
    rawMp4Url: "https://www.youtube.com/watch?v=o0FFV0qKiN8",
    description:
      "Vlog Sakurazaka Channel kali ini menampilkan perjalanan santai Taniguchi Airi (Sakurazaka46) yang berlibur ke Hakone bersama teman dekatnya dari grup sebelah, Yamaguchi Haruyo (Hinatazaka46). Selama di sana, keduanya menikmati berbagai momen seru, mulai dari mencicipi kuliner khas, naik kapal bajak laut dengan terpaan angin kencang, menaiki kereta gantung, hingga membuat kerajinan ukir kaca sebagai kenang-kenangan. Ditemani momen wisata kuliner di area perbelanjaan dan obrolan hangat saat merendam kaki di pemandian air panas, vlog ini memperlihatkan sisi kasual serta keakraban manis antara member Sakurazaka46 dan Hinatazaka46 di luar panggung. Sisanya bisa ditonton sendiri.",
  },
  {
    id: "ep-160-meets",
    showId: "sakura-meets",
    showName: "Sakura Meets",
    showSlug: "sakura-meets",
    episodeTitle: "260716 {Sakura Meets} #160 Sub Indo",
    episodeSubtitle: "Kolaborasi Skit Komedi Bersama Shizuru, Tes Penglihatan",
    episodeNumber: "Episode 160",
    releaseDate: "2026-07-16",
    thumbnail: "/images/thumbnails/sakura-meets/160/sakura-meets-1.png",
    previewImage1: "/images/thumbnails/sakura-meets/160/sakura-meets-2.png",
    previewImage2: "/images/thumbnails/sakura-meets/160/sakura-meets-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260716-sakura-meets-160-sub-indo-9jptk",
    rawMp4Url: "https://www.akari46.com/2026/07/260716-sakura-meets-160.html",
    description:
      'Eps minggu ini dari Sakura Meets menghadirkan segmen kolaborasi skit komedi spesial bersama komedian Shizuru. Dengan mengangkat tema "Skit Masa Muda", para member ditantang untuk bermain peran dengan totalitas tinggi dalam cerita sekolah bertema "Tes Penglihatan", di mana Kojima Nagisa menghadapi tekanan berat dalam skit pertamanya sebagai tokoh utama. Tak hanya itu, keseruan berlanjut saat para member mencicipi dan memperkenalkan menu unadon serta somen kolaborasi orisinal mereka untuk menyambut festival musim panas. Sisanya bisa ditonton sendiri.',
  },
  {
    id: "ep-293-choko",
    showId: "chokosaku",
    showName: "Chokosaku",
    showSlug: "chokosaku",
    episodeTitle: "260712 {Chokosaku} #293 Sub Indo",
    episodeSubtitle:
      "Teater Azakyun: Babak Lanjutan, Sisi Genit & Menggemaskan Para Member",
    episodeNumber: "Episode 293",
    releaseDate: "2026-07-12",
    thumbnail: "/images/thumbnails/chokosaku/293/chokosaku-1.png",
    previewImage1: "/images/thumbnails/chokosaku/293/chokosaku-2.png",
    previewImage2: "/images/thumbnails/chokosaku/293/chokosaku-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260712-chokosaku-293-sub-indo-qP8fM",
    rawMp4Url:
      "https://www.akari46.com/2026/07/260712-sakurazaka46chokosaku293.html",
    description:
      'Eps minggu ini dari Chokosaku menghadirkan babak lanjutan yang penuh keceriaan dalam proyek dadakan "Teater Azakyun" di Sakurazaka46, di mana para member ditantang untuk menunjukkan sisi paling genit dan menggemaskan (azatoi) mereka melalui skenario yang dirancang oleh para member sendiri. Dengan dipandu oleh MC Kojima Nagisa serta juri Tamura Hono yang siap dibuat menangis karena gemas. Sepanjang episode, persaingan sengit namun hangat antara Matono Mio dan Morita Hikaru yang memperagakan naskah manis buatan Sutradara Ishimori Rika, Murai Yu, dan Katsumata Haruka ini menyuguhkan berbagai interaksi yang membuat hati berdebar, sekaligus menjadi kesempatan bagi setiap member untuk mengekspresikan karakter unik mereka di luar penampilan panggung yang biasanya. Sisanya bisa ditonton sendiri.',
  },
  {
    id: "ep-293-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260712 {Soko Magattara, Sakurazaka} #293 Sub Indo",
    episodeSubtitle:
      "Part 2 Kompetisi Perebutan Gelar Azato Queen Sakurazaka46, Babak Final",
    episodeNumber: "Episode 293",
    releaseDate: "2026-07-12",
    thumbnail: "/images/thumbnails/sokomagattara/293/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/293/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/293/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/file/uwj6v2egcvh5mlz/260712_Soko_Magattara%252C_Sakurazaka_%2523293_Sub_Indo.ass/file",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260712-soko-magattara-sakurazaka-293-sub-indo-aXSrL",
    rawMp4Url:
      "https://www.akari46.com/2026/07/260712-soko-magattara-sakurazaka-293.html",
    description:
      "Eps minggu ini dari Sokomagattara, Sakurazaka? melanjutkan keseruan kompetisi \"Perebutan Gelar Azato Queen Sakurazaka46\" bagian kedua bersama Sunshine Ikezaki sebagai ketua juri. Di tantangan kali ini, para member diuji melalui segmen ekspresi wajah seperti 'Aku cemburu tahu!' dan 'Ada krim tuh di hidungmu', serta tes kepintaran bertingkah menggemaskan secara praktis dalam berbagai situasi fantasi. Kompetisi ditutup dengan babak final bertema \"Kucing Azato\" yang menampilkan persaingan sengit antara 3 member terbaik demi memperebutkan mahkota Ratu Azatoi. Sisanya bisa ditonton sendiri.",
  },
  {
    id: "ep-159-meets",
    showId: "sakura-meets",
    showName: "Sakura Meets",
    showSlug: "sakura-meets",
    episodeTitle: "260709 {Sakura Meets} #159 Sub Indo",
    episodeSubtitle: "Babak Lanjutan Meets Derby ke-7, Prediksi Balapan Gen 4",
    episodeNumber: "Episode 159",
    releaseDate: "2026-07-09",
    thumbnail: "/images/thumbnails/sakura-meets/159/sakura-meets-1.png",
    previewImage1: "/images/thumbnails/sakura-meets/159/sakura-meets-2.png",
    previewImage2: "/images/thumbnails/sakura-meets/159/sakura-meets-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260709-sakura-meets-159-sub-indo-EPGXi",
    rawMp4Url: "https://www.akari46.com/2026/07/260709-sakura-meets-159.html",
    description:
      'Eps minggu ini dari Sakura Meets menghadirkan babak lanjutan dalam segmen kelanjutan "Meets Derby ke-7", di mana para member ditantang untuk membuat prediksi balapan unik yang diikuti oleh para member Generasi ke-4. Dengan dipandu oleh MC Yamazoe (Aiseki Start) serta persaingan ketat dalam perolehan poin antara Tim Generasi ke-2 (Onuma & Masumoto) melawan Tim Generasi ke-3 (Nakajima, Taniguchi, & Kojima). Sepanjang episode, persaingan sengit namun hangat dalam "Stakes Barang Pinjaman", "Beach Flags Derby" seputar kuis senpai, "Gulat Sumo Battle Royale", hingga "Piala Halang Rintang TV Asahi" antara Matsumoto Wako, Yamada Momomi, Nakagawa Chihiro, dan Inaguma Hina. Sisanya bisa ditonton sendiri.',
  },
  {
    id: "ep-015-channel",
    showId: "sakurazaka-channel",
    showName: "Sakurazaka Channel",
    showSlug: "sakurazaka-channel",
    episodeTitle: "260707 {Sakurazaka Channel} Sub Indo",
    episodeSubtitle:
      "Pertemuan Pertama Matsuda dan Iwashika-chan di Museum Iwashita no Shinshoga!",
    episodeNumber: "#",
    releaseDate: "2026-07-07",
    thumbnail: "/images/thumbnails/sakura-channel/260707/sakura-channel-1.jpg",
    previewImage1: "#",
    previewImage2: "#",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260707-sakurazaka-channel-pertemuan-pertama-matsuda-dan-iwashika-chan-di-museum-iwashita-no-shinshoga-sub-indo-ko0uX",
    rawMp4Url: "https://www.youtube.com/watch?v=0rOddNgUDQU",
    description:
      "Konten kali ini dari Sakurazaka Channel menampilkan perjalanan Matsuda Rina, yang mewujudkan impiannya untuk mengunjungi Iwashita New Ginger Museum yang ikonis dan serba berwarna merah muda. Sebagai penggemar berat produk jahe muda tersebut, Rina membagikan kegembiraannya saat berinteraksi dengan maskot museum, Iwashika-chan, mempelajari proses panen jahe muda yang lembut, serta mengeksplorasi berbagai produk kolaborasi unik yang tersedia. Perjalanan ini menjadi pengalaman yang sangat memuaskan bagi Matsuda, di mana ia tidak hanya menikmati hidangan lezat berbahan jahe muda di kafe museum, tetapi juga memborong berbagai cendera mata untuk dibagikan kepada para member lainnya. Sisanya bisa ditonton sendiri.",
  },
  {
    id: "ep-292-choko",
    showId: "chokosaku",
    showName: "Chokosaku",
    showSlug: "chokosaku",
    episodeTitle: "260705 {Chokosaku} #292 Sub Indo",
    episodeSubtitle:
      "Kompetisi Perebutan Gelar Azato Queen Sakurazaka46, Babak Lanjutan",
    episodeNumber: "Episode 292",
    releaseDate: "2026-07-05",
    thumbnail: "/images/thumbnails/chokosaku/292/chokosaku-1.png",
    previewImage1: "/images/thumbnails/chokosaku/292/chokosaku-2.png",
    previewImage2: "/images/thumbnails/chokosaku/292/chokosaku-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260705-chokosaku-292-sub-indo-6y7Ud",
    rawMp4Url: "https://www.akari46.com/2026/07/260705-chokosaku-292.html",
    description:
      'Eps minggu ini dari Chokosaku menghadirkan babak lanjutan yang penuh keceriaan dalam kompetisi perebutan gelar "Queen Azatoi" di Sakurazaka46, di mana para member ditantang untuk menunjukkan sisi paling genit dan menggemaskan (azatoi) mereka melalui berbagai skenario fantasi yang dirancang sendiri. Dengan dipandu oleh MC Yamashita serta juri tamu Onuma dan Ten-chan yang antusias. Sepanjang episode, persaingan sengit namun hangat antara Yamakawa, Matono, Karin-chan, dan Wakochi ini menyuguhkan berbagai interaksi yang membuat hati berdebar, sekaligus menjadi kesempatan bagi setiap member untuk mengekspresikan karakter unik mereka di luar penampilan panggung yang biasanya. Sisanya bisa ditonton sendiri.',
  },
  {
    id: "ep-292-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260705 {Soko Magattara, Sakurazaka} #292 Sub Indo",
    episodeSubtitle:
      "Perebutan Gelar Azato Queen Sakurazaka46, Tantangan Fantasi Musim Panas",
    episodeNumber: "Episode 292",
    releaseDate: "2026-07-05",
    thumbnail: "/images/thumbnails/sokomagattara/292/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/292/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/292/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/file/rga2o2tipdun3oz/260705_Soko_Magattara%252C_Sakurazaka_%2523292_Sub_Indo.ass/file",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260705-soko-magattara-sakurazaka-292-sub-indo-lNarx",
    rawMp4Url:
      "https://www.akari46.com/2026/07/260705-soko-magattara-sakurazaka-292.html",
    description:
      'Eps minggu ini menghadirkan tantangan seru bertajuk "Perebutan Gelar Azato Queen Sakurazaka46", di mana para member bersaing untuk membuktikan siapa yang paling imut dan genit (azatoi) di mata tamu spesial, Sunshine Ikezaki. Kompetisi ini menampilkan berbagai skenario fantasi musim panas yang diperagakan Asai, Yamashita, Ten-chan, dan Ishimori. Salah satu sorotan utama adalah penampilan Ishimori Rika yang berhasil memikat perhatian Ikezaki dengan konsep uniknya sampai membuat sang juri sampai terpaku. Episode ini dipenuhi dengan momen-momen menggemaskan, aksi azatoi yang memicu tawa, serta interaksi kocak antara para member dan Ikezaki yang terlihat sangat menikmati tantangan tersebut. Sisanya bisa ditonton sendiri.',
  },
  {
    id: "ep-158-meets",
    showId: "sakura-meets",
    showName: "Sakura Meets",
    showSlug: "sakura-meets",
    episodeTitle: "260702 {Sakura Meets} #158 Sub Indo",
    episodeSubtitle: "Meets Derby ke-7, Prediksi Balapan Gen 4",
    episodeNumber: "Episode 158",
    releaseDate: "2026-07-02",
    thumbnail: "/images/thumbnails/sakura-meets/158/sakura-meets-1.png",
    previewImage1: "/images/thumbnails/sakura-meets/158/sakura-meets-2.png",
    previewImage2: "/images/thumbnails/sakura-meets/158/sakura-meets-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260702-sakura-meets-158-sub-indo-RLhui",
    rawMp4Url: "https://www.akari46.com/2026/07/260702-sakura-meets-158.html",
    description:
      'Eps minggu ini dari Sakura Meets menghadirkan segmen "Meets Derby ke-7", di mana para member ditantang untuk membuat prediksi unik layaknya balapan kuda yang kali ini diikuti oleh para member Generasi ke-4 yang baru pertama kali tampil. Dengan dipandu oleh MC Yamazoe (Aiseki Start) serta persaingan prediksi antara Tim Generasi ke-2 (Onuma & Masumoto) melawan Tim Generasi ke-3 (Nakajima, Taniguchi, & Kojima). Sepanjang episode, persaingan sengit namun hangat dalam "Piala Siapa yang Paling Cepat Masuk Studio" serta "Piala Siapa Cepat Makan Donat" antara Matsumoto Wako, Yamada Momomi, Nakagawa Chihiro, dan Inaguma Hina.sanya. Sisanya bisa ditonton sendiri.',
  },
  {
    id: "ep-014-channel",
    showId: "sakurazaka-channel",
    showName: "Sakurazaka Channel",
    showSlug: "sakurazaka-channel",
    episodeTitle: "260630 {Sakurazaka Channel} Sub Indo",
    episodeSubtitle:
      "Vlog Enriko yang bangun pagi dan bersemangat sejak awal hari",
    episodeNumber: "#",
    releaseDate: "2026-06-30",
    thumbnail: "/images/thumbnails/sakura-channel/260630/sakura-channel-1.jpg",
    previewImage1: "#",
    previewImage2: "#",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260630-sakurazaka-channel-vlog-enriko-yang-bangun-pagi-dan-bersemangat-sejak-awal-hari-sub-indo-d9j3p",
    rawMp4Url: "https://www.youtube.com/watch?v=ci4m7HdJQUg",
    description:
      "Segmen kali ini menampilkan Vlog aktivitas pagi yang santai dari Enriko, yang menunjukkan kebiasaannya memulai hari lebih awal. Riko membagikan rutinitasnya sejak bangun tidur, termasuk momen santai saat ia melakukan peregangan, jalan kaki, dan menikmati sarapan. Tidak hanya itu, ia juga meluangkan waktu untuk berolahraga ringan seperti yoga di taman dan berinteraksi dengan anjing-anjing disana, sebelum akhirnya menutup petualangan paginya dengan mengunjungi toko roti favoritnya. Sisanya bisa ditonton sendiri.",
  },
  {
    id: "ep-291-choko",
    showId: "chokosaku",
    showName: "Chokosaku",
    showSlug: "chokosaku",
    episodeTitle: "260628 {Chokosaku} #291 Sub Indo",
    episodeSubtitle: "Pertarungan Perebutan Gelar Chokotto Queen Part 2",
    episodeNumber: "Episode 291",
    releaseDate: "2026-06-28",
    thumbnail: "/images/thumbnails/chokosaku/291/chokosaku-1.png",
    previewImage1: "/images/thumbnails/chokosaku/291/chokosaku-2.png",
    previewImage2: "/images/thumbnails/chokosaku/291/chokosaku-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260628-chokosaku-291-sub-indo-JVPxz",
    rawMp4Url:
      "https://www.akari46.com/2026/06/260628-sakurazaka46chokosaku291.html",
    description:
      'Dalam episode Chokosaku minggu ini, Matono dan Yamashita akan memandu "Pertarungan Perebutan Gelar Chokotto Queen," di mana para member berkompetisi untuk meraih gelar melalui tantangan unik seperti "Queen Topik Setengah-Setengah", "Queen Refleks", serta "Queen Paling Peka Perubahan Member"dengan menebak dengan tepat lima perubahan penampilan 5 member yang hadir minggu ini.',
  },
  {
    id: "ep-291-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260628 {Soko Magattara, Sakurazaka} #291 Sub Indo",
    episodeSubtitle: "Part 2 Kompetisi Perebutan Gelar Queen Sakurazaka46",
    episodeNumber: "Episode 291",
    releaseDate: "2026-06-28",
    thumbnail: "/images/thumbnails/sokomagattara/291/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/291/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/291/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/file/tz038ucbc6g1u6p/260628_Soko_Magattara%252C_Sakurazaka_%2523291_Sub_Indo.ass/file",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260628-soko-magattara-sakurazaka-291-sub-indo-YyctZ",
    rawMp4Url:
      "https://www.akari46.com/2026/06/260628-soko-magattara-sakurazaka-291.html",
    description:
      'Eps minggu ini merupakan part 2 melanjutkan kompetisi perebutan gelar "Queen" untuk mencari Ratu baru bagi para member Sakurazaka46 yang belum memiliki gelar. Episode ini diawali dengan tantangan pukul-tutup batu-gunting-kertas (permainan palu dan perisai) antara Yamashita Shizuki, Nakagawa Chihiro, dan Matsumoto Wako untuk memperebutkan gelar "Ratu Terlemah". Selain itu, episode ini juga Derby Kayang dari Katsumata Haru, Asai Konomi, Endo Riko, dan Taniguchi Airi. Serta ada tantangan minum cepat menggunakan sedotan sepanjang 1,8 meter oleh Kojima Nagisa, Yamasaki Ten, Odakura Reina, dan Mukai Itoha. Dan terakhir Wakochi juga mengajukan untuk melakukan blind test kecap asin. Sisanya bisa ditonton sendiri.',
  },
  {
    id: "ep-013-channel",
    showId: "sakurazaka-channel",
    showName: "Sakurazaka Channel",
    showSlug: "sakurazaka-channel",
    episodeTitle: "260624 {Sakurazaka Channel} Sub Indo",
    episodeSubtitle:
      "Meliput di balik layar Live Generasi ke-4, puncak perjuangan mereka!",
    episodeNumber: "#",
    releaseDate: "2026-06-24",
    thumbnail: "/images/thumbnails/sakura-channel/260624/sakura-channel-1.jpg",
    previewImage1: "#",
    previewImage2: "#",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260624-sakurazaka-channel-meliput-di-balik-layar-live-generasi-ke-4-puncak-perjuangan-mereka-sub-indo-btFKq",
    rawMp4Url: "https://www.youtube.com/watch?v=FasWElvoy9c",
    description:
      "Konten kali ini dari Sakurazaka Channel menampilkan liputan mendalam di balik layar konser generasi ke-4 Sakurazaka46. Episode ini menyoroti persiapan emosional dan teknis para member, termasuk momen-momen latihan intensif, serta keceriaan mereka di belakang panggung konser. Perjalanan ini memuncak pada penampilan konser yang sukses, di mana para senpai turut hadir memberikan dukungan, yang membuat para member generasi ke-4 merasa sangat terharu dan bangga akan perkembangan mereka selama satu tahun ini. Sisanya bisa ditonton sendiri.",
  },
  {
    id: "ep-290-choko",
    showId: "chokosaku",
    showName: "Chokosaku",
    showSlug: "chokosaku",
    episodeTitle: "260621 {Chokosaku} #290 Sub Indo",
    episodeSubtitle: "Pertarungan Gelar Chokosaku Queen Sakurazaka46",
    episodeNumber: "Episode 290",
    releaseDate: "2026-06-21",
    thumbnail: "/images/thumbnails/chokosaku/290/chokosaku-1.png",
    previewImage1: "/images/thumbnails/chokosaku/290/chokosaku-2.png",
    previewImage2: "/images/thumbnails/chokosaku/290/chokosaku-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260621-chokosaku-290-sub-indo-Jp3EK",
    rawMp4Url:
      "https://www.akari46.com/2026/06/260621-sakurazaka46chokosaku290.html",
    description:
      'Eps minggu ini dari Chokosaku menghadirkan "Pertarungan Gelar Queen", sebuah babak tambahan dari turnamen perebutan gelar Queen yang menantang para member untuk mempraktikkan keahlian khusus mereka. Episode ini menguji ketahanan dan kemampuan unik member melalui serangkaian tantangan, termasuk tantangan "No Reaction Queen" yang diusulkan Yamakawa, serta kompetisi makan lemon cepat yang memperlihatkan keahlian luar biasa dari Yamakawa dan Nakagawa. Selain itu, ada kompetisi hafalan daftar kota penyelenggara Olimpiade Musim Panas, yang diusulkan oleh Tamura. Sisanya bisa ditonton sendiri.',
  },
  {
    id: "ep-290-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260621 {Soko Magattara, Sakurazaka} #290 Sub Indo",
    episodeSubtitle: "Kompetisi Perebutan Gelar Queen Sakurazaka46",
    episodeNumber: "Episode 290",
    releaseDate: "2026-06-21",
    thumbnail: "/images/thumbnails/sokomagattara/290/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/290/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/290/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/file/8gmd0ekcxzx49x7/260621_Soko_Magattara%252C_Sakurazaka_%2523290_Sub_Indo.ass/file",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260621-soko-magattara-sakurazaka-290-sub-indo-fqV0S",
    rawMp4Url:
      "https://www.akari46.com/2026/06/260614-soko-magattara-sakurazaka-289_01070465990.html",
    description:
      'Eps minggu ini menyajikan "Pertarungan Perebutan Gelar Ratu" yang sengit, di mana para member Sakurazaka46 bersaing untuk memperebutkan berbagai gelar Ratu di bidang yang unik. Dalam segmen pembuka, penonton diajak bernostalgia dengan daftar gelar Ratu yang pernah diraih member sebelumnya, sebelum akhirnya beralih ke kompetisi baru yang melibatkan adu ketangkasan fisik seperti Lompat tali, Beach Flag dan tantangan Gyoza yang menguji kecepatan serta kerapian dalam membungkus gyoza.Sisanya bisa ditonton sendiri.',
  },
  {
    id: "ep-012-channel",
    showId: "sakurazaka-channel",
    showName: "Sakurazaka Channel",
    showSlug: "sakurazaka-channel",
    episodeTitle: "260616 {Sakurazaka Channel} Sub Indo",
    episodeSubtitle:
      "Berwisata dan Kuliner ke Kagawa Lebih Dulu & Meninjau Lokasi Acara! Tampil sebagai Pembicara di Machi★Asobi Vol. 30!",
    episodeNumber: "#",
    releaseDate: "2026-06-16",
    thumbnail: "/images/thumbnails/sakura-channel/260616/sakura-channel-1.jpg",
    previewImage1: "#",
    previewImage2: "#",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260616-sakurazaka-channel-berwisata-dan-kuliner-ke-kagawa-lebih-dulu-meninjau-lokasi-acara-tampil-sebagai-pembicara-di-machiasobi-vol-30-sub-indo-9ZjZG",
    rawMp4Url: "https://www.youtube.com/watch?v=irlxdNA-gxs",
    description:
      "Segmen kali ini menampilkan perjalanan penuh keceriaan Matsuda Rina dan Matono Mio di wilayah Shikoku, tepatnya di Prefektur Tokushima dan Kagawa. Perjalanan ini dilakukan dalam rangka penampilan mereka di acara Machi Asobi di Tokushima sekaligus persiapan tur konser mereka di Anabuki Arena, Kagawa. Selama di sana, mereka menjelajahi keindahan Jembatan Seto Ohashi, mencoba pengalaman mewarnai kain dengan teknik indigo, serta mencicipi kuliner lokal yang ikonik, yaitu udon Kagawa dengan berbagai varian penyajian. Episode ini ditutup dengan kunjungan ke Akuarium Shikoku, di mana mereka terpesona melihat lumba-lumba dan berbagai biota laut lainnya. Sisanya bisa ditonton sendiri.",
  },
  {
    id: "ep-289-choko",
    showId: "chokosaku",
    showName: "Chokosaku",
    showSlug: "chokosaku",
    episodeTitle: "260614 {Chokosaku} #289 Sub Indo",
    episodeSubtitle:
      "Proyek Pembinaan Wakil Kapten Sakurazaka46, Babak Tambahan",
    episodeNumber: "Episode 289",
    releaseDate: "2026-06-14",
    thumbnail: "/images/thumbnails/chokosaku/289/chokosaku-1.png",
    previewImage1: "/images/thumbnails/chokosaku/289/chokosaku-2.png",
    previewImage2: "/images/thumbnails/chokosaku/289/chokosaku-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260614-chokosaku-289-sub-indo-MQ360",
    rawMp4Url: "https://www.bilibili.com/video/BV1BTJK6hEnw/",
    description:
      'Eps minggu ini dari Chokosaku memulai "Proyek Pembinaan Wakil Kapten" yang dirancang untuk meningkatkan kemampuan Yamasaki Ten setelah penunjukannya sebagai wakil kapten Sakurazaka46. Proyek ini menguji keterampilan krusial seorang wakil kapten melalui serangkaian tantangan, termasuk "Kuis Gerakan Masalah" untuk menguji daya observasi, serta "Game Pesan Berantai Dukungan Menggambar" dan "Support Bentuk Challenge" untuk mengasah kemampuan memahami dan mendukung member.',
  },
  {
    id: "ep-289-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260614 {Soko Magattara, Sakurazaka} #289 Sub Indo",
    episodeSubtitle: "Proyek Pembinaan Wakil Kapten Sakurazaka46",
    episodeNumber: "Episode 289",
    releaseDate: "2026-06-14",
    thumbnail: "/images/thumbnails/sokomagattara/289/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/289/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/289/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/file/ao0tihqql6fe325/260614_Soko_Magattara%252C_Sakurazaka_%2523289_Sub_Indo.ass/file",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260614-soko-magattara-sakurazaka-289-sub-indo-tMjqP",
    rawMp4Url:
      "https://www.akari46.com/2026/06/260614-soko-magattara-sakurazaka-289.html",
    description:
      'Eps minggu ini adalah episode spesial perayaan penunjukan Yamasaki Ten sebagai wakil kapten Sakurazaka46, yang dilakukan bersama Kapten Matsuda Rina untuk memperkuat kekompakan mereka. Dalam segmen ini, mereka harus menyelesaikan berbagai permainan kuis dan tantangan fisik—seperti kuis seberapa kenal dengan member, adu tahan napas di air, pertarungan keseimbangan sapu, hingga tantangan menggendong putri dengan fuurin (lonceng angin)—sebagai misi untuk menjadi "Buddies terkuat".',
  },
  {
    id: "ep-288-choko",
    showId: "chokosaku",
    showName: "Chokosaku",
    showSlug: "chokosaku",
    episodeTitle: "260607 {Chokosaku} #288 Sub Indo",
    episodeSubtitle:
      "Segmen Kampanye Hit Single ke-15 Sakurazaka46, Lonesome Rabbit/What's KAZOKU, Babak Tantangan Teka-Teki",
    episodeNumber: "Episode 288",
    releaseDate: "2026-06-07",
    thumbnail: "/images/thumbnails/chokosaku/288/chokosaku-1.png",
    previewImage1: "/images/thumbnails/chokosaku/288/chokosaku-2.png",
    previewImage2: "/images/thumbnails/chokosaku/288/chokosaku-3.png",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260607-chokosaku-288-sub-indo-IYG56",
    rawMp4Url: "https://www.bilibili.com/video/BV19PET6tE9J/",
    description:
      'Eps minggu ini adalah segmen kampanye hit single ke-15 Sakurazaka46, Lonesome Rabbit/What\'s "KAZOKU". Di kampanye ini, Ozono, Moriya, Endo, Taniguchi, Murayama, dan Mukai akan mencoba memecahkan teka-teki yang diberikan staff. Jika mereka bisa berhasil menyelesaikan teka-teki dalam kurang dari 20 menit, maka dianggap sukses.',
  },
  {
    id: "ep-288-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260607 {Soko Magattara, Sakurazaka} #288 Sub Indo",
    episodeSubtitle:
      "Kampanye Hit Single ke-15 Sakurazaka46, Lonesome Rabbit/What's KAZOKU",
    episodeNumber: "Episode 288",
    releaseDate: "2026-06-07",
    thumbnail: "/images/thumbnails/sokomagattara/288/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/288/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/288/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/file/ju1y90nnd5x6myx/260607_Soko_Magattara%252C_Sakurazaka_%2523288_Sub_Indo.ass/file",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260607-soko-magattara-sakurazaka-288-sub-indo-STRGe",
    rawMp4Url:
      "https://www.akari46.com/2026/06/260607-soko-magattara-sakurazaka-288.html",
    description:
      'Eps minggu ini adalah segmen kampanye hit single ke-15 Sakurazaka46, Lonesome Rabbit/What\'s "KAZOKU". Di kampanye ini, 3 member terdepan, Morita, Yamashita, dan Asai akan mempromosikan single ini di jalan-jalan sambil memakai kostum kelinci. Jika kampanye ini berhasil masuk trending top 30 di X, maka akan dianggap sukses. Tantangan utamanya kali ini adalah mereka tidak boleh berbicara atau kasih tahu bahwa member asli sakurazaka46 ada di dalam kostum. Sisanya bisa ditonton sendiri.',
  },
  {
    id: "ep-001-channel",
    showId: "sakurazaka-channel",
    showName: "Sakurazaka Channel",
    showSlug: "sakurazaka-channel",
    episodeTitle: "260604 {Sakurazaka Channel} Sub Indo",
    episodeSubtitle:
      "Jalan-jalan Santai Karin Belanja di Pasar Keramik Mashiko",
    episodeNumber: "#",
    releaseDate: "2026-06-04",
    thumbnail: "/images/thumbnails/sakura-channel/260604/sakura-channel-1.jpg",
    previewImage1: "#",
    previewImage2: "#",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260604-sakurazaka-channel-jalan-jalan-santai-karin-belanja-di-pasar-keramik-mashiko-U6vQw",
    rawMp4Url: "https://www.youtube.com/watch?v=d7sqBzFC5QQ",
    description:
      "Eps kali ini menampilkan Karin Fujiyoshi yang berkunjung ke Festival Pasar Keramik Mashiko untuk mencari peralatan makan unik, meskipun ia sempat berniat untuk tidak membeli gelas lagi. Di sela-sela aktivitasnya, ia berbagi cerita mendalam mulai dari tantangan koreografi lagu baru Sakurazaka46 hingga kenangan emosional saat konser di Stadion Nasional.",
  },
  {
    id: "ep-287-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260531 {Soko Magattara, Sakurazaka} #287 Sub Indo",
    episodeSubtitle:
      "Segmen Kelulusan Takemoto Yui, Penampilan Terakhir di Sokosaku",
    episodeNumber: "Episode 287",
    releaseDate: "2026-05-31",
    thumbnail: "/images/thumbnails/sokomagattara/287/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/287/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/287/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/file/1lxl7wwk174o73c/260531_Soko_Magattara%252C_Sakurazaka_%2523287_Sub_Indo.ass/file",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260531-soko-magattara-sakurazaka-287-sub-indo-O3tbn",
    rawMp4Url:
      "https://www.akari46.com/2026/06/260531-soko-magattara-sakurazaka-287.html",
    description:
      "Eps minggu ini adalah segmen kelulusan Takemoto Yui. Di penampilan terakhirnya ini, Takemoto dan member akan melakukan hal-hal yang ingin dilakukan di Sokosaku sebelum benar-benar lulus dari Sakurazaka46. Sesuai image dari Takemoto, akan banyak segmen komedi di eps kelulusan ini.",
  },
  {
    id: "ep-011-channel",
    showId: "sakurazaka-channel",
    showName: "Sakurazaka Channel",
    showSlug: "sakurazaka-channel",
    episodeTitle: "260529 {Sakurazaka Channel} Sub Indo",
    episodeSubtitle:
      "Katsumata & Meguro Tidak Boleh Pulang Sampai Berhasil Memotret 100 Ekor Kelinci!",
    episodeNumber: "#",
    releaseDate: "2026-05-29",
    thumbnail: "/images/thumbnails/sakura-channel/260529/sakura-channel-1.jpg",
    previewImage1: "#",
    previewImage2: "#",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260529-sakurazaka-channel-katsumata-meguro-tidak-boleh-pulang-sampai-berhasil-memotret-100-ekor-kelinci-sub-indo-dOX4S",
    rawMp4Url: "https://youtu.be/1x-iNIfrijk?si=PydIy19aNCh8mOTI",
    description:
      "Segmen kali ini dari Sakurazaka Channel menampilkan perjalanan Meguro Hiiro dan Katsumata Haru, yang mengunjungi Pulau Okunoshima di Hiroshima untuk menjalankan misi khusus: memotret 100 ekor kelinci liar. Tantangan ini menjadi momen yang emosional bagi Haru, yang secara jujur mengakui rasa takutnya terhadap kelinci, menjadikannya kesempatan untuk mengatasi ketakutan tersebut. Sepanjang perjalanan, mereka berinteraksi dengan ratusan kelinci di pulau tersebut, saling membantu mengambil foto close-up yang menjadi target tantangan, hingga akhirnya Haru perlahan mulai merasa nyaman dan berhasil menaklukkan ketakutannya. Sisanya bisa ditonton sendiri.",
  },
  {
    id: "ep-286-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260524 {Soko Magattara, Sakurazaka} #286 Sub Indo",
    episodeSubtitle: "Sesi Penyelesaian Masalah Pribadi Member",
    episodeNumber: "Episode 286",
    releaseDate: "2026-05-24",
    thumbnail: "/images/thumbnails/sokomagattara/286/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/286/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/286/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/file/l3ald5ck4lwcwn1/260524_Soko_Magattara%252C_Sakurazaka_%2523286_Sub_Indo.ass/file",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260524-soko-magattara-sakurazaka-286-sub-indo-m5LSr",
    rawMp4Url:
      "https://www.akari46.com/2026/05/260524-soko-magattara-sakurazaka-286.html",
    description:
      "Eps minggu ini adalah segmen penyelesaian masalah pribadi member. Dikarenakan Wakochi sedang bimbang untuk tetap mempertahankan karakter Wakochiboshi-nya atau tidak, jadi member lain yang punya masalah pribadi serupa akan speak up juga, lalu member lainnya akan mencoba membantu memberikan saran untuk menyelesaikan masalah tersebut.",
  },
  {
    id: "ep-285-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260517 {Soko Magattara, Sakurazaka} #285 Sub Indo",
    episodeSubtitle: "Part 2 Segmen Tes Kekompakan Member BACKS",
    episodeNumber: "Episode 285",
    releaseDate: "2026-05-17",
    thumbnail: "/images/thumbnails/sokomagattara/285/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/285/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/285/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/file/2sqdx6gp43m3boh/260517_Soko_Magattara%252C_Sakurazaka_%2523285_Sub_Indo.ass/file",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260517-soko-magattara-sakurazaka-285-sub-indo-JUNyx",
    rawMp4Url:
      "https://www.akari46.com/2026/05/260517-soko-magattara-sakurazaka-285.html",
    description:
      'Eps minggu ini adalah part kedua dari segmen tes kekompakan member BACKS. Member BACKS akan diuji kekompakannya, dan jika berhasil akan mendapat hadiah katering mewah saat Live BACKS nanti. Hadiah paling mewah adalah Steak Sirloin Premium dan jika gagal, hadiah paling rendah adalah bubur dan bahkan cuman topping lemak punggung babi. Catering apa yang berhasil member dapatkan dari tantangan ini. Sisanya bisa ditonton sendiri. Dan di akhir segmen akan diumumkan formasi senbatsu untuk single ke-15 "Lonesome Rabbit".',
  },
  {
    id: "ep-010-channel",
    showId: "sakurazaka-channel",
    showName: "Sakurazaka Channel",
    showSlug: "sakurazaka-channel",
    episodeTitle: "260508 {Sakurazaka Channel} Sub Indo",
    episodeSubtitle:
      "Klub Minecraft Sakurazaka Dimulai! Menggali Banyak Berlian dengan Peta Harta Karun & Jalan Menuju Penaklukan Ender Dragon!",
    episodeNumber: "#",
    releaseDate: "2026-05-08",
    thumbnail: "/images/thumbnails/sakura-channel/260508/sakura-channel-1.jpg",
    previewImage1: "#",
    previewImage2: "#",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260508-sakurazaka-channel-klub-minecraft-sakurazaka-dimulai-menggali-banyak-berlian-dengan-peta-harta-karun-jalan-menuju-penaklukan-ender-dragon-sub-indo-rEC8k",
    rawMp4Url:
      "https://drive.google.com/file/d/1tG-mo-Myg_t87huY6frNyZZVpHNyYqOY/view?usp=sharing",
    description:
      'Segmen kali ini menampilkan keseruan lima member Sakurazaka46—Odakura Reina, Kojima Nagisa, Matono Mio, Nakashima Yuzuki, dan Taniguchi Airi—yang tergabung dalam "Klub Minecraft" untuk menjalankan misi menantang: mengalahkan Ender Dragon. Sebagai tahap persiapan agar menjadi tim yang kuat, mereka melakukan ekspedisi berburu harta karun dengan peta dan menjelajahi Nether untuk mengumpulkan Blaze Rod. Di tengah petualangan yang penuh aksi—termasuk momen panik saat berhadapan dengan Ghast dan zombie, serta keberuntungan Nakashima yang berhasil menemukan berlian dalam jumlah besar—mereka bekerja sama dengan penuh tawa dan kekacauan lucu hingga akhirnya berhasil mengumpulkan bahan yang dibutuhkan. Sisanya bisa ditonton sendiri.',
  },
  {
    id: "ep-284-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260503 {Soko Magattara, Sakurazaka} #284 Sub Indo",
    episodeSubtitle: "Segmen Tes Kekompakan Member BACKS",
    episodeNumber: "Episode 284",
    releaseDate: "2026-05-03",
    thumbnail: "/images/thumbnails/sokomagattara/284/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/284/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/284/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/file/jtznm8hjiy23b38/260503_Soko_Magattara%252C_Sakurazaka_%2523284_Sub_Indo.ass/file",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260503-soko-magattara-sakurazaka-284-sub-indo-FnW5w",
    rawMp4Url:
      "https://www.akari46.com/2026/05/260503-soko-magattara-sakurazaka-284.html",
    description:
      "Eps minggu ini adalah segmen tes kekompakan member BACKS. Member BACKS akan diuji kekompakannya, dan jika berhasil akan mendapat hadiah katering mewah saat Live BACKS nanti. Hadiah paling mewah adalah Steak Sirloin Premium dan jika gagal, hadiah paling rendah adalah bubur dan bahkan cuman topping lemak punggung babi. Catering apa yang berhasil member dapatkan dari tantangan ini. Sisanya bisa ditonton sendiri.",
  },
  {
    id: "ep-009-channel",
    showId: "sakurazaka-channel",
    showName: "Sakurazaka Channel",
    showSlug: "sakurazaka-channel",
    episodeTitle: "260430 {Sakurazaka Channel} Sub Indo",
    episodeSubtitle:
      "Nakagawa Menggenggam Uang 5000 Yen dan Menantang Mesin Capit! Ingin Memberikan Balasan kepada Yamashita!",
    episodeNumber: "#",
    releaseDate: "2026-04-30",
    thumbnail: "/images/thumbnails/sakura-channel/260430/sakura-channel-1.jpg",
    previewImage1: "#",
    previewImage2: "#",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260430-sakurazaka-channel-nakagawa-menggenggam-uang-5000-yen-dan-menantang-mesin-capit-ingin-memberikan-balasan-kepada-yamashita-sub-indo-abEqc",
    rawMp4Url: "https://www.youtube.com/watch?v=plC6FR4aP_4&t=1s",
    description:
      "Segmen kali ini menampilkan Nakagawa Chihiro yang pergi ke sebuah pusat permainan di Yokohama untuk menantang berbagai mesin crane game. Membawa modal sebesar 5000 yen, Chihiro bertekad mendapatkan boneka sebagai hadiah balasan untuk Yamashita Shizuki, sekaligus mencari boneka lainnya untuk Takemoto-san. Dengan keahliannya yang sudah terasah sejak kecil, ia berhasil mendapatkan berbagai macam boneka, termasuk boneka berbentuk kuda, setelah melalui perjuangan dan sedikit bantuan dari manajer. Selain berburu boneka, ia juga mencoba keberuntungannya pada mesin crane game yang berisi hadiah makanan. Sisanya bisa ditonton sendiri.",
  },
  {
    id: "ep-283-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260426 {Soko Magattara, Sakurazaka} #283 Sub Indo",
    episodeSubtitle: "Dibalik Panggung Anniversary Live di Kokuritsu",
    episodeNumber: "Episode 283",
    releaseDate: "2026-04-26",
    thumbnail: "/images/thumbnails/sokomagattara/283/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/283/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/283/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/file/91fk3nddk7yyrg4/260426_Soko_Magattara%252C_Sakurazaka_%2523283_Sub_Indo.ass/file",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260426-soko-magattara-sakurazaka-283-sub-indo-DZdzj",
    rawMp4Url:
      "https://www.akari46.com/2026/04/260426-soko-magattara-sakurazaka-283.html",
    description:
      "Eps minggu ini adalah segmen dibalik panggung Anniversary Live di Kokuritsu. Sawabe dan Ikezaki akan menyelinap ke ruang ganti member untuk memberi semangat ke member Sakurazaka46 dan melihat kegiatan mereka dibalik panggung. Sisanya bisa ditonton sendiri.",
  },
  {
    id: "ep-008-channel",
    showId: "sakurazaka-channel",
    showName: "Sakurazaka Channel",
    showSlug: "sakurazaka-channel",
    episodeTitle: "260422 {Sakurazaka Channel} Sub Indo",
    episodeSubtitle:
      "Meliput Konser Anniversary ke-5 Sakurazaka46 di Stadion Nasional untuk Pertama Kalinya!",
    episodeNumber: "#",
    releaseDate: "2026-04-22",
    thumbnail: "/images/thumbnails/sakura-channel/260422/sakura-channel-1.jpg",
    previewImage1: "#",
    previewImage2: "#",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260422-sakurazaka-channel-meliput-konser-anniversary-ke-5-sakurazaka46-di-stadion-nasional-untuk-pertama-kalinya-sub-indo-gv9Bs",
    rawMp4Url: "https://www.youtube.com/watch?v=KhcNpPgiVsw",
    description:
      "Segmen kali ini menyajikan liputan eksklusif di balik layar hari pertama konser Sakurazaka46 5th Anniversary Live yang megah di National Stadium. Member Sakurazaka46 berbagi antusiasme mereka terhadap panggung yang luar biasa luas dan cuaca yang cerah—kontras dengan hujan deras sehari sebelumnya—serta kesibukan mereka selama latihan dan masa istirahat, mulai dari keceriaan saat berinteraksi dengan sesama member hingga momen santai menikmati katering di area belakang panggung. Sisanya bisa ditonton sendiri.",
  },
  {
    id: "ep-282-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260419 {Soko Magattara, Sakurazaka} #282 Sub Indo",
    episodeSubtitle:
      "Segmen Permainan Kata-Kata, Mencari Member Paling Jago Merangkai Kata-Kata",
    episodeNumber: "Episode 282",
    releaseDate: "2026-04-19",
    thumbnail: "/images/thumbnails/sokomagattara/282/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/282/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/282/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/file/8eoeolk9u3vunyv/260419_Soko_Magattara%252C_Sakurazaka_%2523282_Sub_Indo.ass/file",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260419-soko-magattara-sakurazaka-282-sub-indo-fN4dO",
    rawMp4Url:
      "https://www.akari46.com/2026/04/260419-soko-magattara-sakurazaka-282.html",
    description:
      "Eps minggu ini adalah segmen permainan kata-kata. Dikarenakan permainan kata-kata di pertandingan 4 tim beberapa bulan lalu, ternyata tidak disangka member Sakurazaka banyak yang pandai merangkai kata-kata. Maka kali ini akan diadakan pertandingan permainan kata-kata, dimana akan ditentukan member yang paling jago merangkai kata-kata.",
  },
  {
    id: "ep-281-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260412 {Soko Magattara, Sakurazaka} #281 Sub Indo",
    episodeSubtitle: "Part 2 Penentuan Ratu Serigala Sakurazaka46",
    episodeNumber: "Episode 281",
    releaseDate: "2026-04-12",
    thumbnail: "/images/thumbnails/sokomagattara/281/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/281/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/281/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/file/mj6zol7ub9d9xlb/260412_Soko_Magattara%252C_Sakurazaka_281_Sub_Indo.ass/file",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260412-soko-magattara-sakurazaka-281-sub-indo-W4rH1",
    rawMp4Url:
      "https://www.akari46.com/2026/04/260412-soko-magattara-sakurazaka-281.html",
    description:
      "Eps minggu ini adalah part kedua dari penentuan Ratu Serigala yang sebenarnya. Member akan disuruh untuk berbohong ke member lain secara diam-diam, dengan tema yang telah ditentukan. Member yang berhasil menceritakan tema tersebut tanpa dicurigai akan menjadi Ratu Serigala yang sesungguhnya. Member yang akan mencoba berbohong kali ini adalah Rena, Karin, Odakura, dan Murai. Akankah mereka bisa membawakan kebohongan dengan lancar?",
  },
  {
    id: "ep-007-channel",
    showId: "sakurazaka-channel",
    showName: "Sakurazaka Channel",
    showSlug: "sakurazaka-channel",
    episodeTitle: "260408 {Sakurazaka Channel} Sub Indo",
    episodeSubtitle:
      "Yamakawa Ui Berkemah Solo untuk Pertama Kalinya! Kesulitan Besar Saat Memasang Tenda",
    episodeNumber: "#",
    releaseDate: "2026-04-08",
    thumbnail: "/images/thumbnails/sakura-channel/260408/sakura-channel-1.jpg",
    previewImage1: "#",
    previewImage2: "#",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260408-sakurazaka-channel-yamakawa-ui-berkemah-solo-untuk-pertama-kalinya-kesulitan-besar-saat-memasang-tenda-sub-indo-evvdJ",
    rawMp4Url: "https://www.youtube.com/watch?v=NWQwnkbX_vQ",
    description:
      "Segmen kali ini adalah segmen solo camp pertama dari member Sakurazaka46, Yamakawa Ui, yang akhirnya mewujudkan impiannya untuk berkemah sendirian di tengah alam terbuka. Tantangan utamanya adalah kemandirian, mulai dari mendirikan tenda sendiri, membelah kayu bakar untuk pertama kalinya, hingga memasak cheese fondue dan memanggang daging dengan api unggun yang ia nyalakan sendiri. Meski sempat menghadapi kendala kecil seperti daging yang hampir gosong, pengalaman ini memberikan ketenangan bagi Ui untuk merenung dan menikmati waktu luang yang jarang ia dapatkan sebagai orang yang biasanya lebih suka menghabiskan waktu di rumah. Sisanya bisa ditonton sendiri.",
  },
  {
    id: "ep-280-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260405 {Soko Magattara, Sakurazaka} #280 Sub Indo",
    episodeSubtitle: "Penentuan Ratu Serigala Sakurazaka46",
    episodeNumber: "Episode 280",
    releaseDate: "2026-04-05",
    thumbnail: "/images/thumbnails/sokomagattara/280/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/280/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/280/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/file/3losap744zan09s/260405_Soko_Magattara%252C_Sakurazaka_%2523280_Sub_Indo.ass/file",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260405-soko-magattara-sakurazaka-280-sub-indo-qL67U",
    rawMp4Url:
      "https://www.akari46.com/2026/04/260405-soko-magattara-sakurazaka-280.html",
    description:
      "Eps minggu ini adalah segmen dari penentuan Ratu Serigala yang sebenarnya. Member akan disuruh untuk berbohong ke member lain secara diam-diam, dengan tema yang telah ditentukan. Member yang berhasil menceritakan tema tersebut tanpa dicurigai akan menjadi Ratu Serigala yang sesungguhnya. Member yang akan mencoba berbohong kali ini adalah Morita, Yamashita, Ozono, dan Kosaka. Akankah mereka bisa membawakan kebohongan dengan lancar?",
  },
  {
    id: "ep-006-channel",
    showId: "sakurazaka-channel",
    showName: "Sakurazaka Channel",
    showSlug: "sakurazaka-channel",
    episodeTitle: "260401 {Sakurazaka Channel} Sub Indo",
    episodeSubtitle:
      "Jalan Menuju Mengatasi Kelemahan Yamasaki Ten (20)! Hono dan Kuma Juga Muncul!",
    episodeNumber: "#",
    releaseDate: "2026-04-01",
    thumbnail: "/images/thumbnails/sakura-channel/260401/sakura-channel-1.jpg",
    previewImage1: "#",
    previewImage2: "#",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260401-sakurazaka-channel-jalan-menuju-mengatasi-kelemahan-yamasaki-ten-20-hono-dan-kuma-juga-muncul-sub-indo-OKcU3",
    rawMp4Url: "https://www.youtube.com/watch?v=wXN-lY3xBRE",
    description:
      "Eps minggu ini adalah segmen tantangan mental member Sakurazaka46, Yamazaki Ten, yang berusaha mengatasi berbagai ketakutannya yang sudah mulai mengganggu pekerjaan di usia 20 tahun. Tantangan ini mencakup beberapa tahap, mulai dari mencoba makanan yang mengandung wasabi dan karashi (mustard Jepang), hingga menghadapi hal yang paling ia takuti: kostum maskot dan hewan kecil. Dengan bantuan Hono, Ten mencoba menaklukkan rasa takutnya terhadap hewan seperti kelinci dan anak ayam, bahkan berhasil menyentuhnya secara langsung. Sisanya bisa ditonton sendiri.",
  },
  {
    id: "ep-279-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260329 {Soko Magattara, Sakurazaka} #279 Sub Indo",
    episodeSubtitle: "Part 2 Segmen Kuisioner Orang Tua Member Generasi ke-4",
    episodeNumber: "Episode 279",
    releaseDate: "2026-03-29",
    thumbnail: "/images/thumbnails/sokomagattara/279/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/279/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/279/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/folder/lvgax7iiyth3h/260329_Soko_Magattara%2C_Sakurazaka_%23279_Sub_Indo",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260329-soko-magattara-sakurazaka-279-sub-indo-BVlLs",
    rawMp4Url:
      "https://www.akari46.com/2026/03/260329-soko-magattara-sakurazaka-279.html",
    description:
      "Eps minggu ini adalah part kedua dari segmen kuisioner orang tua member generasi ke-4. Orang tua member akan memberikan informasi-informasi unik, seperti keahlian khusus, sifat-sifat member saat dikeluarganya, dan rahasia-rahasia lainnya yang hanya diketahui oleh keluarga member generasi ke-4. Akan ada juga segmen kilas balik beberapa member gen 4 yang ditampilkan cerita dan foto masa kecil mereka. Dan di akhir segmen akan ada salah satu orang tua member yang muncul.",
  },
  {
    id: "ep-005-channel",
    showId: "sakurazaka-channel",
    showName: "Sakurazaka Channel",
    showSlug: "sakurazaka-channel",
    episodeTitle: "260324 {Sakurazaka Channel} Sub Indo",
    episodeSubtitle:
      "Bagian Kedua Perjalanan Sendirian Yuzu Naik Kereta Nishitetsu! Mencari Belut Yanagawa di Fukuoka!",
    episodeNumber: "#",
    releaseDate: "2026-03-24",
    thumbnail: "/images/thumbnails/sakura-channel/260324/sakura-channel-1.jpg",
    previewImage1: "#",
    previewImage2: "#",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260324-sakurazaka-channel-bagian-kedua-perjalanan-sendirian-yuzu-naik-kereta-nishitetsu-mencari-belut-yanagawa-di-fukuoka-sub-indo-j6OfH",
    rawMp4Url: "https://www.youtube.com/watch?v=FCMrKuziVjA",
    description:
      "Eps kali ini adalah segmen perjalanan solo Nakashima Yuzuki, yang kembali menjelajahi kenangan masa sekolahnya di Fukuoka dengan menaiki kereta Nishitetsu. Tantangan pribadinya adalah mengeksplorasi tempat-tempat baru seperti Yanagawa—termasuk menikmati unagi (belut) di Wakamatsuya dan menyusuri sungai menggunakan perahu—serta mengunjungi toko roti kukus favoritnya di Stasiun Daizenji. Perjalanan santai ini juga menjadi ajang nostalgia bagi Yuzu yang sempat bekerja paruh waktu di pusat perbelanjaan Shintencho sebelum akhirnya menutup petualangannya dengan rencana untuk mencoba kedai yatai di kesempatan mendatang. Sisanya bisa ditonton sendiri.",
  },
  {
    id: "ep-278-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260322 {Soko Magattara, Sakurazaka} #278 Sub Indo",
    episodeSubtitle: "Part 1 Segmen Kuisioner Orang Tua Member Generasi ke-4",
    episodeNumber: "Episode 278",
    releaseDate: "2026-03-24",
    thumbnail: "/images/thumbnails/sokomagattara/278/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/278/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/278/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/folder/j2f61zxfv9g3u/260322_Soko_Magattara%2C_Sakurazaka_%23278_Sub_Indo",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260322-soko-magattara-sakurazaka-278-sub-indo-481A3",
    rawMp4Url:
      "https://www.akari46.com/2026/03/260322-soko-magattara-sakurazaka-278.html",
    description:
      "Eps minggu ini adalah part pertama dari segmen kuisioner orang tua member generasi ke-4. Orang tua member akan memberikan informasi-informasi unik, seperti keahlian khusus, sifat-sifat member saat dikeluarganya, dan rahasia-rahasia lainnya yang hanya diketahui oleh keluarga member generasi ke-4. Di akhir segmen juga beberapa member gen 4 yang ditampilkan cerita dan foto masa kecil mereka.",
  },
  {
    id: "ep-004-channel",
    showId: "sakurazaka-channel",
    showName: "Sakurazaka Channel",
    showSlug: "sakurazaka-channel",
    episodeTitle: "260318 {Sakurazaka Channel} Sub Indo",
    episodeSubtitle:
      "Idol Akiho Onuma Membedah Ikan Kanburi (Yellowtail) Seberat 8kg! Bahkan Membawa Pisau Sendiri!",
    episodeNumber: "#",
    releaseDate: "2026-03-18",
    thumbnail: "/images/thumbnails/sakura-channel/260318/sakura-channel-1.jpg",
    previewImage1: "#",
    previewImage2: "#",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/250318-sakurazaka-channel-idol-akiho-onuma-membedah-ikan-kanburi-yellowtail-seberat-8kg-bahkan-membawa-pisau-sendiri-sub-indo-ubWW0",
    rawMp4Url:
      "https://www.youtube.com/watch?v=zTTh3hxakpE&pp=0gcJCUELAYcqIYzv",
    description:
      "Eps kali ini adalah segmen tantangan memotong ikan raksasa yang dilakukan oleh Onuma Akiho, di Tsukiji Uogashi. Tantangan utamanya adalah memotong ikan kanburi seberat 8 kg—rekor ikan terbesar yang pernah ia potong seumur hidupnya—yang bahkan sempat membuatnya kewalahan karena ukuran dan ketebalan tulangnya. Setelah perjuangan selama 4 jam, ia berhasil mengolah hasil potongannya menjadi berbagai hidangan lezat seperti shabu-shabu, sashimi, goma buri, dan buri kama sebagai bentuk penghargaannya terhadap ikan tersebut. Sisanya bisa ditonton sendiri.",
  },
  {
    id: "ep-277-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260315 {Soko Magattara, Sakurazaka} #277 Sub Indo",
    episodeSubtitle: "Segmen Berita dari Member Sakurazaka46",
    episodeNumber: "Episode 277",
    releaseDate: "2026-03-15",
    thumbnail: "/images/thumbnails/sokomagattara/277/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/277/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/277/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/folder/y7ynqmwgik6de/260315_Soko_Magattara%2C_Sakurazaka_%23277_Sub_Indo",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260315-soko-magattara-sakurazaka-277-sub-indo-NyUrh",
    rawMp4Url:
      "https://www.akari46.com/2026/03/260315-soko-magattara-sakurazaka-277.html",
    description:
      "Eps minggu ini adalah segmen berita dari member Sakurazaka46. Member akan membawakan berita-berita terbaru, dimana member tertentu akhirnya melakukan sesuatu untuk sekian lamanya. Banyak hal baru tentang member yang terungkap disini.",
  },
  {
    id: "ep-276-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260308 {Soko Magattara, Sakurazaka} #276 Sub Indo",
    episodeSubtitle:
      "Hit Campaign Single ke-14 Sakurazaka46, Mengunjungi 3 Kuil di Kanto",
    episodeNumber: "Episode 276",
    releaseDate: "2026-03-08",
    thumbnail: "/images/thumbnails/sokomagattara/276/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/276/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/276/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/folder/puhtzo511zm40/260308_Soko_Magattara%2C_Sakurazaka_%23276_Sub_Indo",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260308-soko-magattara-sakurazaka-276-sub-indo-hCJW7",
    rawMp4Url:
      "https://www.akari46.com/2026/03/260308-soko-magattara-sakurazaka-276.html",
    description:
      "Eps minggu ini adalah segmen hit campaign single ke-14 Sakurazaka46. Karena ini adalah single pertama untuk generasi ke-4 yang masuk ke senbatsu, maka hit campaign single kali ini adalah Karin-chan dan 3 member generasi ke-4 yang masuk senbatsu, Asai, Sato, dan Yamakawa akan pergi ke 3 kuil di daerah Kanto dalam sehari, dengan total jarak lebih dari 70km. Apakah mereka akan berhasil menyampaikan doa hit campaign kali ini.",
  },
  {
    id: "ep-003-channel",
    showId: "sakurazaka-channel",
    showName: "Sakurazaka Channel",
    showSlug: "sakurazaka-channel",
    episodeTitle: "260305 {Sakurazaka Channel} Sub Indo",
    episodeSubtitle:
      "Kojima Nagisa yang Khawatir dan Murai Yuu yang Ngebut Ikut Turun ke Lereng Ski!",
    episodeNumber: "#",
    releaseDate: "2026-03-05",
    thumbnail: "/images/thumbnails/sakura-channel/260305/sakura-channel-1.jpg",
    previewImage1: "#",
    previewImage2: "#",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260305-sakurazaka-channel-kojima-nagisa-yang-khawatir-dan-murai-yuu-yang-ngebut-ikut-turun-ke-lereng-ski-sub-indo-OT7wF",
    rawMp4Url: "https://www.youtube.com/watch?v=NK2vG5-7Vhw",
    description:
      'Eps kali ini adalah segmen liburan musim dingin Murai Yu dan Kojima Nagisa, yang mencoba kembali mengasah kemampuan ski mereka di lereng ski Karuizawa, Nagano. Tantangan utamanya adalah mengatasi rasa cemas karena sudah sekitar 10 tahun tidak bermain ski, sekaligus menghadapi medan lereng yang cukup curam. Meski awalnya sempat ragu dan kesulitan, mereka akhirnya berhasil menaklukkan puncak tertinggi dan menikmati pemandangan indah, bahkan sempat membuat janji untuk membentuk "klub ski" Sakurazaka46 di masa depan. Sisanya bisa ditonton sendiri.',
  },
  {
    id: "ep-275-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260301 {Soko Magattara, Sakurazaka} #275 Sub Indo",
    episodeSubtitle: "Grand Prix Ekspresi Puas Sakurazaka46",
    episodeNumber: "Episode 275",
    releaseDate: "2026-03-01",
    thumbnail: "/images/thumbnails/sokomagattara/275/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/275/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/275/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/folder/siytz7imfsem7/260301_Soko_Magattara%2C_Sakurazaka_%23275_Sub_Indo",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260301-soko-magattara-sakurazaka-275-sub-indo-WiIbo",
    rawMp4Url:
      "https://www.akari46.com/2026/03/260301-soko-magattara-sakurazaka-275.html",
    description:
      "Eps minggu ini adalah segmen grand prix ekspresi puas. Member akan menunjukkan skill-skill hebat mereka, lalu mengakhirinya dengan ekspresi memuaskan. Banyak momen-momen lucu dari pertunjukan skill oleh para member ini. Sisanya bisa ditonton sendiri.",
  },
  {
    id: "ep-002-channel",
    showId: "sakurazaka-channel",
    showName: "Sakurazaka Channel",
    showSlug: "sakurazaka-channel",
    episodeTitle: "260226 {Sakurazaka Channel} Sub Indo",
    episodeSubtitle:
      "Moriya Rena x Memancing! Memancing Ikan Wakasagi di Atas Es di Danau Akagi Onuma!",
    episodeNumber: "#",
    releaseDate: "2026-02-26",
    thumbnail: "/images/thumbnails/sakura-channel/260226/sakura-channel-1.jpg",
    previewImage1: "#",
    previewImage2: "#",
    downloadUrl: "#",
    mediafireUrl: "#",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260226-sakurazaka-channel-moriya-rena-x-memancing-memancing-ikan-wakasagi-di-atas-es-di-danau-akagi-onuma-sub-indo-7CrWD",
    rawMp4Url: "https://www.youtube.com/watch?v=-TAj2pFEnW8",
    description:
      "Eps kali ini adalah segmen tantangan dari Moriya Rena, yang mencoba mewujudkan impiannya memancing ikan wakasagi di Danau Akagi Onuma yang membeku. Tantangan utamanya kali ini adalah bertahan di tengah cuaca ekstrem dan medan es yang licin untuk mendapatkan minimal 10 ekor ikan sebagai target pribadinya. Meski sempat mengalami kesulitan teknis saat melubangi es dan ikan yang tak kunjung memakan umpan, kejutan manis menanti di akhir segmen.",
  },
  {
    id: "ep-274-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260222 {Soko Magattara, Sakurazaka} #274 Sub Indo",
    episodeSubtitle: "Peningkatan Kemampuan Generasi ke-4 di Dunia Variety",
    episodeNumber: "Episode 274",
    releaseDate: "2026-02-22",
    thumbnail: "/images/thumbnails/sokomagattara/274/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/274/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/274/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/folder/6zghvxc0izcei/260222_Soko_Magattara%2C_Sakurazaka_%23274_Sub_Indo",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260222-soko-magattara-sakurazaka-274-sub-indo-5vKYk",
    rawMp4Url:
      "https://www.akari46.com/2026/02/260222-soko-magattara-sakurazaka-274.html",
    description:
      "Eps minggu ini adalah segmen peningkatan kemampuan Generasi ke-4 dalam berkomentar di dunia variety. Gen 4 akan disuruh untuk tes teriakan suara, adu komentar, dan komentar spontan dalam pertandingan tarik tambang.",
  },
  {
    id: "ep-273-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260215 {Soko Magattara, Sakurazaka} #273 Sub Indo",
    episodeSubtitle: "Penentuan Ratu Terlemah Sakurazaka46",
    episodeNumber: "Episode 273",
    releaseDate: "2026-02-15",
    thumbnail: "/images/thumbnails/sokomagattara/273/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/273/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/273/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/folder/uiezjnwxavs77/260215_Soko_Magattara%2C_Sakurazaka_%23273_Sub_Indo",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260215-soko-magattara-sakurazaka-273-sub-indo-34Gz5",
    rawMp4Url:
      "https://www.akari46.com/2026/02/260215-soko-magattara-sakurazaka-273.html",
    description:
      "Eps minggu ini adalah penentuan ratu terlemah di Sakurazaka46. Member akan dites di beberapa bidang seperti adu kecepatan, adu kecerdasan, dan ketangkasan. Pertandingan yang akan dilombakan yaitu adu balap bendera pantai, hitung cepat, dan gunting batu kertas dengan palu dan helm. Lalu member yang kalah akan menjadi ratu terlemah di Sakurazaka46.",
  },
  {
    id: "ep-272-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260208 {Soko Magattara, Sakurazaka} #272 Sub Indo",
    episodeSubtitle:
      "Part 2 Segmen Pertarungan 4 Tim untuk Merayakan Tahun Baru 2026, Tahun Kuda",
    episodeNumber: "Episode 272",
    releaseDate: "2026-02-08",
    thumbnail: "/images/thumbnails/sokomagattara/272/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/272/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/272/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/folder/z15fmv0rgozlu/260208_Soko_Magattara%2C_Sakurazaka_%23272_Sub_Indo",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260208-soko-magattara-sakurazaka-272-sub-indo-6VcUU",
    rawMp4Url:
      "https://www.akari46.com/2026/02/260208-soko-magattara-sakurazaka-272.html",
    description:
      "Eps minggu ini adalah part 2 dari segmen pertarungan 4 tim untuk merayakan datangnya tahun baru 2026, Tahun Kuda. Di part kali ini ada adu tarik tambang, adu keakuratan lempar bola, adu susun kata, dan adu kekompakan. Di part ini kita akan melihat pemenangnya.",
  },
  {
    id: "ep-271-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260201 {Soko Magattara, Sakurazaka} #271 Sub Indo",
    episodeSubtitle:
      "Part 1 Segmen Pertarungan 4 Tim untuk Merayakan Tahun Baru 2026, Tahun Kuda",
    episodeNumber: "Episode 271",
    releaseDate: "2026-02-08",
    thumbnail: "/images/thumbnails/sokomagattara/271/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/271/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/271/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/folder/v9nthhkdfhym7/260201_Soko_Magattara%2C_Sakurazaka_%23271_Sub_Indo",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260201-soko-magattara-sakurazaka-271-sub-indo-dcBXw",
    rawMp4Url:
      "https://www.akari46.com/2026/02/260201-soko-magattara-sakurazaka-271.html?m=1",
    description:
      "Eps minggu ini adalah part 1 dari segmen pertarungan 4 tim untuk merayakan datangnya tahun baru 2026, Tahun Kuda. Member akan dibagi menjadi 4 tim, dan tim terbaik akan mendapatkan hadiah dessert yang enak. Di akhir segmen akan diumumkan juga formasi senbatsu single ke-14.",
  },
  {
    id: "ep-270-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260125 {Soko Magattara, Sakurazaka} #270 Sub Indo",
    episodeSubtitle:
      "Part 2 Segmen Tes Kecerdasan untuk Menentukan Ratu Terpintar dan Terbodoh Sakurazaka46",
    episodeNumber: "Episode 270",
    releaseDate: "2026-01-25",
    thumbnail: "/images/thumbnails/sokomagattara/270/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/270/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/270/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/folder/vpz1amhi3fk3u/260125_Soko_Magattara%2C_Sakurazaka_%23270_Sub_Indo",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260125-soko-magattara-sakurazaka-270-sub-indo-YhOqq",
    rawMp4Url:
      "https://www.akari46.com/2026/01/260125-soko-magattara-sakurazaka-270.html",
    description:
      "Eps minggu ini adalah part 2 dari segmen tes kecerdasan untuk Sakurazaka46. Karena saat ini ada Gen 4 masuk, ranking kecerdasan untuk para member akan dites lagi disini. Di part kali ini akan ditentukan Ratu terpintar dan terbodoh terbaru di Sakurazaka46.",
  },
  {
    id: "ep-269-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260118 {Soko Magattara, Sakurazaka} #269 Sub Indo",
    episodeSubtitle:
      "Part 1 Segmen Tes Kecerdasan untuk Menentukan Ratu Terpintar dan Terbodoh Sakurazaka46",
    episodeNumber: "Episode 269",
    releaseDate: "2026-01-18",
    thumbnail: "/images/thumbnails/sokomagattara/269/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/269/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/269/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/folder/ocyuk7kp53175/260118_Soko_Magattara%2C_Sakurazaka_%23269_Sub_Indo",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260118-soko-magattara-sakurazaka-269-sub-indo-SZ7s7",
    rawMp4Url:
      "https://www.akari46.com/2026/01/260118-soko-magattara-sakurazaka-269.html",
    description:
      "Eps minggu ini adalah part 1 dari segmen tes kecerdasan untuk Sakurazaka46. Karena saat ini ada Gen 4 masuk, ranking kecerdasan untuk para member akan dites lagi disini. Apakah Katsumata sebagai mahasiswa Universitas Kyoto mampu menyalip ranking Odakura sebagai pemegang ranking tertinggi di tes sebelumnya?",
  },
  {
    id: "ep-268-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260111 {Soko Magattara, Sakurazaka} #268 Sub Indo",
    episodeSubtitle: "Part 2 Segmen Ramalan 2026 untuk Sakurazaka46",
    episodeNumber: "Episode 268",
    releaseDate: "2026-01-11",
    thumbnail: "/images/thumbnails/sokomagattara/268/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/268/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/268/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/folder/n7mtk2zy7wn0i/260111_Soko_Magattara%2C_Sakurazaka_%23268_Sub_Indo",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260111-soko-magattara-sakurazaka-268-sub-indo-F1629",
    rawMp4Url:
      "https://www.akari46.com/2026/01/260111-soko-magattara-sakurazaka-268.html",
    description:
      "Eps minggu ini adalah part 2 dari segmen ramalan 2026 untuk Sakurazaka46. Member akan memberikan ide-ide mereka yang ingin diramal, lalu mereka akan diramal oleh Yocchan mengenai hal-hal yang akan terjadi pada mereka di 2026 nanti. Di part kali ini ada Shizuki, Tenchan, Inaguma, Chihiro, dan Katsumata yang akan diramal. Lalu diakhir, Yocchan akan meramal grup Sakurazaka46 selama 2026 setahun kedepan.",
  },
  {
    id: "ep-267-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "260104 {Soko Magattara, Sakurazaka} #267 Sub Indo",
    episodeSubtitle: "Part 1 Segmen Ramalan 2026 untuk Sakurazaka46",
    episodeNumber: "Episode 267",
    releaseDate: "2026-01-04",
    thumbnail: "/images/thumbnails/sokomagattara/267/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/267/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/267/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/folder/7wa7wdqifujue/260104_Soko_Magattara%2C_Sakurazaka_%23267_Sub_Indo",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/260104-soko-magattara-sakurazaka-267-hardsub-indo-cpgH7",
    rawMp4Url:
      "https://www.akari46.com/2026/01/260104-soko-magattara-sakurazaka-267.html",
    description:
      "Eps minggu ini adalah part 1 dari segmen ramalan 2026 untuk Sakurazaka46. Member akan memberikan ide-ide mereka yang ingin diramal, lalumMereka akan diramal oleh Yocchan mengenai hal-hal yang akan terjadi pada mereka di 2026 nanti. Tsuchida-san akan menyeleksi dulu topik yang menarik untuk diramal oleh Yocchan.",
  },
  {
    id: "ep-266-soko",
    showId: "sokomagattara",
    showName: "Sokomagattara, Sakurazaka?",
    showSlug: "sokomagattara",
    episodeTitle: "251221 {Soko Magattara, Sakurazaka} #266 Sub Indo",
    episodeSubtitle:
      "Episode Kelulusan Inoue Rina, Menyelesaikan Hal-Hal yang Mengganjal",
    episodeNumber: "Episode 266",
    releaseDate: "2025-12-21",
    thumbnail: "/images/thumbnails/sokomagattara/266/sokomagattara-1.png",
    previewImage1: "/images/thumbnails/sokomagattara/266/sokomagattara-2.png",
    previewImage2: "/images/thumbnails/sokomagattara/266/sokomagattara-3.png",
    downloadUrl: "#",
    mediafireUrl:
      "https://www.mediafire.com/folder/kwt6kdxqq24si/251221_Soko_Magattara%2C_Sakurazaka_%23266_Sub_Indo",
    trakteerUrl:
      "https://trakteer.id/hikaleon/reward/251221-soko-magattara-sakurazaka-266-sub-indo-ecPkb",
    rawMp4Url:
      "https://www.akari46.cloud/2025/12/251221-soko-magattara-sakurazaka-266.html",
    description:
      "Eps minggu ini adalah eps kelulusan Inoue Rina. Sebelum ia lulus dengan tenang, Inoue ingin menyelesaikan hal-hal yang masih mengganjal di Sokosaku, seperti akting sebagai cewe, tebak minuman jus jeruk, dan adu kekuatan sumo.",
  },
];

export const latestEpisodes = episodes.slice(0, 3);
export const feedEpisodes = episodes;
