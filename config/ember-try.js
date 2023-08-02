module.exports = {
  useYarn: true,
  scenarios: [
    {
      name: 'ember-lts-3.12',
      npm: {
        devDependencies: {
          'ember-source': '~3.12.0'
        }
      }
    },
    {
      name: 'ember-release',
      bower: {
        dependencies: {
          'ember': 'components/ember#release'
        },
        resolutions: {
          'ember': 'release'
        }
      },
      npm: {
        devDependencies: {
          'ember-source': null
        }
      }
    },
    {
      name: 'ember-default',
      npm: {
        devDependencies: {}
      }
    }
  ]
}
