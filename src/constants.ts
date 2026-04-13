import { Post, User, Comment } from './types';

export const MOCK_USER: User = {
  id: '1',
  name: 'Elena Rossi',
  username: 'elenarossi_studio',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVRjAiLhH1R2S_niXX8tRIVwxPL3udeGEE0K8_lHeA60SahktjEvLMjC-GtcAh-oJB93A-Ts1dPPbcOAFu3NxugD-R2hgCeubZ0o0ISti48yDgomjKqOVgZQh6JDn-uzXt_JNSgtvPInYEYQ_zHzROgeNm9D2Qay1mW_SBbckjZIoPCAspZqK2yS7IBUuak9c3WhmAf56AcLT82aIv-ANIkzA87WSclx54fnErem0EYWgQGKe-Z_InWYcDxSseP993QWf3tJc4uUPK',
  bio: 'Visual storyteller and editorial designer. Exploring the intersection of digital craft and physical textures. Curator of the "Quiet Luxury" collection.',
  followers: '12.4k',
  following: '842',
  likes: '45k',
};

export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    title: "7 Hidden Spots in Tokyo You Can't Miss This Autumn 🍂",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrREB2k_epYwEvlkse74b3lv1NJvEbAM0Zaev9tFjqP007Ace8ST1I7j1l_U15GftWBNz2EqBStrID4OR_s_tHwxolmu7nHt_njOsIcBFSyfQLiat8tMGXU9q2qDzXnrIVtbqUxR6AiaT-XASOHEKa195kBNnkfMfwpm_2w_m1g7Ps3RJh7XdJz5MPdUtaGLGws4Uay7mMuORW8XH5i1HrRR6oYcISQb_KpvDZ86j-IpCSEJB-rzDTyxKYWCE3hHiXHA6_s_R_mSX2',
    author: {
      name: 'Hiroshi K.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-XgOV2Sh43QJnTiWk-uYhjZh8SI7ucjYdS7_7CaC_y3Yibfr_RLcOA2ZTBn7bL9GKaOng-2eH1IFcE9bloYFPlATkv7HpAO1c3mvdA1Sws7TDMy_uPltxTGnD7nHgNCZu3pJD_igmbZuepCga-GaX59D1m-CJcMxCxSX4GTozjUJmJ5FCO3WTt613h7eDSiNse36NkSlYDh5ls2LktMASZBkE-NvHnBxwzsmZqcLbH11q1-mUH4aVI8a__kRBQ4iGDY5pWMeW8FHo',
    },
    likes: '12.4k',
    category: 'Tokyo Guide',
    aspectRatio: 'portrait',
    tags: ['#AvantGarde', '#ModernMinimalism', '#FutureFashion', '#CuratedStyle'],
    date: 'December 12, 2023',
    readTime: '8 min read',
    content: "In the intersection of structural design and fluid motion, we find the core of modern aesthetics. This collection explores how silhouettes can redefine spatial awareness, turning the body into a living sculpture. We've curated a selection of pieces that challenge the traditional boundaries between apparel and architecture. By utilizing technical fabrics that respond to the environment, these designs aren't just worn—they are inhabited. Each curve and fold is a deliberate conversation between the wearer and the surrounding space.",
  },
  {
    id: '2',
    title: 'The Art of Slow Living: Morning Rituals',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAofimyQfMnVGAHk6XUHUdFisRkEhlr5--ktxq6Xf2bc5TN446gnUSkokaXcMHeMUlERxfxHSWzqyOBMQ_-4kH2MCLCE68Q8swJQvrSmFa4cxs1h9oggGcC7LKlgTzArpdWW8unn4vHpEvsJcmdeC4rl-VaHLZuOub7-izAabyuX6wcdPEoSvsxR_Bnts7z3na_8ECmEMJyp0wfuRGwEXp3KqVsvuWOIbO_OS1B04St35_eK6ipsH98qUxUEU53wa18zMSM_wEDlll',
    author: {
      name: 'Luna_Design',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_2xhKOPVDs-qlyRDSXB1NlVOeSeLzQofc7oXNR8GxeKgx5_hXId3IyEn0SlyW2t8e38OYglOnhpRp4rc9YlQQOAcQhtwYss5cHdBWgOBNo539FA9ny-mbxqo4qa3xuYw8XC2rQ49aizQ3tuIyerH2xWNtOnnsThEOGXDBYEJO59ww9vzDZlJvPt_-KN4hUwbyojknlBBdRmd_A03rZYq4PoRCa-Dk4tAOfU58i_efdgn11_yNGEgP__Bq9M_LNBHf-7V-k-1q4YUO',
    },
    likes: '8.2k',
    category: 'Lifestyle',
    aspectRatio: 'square',
  },
  {
    id: '3',
    title: 'Red Velvet: Bold Fashion Trends for 2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoRdBorp-gSUERUYdwY_44YJDsTGkSRybjLoiRAIPkblvu25D6lW2jHRSHuFOTPZBmWaF6qMaTWudY42hltc6J44kii_YWo12LrOz_clb7FX3Mqp289KaWKMa0SA_tVI95sIK1L03IkT3SvbG6krEko1FD4OFmusmSkDiP1qdMdeot4-t03yOmQUGpTms3lawJoYXTQ6b1sSIlpJT5BKg3VrRYiuNjv1sfGScdZrPmleHWbMar3c1ZquzQk3J5ZP4cAj77Ec_bao7n',
    author: {
      name: 'StyleArchive',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj59v1LbuphEfFUHvKfix_Iu8e-IQftXOQ_cPmEaldvY4mhQksTtlXmgzJNR_1mV2q4L7sDV_KcKeuo0UOJPGO_zm3qvz2Zmow2YiWvQb00XjndJXfQyx2VkmWI6DzUXQp8tfesD9tYHeGDBGH4mifFAS52HI5o-nVgsLDtCFu3DbsEwY4T2xxUFNtOz41mcyBPIl0hw27G-KWkJSo_nqdM6CpbKH2THp2JXOnM0Ghl6V9pDU-Z6VTx9awmk1NVLXjhGv2H2-XJVtU',
    },
    likes: '4.1k',
    category: 'Fashion',
    aspectRatio: 'tall',
  },
  {
    id: '4',
    title: 'The Perfect Brunch Spread: Healthy & Delicious',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPp5-evAOpkPFRkS__osoVn42dLkAx_ry2zTskZqs3zQEAXyVnJ9YsHtHl8j5gwbmQXDczKL8uzo89EGcQwbjZdBEqkKC32koBbonsx2wO3IF2MwsZJr83feTEV2GUn9YTsf2YzBKDjGMEbREaHSITB3Na1VAvm9L5XNQnkGaMdjnsb0Zho-lIywbV7fbUR-nlWgkx2nJ0x5usTaf8NzbQ7cWE6RveljQpUpMTLSdeXmgPd29FwGvpah_hFeyjLMQEfhfIx3JxnMUU',
    author: {
      name: 'FoodieExplorer',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8KkZWBJ2H2zVzhE6S6Hvbom2yHbeoRKEn-fBpFS9rFFqWtJt6IHKgYUJcFkD6qsDbD8CwgCvw3LdqazIkkyt9yaoNlr5aSoEmOD5jAMauCEL7hoBFZ3DC2ghn_4hweAGm7HrRqheU1gdiAuj-OEa-vLZUmuYFUjahlH8-Z5JcoKJ1vfvopUf0vvThbNW3FQ0QBb6tesljfXOubH7b6WmBe47SqMMyzAls_pkh4hq14hXMw-El_m-lDFybK5jgN1L_zEHc2YNkRbC4',
    },
    likes: '15.9k',
    category: 'Food',
    aspectRatio: 'landscape',
  },
  {
    id: '5',
    title: "Bali's Most Photogenic Resorts 🌴",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0oQJj4XJFgDLPbABkqsTRr3ErGntWRSH2t5tQoD-zgVa2V3K71d-KeALiIpbwICqBpk4WwJi4yITZPFaryVs-iDR02_umRmi-TWUlNrtnPw2QyifviLA2oDe2fAj5oIWNQFSOrt170GKfFnomFAo9WK8wVIIO2kF3KZLxT4o-ox5XvDtauX3R55rQ4bL7UHAprsVG3p_iwHnSvkW6scN8MQjsIBFO_A_428ZnJd6wIt7o1kQe0sGhqtFeqcMu8MxC04Hw9BPaHoMP',
    author: {
      name: 'TravelWithMia',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCT_-AwI0_Pibg8zc5EcpqXzjXpn310-HSFd2tSfL_OubWbJDzY8QOMFkGc3ukkDUQq4o3TFFXMBrlZ2sxwE0F_QxCsisarrO1_UEqi5L4LjcMb6PWrH_xCBu3JBGSq_YHd3JH9MfeJZ--rcQS1dYZrIRKl0xEdFaanrKjbNfYkCD9rURZCkxLOMHt3X81K0izbgmWlAluV5ci5-XKzfnjntfrJp4wVD0pBRNGgjI_2-beKlbGXtp78a4QTgg2Hhb_lVPWxTPw-Afpf',
    },
    likes: '2.3k',
    category: 'Travel',
    aspectRatio: 'tall',
  },
  {
    id: '6',
    title: 'Industrial Chic: Living Room Inspiration',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0OrawbGU2iHhK0F7YgueoV7uwA2woVZnHfmphWn6YFgIQG3dFMUt1ZWhUoeBqQSE7RKfTMmfgR3754ckr8Rcq7LBZJC0d14NokkhP8KyLTA0c_4nWR7hhQlxQKTnna9Lxsqm8QjE7JE4ZOYHAuRrQDAvcfE5jucuKAR2YMVwCa-YmJIS0jyENaaOHe9kUp8TwmBqgrjUzL3ZbO1JnEnGxOfv35_Ey34iWIAk8w_JE1Bs6fyfEb2nvlGBOrTrwycOijRnR0KCJnJMp',
    author: {
      name: 'ModernHome',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfF00YvnoCBpRUlVOJapJzt0e62OLjEyOfjRpdbksjGl8kkxEiZFqt3in63DlpiG6EJmel0htgcR5IRjpFzGlb3eVi-KBYDVdulufZZM4P9_LvEOjx9RLTO5dSoVY2kZKAUzSovwit6Iyi63zS21Kasqi-wlW59mVeOFZaMdstVSVxIiwJ61Of1KKQYEDSSLqrhiHz0xYkUI5QI0iqdPC_bT3ezXGvR64GD1lTgfj3HV6YbyhiS90KVzfpNLamMErBr9IePz6j3pNG',
    },
    likes: '5.7k',
    category: 'Home Decor',
    aspectRatio: 'square',
  },
  {
    id: '7',
    title: 'Mastering Film Photography in 30 Days',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9zfcf8n13SSd02nFQHgq9ZzYHFeZfL-tCI03D3pnoIIBKZfkuF6FtEz2UngIdnIoTnUhJC4ShigEsB9jGoasoI-gANALH5Qek3RMi2yWkQszRqvRqxayXtjctPWU4uf9K-SzWh6w3tm9-PRnovvgYtaBipk0RgTXoBnKMMOFFFeusSdAlU5k4P-jI7fcmb_NzxZ-ISE51Q9aiy37i9cfh7fuYODTti90TP24prWjnDggqfer0RKU_Pjyi1VfaxrT7RZV0MumwPGWO',
    author: {
      name: 'AnalogSoul',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL_Hi7VQdMDiHBUGz1W-_5Cl37y5vRxosQ8sBERw-ogSicf6iVIs9eWlbP7ekcHpyUHM7BXTnwFLvmNvKbgW30gIaeUCzC55_etxxkx9yNHDS0VJQcY_enbvBJCdKwKnl0vlxKAObuyPLLVnHZlwzYSO96EPoWaNVukpF1mSzhEOmSOec-7Zjo53tWZ-qN46fh7Duc3KkKEdcAO61snaGSdsGO5p_aGt2OB2WN2cN1wOK4tFmxvJ1gljd7Dwz7HVi_z-w0FEQGuTdI',
    },
    likes: '9.1k',
    category: 'Photography',
    aspectRatio: 'portrait',
  },
  {
    id: '8',
    title: 'Minimalist Jewelry Guide: Less is More',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjoE_Jc3j4oBiCgg0fKSZt9TwDdQ0hS84sg_uK3d33NS6eKjK14snighrAYmtGW3ppLEbRAOfFo7dMSFQ6TJkqAQtwQI1OY_8CvaaxSbJR8jQbXGy5nM4MiMmFmKVoqULonbFgZZFA8B9BdaV8eRh6Bfwk44HsOLsSDbrARBErXi0adT08BUrvu4Vjox2D3BaQH8v8SWE9YSeGVWZny00K0CMuEN6XDmDDdJpuL4BrcFMWLrbqXfnlfTfNGdEseM0TVku-Z8vFwiuT',
    author: {
      name: 'Gold&Silk',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-hByJOD8OEEaut8e-qoW8J8ZbUVXPNwjHGbUcg-U3b1HkhcrpbCVxc8nz4I4LnXZeqONBURV10f-3VPRLOB4u7NOsvzGhFv9XMCKgcOyZbt0flk_vhWMzsMT_XjyqHlaoBBRArGvUZoqsPXqRH4N6YpzkfiMSqd2Qa2QciS2LTvpJOiR9NdABf1ZXwSs7r78knLyularhvANG738DqUd3HGG50Y1P9yuu0vH7B6TEF-LvPKjt1amb8lM2-KyQM9PQh0JdUL0pqziD',
    },
    likes: '3.8k',
    category: 'Fashion',
    aspectRatio: 'tall',
  },
];

