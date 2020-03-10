module.exports = {
  branch: 'master',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        'releaseRules': [
          {
            'type': 'build',
            'release': 'patch'
          },
          {
            'type': 'ci',
            'release': 'patch'
          },
          {
            'type': 'chore',
            'release': 'patch'
          },
          {
            'type': 'docs',
            'release': 'patch'
          },
          {
            'type': 'refactor',
            'release': 'patch'
          },
          {
            'type': 'style',
            'release': 'patch'
          },
          {
            'type': 'test',
            'release': 'patch'
          }
        ]
      }
    ],
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'docs/CHANGELOG.md',
        changelogTitle:
          '# Changelog\n\nAll notable changes to this project will be documented in this file. See\n[Conventional Commits](https://conventionalcommits.org) for commit guidelines.'
      }
    ],
    ['@semantic-release/npm', { npmPublish: false }],
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['docs/CHANGELOG.md', 'package.json']
      }
    ]
  ]
}
