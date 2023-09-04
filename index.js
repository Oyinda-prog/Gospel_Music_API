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
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1693565371/Yadah-Fathered-by-the-best-Album-Art1_ot6u2b.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1693565464/Yadah-With-me-_TrendyBeatz.com_usjrce.mp3",
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
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1693565371/Yadah-Fathered-by-the-best-Album-Art1_ot6u2b.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1693565663/Yadah-Never-seen-_TrendyBeatz.com_oj6tik.mp3",
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
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1693565371/Yadah-Fathered-by-the-best-Album-Art1_ot6u2b.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1693565810/Yadah-Ijuru-Eligwe-j-uwa-_TrendyBeatz.com_yd5vea.mp3",
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
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1693565371/Yadah-Fathered-by-the-best-Album-Art1_ot6u2b.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1693566119/Yadah-By-Yourself-_TrendyBeatz.com_vnfkwo.mp3",
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
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1693565371/Yadah-Fathered-by-the-best-Album-Art1_ot6u2b.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1693566336/Yadah-Onye-nwere-Jesus-_TrendyBeatz.com_f2yyp3.mp3",
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
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1693565371/Yadah-Fathered-by-the-best-Album-Art1_ot6u2b.jpg",
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
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1693565371/Yadah-Fathered-by-the-best-Album-Art1_ot6u2b.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1693567600/Yadah-Obaruba-_TrendyBeatz.com_jjibfb.mp3",
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
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1693565371/Yadah-Fathered-by-the-best-Album-Art1_ot6u2b.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1693568436/Yadah-Na-Your-Hand-_TrendyBeatz.com_wemokk.mp3",
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
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1693565371/Yadah-Fathered-by-the-best-Album-Art1_ot6u2b.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1693568601/Yadah-Kelerem-chimo-_TrendyBeatz.com_vv1xxc.mp3",
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
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1693565371/Yadah-Fathered-by-the-best-Album-Art1_ot6u2b.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1693568873/Yadah-Father-_TrendyBeatz.com_lnzjjf.mp3",
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
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1693565371/Yadah-Fathered-by-the-best-Album-Art1_ot6u2b.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1693569311/Yadah-Bless-the-Lord-_TrendyBeatz.com_o7o3iz.mp3",
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
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1693569562/Frank-Edwards-The-Afro-Gospel-EPArtwork1_crvt3d.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1693570084/Frank-Edwards-Nothing-Impossible-Afro-_TrendyBeatz.com_qgbyyx.mp3",
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
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1693569562/Frank-Edwards-The-Afro-Gospel-EPArtwork1_crvt3d.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1693570386/Frank-Edwards-Holy-Afro-_TrendyBeatz.com_1_ofqtdz.mp3",
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
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1693569562/Frank-Edwards-The-Afro-Gospel-EPArtwork1_crvt3d.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1693570910/Frank-Edwards-Hallelujah-Afro-_TrendyBeatz.com_me09d7.mp3",
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
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1693571137/Ty-Bello-Heaven-Has-Come-AlbumArtwork1_ov2j9e.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1693571327/Ty-Bello-Ft-Tope-Alabi-Oh-Jesu-_TrendyBeatz.com_1_ycfftp.mp3",
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
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1693571137/Ty-Bello-Heaven-Has-Come-AlbumArtwork1_ov2j9e.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1693571681/Ty-Bello-Ft-Tomi-Favored-Grace-Omosebi-and-121Selah-He-Fights-For-Me-_TrendyBeatz.com_bsjgiq.mp3",
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
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1693571137/Ty-Bello-Heaven-Has-Come-AlbumArtwork1_ov2j9e.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1693572386/Ty-Bello-Ft-Sunmisola-Agbebi-and-Isi-Igenegba-Closer-Than-Close-_TrendyBeatz.com_xvfjt4.mp3",
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
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1693571137/Ty-Bello-Heaven-Has-Come-AlbumArtwork1_ov2j9e.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1693572201/Ty-Bello-Ft-Ko-rale-Fill-Us-_TrendyBeatz.com_gkyu9j.mp3",
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
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1693571137/Ty-Bello-Heaven-Has-Come-AlbumArtwork1_ov2j9e.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1693572762/Ty-Bello-Ft-Ighiwiyisi-Jacobs-Because-You-Are-God-_TrendyBeatz.com_sog7mt.mp3",
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
      "https://res.cloudinary.com/dsk0vcgd7/image/upload/v1693571137/Ty-Bello-Heaven-Has-Come-AlbumArtwork1_ov2j9e.jpg",
    song_url:
      "https://res.cloudinary.com/dsk0vcgd7/video/upload/v1693572822/Ty-Bello-Ft-Jo-Deep-Torrents-_TrendyBeatz.com_c9ul8x.mp3",
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
