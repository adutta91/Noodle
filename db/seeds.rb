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

user = User.new
user.username = "ecombs"
user.password = "password"
user.save!


recipe = Recipe.new
recipe.title = 'fondue'
recipe.url = 'http://www.google.com'
recipe.user_id = 1
recipe.description = 'simple fondue that tastes awesome'
recipe.save!

recipe = Recipe.new
recipe.title = 'salad'
recipe.url = 'http://www.yahoo.com'
recipe.user_id = 1
recipe.description = "easy salad that's really healthy"
recipe.save!

recipe = Recipe.new
recipe.title = 'soup'
recipe.url = 'http://www.facebook.com'
recipe.user_id = 1
recipe.description = "grandma's soup - with beets and butternut squash"
recipe.save!


recipe = Recipe.new
recipe.title = 'bonbons'
recipe.url = 'http://www.google.com'
recipe.user_id = 2
recipe.description = 'simple bonbon that tastes awesome'
recipe.save!

recipe = Recipe.new
recipe.title = 'pizza'
recipe.url = 'http://www.yahoo.com'
recipe.user_id = 2
recipe.description = "easy pizza that's really healthy"
recipe.save!

recipe = Recipe.new
recipe.title = 'fudge'
recipe.url = 'http://www.facebook.com'
recipe.user_id = 2
recipe.description = "grandpa's fudge - best thing ever"
recipe.save!


recipe_like = RecipeLike.new
recipe_like.user_id = 1
recipe_like.recipe_id = 4
recipe_like.save!
