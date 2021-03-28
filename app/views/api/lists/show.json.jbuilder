# json.partial! "api/lists/list", list: @list

json.set! @list.id do 
  json.extract! @list, :id, :name
    json.tasks @list.tasks, :id do |task|
      json.id task.id
      json.title task.title
      json.status task.status
      json.description task.description
      json.due_date task.due_date
      json.comments task.comments
    end
  end