// ValidateInput
export interface RuleProp {
    type: 'required' | 'email' | 'noRules'
    message: string
}

export type RulesProp = RuleProp[]

//validateForm
export type ValidateFunc = () => boolean

export interface ColumnProps {
    id: number
    title: string
    avatar?: string
    description: string
}

export interface PostProps {
    id: number
    title: string
    cover?: string
    content: string
    createdAt: string
    columnId: number
}

export interface UserProps {
    isLogin: boolean
    username?: string
    id?: number
}
