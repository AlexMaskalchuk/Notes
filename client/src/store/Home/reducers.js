import{
    HOME_DEFAULT_NOTES,
    HOME_CHANGE_LANG,
    HOME_PUSH_NOTE
} from './actions';
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
      locale: 'eng',
      notes: [],
      note: "",
      id: 0,
      editId: "",
      editNote: "",
}
export const homeReducer = (state = defaultState, action)=>{
    switch(action.type){
        case HOME_DEFAULT_NOTES:
            return{
                ...state,
                notes: action.payload
            };
        case HOME_CHANGE_LANG:
            return{
                ...state,
                locale: action.payload
            };
        case HOME_PUSH_NOTE:
            return{
                ...state,
                note: action.payload
            }
    }
    return state;
}