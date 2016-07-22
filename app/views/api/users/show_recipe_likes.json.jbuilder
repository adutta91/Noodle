json.array! (@user.recipe_likes) do |recipe|
  json.title recipe.title
  json.url recipe.url
  json.id recipe.id
  json.user_id recipe.user_id
  json.description recipe.description
end
