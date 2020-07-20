export const HOME_DEFAULT_NOTES = 'HOME_DEFAULT_NOTES';
export const HOME_CHANGE_LANG = 'HOME_CHANGE_LANG';
export const HOME_PUSH_NOTE = 'HOME_PUSH_NOTE';
export const HOME_EDIT_NOTE = 'HOME_EDIT_NOTE';
export const HOME_DELETE_NOTE = 'HOME_DELETE_NOTE';

export const setDefaultNotes = (notes) =>({
    type: HOME_DEFAULT_NOTES,
    payload: notes
})

export const changeLang = (locale) =({
    type: HOME_CHANGE_LANG,
    payload: locale
})