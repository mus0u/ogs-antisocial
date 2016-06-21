#!/usr/bin/env ruby
require 'json'

project_dir = File.expand_path(File.dirname(__FILE__))
project_name = project_dir.split(File::SEPARATOR)[-1]
Dir.chdir project_dir
version = JSON.parse(File.read('manifest.json'))['version']

puts `zip #{project_name}-#{version}.zip * icons/*`
exit $?.to_i
