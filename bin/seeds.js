const mongoose = require("mongoose");
const Serie = require("../models/series.models");

require("../config/configdb");

const serie = [
  {
    title: "Dark", //título
    cast: ["Louis Hofmann", "Oliver Masucci", "Jördis Triebel"], //elenco completo
    genre: "Drama", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQRl8-LJwo-lHCyJwOmcrYppDYYN3Kh9YOdrolA-G2a7JMyXMJTXWSecRFgVmr4nXSmAxYVYhJRBcGsSt065qFmdvl2zRB5PnJ4UJQAffj-K2U2-1OkhZsmOIGBnZ6NNg6-yfeKVvcB4lIgKVHZDA4pdoYyZ9w.jpg?r=393",
    image2:
      "https://m.media-amazon.com/images/M/MV5BZmY2YzU4NDktODIxYi00YWIyLWIzYTctODBkYzYzZjc0ODdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SY1000_CR0,0,675,1000_AL_.jpg", //foto de capa
    description:
      "Quatro famílias iniciam uma desesperada busca por respostas quando uma criança desaparece e um complexo mistério envolvendo três gerações começa a se revelar.", //descrição
    rate: 9,
  },
  {
    title: "Grey's Anatomy", //título
    cast: ["Ellen Pompeo", "Sandra Oh", "Katherine Heigl"], //elenco
    genre: "Drama & Crime", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYy96MjTWVT0-cxAxfRV0NkX9zMggl7XZgc1vEcgfIX3muYjrZDIAQDr-EZKmovYiWx8rsyUZyccBm0wLukUK2vF9DA.jpg?r=111", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BMjgwNGNkZGYtMWQyYS00YjEzLWFmZTctODUzYWMxOWJkNTAzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    description:
      "Durante sua residência, Meredith Grey vive paixões profissionais e pessoais com seus colegas médicos em um hospital de Seattle.", //descrição
    rate: 8,
  },
  {
    title: "Ponto Cego", //título
    cast: ["Sullivan Stapleton,Jaimie Alexander,Rob Brown"], //elenco
    genre: "Drama & Crime", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa8bw6eYIDHUgkPrsCtlG27hLDHFoyvqJXDCz-GGU-GEgrs5NDxuIdkzdJhBwZzuTxDwxn2odca7geDdXS-VGh2u51U.jpg?r=2c2", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BMDIyYzUwNjgtNDA1Mi00ZmQ3LThhNWQtN2RjZjczNjRlZmQ3XkEyXkFqcGdeQXVyNjMxNzcwOTI@._V1_.jpg",
    description:
      "O agente do FBI Kurt Weller segue pistas escondidas nas tatuagens de uma mulher amnésica para desvendar uma conspiração.", //descrição
    rate: 7,
  },
  {
    title: "La Casa de Papel", //título
    cast: ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño"], //elenco
    genre: "Drama & Crime", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSHGF6UHkwPVbGFBIyFTQNZYieIOhv6PeNmg0-B0sCvVShBVPghbTVU_GvSYgYOwUKnXZKFYZVxhkSqNIDYDax_2wPw65TiBfwprUs0Q8hfZZnb7b9y99jXZju_C.jpg?r=66b", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BMDIyYzUwNjgtNDA1Mi00ZmQ3LThhNWQtN2RjZjczNjRlZmQ3XkEyXkFqcGdeQXVyNjMxNzcwOTI@._V1_.jpg",
    description:
      "Oito ladrões se trancam com reféns na Casa da Moeda da Espanha. Seu líder manipula a polícia para realizar um plano. Será o maior roubo da história, ou uma missão em vão?.", //descrição
    rate: 8,
  },
  {
    title: "Black Mirror", //título
    cast: ["Jesse Plemons", "Cristin Milioti", "Jimmi Simpson"], //elenco
    genre: "Drama & Ficção Científica", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbxeppDwp-nV04lhawdXRGurnfB91Ci9Gdropq6uLqxgCS2LvaZAoEC6sbce-vEpHdM5eMuFNWs5N1buvpj3GejQE0Rkza_G51j8Sfjh8f_r-arnT90q-ipeV5K6Dw.jpg?r=736", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    description:
      "Esta série antológica de ficção científica explora um futuro próximo onde a natureza humana e a tecnologia de ponta entram em um perigoso conflito.", //descrição
    rate: 10,
  },
  {
    title: "Breaking Bad", //título
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"], //elenco
    genre: "Drama & Crime", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeAuDKIU6ojBLB_b3eTdFBIUmNJ57Sr7xXk4z8I7GyygIrXQyknSm8gI_dhh5Fsp2lnm8DY9ZOEOIA-C1ReeZ5254Ow.jpg?r=01d", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,718,1000_AL_.jpg",
    description:
      "Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos.", //descrição
    rate: 10,
  },
  {
    title: "Vikings", //título
    cast: ["Travis Fimmel", "Katheryn Winnick", "Clive Standen"], //elenco
    genre: "Drama & Época", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeeTp7iod_xZD2sPj0CbxMguUe4dNncXyaGUGp-c-6oUg4IhInPd-f_OgEMzG3cpO1xVVorYxEnHzz6SHd1_gIQt28g.jpg?r=422", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,718,1000_AL_.jpg",
    description:
      "Esta série dramática acompanha a vida do viking Ragnar Lothbrok em sua jornada para ampliar o domínio nórdico e desafiar um líder incompetente e sem visão.", //descrição
    rate: 9,
  },
  {
    title: "Love, Death & Robots", //título
    cast: ["Topher Grace,Mary Elizabeth Winstead,Gary Cole"], //elenco
    genre: "Animação & Ficção Científica", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbexHKTWzBu_zZqnWeT2Fru-kfHtB2BeuMQqHKTxJvODD3omu6GKkjraXjTwbF8f5yC68YA5DWx3RPQhSBRYO9gjPFaxCB-ds82Q-XF88pN72wsMdb8o7-9sM2HmCQ.jpg?r=942", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BMTc1MjIyNDI3Nl5BMl5BanBnXkFtZTgwMjQ1OTI0NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    description:
      "Criaturas aterrorizantes, surpresas bizarras e humor ácido. Tudo isso e muito mais nesta série de animação de Tim Miller e David Fincher.", //descrição
    rate: 8,
  },
  {
    title: "Anne with an E", //título
    cast: ["Amybeth McNulty", "Geraldine James", "R.H. Thomson"], //elenco
    genre: "Drama & Época", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUapCAwjYrzJHM6wVbK7j06OeVlC48J6zpGgcMttotoW2cxGW2NRgyNSNtqp01EhU-rqYJZtYdaU3flqdbEmb5Y1Emhc4PX1f3Ad0eW72eY58gmRPX9xN9hRI4w_.jpg?r=842", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BNThmMzJlNzgtYmY5ZC00MDllLThmZTMtNTRiMjQwNmY0NmRhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_SX800_AL_.jpg",
    description:
      'Neste filme baseado no livro "Anne de Green Gables", uma impetuosa órfã é adotada por engano por um casal de irmãos solteirões do interior.', //descrição
    rate: 9,
  },
  {
    title: "Brooklyn Nine-Nine", //título
    cast: ["Andy Samberg", "Andre Braugher", "Stephanie Beatriz"], //elenco
    genre: "Comédia", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcg-Lf3V5ytthwSP7M5aP8I4wdepsZnpsJ6JtIpXTPyaV-IqUmJIgU4B5pUOrOLg9kB1q0FIL0YRVY4u729tqOjho7o.jpg?r=ced", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg",
    description:
      "O brilhante e imaturo detetive Jake Peralta precisa aprender a seguir as regras e trabalhar em equipe quando um capitão exigente assume o comando de seu esquadrão.", //descrição
    rate: 8,
  },
  {
    title: "Naruto", //título
    cast: ["Junko Takeuchi", "Chie Nakamura", "Noriaki Sugiyama"], //elenco
    genre: "Anime", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVlb8Us5lfiPLBtjVQOJkhmNYaBUIcYVwalJcbkJ-M2IMAqWztwxvdsI_Q4A3i9ruFeWVtTT9WyhakFafQl02wQtrS4.jpg?r=f87", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BMTE5NzIwMGUtYTE1MS00MDUxLTgyZjctOWVkZDAxM2M4ZWQ4XkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_.jpg",
    description:
      "Guiado pelo espírito demoníaco dentro dele, o órfão Naruto aprende a controlar seus poderes como um ninja nesta série de aventura anime.", //descrição
    rate: 8,
  },
  {
    title: "Narcos", //título
    cast: ["Wagner Moura", "Pedro Pascal", "Boyd Holbrook"], //elenco
    genre: "Baseado em fatos reais & Crime", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUvmXyijuCl_7HZSKW1xb6Q-Hc4RKwKdInBRMejC0w3cqzceBlClnp0IhW1KRkftx_UXpCJ7nm86qnZJmYB1nauaLzIUL_DuzZEalAjGQ6LaUcc1rD2L_rufBF_T.jpg?r=2bf", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BNmFjODU3YzgtMGUwNC00ZGI3LWFkZjQtMjkxZDc3NmQ1MzcyXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
    description:
      "A notória série sobre o tráfico é baseada na história real de violência e poder dos cartéis colombianos.", //descrição
    rate: 9,
  },
  {
    title: "The Good Place", //título
    cast: ["Kristen Bell", "Ted Danson", "William Jackson Harper"], //elenco
    genre: "Comédia", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYugDWH2rIuUynCtE6Te1dyIzUVxqYKEiHBjlqYjCcAYQZ2rTrC7qDb8NWwji_99TXtkuLGlA3tGcFPdNXPj-I2aBU-44qFcH6rlVMrI269R0VEGGP1iohFcZcDA.jpg?r=ec4", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BYmMxNjM0NmItNGU1Mi00OGMwLTkzMzctZmE3YjU1ZDE4NmFjXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg",
    description:
      "Depois de morrer, a egocêntrica Eleanor é enviada por engano ao lado bom do Além. Agora ela está determinada a se tornar uma pessoa melhor para continuar lá.", //descrição
    rate: 8,
  },
  {
    title: "Sintonia", //título
    cast: ["KondZilla", "Guilherme Quintella", "Felipe Braga"], //elenco
    genre: "Crime & Música", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVX51Wx2CYF6I-mjkCqRuJ2d_ZR6YEzqI71BtZIvtazZjlDqh1Oe0zMLLU2yvleiv90VRUE_ywTZZjFlxLp7XWLTEW4a0PKw4lw9W4inillfZzTemQIegQ1zF2CK.jpg?r=fc2", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BNjk0NGU5MjMtMGU5NC00ZGE1LWFmMTAtMDliY2Y4ZDJkMmNhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    description:
      "Criados juntos na quebrada de São Paulo, três jovens amigos correm atrás de seus sonhos rodeados por música, drogas e religião.", //descrição
    rate: 7,
  },
  {
    title: "Marvel - O Justiceiro", //título
    cast: ["Jon Bernthal", "Ben Barnes", "Amber Rose Revah"], //elenco
    genre: "Baseadas em hq's", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdosLOT8V2BzAdtJUOLlEvJQUVnPhvpTiMYMe2tvJGZisboGrqZv30kGFDVRwZsRZbrTOLNUBKsOw1p38ktKtaMEOtZPiI6aM4sJKHZQVc2xpZSrtlyHoYIHW_jZ.jpg?r=4e6", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BMTExODIwOTUxNzFeQTJeQWpwZ15BbWU4MDE5MDA0MTcz._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    description:
      "O ex-marine Frank Castle só quer punir os criminosos responsáveis pela morte da sua família, mas torna-se alvo de uma conspiração militar.", //descrição
    rate: 8,
  },
  {
    title: "BoJack Horseman", //título
    cast: ["Will Arnett", "Aaron Paul", "Amy Sedaris"], //elenco
    genre: "Animação", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe-gyNAJGRxpnxipvhsYl4udOO2r64wMrHMcPCsH0mZ1znH7eGsdPsImpC-R-4kWm4-2Z-QpkqwmsT69f7C-4wRdTE0I2Qgc0jR8LXdUhv0KFc-JKHE7IJq4dsL6.jpg?r=37e", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BYWQwMDNkM2MtODU4OS00OTY3LTgwOTItNjE2Yzc0MzRkMDllXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    description:
      "Conheça o cavalo mais amado da TV dos anos 90... vinte anos depois! Ranzinza e com um coração de... não exatamente ouro... mas parecido. Latão?", //descrição
    rate: 9,
  },
  {
    title: "A Máfia dos Tigres", //título
    cast: [], //elenco
    genre: "Documentário", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUTLyveDg621zSxIjWWw3ZXHZ9AgvXTR_hLswjGNA8g-YToRbhWQFRnfiX-GjuX4a8p2fgnQu2yvf965xnZdjXD_J_RNLJHVCK9RIMw-iwiRxqNddJ0ETk8UUXuI.jpg?r=7b1", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BYzI5MjQ2NzEtN2JmOC00MjE2LWI2NjItYTNjNTJjMjBkOWZkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",
    description:
      "O dono de um zoológico perde o controle e acaba acusado de encomendar um assassinato no submundo da criação de grandes felinos. Baseada em fatos reais.", //descrição
    rate: 10,
  },
  {
    title: "Friends", //título
    cast: ["Jennifer Aniston", "Courteney Cox", "Lisa Kudrow"], //elenco
    genre: "Comédia", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWu3nNkq6X6XuH3DJ6nwv2DBZqnzNAG8MDbUVrYXG6q3AwFa61IK4hhewJfpsFjB3wB8t41By2NXTFXQaceHiJ66JFU.jpg?r=0f3", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    description:
      "Esta série de enorme sucesso acompanha as aventuras de seis amigos que enfrentam as armadilhas da vida, do trabalho e do amor nos anos 1990.", //descrição
    rate: 10,
  },
  {
    title: "The Walking Dead", //título
    cast: ["JAndrew Lincoln", "Steven Yeun", "Norman Reedus"], //elenco
    genre: "Terror & Drama", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ_JHEo3dUJB1G2qMCx44IscAd49oYtYcS3wISvSVF-r0KA_T4ipKHPZYznGtLoSOMB9zktPLgqOzU9pMKlAnRiv1NU.jpg?r=a29", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BYTUwOTM3ZGUtMDZiNy00M2I3LWI1ZWEtYzhhNGMyZjI3MjBmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
    description:
      "Zumbis dominam o mundo dos vivos, e os sobreviventes unem forças para manter viva a raça humana.", //descrição
    rate: 10,
  },
  {
    title: "The Seven Deadly Sins", //título
    cast: ["Yuki Kaji", "Sora Amamiya", "Misaki Kuno"], //elenco
    genre: "Anime", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQIJhM2tzciJOr3w0oC29UBOSLtOGSBjVnXNcD6bUf10JJn6vxz_YShgR0eqvOrW3jXHFA5MyED4PImyoiQ6blvHWz8j-m1oNdfn43CUaUipVn12fSSPEo9Mrqwb.jpg?r=fce", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BMTQ0OTY3NjAxMF5BMl5BanBnXkFtZTgwMzE4NDAzNzE@._V1_SY1000_CR0,0,701,1000_AL_.jpg",
    description:
      "Depois que seu reino é dominado por tiranos, uma princesa tenta encontrar um grupo de cavaleiros perigosos para ajudá-la a recuperar suas terras.", //descrição
    rate: 9,
  },
  {
    title: "Titãs", //título
    cast: ["Brenton Thwaites", "Anna Diop", "Teagan Croft"], //elenco
    genre: "Baseadas em hq's", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdoEm6WCjHTGneE4p6FEzl3YqXSZ__mHZvGSImIecDPybF4CC0icWvRBhfZhGjskB4s0z78eS5--FparYwC26Ua_jJOZiUmAS4nd-sMDYwq31KgxS-bp1euDiVM5.jpg?r=0be", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BOGIxMzE1MTEtMzViYi00MWI5LTllOTUtMmZkYzM3NmIyNTZlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_SX666_AL_.jpg",
    description:
      "Depois de tentar a carreira solo, o antigo parceiro do Batman, Dick Grayson, encontra um grupo de jovens heróis precisando desesperadamente de um mentor.", //descrição
    rate: 9,
  },
  {
    title: "The Sinner", //título
    cast: ["Jessica Biel", "Bill Pullman", "Christopher Abbott"], //elenco
    genre: "Crime & Drama", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc8N1q7J36BW2WIjHRgEsiDLTYGTumHwXyi-T-BgluSxubOj_8XgClGbZIWbrKrelelPkKpk8uV7QNH8dda6jS1t0ZKvN3qihEA9WITQNZtrAPq2mWVz6yCvF2W0SbpxdWqRraV-fGe9MxtIPSMqVnpUKeMxzw.jpg?r=94e", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BODIwYmE0MGQtYmNhMS00ZjM4LWJkMzAtNjg5YzI4MzZjMjg3XkEyXkFqcGdeQXVyNjU2ODM5MjU@._V1_SY1000_SX675_AL_.jpg",
    description:
      "Em uma pequena cidade de Nova York, um detetive busca respostas para crimes perturbadores enquanto luta contra os próprios demônios.", //descrição
    rate: 9,
  },
  {
    title: "The Witcher", //título
    cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"], //elenco
    genre: "Fantasia & Drama", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYCXCfVkAFjsSQJGuFsXPb7ANJ4GKjDYZU85JaiQ-qDc1QJJCH_55dJJ1RWTdlo62fLFpBLMWrM4JunTyNQbGZm0_iKOwdU91su6fYovYxIWxgtI1KJzhdbWq8ta.jpg?r=382", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BOGE4MmVjMDgtMzIzYy00NjEwLWJlODMtMDI1MGY2ZDlhMzE2XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    description:
      "O mutante Geralt de Rívia é um caçador de monstros que luta para encontrar seu lugar num mundo onde as pessoas muitas vezes são mais perversas que as criaturas selvagens.", //descrição
    rate: 10,
  },
  {
    title: "Sex Education", //título
    cast: ["Asa Butterfield", "Gillian Anderson", "Ncuti Gatwa"], //elenco
    genre: "Comédia", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQwJRzqTdj8X5OnraNb6kjyQuTJ_2zEGWODTlQuIq00TVTYklqdjG_ko8rzZVmGanf-Vap-MhYdoyU9GtYhcn-obM3vvVZzX19yoFpURLEiBoIa-7zZRWr6M1TjR.jpg?r=767", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BZjgyMzFiMDgtNWNmMS00ZDEyLTkzYzgtMjMzZjk4YjhjZWUxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_SY1000_SX800_AL_.jpg",
    description:
      "O inseguro Otis manja tudo quando o negócio é aconselhamento sexual, graças à sua mãe sexóloga. E aí a rebelde Maeve propõe criar uma clínica de terapia sexual na escola.", //descrição
    rate: 10,
  },
  {
    title: "RuPaul's Drag Race", //título
    cast: ["RuPaul Charles", "Michelle Visage", "Ross Mathews"], //elenco
    genre: "Reality Show", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXcYkzVaLOtgshz-Ci1P-ZZwitznhLaidYjOtD8d8KyJXlImUIMUsCxYJM_qh_y5HMMUzn1XUwVKQTJ3B9eg93Uu2xxSH-Qte7qGgf5IZvKtsa2Rf5Zf4DCmBVLSPMwZ9ACZzw1FEdgvBK474ZwcxPOTzvGfiw.jpg?r=e4e", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BZDA2Nzk0OGMtZGM4NS00MWQ3LThiZjUtMmY4YzkwYmMyMWJkXkEyXkFqcGdeQXVyNDkyNTIzNDU@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
    description:
      "RuPaul está à procura da melhor drag queen dos EUA! E não faltam candidatas na disputa do título e do prêmio de cem mil dólares.", //descrição
    rate: 9,
  },
  {
    title: "The Last Kingdom", //título
    cast: ["Alexander Dreymon", "Emily Cox", "David Dawson"], //elenco
    genre: "Ação & Época", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABed75exDAmOp8yxUKZelwBdtuUjoNeD8cLlqEyC5pMahApvscKdyEumOlOC0F8PJcnn84lcyRQWY7bDnA1TzKJqjE4J0r951699hoCWW-OqlSIe59gTc-Yg_tshC.jpg?r=427", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BMjE1MzYzNjk3OF5BMl5BanBnXkFtZTgwMzk0MzYwNzE@._V1_SX667_CR0,0,667,999_AL_.jpg",
    description:
      "Enquanto Alfredo, o Grande, defende seu reino de invasões nórdicas, Uhtred - um saxão criado por vikings - planeja reivindicar o que é seu por direito.", //descrição
    rate: 9,
  },
  {
    title: "Riverdale", //título
    cast: ["K.J. Apa", "Lili Reinhart", "Camila Mendes"], //elenco
    genre: "Drama & Crime", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRdUISmiYQ7Nyz_Ir9aJSeGCur2qL74cYdVlHRf8wcChBFkQUu3FvZS8r3HSAFn3UTSf3aj_zaqAGUA1_0mb6Vg08VE.jpg?r=da1", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BNDYxOTU0NDYtYzg2MC00YzgyLTg1YzctMDc1MGJmOGIzMTc3XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
    description:
      "Enquanto tentam lidar com problemas típicos da adolescência como amor, sexo, escola e família, Archie e sua turma se envolvem em um grande mistério.", //descrição
    rate: 8,
  },
  {
    title: "13 Reasons Why", //título
    cast: ["Dylan Minnette", "Katherine Langford", "Alisha Boe"], //elenco
    genre: "Drama & Crime", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY0AeqN391JQuluZfPUdfw55iSitKKH2zUJjxh_Ao1xtxRYbWcGwO5GnpqHIgtmUrvfH4k51nli_gyGMLn_EVj6dKxi_xkWTchZ0NFNO44j1XUVVfAJgscELL9EU.jpg?r=753", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BMDYzZTRlNGEtZDc2Mi00ZGNjLTlmZDAtMmVjMDZkOThiODEwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    description:
      "Clay Jensen é um estudante que se vê envolvido em uma série de mistérios provocados pelo trágico suicídio de uma amiga.", //descrição
    rate: 8,
  },
  {
    title: "Mistérios sem Solução", //título
    cast: [], //elenco
    genre: "Documentário", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRiOr9opI3KAPmedGJrgOuUsQR_BAiTMfFQmG4TOO7VuMIHsyPTexGAGm-Y1BecpvE747g8sWjYlDGgKmsevXiaNUitQaVbtzDr3g8vj3EihU1Svk_bDunJITPsV.jpg?r=579", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BM2E2NWM3ZGItZGJkZi00MjAwLWJiNDItYTdhMzE1YTBmNjI4XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    description:
      "Esta série icônica está de volta com casos reais de desaparecimentos, assassinatos chocantes e encontros paranormais.", //descrição
    rate: 8,
  },
  {
    title: "The Flash", //título
    cast: ["Grant Gustin", "Candice Patton", "Danielle Panabaker"], //elenco
    genre: "Baseadas em hq's", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcOhO7lI32dCvpKshHJP_eEuolrX1B0XIoDfD67_BpCFt0jlwaLU3c0R84qQ6ERoTk8F9X5BJbq3SeEvMdoWRRQ7yFc.jpg?r=39c", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BMjAwNTljOTgtYzk0NS00OGMzLTgzMDUtZDc2YjhjNzU3Yjg5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_SX668_AL_.jpg",
    description:
      "Um perito forense desperta de um coma com poderes especiais que serão postos à prova na luta contra forças que ameaçam a cidade.", //descrição
    rate: 7,
  },
  {
    title: "Stranger Things", //título
    cast: ["Winona Ryder", "David Harbour", "Finn Wolfhard"], //elenco
    genre: "Ficção Científica", // gênero
    image:
      "https://occ-0-1306-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSQRzNZw0sdhfp2nmORP8obVtvyqoQr-xGumXiDcM5b6s_9D9WtWQojIUpORJIUvj-YsrVjKC_5PIuYMPSZIL_Ir1VUqKxeHnPr-YdCHSVAuagAOTRUFF9oyBGI-.jpg?r=b4e", //foto de capa
    image2:
      "https://m.media-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg",
    description:
      "Quando um garoto desaparece, a cidade toda participa nas buscas. Mas o que encontram são segredos, forças sobrenaturais e uma menina.", //descrição
    rate: 8,
  },
];

(async function seedDB() {
  try {
    const result = await Serie.create(serie);
    console.log(`Success! Created ${result.length} hosts added to db`);
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
})();