export const MOCK_COMMENTS: Comment[] = [
  {
    id: 'c1',
    author: 'Elena Rossi',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDmNZythqwph1Z43HFT38xbgsFXyZd_v17xFvQhSc3cF3rXAiYf15pbR7asdWwrcScLf_rxVhGKywc0n5pk4RKbwXC4yVHJlt_kAjLD-MZbevlkbGUti5Zc06r87XvYFz-ZK3Krwi6QOgJz5nQEsTpYgN1V8dnmjals9NEThRsXmcaGHN8DX98HbIzHw2NmLul_aC0plRoVAhVhJ157uiHYla36V9cOBwGmqtYDFiVTQdDZQkQ4mK-GzuGbh005ne2lgyZmKO9UZVo',
    content: 'The way you described the relationship between technical fabrics and space is fascinating. Truly an editorial masterpiece.',
    time: '2h ago',
    likes: 12,
  },
  {
    id: 'c2',
    author: 'Marcus Thorne',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsrqb_l-kD-SGUnYfxNdALZGfuAXKQ7c4kkONC0bYtpA0aDsld9DQ0Y46oaLKnqnt0DnUhC6fzl0E8etzp0phgUd-gDhpx5OPTbv1NeIt_6TIPJNtM4CVGzxU-95eyNDwIIDSB_ClDK0Rm7SNTo-WXlKPmzKmbu_qSsksaCFB0sRD652chzN97VcloHkI5JIXEcFMua4W13pjplwdmctH0YRvu0qbTajy78_QtBmgVLpZgB--zIgdDKleh4wic2hw0AbMe-AWWrdpq',
    content: 'Love the asymmetric layout of this feature. The photography is world-class. Can we expect a physical print of this issue?',
    time: '5h ago',
    likes: 4,
  },
];

