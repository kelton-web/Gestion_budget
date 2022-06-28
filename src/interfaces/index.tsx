import { IObjet } from "../components/Tasks/TasksCompte/RealmDataBase";

export type RouteNavigation = { /* Navigation */
    Accueil: undefined;
    Compte: undefined;
    Statistiques: undefined;
    Ajout_depenses: undefined;
    Ajout_revenus: undefined;
    InputAjoutRevenus:{
        name: string,
        lastname: string,
        amount: number,
        category: string,
        comments: string
        date: Date,
       // myUsers: IObjet,
    };
    RootTab: undefined;
    RealmDataBase: undefined;
}

export type ArrayData = {
    _id: string
    user: string
    incomes: Iincomes[]
    expenses: Iexpenses[]
}

export type Iexpenses = {
    date: string
    amount: string
    category: string
    comments: string
    _id_expense: string
}

export type Iincomes = {
    date: string
    amount: string
    category: string
    comments: string
    _id_income: string
}
export type AllData = {
    incomes: Iincomes[]
    expenses: Iexpenses[]
}

