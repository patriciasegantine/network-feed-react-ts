  export const posts = [
    {
      id: 0,
      author: {
        avatarUrl: 'https://github.com/patricksegantine.png',
        name: 'Patrick Segantine',
        role: 'Back-end Software'
      },
      content: [
        {
          type: 'paragraph',
          content: {
            text:' Hello guys! 👋 '
          }
        },
        {
          type: 'paragraph',
          content: {
            text: 'I just uploaded another project to my portfolio. It was made at NLW Return, the Rocketseat event.'
          }
        },
        {
          type: 'link',
          content: {
            text: ' 👉 patrick.segantine/back-end-software',
            url: 'https://github.com/patricksegantine'
          },
        },
      ],
      publishedAt: new Date( '2022-07-03 20:00:00' ),
    },
    
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/marcosegantine.png',
        name: 'Marcos Segantine',
        role: 'Front-end Software'
      },
      content: [
        {
          type: 'paragraph',
          content: {
            text:' Hello! 👋 '
          }
        },
        {
          type: 'paragraph',
          content: {
            text: 'I just uploaded another project to my portfolio. It was made at NLW Return, the Rocketseat event.'
          }
        },
        {
          type: 'link', content: {
            text: ' 👉 marcos.segantine/front-end-developer',
            url: 'https://github.com/marcosegantine'
            
          }
        },
      ],
      
      publishedAt: new Date( '2022-06-03 20:00:00' ),
      
    },
  ]
