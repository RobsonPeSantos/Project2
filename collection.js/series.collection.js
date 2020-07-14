const series = [
    {
      "title": "Dark", //título
      "cast": ["Louis Hofmann", "Oliver Masucci", "Jördis Triebel"], //elenco
      "genre": "Drama", // gênero
      "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FDark&psig=AOvVaw33yaLJL6nB58q55P_-_2As&ust=1594754237750000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDk3ND4yuoCFQAAAAAdAAAAABAI", //foto de capa
      "description": "Quatro famílias iniciam uma desesperada busca por respostas quando uma criança desaparece e um complexo mistério envolvendo três gerações começa a se revelar.", //descrição
      "rate": 9
    },
    {
      "title": "Grey's Anatomy", //título
      "cast": ["Ellen Pompeo","Sandra Oh","Katherine Heigl"], //elenco
      "genre": "Drama & Crime", // gênero
      "image": "https://i.pinimg.com/originals/28/29/ba/2829ba510d2ef9509b0ce1a073dd0b23.jpg", //foto de capa
      "description": "Durante sua residência, Meredith Grey vive paixões profissionais e pessoais com seus colegas médicos em um hospital de Seattle.", //descrição
      "rate": 8
      },
    {
      "title": "Ponto Cego", //título
      "cast": ["Sullivan Stapleton,Jaimie Alexander,Rob Brown"], //elenco
      "genre": "Drama & Crime", // gênero
      "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALoAfAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgIEBwMBCAD/xAA9EAACAQMDAQUFBgQGAQUAAAABAgMABBEFEiExBhMiQVEUYXGBkQcyobHB8BUjQlIzNGLR4fEkFkNyc6L/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAgEQACAgIDAQEBAQAAAAAAAAAAAQIRITEDEkEiUWET/9oADAMBAAIRAxEAPwDLdKkLXEQ8yCT7sVsnZhBcWKMPMedZH2TtBf6tFApO4kKT7vOt80+xisx3UShUTyFSkVgRltgQM8Ch97aJ3bBk4PGMHpV7V9f03To+ZllmJx3ac/jS7L2q02ZT3kyL7jz9KwyKlzaGNGUAHnw/Ok/tRacSbMl2iO3n0p3TVLCbTpW9pQyg5RR1pS1aUS3sAQg4Qkn4/wDdH0LyhJ7MQi77SaVA/KS3kSke4sK+olhHd491fLdjOdL1qC6UEC3uFlHrhWz+lfVse2aJJIyGR1DKR5gjIpmRWBW1yAbqAywBqctXt93NI+q6zYWM5jeUM/mq81NotFlW40WG9ysqBl/GlvVOwi53Wjsh+JpssdetZGAjgun/APjAxomsyXH9Eig+bxkVlaM6Zj172V1OzVmCCQDrsPNBZVaM7ZFIPxrdZoVOcj8KSu2WmWoUN3Sq7f1Uyl+iS4/wzsNg1+I54qU8XdOVHkaiOlUJGp9kuzr6P22jtZXDqYTKOOeuOfmDWo6jaSvaOImAZ+CT6Vn+na5HqPbCylWPu2iR4GPkynlT8chvwrVIQJYMY5qTyX0ZVrmnWyXKadaabeapenAkeNCIoc9AXxxSXqWkXi3Mlstg8LpJsb+Y5VWzgjJA5z9c8cc19EIyQxmNYwATnGPOlTXdJjuJmnEMYkPG9gCfrjNHwWmzHYNPvoL1rUAO4bG6Njg9M063/Y822ltd96xkK8gjpTB2e7ND2rcBkbsu5Hl7qY+0UCtpUihfAByKAzwfM19E0d1IwOQGwa+kvsz1Ian2G0qXO54ovZ3+KeH8gPrWAaoFF/cKgwN3Sjv2Y9objSdaaxbURbWkgLrHLzG7jHhPoSAefXFP4SezU/tG1qawtI7O1Uia4z48dB6UjCOw0m233Ui+2uNzbuSAfd5VpmrxW2t2FvIsasZUyhdeV8j+NZ3/AA+1/wDWrfx6ya7tliYSL3ZePIVQrYAz5fnS+jrCshpfaqyLEd+B8eKZIdSiuIgylWz6Gs5s9E724mt4IGNuZNwaSPx8ZAAOAQOeRTjpemNaQpGSTjqazwPF3sKtIXGKE6/YC/smXHiHIOOlHI4vD0rlIoXJNIOY1qumTW8jKUbjnIGQR65oQ8Tq2NprXtTsIbhi2zxEEHgUs3OgL3xKng+qUymTlxjVPpL6LZ3moKUeKS5jaF1zuXaWBDenDfhWi6Le95bRyrzlQT9Kz7s/q6a12SvLSdgb60KmTLY7xM8P8cDB+Hvo7oV0bdGjQAJwR5Dn/ujJdXQL7KxyllWUsVGSfShlxH4sy5IB6VKxcscls58sVy1i5CRFhwo+8aFhSLVtf29tFtJAZm2oi9SajqjhrKUv9xhikPS726vNfhuQrPDbMTge8EUWuNfvZtIvJL3S5LMIeAzK+8DzGD+YoJmaoyPX7YW+rzp0VjkUvXakXJUDJ8gPOi+sakdT1Augz781f7IaL/F+11mJP8vB/wCROf8AQhBx8yQPnVFoSWTadFtf4Xo2nWBOXtrSNHx5tt8R+uaqtGsOoC4wDvG2QHzFXBMHZncnnnND9Yfu1SRTlc9amUSCNzb26RAxIBnpQ5VUHmu3fmSAH3VwPQ0GMlRKSXapxxxQ64kZ8gGu75PnXErzQGK/d8ZNVZI13davycChlwHMhwTiigMz/TbgwX0MgOMMMn3Hrn3VrGm91LFFNnhipAB5HlwflWPIDkeVPfZLWoxbpBKQJI+QvTd6V0civJy8brBo1nfLDHtdtzA7ecAH5/Wo6kPa4zGrgIzeJ/LFLNxeYhEsbZI9PPPH61PWtcS002Mkli64IHkfOudli895badbtbWQAKrxg8t6/Okbtbfd5p8h71ix6gnHmMV00waxqfeT2tijo3AeaXb+hql2i0nV8Fr6SyRGPESv500UZ5E+8ZpVikx0THTrTD2D7SW2h3V1HqCEQXaopmAyYyhJHHmDn8BQCe3uB9548Dpg8CqcmV6kH4VQno2+11ddTmLaNq9pOoXJgCFmHvI4IFW72aS9hFvLEivwWZDx8qzH7JnCds45WkRFS2mLbjjcNvT9flWgy6tai5ZO9QHPXPB+FTkqKwbkgq5VFCr0xUcgiqgnSbBSRWOOQDmpKxApBz9LwarNJzXSd6pu3NAJ3ZwRVVyu7yqEku3qcVTe4G77wogM9XB4oz2dsxfXzWxmMMjREwyZ4VwQefUYyKBqfFRjQbgwavZSDJAlAYDrg8H867no4lsNRag8TPbzriaA7HjAPBGOfyqWozC6mt02l8EM2BwB++tWu1drK9ystsn80IfFk5b1B4wT6fTzpfF6J5I1ucRyKCF3Dpz1rlovdD/b6lCtj7LAETavrj5/Cs57WTXM0v8AMcFRyozRi3/kzjErmIcgjjd6fXHT31z7RLALVHGCCM8eXNZYMJO53GOgHlXGZgOM80S1Bo0UOqBcigzEsx86oIzpbzywzI8DskinKsp5FaZoGlRXuiRXovlku7yI7oIxkIAxGMeXHwrL87BjzNaX9is9019qUKv/AOKsAdkPOHzgEenGc/KlksBhKmGtP0yLTDvRf5nQseuPQVf9pNS1aZXuW2DA91US4UZJqLOhFiWX31UmuFUEk1Tu75Uzhs0Bv7+ZyVTPPpWM2X7vUw0qxqfve+i1loV3d2yTrDIVflT6ilewtu+kEjAlhyK0C21+9S1h7nTJjGYwV7twB+lZ/wAG40m8mPJzg131SRtPthBGStzIoaRgcFF8lH5morJHpyLLcKJZzho4ug+J9351TuWkvbVr12BfvtsoA6Z5B+B5HyrtbxRwJZNiSNNV0q2vFXa09uj7l8yRk/jkEUq6tpLGYK20MfvBiRuHx/fSq/2e9pzbR/wq8b+Tn+XnyzTrq9mk1uZYypHVQK5nhnRtGdxTraz7ZTgDgluCOOgPxx9aG6rqpYGMZb3n9+XHlTTq+li5t2kiUi4T+sEbqQ7i2uNx37jnzPnTLIjVFea4eXCs2QPU1z3ADC/WpNCy9RUNuKYQjmmj7Pe0idnNYkkuSfZbmIxS4GdvOQ379aWMV5WMaxea5Y940ovIGU8giQUC1DtXaZ2xytJ5eBePqcUiV63pSqCKPkY4Tag8i7o8BT55zmudnqZt5gbmMTR+Y4DD4Gli3upID4TlfNavw3CTkAcOf6TVUotUT7SuzQVjge0W50598UwwpXqD1wfQ1c0LUreKxMNywDxuVw6buPd7qC9gLWY6hLHsJSRM48gw8/oTRK50S8NzLswU3eE7lHHzNScGnVHVxzbVmVu7TGRpGLOeST50R05oo76a0nQGO5Owtnlc9D+VDIxlyP7uKMWgjOpabcS8Ry4jc+jDw/7VWKvZyMptFLYXrxv4ZI2+uDT/ANm9eNxEsEp5A+tUO1+l74heRKN0OFf1Kn9g/M0tWcr2d0pyQM9R5UvJDqx+OQ+XV2imRGPhcY+70pVltEEjETcZ6bavXNyJog3n5nFDpXVh4fnikQ7KF1AhZtvND5o9vlTDBbd5k4+FcDot5qF2sNpBJK55CoufypopvQkmlli9jnGeteOPFgCtF0/7K9WnUSXjQ2qee4l2HyH+9F7f7PtHhUd/fSSYbBIQDn4VSPG5E5SrJkQRs9D9KmIZHbAU/StqbsH2fTA9pcZ6HAOa43HZPQNOfNw87EYIUYAan/wfrMm34ZVYaLdXcgSOMsxPAApz0n7P5tveX7pAFG4q33vpTXbatptiyLpttGit4WY9R781O/hkvwJ43fcmN4HG7nB+PGKvDgVXsoqRRt9VsNHiktdPic4iw8mMszHy91FbPVLFrWIbirBcMqscA+flS5PpEohEqvE7SRliGH3TngfnVi6tTaGOKS9EUmwF1Q8Akn9MVurvKKKdGRjOeKJ22Lm3mtP6z/OhP+ofeHzH5UMFdYpihGDjByCOoNciwQZo+i3yav2fdZArzGMwTqeCTjr8xzSLepJDPJbzAiWJyp+VddM1OWxu5poWA7xDvQ9GPl8/96661NFePFewyIZ2BEkfQgeXxNNNqUQRwzrDcs8QVC2cZwRX6FGdyHXHPkelU4rmMIgd1VhnzonaTCTYLciSdyEQD1NRStlW0N/Zfs/LqW5SRHDH/iSkfdHoPVqe7a50/QYTbWEATd96TaC7/Fv2KD2dxHp1nBpds4VlUBiOrMepq2VnjtWkAidR4lMpLH5DpXVCK0jmlazJWfrntHLdoYbcKA2Q25gOPXrQWGOIbmRiygf4wfGCK6Xt7MttHstoyJmPUYz/APmqt5dQxj2VwsDD0458+lUqUMo6ONqSpojLPfXMoePA/ulVN3n7+hobqftMG72iR5SejkkiiemL7K5kikL7/vFD+YNd7qZZwkgRWZSN6gY3eR4q3VThl5Jd5d68Fm3tZLmCSa3yGi5ZB1PwoxpV3qEK7NzvbxqW24zkY9fh+VW0VbS7aW0A2k56dPcfoK8t9Sihm7szQIclChbhgeR+o+dSfw8bOlQtWXbvU7F1SCMhJXkO92AAAPOAfpQS+tozeS7Q8q5GHXoeB+ua63thCHEblJASNrK2TjBGOPeR9KjFeXcUMYgVRGQdo7rceCRyT8KrGaexHFmRV58K98s4rS5/susYLmKybthZJfzIGitpLcqXznH9R9D5V5ohmmT61+yfWnPSPs9urhr6XXNQt9HsbGYwyXUw3h3H9gyMj35FS1fsALWGyvdJ1m21XS7i4SBrqFNphLMANy5Pr61jCUSB5U2dhLYTavA5Hhh/mH5Dj8cVLtP2Fuuz/aCx0+W6Wa1vZFjivFQgZLAEFc8EZzjPIp17O9i7bT9Sv7E9o7b2qORYEQ2xDNlVfON/+rHyoxAzy51BvaCWGxc8MACahLql3IgjVyIt33i4H417f9mjNqUVnpuvWuo3TSMs0axbDbqByzeI8Dpj1New9kbOXvo9M7SWWpX8QJa1RO7PHUA7jnn3D5VSMq2NNKSw8k+/1L2VDFDG6p0JYkkevpSrdSs1zvmXDs2ckjI+dFbS/uLi4trGCLEu/uwh65/efpRq77L6eXa2l7Tacl8AS1s0fQ4zjdu9PdVe6EelYF069j71csyv0JBxmiWmXJ9oddu4upAJ5/Yr3Tuz9iNGs9Que0NpZC53CMSQE8gkcHcMjjPQVZ0nSlkvjFpmtQXEKRiSa8jTai5zxgk5PHrVHKFYFg5J5BmvPcadbSzRIV7wbcY4HvpQtMXFwDM+ZHJJOehpz7Z6TGmi3F9b9ore9gRxuhEJQ+Y45OevuoXa9ioILa2utf7TWWizXCh4beWPvHx5bvEuPxrk5HbOlyQKjub3T7jbyEccEDg+78KZtK7Q6R7GovCI5AT4Tnjz492SaGav2bu9HvGSWaOdZUykkQ8Mi+o/f1pPmjKSurtgg9KWMnEN+gsg7T8K0LtF2h0611m1vLnTmutQhhRoZTKQq4Jxx04OT0pFwK8PTJ5+NaiA43mpTdr+z4te9jS9iumnaJjgPndjHybHyqejzP2Y0aWyu5ENxfXUeyFWztwR4v37qRi/iBAwR5iosxJyc59TQNRpl12mW47SXelap4rVpoprZj/7UihT19CR9c+tTn1Er2tW4B8Ukyscf/WB+lZlApeb1JPnzTHdEII4ghJUDov/ADTxWBJbQb0zW1tu0urLLJ3ftm+NZP7SW9a5aFY3GjahHe3U0cVvbliCr/e4Ix+NAFCFtpQhx14/5qLtGSfESB5Ek4pnE3YNaZriQ9pDqRyA8zufduJ/LNSv9Mnur2eUyRtBK7Sd6zYHPPNA45EOe75x1xXVh4QpG0+lZRaM3Y2WOoTfwDT7eK2troRbuLgbgvJ5GahHfzGLUrF/Z7eS8VWRYh4RgYx+H40oPEyMr7jj5CrLQsI0xMR76PVjIY47yeDQrmG9tIBIkfgkVsmRhnrx64qh2him7Q3yajZyK4aJUKs2CmM/7/nVC3jnZDtuSF+BwP3moPox++syKCOcZpJQZRJsPvq7w2+m6VFcLIbWLY0g5AYAYH4UF1aBZr1pXUAuAfDwK5TaLdWa7gQynB3jjFRje424JXKnHJ/4pLKJUqYFJqLcivK/USByK15trqcVA1gljT0D3KKeMmmdBH0j8czjlgMlB8KW9LGbpT6An8Kvvdy2+8xsV3DaceYpoOhZRssrbtOsxgUJEpO6Vjg4/Su6aORad/PJsG3Az1PwoHA00k20F2BOduetMVu1xEe+1NS8KDwxM3U+tWjUiUriB4VMD5KEgnjI61Yj7stulZiT1HGKsXF9FPM800e7+1V4A9BVeNmz3jR5Zs7VxwKTWiqySJ747W4XoB76ttpmIdz8MOgA60IuJZNy7uCeuKJ2t5L7NtkOQPfzVeGpP6NJNaLFhZQd6qzHHH3Qdvv61y7Qt7DPHDBKzAxhiAx65NeC8kWQbgpYdEHOar3+b+8g7xVjQqBwMZGfL1+NHlUetIeNhK0u2vIe4kdiFQMNx+eKEvGYyAsnB5G1iKvGGKxgIgGZnTDbudoPQfGh5/1MimuOUaZdu0CMV5jNSwPSvDROY5momumK8xzQZi5pK5mZvIIf0qcqGSQjyFWtEA2S8D7n61bslBlbIHX0qkI2BypWVbF0st0sm1T5EjJ+Vc59UmvZAqkqvkOpPpXPWv8APvVQEhQRwc07dfIqin9MMtaLYxgysslweSp6LXiXzMXAXxYwCBwvuqu5zZKTyTJyT58VK0Ax0/qH5095wFL9OF+cEZ4bzqzFIq2kahh3jE+LPpVe8A77p/VXEDlfjUoy6stVlqWbxRMrHuSOT0JrtfXLSGGZRgIAoA6DFVZv8OP4/rXsv+XX51pTeQrARW+Dx+LBLjnj79c5pCkrCFSEzwCP+KpWv+E9dLeaVY8LI4GT0Y1k7WQ2f//Z", //foto de capa
      "description": "O agente do FBI Kurt Weller segue pistas escondidas nas tatuagens de uma mulher amnésica para desvendar uma conspiração.", //descrição
      "rate": 7
      }, 
    {
      "title": "La Casa de Papel", //título
      "cast": ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño"], //elenco
      "genre": "Drama & Crime", // gênero
      "image": "https://i.pinimg.com/474x/9c/62/a3/9c62a3d94edd69aa71c81cd005e8b933.jpg", //foto de capa
      "description": "Oito ladrões se trancam com reféns na Casa da Moeda da Espanha. Seu líder manipula a polícia para realizar um plano. Será o maior roubo da história, ou uma missão em vão?.", //descrição
      "rate": 8
    }, 
    {
      "title": "Black Mirror", //título
      "cast": ["Jesse Plemons","Cristin Milioti","Jimmi Simpson"], //elenco
      "genre": "Drama & Ficção Científica", // gênero
      "image": "https://preview.redd.it/hjgce7dqed231.png?auto=webp&s=03f4f4368caec69cf52f97379d77565687df0e88", //foto de capa
      "description": "Esta série antológica de ficção científica explora um futuro próximo onde a natureza humana e a tecnologia de ponta entram em um perigoso conflito.", //descrição
      "rate": 10
    },
    {
      "title": "Breaking Bad", //título
      "cast": ["Bryan Cranston","Aaron Paul","Anna Gunn"], //elenco
      "genre": "Drama & Crime", // gênero
      "image": "https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg", //foto de capa
      "description": "Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos.", //descrição
      "rate": 10
    },
    {
      "title": "Vikings", //título
      "cast": ["Travis Fimmel","Katheryn Winnick","Clive Standen"], //elenco
      "genre": "Drama & Época", // gênero
      "image": "https://upload.wikimedia.org/wikipedia/pt/thumb/7/7a/Vikings_Temporada_2_Poster.jpg/220px-Vikings_Temporada_2_Poster.jpg", //foto de capa
      "description": "Esta série dramática acompanha a vida do viking Ragnar Lothbrok em sua jornada para ampliar o domínio nórdico e desafiar um líder incompetente e sem visão.", //descrição
      "rate": 9
    },
    {
      "title": "Love, Death & Robots", //título
      "cast": ["Topher Grace,Mary Elizabeth Winstead,Gary Cole"], //elenco
      "genre": "Animação & Ficção Científica", // gênero
      "image": "https://br.web.img3.acsta.net/pictures/19/02/15/09/54/4975550.jpg", //foto de capa
      "description": "Criaturas aterrorizantes, surpresas bizarras e humor ácido. Tudo isso e muito mais nesta série de animação de Tim Miller e David Fincher.", //descrição
      "rate": 8
    },
    {
      "title": "Anne with an E", //título
      "cast": ["Amybeth McNulty","Geraldine James","R.H. Thomson"], //elenco
      "genre": "Drama & Época", // gênero
      "image": "https://br.web.img3.acsta.net/pictures/19/02/15/09/54/4975550.jpg", //foto de capa
      "description": 'Neste filme baseado no livro "Anne de Green Gables", uma impetuosa órfã é adotada por engano por um casal de irmãos solteirões do interior.', //descrição
      "rate": 9
    },
    {
      "title": "Brooklyn Nine-Nine", //título
      "cast": ["Andy Samberg", "Andre Braugher", "Stephanie Beatriz"], //elenco
      "genre": "Comédia", // gênero
      "image": "https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UY1200_CR90,0,630,1200_AL_.jpg", //foto de capa
      "description": "O brilhante e imaturo detetive Jake Peralta precisa aprender a seguir as regras e trabalhar em equipe quando um capitão exigente assume o comando de seu esquadrão.", //descrição
      "rate": 8
    },
    {
      "title": "Naruto", //título
      "cast": ["Junko Takeuchi","Chie Nakamura","Noriaki Sugiyama"], //elenco
      "genre": "Anime", // gênero
      "image": "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY1200_CR93,0,630,1200_AL_.jpg", //foto de capa
      "description": "Guiado pelo espírito demoníaco dentro dele, o órfão Naruto aprende a controlar seus poderes como um ninja nesta série de aventura anime.", //descrição
      "rate": 8
    },
    {
      "title": "Narcos", //título
      "cast": ["Wagner Moura", "Pedro Pascal", "Boyd Holbrook"], //elenco
      "genre": "Baseado em fatos reais & Crime", // gênero
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_BouVDgBV1KR189sPFimFLAttOV6zvisQFg&usqp=CAU", //foto de capa
      "description": "A notória série sobre o tráfico é baseada na história real de violência e poder dos cartéis colombianos.", //descrição
      "rate": 9
    },
    {
      "title": "The Good Place", //título
      "cast": ["Kristen Bell", "Ted Danson", "William Jackson Harper"], //elenco
      "genre": "Comédia", // gênero
      "image": "https://upload.wikimedia.org/wikipedia/pt/thumb/7/79/The_Good_Place_temporada_1.jpg/200px-The_Good_Place_temporada_1.jpg", //foto de capa
      "description": "Depois de morrer, a egocêntrica Eleanor é enviada por engano ao lado bom do Além. Agora ela está determinada a se tornar uma pessoa melhor para continuar lá.", //descrição
      "rate": 8
    },
    {
      "title": "Sintonia", //título
      "cast": ["KondZilla","Guilherme Quintella","Felipe Braga"], //elenco
      "genre": "Crime & Música", // gênero
      "image": "https://m.media-amazon.com/images/M/MV5BNjk0NGU5MjMtMGU5NC00ZGE1LWFmMTAtMDliY2Y4ZDJkMmNhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX182_CR0,0,182,268_AL_.jpg", //foto de capa
      "description": "Criados juntos na quebrada de São Paulo, três jovens amigos correm atrás de seus sonhos rodeados por música, drogas e religião.", //descrição
      "rate": 7
    },
    {
      "title": "Marvel - O Justiceiro", //título
      "cast": ["Jon Bernthal","Ben Barnes","Amber Rose Revah"], //elenco
      "genre": "Baseadas em hq's", // gênero
      "image": "https://upload.wikimedia.org/wikipedia/pt/thumb/1/17/The_Punisher_season_2_poster.jpg/230px-The_Punisher_season_2_poster.jpg", //foto de capa
      "description": "O ex-marine Frank Castle só quer punir os criminosos responsáveis pela morte da sua família, mas torna-se alvo de uma conspiração militar.", //descrição
      "rate": 8
    },
    {
      "title": "BoJack Horseman", //título
      "cast": ["Will Arnett", "Aaron Paul","Amy Sedaris"], //elenco
      "genre": "Animação", // gênero
      "image": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/BoJack_Horseman.jpg/220px-BoJack_Horseman.jpg", //foto de capa
      "description": "Conheça o cavalo mais amado da TV dos anos 90... vinte anos depois! Ranzinza e com um coração de... não exatamente ouro... mas parecido. Latão?", //descrição
      "rate": 9
    },
    {
      "title": "A Máfia dos Tigres", //título
      "cast": [], //elenco
      "genre": "Documentário", // gênero
      "image": "https://upload.wikimedia.org/wikipedia/en/1/14/Tiger_King%2C_Murder%2C_Mayhem_and_Madness_publicity_image.jpg", //foto de capa
      "description": "O dono de um zoológico perde o controle e acaba acusado de encomendar um assassinato no submundo da criação de grandes felinos. Baseada em fatos reais.", //descrição
      "rate": 10
    },
    {
      "title": "Friends", //título
      "cast": ["Jennifer Aniston","Courteney Cox","Lisa Kudrow"], //elenco
      "genre": "Comédia", // gênero
      "image": "https://upload.wikimedia.org/wikipedia/pt/d/d6/Friends_season_one_cast.jpg", //foto de capa
      "description": "Esta série de enorme sucesso acompanha as aventuras de seis amigos que enfrentam as armadilhas da vida, do trabalho e do amor nos anos 1990.", //descrição
      "rate": 10
    },
    {
      "title": "The Walking Dead", //título
      "cast": ["JAndrew Lincoln","Steven Yeun","Norman Reedus"], //elenco
      "genre": "Terror & Drama", // gênero
      "image": "https://upload.wikimedia.org/wikipedia/pt/thumb/a/a2/TheWalkingDead-P%C3%B4ster.jpg/220px-TheWalkingDead-P%C3%B4ster.jpg", //foto de capa
      "description": "Zumbis dominam o mundo dos vivos, e os sobreviventes unem forças para manter viva a raça humana.", //descrição
      "rate": 10
    },
    {
      "title": "The Seven Deadly Sins", //título
      "cast": ["Yuki Kaji","Sora Amamiya","Misaki Kuno"], //elenco
      "genre": "Anime", // gênero
      "image": "https://upload.wikimedia.org/wikipedia/pt/thumb/a/a2/TheWalkingDead-P%C3%B4ster.jpg/220px-TheWalkingDead-P%C3%B4ster.jpg", //foto de capa
      "description": "Depois que seu reino é dominado por tiranos, uma princesa tenta encontrar um grupo de cavaleiros perigosos para ajudá-la a recuperar suas terras.", //descrição
      "rate": 9
    },
    {
      "title": "Titãs", //título
      "cast": ["Brenton Thwaites","Anna Diop","Teagan Croft"], //elenco
      "genre": "Baseadas em hq's", // gênero
      "image": "https://upload.wikimedia.org/wikipedia/pt/thumb/a/a2/TheWalkingDead-P%C3%B4ster.jpg/220px-TheWalkingDead-P%C3%B4ster.jpg", //foto de capa
      "description": "Depois de tentar a carreira solo, o antigo parceiro do Batman, Dick Grayson, encontra um grupo de jovens heróis precisando desesperadamente de um mentor.", //descrição
      "rate": 9
    },
    {
      "title": "The Sinner", //título
      "cast": ["Jessica Biel","Bill Pullman","Christopher Abbott"], //elenco
      "genre": "Crime & Drama", // gênero
      "image": "https://upload.wikimedia.org/wikipedia/en/9/99/The_Sinner.jpg", //foto de capa
      "description": "Em uma pequena cidade de Nova York, um detetive busca respostas para crimes perturbadores enquanto luta contra os próprios demônios.", //descrição
      "rate": 9
    },
    {
      "title": "The Witcher", //título
      "cast": ["Henry Cavill","Anya Chalotra","Freya Allan"], //elenco
      "genre": "Fantasia & Drama", // gênero
      "image": "https://vignette.wikia.nocookie.net/witcher/images/a/a4/Netflix_poster_s1.jpg/revision/latest?cb=20191120213257", //foto de capa
      "description": "O mutante Geralt de Rívia é um caçador de monstros que luta para encontrar seu lugar num mundo onde as pessoas muitas vezes são mais perversas que as criaturas selvagens.", //descrição
      "rate": 10
    },
    {
      "title": "Sex Education", //título
      "cast": ["Asa Butterfield","Gillian Anderson","Ncuti Gatwa"], //elenco
      "genre": "Comédia", // gênero
      "image": "https://vignette.wikia.nocookie.net/sex-education-netflix/images/1/1e/Sex_Education_Season_2_Poster.jpg/revision/latest?cb=20200110041110", //foto de capa
      "description": "O inseguro Otis manja tudo quando o negócio é aconselhamento sexual, graças à sua mãe sexóloga. E aí a rebelde Maeve propõe criar uma clínica de terapia sexual na escola.", //descrição
      "rate": 10
    },
    {
      "title": "RuPaul's Drag Race", //título
      "cast": ["RuPaul Charles","Michelle Visage","Ross Mathews"], //elenco
      "genre": "Reality Show", // gênero
      "image": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/RuPauls-Drag-Race-S11.jpg/220px-RuPauls-Drag-Race-S11.jpg", //foto de capa
      "description": "RuPaul está à procura da melhor drag queen dos EUA! E não faltam candidatas na disputa do título e do prêmio de cem mil dólares.", //descrição
      "rate": 9
    },
    {
      "title": "The Last Kingdom", //título
      "cast": ["Alexander Dreymon","Emily Cox","David Dawson"], //elenco
      "genre": "Ação & Época", // gênero
      "image": "https://vignette.wikia.nocookie.net/the-last-kingdom/images/d/da/TLK_S4.png/revision/latest?cb=20200514063718", //foto de capa
      "description": "Enquanto Alfredo, o Grande, defende seu reino de invasões nórdicas, Uhtred - um saxão criado por vikings - planeja reivindicar o que é seu por direito.", //descrição
      "rate": 9
    },
    {
      "title": "Riverdale", //título
      "cast": ["K.J. Apa","Lili Reinhart","Camila Mendes"], //elenco
      "genre": "Drama & Crime", // gênero
      "image": "https://upload.wikimedia.org/wikipedia/pt/5/50/Riverdale_Temporada_1_Poster.jpg", //foto de capa
      "description": "Enquanto tentam lidar com problemas típicos da adolescência como amor, sexo, escola e família, Archie e sua turma se envolvem em um grande mistério.", //descrição
      "rate": 8
    },
    {
      "title": "Riverdale", //título
      "cast": ["K.J. Apa","Lili Reinhart","Camila Mendes"], //elenco
      "genre": "Drama & Crime", // gênero
      "image": "https://upload.wikimedia.org/wikipedia/pt/5/50/Riverdale_Temporada_1_Poster.jpg", //foto de capa
      "description": "Enquanto tentam lidar com problemas típicos da adolescência como amor, sexo, escola e família, Archie e sua turma se envolvem em um grande mistério.", //descrição
      "rate": 8
    },

    
            

      

];

    