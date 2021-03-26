export const showLists = () => {
  return $.ajax({
    method: "GET",
    url: "/api/lists"
  })
};

export const showList = listId => {
  return $.ajax({
    method: "GET",
    url: `/api/lists/${listId}`
  })
};

export const createList = list => {
  return $.ajax({
    method: "POST",
    url: "/api/lists/",
    data: { list }
  })
}

export const editList = list => {
  return $.ajax({
    method: "PATCH",
    url: `/api/lists/${list.id}`,
    data: { list }
  })
}

export const deleteList = listId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/lists/${listId}`
  })
}