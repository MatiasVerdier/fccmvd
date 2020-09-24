interface Author {
  username: string;
  name: string;
  email: string;
  avatar: string;
  github?: string;
  twitter?: string;
  company?: string;
  web?: string;
}

const authors = [
  {
    username: 'matiasvj',
    name: 'Matías Verdier',
    github: 'MatiasVerdier',
    twitter: 'matiasvj',
    email: 'verdier.matias@gmail.com',
    avatar: 'https://avatars2.githubusercontent.com/u/5176883?v=3',
    company: 'WyeWorks',
    web: 'https://matiasverdier.com',
  },

  {
    username: 'annata',
    name: 'Nicolas Villafan',
    email: 'nicolas.villafan@gmail.com',
    avatar:
      'https://res.cloudinary.com/annata83/image/upload/v1488354514/face-profile_zzoh8o.jpg',
  },

  {
    username: 'matiasnunes',
    name: 'Matías Nunes',
    avatar: 'https://avatars3.githubusercontent.com/u/20195470?v=3',
    bio: 'Diseñador gráfico/web. Programador',
    web: 'https://matiascreaweb.uy',
    email: 'info@matiascreaweb.uy',
  },
];

export function getAuthor(username): Author {
  return authors.find((u) => u.username === username);
}

export default authors;
