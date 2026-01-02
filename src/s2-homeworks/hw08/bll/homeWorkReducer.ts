import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            // Создаем копию массива, чтобы не мутировать исходный state
            const sortedState = [...state]

            if (action.payload === 'up') {
                // сортировка по имени A → Z
                return sortedState.sort((a, b) =>
                    a.name.localeCompare(b.name)
                )
            } else if (action.payload === 'down') {
                return sortedState.sort((a, b) =>
                    b.name.localeCompare(a.name)
                )
            }

            return sortedState
        }
        case 'check': {
            // Фильтрация людей старше 18 лет (age > 18)
            return state.filter(user => user.age > action.payload)
        }
        default:
            return state
    }
}
