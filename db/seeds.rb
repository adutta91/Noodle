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
recipe.title = 'bbq pork'
recipe.url = 'http://www.epicurious.com/recipes/food/views/brown-sugar-bbq-pork-butt-56389621'
recipe.user_id = 1
recipe.user_username = 'adutta'
recipe.description = 'brown sugar bbq butt'
recipe.save!

recipe = Recipe.new
recipe.title = 'poblano tacos'
recipe.url = 'http://www.epicurious.com/recipes/food/views/herby-ricotta-poblano-tacos'
recipe.user_id = 1
recipe.user_username = 'adutta'
recipe.description = "herby ricotta goodness"
recipe.save!

recipe = Recipe.new
recipe.title = 'chickpea feta salad'
recipe.url = 'http://www.epicurious.com/recipes/food/views/-chickpea-barley-and-feta-salad-51239040'
recipe.user_id = 1
recipe.user_username = 'adutta'
recipe.description = "mmmmm salad"
recipe.save!


recipe = Recipe.new
recipe.title = 'enchiladas'
recipe.url = 'http://www.epicurious.com/recipes/food/views/skillet-chicken-and-zucchini-enchiladas-with-tomatillo-sauce'
recipe.user_id = 2
recipe.user_username = 'ecombs'
recipe.description = 'chicken and zucchini with tomatillo sauce'
recipe.save!

recipe = Recipe.new
recipe.title = 'cheesecake'
recipe.url = 'http://www.epicurious.com/recipes/food/views/three-ingredient-japanese-cheesecake-56389916'
recipe.user_id = 2
recipe.user_username = 'ecombs'
recipe.description = "three ingredient japanese cheesecake"
recipe.save!

recipe = Recipe.new
recipe.title = 'charred caprese'
recipe.url = 'http://www.epicurious.com/recipes/food/views/charred-caprese-sandwich'
recipe.user_id = 2
recipe.user_username = 'ecombs'
recipe.description = "the title says it all, but in a sandwich"
recipe.save!


recipe_like = RecipeLike.new
recipe_like.user_id = 1
recipe_like.recipe_id = 4
recipe_like.save!
