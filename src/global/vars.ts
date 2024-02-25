import { NavBar } from '@/types/types';

export const NAVBARS: NavBar[] = [
  {
    heading: 'Інфомація',
    links: [
      {
        title: 'Про нас',
        href: '/',
      },
      {
        title: 'Контакти',
        href: '/',
      },
      {
        title: 'Зв`язатися з нами',
        href: '/',
      },
    ],
  },
  {
    heading: 'Навігація',
    links: [
      {
        title: 'Категорії товарів',
        href: '/',
      },
      {
        title: 'Акційні товари',
        href: '/',
      },
      {
        title: 'Купувати та продавати',
        href: '/',
      },
    ],
  },
  {
    heading: 'Обліковий запис',
    links: [
      {
        title: 'Особистий кабінет',
        href: '/',
      },
      {
        title: 'Історія покупок',
        href: '/',
      },
      {
        title: 'Мої оголошення',
        href: '/',
      },
    ],
  },
];

export const MOCK_CATEGORIES = [
  {
    categoryName: 'Техніка та електроніка',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/0767/4497/8e65bf95bc80ab74f668fb9471057297?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fIgcg-A0MRn5aagdEVv56~~YmpBoT~24BNJVP0mtp9LI56UuDKweDDQ4StMxiCjXlMY7h4P9Bb5PlsgXwAcG0DketF3BOpPQ8-G1v3mYNSNZEZ6dAfPdQTH~GPuWezTtn18DuNqgwd8CtSD7iScQskzs9dcUqTTVUR~nxx1iMj4Me~QpTE-hXFKwzmtH-OOqYbNqcsEMPEnecF93E-SwbUiYTLJcl8jFv-JT02bIt2JJ8A2FNEBJzTI4CX2aITZ7veWQ2YNnuIEDngMNAfQtzWsV96mJMbZG2AOU~XkVKrHr4dEab~elOLUOkGSwhzERf-ZRDQG37SYj1hlQfXWYVA__',
  },
  {
    categoryName: 'Одяг та взуття',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/431b/dcd2/2b4b1283a695e4b45ef10b711603aea8?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z4KeaTNJ2zmsHdjrUn32GwJK0lEWLOm~6kHolfPpvedoxUeIUCLHSiBG2itsRAR~IFJVb397kEd5yNXDmiFVj2cj3v9o3fDGWNIzaf0M1YGukRxx9vgXBf1mYzdojMNKq40Tqq7HDaG8M1YvPyjoQkOxO4rfbFRKmybOYFDUUItryu1U4i99ze81aCfPPFZLD1MJQ6gWDz9V4GCCP41x1u5vpfBEnH9Le2grga4D-09vShYQicpv9RnoL~7Wg7vk4YfGmptLm-eVWx~abc58XuVitiE6gQJ22UKv9d-vYKIkRdXdPErWSRTdHQG-lyOLtiwXtWIeqzMFFEYRVRFb~w__',
  },
  {
    categoryName: 'Відпочинок та спорт',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/b8ab/47f6/02bf1c9fd2563d728565cee760b18a7e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=POtNDuhWOrxFBCv-MDa1B2toEEj2NHTMI0I1u4s8A2qldDp96xAUZTI75ti3vEbYpBj4g3kAE7JI9I4bHTM8PcciQ2P-BN2hNG-etwRoCG2Ia2nxrCGtnZVDvYxFzj1T3lQsUlGD4A080Vpf9cpk3ck2Nwqx9OVcur4it8F9Wq32cqFA6ofzYWdcnndVGVWC0Ptb2sFIgpIXhVRwI-xpjsz7ikGNQS~btiLKl8jWGboCSU-uKwhwGff6FBnl6qhx-HjRnEHQkT-n5IiqbysQnonSZeS5FWm1IOnWhuqgkGX3WgKeoHxsP31qR90Raj7gHkbumkp9m0BjmcRPR0kdsQ__',
  },
  {
    categoryName: 'Дитячі товари',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/0c4f/e21f/9c353f181a7912eecf5c8a00eb645c2d?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jcpvjiut6k0v3zGVIW7afiFJIpqJ8ydRFpd-9wUEsf7naiGUYg0EY0452ZidpqZUmm~-ygyowt-iCx4jviXW-Ofh6PBm~Ce-qJIXv6TK5RDDiRhDeLFnNxygpbeARs1Rf25BVO8aqcSRI8P7Vj722sHgYfMGTq-XV1Ojdh4HuSmGWK4J1l2aw1ELOh6Az-KkuLH8kSnJ2AaQ72WNRyFvCgIba7CqzebDizTUbpinrylEldRDeHYsQY~dsEBjZce5xMBKweNcTajEf2BO2LK~Bh5p~bcBGvkNnS5UJsnx-6bZAPdAQKeCYsP0kBCbIyOU0HTexVSRNQHzvBiNAoU3qA__',
  },
  {
    categoryName: 'Краса та здоров’я',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/e1a8/fcbd/10fc20fbb823378a29f32d74f2f98535?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cF-99Ng7Vzu5AfMxz94OHIAoeD5AtK1aGAVGnhGwFwFgieOalUeeNl22vtnSsP4PecPuKrqqK3rQX9CPp8wAl~H7KcXdg6lMPF4dX-~g~20ir0z6pj8ttZuTATluM6ae1A6wGBRgTmhP9hWNO8rrdfdk6FWwJCbB4itfAAjsOVTBNn-M9E8nxXo3i07c2-wUSWtGM6RQnicpyVW8QLQ9lFzBQ1G~V8hB9vRdKvq269jIMjptUXkgiP19P1HgB70xdS~gXJPDKtQHAYg8o1hKTsfP1q0jXrClvWxy15lNM4mqV5ikR5qtRxmvN28tvlDVdlS56cnQ~YPiImEhXvmenQ__',
  },
  {
    categoryName: 'Подарунки, хоббі',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/5426/bd95/cb8a03ba7c0f7b87d12ea1a9741d2202?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VnWx465XFqdnyFaTlkCuWkL6b4PEw-4XuS4RUTR49yHTih45ow2dINPkt2qyCFSV687AhjqvKLTPYeDTPBt5wO~vFZ9XTQllNqvjltvLuvuzeaWJaagkCEQ57qa0XnQZMsFOJ4Og9IjzAlRsHFKunXrG5CnkOw-Sw3WhKCGIzu9NsdflgK-3ZOVtMx2u3N9KylPAQmFrnyue22lf~86pLLZLyOtOEi9OuWop0K5B6jjzGsum1xvBX-QKNZUraanp3v6DKI7YzTcU-sIEdkrpAxTO4nC44e9CSKxzs3EaVkdg7-9S~3HnxwqaEjZHG1WvhDIYPKuZpoI9nd5orEVRJg__',
  },
  {
    categoryName: 'Книги',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/eb8d/a2ae/4279ff6a7c371c233cbffe7cda6b9959?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WUco9-ZIPqpxzpqrFTxwSwq9nmZwA7rSQVQg1uZYEGWiULVuWB1HKaoT~egNy6UMKDaJVke~-YNkV~DSYaCMV~dMpA1U7VmR6EHJFnP8JFG~x4IYKL6OBUlRRqd599gHCff0CfE3rEKhPGdTmqjBt5BNbTDLBNnWd6RE~j84kk37Jf1oyvMTiK7Q7s31r2H--TsO6QpMtWjxzl89Ft0vxzHUvLogOoVHiqR2HKJzcwcyEoBB6lD5LuVTYngPvZm2r627Rbhd3iMZ42ZDxlIy9Q24zNHkOGXSMnpC-z1JyiZidavZ4CkKNVpHF2VmRY83rCqR~hjh~S7JM98hl87~Xg__',
  },
  {
    categoryName: 'Домашні тварини та зоотовари',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/9b5d/05a9/96e0037e655092d5f21ad175183bdd60?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KkjSBIXp6Udjz2mlrwg65d4gatSlVdr75xULxKR~K60DO1kfLqBY5zsYB1OV55nfu8PNSbhWuU33ZWRkNFP7QqzlPk~VlngsSEDhUXFLhkM-tRUmHff843m54iQvWJu3XI2QaX8XcUAngRqK2bHtFlLN9LEw0B6Q6MMEFAuZExpnwB8G0j2CIXKKuPcf4PKQi-iidlCW9yYFjoH8~-WEZcQTHl-bywlgM~dRu5Cq1V-bee8wZpw7JwZ1fErZELmxbV8WsYHkdVg8jtznKIPPYouLTcUNTYjf8Jw6gwjyHCzWHZxktGwkc2l3~3Dau~twjrS1UeCb-k1zLIgzEd1CeQ__',
  },
];
