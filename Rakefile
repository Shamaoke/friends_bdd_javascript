# encoding: utf-8

desc 'Run all features'
task :cucumber => ['cucumber:all']

namespace :cucumber do
  desc 'Run all features'
  task :all do
    system 'cucumber.js features/*.feature'
  end

  desc 'Run wip features'
  task :wip do
    system 'cucumber.js --tags @wip features/*.feature'
  end
end

desc 'Run all specs'
task :spec do
  system 'mocha --color --require should --reporter spec spec/*_spec.js'
end
