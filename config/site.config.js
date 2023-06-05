module.exports = {
  userPrincipalName: process.env.NEXT_PUBLIC_USER_PRINCIPLE_NAME || 'spencer@spwoo.onmicrosoft.com',
  icon: '/icons/128.png',
  kvPrefix: process.env.KV_PREFIX || '',
  title: "CO's OneDrive",
  baseDirectory: '/Public',
  maxItems: 100,
  googleFontSans: 'Inter',
  googleFontMono: 'Fira Mono',
  googleFontLinks: ['https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap'],
  footer:
    'Powered by <a href="https://github.com/spencerwooo/onedrive-vercel-index" target="_blank" rel="noopener noreferrer">onedrive-vercel-index</a>. Made with ❤ by SpencerWoo.',
  protectedRoutes: ['/🌞 Private folder/u-need-a-password', '/🥟 Some test files/Protected route'],
  email: 'mailto:spencer.wushangbo@gmail.com',
  links: [
    {
      name: 'GitHub',
      link: 'https://github.com/spencerwooo/onedrive-vercel-index',
    },
  ],
  contacts: [
    {
      platform:'email',
      link:'mailto:tuykeyco@gmail.com'
    },
    {
      platform:'github',
      link:'https://github.com/tuykeyco/onedrive-vercel-index'
      }
    ],
  datetimeFormat: 'YYYY-MM-DD HH:mm:ss',
}
