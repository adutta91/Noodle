json.array! (@user.liked_recipes) do |recipe|
  json.title recipe.title
  json.url recipe.url
  json.id recipe.id
  json.user_id recipe.user_id
  json.description recipe.description
  json.user_username recipe.user_username
end
