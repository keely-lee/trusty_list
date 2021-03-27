# list.each do |list|
#   json.set! list.id do
#     json.extract! list, :id, :name
#       json.tasks list.tasks, :id do |task|
#         json.id task.id
#         json.title task.title
#       end
#   end
# end


  json.set! list.id do
    json.extract! list, :id, :name
      json.tasks list.tasks, :id do |task|
        json.id task.id
        json.title task.title
      end
  end