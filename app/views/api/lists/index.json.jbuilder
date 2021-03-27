@lists.each do |list|
  # json.set! list.id do
  #   json.extract! list, :id, :name
  #     json.tasks list.tasks, :id do |task|
  #       json.id task.id
  #       json.title task.title
  #     end
  # end
  
  
  json.partial! "api/lists/list", list: list
  
end