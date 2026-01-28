export type ThemeState = {
    themeId: number
}
const initState: ThemeState = {
    themeId: 1,
}


export type ThemeAction = ReturnType<typeof changeThemeId>

export const themeReducer = (state = initState, action: ThemeAction): ThemeState => { // fix any
    switch (action.type) {
        // дописать

        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id,
            }
        default:
            return state
    }
}

export const changeThemeId = (id: number)  => ({type: 'SET_THEME_ID', id} as const) // fix any
