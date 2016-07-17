json.array! (@user.recipes) do |recipe|
  json.title recipe.title
  json.url recipe.url
  json.id recipe.id
end
