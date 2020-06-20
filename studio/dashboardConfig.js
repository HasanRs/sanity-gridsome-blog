export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eee3064f3b4c8fe0d0a9642',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-3tknggb7',
                  apiId: '4fc8d074-7b0f-457b-8e4d-07703cffb3b2'
                },
                {
                  buildHookId: '5eee3064e3bd7be8088940af',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-wakc9xr9',
                  apiId: 'fee4b261-e388-4e72-bb85-5b39cfd5be3b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/HasanRs/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-wakc9xr9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
