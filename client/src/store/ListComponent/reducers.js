const defaultState = {
    lang: {
        eng: {
          labelAll: "All notes",
          buttonEdit: "Edit",
          buttonSave: "Save",
          buttonDelete: "Delete",
          buttonRu: "Ru",
          buttonEng: "Eng",
          buttonAdd: "Add",
          label: "Enter note",
        },
        ru: {
          labelAll: "Все заметки",
          buttonEdit: "Изменить",
          buttonSave: "Сохранить",
          buttonDelete: "Удалить",
          buttonRu: "Ру",
          buttonEng: "Анг",
          buttonAdd: "Добавить",
          label: "Введите заметку",
        },
      },
      locale: "eng",
      notes: [],
      note: "",
      id: 0,
      editId: "",
      editNote: "",
}
const homReducer = (state, action)=>{
    switch(action.type){
        
    }
    return state;
}