export const CATEGORIES = [
  'All Posts',
  'Lifestyle',
  'Photography',
  'Tokyo Guide',
  'Minimalism',
  'Home Decor',
  'Coffee Art',
];

export const FOLLOWERS: User[] = [
  {
    id: 'f1',
    name: 'Julian Voss',
    username: 'j_voss',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvnidims0YHOqBOHlZC3RBwNUu9l1VBYN4iDWxoTPzV53fOS7Asiivm6oi0Bz1bGnT6fBTkC_uUCCwSyKf8wuXJqanrILXgDEcTdYkQ28zMNbPdjwCl0mWa4t48D89dibLQwI6vpLFkAm518BVAbuQ_2hrGP-YtsdQWG5TzrLMgGA_D1q1y_GVXY9wlBjjH9_az_Jpc-tmH5m8GRh9Oq-Oq0w1EC_HlAX5xDPhlZQYT06y0cV07B3CLTS38sucQLSfgLrresEq9cwK',
    bio: 'Curating minimal architecture and urban textures. Based in Berlin.',
    followers: '1.2k',
    following: '842',
    likes: '15k',
  },
  {
    id: 'f2',
    name: 'Elena Rossi',
    username: 'rossi_edit',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuYNDMwaLM5DIxmoGWa6Mk38kjvPKrSlsVTcGXYJWA-yNDRrQYMajYlEKKnTFFJi_U2147mhDEk60xr2mwSMzN1D7cOpZqluUXeTB5S051u4pwJ6cR6D5_e9D8a6LsXHX8yRvGjWUbpWP0PK4wUAx8lmY0E645ajYzrK_ZBVc4B3xkoEbPiiZPPgNHs1JYdbjIBAUqtVqmEVNFcWYx4FD2WUlKtsvCGNj0vCSgqgaRfKwNZKX-VKUFMEUkWSy54qUPVDHzV5O1Ph9J',
    bio: 'Editorial lead at Aura. Obsessed with 90s typography and film grain.',
    followers: '12.4k',
    following: '842',
    likes: '45k',
  },
  {
    id: 'f3',
    name: 'Marcus Chen',
    username: 'm_chen',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1SbndD0hOPJ8ydlSJIWwZIsTBfnfBgoxbU7vMzkT69TnHhE-6BCPBkydFbctACt0H8soUDkA5BmmHCcuH3KpniN9ghRAV1dwnEoJWTa5ktdXtey9yCUUBxH0OUVJi2kgvyD7qjWrg_TdyZLZcdONOTUxHvLbaMWyk5cGmuxfedcDbtsj6lFMu0nPXDRaxtCLt4MlVm2mwoLOpLkdqaqJ2NxnAC2ACEoqOZSG0QJvwyk8hUy9DAQXBbM89Lwb8F1isVswZaQjfXnWr',
    bio: 'Digital gardens and software ethics. Writing on the future of social.',
    followers: '3.1k',
    following: '1.2k',
    likes: '22k',
  },
];
