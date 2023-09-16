const express = require("express");
const app = express();
const cors= require('cors')
app.use(cors())
let port = 4500;

songs = [
  {
    id: 1,
    artiste_name: "Yadah",
    category: "Gospel",
    album_title: "Fathered By The Best Album",
    track_name: "With Me",
    album_cover:
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1694862322/Yadah-Fathered-by-the-best-Album-Art1_wbpesd.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1694864176/Yadah-With-me-_TrendyBeatz.com_brdvy7.mp3",
      
    recorded: "2023 Music",
    country: "Naija Music",
  },
  {
    id: 2,
    artiste_name: "Yadah",
    category: "Gospel",
    album_title: "Fathered By The Best Album",
    track_name: "Never Seen",
    album_cover:
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1694862322/Yadah-Fathered-by-the-best-Album-Art1_wbpesd.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1694864313/Yadah-Never-seen-_TrendyBeatz.com_sztfoh.mp3",
    recorded: "2023 Music",
    country: "Naija Music",
  },
  {
    id: 3,
    artiste_name: "Yadah",
    category: "Gospel",
    album_title: "Fathered By The Best Album",
    track_name: "Ijuru Eligwe J'uwa",
    album_cover:
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1694862322/Yadah-Fathered-by-the-best-Album-Art1_wbpesd.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1694864544/Yadah-Ijuru-Eligwe-j-uwa-_TrendyBeatz.com_daini1.mp3",
    recorded: "2023 Music",
    country: "Naija Music",
  },
  {
    id: 4,
    artiste_name: "Yadah",
    category: "Gospel",
    album_title: "Fathered By The Best Album",
    track_name: "By Yourself",
    album_cover:
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1694862322/Yadah-Fathered-by-the-best-Album-Art1_wbpesd.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1694864655/Yadah-By-Yourself-_TrendyBeatz.com_ckd8kc.mp3",
    recorded: "2023 Music",
    country: "Naija Music",
  },
  {
    id: 5,
    artiste_name: "Yadah",
    category: "Gospel",
    album_title: "Fathered By The Best Album",
    track_name: "Onye Nwere Jesus",
    album_cover:
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1694862322/Yadah-Fathered-by-the-best-Album-Art1_wbpesd.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1694864747/Yadah-Onye-nwere-Jesus-_TrendyBeatz.com_dpfdr2.mp3",
    recorded: "2023 Music",
    country: "Naija Music",
  },
  {
    id: 6,
    artiste_name: "Yadah",
    category: "Gospel",
    album_title: "Fathered By The Best Album",
    track_name: "What Do I Have",
    album_cover:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1694864840/Yadah-What-do-I-have-_TrendyBeatz.com_jszdt9.mp3",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1693566516/Yadah-What-do-I-have-_TrendyBeatz.com_zxjoxk.mp3",
    recorded: "2023 Music",
    country: "Naija Music",
  },
  {
    id: 7,
    artiste_name: "Yadah",
    category: "Gospel",
    album_title: "Fathered By The Best Album",
    track_name: "Obaruba",
    album_cover:
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1694862322/Yadah-Fathered-by-the-best-Album-Art1_wbpesd.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1694864937/Yadah-Obaruba-_TrendyBeatz.com_j523pr.mp3",
    recorded: "2023 Music",
    country: "Naija Music",
  },
  {
    id: 8,
    artiste_name: "Yadah",
    category: "Gospel",
    album_title: "Fathered By The Best Album",
    track_name: "Na Your hand",
    album_cover:
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1694862322/Yadah-Fathered-by-the-best-Album-Art1_wbpesd.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1694865026/Yadah-Na-Your-Hand-_TrendyBeatz.com_bwe8bn.mp3",
    recorded: "2023 Music",
    country: "Naija Music",
  },
  {
    id: 9,
    artiste_name: "Yadah",
    category: "Gospel",
    album_title: "Fathered By The Best Album",
    track_name: "Kelerem Chimo",
    album_cover:
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1694862322/Yadah-Fathered-by-the-best-Album-Art1_wbpesd.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1694865116/Yadah-Kelerem-chimo-_TrendyBeatz.com_a8kbro.mp3",
    recorded: "2023 Music",
    country: "Naija Music",
  },
  {
    id: 10,
    artiste_name: "Yadah",
    category: "Gospel",
    album_title: "Fathered By The Best Album",
    track_name: "Father",
    album_cover:
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1694862322/Yadah-Fathered-by-the-best-Album-Art1_wbpesd.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1694865196/Yadah-Father-_TrendyBeatz.com_zub6pw.mp3",
    recorded: "2023 Music",
    country: "Naija Music",
  },
  {
    id: 11,
    artiste_name: "Yadah",
    category: "Gospel",
    album_title: "Fathered By The Best Album",
    track_name: "Bless The Lord",
    album_cover:
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1694862322/Yadah-Fathered-by-the-best-Album-Art1_wbpesd.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1694865299/Yadah-Bless-the-Lord-_TrendyBeatz.com_xch0vy.mp3",
    recorded: "2023 Music",
    country: "Naija Music",
  },
  {
    id: 12,
    artiste_name: "Frank Edwards",
    category: "Gospel",
    album_title: "The Afro Gospel EP Album",
    track_name: "Nothing Impossible Afro",
    album_cover:
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1694865402/Frank-Edwards-The-Afro-Gospel-EPArtwork1_i9owex.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1694865712/Frank-Edwards-Nothing-Impossible-Afro-_TrendyBeatz.com_dsn0ky.mp3",
    recorded: "2023 Music",
    country: "Naija Music",
  },
  {
    id: 13,
    artiste_name: "Frank Edwards",
    category: "Gospel",
    album_title: "The Afro Gospel EP Album",
    track_name: "Holy Afro",
    album_cover:
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1694865402/Frank-Edwards-The-Afro-Gospel-EPArtwork1_i9owex.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1694865836/Frank-Edwards-Holy-Afro-_TrendyBeatz.com_vfanal.mp3",
    recorded: "2023 Music",
    country: "Naija Music",
  },
  {
    id: 14,
    artiste_name: "Frank Edwards",
    category: "Gospel",
    album_title: "The Afro Gospel EP Album",
    track_name: "Hallelujah Afro",
    album_cover:
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1694865402/Frank-Edwards-The-Afro-Gospel-EPArtwork1_i9owex.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1694865919/Frank-Edwards-Hallelujah-Afro-_TrendyBeatz.com_onk6xk.mp3",
    recorded: "2023 Music",
    country: "Naija Music",
  },
  {
    id: 15,
    artiste_name: "TY Bello",
    category: "Gospel",
    album_title: "Heaven Has Come Album",
    track_name: "Oh Jesu ft Tope Alabi",
    album_cover:
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1694866118/Ty-Bello-Heaven-Has-Come-AlbumArtwork1_bx6lfh.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1694866261/Ty-Bello-Ft-Tope-Alabi-Oh-Jesu-_TrendyBeatz.com_1_jpstnf.mp3",
    recorded: "2023 Music",
    country: "Naija Music",
  },
  {
    id: 16,
    artiste_name: "TY Bello",
    category: "Gospel",
    album_title: "Heaven Has Come Album",
    track_name: "He Fights For Me ft Tomi Covered Grace, Omosebi, 121Selah",
    album_cover:
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1694866118/Ty-Bello-Heaven-Has-Come-AlbumArtwork1_bx6lfh.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1694866426/Ty-Bello-Ft-Tomi-Favored-Grace-Omosebi-and-121Selah-He-Fights-For-Me-_TrendyBeatz.com_mxuyhv.mp3",
    recorded: "2023 Music",
    country: "Naija Music",
  },
  {
    id: 17,
    artiste_name: "TY Bello",
    category: "Gospel",
    album_title: "Heaven Has Come Album",
    track_name: "Closer Than Close ft Sunmisola Agbebi, Isi Igenegba",
    album_cover:
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1694866118/Ty-Bello-Heaven-Has-Come-AlbumArtwork1_bx6lfh.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1694866542/Ty-Bello-Ft-Sunmisola-Agbebi-and-Isi-Igenegba-Closer-Than-Close-_TrendyBeatz.com_xd282s.mp3",
    recorded: "2023 Music",
    country: "Naija Music",
  },
  {
    id: 18,
    artiste_name: "TY Bello",
    category: "Gospel",
    album_title: "Heaven Has Come Album",
    track_name: "Fill Us ft Ko'rale",
    album_cover:
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1694866118/Ty-Bello-Heaven-Has-Come-AlbumArtwork1_bx6lfh.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1694867491/Ty-Bello-Ft-Ko-rale-Fill-Us-_TrendyBeatz.com_p5x6g6.mp3",
    recorded: "2023 Music",
    country: "Naija Music",
  },
  {
    id: 19,
    artiste_name: "TY Bello",
    category: "Gospel",
    album_title: "Heaven Has Come Album",
    track_name: "Because You Are God ft ighiwiyisi Jacobs",
    album_cover:
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1694866118/Ty-Bello-Heaven-Has-Come-AlbumArtwork1_bx6lfh.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1694867583/Ty-Bello-Ft-Ighiwiyisi-Jacobs-Because-You-Are-God-_TrendyBeatz.com_xfeyxh.mp3",
    recorded: "2023 Music",
    country: "Naija Music",
  },
  {
    id: 20,
    artiste_name: "TY Bello",
    category: "Gospel",
    album_title: "Heaven Has Come Album",
    track_name: "Torrents ft Jo Deep",
    album_cover:
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1694866118/Ty-Bello-Heaven-Has-Come-AlbumArtwork1_bx6lfh.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1694867668/Ty-Bello-Ft-Jo-Deep-Torrents-_TrendyBeatz.com_en9nax.mp3",
    recorded: "2023 Music",
    country: "Naija Music",
  }
  
];
app.get("/", (req, res) => {
  console.log(songs);
  res.send(songs);
});
app.listen(port, () => {
  console.log(`port is working on ${port}`);
});
