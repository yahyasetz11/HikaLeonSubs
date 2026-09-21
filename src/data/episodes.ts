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
    episodeSubtitle: "Pertarungan Perebutan Gelar Chokotto Queen",
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
];

export const latestEpisodes = episodes.slice(0, 3);
export const feedEpisodes = episodes;
