# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
user = User.new
user.username = "adutta"
user.password = "password"
user.save!


recipe = Recipe.new
recipe.title = 'fondue'
recipe.url = 'http://www.google.com'
recipe.user_id = 1
recipe.save!

recipe = Recipe.new
recipe.title = 'salad'
recipe.url = 'http://www.yahoo.com'
recipe.user_id = 1
recipe.save!

recipe = Recipe.new
recipe.title = 'soup'
recipe.url = 'http://www.facebook.com'
recipe.user_id = 1
recipe.save!
